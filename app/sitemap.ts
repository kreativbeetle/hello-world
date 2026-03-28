import type { MetadataRoute } from 'next'

const routes = [
  '',
  '/services',
  '/property-cleanouts-columbus-ga',
  '/junk-removal-columbus-ga',
  '/lawn-overgrowth-cleanup-columbus-ga',
  '/rental-turnover-cleanup-columbus-ga',
  '/property-managers-investors',
  '/service-areas',
  '/service-areas/columbus-muscogee',
  '/service-areas/harris-county-ga',
  '/service-areas/russell-county-al',
  '/before-after-gallery',
  '/about',
  '/request-estimate',
  '/thank-you',
  '/privacy-policy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://andersonpropertypreservation.com'

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
