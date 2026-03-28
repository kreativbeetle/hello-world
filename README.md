# Anderson Property Preservation (APP)

Production scaffold for **Next.js + Payload CMS + Tailwind** aligned to APP architecture.

## Stack pins

- Node.js 20.x
- Next.js 15.4.x
- Payload CMS 3.x (Next.js-compatible)
- PostgreSQL (RDS target)
- S3 (media + estimate uploads)
- SES (transactional email)

## Quick start

1. Install dependencies
   ```bash
   npm install
   ```
2. Copy env file
   ```bash
   cp .env.example .env.local
   ```
3. Run dev server
   ```bash
   npm run dev
   ```

## Route scaffold

The following public routes are scaffolded in the App Router:

- `/`
- `/services`
- `/property-cleanouts-columbus-ga`
- `/junk-removal-columbus-ga`
- `/lawn-overgrowth-cleanup-columbus-ga`
- `/rental-turnover-cleanup-columbus-ga`
- `/property-managers-investors`
- `/service-areas`
- `/service-areas/columbus-muscogee`
- `/service-areas/harris-county-ga`
- `/service-areas/russell-county-al`
- `/before-after-gallery`
- `/about`
- `/request-estimate`
- `/thank-you`
- `/privacy-policy`

## Payload scaffold status

Implemented collections/globals:

- collections: `users`, `media`, `pages`, `services`, `serviceAreas`, `galleryItems`, `reviews`, `faqs`, `estimateSubmissions`
- globals: `siteSettings`, `headerSettings`, `footerSettings`, `homepage`

## Next implementation milestones

1. Complete Payload official Next admin route wiring.
2. Add dynamic page rendering from Payload docs.
3. Implement S3 pre-signed upload flow in `app/api/uploads/presign/route.ts`.
4. Implement estimate save + SES notifications in `app/api/estimates/route.ts`.
5. Add SEO utilities (metadata, sitemap, robots, schema).
6. Add analytics events and spam protection.
