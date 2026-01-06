"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

type AIProgrammeFormValues = {
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

const DEFAULT_SUBJECT = 'AI Intelligence Apprenticeship'

export default function AIProgrammeForm() {
  const { register, handleSubmit, setError, reset, formState } = useForm<AIProgrammeFormValues>({
    mode: 'onSubmit',
    defaultValues: {
      subjects: DEFAULT_SUBJECT,
      location: 'Hybrid (London + online)',
      packageConsent: true,
    },
  })

  async function onSubmit(values: AIProgrammeFormValues) {
    if (!values.name || values.name.length < 2) {
      setError('name' as any, { message: 'Please enter your name' })
      return
    }
    if (!values.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      setError('email' as any, { message: 'Please enter a valid email' })
      return
    }
    if (!values.studentYear) {
      setError('studentYear' as any, { message: 'Select the student year' })
      return
    }
    if (!values.target) {
      setError('target' as any, { message: 'Add a short ambition or focus' })
      return
    }
    if (!values.location) {
      setError('location' as any, { message: 'Choose a location format' })
      return
    }
    if (!values.packageConsent) {
      setError('packageConsent' as any, { message: 'Please confirm understanding' })
      return
    }

    const payload: AIProgrammeFormValues = {
      ...values,
      subjects: values.subjects || DEFAULT_SUBJECT,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        reset({
          name: '',
          email: '',
          phone: '',
          studentYear: '',
          subjects: DEFAULT_SUBJECT,
          target: '',
          timeline: '',
          preferredSlots: '',
          location: values.location,
          packageConsent: true,
          hp: '',
        })
        alert('Application received — I will respond within 24 hours.')
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
          className="mt-2 w-full rounded border border-white/15 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
          aria-required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Email</label>
        <input
          {...register('email')}
          className="mt-2 w-full rounded border border-white/15 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
          type="email"
          aria-required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Phone (optional)</label>
        <input
          {...register('phone')}
          className="mt-2 w-full rounded border border-white/15 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Student year</label>
        <select
          {...register('studentYear')}
          className="mt-2 w-full rounded border border-white/15 bg-slate-900/70 px-3 py-2 text-slate-100 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
          defaultValue=""
        >
          <option value="" disabled>
            Select
          </option>
          <option value="Year 12 (Lower Sixth)">Year 12 (Lower Sixth)</option>
          <option value="Year 13 (Upper Sixth)">Year 13 (Upper Sixth)</option>
          <option value="Gap year / 18">Gap year / 18</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Student ambition</label>
        <input
          {...register('target')}
          placeholder="e.g. Oxbridge Engineering / Ivy CS / competitive scholarship"
          className="mt-2 w-full rounded border border-white/15 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
          aria-required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Why this programme?</label>
        <input
          {...register('subjects')}
          className="mt-2 w-full rounded border border-white/15 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
          placeholder={DEFAULT_SUBJECT}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Availability / timing</label>
        <input
          {...register('timeline')}
          placeholder="e.g. Ready to start November · weekend seminars preferred"
          className="mt-2 w-full rounded border border-white/15 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Location format</label>
        <select
          {...register('location')}
          className="mt-2 w-full rounded border border-white/15 bg-slate-900/70 px-3 py-2 text-slate-100 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
        >
          <option value="Hybrid (London + online)">Hybrid (London + online)</option>
          <option value="London in-person + online">London in-person + online</option>
          <option value="Online only">Online only</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Anything else</label>
        <input
          {...register('preferredSlots')}
          placeholder="e.g. School, competitions, any concerns"
          className="mt-2 w-full rounded border border-white/15 bg-slate-900/70 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-300"
        />
      </div>
      <div className="flex items-start gap-2 rounded-2xl bg-white/5 p-3">
        <input
          {...register('packageConsent')}
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border border-white/20 bg-slate-900/70 text-cyan-300 focus:ring-cyan-300"
          defaultChecked
        />
        <label className="text-sm text-slate-300 leading-relaxed">
          I understand this is an application-only programme with a limited cohort, separate from regular tutoring packages.
        </label>
      </div>

      <input {...register('hp')} className="sr-only" tabIndex={-1} />

      <div>
        <button
          type="submit"
          className="w-full rounded-full bg-cyan-300 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200 disabled:opacity-60"
          disabled={formState.isSubmitting}
        >
          Apply for a call
        </button>
      </div>
    </form>
  )
}
