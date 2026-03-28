import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
  fields: [
    { name: 'businessName', type: 'text', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'hours', type: 'textarea' },
    { name: 'primaryEmail', type: 'email', required: true },
    { name: 'serviceRadiusBlurb', type: 'textarea' },
    { name: 'defaultSeoImage', type: 'relationship', relationTo: 'media' },
  ],
}
