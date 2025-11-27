import Link from 'next/link'
import React from 'react'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'About Ehsan Massah | Private Maths & Science Tutor in Chelsea',
  description:
    'Discover the credentials, safeguarding and tutoring approach that Ehsan Massah brings to Chelsea, Kensington and Knightsbridge families.',
  keywords: ['private tutor chelsea profile', 'kensington science mentor', 'knightsbridge maths tutor experience'],
  pathname: '/about',
})

const PILLARS = [
  { title: 'Measured teaching', detail: 'Evidence-led lessons that blend calm explanation with rigorous practice.' },
  { title: 'Transparent communication', detail: 'Concise session reports and strategy check-ins delivered within 24 hours.' },
  { title: 'Personal partnership', detail: 'You work directly with me — no agency handovers, just consistent expertise.' }
]

const CREDENTIALS = [
  'STEM degree specialising in advanced mathematics and engineering principles',
  'Over 15 years and 3,000+ hours of one-to-one tutoring',
  'Enhanced DBS, safeguarding and first aid certified',
  'Member of The Tutors’ Association (Associate)'
]

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20 space-y-16">
      <section className="space-y-6">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">About Ehsan</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Guided by Ehsan Massah</h1>
        <p className="max-w-3xl text-base text-slate-300 leading-relaxed">
          I’m a full-time private tutor specialising in Maths and Science for GCSE, IGCSE, IB, A-level and the most competitive entrance exams —
          PAT, ESAT, MAT, STEP and more. For over a decade I’ve partnered with families in Chelsea, Kensington and Knightsbridge, personally
          designing and delivering each lesson with calm precision.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <article key={pillar.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">{pillar.title}</h2>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">{pillar.detail}</p>
          </article>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Experience</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          I work with students from Westminster, St Paul’s, Godolphin & Latymer, Latymer Upper, Alleyn’s and leading international schools.
          Many begin with entrance ambitions or grade restoration goals; all benefit from calm coaching, curated resources and accountability.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Lessons can be in-home or online, scheduled to fit demanding timetables. Exam board mastery, handwritten solution walk-throughs and
          diagnostic trackers ensure progress is visible and measurable.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          For families in SW1–SW7 who want a deep dive into travel, availability and exam-board alignment, see the{' '}
          <Link href="/maths-and-science-tutors-kensington-chelsea" className="font-semibold text-amber-200 hover:text-white">
            Kensington & Chelsea tutoring page
          </Link>
          .
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-lg backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">Credentials</h2>
        <ul className="space-y-3 text-sm text-slate-200">
          {CREDENTIALS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
