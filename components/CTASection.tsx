import React from 'react'

export default function CTASection() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-white/[0.04] px-8 py-16 text-center shadow-2xl backdrop-blur">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Begin your programme with Ehsan</h2>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          Share your child’s goals and I’ll outline a bespoke pathway for Maths or Science success.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-amber-200"
          >
            Arrange a consultation
          </a>
          <a
            href="https://wa.me/447957933537?text=Hi%20Ehsan,%20I%27d%20like%20to%20arrange%20a%20free%20consultation%20for%20Maths%2FScience%20tutoring."
            className="inline-flex items-center justify-center rounded-full border border-amber-200/60 px-8 py-3 text-sm font-semibold text-amber-200 transition hover:-translate-y-1 hover:text-white"
          >
            Message on WhatsApp
          </a>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-amber-200/80">Response within 24 hours</p>
      </div>
    </section>
  )
}
