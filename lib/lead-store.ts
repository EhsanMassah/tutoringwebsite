import fs from 'fs/promises'
import path from 'path'
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
