"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

type WaitlistValues = {
  email: string
  name: string
  studentYear: string
  target: string
  location: string
  subjects: string
  packageConsent?: boolean
  hp?: string
}

const DEFAULT_SUBJECT = 'AI Intelligence Apprenticeship Waitlist'
const DEFAULT_LOCATION = 'Waitlist (London hybrid)'

export default function AIWaitlistForm() {
  const { register, handleSubmit, reset, setError, formState } = useForm<WaitlistValues>({
    mode: 'onSubmit',
    defaultValues: {
      name: 'Waitlist parent',
      studentYear: 'Waitlist',
      target: 'Waitlist',
      subjects: DEFAULT_SUBJECT,
      location: DEFAULT_LOCATION,
      packageConsent: true,
    },
  })

  async function onSubmit(values: WaitlistValues) {
    if (!values.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      setError('email' as any, { message: 'Enter a valid email' })
      return
    }
    const payload: WaitlistValues = {
      ...values,
      name: values.name || 'Waitlist parent',
      studentYear: values.studentYear || 'Waitlist',
      target: values.target || 'Waitlist',
      subjects: values.subjects || DEFAULT_SUBJECT,
      location: values.location || DEFAULT_LOCATION,
      packageConsent: true,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        reset({
          email: '',
          name: 'Waitlist parent',
          studentYear: 'Waitlist',
          target: 'Waitlist',
          location: DEFAULT_LOCATION,
          subjects: DEFAULT_SUBJECT,
          packageConsent: true,
          hp: '',
        })
        alert('You are on the waitlist — I’ll follow up within 24 hours.')
      } else {
        const payload = await res.json().catch(() => ({}))
        alert(payload?.error || 'Failed to submit')
      }
    } catch (error) {
      console.error(error)
      alert('Network error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label className="block text-sm font-medium text-cyan-100">Email</label>
        <input
          {...register('email')}
          className="mt-2 w-full rounded-lg border border-cyan-200/40 bg-slate-900/70 px-3 py-3 text-slate-100 placeholder-slate-500 shadow-[0_0_18px_rgba(34,211,238,0.18)] focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
          type="email"
          aria-required
        />
      </div>
      {/* Hidden defaults to satisfy validation while keeping the form frictionless */}
      <input type="hidden" {...register('name')} defaultValue="Waitlist parent" />
      <input type="hidden" {...register('studentYear')} defaultValue="Waitlist" />
      <input type="hidden" {...register('target')} defaultValue="Waitlist" />
      <input type="hidden" {...register('location')} defaultValue={DEFAULT_LOCATION} />
      <input type="hidden" {...register('subjects')} defaultValue={DEFAULT_SUBJECT} />
      <input type="checkbox" {...register('packageConsent')} defaultChecked className="sr-only" tabIndex={-1} aria-hidden />

      <input {...register('hp')} className="sr-only" tabIndex={-1} />

      <div>
        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_26px_rgba(34,211,238,0.45)] transition hover:-translate-y-1 hover:shadow-[0_0_34px_rgba(34,211,238,0.6)] disabled:opacity-60"
          disabled={formState.isSubmitting}
        >
          Join the waitlist
        </button>
      </div>
    </form>
  )
}
