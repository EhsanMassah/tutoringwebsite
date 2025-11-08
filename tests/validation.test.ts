import { describe, it, expect } from 'vitest'
import { ContactSchema } from '../lib/validation'

describe('ContactSchema', () => {
  it('accepts valid input', () => {
    const valid = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      level: 'GCSE',
      consent: true,
      hp: ''
    }
    const parsed = ContactSchema.safeParse(valid)
    expect(parsed.success).toBe(true)
  })

  it('rejects missing consent', () => {
    const invalid = { name: 'x', email: 'bad', level: '', consent: false, hp: '' }
    const parsed = ContactSchema.safeParse(invalid)
    expect(parsed.success).toBe(false)
  })
})
