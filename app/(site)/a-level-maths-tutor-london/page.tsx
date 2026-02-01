import React from 'react'
import LeadForm from '../../../components/LeadForm'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'A-Level Maths Tutor in London | Chelsea, Wimbledon | CF Tutoring',
  description:
    'A-Level Maths tutoring in London with tailored exam technique for Chelsea, Wimbledon and Kensington students. Structured plans, timed practice and parent updates.',
  keywords: [
    'a-level maths tutor london',
    'chelsea a level maths tutor',
    'wimbledon a level maths tuition',
    'kensington maths tutor',
    'further maths support london'
  ],
  pathname: '/a-level-maths-tutor-london'
})

const FAQS = [
  {
    q: 'Do you cover A-Level Maths and Further Maths?',
    a: 'Yes. I teach A-Level Maths and Further Maths, including mechanics and statistics. We align to AQA, Edexcel and OCR specifications.'
  },
  {
    q: 'Can you help with Year 12 transitions?',
    a: 'Absolutely. We focus on proof, algebra fluency and mechanics fundamentals so the jump from GCSE feels manageable.'
  },
  {
    q: 'Do you provide exam-style timed practice?',
    a: 'Yes. Timed papers and review sessions are at the core of my approach to build accuracy under pressure.'
  },
  {
    q: 'Is online tutoring as effective as in-person?',
    a: 'It can be. I use shared whiteboards and past-paper mark schemes so progress is identical to in-person sessions.'
  },
  {
    q: 'How do you support students aiming for top grades?',
    a: 'We build speed, show efficient solution methods, and focus on proof-style reasoning and higher-mark problem types.'
  },
  {
    q: 'Do you support university admissions tests?',
    a: 'Yes. I support MAT, PAT, STEP and ESAT prep as part of the Oxbridge pathway.'
  }
]

export default function ALevelMathsTutorLondonPage() {
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
              A-Level Maths tutor in London
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">AQA · Edexcel · OCR · Further Maths</p>
            <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">
              A-Level Maths rewards precision, confidence and speed. I work directly with students to build consistent methods, reinforce weaker
              topics and sharpen exam technique. Families in Chelsea, Kensington, Fulham and Wimbledon value the calm structure and clear weekly
              updates that keep everyone aligned.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Timed exam practice every month
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Clear step-by-step correction notes
              </span>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Check A-Level Maths availability</h2>
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
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Students aiming for A–A*</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              A-Level Maths is a step up in abstraction. Students can feel confident in class but still lose marks due to algebra slips, poor structure
              or incomplete proofs. My approach builds reliable routines for each topic, so under exam pressure students know exactly how to start and
              how to present a clean solution.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              We plan around school schedules in Chelsea, Kensington and Wimbledon, and create a steady pace of practice that stops last-minute panic.
              For students targeting Oxbridge or competitive STEM courses, we add extension problems and higher-order reasoning to push them beyond the
              standard syllabus.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Outcomes parents notice</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Stronger accuracy in calculus, proof and mechanics.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Higher scores on longer, multi-part exam questions.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Consistent time management and reduced mistakes.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Confidence to articulate reasoning in clear steps.</li>
            </ul>
            <p className="mt-6 text-sm text-slate-300">
              Parents receive concise updates on what changed each week and what’s next, which helps keep school teachers and students aligned.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">How it works</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Structured, exam-led tutoring</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We begin with a diagnostic review of recent tests, then build a plan that targets the highest-yield topics for your student’s timeline.
                Each session focuses on one concept family (for example, integration techniques or sequences and series), followed by past-paper style
                practice and rapid feedback.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Students receive short, high-impact homework so the gains stick. Once foundations are secure, we shift to timed papers and mark them
                together so students understand how marks are awarded. This helps even top students move from A to A*.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Pricing approach</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                A-Level Maths tutoring is delivered in packages to keep progress steady. Packages include lesson delivery, practice sheets, and a plan
                aligned to mocks and final exams. I’ll share a clear quote after a short consultation.
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                If your child is also preparing for Physics, a combined plan can reduce overall workload while keeping topic overlap efficient.
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
                  A-Level Physics tutoring
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
              Most A-Level students I support are based in Chelsea, Kensington, Fulham and Wimbledon. I travel for in-person sessions and can switch to
              online if school or travel schedules change. Parents value the predictability: set times, consistent expectations and clear outcomes.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              If your child is also thinking about Oxbridge or Imperial, explore the <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/oxbridge-admissions">Oxbridge admissions</a> support pathway.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Related tutoring pages</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/gcse-physics-tutor-london">GCSE Physics tutor in London</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/oxbridge-physics-preparation">Oxbridge Physics preparation</a></li>
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
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A-Level Maths tutoring questions</h2>
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
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Book an A-Level Maths consultation</h2>
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
              href="https://wa.me/447957933537?text=Hi%20Ehsan,%20I%27d%20like%20to%20arrange%20A-Level%20Maths%20tutoring%20in%20London."
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
