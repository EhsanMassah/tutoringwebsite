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

Files of interest

- `app/(site)/` — pages (home, about, subjects, pricing, contact, blog)
- `app/api/contact/route.ts` — form submission handler
- `components/` — reusable UI pieces
- `lib/validation.ts` — zod schemas for forms
- `data/subjects.ts` — seed subjects

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
