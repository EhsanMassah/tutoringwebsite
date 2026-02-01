import React from 'react'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Areas Served | London Tutoring in Chelsea, Wimbledon & Beyond',
  description:
    'London tutoring areas served by CF Tutoring. In-person sessions across Chelsea, Kensington, Fulham, Wimbledon and nearby boroughs, plus online support.',
  keywords: [
    'chelsea tutor',
    'kensington tutor',
    'fulham tutor',
    'wimbledon tutor',
    'london tutoring areas'
  ],
  pathname: '/areas-served'
})

const AREAS = [
  { name: 'Chelsea & Sloane Square', detail: 'King’s Road, Cadogan Square, Cheyne Walk.' },
  { name: 'Kensington & South Kensington', detail: 'Gloucester Road, Queen’s Gate, Museum District.' },
  { name: 'Knightsbridge & Belgravia', detail: 'Brompton Road, Harrods vicinity, Eaton Square.' },
  { name: 'Fulham & Parsons Green', detail: 'Munster Road, Fulham Road, Hurlingham.' },
  { name: 'Wimbledon & Southfields', detail: 'Wimbledon Village, Southfields, Raynes Park.' },
  { name: 'Battersea & Clapham', detail: 'Battersea Park, Clapham Common, Northcote Road.' }
]

export default function AreasServedPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 text-slate-100">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Local tutoring</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Areas served across London</h1>
        <p className="max-w-3xl text-sm text-slate-300 leading-relaxed">
          I provide in-person Maths and Physics tutoring across West and South West London, with online sessions available worldwide. Travel is planned
          to keep sessions punctual and calm. If you are outside the areas listed below, get in touch — online support is usually an excellent fit.
        </p>
      </div>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {AREAS.map((area) => (
          <div key={area.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg">
            <h2 className="text-lg font-semibold text-white">{area.name}</h2>
            <p className="mt-2 text-sm text-slate-300">{area.detail}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Contact & NAP details</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Name: Ehsan Massah Tutoring<br />
            Phone: <a href="tel:+447957933537" className="underline decoration-amber-200/60 hover:text-white">+44 7957 933537</a><br />
            Email: <a href="mailto:ehsan@cftutoring.com" className="underline decoration-amber-200/60 hover:text-white">ehsan@cftutoring.com</a><br />
            Area served: Chelsea, Kensington, Fulham, Wimbledon, Battersea and surrounding London boroughs.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            For additional context on services, visit the <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/subjects">subjects</a> page or
            explore dedicated landing pages such as <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/gcse-physics-tutor-london">GCSE Physics tutoring</a>.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-xl">
          <iframe
            title="Service area map"
            className="h-72 w-full rounded-2xl border border-white/10"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4965.613903431116!2d-0.1715021!3d51.4873216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760546a083b65b%3A0xf7d84e727f27b75!2sChelsea%2C%20London!5e0!3m2!1sen!2suk!4v1735680000000"
          />
          <p className="mt-3 text-xs text-slate-400">Map shows the general service area (Chelsea, London).</p>
        </div>
      </section>
    </div>
  )
}
