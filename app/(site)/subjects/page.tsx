import React from 'react'
import SubjectGrid from '../../../components/SubjectGrid'

const APPROACH = [
  {
    title: 'Exam board mastery',
    description: 'Sequenced lessons for AQA, Edexcel, OCR, CIE and IB — every concept linked to the mark schemes examiners use.'
  },
  {
    title: 'Immersive resources',
    description: 'Handwritten solution banks, digital whiteboards and retrieval quizzes ensure independent study is focused.'
  },
  {
    title: 'Measured progress',
    description: 'Question-level analytics highlight micro topics to revisit so time is spent where it matters most.'
  }
]

export default function SubjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20 space-y-14">
      <header className="space-y-4 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Specialisms</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Subjects tutored</h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          From selective school entrance to A-level Further Maths, every programme is curated and taught by me with meticulous resources and calm coaching.
        </p>
      </header>

      <section>
        <SubjectGrid />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {APPROACH.map((item) => (
          <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">{item.title}</h2>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur">
        <h2 className="text-xl font-semibold text-white">Need a bespoke syllabus?</h2>
        <p className="mt-3 text-sm text-slate-200 leading-relaxed">
          I regularly support MAT, PAT, ENGAA, STEP, AEA, university foundations and international curricula. Share your requirements and I will
          confirm availability or refer you to a trusted specialist.
        </p>
        <a
          href="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-amber-200"
        >
          Discuss your goals
        </a>
      </section>
    </div>
  )
}
