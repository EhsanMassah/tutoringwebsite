import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostMeta = {
  slug: string
  title: string
  description?: string
  date?: string
}

const postsDir = path.join(process.cwd(), 'content', 'posts')

export function getPostsMeta(): PostMeta[] {
  if (!fs.existsSync(postsDir)) {
    return []
  }

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDir, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)

      const derivedSlug = filename.replace(/\.mdx?$/, '')
      const slug = (data.slug as string) || derivedSlug

      return {
        slug,
        title: (data.title as string) || slug,
        description: data.description as string | undefined,
        date: data.date as string | undefined,
      }
    })
    .sort((a, b) => {
      const aTime = a.date ? new Date(a.date).getTime() : 0
      const bTime = b.date ? new Date(b.date).getTime() : 0
      return bTime - aTime
    })
}

export function getPostMetaBySlug(slug: string): PostMeta | null {
  const entries = getPostsMeta()
  return entries.find((entry) => entry.slug === slug) ?? null
}
