import React from 'react'
import testimonials from '../../../content/testimonials.json'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Testimonials | CF Tutoring London',
  description:
    'Read testimonials from London families who worked with CF Tutoring for GCSE, A-Level and admissions preparation.',
  keywords: ['tutoring testimonials london', 'chelsea tutor reviews', 'maths physics tutor feedback'],
  pathname: '/testimonials'
})

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 text-slate-100">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Parent feedback</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Testimonials</h1>
        <p className="max-w-3xl text-sm text-slate-300 leading-relaxed">
          Families across Chelsea, Kensington, Fulham and Wimbledon share similar feedback: calm lessons, clear explanations and reliable progress.
          Below is a selection of recent feedback from GCSE, A-Level and admissions students.
        </p>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, index) => (
          <article key={`${t.name}-${index}`} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
            <p className="text-sm text-slate-200 leading-relaxed">“{t.text}”</p>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-amber-200/80">{t.name}</p>
          </article>
        ))}
      </section>

      <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-300">
        Looking for a tailored plan? Explore <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/subjects">subjects</a> or book a consultation on the <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/contact">contact page</a>.
      </div>
    </div>
  )
}
