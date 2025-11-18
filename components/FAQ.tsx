import React from 'react'

const FAQ_DATA = [
  {
    q: 'Which levels do you cover?',
    a: '11+, GCSE, IGCSE, IB and A-level in Maths, Further Maths, Physics and Chemistry.'
  },
  {
    q: 'Do you travel to Fulham, Parsons Green and South Kensington?',
    a: 'Yes — Chelsea, Fulham, Kensington, Knightsbridge and Holland Park are part of my weekly schedule, with travel baked into the fee.'
  },
  {
    q: 'How do you handle parking or concierge access in Chelsea homes?',
    a: 'I coordinate visitor permits/concierge sign-in ahead of the first lesson so arrivals remain discreet and on time.'
  },
  {
    q: 'Will I receive feedback?',
    a: 'Concise session notes with next steps arrive within 24 hours, plus WhatsApp check-ins for urgent updates.'
  },
  {
    q: 'Can we blend online lessons during travel weeks or boarding school terms?',
    a: 'Absolutely — I flip to a shared whiteboard setup with recorded walkthroughs so progress continues while abroad or at boarding school.'
  },
  {
    q: 'Are safeguarding checks in place?',
    a: 'Enhanced DBS, safeguarding training and professional insurance are all current and renewed annually.'
  }
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  audience: {
    '@type': 'Audience',
    audienceType: 'Parents in Chelsea, Kensington, Fulham and Knightsbridge',
  },
  mainEntity: FAQ_DATA.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    </div>
  )
}
