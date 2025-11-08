type SiteMetadataInput = {
  title: string
  description: string
  keywords?: string[]
}

export function generateSiteMetadata({ title, description, keywords }: SiteMetadataInput) {
  return {
    title,
    description,
    keywords,
    metadataBase: process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined,
    openGraph: {
      title,
      description,
      type: 'website'
    },
    twitter: { card: 'summary_large_image' }
  }
}

export function organizationJsonLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ehsan Massah Tutoring',
    url: process.env.SITE_URL || 'https://example.com',
    logo: `${process.env.SITE_URL || 'https://example.com'}/logo.png`,
  }
}

export function localBusinessJsonLD() {
  const site = process.env.SITE_URL || 'https://massah-inst.com'
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ehsan Massah Tutoring',
    url: site,
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
