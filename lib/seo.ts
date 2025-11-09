import type { Metadata } from 'next'
import { SITE_URL, metadataBase } from './site'

type SiteMetadataInput = {
  title: string
  description: string
  keywords?: string[]
}

export function generateSiteMetadata({ title, description, keywords }: SiteMetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    metadataBase,
    openGraph: {
      title,
      description,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  }
}

export function organizationJsonLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ehsan Massah Tutoring',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  }
}

export function localBusinessJsonLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ehsan Massah Tutoring',
    url: SITE_URL,
    telephone: '+447957933537',
    email: 'ehsan@massah-inst.com',
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
