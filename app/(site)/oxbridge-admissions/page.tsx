import React from 'react'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Oxbridge & Imperial Interview Prep | Physics & Maths',
  description: 'London-based coaching for Oxbridge and Imperial STEM interviews: mock questions, problem-solving clarity, and confident delivery.',
  keywords: ['oxbridge interview prep physics', 'imperial interview tutoring', 'oxford cambridge engineering interview'],
  pathname: '/oxbridge-admissions',
})

export default function AdmissionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Admissions</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Oxbridge & Imperial STEM Interview Preparation (Physics & Maths)</h1>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          Mock interviews, rigorous problem-solving and calm delivery coaching for students aiming at Oxbridge, Imperial and other competitive STEM
          courses.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-[1px] hover:bg-amber-200"
        >
          Enquire
        </a>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">What interviewers test</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200 leading-relaxed">
            <li>Problem-solving depth and flexible reasoning</li>
            <li>Clarity of explanation under pressure</li>
            <li>How students recover from mistakes</li>
            <li>Mathematical communication and pacing</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">What we do in sessions</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200 leading-relaxed">
            <li>Mock questions drawn from Physics, Maths and applied problems</li>
            <li>Deconstructing thought process and articulating reasoning</li>
            <li>Timed responses with feedback loops</li>
            <li>Interview etiquette, tone and confidence work</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Who it’s for</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200 leading-relaxed">
            <li>Students with strong predicted grades aiming for Oxbridge or Imperial</li>
            <li>Candidates preparing for MAT, ESAT, PAT, ENGAA, or STEP</li>
            <li>Applicants who need to practise thinking aloud clearly</li>
          </ul>
        </div>
      </section>

      <div className="text-center space-y-4">
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-[1px] hover:bg-amber-200"
        >
          Enquire for an interview plan
        </a>
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Limited places each term</p>
      </div>
    </div>
  )
}
