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
    const normalizedLead: ContactInput = {
      ...lead,
      name: titleCase(lead.name || ''),
    }
    void hp // honeypot already validated above; omit from persisted payload
    const leadRecord = {
      ...normalizedLead,
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
        subject: `New tutoring enquiry from ${normalizedLead.name}`,
        text: `New lead:\n${JSON.stringify(leadRecord, null, 2)}`,
      })
      console.log('Lead email sent', info.messageId)
    } else if (!ADMIN_EMAIL) {
      console.warn('ADMIN_EMAIL not configured — skipping admin notification')
    }

    const isWaitlist = (normalizedLead.subjects || '').toLowerCase().includes('waitlist') || (normalizedLead.location || '').toLowerCase().includes('waitlist')
    const autoresponderEnabled = transporter && process.env.AUTOREPLY_DISABLED !== 'true'
    if (autoresponderEnabled && transporter) {
      const subject = isWaitlist
        ? (process.env.AUTOREPLY_SUBJECT || 'AI Apprenticeship Waitlist — Confirmation')
        : (process.env.AUTOREPLY_SUBJECT || 'Your private tutoring briefing')

      const bodyText = isWaitlist
        ? (process.env.AUTOREPLY_BODY ||
          `Hi ${normalizedLead.name},

You’re on the waitlist for the AI Intelligence Apprenticeship. I’ll review your note and follow up with the next available cohort details and a brief call slot.

For anything urgent, you can WhatsApp me on +44 7957 933537.

Thank you,
Ehsan Massah`)
        : (process.env.AUTOREPLY_BODY ||
          `Hi ${normalizedLead.name},

Thank you for your message — I’ll reply within one business day with a bespoke lesson plan, recommended package and consultation times. For anything urgent you can reach me on +44 7957 933537.

Best wishes,
Ehsan Massah`)

      await transporter.sendMail({
        from: process.env.SMTP_FROM || ADMIN_EMAIL || 'no-reply@massah-inst.com',
        to: normalizedLead.email,
        subject,
        text: bodyText,
        html: isWaitlist ? buildWaitlistAutoReplyHtml(normalizedLead) : buildTutoringAutoReplyHtml(normalizedLead),
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

function buildWaitlistAutoReplyHtml(lead: ContactInput) {
  const cyan = '#22d3ee'
  const emerald = '#34d399'
  const slate900 = '#0a1324'
  const slate400 = '#94a3b8'

  const firstName = lead.name?.split(' ')[0] || 'There'

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Thank you</title>
      <style>
        body { margin:0; font-family:'Inter','Helvetica Neue',Arial,sans-serif; background:${slate900}; color:#e2e8f0; }
        .outer { width:100%; padding:40px 0; background:radial-gradient(circle at 12% 20%, rgba(34,211,238,0.16), transparent 42%), radial-gradient(circle at 88% 16%, rgba(52,211,153,0.12), transparent 38%), linear-gradient(180deg, #0a1324 0%, #081021 100%); }
        .container { max-width:720px; margin:0 auto; padding:0 28px; }
        .card { position:relative; background:linear-gradient(135deg, rgba(15,23,42,0.9), rgba(8,16,33,0.92)); border-radius:32px; padding:44px; border:1px solid rgba(34,211,238,0.22); box-shadow:0 26px 60px rgba(0,0,0,0.45), 0 0 30px rgba(34,211,238,0.15); overflow:hidden; }
        .card::after { content:''; position:absolute; inset:-10% -20% auto auto; width:50%; height:50%; background:linear-gradient(135deg, rgba(34,211,238,0.28), transparent 70%); clip-path:polygon(0 0, 100% 0, 0 100%); opacity:0.6; }
        h1 { font-size:32px; margin:16px 0 18px; color:#fff; letter-spacing:-0.02em; }
        p { font-size:16px; line-height:1.8; color:#cbd5e1; margin:0 0 14px; }
        .signature { font-size:18px; color:${cyan}; margin-top:24px; font-weight:600; }
        .pill { display:inline-block; border-radius:999px; padding:9px 20px; font-size:11px; letter-spacing:0.32em; text-transform:uppercase; background:rgba(34,211,238,0.15); color:${cyan}; border:1px solid rgba(34,211,238,0.35); font-weight:700; }
        .divider { height:1px; background:linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent); margin:28px 0; }
        .details-table { width:100%; border-collapse:collapse; }
        .details-table th { text-align:left; font-size:11px; letter-spacing:0.28em; color:${cyan}; padding:10px 0 2px; text-transform:uppercase; }
        .details-table td { padding:6px 0 14px; font-size:15px; color:#f8fafc; border-bottom:1px solid rgba(148,163,184,0.16); }
        .cta { margin-top:34px; }
        .cta a { text-decoration:none; display:inline-block; padding:14px 34px; border-radius:999px; background:linear-gradient(90deg, ${cyan}, ${emerald}); color:#0b1223; letter-spacing:0.28em; font-size:12px; font-weight:700; box-shadow:0 0 24px rgba(34,211,238,0.35); }
        .footer { text-align:center; margin-top:28px; color:${slate400}; font-size:12px; line-height:1.8; font-family:'Inter','Helvetica Neue',Arial,sans-serif; }
      </style>
    </head>
    <body>
      <div class="outer">
        <div class="container">
          <div class="card">
            <span class="pill">AI Apprenticeship Waitlist</span>
            <h1>Welcome, ${firstName}.</h1>
            <p>You’re on the waitlist for the AI Intelligence Apprenticeship. I’ll review your note and reply with cohort timing, a short call slot, and how we assess fit.</p>
            <p>For anything time-sensitive, WhatsApp or call <a style="color:${cyan}; text-decoration:none;" href="tel:+447957933537">+44 7957 933537</a> — you’ll reach me directly.</p>

            <div class="divider"></div>
            <table class="details-table">
              <tbody>
                <tr><th align="left">Interest</th></tr><tr><td>${lead.subjects}</td></tr>
                <tr><th align="left">Year group</th></tr><tr><td>${lead.studentYear}</td></tr>
                <tr><th align="left">Goal</th></tr><tr><td>${lead.target}</td></tr>
                ${lead.timeline ? `<tr><th align="left">Timeline</th></tr><tr><td>${lead.timeline}</td></tr>` : ''}
                ${lead.preferredSlots ? `<tr><th align="left">Preferred slots</th></tr><tr><td>${lead.preferredSlots}</td></tr>` : ''}
                ${lead.location ? `<tr><th align="left">Location</th></tr><tr><td>${lead.location}</td></tr>` : ''}
                <tr>
                  <th align="left">Contact</th>
                </tr>
                <tr>
                  <td>${lead.email}${lead.phone ? ` · ${lead.phone}` : ''}</td>
                </tr>
              </tbody>
            </table>

            <div class="cta">
              <a href="mailto:${process.env.ADMIN_EMAIL || 'ehsan@cftutoring.com'}?subject=Add%20details%20to%20my%20AI%20apprenticeship%20waitlist">Add more context</a>
            </div>

            <p class="signature">— Ehsan</p>
          </div>

          <div class="footer">
            CF Tutoring · AI Intelligence Apprenticeship · Sessions in London & online
          </div>
        </div>
      </div>
    </body>
  </html>`
}

function buildTutoringAutoReplyHtml(lead: ContactInput) {
  const accent = '#fcd34d'
  const slate900 = '#0f172a'
  const slate800 = '#1e293b'
  const slate400 = '#94a3b8'
  const highlight = '#fef3c7'

  const firstName = lead.name?.split(' ')[0] || 'There'

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
            <span class="pill">Private tutoring</span>
            <h1>Thank you, ${firstName}.</h1>
            <p>I’ve received your note and am shaping a private briefing that matches your goals, calendar, and preferred format. I’ll send consultation times and a proposed pathway shortly.</p>
            <p>For anything time-sensitive, WhatsApp or call <a style="color:${highlight}; text-decoration:none;" href="tel:+447957933537">+44 7957 933537</a> — you’ll reach me directly.</p>

            <div class="divider"></div>
            <table class="details-table">
              <tbody>
                <tr><th align="left">Subjects</th></tr><tr><td>${lead.subjects || '—'}</td></tr>
                <tr><th align="left">Year group</th></tr><tr><td>${lead.studentYear || '—'}</td></tr>
                <tr><th align="left">Target</th></tr><tr><td>${lead.target || '—'}</td></tr>
                ${lead.timeline ? `<tr><th align="left">Timeline</th></tr><tr><td>${lead.timeline}</td></tr>` : ''}
                ${lead.preferredSlots ? `<tr><th align="left">Preferred slots</th></tr><tr><td>${lead.preferredSlots}</td></tr>` : ''}
                ${lead.location ? `<tr><th align="left">Location</th></tr><tr><td>${lead.location}</td></tr>` : ''}
                <tr>
                  <th align="left">Contact</th>
                </tr>
                <tr>
                  <td>${lead.email}${lead.phone ? ` · ${lead.phone}` : ''}</td>
                </tr>
              </tbody>
            </table>

            <div class="cta">
              <a href="mailto:${process.env.ADMIN_EMAIL || 'ehsan@cftutoring.com'}?subject=Add%20details%20to%20my%20tutoring%20enquiry">Add further detail</a>
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

function titleCase(value: string) {
  return value
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(' ')
}
