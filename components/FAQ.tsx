import React from 'react'

const FAQ_DATA = [
  { q: 'Which levels do you cover?', a: '11+, GCSE, IGCSE, IB and A-level in Maths, Further Maths, Physics and Chemistry.' },
  { q: 'Where do lessons take place?', a: 'In-person across Chelsea, Kensington and Knightsbridge, with online options for travel weeks.' },
  { q: 'Will I receive feedback?', a: 'Yes — concise session notes and next steps arrive within 24 hours.' },
  { q: 'Are safeguarding checks in place?', a: 'Enhanced DBS, safeguarding training and professional insurance are all current.' }
]

export default function FAQ() {
  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-semibold text-white">Questions</h3>
      <div className="space-y-3">
        {FAQ_DATA.map((item, index) => (
          <details
            key={item.q}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-slate-200 backdrop-blur transition hover:border-amber-200/60"
            open={index === 0}
          >
            <summary className="text-sm font-semibold text-white">{item.q}</summary>
            <p className="mt-2 text-sm text-slate-300">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
