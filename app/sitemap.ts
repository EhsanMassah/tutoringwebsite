import type { MetadataRoute } from 'next'
import { SITE_URL } from '../lib/site'
import { getPostsMeta } from '../lib/posts'
import { getResources } from '../lib/resources'

const STATIC_ROUTES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/subjects', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/blog', priority: 0.65, changeFrequency: 'weekly' },
  { path: '/maths-and-science-tutors-kensington-chelsea', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedAt = new Date()

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: buildUrl(route.path),
    lastModified: generatedAt,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const articleEntries = getPostsMeta().map((post) => {
    const parsedDate = post.date ? new Date(post.date) : generatedAt
    const lastModified = Number.isNaN(parsedDate.getTime()) ? generatedAt : parsedDate

    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }
  })

  const resourceEntries = getResources().map((resource) => {
    const parsedDate = resource.published ? new Date(resource.published) : generatedAt
    const lastModified = Number.isNaN(parsedDate.getTime()) ? generatedAt : parsedDate

    return {
      url: `${SITE_URL}/blog/${resource.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.55,
    }
  })

  return [...staticEntries, ...articleEntries, ...resourceEntries]
}

function buildUrl(pathname: string) {
  if (pathname === '/') return SITE_URL
  return `${SITE_URL}${pathname}`
}
