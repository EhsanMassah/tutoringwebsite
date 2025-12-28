import React from 'react'
import Image from 'next/image'
import headshot from '../public/images/headshot.jpg'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.4)_0%,rgba(15,23,42,0)_45%),radial-gradient(circle_at_15%_20%,rgba(248,250,252,0.08),transparent_55%)]" />
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/80">
            Physics & Maths Specialist | London
          </span>
          <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Premium Maths & Physics Tutoring
          </h1>
          <p className="text-lg text-slate-200 sm:text-xl">
            Structured preparation for top grades and top universities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
            >
              Enquire for a slot
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-amber-200/40 px-7 py-3 text-sm font-semibold text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
              href="/packages"
            >
              View packages
            </a>
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Based in London • Limited places • Packages available</p>
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-lg sm:p-12">
              <div className="flex items-center gap-7 sm:gap-10">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/20 sm:h-44 sm:w-44">
                  <Image src={headshot} alt="Ehsan Massah headshot" fill sizes="280px" className="object-cover" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">Tutor</p>
                  <p className="text-3xl font-semibold text-white leading-tight sm:text-4xl">Ehsan Massah</p>
                  <p className="mt-3 text-sm text-slate-200 sm:text-base">15+ years guiding GCSE, A-level and Oxbridge candidates.</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 shadow-lg sm:p-8">
              <ul className="space-y-3 text-sm text-slate-200 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                  Exam-board aligned practice with timed drills
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                  Packages for consistency + clear updates to parents
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                  London-based with online option for busy weeks
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Check availability</h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">Complete the short form — I reply within 24–48 hours.</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
