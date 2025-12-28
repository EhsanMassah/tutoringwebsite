import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Ehsan Massah</p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Private Maths and Science tutoring for Chelsea, Kensington and Knightsbridge families, delivered directly by Ehsan.
          </p>
        </div>
        <div className="space-y-2 text-sm text-slate-300">
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
          <p>Chelsea · Kensington · Knightsbridge · Holland Park</p>
          <p>Enhanced DBS · Safeguarding certified · Fully insured</p>
          <p>London tutoring: Wimbledon • Chelsea • Fulham • Kensington • Battersea (and online)</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Ehsan Massah Tutoring. All rights reserved.
      </div>
    </footer>
  )
}
