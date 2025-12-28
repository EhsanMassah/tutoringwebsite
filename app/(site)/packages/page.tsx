import React from 'react'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Tutoring Packages | GCSE & A-Level Maths, Physics | London',
  description: 'Outcome-based Physics and Maths tutoring packages in London for GCSE, A-Level, Further Maths and Oxbridge/Imperial admissions.',
  keywords: ['tutoring packages london', 'maths packages london', 'oxbridge interview tutor london'],
  pathname: '/packages',
})

const PACKAGES = [
  {
    id: 'alevel-turnaround',
    name: 'A-Level Maths / Further Maths Turnaround',
    hours: '10 hours',
    price: '£1,300–£1,500',
    includes: ['Initial diagnostic + plan', 'Exam technique + timed practice', 'Weekly targets + homework review'],
  },
  {
    id: 'oxbridge-interview',
    name: 'Oxbridge / Imperial Interview Sprint',
    hours: '8 hours',
    price: '£1,200',
    includes: ['Interview-style problem sets', 'Solution walkthroughs + strategy', 'Confidence building + pacing'],
  },
  {
    id: 'gcse-grade-boost',
    name: 'GCSE Grade Boost',
    hours: '12 hours',
    price: '£1,200',
    includes: ['Weakness map + revision plan', 'High-mark questions + method', 'Exam paper drills'],
  },
]

const FAQ_ITEMS = [
  {
    question: 'Do you offer single sessions?',
    answer: 'I work in packages to keep momentum and measure progress. If you need something ad hoc, we can discuss it after an initial block.',
  },
  {
    question: 'Online vs in-person?',
    answer: 'I teach across London (Chelsea, Kensington, Fulham, Wimbledon, Battersea) and online when travel is tight. Hybrid plans are common.',
  },
  {
    question: 'How quickly can grades improve?',
    answer: 'Students usually see clearer working and confidence within 3–4 sessions, with grade shifts following once exam-technique drills bed in.',
  },
  {
    question: 'How does admissions prep work?',
    answer: 'We combine mock interviews, problem-solving under gentle pressure, and debriefs that refine how students articulate their thinking.',
  },
]

export default function PackagesPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20 space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <header className="space-y-4 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Packages</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Structured tutoring programmes</h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Outcome-based Physics and Maths tutoring for GCSE, A-Level, Further Maths and Oxbridge/Imperial interviews. Packages keep pace steady and
          communication clear for parents.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <article
            key={pkg.id}
            id={pkg.id}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-xl backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">{pkg.hours}</p>
            <h2 className="mt-2 text-xl font-semibold text-white">{pkg.name}</h2>
            <p className="mt-2 text-sm text-slate-200">From {pkg.price}</p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-200 leading-relaxed">
              {pkg.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-[1px] hover:bg-amber-200"
            >
              Enquire for availability
            </a>
          </article>
        ))}
      </section>

      <div className="rounded-3xl border border-amber-200/50 bg-amber-50/10 px-6 py-6 text-sm text-amber-100 shadow-lg">
        <p className="font-semibold text-amber-200">Important note</p>
        <p className="mt-2 text-slate-100">
          I take on a limited number of students each term to maintain quality. Tutoring is delivered in packages to ensure continuity and measurable
          progress.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-sm text-slate-200 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">{item.question}</p>
              <p className="mt-3 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center space-y-4">
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-[1px] hover:bg-amber-200"
        >
          Check availability
        </a>
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Response within 24–48 hours</p>
      </div>
    </div>
  )
}
