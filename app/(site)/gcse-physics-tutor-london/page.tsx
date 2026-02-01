import React from 'react'
import LeadForm from '../../../components/LeadForm'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'GCSE Physics Tutor in London | Chelsea, Wimbledon | CF Tutoring',
  description:
    'Premium GCSE Physics tutoring in London for Chelsea, Wimbledon and Kensington families. Calm diagnostics, exam technique and weekly progress notes. Book a consultation.',
  keywords: [
    'gcse physics tutor london',
    'chelsea gcse physics tutor',
    'wimbledon physics tutor',
    'kensington gcse physics tuition',
    'gcse science tutoring london'
  ],
  pathname: '/gcse-physics-tutor-london'
})

const FAQS = [
  {
    q: 'Do you teach triple science and combined science GCSE Physics?',
    a: 'Yes. We align every plan to your exam board and specification so students see the exact command words, formulae and practical contexts they will meet in their papers.'
  },
  {
    q: 'Can sessions be in Chelsea or Wimbledon?',
    a: 'Yes. I travel across Chelsea, Kensington, Fulham and Wimbledon, with online sessions available for busy weeks or travel.'
  },
  {
    q: 'How quickly do you see results?',
    a: 'Most students see measurable progress within 4–6 weeks once we establish a weakness map and a rhythm of timed practice.'
  },
  {
    q: 'Do you set homework between lessons?',
    a: 'Yes. Homework is short and precise: targeted question sets, flashcards or a single paper section to build confidence without overload.'
  },
  {
    q: 'What if my child is anxious about Physics?',
    a: 'We slow the pace at the beginning, rebuild confidence with low-stakes problems and explain the “why” behind each model before ramping up difficulty.'
  },
  {
    q: 'Do you help with mocks and predicted grades?',
    a: 'Absolutely. We map the plan to mock dates, set clear targets, and provide feedback you can share with teachers.'
  }
]

export default function GcsePhysicsTutorLondonPage() {
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
              GCSE Physics tutor in London
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">AQA · Edexcel · OCR · IGCSE</p>
            <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">
              I work directly with GCSE Physics students who want calm, structured progress. Every plan starts with a diagnostic that identifies the
              exact misconceptions and question types causing dropped marks. From there we build a clean revision pathway that keeps students confident
              and parents updated.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Weekly progress notes for parents
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Travel across Chelsea, Kensington, Fulham, Wimbledon
              </span>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Check GCSE Physics availability</h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">Share exam board, targets and timing — I reply within one business day.</p>
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
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Students who want clarity, not overwhelm</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              GCSE Physics can feel dense because it mixes calculations, definitions and unfamiliar contexts. I slow the content down to its underlying
              models and then re-build speed with exam-board aligned practice. This is ideal for students who are capable but inconsistent, or those
              who feel anxiety during timed papers.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Families in Chelsea, Kensington, Fulham and Wimbledon often need a tutor who can integrate school timelines, mock dates and travel into a
              calm weekly rhythm. I provide that structure with concise homework, gentle accountability and a clear plan so you always know what is
              changing week to week.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Results parents typically see</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Clearer explanations of forces, energy, electricity and waves.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Faster problem set-up with correct units and formula selection.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Higher marks in 6-mark explain questions due to structure and vocabulary.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Better mock performance and more accurate predicted grades.</li>
            </ul>
            <div className="mt-6 text-sm text-slate-300">
              Many students move from a 5/6 to a 7/8 once the knowledge gaps are cleaned up and we build timing discipline. We track those changes with
              weekly notes you can share with school teachers.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">How it works</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">A calm, repeatable GCSE plan</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every GCSE Physics programme is built around three pillars: diagnosis, practice and refinement. We start by reviewing recent school
                assessments or set a mini diagnostic paper. That data tells us which topic strands, question types and practical write-ups are pulling
                down the grade.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Next, we create a weekly rhythm: one focused lesson, one targeted homework set, and one mini review. This stops revision from feeling
                endless and gives parents a simple view of progress. If your child is working towards a 7–9, we layer in higher-tier reasoning tasks and
                teach them how to decode command words quickly under time pressure.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Pricing approach</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                GCSE Physics support is delivered in structured packages to maintain momentum. Packages include lesson delivery, bespoke worksheets,
                optional parent updates and travel across London zones for Chelsea, Kensington and Wimbledon routes. You receive a clear quote after the
                initial consultation, based on intensity and timelines.
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                If you need a rapid intervention before mocks, I can recommend a shorter intensive plan with a compact homework schedule. For longer
                programmes, we map the weeks to school deadlines to keep stress low.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
                >
                  Book a consultation
                </a>
                <a
                  href="/a-level-physics-tutor-london"
                  className="inline-flex items-center justify-center rounded-full border border-amber-200/50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
                >
                  A-Level Physics support
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
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Chelsea, Kensington, Fulham & Wimbledon</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              I regularly travel between Chelsea, Kensington, Fulham and Wimbledon, and can also support students online if the timetable is tight.
              Parents appreciate that sessions start on time, and that every lesson includes a short recap so they can monitor progress. If you are
              outside these areas, I can still help online, and the structure remains exactly the same.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              If your child is also taking Maths, it can be efficient to coordinate Physics and Maths support together. You can explore the full
              subject list on the <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/subjects">subjects page</a>.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Related tutoring pages</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/a-level-maths-tutor-london">A-Level Maths tutor in London</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/oxbridge-physics-preparation">Oxbridge Physics preparation</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/entrance-exam-tutoring-11-plus">11+ entrance exam tutoring</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/maths-and-science-tutors-kensington-chelsea">Kensington & Chelsea tutoring</a></li>
            </ul>
            <p className="mt-4 text-sm text-slate-300">
              Prefer to ask questions directly? Reach me on <a className="underline decoration-amber-200/60 hover:text-white" href="mailto:ehsan@cftutoring.com">ehsan@cftutoring.com</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">FAQs</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">GCSE Physics tutoring questions</h2>
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
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Book a GCSE Physics consultation</h2>
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
              href="https://wa.me/447957933537?text=Hi%20Ehsan,%20I%27d%20like%20to%20arrange%20GCSE%20Physics%20tutoring%20in%20London."
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
