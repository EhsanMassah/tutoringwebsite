import React from 'react'
import Hero from '../../components/Hero'
import SubjectGrid from '../../components/SubjectGrid'
import TestimonialRotator from '../../components/TestimonialRotator'
import CTASection from '../../components/CTASection'
import FAQ from '../../components/FAQ'
import { generateSiteMetadata } from '../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Physics & Maths Tutor in London | GCSE, A-Level, Oxbridge Prep',
  description:
    'Physics and Maths tutoring in London focused on exam results and Oxbridge/Imperial admissions. Packages for GCSE, A-Level, Further Maths, Physics and interview prep.',
  keywords: ['physics tutor london', 'maths tutor london', 'oxbridge interview prep physics', 'a-level maths tutor london'],
  pathname: '/',
})

const WHO_THIS_IS_FOR = [
  {
    title: 'Grade Boost (GCSE / A-Level)',
    copy: 'Raise grades fast with targeted exam technique + weakness diagnosis.',
    href: '/packages#gcse-grade-boost'
  },
  {
    title: 'High Achievers',
    copy: 'Push strong students from good to outstanding (7→9 / A→A*).',
    href: '/packages#alevel-turnaround'
  },
  {
    title: 'Oxbridge / Imperial Prep',
    copy: 'Interview-focused coaching + problem-solving depth.',
    href: '/oxbridge-admissions'
  }
]

const HOW_IT_WORKS = [
  { title: 'Enquiry (2 mins)', detail: 'Submit the short form with year group, targets and timing.' },
  { title: 'Short call', detail: 'We confirm goals, package fit and scheduling.' },
  { title: 'Assessment + plan', detail: 'Diagnostic work shapes the lesson map and practice sets.' },
  { title: 'Package delivery', detail: 'Weekly sessions + progress updates for parents.' }
]

const PACKAGE_PREVIEW = [
  {
    id: 'alevel-turnaround',
    name: 'A-Level Maths / Further Maths Turnaround',
    hours: '10 hours',
    price: '£1,300–£1,500',
    includes: ['Diagnostic + plan', 'Exam technique + timed practice', 'Weekly targets + homework review']
  },
  {
    id: 'oxbridge-interview',
    name: 'Oxbridge / Imperial Interview Sprint',
    hours: '8 hours',
    price: '£1,200',
    includes: ['Interview-style problems', 'Solution walkthroughs', 'Confidence building + pacing']
  },
  {
    id: 'gcse-grade-boost',
    name: 'GCSE Grade Boost',
    hours: '12 hours',
    price: '£1,200',
    includes: ['Weakness map + revision plan', 'High-mark questions', 'Exam paper drills']
  }
]

const OUTCOMES = [
  'Improved from Grade 6→8 in GCSE Maths within one term',
  'A-Level Physics: C→A after structured timed drills',
  'Admissions coaching for competitive STEM interviews'
]

const LANDING_PAGES = [
  {
    title: 'GCSE Physics tutor in London',
    copy: 'Diagnostics, exam technique and confidence building for GCSE Physics.',
    href: '/gcse-physics-tutor-london'
  },
  {
    title: 'A-Level Maths tutor in London',
    copy: 'Precision teaching, timed practice and consistent A/A* outcomes.',
    href: '/a-level-maths-tutor-london'
  },
  {
    title: 'A-Level Physics tutor in London',
    copy: 'Structured plans for mechanics, fields and practical write-ups.',
    href: '/a-level-physics-tutor-london'
  },
  {
    title: 'Oxbridge Physics preparation',
    copy: 'PAT/ESAT training plus interview problem solving.',
    href: '/oxbridge-physics-preparation'
  },
  {
    title: '11+ entrance exam tutoring',
    copy: 'Calm, confident Maths and reasoning support for London families.',
    href: '/entrance-exam-tutoring-11-plus'
  }
]

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Hero />

      <section className="bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Who this is for</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Parents who want calm, outcome-focused support</h2>
            <p className="text-sm text-slate-300 leading-relaxed">Clear pathways for each profile with fast communication and structured practice.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {WHO_THIS_IS_FOR.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-amber-200/70"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">{item.title}</p>
                <p className="mt-3 flex-1 text-sm text-slate-200 leading-relaxed">{item.copy}</p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">View pathway →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">How it works</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Simple, confident process</h2>
          <p className="text-sm text-slate-300 leading-relaxed">Sessions are offered in blocks/packages to keep progress consistent.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">{step.title}</p>
              <p className="mt-3 text-sm text-slate-200 leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/50">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Packages</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Structured programmes that drive results</h2>
              <p className="mt-2 text-sm text-slate-300">Move away from single lessons and into focused packages.</p>
            </div>
            <a
              href="/packages"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-[1px] hover:bg-amber-200"
            >
              View all packages
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PACKAGE_PREVIEW.map((pkg) => (
              <article key={pkg.id} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">{pkg.hours}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{pkg.name}</h3>
                <p className="mt-2 text-sm text-slate-200">From {pkg.price}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-200">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/packages#${pkg.id}`}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-amber-200/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200 transition hover:-translate-y-[1px] hover:bg-amber-200 hover:text-slate-950"
                >
                  Enquire
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">High-intent tutoring</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">London tutoring pathways</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Explore dedicated pages for GCSE, A-Level and admissions support across Chelsea, Kensington and Wimbledon.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LANDING_PAGES.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-amber-200/70"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">{page.title}</p>
              <p className="mt-3 flex-1 text-sm text-slate-200 leading-relaxed">{page.copy}</p>
              <span className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Learn more →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-8" id="results">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Results / Proof</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Evidence of calm progress</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {OUTCOMES.map((outcome) => (
            <div key={outcome} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-sm text-slate-200 shadow-lg">
              {outcome}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur">
          <h3 className="text-xl font-semibold text-white">Testimonials</h3>
          <p className="mt-2 text-sm text-slate-300">From London families and admissions candidates.</p>
          <div className="mt-6">
            <TestimonialRotator />
          </div>
        </div>
      </section>

      <section className="bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16 space-y-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Subjects</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Maths, Further Maths, Physics + Admissions</h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Exam-board aligned teaching with entrance test preparation (PAT, ESAT, MAT, ENGAA, STEP) and interview coaching.
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Exam boards AQA · Edexcel · OCR · CIE · IB</p>
            </div>
            <a
              href="/subjects"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-[1px] hover:bg-amber-200"
            >
              View tutoring detail
            </a>
          </div>
          <SubjectGrid />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <FAQ />
      </section>

      <CTASection />
    </div>
  )
}
