import React from 'react'

export default function TestimonialCard({ name, text, rating = 5 }: { name: string; text: string; rating?: number }) {
  return (
    <figure className="rounded-[24px] border border-white/10 bg-white/[0.04] p-8 text-left shadow-lg backdrop-blur">
      <div className="flex items-center gap-1 text-amber-300" aria-hidden="true">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>
      <blockquote className="mt-4 text-lg leading-relaxed text-slate-100">“{text}”</blockquote>
      <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/70">— {name}</figcaption>
    </figure>
  )
}
