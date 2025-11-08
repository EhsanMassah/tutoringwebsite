import React from 'react'

type SubjectCardProps = {
  name: string
  level: string
  boards?: string[]
  focus?: string
}

export default function SubjectCard({ name, level, boards, focus }: SubjectCardProps) {
  return (
    <article
      className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-200 shadow-lg backdrop-blur transition hover:translate-y-[-4px] hover:border-amber-200/40 hover:text-white"
      aria-labelledby={`subject-${name}`}
    >
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/80">{level}</span>
        <h3 id={`subject-${name}`} className="mt-3 text-xl font-semibold text-white">{name}</h3>
        {focus && <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{focus}</p>}
      </div>
      {boards && boards.length > 0 && (
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-amber-200/60">Boards {boards.join(' · ')}</p>
      )}
    </article>
  )
}
