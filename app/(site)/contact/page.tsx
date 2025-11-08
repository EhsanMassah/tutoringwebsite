import React from 'react'
import LeadForm from '../../../components/LeadForm'

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Enquiries</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Speak with Ehsan Massah</h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          Outline your child’s objectives and timetable. I reply within one working day with proposed consultation times and next steps.
          Fast-track support for upcoming exams can usually begin within 48 hours.
        </p>
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur">
          <h2 className="text-lg font-semibold text-white">Contact details</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li><span className="font-semibold text-amber-200/80">Phone:</span> <a href="tel:+447957933537" className="underline decoration-amber-200/60 hover:text-white">+44 7957 933537</a></li>
            <li><span className="font-semibold text-amber-200/80">Email:</span> <a href="mailto:ehsan@massah-inst.com" className="underline decoration-amber-200/60 hover:text-white">ehsan@massah-inst.com</a></li>
            <li><span className="font-semibold text-amber-200/80">WhatsApp:</span> <a href="https://wa.me/447957933537" className="underline decoration-amber-200/60 hover:text-white">Message instantly</a></li>
            <li><span className="font-semibold text-amber-200/80">Hours:</span> Monday–Sunday, 8am–9pm (UK)</li>
            <li><span className="font-semibold text-amber-200/80">Locations:</span> Chelsea, Kensington, Knightsbridge, Holland Park & online worldwide</li>
          </ul>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
          DBS cleared · Safeguarding trained · Fully insured
        </p>
      </div>
      <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-8 shadow-xl backdrop-blur">
        <h2 className="text-xl font-semibold text-white">Request a private briefing with Ehsan</h2>
        <p className="mt-2 text-sm text-slate-300">Complete the form — it takes less than a minute.</p>
        <div className="mt-6">
          <LeadForm />
        </div>
      </div>
    </div>
  )
}
