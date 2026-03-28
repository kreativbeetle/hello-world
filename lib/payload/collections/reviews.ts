import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'rating', type: 'number', required: true, min: 1, max: 5 },
    { name: 'review', type: 'textarea', required: true },
  ],
}
