import React from 'react'
import LeadForm from '../../../components/LeadForm'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Enquire | Physics & Maths Tutor in London',
  description:
    'Check availability for structured Physics & Maths tutoring packages in London. Share year group, targets and timing — I reply within 24–48 hours.',
  keywords: ['physics tutor enquiry london', 'maths tutor contact london', 'oxbridge interview tutor contact'],
  pathname: '/contact',
})

const LOCATION_BLURBS = [
  {
    id: 'chelsea',
    title: 'Chelsea & Sloane Square',
    copy:
      'Weekday afternoon and early evening lessons near King’s Road, Cheyne Walk and Sloane Square with permit parking coordination handled for you.',
  },
  {
    id: 'kensington',
    title: 'Kensington & South Kensington',
    copy:
      'Museum District, Gloucester Road and Holland Park families lean on my IB, MAT and PAT prep — concierge access details can be stored securely after our first visit.',
  },
  {
    id: 'fulham',
    title: 'Fulham & Parsons Green',
    copy:
      'Morning and weekend slots for Latymer Upper, Godolphin & Latymer and Emanuel students, with flexible online switches when fixtures or travel clash.',
  },
]

export default function ContactPage() {
  return (
    <div className="mx-auto space-y-10 px-6 py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Enquiries</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Check availability</h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Outline your child’s year group, targets and timeline. I reply within 24–48 hours with proposed consultation times and a recommended package.
            Fast-track support for upcoming exams can usually begin within 48 hours.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur" id="chelsea">
            <h2 className="text-lg font-semibold text-white">Contact details</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li><span className="font-semibold text-amber-200/80">Phone:</span> <a href="tel:+447957933537" className="underline decoration-amber-200/60 hover:text-white">+44 7957 933537</a></li>
              <li><span className="font-semibold text-amber-200/80">Email:</span> <a href="mailto:ehsan@cftutoring.com" className="underline decoration-amber-200/60 hover:text-white">ehsan@cftutoring.com</a></li>
              <li>
                <span className="font-semibold text-amber-200/80">WhatsApp:</span>{' '}
                <a
                  href="https://wa.me/447957933537?text=Hi%20Ehsan,%20I%27d%20like%20to%20arrange%20a%20free%20consultation%20for%20Maths%2FScience%20tutoring."
                  className="underline decoration-amber-200/60 hover:text-white"
                >
                  Message instantly
                </a>
              </li>
              <li><span className="font-semibold text-amber-200/80">Hours:</span> Monday–Sunday, 8am–9pm (UK)</li>
              <li><span className="font-semibold text-amber-200/80">Locations:</span> Chelsea, Kensington, Knightsbridge, Holland Park & online worldwide</li>
            </ul>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">
            DBS cleared · Safeguarding trained · Fully insured
          </p>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-8 shadow-xl backdrop-blur">
          <h2 className="text-xl font-semibold text-white">Share a few details</h2>
          <p className="mt-2 text-sm text-slate-300">I’ll confirm package fit, times and next steps.</p>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-3">
        {LOCATION_BLURBS.map((area) => (
          <article
            key={area.id}
            id={area.id}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-sm text-slate-200 leading-relaxed shadow-lg backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">{area.title}</p>
            <p className="mt-3">{area.copy}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
