import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Resource = {
  slug: string
  title: string
  summary: string
  tags: string[]
  readTime: string
  published: string
  body?: string
}

const resourcesDir = path.join(process.cwd(), 'content', 'resources')

export function getResources(): Resource[] {
  if (!fs.existsSync(resourcesDir)) {
    return []
  }

  const files = fs.readdirSync(resourcesDir).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))

  return files
    .map((filename) => {
      const filePath = path.join(resourcesDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)

      const slug = filename.replace(/\.mdx?$/, '')

      return {
        slug,
        title: data.title ?? slug,
        summary: data.summary ?? '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        readTime: data.readTime ?? '5 min read',
        published: data.published ?? new Date().toISOString().slice(0, 10),
        body: content.trim() || undefined
      } as Resource
    })
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
}
