"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

type ContactFormValues = {
  name: string
  email: string
  phone?: string | null
  studentYear: string
  subjects: string
  target: string
  timeline?: string
  preferredSlots?: string
  location: string
  packageConsent?: boolean
  hp?: string
}

export default function LeadForm() {
  // Keep client-side validation light-weight to avoid bundling server-only libs (zod) into the client bundle.
  const { register, handleSubmit, setError, reset, formState } = useForm<ContactFormValues>({ mode: 'onSubmit' })

  async function onSubmit(values: ContactFormValues) {
    // Minimal client-side checks to fail fast and avoid shipping heavy validation libs to the browser
    if (!values.name || values.name.length < 2) {
      setError('name' as any, { message: 'Please enter your name' })
      return
    }
    if (!values.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      setError('email' as any, { message: 'Please enter a valid email' })
      return
    }
    if (!values.studentYear) {
      setError('studentYear' as any, { message: 'Please select a year group' })
      return
    }
    if (!values.subjects) {
      setError('subjects' as any, { message: 'Please choose a subject' })
      return
    }
    if (!values.target) {
      setError('target' as any, { message: 'Please add a target grade or university' })
      return
    }
    if (!values.location) {
      setError('location' as any, { message: 'Please select a location' })
      return
    }
    if (!values.packageConsent) {
      setError('packageConsent' as any, { message: 'Please confirm packages acknowledgment' })
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (res.ok) {
        reset()
        alert('Thanks — I will be in touch within 24–48 hours.')
      } else {
        const payload = await res.json().catch(() => ({}))
        alert(payload?.error || 'Failed to submit')
      }
    } catch (err) {
      console.error(err)
      alert('Network error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label className="block text-sm font-medium text-slate-200">Parent name</label>
        <input
          {...register('name')}
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
          aria-required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Email</label>
        <input
          {...register('email')}
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
          type="email"
          aria-required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Phone (optional)</label>
        <input
          {...register('phone')}
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Student year group</label>
        <select
          {...register('studentYear')}
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
          defaultValue=""
        >
          <option value="" disabled>
            Select year group
          </option>
          <option value="Year 9">Year 9</option>
          <option value="Year 10">Year 10</option>
          <option value="Year 11 (GCSE)">Year 11 (GCSE)</option>
          <option value="Year 12 (AS)">Year 12 (AS)</option>
          <option value="Year 13 (A-level)">Year 13 (A-level)</option>
          <option value="University applicant">University applicant</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Subject(s)</label>
        <select
          {...register('subjects')}
          defaultValue=""
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
        >
          <option value="" disabled>
            Select subject focus
          </option>
          <option value="GCSE Maths">GCSE Maths</option>
          <option value="A-Level Maths">A-Level Maths</option>
          <option value="Further Maths">Further Maths</option>
          <option value="Physics">Physics</option>
          <option value="Admissions coaching (Oxbridge/Imperial)">Admissions coaching (Oxbridge/Imperial)</option>
          <option value="Multiple subjects">Multiple subjects</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Target (grade/university)</label>
        <input
          {...register('target')}
          placeholder="e.g. Grade 8–9 GCSE or Cambridge Engineering"
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Timeline (mock/exam date)</label>
        <input
          {...register('timeline')}
          placeholder="e.g. GCSE mocks in March, interview in December"
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Preferred slots</label>
        <input
          {...register('preferredSlots')}
          placeholder="e.g. Weekday evenings, Sunday mornings"
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Location</label>
        <select
          {...register('location')}
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
          defaultValue=""
        >
          <option value="" disabled>
            Select preferred format
          </option>
          <option value="Online">Online</option>
          <option value="In-person (London)">In-person (London)</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>
      <div className="flex items-center">
        <input
          {...register('packageConsent')}
          type="checkbox"
          className="mr-2 h-4 w-4 rounded border border-white/20 bg-slate-900/60 text-amber-300 focus:ring-amber-300"
        />
        <label className="text-sm text-slate-300">I understand tutoring is offered in packages.</label>
      </div>

      {/* honeypot */}
      <input {...register('hp')} className="sr-only" tabIndex={-1} />

      <div>
        <button
          type="submit"
          className="w-full rounded-full bg-amber-300 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200 disabled:opacity-60"
          disabled={formState.isSubmitting}
        >
          Enquire
        </button>
      </div>
    </form>
  )
}
