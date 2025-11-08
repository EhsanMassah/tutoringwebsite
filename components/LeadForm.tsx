"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

type ContactFormValues = {
  name: string
  email: string
  phone?: string | null
  level: string
  subjects?: string
  goals?: string
  consent?: boolean
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
    if (!values.level) {
      setError('level' as any, { message: 'Please select student level' })
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
        alert('Thanks — I will be in touch shortly.')
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
        <label className="block text-sm font-medium text-slate-200">Full name</label>
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
        <label className="block text-sm font-medium text-slate-200">Student level</label>
        <select
          {...register('level')}
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
          defaultValue="GCSE"
        >
          <option value="GCSE">GCSE</option>
          <option value="A-Level">A-Level</option>
          <option value="IB">IB</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Subject(s)</label>
        <input
          {...register('subjects')}
          placeholder="e.g. Maths, Physics"
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-200">Goals</label>
        <textarea
          {...register('goals')}
          className="mt-1 w-full rounded border border-white/15 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
          rows={3}
        />
      </div>
      <div className="flex items-center">
        <input
          {...register('consent')}
          type="checkbox"
          className="mr-2 h-4 w-4 rounded border border-white/20 bg-slate-900/60 text-amber-300 focus:ring-amber-300"
        />
        <label className="text-sm text-slate-300">I consent to be contacted regarding tutoring</label>
      </div>

      {/* honeypot */}
      <input {...register('hp')} className="sr-only" tabIndex={-1} />

      <div>
        <button
          type="submit"
          className="w-full rounded-full bg-amber-300 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200 disabled:opacity-60"
          disabled={formState.isSubmitting}
        >
          Send enquiry
        </button>
      </div>
    </form>
  )
}
