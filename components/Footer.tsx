"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const HIDE_PATHS = ['/ai-programme', '/ai-programme-waitlist']

export default function Footer() {
  const pathname = usePathname()
  const hideFooter = pathname ? HIDE_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`)) : false

  if (hideFooter) return null

  return (
    <footer className="border-t border-white/10 bg-black/60 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Ehsan Massah</p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Private Maths and Science tutoring for Chelsea, Kensington and Knightsbridge families, delivered directly by Ehsan.
          </p>
        </div>
        <div className="space-y-2 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Contact</p>
          <p><span className="text-slate-400">Phone</span> <a className="hover:text-white" href="tel:+447957933537">+44 7957 933537</a></p>
          <p><span className="text-slate-400">Email</span> <a className="hover:text-white" href="mailto:ehsan@cftutoring.com">ehsan@cftutoring.com</a></p>
          <p>
            <span className="text-slate-400">WhatsApp</span>{' '}
            <a
              className="hover:text-white"
              href="https://wa.me/447957933537?text=Hi%20Ehsan,%20I%27d%20like%20to%20arrange%20a%20free%20consultation%20for%20Maths%2FScience%20tutoring."
            >
              Message now
            </a>
          </p>
          <p>
            <a className="hover:text-white" href="/privacy">Privacy Policy</a>
          </p>
        </div>
        <div className="space-y-2 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Services</p>
          <p><a className="hover:text-white" href="/gcse-physics-tutor-london">GCSE Physics tutor in London</a></p>
          <p><a className="hover:text-white" href="/a-level-maths-tutor-london">A-Level Maths tutor in London</a></p>
          <p><a className="hover:text-white" href="/a-level-physics-tutor-london">A-Level Physics tutor in London</a></p>
          <p><a className="hover:text-white" href="/oxbridge-physics-preparation">Oxbridge Physics preparation</a></p>
          <p><a className="hover:text-white" href="/entrance-exam-tutoring-11-plus">11+ entrance exam tutoring</a></p>
        </div>
        <div className="space-y-2 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Areas served</p>
          <p>Chelsea · Kensington · Knightsbridge · Holland Park</p>
          <p>Enhanced DBS · Safeguarding certified · Fully insured</p>
          <p>London tutoring: Wimbledon • Chelsea • Fulham • Kensington • Battersea (and online)</p>
          <p><a className="hover:text-white" href="/areas-served">View areas served</a></p>
          <p><a className="hover:text-white" href="/site-map">Site map</a></p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Ehsan Massah Tutoring. All rights reserved.
      </div>
    </footer>
  )
}
