import type { MetadataRoute } from 'next'

const ROUTES = ['/', '/about', '/subjects', '/pricing', '/contact', '/blog'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://massah-inst.com'
  const lastModified = new Date()

  return ROUTES.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
