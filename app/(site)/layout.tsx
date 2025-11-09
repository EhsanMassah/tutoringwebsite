import React from 'react'
import '../../styles/globals.css'
import { generateSiteMetadata, organizationJsonLD, localBusinessJsonLD } from '../../lib/seo'
import { SITE_URL } from '../../lib/site'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = generateSiteMetadata({
  title: 'Ehsan Massah | Chelsea & Kensington Maths and Science Tutor',
  description: 'One-to-one Maths, Further Maths, Physics and Chemistry tutoring led personally by Ehsan Massah for 11+, GCSE, IGCSE, IB and A-level students in Chelsea, Kensington and online.',
  keywords: [
    'Chelsea maths tutor',
    'Kensington maths tutor',
    'London science tutor',
    'GCSE maths tuition London',
    'A-level physics tutor Chelsea',
    'Further maths tutor Kensington',
    '11 plus tutor South West London',
    'Ehsan Massah tutor',
    'PAT tutor London',
    'ESAT tutor London'
  ]
})

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const org = organizationJsonLD()
  const local = localBusinessJsonLD()

  return (
    <html lang="en">
      <head>
        {/* Favicons / preconnects for performance */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href={SITE_URL} />
        {/* JSON-LD structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(local) }} />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
