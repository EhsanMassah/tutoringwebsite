import React from 'react'
import Link from 'next/link'
import { generateSiteMetadata } from '../../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Thanks for joining the waitlist | CF Tutoring AI Programme',
  description: 'You are on the waitlist for the AI Intelligence Apprenticeship. I will follow up within 24 hours.',
  pathname: '/ai-programme-waitlist/thank-you',
})

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden border-b border-cyan-200/10 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,20,38,0.88)_0%,rgba(2,6,23,0.95)_60%)]" />
          <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-cyan-300/12 blur-[120px]" />
          <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-emerald-300/10 blur-[130px]" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100">Waitlist confirmed</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">You’re on the waitlist.</h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            I’ll reply within 24 hours to schedule a short call and confirm timing for the next cohort.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/ai-programme-waitlist"
              className="inline-flex items-center justify-center rounded-full border border-cyan-200/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-100 hover:text-white"
            >
              Back to programme
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(34,211,238,0.55)]"
            >
              Contact directly
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.12),transparent_55%)]" />
        </div>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-3xl border border-cyan-200/20 bg-white/5 p-6 text-center shadow-[0_0_26px_rgba(34,211,238,0.25)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">Next steps</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Expect a brief follow-up from Ehsan</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
              You’ll get a short note to confirm your goals, timing, and cohort fit. Keep an eye on your inbox (and spam) for the reply.
            </p>
          </div>
          <p className="mt-8 text-center text-sm text-slate-300">
            For anything urgent, email{' '}
            <a href="mailto:ehsan@cftutoring.com" className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4">
              ehsan@cftutoring.com
            </a>{' '}
            or WhatsApp{' '}
            <a href="https://wa.me/447957933537" className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4">
              +44 7957 933537
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
