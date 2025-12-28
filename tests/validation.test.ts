import { describe, it, expect } from 'vitest'
import { ContactSchema } from '../lib/validation'

describe('ContactSchema', () => {
  it('accepts valid input', () => {
    const valid = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      studentYear: 'Year 12 (AS)',
      subjects: 'A-Level Maths',
      target: 'A*',
      location: 'Online',
      packageConsent: true,
      hp: ''
    }
    const parsed = ContactSchema.safeParse(valid)
    expect(parsed.success).toBe(true)
  })

  it('rejects missing consent', () => {
    const invalid = { name: 'x', email: 'bad', studentYear: '', subjects: '', target: '', location: '', packageConsent: false, hp: '' }
    const parsed = ContactSchema.safeParse(invalid)
    expect(parsed.success).toBe(false)
  })
})
