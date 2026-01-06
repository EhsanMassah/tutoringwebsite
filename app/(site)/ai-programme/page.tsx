import React from 'react'
import Image from 'next/image'
import AIProgrammeForm from '../../../components/AIProgrammeForm'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'AI Intelligence Apprenticeship | CF Tutoring',
  description:
    'Application-only AI intelligence apprenticeship for exceptional 16–18-year-olds. 10 seminar-style sessions, mentorship and applied projects. Boutique cohorts of 4–6. £5,000.',
  keywords: ['AI programme for teens', 'AI apprenticeship 16-18', 'CF Tutoring AI', 'AI literacy course UK', 'Oxbridge AI preparation'],
  pathname: '/ai-programme',
})

const METRICS = [
  { label: 'Cohort size', value: '4–6 students' },
  { label: 'Investment', value: '£5,000' },
  { label: 'Format', value: '10 seminars + mentorship' },
]

const PROBLEM_POINTS = [
  'Schools and exams lag real-world AI use; guidance is shallow or contradictory.',
  'Universities assess judgment with AI, not whether AI is used.',
  'Parents need clarity before their children rely on AI shortcuts.',
]

const DESIGN = [
  {
    title: 'Seminar-level teaching',
    detail: '10 × 1.5-hour weekend seminars that dissect real cases, not tool walkthroughs.',
  },
  {
    title: 'Mentorship layer',
    detail: '4–6 one-to-one sessions designing a personal AI workflow and positioning for applications.',
  },
  {
    title: 'Applied outputs',
    detail: 'Competition submissions, a final mini-project and a mentor evaluation suitable for UCAS/interviews.',
  },
]

const PIPELINE = [
  { title: 'Define', detail: 'What problem are we solving? What does success look like?' },
  { title: 'Select', detail: 'When to use LLMs vs classifiers vs embeddings — and when to avoid AI entirely.' },
  { title: 'Use', detail: 'Work with pre-trained models, APIs and notebooks intelligently; control via prompts or configuration.' },
  { title: 'Evaluate', detail: 'Bias, hallucination, overconfidence, leakage — build checks before trusting outputs.' },
  { title: 'Trust', detail: 'Human-in-the-loop verification and ethical boundaries.' },
]

const DIFFERENTIATORS = [
  'Judgment over tool tricks',
  'Conceptual depth without unnecessary maths',
  'Mentorship from top institutions',
  'Scarcity and exclusivity',
]

const FIT = [
  'Academically strong 16–18-year-olds (independent or selective schools).',
  'Families targeting Oxbridge / Imperial / Ivy-style pathways.',
  'Students already investing in enrichment who need disciplined AI thinking.',
]

const DELIVERABLES = [
  'Personal AI usage framework (documented)',
  'Applied mini-project with mentor feedback',
  'Competition or case submission',
  'Written mentor evaluation for UCAS/interviews',
]

export default function AIProgrammePage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/5 bg-slate-950">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.08),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(8,47,73,0.6)_0%,rgba(2,6,23,0.9)_50%)]" />
          <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-cyan-300/15 blur-[120px]" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Image src="/images/Logos-3.svg" alt="CF Tutoring logo" width={100} height={40} className="h-8 w-auto" priority />
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-100">New programme by CF Tutoring</span>
              </div>
              <span className="rounded-full border border-cyan-200/40 bg-cyan-200/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-100">
                Application-only
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
                AI Intelligence Apprenticeship for 16–18-year-olds
              </h1>
              <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">
                A boutique, mentor-led pathway that teaches young thinkers to use AI with judgment — not dependence.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {METRICS.map((item) => (
                <div key={item.label} className="rounded-2xl border border-cyan-200/30 bg-white/5 p-4 shadow-lg backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                Apply for a call
              </a>
              <div className="text-sm text-slate-300">
                Not a coding course. Not a mass-market bootcamp. Built for judgement and positioning.
              </div>
            </div>
          </div>
          <div className="relative rounded-[26px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100">Why this exists</p>
              <h2 className="text-2xl font-semibold text-white">AI is unavoidable, but judgment is rare.</h2>
              <ul className="space-y-3 text-sm text-slate-200">
                {PROBLEM_POINTS.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-cyan-200/30 bg-cyan-300/10 p-4 text-sm text-cyan-50">
                The apprenticeship builds clarity before tools — avoiding “AI as shortcut” thinking that erodes admissions narratives.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-slate-950/70">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">Programme architecture</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Built for thinking, not tool demos</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Each cohort is guided personally. No over-explaining upfront — families see thinking quality in session one.
              </p>
            </div>
            <div className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-50">
              Distinct from tutoring packages
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {DESIGN.map((item) => (
              <div key={item.title} className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">{item.title}</p>
                <p className="mt-3 text-sm text-slate-200 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-8">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">What students master</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">The DSUET pipeline</h2>
            <p className="max-w-2xl text-sm text-slate-300">A disciplined frame for modern AI systems — used across cases, competitions and interviews.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {PIPELINE.map((step) => (
              <div key={step.title} className="rounded-2xl border border-cyan-200/20 bg-slate-950/60 p-4 shadow-lg">
                <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100">{step.title}</p>
                <p className="mt-2 text-sm text-slate-200 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-slate-950/70">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">Who this suits</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">High-agency students with serious ambitions</h2>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                {FIT.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm text-slate-200">
                <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100">Selection</p>
                <p className="mt-2">
                  Application + short interview. Cohorts run in London hybrid; out-of-London accepted when the profile fits.
                </p>
              </div>
            </div>
            <div className="space-y-6 rounded-[24px] border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">What families receive</p>
              <ul className="space-y-3 text-sm text-slate-200">
                {DELIVERABLES.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-cyan-200/30 bg-cyan-200/10 p-4 text-sm text-cyan-50">
                Clear documentation for UCAS/interviews while keeping the work genuinely the student’s.
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">Why this is defensible</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {DIFFERENTIATORS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-50"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-200">
                Families are buying intellectual positioning and mentorship — not certificates or commodity content.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">Risk and stewardship</p>
              <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                The curriculum emphasises principles that outlast AI hype: cognition, verification, ethics. Students learn when to decline AI,
                how to audit outputs, and how to talk about AI use without undermining academic integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="bg-slate-900/70">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">Apply</p>
                <h2 className="text-3xl font-semibold text-white">Brief call before offers are made</h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I respond within 24 hours. If there is a fit, we book a short parent/student call to confirm goals and cohort timing.
                  Places are capped to keep the cohort boutique.
                </p>
                <div className="rounded-2xl border border-cyan-200/30 bg-cyan-200/10 p-4 text-sm text-cyan-50">
                  Pricing is transparent: £5,000 per student for the full 10-session programme including mentorship.
                </div>
              </div>
              <div className="rounded-[24px] border border-cyan-200/30 bg-slate-950/80 p-6 shadow-xl">
                <AIProgrammeForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
