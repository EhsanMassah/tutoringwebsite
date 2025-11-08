import React from 'react'
import fs from 'fs'
import path from 'path'

export default function Post({ params }: { params: { slug: string } }) {
  const slug = params.slug
  // naive MDX read — replace with MDX compiler in real app
  const p = path.join(process.cwd(), 'content', 'posts', `${slug}.mdx`)
  let content = ''
  try { content = fs.readFileSync(p, 'utf-8') } catch (e) { content = 'Not found' }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">{slug}</h1>
      <div className="mt-6 whitespace-pre-wrap">{content}</div>
    </article>
  )
}
