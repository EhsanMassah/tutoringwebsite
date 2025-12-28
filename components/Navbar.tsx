"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/subjects', label: 'Tutoring' },
  { href: '/packages', label: 'Packages' },
  { href: '/oxbridge-admissions', label: 'Oxbridge & Admissions' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || (href.includes('#') && pathname === '/')

  return (
    <header className="border-b border-white/10 bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center">
          <span className="sr-only">Ehsan Massah Tutoring</span>
          <Image src="/images/Logos-3.svg" alt="Ehsan Massah Tutoring logo" width={1500} height={1500} priority className="h-40 w-auto -my-6" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-semibold uppercase tracking-[0.25em] transition hover:text-amber-200 ${isActive(item.href) ? 'text-amber-200' : 'text-slate-300'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-amber-200"
          >
            Book
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200"
            aria-expanded={open}
          >
            Menu
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-6 py-4 space-y-3">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm font-semibold uppercase tracking-[0.25em] ${isActive(item.href) ? 'text-amber-200' : 'text-slate-200'}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-amber-200"
              onClick={() => setOpen(false)}
            >
              Book
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
