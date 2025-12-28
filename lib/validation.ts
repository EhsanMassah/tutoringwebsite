import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(2, 'Please enter a name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional().nullable(),
  studentYear: z.string().min(1, 'Select a year group'),
  subjects: z.string().min(1, 'Select at least one subject'),
  target: z.string().min(1, 'Add a target grade or university'),
  timeline: z.string().optional(),
  preferredSlots: z.string().optional(),
  location: z.string().min(1, 'Choose a location'),
  packageConsent: z.boolean().refine(v => v === true, 'Please confirm you understand tutoring is delivered in packages'),
  // honeypot: allow undefined or an empty string only
  // Use optional() + refine to avoid calling string validators after optional()
  hp: z.string().optional().refine(v => v === undefined || v === '', { message: 'honeypot must be empty' })
})

export type ContactInput = z.infer<typeof ContactSchema>
