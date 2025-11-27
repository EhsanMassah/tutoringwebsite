import type { Metadata } from 'next'
import { SITE_URL, metadataBase } from './site'

const BASE_KEYWORDS = [
  'Chelsea maths tutor',
  'Kensington maths tutor',
  'Fulham maths tutor',
  'Chelsea science tutor',
  'Kensington physics tutor',
  '11+ tutor West London',
  'A-level maths tutor London',
  'Chelsea parents private tutor',
  'Kensington parents home tutoring support',
  'Fulham parents GCSE science help',
]

type SiteMetadataInput = {
  title: string
  description: string
  keywords?: string[]
  pathname?: string
}

export function generateSiteMetadata({ title, description, keywords = [], pathname }: SiteMetadataInput): Metadata {
  const canonical = buildCanonicalUrl(pathname)
  const mergedKeywords = Array.from(new Set([...BASE_KEYWORDS, ...keywords].filter(Boolean)))

  return {
    title,
    description,
    keywords: mergedKeywords,
    metadataBase,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/favicon.svg`,
          width: 512,
          height: 512,
          alt: 'CF Tutoring'
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/favicon.svg`],
    },
  }
}

export function organizationJsonLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ehsan Massah Tutoring',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
  }
}

export function localBusinessJsonLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ehsan Massah Tutoring',
    url: SITE_URL,
    telephone: '+447957933537',
    email: 'ehsan@cftutoring.com',
    priceRange: '£££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chelsea',
      addressLocality: 'London',
      postalCode: 'SW3',
      addressCountry: 'UK'
    },
    serviceArea: [
      'Chelsea', 'Sloane Square', 'South Kensington', 'Kensington High Street', 'Holland Park', "Queen's Gate"
    ]
  }
}

function buildCanonicalUrl(pathname?: string) {
  if (!pathname) return SITE_URL

  try {
    return new URL(pathname, SITE_URL).toString()
  } catch {
    const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
    return `${SITE_URL}${normalized}`
  }
}
