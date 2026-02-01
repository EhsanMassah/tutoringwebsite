import React from 'react'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Results & Case Studies | CF Tutoring London',
  description:
    'Short case studies showing outcomes from GCSE, A-Level and admissions tutoring in London. Real examples of progress, anonymised for privacy.',
  keywords: ['tutoring results london', 'gcse physics improvement', 'a level maths case study'],
  pathname: '/results'
})

const CASE_STUDIES = [
  {
    title: 'GCSE Physics: Grade 6 → 8 in one term',
    situation: 'A Year 11 student in Chelsea was losing marks on calculations and six-mark explain questions.',
    plan: 'We built a targeted formula map, weekly timed questions and structured answer frameworks.',
    outcome: 'Mock scores rose from mid-60s to high-80s, resulting in a predicted grade 8.'
  },
  {
    title: 'A-Level Maths: Consistent A/A* performance',
    situation: 'A Wimbledon student was strong in class but inconsistent in exam conditions.',
    plan: 'We introduced timed paper sections, error tracking and weekly feedback on method quality.',
    outcome: 'Accuracy improved and the student sustained A/A* in assessments across the term.'
  },
  {
    title: 'Oxbridge Physics interview preparation',
    situation: 'A Kensington student had strong grades but felt unsure in interview-style problem solving.',
    plan: 'We ran weekly mock interviews, PAT-style practice and reflection on solution strategy.',
    outcome: 'The student built confidence and communicated reasoning clearly in interview practice.'
  },
  {
    title: '11+ entrance exam tutoring',
    situation: 'A Fulham family wanted a calm plan for a child prone to exam anxiety.',
    plan: 'We focused on short, consistent practice and gradual timed mock exposure.',
    outcome: 'The child improved pacing and completed full mock papers confidently.'
  }
]

export default function ResultsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 text-slate-100">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Outcomes</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Results & case studies</h1>
        <p className="max-w-3xl text-sm text-slate-300 leading-relaxed">
          Every student is different, but the structure remains the same: diagnosis, targeted practice and measured progress. Below are anonymised
          examples of outcomes from London families across GCSE, A-Level and admissions tutoring.
        </p>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {CASE_STUDIES.map((study) => (
          <article key={study.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-white">{study.title}</h2>
            <p className="mt-3 text-sm text-slate-300"><span className="font-semibold text-slate-200">Situation:</span> {study.situation}</p>
            <p className="mt-2 text-sm text-slate-300"><span className="font-semibold text-slate-200">Plan:</span> {study.plan}</p>
            <p className="mt-2 text-sm text-slate-300"><span className="font-semibold text-slate-200">Outcome:</span> {study.outcome}</p>
          </article>
        ))}
      </section>

      <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-300">
        Want a plan tailored to your child? Book a consultation via the <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/contact">contact page</a>.
      </div>
    </div>
  )
}
