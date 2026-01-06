import React from 'react'
import Image from 'next/image'
import AIWaitlistForm from '../../../components/AIWaitlistForm'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'AI Intelligence Apprenticeship Waitlist | CF Tutoring',
  description:
    'Join the waitlist for the boutique AI intelligence apprenticeship for exceptional 16-18-year-olds. Application-only, 4-6 students per cohort, £5,000.',
  keywords: ['AI programme waitlist', 'AI apprenticeship teens', 'CF Tutoring AI programme', 'AI literacy waitlist', 'Oxbridge AI preparation'],
  pathname: '/ai-programme-waitlist',
})

const SIGNALS = [
  { label: 'Cohort Size', value: '4-6 Students' },
  { label: 'Real-World Exposure', value: 'Competitions & Hackathons' },
  { label: 'Format', value: 'Build sprints & Mentorship' },
]

const WHY_NOW = [
  'AI is unavoidable; admissions now assess judgment with AI, not whether AI is used.',
  'Schools lag behind modern AI practice, leaving students with shallow guidance.',
  'Families need a principled, exclusive path before their children rely on shortcuts.',
]

const PROOF_POINTS = [
  'Mentorship from top academic institutions',
  'Competition-grade cases and applied mini-project',
  'Personal AI usage framework suitable for UCAS/interviews',
  'Serious, scarcity-driven positioning — not a mass-market bootcamp',
]

const INSTRUCTORS = [
  {
    name: 'Ehsan Massah',
    role: 'Programme Lead · Maths Specialist',
    education: 'MSc, Imperial College (Theoretical Physics)',
    experience: '15+ years tutoring and admissions coaching across Oxbridge, Imperial and Ivy pathways.',
    photo: '/images/headshot.jpg',
  },
  {
    name: 'Instructor Placeholder',
    role: 'AI Strategy Mentor',
    education: 'Top-tier university (CS/AI)',
    experience: 'Research or industry experience guiding students through applied AI cases.',
    photo: '/images/Logos-3.svg',
  },
  {
    name: 'Instructor Placeholder',
    role: 'Applied AI / Competitions',
    education: 'STEM postgraduate background',
    experience: 'Supports competition submissions and mini-project execution.',
    photo: '/images/Logos-2.svg',
  },
]

const DSUET = [
  { title: 'Define', copy: 'Clarify the problem and success criteria before any tool is chosen.' },
  { title: 'Select', copy: 'LLM vs classifier vs embeddings - including when to avoid AI altogether.' },
  { title: 'Use', copy: 'Operate pre-trained models, APIs and notebooks with control and intent.' },
  { title: 'Evaluate', copy: 'Bias, hallucination, overconfidence, leakage - verify before trusting.' },
  { title: 'Trust', copy: 'Human-in-the-loop judgment and ethical boundaries.' },
]

export default function AIProgrammeWaitlistPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-cyan-200/10 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(34,211,238,0.16),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,20,38,0.82)_0%,rgba(2,6,23,0.95)_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:120px_120px]" />
          <div className="absolute right-4 top-6 h-72 w-72 rounded-full bg-cyan-300/15 blur-[120px]" />
          <div className="absolute -left-10 bottom-6 h-64 w-64 rounded-full bg-emerald-300/12 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-cyan-200/30 bg-white/5 px-3 py-2 shadow-[0_0_24px_rgba(34,211,238,0.25)]">
              <Image src="/images/Logos-3.svg" alt="CF Tutoring logo" width={90} height={32} className="h-7 w-auto" priority />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-100">New programme by CF Tutoring</span>
            </div>
            <span className="rounded-full border border-cyan-200/40 bg-cyan-200/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-100">
              Waitlist open
            </span>
            <span className="rounded-full border border-cyan-200/40 bg-cyan-200/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-100">
              Application-only
            </span>
            <span className="rounded-full border border-emerald-200/40 bg-emerald-200/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-emerald-50">
              Pilot cohort — applications open
            </span>
          </div>
          <div className="mt-10 space-y-10 text-center lg:space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold leading-[1.05] text-white drop-shadow-[0_10px_45px_rgba(34,211,238,0.35)] sm:text-6xl md:text-7xl animate-hero-rise">
                Join the AI Apprenticeship for Future Leaders
              </h1>
              <p className="mx-auto max-w-3xl text-base text-slate-200 sm:text-lg">
                A mentor-led pathway introducing exceptional teenagers to applied artificial intelligence and modern problem-solving.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-100">
                <span className="rounded-full border border-cyan-200/40 bg-cyan-200/10 px-3 py-1">4-6 students</span>
                <span className="rounded-full border border-cyan-200/40 bg-cyan-200/10 px-3 py-1">Mentor-led</span>
                <span className="rounded-full border border-cyan-200/40 bg-cyan-200/10 px-3 py-1">Project sprints</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {SIGNALS.map((item) => (
                  <div
                    key={item.label}
                    className="h-full rounded-2xl border border-cyan-200/30 bg-white/5 p-5 shadow-[0_0_30px_rgba(34,211,238,0.22)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/60"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.45)] transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
                >
                  Join the waitlist
                </a>
                <a
                  href="#unique"
                  className="inline-flex items-center justify-center rounded-full border border-cyan-200/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-100 hover:text-white"
                >
                  See outcomes
                </a>
              </div>
            </div>
            <div className="mx-auto max-w-4xl space-y-5 rounded-[24px] border border-cyan-200/30 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-950/80 p-6 shadow-[0_0_38px_rgba(34,211,238,0.28)] backdrop-blur text-left">
              <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100">Why now</p>
              <ul className="space-y-3 text-sm text-slate-200">
                {WHY_NOW.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-cyan-200/30 bg-cyan-200/10 p-4 text-sm text-cyan-50 shadow-inner shadow-cyan-200/20">
                The programme builds clarity before tools — avoiding &ldquo;AI shortcut&rdquo; narratives that harm admissions positioning.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-slate-950/70">
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-8">
          <div className="space-y-2 text-center">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">Instructors</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Mentors who teach judgment, not shortcuts</h2>
            <p className="text-sm text-slate-300">Led personally and supported by AI specialists for competition and project depth.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INSTRUCTORS.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-5 shadow-[0_0_28px_rgba(34,211,238,0.2)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-100/50"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border border-cyan-200/30 bg-slate-900 shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                    <Image src={person.photo} alt={person.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{person.name}</p>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-100">{person.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-200">
                  <span className="text-slate-400">Education:</span> {person.education}
                </p>
                <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                  <span className="text-slate-400">Experience:</span> {person.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="unique" className="border-b border-white/5 bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-10">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">What’s unique</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Judgment, mentorship, and applied outputs</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-6 shadow-[0_0_28px_rgba(34,211,238,0.2)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/50">
              <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100">Proof points</p>
              <ul className="space-y-3 text-sm text-slate-200">
                {PROOF_POINTS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-300">
                Pricing is transparent: £5,000 for the full 10-session programme including mentorship. We interview each student before
                confirming a place.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-6 shadow-[0_0_28px_rgba(34,211,238,0.2)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/50">
              <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100">The DSUET pipeline</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {DSUET.map((item) => (
                  <div key={item.title} className="h-full rounded-xl border border-cyan-200/30 bg-slate-950/70 p-4 shadow-[0_0_18px_rgba(34,211,238,0.18)] transition hover:-translate-y-1 hover:border-cyan-100/60">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-200 leading-relaxed">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-slate-950/70">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-[28px] border border-cyan-200/30 bg-gradient-to-br from-slate-900/85 via-slate-900/60 to-slate-950/85 p-8 shadow-[0_0_38px_rgba(34,211,238,0.3)] backdrop-blur">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">Waitlist</p>
                <h2 className="text-3xl font-semibold text-white">Be first in line for the next cohort</h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I reply within 24 hours. If there is a fit, we schedule a short call to confirm goals and timing. Places are held only after
                  interview — the waitlist secures priority contact.
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100">
                  <span className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1">Scarcity matters</span>
                  <span className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1">Direct contact</span>
                  <span className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1">No mass email</span>
                </div>
              </div>
              <div className="rounded-[24px] border border-cyan-200/30 bg-slate-950/80 p-6 shadow-[0_0_24px_rgba(34,211,238,0.25)]">
                <AIWaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
