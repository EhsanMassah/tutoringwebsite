import { NextResponse } from 'next/server'
import { ContactSchema } from '../../../lib/validation'
import { saveLead } from '../../../lib/lead-store'
import nodemailer from 'nodemailer'

// Simple in-memory rate limit — for production replace with Redis or KV
const RATE_LIMIT_WINDOW = 1000 * 60 * 5 // 5 minutes
const MAX_PER_WINDOW = 10
const ipMap = new Map<string, { count: number; reset: number }>()

export async function POST(req: Request) {
  try {
    const forward = req.headers.get('x-forwarded-for')
    const ip = forward ? forward.split(',')[0].trim() : (req.headers.get('x-real-ip') || 'local')
    const now = Date.now()
    const entry = ipMap.get(ip) || { count: 0, reset: now + RATE_LIMIT_WINDOW }
    if (now > entry.reset) {
      entry.count = 0
      entry.reset = now + RATE_LIMIT_WINDOW
    }
    if (entry.count >= MAX_PER_WINDOW) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }

    const body = await req.json()

    // honeypot (quick early reject for obvious bots)
    if (typeof body.hp === 'string' && body.hp.length > 0) return NextResponse.json({ error: 'Spam detected' }, { status: 400 })

    const parsed = ContactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed', issues: parsed.error.issues }, { status: 400 })
    }

    // increment
    entry.count += 1
    ipMap.set(ip, entry)

    const { hp, ...lead } = parsed.data
    const leadRecord = {
      ...lead,
      submittedAt: new Date().toISOString(),
      ip,
      userAgent: req.headers.get('user-agent')
    }

    try {
      await saveLead(leadRecord)
    } catch (err) {
      console.error('Failed to persist lead', err)
    }

    // send email to admin if SMTP configured
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL
    const smtpHost = process.env.SMTP_HOST
    const hasSMTP = Boolean(smtpHost)
    let transporter: nodemailer.Transporter | null = null

    if (hasSMTP) {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
        secure: Boolean(process.env.SMTP_SECURE === 'true'),
      })
    }

    if (transporter && ADMIN_EMAIL) {
      const info = await transporter.sendMail({
        from: process.env.SMTP_FROM || ADMIN_EMAIL,
        to: ADMIN_EMAIL,
        subject: `New tutoring enquiry from ${lead.name}`,
        text: `New lead:\n${JSON.stringify(leadRecord, null, 2)}`,
      })
      console.log('Lead email sent', info.messageId)
    } else if (!ADMIN_EMAIL) {
      console.warn('ADMIN_EMAIL not configured — skipping admin notification')
    }

    const autoresponderEnabled = transporter && process.env.AUTOREPLY_DISABLED !== 'true'
    if (autoresponderEnabled && transporter) {
      const subject = process.env.AUTOREPLY_SUBJECT || 'Thank you for contacting Ehsan Massah'
      const bodyText =
        process.env.AUTOREPLY_BODY ||
        `Hi ${lead.name},

Thank you for your message — I will reply within one business day with next steps.

Best wishes,
Ehsan Massah`

      await transporter.sendMail({
        from: process.env.SMTP_FROM || ADMIN_EMAIL || 'no-reply@massah-inst.com',
        to: lead.email,
        subject,
        text: bodyText,
      })
    }

    if (!transporter) {
      console.log('Lead received (SMTP not configured)', leadRecord)
    }

    // optional autoresponse
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
