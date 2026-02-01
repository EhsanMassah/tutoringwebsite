import React from 'react'
import LeadForm from '../../../components/LeadForm'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'A-Level Physics Tutor in London | Chelsea, Wimbledon | CF Tutoring',
  description:
    'A-Level Physics tutoring in London for Chelsea, Wimbledon and Kensington students. Structured plans, practical write-ups, and exam technique that lifts grades.',
  keywords: [
    'a-level physics tutor london',
    'chelsea a level physics tutor',
    'wimbledon physics tuition',
    'kensington physics tutor',
    'a level physics exam technique'
  ],
  pathname: '/a-level-physics-tutor-london'
})

const FAQS = [
  {
    q: 'Do you cover all exam boards?',
    a: 'Yes. I teach AQA, Edexcel, OCR and IGCSE Physics, aligning teaching to the exact specification and command words.'
  },
  {
    q: 'Can you help with required practicals?',
    a: 'Absolutely. We review practical methods, data handling, uncertainty and evaluation so students can score highly in written exams.'
  },
  {
    q: 'Is this suitable for students aiming for Medicine or Engineering?',
    a: 'Yes. We focus on strong fundamentals, problem solving and clear written explanations so students can excel in Physics and prepare for STEM applications.'
  },
  {
    q: 'How long is a typical programme?',
    a: 'Most students work in 10–20 hour packages spread across a term, with intensives before mocks or finals when needed.'
  },
  {
    q: 'Do you provide homework?',
    a: 'Yes. Homework is targeted: one or two high-impact question sets to reinforce the exact lesson focus.'
  },
  {
    q: 'Can sessions be online?',
    a: 'Yes. Online sessions are available and follow the same structure and resources as in-person lessons.'
  }
]

export default function ALevelPhysicsTutorLondonPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.08),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(15,23,42,0.55)_0%,rgba(15,23,42,0)_40%),radial-gradient(circle_at_20%_15%,rgba(248,250,252,0.08),transparent_50%)]" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">London · Chelsea · Wimbledon</p>
            <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
              A-Level Physics tutor in London
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">AQA · Edexcel · OCR</p>
            <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">
              I provide structured A-Level Physics tutoring for London students who want clarity, confidence and top grades. We target exam technique,
              practical write-ups and the problem-solving routines that unlock higher marks. Families in Chelsea, Kensington, Fulham and Wimbledon value
              the calm approach and clear weekly updates.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Focused on mechanics, electricity, fields and waves
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Practical write-ups and evaluation support
              </span>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Check A-Level Physics availability</h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">Share exam board, year group and targets — I reply within one business day.</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Who this is for</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Students who want deep understanding</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              A-Level Physics is challenging because it blends conceptual reasoning with mathematical precision. Many students know the ideas but lose
              marks in calculation accuracy or in explaining their reasoning. I help students build a reliable method: define the model, choose the
              equation, apply it cleanly and explain the result.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether your child is aiming for a secure A/B grade or an A* for competitive STEM courses, we keep the plan grounded in exam demands and
              build confidence through repeated, well-scaffolded practice.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Outcomes parents notice</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Clear explanations in 6-mark questions.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Stronger use of formulae and correct units.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Improved mock scores within one term.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> More confident lab write-ups and evaluations.</li>
            </ul>
            <p className="mt-6 text-sm text-slate-300">
              Parents receive clear progress updates and next steps after each session, so they can track momentum without micromanaging.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">How it works</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Structured, exam-driven support</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We begin with a short diagnostic and a review of school assessments. This reveals the precise topics to focus on: mechanics, electricity,
                waves, fields, or nuclear. Each session builds mastery through explanation, worked examples and targeted exam questions.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                As confidence grows, we move to timed papers and train students to show working and reasoning in the way examiners reward. I teach clear
                language for longer explanations so students can secure full marks in written questions.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Pricing approach</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Tutoring is offered in packages to maintain continuity and measurable progress. Packages include lesson delivery, bespoke practice sets,
                parent updates and travel across London for Chelsea, Kensington and Wimbledon families. I’ll provide a clear quote after a short call.
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                For students aiming for Oxbridge or top STEM programs, we can integrate admissions test preparation as a second phase.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
                >
                  Book a consultation
                </a>
                <a
                  href="/oxbridge-physics-preparation"
                  className="inline-flex items-center justify-center rounded-full border border-amber-200/50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
                >
                  Oxbridge Physics prep
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Local tutoring</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Serving Chelsea, Kensington, Fulham & Wimbledon</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              I offer in-person A-Level Physics tutoring across Chelsea, Kensington, Fulham and Wimbledon, with online options available for travel or
              timetable changes. Sessions are calm, structured and focused on the questions that move marks quickly.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              If your child needs support in Maths too, see the <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/a-level-maths-tutor-london">A-Level Maths tutor</a> page.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Related tutoring pages</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/gcse-physics-tutor-london">GCSE Physics tutor in London</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/a-level-maths-tutor-london">A-Level Maths tutor in London</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/entrance-exam-tutoring-11-plus">11+ entrance exam tutoring</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/maths-and-science-tutors-kensington-chelsea">Kensington & Chelsea tutoring</a></li>
            </ul>
            <p className="mt-4 text-sm text-slate-300">
              Prefer to ask questions directly? Email <a className="underline decoration-amber-200/60 hover:text-white" href="mailto:ehsan@cftutoring.com">ehsan@cftutoring.com</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">FAQs</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A-Level Physics tutoring questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] px-8 py-10 text-center shadow-2xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Ready to begin?</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Book an A-Level Physics consultation</h2>
          <p className="mt-3 text-sm text-slate-300">
            I’ll confirm availability, package fit and next steps within one business day.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
            >
              Arrange a call
            </a>
            <a
              href="https://wa.me/447957933537?text=Hi%20Ehsan,%20I%27d%20like%20to%20arrange%20A-Level%20Physics%20tutoring%20in%20London."
              className="inline-flex items-center justify-center rounded-full border border-amber-200/40 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
