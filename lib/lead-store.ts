import fs from 'fs/promises'
import path from 'path'
import { ContactInput } from './validation'

export type StoredLead = Omit<ContactInput, 'hp'> & {
  submittedAt: string
  ip: string
  userAgent?: string | null
}

const leadsFile = path.join(process.cwd(), 'data', 'leads.json')

export async function saveLead(lead: StoredLead) {
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

  const next = [lead, ...existing].slice(0, 1000)
  await fs.writeFile(leadsFile, JSON.stringify(next, null, 2), 'utf8')
}
