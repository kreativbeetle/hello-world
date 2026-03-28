import type { CollectionConfig } from 'payload'
import { seoFields } from '@/lib/payload/fields'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'content',
      type: 'richText',
    },
    ...seoFields,
  ],
}
