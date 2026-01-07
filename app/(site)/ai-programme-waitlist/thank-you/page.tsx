import React from 'react'
import Link from 'next/link'
import { generateSiteMetadata } from '../../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Thanks for joining the waitlist | CF Tutoring AI Programme',
  description: 'You are on the waitlist for the AI Intelligence Apprenticeship. We will follow up soon.',
  pathname: '/ai-programme-waitlist/thank-you',
})

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="h-16 w-full" aria-hidden="true" />
      <div className="relative overflow-hidden border-b border-cyan-200/10 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,20,38,0.88)_0%,rgba(2,6,23,0.95)_60%)]" />
          <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-cyan-300/12 blur-[120px]" />
          <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-emerald-300/10 blur-[130px]" />
          <div className="absolute left-12 top-24 h-24 w-24 rounded-full border border-cyan-200/40 bg-cyan-300/10 blur-[1px] opacity-70 animate-ping" />
          <div className="absolute right-16 top-32 h-32 w-32 rounded-full border border-emerald-200/40 bg-emerald-300/10 blur-[1px] opacity-60 animate-pulse" />
          <div className="absolute right-1/3 bottom-10 h-20 w-20 rotate-12 border border-cyan-200/30 bg-white/5 backdrop-blur-sm opacity-70 animate-bounce" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-40 text-center sm:py-48">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100">Waitlist confirmed</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">You’re on the waitlist.</h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Thanks for registering your interest. You’ll receive a short follow-up with next steps.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/ai-programme-waitlist"
              className="inline-flex items-center justify-center rounded-full border border-cyan-200/60 bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 text-slate-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] shadow-[0_0_20px_rgba(34,211,238,0.4)] transition hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(34,211,238,0.55)]"
            >
              Back to programme
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.12),transparent_55%)]" />
        </div>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-center text-sm text-slate-300">
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
