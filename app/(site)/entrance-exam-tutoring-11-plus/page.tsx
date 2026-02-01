import React from 'react'
import LeadForm from '../../../components/LeadForm'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: '11+ Entrance Exam Tutoring | London, Chelsea, Wimbledon',
  description:
    '11+ tutoring in London for Chelsea, Wimbledon and Kensington families. Maths and reasoning support, mock practice and calm confidence building for top London schools.',
  keywords: [
    '11 plus tutor london',
    'chelsea 11 plus tutoring',
    'wimbledon 11 plus tutor',
    'kensington entrance exam tutor',
    '11+ maths and reasoning'
  ],
  pathname: '/entrance-exam-tutoring-11-plus'
})

const FAQS = [
  {
    q: 'Which schools do you prepare students for?',
    a: 'We align preparation with the target schools and their specific formats, focusing on Maths, English, verbal and non-verbal reasoning as required.'
  },
  {
    q: 'How early should we begin 11+ tutoring?',
    a: 'Ideally 9–12 months before exams, but shorter intensives can still be effective if the plan is focused.'
  },
  {
    q: 'Do you provide mock papers?',
    a: 'Yes. We use timed mocks and detailed feedback to build exam confidence.'
  },
  {
    q: 'Do you teach reasoning skills?',
    a: 'Yes. We focus on verbal and non-verbal reasoning patterns alongside core Maths skills.'
  },
  {
    q: 'Can sessions be online?',
    a: 'Yes. Online sessions are available and use interactive resources to keep children engaged.'
  },
  {
    q: 'How do you keep students motivated?',
    a: 'We set clear weekly goals, celebrate progress and keep practice short and meaningful.'
  }
]

export default function EntranceExamTutoring11PlusPage() {
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
              11+ entrance exam tutoring in London
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Maths · Reasoning · Confidence</p>
            <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">
              The 11+ can feel intense for families. I provide calm, structured tutoring that helps children build confidence in Maths and reasoning
              while keeping stress low. Families in Chelsea, Kensington, Fulham and Wimbledon appreciate the clarity of the plan and the gentle weekly
              milestones that keep progress steady.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Timed mock papers and feedback
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Confidence and pace building
              </span>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Check 11+ availability</h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">Share target schools and timeline — I reply within one business day.</p>
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
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Families who want a calm, clear plan</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Children can feel overwhelmed by the 11+ because the format is unfamiliar and the timing is intense. I break it down into smaller
              milestones so they feel steady and confident. We focus on core Maths fluency, verbal and non-verbal reasoning patterns, and test-taking
              stamina without overloading them.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Parents receive short updates on strengths and next steps, plus guidance on how to support practice at home without turning the week into
              a constant study session. This creates a calm environment while still keeping progress consistent.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Outcomes parents notice</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Improved confidence and reduced exam anxiety.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Faster calculation and stronger reasoning accuracy.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Clearer performance in mock papers.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Better pacing and stamina in timed tests.</li>
            </ul>
            <p className="mt-6 text-sm text-slate-300">
              Each child follows a simple progression: skills, speed, mock practice and confidence reinforcement.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">How it works</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">A steady 11+ pathway</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We start with a friendly diagnostic to understand current strengths and gaps. Then we set weekly lessons with targeted practice at home.
                We introduce timed question sets early, but in small doses, so children get used to the pacing without panic.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                As the exam approaches, we increase the frequency of mock papers and focus on exam technique: skipping and returning to tricky questions,
                checking working, and maintaining calm. Parents receive clear guidance on how to support practice at home in short, focused bursts.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Pricing approach</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                11+ tutoring is offered in structured packages so progress stays consistent. Packages include lesson delivery, bespoke worksheets and mock
                paper reviews. I’ll confirm a clear quote after a short consultation.
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                For families who want a lighter-touch programme, I can recommend a shorter plan with self-guided practice between sessions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
                >
                  Book a consultation
                </a>
                <a
                  href="/gcse-physics-tutor-london"
                  className="inline-flex items-center justify-center rounded-full border border-amber-200/50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
                >
                  GCSE Physics tutoring
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
              I work with 11+ families across Chelsea, Kensington, Fulham and Wimbledon, providing in-person sessions and online support when needed.
              The focus is on keeping children calm, confident and steadily improving without creating a stressful routine.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              If you are also considering longer-term GCSE or A-Level support, explore the <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/subjects">subjects page</a>.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Related tutoring pages</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/gcse-physics-tutor-london">GCSE Physics tutor in London</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/a-level-maths-tutor-london">A-Level Maths tutor in London</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/oxbridge-physics-preparation">Oxbridge Physics preparation</a></li>
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
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">11+ tutoring questions</h2>
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
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Book an 11+ consultation</h2>
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
              href="https://wa.me/447957933537?text=Hi%20Ehsan,%20I%27d%20like%20to%20arrange%2011%2B%20tutoring%20in%20London."
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
