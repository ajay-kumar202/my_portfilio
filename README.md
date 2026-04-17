# Ajay Kumar Premium Portfolio

Modern multi-page portfolio built with Next.js App Router + TypeScript, Tailwind CSS, Framer Motion, Lucide, and next-themes.

## Setup

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Recommended folder structure

```txt
app/
  page.tsx
  about/page.tsx
  experience/page.tsx
  contact/page.tsx
  resume/page.tsx
  projects/[slug]/page.tsx
  solutions/*/page.tsx
  opengraph-image.tsx
  twitter-image.tsx
  sitemap.ts
  robots.ts
components/
  layout/
  providers/
  projects/
  sections/
  ui/
data/
  projects.ts
lib/
  seo.ts
  site.ts
```

## Environment variables

Create `.env.local` from `.env.example` and set real values.

## Placeholder replacement points

- `lib/site.ts`:
  - site URL
  - email
  - LinkedIn / GitHub / Calendly / WhatsApp URLs
- `data/projects.ts`:
  - project copy, outcomes, images, and SEO keywords
- `public/profile-placeholder.svg` and project image paths:
  - replace with branded media assets
- `public/resume.pdf`:
  - replace with final resume
- `components/sections/experience-section.tsx`:
  - inject parsed resume timeline and measurable leadership impact
# my_portfilio
