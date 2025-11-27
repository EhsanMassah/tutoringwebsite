import React from 'react'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.4)_0%,rgba(15,23,42,0)_45%),radial-gradient(circle_at_15%_20%,rgba(248,250,252,0.08),transparent_55%)]" />
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/80">
            Premium GCSE · IGCSE · A-level Maths & Science | Kensington & Chelsea
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Maths & Science Tutoring
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-amber-200/80">Chelsea · Kensington · Knightsbridge · Online</p>
          <p className="mt-4 max-w-xl text-lg text-slate-200 sm:text-xl">
            Over 15 years guiding students through GCSE, A-level, IB and elite entrance exams with calm, expert precision across SW London.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
            >
              Reserve a consultation
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-amber-200/40 px-7 py-3 text-sm font-semibold text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
              href="https://wa.me/447957933537?text=Hi%20Ehsan,%20I%27d%20like%20to%20arrange%20a%20free%20consultation%20for%20Maths%2FScience%20tutoring."
            >
              WhatsApp +44 7957 933537
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300 sm:text-base">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-300" /> 15+ years of private tutoring
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-300" /> 92% target grade success
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-300" /> Specialist for PAT · ESAT · STEP
            </span>
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Request a private briefing</h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">Outline your child’s goals — I reply within one business day.</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
