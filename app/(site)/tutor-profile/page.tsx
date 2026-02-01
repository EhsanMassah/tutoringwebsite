import React from 'react'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Tutor Profile | Ehsan Massah',
  description:
    'Profile of Ehsan Massah, London-based Maths and Physics tutor. Qualifications, tutoring approach and who he works with across Chelsea and Wimbledon.',
  keywords: ['ehsan massah tutor profile', 'chelsea maths tutor', 'london physics tutor bio'],
  pathname: '/tutor-profile'
})

const CREDENTIALS = [
  '15+ years of one-to-one tutoring across GCSE, A-Level and admissions',
  'Enhanced DBS and safeguarding certified',
  'Member of The Tutors’ Association (Associate)',
  'Experience with AQA, Edexcel, OCR, CIE and IB curricula'
]

export default function TutorProfilePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 text-slate-100">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Tutor profile</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Ehsan Massah</h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            I’m a full-time private tutor based in London, specialising in Maths, Further Maths and Physics. I work directly with families in Chelsea,
            Kensington, Fulham and Wimbledon, and support students online worldwide. My focus is calm, structured tutoring that delivers measurable
            outcomes without stress.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Students and parents value clarity and consistency. Every programme includes a diagnostic, a weekly learning rhythm and clear feedback.
            Lessons are tailored to your child’s school, exam board and timeline, with an emphasis on accuracy, confidence and exam technique.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            I work with students at multiple levels: 11+ entry, GCSE/IGCSE, A-Level and Oxbridge/Imperial admissions. Families often choose me because
            they want a tutor who communicates clearly, provides steady structure, and builds independent study habits.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
          <h2 className="text-xl font-semibold text-white">Credentials & highlights</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            {CREDENTIALS.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-sm text-slate-300">
            For a deeper look at services, explore <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/subjects">subjects</a>,
            or read <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/testimonials">parent testimonials</a>.
          </div>
        </div>
      </div>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
        <h2 className="text-2xl font-semibold text-white">Tutoring approach</h2>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          My approach blends calm explanation with rigorous exam technique. We start with a diagnostic assessment and then build a weekly plan that
          targets specific weaknesses, strengthens reasoning and increases speed. I keep practice short but precise, so students progress without
          burnout.
        </p>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          Families in London often juggle heavy school schedules, so flexibility matters. I offer in-person tutoring across Chelsea, Kensington,
          Fulham and Wimbledon, and provide online sessions when travel or timetables make that the better option.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
          >
            Book a consultation
          </a>
          <a
            href="/gcse-physics-tutor-london"
            className="inline-flex items-center justify-center rounded-full border border-amber-200/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
          >
            GCSE Physics tutoring
          </a>
        </div>
      </section>
    </div>
  )
}
