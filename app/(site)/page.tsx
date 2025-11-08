import React from 'react'
import Hero from '../../components/Hero'
import SubjectGrid from '../../components/SubjectGrid'
import TestimonialRotator from '../../components/TestimonialRotator'
import CTASection from '../../components/CTASection'
import FAQ from '../../components/FAQ'

const ACCENTS = [
  { label: '10+ yrs', caption: 'of specialised Maths & Science tutoring' },
  { label: '92%', caption: 'achieve or exceed target grades' },
  { label: '24h', caption: 'personal response time for new enquiries' }
]

const PROGRAMMES = [
  {
    title: 'Entrance programme',
    summary: '11+ and 13+ preparation with bespoke reasoning drills and interview polish.'
  },
  {
    title: 'Examination suite',
    summary: 'GCSE, IGCSE and IB mastery focused on elegant working and calm exam execution.'
  },
  {
    title: 'Sixth form mentoring',
    summary: 'Further Maths and Physics guidance, university preparation and aptitude support.'
  }
]

const PROCESS = [
  { title: 'Curate', detail: 'Private consultation to understand ambitions, timelines and preferred format.' },
  { title: 'Design', detail: 'Precision diagnostics shape the lesson architecture and resources.' },
  { title: 'Guide', detail: 'Quiet, focused tuition with measured feedback after every session.' }
]

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Hero />

      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6 py-10">
          {ACCENTS.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="text-3xl font-semibold text-amber-300 sm:text-4xl">{item.label}</span>
              <span className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">{item.caption}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Programmes</h2>
            <p className="mt-3 max-w-md text-sm text-slate-300">
              Calm, deliberate teaching directly with me in your Chelsea or Kensington home, or online when travel demands it.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {PROGRAMMES.map((programme) => (
              <article key={programme.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-lg backdrop-blur">
                <h3 className="text-lg font-semibold text-white">{programme.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{programme.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Subjects</h2>
              <p className="mt-3 max-w-lg text-sm text-slate-300">
                Mathematics, Further Mathematics, Physics, Chemistry and bespoke entrance preparation delivered with polish and discretion.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Exam boards AQA · Edexcel · OCR · CIE · IB</p>
          </div>
          <SubjectGrid />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] px-8 py-10 text-center shadow-2xl backdrop-blur">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">A composed path to results</h2>
          <p className="mt-3 text-sm text-slate-300">Every stage is handled personally by Ehsan Massah.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {PROCESS.map((item) => (
              <div key={item.title} className="space-y-3 border border-white/10 bg-white/5 p-5 text-left">
                <span className="text-xs uppercase tracking-[0.3em] text-amber-200/70">{item.title}</span>
                <p className="text-sm text-slate-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-semibold text-center text-white sm:text-4xl">Trusted by London families</h2>
          <p className="mt-3 text-center text-sm text-slate-300">
            Testimonials collected from long-term clients across Chelsea, South Kensington and Knightsbridge.
          </p>
          <div className="mt-8">
            <TestimonialRotator />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <FAQ />
      </section>

      <CTASection />
    </div>
  )
}
