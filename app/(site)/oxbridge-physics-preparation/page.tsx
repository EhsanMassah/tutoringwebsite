import React from 'react'
import LeadForm from '../../../components/LeadForm'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Oxbridge Physics Preparation | Interview & Admissions Tutoring',
  description:
    'Oxbridge Physics preparation with interview coaching, problem-solving depth and admissions test support. London-based tutoring for Chelsea, Wimbledon and beyond.',
  keywords: [
    'oxbridge physics preparation',
    'oxford physics interview tutor',
    'cambridge physics admissions tutor',
    'pat tutor london',
    'esat tutor london'
  ],
  pathname: '/oxbridge-physics-preparation'
})

const FAQS = [
  {
    q: 'Which tests do you cover for Oxbridge Physics?',
    a: 'I support PAT, ESAT, MAT and STEP preparation depending on the course and college requirements.'
  },
  {
    q: 'Do you help with personal statements and application strategy?',
    a: 'Yes. We can review personal statements, super-curricular activity lists and interview narratives to make the application coherent.'
  },
  {
    q: 'How early should students start?',
    a: 'Ideally 6–9 months before interviews, but focused intensives can still deliver results in shorter windows.'
  },
  {
    q: 'Do you run mock interviews?',
    a: 'Yes. We use structured mock interviews with feedback on thinking clarity, communication and mathematical rigour.'
  },
  {
    q: 'Can this be combined with A-Level support?',
    a: 'Absolutely. We can run a combined plan that protects school grades while building admissions readiness.'
  },
  {
    q: 'Is online preparation effective?',
    a: 'Yes. Online sessions are common for interview prep and include shared whiteboards and timed problem sets.'
  }
]

export default function OxbridgePhysicsPreparationPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.08),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(15,23,42,0.55)_0%,rgba(15,23,42,0)_40%),radial-gradient(circle_at_20%_15%,rgba(248,250,252,0.08),transparent_50%)]" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Oxbridge · Imperial · Top STEM</p>
            <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
              Oxbridge Physics preparation
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Interviews · PAT · ESAT · STEP</p>
            <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">
              Oxbridge Physics admissions require more than strong grades. Students need deep problem-solving instincts, calm thinking under pressure and
              the ability to explain reasoning clearly. I provide structured preparation for tests and interviews, delivered in London or online for
              families in Chelsea, Kensington and Wimbledon.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Interview-style questions and feedback
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" /> Timed admissions test training
              </span>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Check Oxbridge prep availability</h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">Share your course targets and timeline — I reply within one business day.</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Who this is for</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">High-achieving students aiming for Oxbridge</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Oxbridge Physics interviews reward curiosity, calm thinking and the ability to reason aloud. Students who excel in class can still feel
              uncertain when asked to tackle unfamiliar problems on the spot. My role is to build those instincts, turning raw ability into structured
              reasoning that interviewers want to see.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              We work from your student’s current level, map the target admissions tests and design a schedule that fits school commitments. Students
              in London often balance A-Level mocks and school projects, so every session is designed to deliver maximum impact.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">What we focus on</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Problem-solving depth beyond the syllabus.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Timed admissions tests (PAT, ESAT, MAT, STEP).</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Mock interviews with structured feedback.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-amber-300" /> Clear explanation of reasoning under pressure.</li>
            </ul>
            <p className="mt-6 text-sm text-slate-300">
              Students leave each session with a crisp list of what to practise and how to reflect on their approach.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">How it works</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">A phased admissions pathway</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We begin with a diagnostic interview-style session and a review of any existing test scores. That gives us a baseline and highlights
                the areas to prioritise. Next, we set a weekly rhythm focused on admissions tests, advanced problem solving and interview technique.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Closer to interview season, we shift into mock interview mode. Students practise articulating thought processes, handling hints and
                managing time. After each mock, I give detailed feedback and a targeted improvement plan.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Pricing approach</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Oxbridge preparation is delivered in focused packages. Packages include diagnostic interviews, admissions test practice, mock interview
                cycles and support with application narratives if required. I’ll propose a clear plan after a short consultation.
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                If your child still needs A-Level Physics or Maths support, we can combine the plans to reduce workload and keep progress balanced.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
                >
                  Book a consultation
                </a>
                <a
                  href="/a-level-physics-tutor-london"
                  className="inline-flex items-center justify-center rounded-full border border-amber-200/50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
                >
                  A-Level Physics support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Local tutoring</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">London-based, with online options</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              I work with families in Chelsea, Kensington, Fulham and Wimbledon, and support international students online. Sessions can be scheduled
              around school demands and university application deadlines, with a focus on quality rather than volume.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              If your child is taking GCSE or A-Level Physics, see the <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/gcse-physics-tutor-london">GCSE Physics</a> or <a className="text-amber-200 underline decoration-amber-200/60 hover:text-white" href="/a-level-physics-tutor-london">A-Level Physics</a> pages.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Related tutoring pages</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/a-level-maths-tutor-london">A-Level Maths tutor in London</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/entrance-exam-tutoring-11-plus">11+ entrance exam tutoring</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/maths-and-science-tutors-kensington-chelsea">Kensington & Chelsea tutoring</a></li>
              <li><a className="underline decoration-amber-200/60 hover:text-white" href="/oxbridge-admissions">Oxbridge & admissions overview</a></li>
            </ul>
            <p className="mt-4 text-sm text-slate-300">
              Prefer to ask questions directly? Email <a className="underline decoration-amber-200/60 hover:text-white" href="mailto:ehsan@cftutoring.com">ehsan@cftutoring.com</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">FAQs</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Oxbridge Physics prep questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] px-8 py-10 text-center shadow-2xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Ready to begin?</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Book an Oxbridge Physics consultation</h2>
          <p className="mt-3 text-sm text-slate-300">
            I’ll confirm availability, package fit and next steps within one business day.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
            >
              Arrange a call
            </a>
            <a
              href="https://wa.me/447957933537?text=Hi%20Ehsan,%20I%27d%20like%20to%20arrange%20Oxbridge%20Physics%20preparation."
              className="inline-flex items-center justify-center rounded-full border border-amber-200/40 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:-translate-y-1 hover:border-amber-200 hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
