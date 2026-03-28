import type { CollectionConfig } from 'payload'

export const GalleryItems: CollectionConfig = {
  slug: 'galleryItems',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'beforeImage', type: 'relationship', relationTo: 'media', required: true },
    { name: 'afterImage', type: 'relationship', relationTo: 'media', required: true },
  ],
}
