# Ehsan Massah Tutoring — Next.js scaffold

This repository is a production-ready scaffold for a tutoring website focusing on SEO, accessibility, fast performance and simple UX.

Getting started

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

Environment variables

- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS — for Nodemailer (optional)
- ADMIN_EMAIL — email to receive lead notifications
- AUTOREPLY_SUBJECT (optional) — custom subject line for the client acknowledgement email
- AUTOREPLY_BODY (optional) — plain-text body for the client acknowledgement email
- AUTOREPLY_DISABLED (optional) — set to `true` to skip autoresponder even when SMTP is configured
- UPSTASH_VECTOR_REST_URL / UPSTASH_VECTOR_REST_TOKEN — optional Upstash Vector store for leads (takes priority when set); you can also set `UPSTASH_VECTOR_NAMESPACE` to isolate data per environment
- KV_REST_API_URL / KV_REST_API_TOKEN (or the Vercel-provided `VERCEL_KV_*` vars) — optional Vercel KV connection for persisting leads if Upstash Vector is unavailable; falls back to `data/leads.json` locally
- Copy `.env.example` to `.env.local` and fill in the values above before running `npm run dev` if you want to test the full email flow locally.

Files of interest

- `app/(site)/` — pages (home, about, subjects, pricing, contact, blog)
- `app/api/contact/route.ts` — form submission handler
- `components/` — reusable UI pieces
- `lib/validation.ts` — zod schemas for forms
- `data/subjects.ts` — seed subjects
- `data/leads.json` — generated at runtime; local fallback store for recent lead submissions when Vercel KV is unavailable (gitignored)

# Managing content

## Decap CMS options

### Local authoring (optional)

1. `npm install`
2. In one terminal run the local git proxy:
   ```bash
   npx decap-server
   ```
3. In another terminal run the site:
   ```
   npm run dev
   ```
4. Visit `http://localhost:3000/admin`, click “Login with Netlify Identity”, and follow the local sign-in prompt.  

### Netlify-hosted CMS (recommended)

1. Deploy the repo to Netlify (link your GitHub repo and select the default build command `npm run build`).  
2. Netlify automatically installs `@netlify/plugin-nextjs` via `netlify.toml`.  
3. Enable **Netlify Identity** and **Git Gateway** in the site dashboard.  
4. Invite yourself (and collaborators) via Identity.  
5. Visit `https://your-site.netlify.app/admin` → log in with Netlify Identity → manage Resources/Articles.  

All resources are stored as Markdown under `content/resources/` and are read by the Next.js app at build time.

To connect a production site, configure Netlify Identity or Git Gateway credentials that suit your hosting platform.

Tests

```bash
npm test
```
