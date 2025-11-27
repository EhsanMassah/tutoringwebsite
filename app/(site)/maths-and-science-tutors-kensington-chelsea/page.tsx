import React from 'react'
import LeadForm from '../../../components/LeadForm'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Maths & Science Tutors in Kensington & Chelsea | CF Tutoring',
  description:
    'Premium GCSE, IGCSE, IB and A-level Maths and Science tutoring for Kensington and Chelsea families. In-home or online sessions with Ehsan Massah, including entrance exam preparation for K&C schools.',
  keywords: [
    'Kensington maths tutor',
    'Chelsea science tutor',
    'South Kensington physics tutor',
    'Kensington chemistry tutor',
    'IGCSE tutor Kensington',
    'IB tutor Chelsea',
    'A-level maths tutor Kensington',
    '11+ Kensington tutor',
    '13+ Chelsea tutor'
  ],
  pathname: '/maths-and-science-tutors-kensington-chelsea'
})

const SERVICE_POINTS = [
  { title: 'GCSE, IGCSE, IB & A-level', detail: 'Rigorous Maths, Further Maths, Physics and Chemistry support with exam-board aligned resources.' },
  { title: 'In-home & online', detail: 'I travel across Kensington, South Kensington, Chelsea and Knightsbridge — hybrid options for busy weeks.' },
  { title: 'Entrance success', detail: '11+, 13+, MAT, PAT, ENGAA and STEP preparation with calm interview coaching and mock pathways.' }
]

const LOCAL_ROUTES = [
  { label: 'Chelsea & Sloane Square', note: 'Cheyne Walk, King’s Road, Cadogan Square' },
  { label: 'Kensington & South Kensington', note: 'High Street Ken, Gloucester Road, Queen’s Gate' },
  { label: 'Holland Park & Knightsbridge', note: 'Holland Villas, Ladbroke Square, Brompton Road' }
]

const PROGRAMMES = [
  {
    name: 'STEM mastery',
    detail: 'Deep problem-solving drills for GCSE/IGCSE, IB (HL/SL) and A-level with concise, elegant working.'
  },
  {
    name: 'High-impact intensives',
    detail: 'Holiday accelerators and pre-mock interventions targeted to your child’s weak strands and pacing.'
  },
  {
    name: 'Selective entry',
    detail: 'Structured practice for interview, reasoning and admissions tests for top West London day schools and Oxbridge STEM.'
  }
]

export default function KensingtonChelseaTutorsPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.08),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(15,23,42,0.55)_0%,rgba(15,23,42,0)_40%),radial-gradient(circle_at_20%_15%,rgba(248,250,252,0.08),transparent_50%)]" />
          <div className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Kensington · Chelsea · Knightsbridge</p>
            <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
              Maths & Science tutors for Kensington & Chelsea families
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">GCSE · IGCSE · IB · A-level · 11+ · 13+</p>
            <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">
              I personally deliver every lesson — combining calm mentorship with sharp diagnostics so your child makes confident progress without noise.
              You receive clear post-session notes and access to bespoke practice sets built for K&C school calendars.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Imperial, Westminster, Godolphin and St Paul’s familiarity
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Enhanced DBS, safeguarding certified
              </span>
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <h2 className="text-lg font-semibold text-white sm:text-xl">Arrange a Kensington/Chelsea briefing</h2>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">Share your child’s targets — I reply within one business day.</p>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Why parents pick CF Tutoring</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">High-touch tutoring without agency turnover</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              You speak and work directly with me — no rotating tutors or hand-offs. I maintain local travel routes, safeguarding checks and quiet,
              respectful in-home setups across Chelsea, South Kensington, Holland Park and Knightsbridge.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {SERVICE_POINTS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-200/80">{item.title}</div>
                <p className="mt-2 text-sm text-slate-200 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Service area</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Planned routes for K&C households</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-300 leading-relaxed">
                Travel and timing are baked into the fee so lessons start on time and stay calm. For demanding weeks we can switch to online sessions
                without losing momentum.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Chelsea · Kensington · Knightsbridge</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {LOCAL_ROUTES.map((route) => (
              <div key={route.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-sm font-semibold text-white">{route.label}</div>
                <p className="mt-2 text-sm text-slate-300">{route.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Programmes</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Precision plans for Kensington & Chelsea schools</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              I map teaching to each school’s exam board and internal calendar — from Godolphin & Latymer mocks to Westminster pre-tests and IB
              deadlines. You receive concise weekly feedback, score-tracking and curated practice sets aligned to those dates.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              {PROGRAMMES.map((programme) => (
                <li key={programme.name} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                  <div>
                    <div className="font-semibold">{programme.name}</div>
                    <p className="text-slate-300">{programme.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">What happens next</h3>
            <ol className="mt-5 space-y-4 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-xs font-bold text-slate-950">1</span>
                <div>
                  <div className="font-semibold">Briefing call</div>
                  <p className="text-slate-300">We clarify the target exams, school context and timetable constraints.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-xs font-bold text-slate-950">2</span>
                <div>
                  <div className="font-semibold">Diagnostic session</div>
                  <p className="text-slate-300">I run calm diagnostics to surface knowledge gaps and exam behaviours.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-300 text-xs font-bold text-slate-950">3</span>
                <div>
                  <div className="font-semibold">Bespoke plan</div>
                  <p className="text-slate-300">You receive a tight plan with session rhythm, resources and travel/online mix.</p>
                </div>
              </li>
            </ol>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p><span className="font-semibold text-amber-200">Availability:</span> Limited evening slots; weekend mornings on request.</p>
              <p><span className="font-semibold text-amber-200">Travel:</span> Included across Chelsea, Kensington, South Kensington and Knightsbridge.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
              >
                Book a consultation
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-amber-200/40 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
                href="https://wa.me/447957933537?text=Hi%20Ehsan,%20I%27d%20like%20to%20arrange%20a%20free%20consultation%20for%20Maths%2FScience%20tutoring."
              >
                WhatsApp for availability
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] px-8 py-10 text-center shadow-2xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Ready to begin?</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Chelsea & Kensington tutoring led directly by Ehsan</h2>
          <p className="mt-3 text-sm text-slate-300">
            Share your child’s goals and timeline — I’ll reply within one business day with next steps.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
            >
              Arrange a call
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-amber-200/40 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
              href="mailto:ehsan@cftutoring.com"
            >
              Email ehsan@cftutoring.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
