import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(2, 'Please enter a name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional().nullable(),
  level: z.string().min(1),
  subjects: z.string().optional(),
  goals: z.string().optional(),
  consent: z.boolean().refine(v => v === true, 'Consent required'),
  // honeypot: allow undefined or an empty string only
  // Use optional() + refine to avoid calling string validators after optional()
  hp: z.string().optional().refine(v => v === undefined || v === '', { message: 'honeypot must be empty' })
})

export type ContactInput = z.infer<typeof ContactSchema>
