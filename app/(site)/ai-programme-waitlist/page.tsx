import React from 'react'
import Image from 'next/image'
import AIWaitlistForm from '../../../components/AIWaitlistForm'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'AI Intelligence Apprenticeship Waitlist | CF Tutoring',
  description:
    'Join the waitlist for the boutique AI intelligence apprenticeship for exceptional 16–18-year-olds. Application-only, 4–6 students per cohort, £5,000.',
  keywords: [
    'AI programme waitlist',
    'AI apprenticeship teens',
    'CF Tutoring AI programme',
    'AI literacy waitlist',
    'Oxbridge AI preparation'
  ],
  pathname: '/ai-programme-waitlist',
})

const SIGNALS = [
  { label: 'Cohort Size', value: '4–6 Students' },
  { label: 'Real-World Exposure', value: 'Competitions & Hackathons' },
  { label: 'Format', value: 'Build sprints & Mentorship' },
]

const WHY_NOW = [
  {
    title: 'AI is becoming unavoidable.',
    body: 'Universities and employers now assume students will use AI. The question is no longer if, but how well.',
  },
  {
    title: 'Most teenagers are learning AI in shallow ways.',
    body: 'Schools lag behind real-world practice, leaving students either restricted or reliant on shortcuts.',
  },
  {
    title: 'The future rewards those who can think, not just produce.',
    body: 'As AI automates routine tasks, advantage shifts to students who can frame problems, reason clearly, and build original solutions.',
  },
]

const PROOF_POINTS = [
  {
    title: 'Mentorship-led, not content-led',
    body: 'Students work directly with experienced mentors affiliated with leading academic institutions, including Cambridge, Oxford, Imperial, and UCL.',
  },
  {
    title: 'Small by design',
    body: 'Cohorts of 4-6 students enable genuine discussion, individual feedback, and intellectual depth.',
  },
  {
    title: 'Real problems, real outputs',
    body: 'Students work on applied projects and participate in competitions and hackathons, with opportunities to publish work, gain recognition, and compete for prizes.',
  },
  {
    title: 'For serious, high-potential students',
    body: 'Admission is selective. Applicants complete technical interviews covering mathematics and coding to ensure the cohort is well-matched.',
  },
]

const INSTRUCTORS = [
  {
    name: 'Ehsan Massah',
    role: 'Programme Lead · Maths Specialist',
    education: 'MSc, Theoretical Physics',
    affiliationLogo: {
      src: '/images/Imperial_College_London.png',
      alt: 'Imperial College London',
    },
    experience: '15+ years tutoring and admissions coaching across Oxbridge, Imperial and Ivy pathways.',
    photo: '/images/headshot.jpg',
  },
  {
    name: 'Instructor Placeholder',
    role: 'AI Strategy Mentor',
    education: 'Top-tier university (CS/AI)',
    affiliationLogo: {
      src: '/images/UCL.png',
      alt: 'University College London',
      className: 'h-8 w-auto',
    },
    experience: 'Research or industry experience guiding students through applied AI cases.',
    photo: '/images/Logos-3.svg',
  },
  {
    name: 'Instructor Placeholder',
    role: 'Applied AI / Competitions',
    education: 'STEM postgraduate background',
    affiliationLogo: {
      src: '/images/University_of_Oxford.png',
      alt: 'University of Oxford',
      width: 240,
      height: 60,
      className: 'h-12 w-auto',
    },
    experience: 'Supports competition submissions and mini-project execution.',
    photo: '/images/Logos-2.svg',
  },
]

export default function AIProgrammeWaitlistPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(34,211,238,0.14),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,20,38,0.8)_0%,rgba(2,6,23,0.95)_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px]" />
          <div className="absolute right-4 top-10 h-64 w-64 rounded-full bg-cyan-300/15 blur-[110px]" />
          <div className="absolute -left-10 bottom-10 h-60 w-60 rounded-full bg-emerald-300/10 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-16 lg:py-20">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-cyan-200/30 bg-white/5 px-3 py-2 shadow-[0_0_24px_rgba(34,211,238,0.25)]">
              <Image src="/images/Logos-3.svg" alt="CF Tutoring logo" width={90} height={32} className="h-7 w-auto" priority />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-100">New programme by CF Tutors</span>
            </div>
          </div>
          <div className="mt-8 space-y-8 text-center lg:space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-[1.05] text-white drop-shadow-[0_10px_45px_rgba(34,211,238,0.35)] sm:text-5xl md:text-6xl">
                Join the AI Apprenticeship for Future Leaders
              </h1>
              <p className="mx-auto max-w-3xl text-base text-slate-200 sm:text-lg">
                A mentor-led pathway introducing exceptional teenagers to applied artificial intelligence and modern problem-solving.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {SIGNALS.map((item) => (
                  <div
                    key={item.label}
                    className="depth-card rounded-2xl border border-cyan-200/30 bg-white/5 p-5 backdrop-blur"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100">{item.label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.45)] transition hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
                >
                  Join the waitlist
                </a>
              </div>
            </div>
            <div className="mx-auto max-w-4xl space-y-5 rounded-[24px] border border-cyan-200/30 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-950/80 p-6 text-center shadow-[0_0_38px_rgba(34,211,238,0.28)] backdrop-blur">
              <p className="relative inline-flex items-center gap-2 text-base font-semibold uppercase tracking-[0.3em] text-cyan-100 sm:text-lg">
                Why now
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-80"
                />
              </p>
              <div className="mx-auto space-y-3 text-sm text-slate-200 sm:max-w-3xl">
                {WHY_NOW.map((item) => (
                  <div
                    key={item.title}
                    className="depth-card relative overflow-hidden rounded-2xl border border-cyan-200/25 bg-white/5 p-4 text-left backdrop-blur"
                  >
                    <span className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
                      <span
                        className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-cyan-300/20 via-emerald-200/10 to-transparent"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                      />
                    </span>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-slate-200">{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="depth-card relative inline-flex items-center overflow-hidden rounded-[32px] border border-cyan-200/50 bg-gradient-to-r from-slate-900/80 via-cyan-900/20 to-slate-900/70 px-6 py-4 text-center">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-cyan-300/15 via-transparent to-transparent"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)' }}
                />
                <p className="relative text-xl font-semibold text-white sm:text-2xl">
                  Thinking with AI is the New Advantage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-6 py-14 space-y-8">
          <div className="space-y-2 text-center">
            <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">Instructors</p>
            <h2 className="relative inline-flex items-center justify-center gap-2 text-3xl font-semibold text-white sm:text-4xl">
              Experienced Mentors from Leading Academic Institutions
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-80"
              />
            </h2>
            <p className="text-sm text-slate-300">Led personally and supported by AI specialists for competition and project depth.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INSTRUCTORS.map((person) => (
              <div
                key={person.name}
                className="depth-card rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-5 backdrop-blur"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border border-cyan-200/30 bg-slate-900 shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                    <Image src={person.photo} alt={person.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{person.name}</p>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-100">{person.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-200">
                  <span className="text-slate-400">Education:</span> {person.education}
                </p>
                {person.affiliationLogo ? (
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-200">
                    <span className="text-slate-400">Affiliation:</span>
                    <Image
                      src={person.affiliationLogo.src}
                      alt={person.affiliationLogo.alt}
                      width={person.affiliationLogo.width ?? 120}
                      height={person.affiliationLogo.height ?? 32}
                      className={`h-6 w-auto object-contain ${person.affiliationLogo.className ?? ''}`}
                    />
                  </div>
                ) : null}
                <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                  <span className="text-slate-400">Experience:</span> {person.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-6 py-14 space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="relative inline-flex items-center gap-2 text-3xl font-semibold text-white sm:text-4xl">
              Learning AI through Problems, not Prompts
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-80"
              />
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-4 rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-6 text-center backdrop-blur">
              <p className="relative inline-flex items-center gap-2 text-base font-semibold uppercase tracking-[0.3em] text-cyan-100 sm:text-lg">
                What’s unique
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-80"
                />
              </p>
              <div className="space-y-3 text-sm text-slate-200">
                {PROOF_POINTS.map((item) => (
                  <div
                    key={item.title}
                    className="depth-card relative overflow-hidden rounded-2xl border border-cyan-200/25 bg-white/5 p-4 text-left backdrop-blur"
                  >
                    <span className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
                      <span
                        className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-cyan-300/20 via-emerald-200/10 to-transparent"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                      />
                    </span>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-2 leading-relaxed text-slate-200">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-transparent">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="depth-card rounded-[28px] border border-cyan-200/25 bg-gradient-to-br from-slate-900/85 via-slate-900/60 to-slate-950/85 p-8 backdrop-blur">
            <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
              <div className="absolute -top-10 left-10 h-64 w-64 rounded-full bg-cyan-300/10 blur-[120px]" />
              <div className="absolute bottom-0 right-4 h-48 w-48 rounded-full bg-emerald-300/10 blur-[110px]" />
            </div>
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">Waitlist</p>
                <h2 className="relative inline-flex items-center gap-2 text-3xl font-semibold text-white">
                  Request early access
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-80"
                  />
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Limited cohort. Reviewed individually.
                </p>
              </div>
              <div className="depth-card rounded-[24px] border border-cyan-200/30 bg-slate-950/80 p-6">
                <AIWaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
