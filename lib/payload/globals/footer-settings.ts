import type { GlobalConfig } from 'payload'

export const FooterSettings: GlobalConfig = {
  slug: 'footerSettings',
  fields: [
    { name: 'contactBlock', type: 'textarea' },
    {
      name: 'legalLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'serviceAreaLinks',
      type: 'relationship',
      relationTo: 'serviceAreas',
      hasMany: true,
    },
  ],
}
