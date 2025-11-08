"use client"
import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import type { Resource } from '../lib/resources'

const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, ' ').trim()

type ResourceExplorerProps = {
  resources: Resource[]
}

export default function ResourceExplorer({ resources }: ResourceExplorerProps) {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const tags = useMemo(() => {
    const set = new Set<string>()
    resources.forEach((resource) => resource.tags.forEach((tag) => set.add(tag)))
    return Array.from(set).sort((a, b) => a.localeCompare(b))
  }, [resources])

  const filtered = useMemo(() => {
    const searchValue = normalize(search)
    return resources.filter((resource) => {
      const matchesSearch =
        !searchValue ||
        normalize(resource.title).includes(searchValue) ||
        normalize(resource.summary).includes(searchValue) ||
        resource.tags.some((tag) => normalize(tag).includes(searchValue))

      const matchesTag = !activeTag || resource.tags.includes(activeTag)

      return matchesSearch && matchesTag
    })
  }, [resources, search, activeTag])

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search resources"
            className="w-full rounded-full border border-white/15 bg-slate-900/60 px-5 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
            aria-label="Search resources"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
              activeTag === null
                ? 'bg-amber-300 text-slate-950'
                : 'border border-white/15 text-slate-200 hover:border-amber-200 hover:text-amber-100'
            }`}
          >
            All topics
          </button>
          {tags.map((tag) => {
            const selected = activeTag === tag
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(selected ? null : tag)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
                  selected ? 'bg-amber-300 text-slate-950' : 'border border-white/15 text-slate-200 hover:border-amber-200 hover:text-amber-100'
                }`}
              >
                {tag}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-6">
        {filtered.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-center text-sm text-slate-300">
            No resources match that search. Try different keywords or reset the filters.
          </div>
        )}
        {filtered.map((resource) => (
          <article
            key={resource.slug}
            className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-amber-200/60"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] text-amber-200/70">
              <span>{formatDate(resource.published)}</span>
              <span>{resource.readTime}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-white">{resource.title}</h2>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">{resource.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${resource.slug}`}
              className="mt-6 inline-flex items-center text-sm font-semibold text-amber-200 transition hover:text-amber-100"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

function formatDate(value: Resource['published']) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
}
