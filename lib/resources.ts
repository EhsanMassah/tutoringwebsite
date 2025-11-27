import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Resource = {
  slug: string
  title: string
  summary: string
  tags: string[]
  keywords: string[]
  readTime: string
  published: string
  updated: string
  audience: string
  image?: string
  body?: string
}

type GetResourcesOptions = {
  includeBody?: boolean
}

const resourcesDir = path.join(process.cwd(), 'content', 'resources')
const DEFAULT_AUDIENCE = 'Parents supporting 11+, GCSE, IB and A-level students in London'

export function getResources(options: GetResourcesOptions = {}): Resource[] {
  if (!fs.existsSync(resourcesDir)) {
    return []
  }

  const { includeBody = false } = options
  const files = fs.readdirSync(resourcesDir).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))

  return files
    .map((filename) => {
      const filePath = path.join(resourcesDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)

      const slug = filename.replace(/\.mdx?$/, '')
      const published = (data.published as string) ?? new Date().toISOString().slice(0, 10)
      const updated = (data.updated as string) ?? published

      return {
        slug,
        title: (data.title as string) ?? slug,
        summary: (data.summary as string) ?? '',
        tags: normalizeStringArray(data.tags),
        keywords: normalizeStringArray(data.keywords),
        readTime: (data.readTime as string) ?? '5 min read',
        published,
        updated,
        audience: (data.audience as string) ?? DEFAULT_AUDIENCE,
        image: (data.image as string) ?? undefined,
        body: includeBody ? content.trim() || undefined : undefined,
      }
    })
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
}

export function getResourceBySlug(slug: string, options: GetResourcesOptions = {}) {
  const includeBody = options.includeBody ?? false
  const resources = getResources({ includeBody })
  return resources.find((resource) => resource.slug === slug) ?? null
}

export function getResourceSlugs() {
  if (!fs.existsSync(resourcesDir)) {
    return []
  }

  return fs
    .readdirSync(resourcesDir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((filename) => filename.replace(/\.mdx?$/, ''))
}

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value.map((entry) => String(entry)).filter(Boolean)
}
