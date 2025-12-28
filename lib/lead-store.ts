import fs from 'fs/promises'
import path from 'path'
import { Index } from '@upstash/vector'
import { ContactInput } from './validation'

export type StoredLead = Omit<ContactInput, 'hp'> & {
  submittedAt: string
  ip: string
  userAgent?: string | null
}

const leadsFile = path.join(process.cwd(), 'data', 'leads.json')
const MAX_LEADS = 1000

const KV_REST_API_URL = process.env.KV_REST_API_URL || process.env.VERCEL_KV_REST_API_URL
const KV_REST_API_TOKEN = process.env.KV_REST_API_TOKEN || process.env.VERCEL_KV_REST_API_TOKEN

const UPSTASH_VECTOR_URL = process.env.UPSTASH_VECTOR_REST_URL
const UPSTASH_VECTOR_TOKEN = process.env.UPSTASH_VECTOR_REST_TOKEN
const UPSTASH_VECTOR_NAMESPACE = process.env.UPSTASH_VECTOR_NAMESPACE

let vectorIndex: Index<Record<string, unknown>> | null = null

function getVectorIndex() {
  if (!UPSTASH_VECTOR_URL || !UPSTASH_VECTOR_TOKEN) return null
  if (!vectorIndex) {
    vectorIndex = new Index({ url: UPSTASH_VECTOR_URL, token: UPSTASH_VECTOR_TOKEN })
  }
  return vectorIndex
}

async function saveLeadToUpstashVector(lead: StoredLead) {
  const index = getVectorIndex()
  if (!index) return false

  const idSource = `${lead.email || 'lead'}-${lead.submittedAt}`
  const id = idSource.replace(/[^a-zA-Z0-9-_:.]/g, '_')

  try {
    await index.upsert(
      [
        {
          id,
          data: JSON.stringify(lead),
          metadata: {
            name: lead.name,
            email: lead.email,
            studentYear: lead.studentYear,
            subjects: lead.subjects || null,
            target: lead.target || null,
            phone: lead.phone || null,
            location: lead.location || null,
            ip: lead.ip,
            submittedAt: lead.submittedAt
          }
        }
      ],
      UPSTASH_VECTOR_NAMESPACE ? { namespace: UPSTASH_VECTOR_NAMESPACE } : undefined
    )
    return true
  } catch (error) {
    console.error('Failed to persist lead to Upstash Vector', error)
    return false
  }
}

async function saveLeadToKV(lead: StoredLead) {
  if (!KV_REST_API_URL || !KV_REST_API_TOKEN) return false

  try {
    const response = await fetch(`${KV_REST_API_URL}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${KV_REST_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        commands: [
          ['LPUSH', 'leads', JSON.stringify(lead)],
          ['LTRIM', 'leads', '0', String(MAX_LEADS - 1)]
        ]
      })
    })

    if (!response.ok) {
      throw new Error(`KV pipeline failed with status ${response.status}`)
    }
    return true
  } catch (error) {
    console.error('Failed to persist lead to Vercel KV', error)
    return false
  }
}

export async function saveLead(lead: StoredLead) {
  if (await saveLeadToUpstashVector(lead)) return
  if (await saveLeadToKV(lead)) return

  const { dir } = path.parse(leadsFile)
  await fs.mkdir(dir, { recursive: true })

  let existing: StoredLead[] = []
  try {
    const raw = await fs.readFile(leadsFile, 'utf8')
    existing = JSON.parse(raw)
    if (!Array.isArray(existing)) existing = []
  } catch (err: any) {
    if (err?.code !== 'ENOENT') {
      console.warn('Unable to read leads store', err)
    }
  }

  const next = [lead, ...existing].slice(0, MAX_LEADS)
  await fs.writeFile(leadsFile, JSON.stringify(next, null, 2), 'utf8')
}
