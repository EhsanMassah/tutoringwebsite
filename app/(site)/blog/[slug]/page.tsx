import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { generateSiteMetadata } from '../../../../lib/seo'
import { markdownToHtml } from '../../../../lib/markdown'
import { getResourceBySlug, getResourceSlugs } from '../../../../lib/resources'
import { SITE_URL } from '../../../../lib/site'

const PARENT_KEYWORDS = ['chelsea parents tutoring advice', 'kensington parents study support', 'fulham parents maths tutor']

const formatDate = (value: string) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
}

type PageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getResourceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const entry = getResourceBySlug(params.slug)

  if (!entry) {
    return {}
  }

  return generateSiteMetadata({
    title: `${entry.title} | Chelsea & Kensington Parent Guide`,
    description: entry.summary,
    keywords: [...entry.tags, ...entry.keywords, entry.audience, ...PARENT_KEYWORDS],
    pathname: `/blog/${entry.slug}`,
    image: entry.image ? `${SITE_URL}${entry.image}` : undefined,
  })
}

export default async function ResourceArticle({ params }: PageProps) {
  const resource = getResourceBySlug(params.slug, { includeBody: true })

  if (!resource || !resource.body) {
    notFound()
  }

  const html = await markdownToHtml(resource.body)
  const articleUrl = `${SITE_URL}/blog/${resource.slug}`
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resource.title,
    description: resource.summary,
    author: { '@type': 'Person', name: 'Ehsan Massah' },
    datePublished: resource.published,
    dateModified: resource.updated,
    mainEntityOfPage: articleUrl,
    audience: { '@type': 'Audience', audienceType: resource.audience },
    keywords: [...resource.tags, ...resource.keywords],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Resources', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 2, name: resource.title, item: articleUrl },
    ],
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Guidance for SW London parents</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">{resource.title}</h1>
        <p className="text-sm text-slate-300 leading-relaxed">{resource.summary}</p>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em] text-amber-200/70">
          <span>{formatDate(resource.published)}</span>
          <span>{resource.readTime}</span>
          <span>For {resource.audience}</span>
        </div>
      </header>

      <section className="prose prose-invert prose-headings:text-white prose-strong:text-white prose-a:text-amber-200/90 mt-10 max-w-none text-slate-100">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>

      <footer className="mt-12 rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-sm text-slate-200 backdrop-blur">
        <p className="font-semibold text-white">Need a private briefing?</p>
        <p className="mt-2">
          Parents in Chelsea, Kensington and Fulham can request a bespoke action plan. Share your child&apos;s targets via the contact form and I&apos;ll reply within one business day.
        </p>
        <Link
          className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
          href="/contact"
        >
          Contact Ehsan
        </Link>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </article>
  )
}
