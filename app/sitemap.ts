import type { MetadataRoute } from 'next'
import { SITE_URL } from '../lib/site'

const ROUTES = ['/', '/about', '/subjects', '/pricing', '/contact', '/blog'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
