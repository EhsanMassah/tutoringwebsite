import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

/**
 * Convert Markdown/MDX content into HTML for server-side rendering.
 * remark-html runs only during build or on the server so it will not bloat the client bundle.
 */
export async function markdownToHtml(markdown: string) {
  const file = await remark().use(gfm).use(html, { sanitize: false }).process(markdown)
  return String(file)
}
