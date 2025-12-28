import Link from 'next/link'
import React from 'react'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 md:justify-end md:px-6">
      <div className="flex items-center gap-3 rounded-full bg-slate-900/90 px-4 py-3 shadow-2xl ring-1 ring-white/10 backdrop-blur md:px-6">
        <span className="hidden text-xs uppercase tracking-[0.3em] text-amber-200/80 md:inline">Check availability</span>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-[1px] hover:bg-amber-200"
        >
          Enquire
        </Link>
      </div>
    </div>
  )
}
