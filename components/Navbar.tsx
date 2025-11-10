import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/subjects', label: 'Subjects' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Resources' },
  { href: '/contact', label: 'Contact' }
]

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center">
          <span className="sr-only">Ehsan Massah Tutoring</span>
          <Image src="/images/Logos-3.svg" alt="Ehsan Massah Tutoring logo" width={1500} height={1500} priority className="h-40 w-auto -my-6" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300 hover:text-amber-200">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-amber-200"
          >
            Enquire
          </Link>
        </nav>
        <div className="md:hidden">
          <a href="tel:+447957933537" className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            +44 7957 933537
          </a>
        </div>
      </div>
    </header>
  )
}
