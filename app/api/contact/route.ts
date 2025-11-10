import { NextResponse } from 'next/server'
import { ContactSchema, type ContactInput } from '../../../lib/validation'
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
    void hp // honeypot already validated above; omit from persisted payload
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
      const subject = process.env.AUTOREPLY_SUBJECT || 'Your enquiry with Ehsan Massah Tutoring'
      const bodyText =
        process.env.AUTOREPLY_BODY ||
        `Hi ${lead.name},

Thank you for your message — I’ll reply within one business day with a bespoke lesson plan and consultation times. For anything urgent you can reach me on +44 7957 933537.

Best wishes,
Ehsan Massah`

      await transporter.sendMail({
        from: process.env.SMTP_FROM || ADMIN_EMAIL || 'no-reply@massah-inst.com',
        to: lead.email,
        subject,
        text: bodyText,
        html: buildAutoReplyHtml(lead),
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

function buildAutoReplyHtml(lead: ContactInput) {
  const accent = '#fcd34d'
  const slate900 = '#0f172a'
  const slate800 = '#1e293b'
  const slate400 = '#94a3b8'
  const highlight = '#fef3c7'

  const firstName = lead.name?.split(' ')[0] || 'there'

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Thank you</title>
      <style>
        body { margin:0; font-family:'Cormorant Garamond','Helvetica Neue',Arial,sans-serif; background:${slate900}; color:#f8fafc; }
        .outer { width:100%; padding:32px 0; }
        .container { max-width:640px; margin:0 auto; padding:0 24px; }
        .card { background:${slate800}; border-radius:30px; padding:40px; border:1px solid rgba(255,255,255,0.08); box-shadow:0 25px 45px rgba(15,23,42,0.55); }
        h1 { font-size:30px; margin:12px 0 18px; color:#fff; letter-spacing:0.04em; }
        p { font-size:16px; line-height:1.8; color:#e2e8f0; margin:0 0 14px; }
        .signature { font-size:18px; color:${highlight}; margin-top:24px; }
        .pill { display:inline-block; border-radius:999px; padding:8px 18px; font-size:12px; letter-spacing:0.35em; text-transform:uppercase; background:${accent}; color:${slate900}; font-weight:600; }
        .divider { height:1px; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); margin:28px 0; }
        .details-table { width:100%; border-collapse:collapse; }
        .details-table th { text-align:left; font-size:12px; letter-spacing:0.3em; color:${accent}; padding:8px 0 0; text-transform:uppercase; }
        .details-table td { padding:4px 0 12px; font-size:15px; color:#f1f5f9; border-bottom:1px solid rgba(148,163,184,0.2); }
        .cta { margin-top:32px; }
        .cta a { text-decoration:none; display:inline-block; padding:14px 36px; border-radius:999px; background:${accent}; color:${slate900}; letter-spacing:0.3em; font-size:12px; font-weight:600; }
        .footer { text-align:center; margin-top:28px; color:${slate400}; font-size:12px; line-height:1.8; font-family:'Helvetica Neue',Arial,sans-serif; }
      </style>
    </head>
    <body>
      <div class="outer">
        <div class="container">
          <div class="card">
            <span class="pill">Chelsea · Kensington · Fulham</span>
            <h1>Thank you, ${firstName}.</h1>
            <p>I’ve received your note and am already shaping a private briefing that matches your child’s ambition, calendar and preferred format. I’ll be in touch within one business day with consultation times and a proposed pathway.</p>
            <p>For anything time-sensitive, feel free to WhatsApp or call <a style="color:${highlight}; text-decoration:none;" href="tel:+447957933537">+44 7957 933537</a> — you always reach me directly.</p>

            <div class="divider"></div>
            <table class="details-table">
              <tbody>
                <tr>
                  <th align="left">Student level</th>
                </tr>
                <tr>
                  <td>${lead.level}</td>
                </tr>
                ${
                  lead.subjects
                    ? `<tr><th align="left">Subjects</th></tr><tr><td>${lead.subjects}</td></tr>`
                    : ''
                }
                ${
                  lead.goals
                    ? `<tr><th align="left">Goals & context</th></tr><tr><td>${lead.goals}</td></tr>`
                    : ''
                }
                <tr>
                  <th align="left">Contact</th>
                </tr>
                <tr>
                  <td>${lead.email}${lead.phone ? ` · ${lead.phone}` : ''}</td>
                </tr>
              </tbody>
            </table>

            <div class="cta">
              <a href="mailto:${process.env.ADMIN_EMAIL || 'ehsan@massah-inst.com'}?subject=Add%20details%20to%20my%20tutoring%20enquiry">Add further detail</a>
            </div>

            <p class="signature">— Ehsan</p>
          </div>

          <div class="footer">
            Ehsan Massah Tutoring · Chelsea · London · Sessions across Chelsea, Kensington, Fulham, Knightsbridge & online
          </div>
        </div>
      </div>
    </body>
  </html>`
}
