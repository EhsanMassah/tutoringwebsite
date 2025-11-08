import React from 'react'
import ResourceExplorer from '../../../components/ResourceExplorer'
import { getResources } from '../../../lib/resources'

export default function ResourcesPage() {
  const resources = getResources()

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-6 py-16 lg:py-20">
      <header className="space-y-4 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Resources</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Insights & revision guides</h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          I regularly share strategies that help parents, students and schools create calm, high-performance study routines. Filter by topic or search for the exact advice you need.
        </p>
      </header>

      <ResourceExplorer resources={resources} />

      <footer className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-sm text-slate-200 backdrop-blur">
        Looking for something bespoke? Request my Chelsea & Kensington revision packs or a school-specific briefing via the contact form.
      </footer>
    </div>
  )
}
