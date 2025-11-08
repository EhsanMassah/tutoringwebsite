import React from 'react'

const PLANS = [
  {
    name: 'Core Support',
    price: '£90 / hour',
    description: 'Weekly 60-minute lessons with curated practice and rapid feedback.',
    includes: ['Diagnostic assessment', 'Lesson reports within 24hrs', 'Exam board aligned resources']
  },
  {
    name: 'Premium Progress',
    price: '£110 / hour',
    description: '75-minute sessions, marked homework and scheduled parent reviews.',
    includes: ['Tailored homework & marking', 'Monthly strategy review', 'Priority scheduling']
  },
  {
    name: 'Elite Entrance & A-level',
    price: '£140 / hour',
    description: '90-minute masterclasses for 11+, Further Maths, Oxbridge and STEP.',
    includes: ['Mock papers & interviews', 'Evening & holiday availability', 'University support on request']
  }
]

const ADD_ONS = [
  'Mock exam days with script annotations (£225 per paper)',
  'Revision intensives (2–3 hour blocks during holidays)',
  'Admissions preparation for MAT, PAT, ENGAA, STEP, AEA',
  'Collaborative plans with schools and other tutors'
]

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20 space-y-16">
      <header className="space-y-4 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Investment</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Tuition fees & programmes</h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Every programme reflects the preparation, bespoke resources and reporting I handle personally. I’ll start with a consultation to align on goals and session cadence.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <article key={plan.name} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/80">{plan.name}</h2>
            <p className="mt-4 text-2xl font-semibold text-white">{plan.price}</p>
            <p className="mt-3 flex-1 text-sm text-slate-200 leading-relaxed">{plan.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              {plan.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-amber-200"
            >
              Enquire
            </a>
          </article>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Enhancements</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-200 leading-relaxed">
            {ADD_ONS.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Logistics</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-200 leading-relaxed">
            <li>Invoices issued monthly in arrears, payable within seven days.</li>
            <li>24+ hours’ notice enables complimentary rescheduling; same-day cancellations are charged in full.</li>
            <li>Travel within Chelsea, Kensington, Knightsbridge and Holland Park included.</li>
            <li>Online sessions recorded on request with shared whiteboard notes for independent study.</li>
          </ul>
        </div>
      </section>

      <div className="text-center space-y-3">
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-amber-200"
        >
          Arrange a consultation
        </a>
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
          Limited new student spaces released each term
        </p>
      </div>
    </div>
  )
}
