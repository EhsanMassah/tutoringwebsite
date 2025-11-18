"use client"

import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'cf-consent-choice'

type ConsentChoice = 'granted' | 'denied'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentChoice | null
    if (!stored) {
      setVisible(true)
      return
    }
    updateConsent(stored)
  }, [])

  function handleChoice(choice: ConsentChoice) {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, choice)
    updateConsent(choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-slate-900/95 p-6 text-sm text-slate-100 shadow-2xl backdrop-blur">
        <p className="text-base font-semibold text-white">Cookies & consent</p>
        <p className="mt-2 text-slate-300">
          I use cookies for essential site features and, with your permission, Google Analytics/Ads to understand performance. You can update your
          choice at any time by clearing cookies.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => handleChoice('granted')}
            className="inline-flex items-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
          >
            Accept all
          </button>
          <button
            onClick={() => handleChoice('denied')}
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:-translate-y-0.5 hover:border-white"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  )
}

function updateConsent(choice: ConsentChoice) {
  if (typeof window === 'undefined') return
  const gtag = (window as typeof window & { gtag?: Function }).gtag
  if (typeof gtag !== 'function') return
  ;(gtag as Function)('consent', 'update', {
    ad_storage: choice,
    analytics_storage: choice,
  })
}
