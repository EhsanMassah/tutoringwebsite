import React from 'react'
import { generateSiteMetadata } from '../../../lib/seo'

export const metadata = generateSiteMetadata({
  title: 'Privacy Policy | CF Tutoring',
  description: 'Privacy policy for CF Tutoring covering contact enquiries, analytics, email communications, data retention and your rights.',
  keywords: ['CF Tutoring privacy policy', 'data protection', 'GDPR', 'Chelsea tutor privacy'],
  pathname: '/privacy',
})

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 text-slate-100">
      <h1 className="text-4xl font-semibold text-white sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-300">Last updated: 27 November 2024</p>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-slate-200">
        <p>
          CF Tutoring (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides private tutoring services. This policy explains what data we collect,
          why we collect it, and how you can exercise your rights under UK GDPR.
        </p>

        <h2 className="text-2xl font-semibold text-white">What we collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Contact details you provide (name, email, phone) when you submit an enquiry or book a consultation.</li>
          <li>Student details relevant to tutoring (year group, subjects, goals, availability) that you choose to share.</li>
          <li>Website analytics (via Vercel/Next.js) which are anonymised and used to understand site performance.</li>
          <li>Basic device and browser data from server logs (for security and troubleshooting).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white">How we use your data</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>To respond to enquiries, schedule consultations, and deliver tutoring services.</li>
          <li>To send essential updates about lessons, availability, or agreed plans.</li>
          <li>To improve site performance and security.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white">Sharing your data</h2>
        <p>
          We do not sell your data. We may share limited information with service providers (e.g. hosting, email) solely to operate the service.
          All providers are contractually required to protect your data.
        </p>

        <h2 className="text-2xl font-semibold text-white">Data retention</h2>
        <p>
          Enquiry data is retained while we are in contact. If you do not proceed, we aim to delete enquiry details within 12 months. If you become a
          client, we keep relevant records for as long as necessary to deliver services and meet legal obligations.
        </p>

        <h2 className="text-2xl font-semibold text-white">Your rights</h2>
        <p>
          You can request access, correction, deletion, or restriction of your personal data. To exercise these rights, contact{' '}
          <a href="mailto:ehsan@cftutoring.com" className="text-amber-200 hover:text-white">
            ehsan@cftutoring.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-white">Security</h2>
        <p>
          We use industry-standard security practices and reputable third-party providers for hosting and email. No method is 100% secure; contact us
          if you have concerns.
        </p>

        <h2 className="text-2xl font-semibold text-white">Cookies and tracking</h2>
        <p>
          We do not run advertising trackers. Basic, anonymised analytics may be collected to monitor performance. You can adjust your browser
          settings to manage cookies.
        </p>

        <h2 className="text-2xl font-semibold text-white">Contact</h2>
        <p>
          For any privacy questions, email{' '}
          <a href="mailto:ehsan@cftutoring.com" className="text-amber-200 hover:text-white">
            ehsan@cftutoring.com
          </a>{' '}
          or call <a href="tel:+447957933537" className="text-amber-200 hover:text-white">+44 7957 933537</a>.
        </p>
      </section>
    </div>
  )
}
