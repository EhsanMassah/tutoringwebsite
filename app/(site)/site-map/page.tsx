import React from 'react'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Site Map | CF Tutoring',
  description: 'A simple list of key pages on CF Tutoring for parents and search engines.',
  keywords: ['site map', 'cf tutoring pages'],
  pathname: '/site-map'
})

const PAGES = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/subjects', label: 'Subjects' },
  { href: '/packages', label: 'Packages' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
  { href: '/areas-served', label: 'Areas Served' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/results', label: 'Results / Case Studies' },
  { href: '/tutor-profile', label: 'Tutor Profile' },
  { href: '/blog', label: 'Guides / Blog' },
  { href: '/maths-and-science-tutors-kensington-chelsea', label: 'Kensington & Chelsea Tutors' },
  { href: '/gcse-physics-tutor-london', label: 'GCSE Physics Tutor London' },
  { href: '/a-level-maths-tutor-london', label: 'A-Level Maths Tutor London' },
  { href: '/a-level-physics-tutor-london', label: 'A-Level Physics Tutor London' },
  { href: '/oxbridge-physics-preparation', label: 'Oxbridge Physics Preparation' },
  { href: '/entrance-exam-tutoring-11-plus', label: '11+ Entrance Exam Tutoring' },
  { href: '/oxbridge-admissions', label: 'Oxbridge Admissions' },
  { href: '/privacy', label: 'Privacy Policy' }
]

export default function SiteMapPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 text-slate-100">
      <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Site map</p>
      <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">All key pages</h1>
      <p className="mt-3 text-sm text-slate-300">
        This page lists the main sections of CF Tutoring for quick access.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {PAGES.map((page) => (
          <li key={page.href}>
            <a className="text-sm text-amber-200 underline decoration-amber-200/60 hover:text-white" href={page.href}>
              {page.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
