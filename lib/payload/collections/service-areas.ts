import type { CollectionConfig } from 'payload'
import { seoFields } from '@/lib/payload/fields'

export const ServiceAreas: CollectionConfig = {
  slug: 'serviceAreas',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'state', type: 'text', required: true },
    ...seoFields,
  ],
}
