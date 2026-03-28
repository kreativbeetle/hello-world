import type { GlobalConfig } from 'payload'

export const HeaderSettings: GlobalConfig = {
  slug: 'headerSettings',
  fields: [
    { name: 'ctaPrimaryLabel', type: 'text', defaultValue: 'Request Estimate' },
    { name: 'ctaSecondaryLabel', type: 'text', defaultValue: 'Call Now' },
    {
      name: 'navLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
  ],
}
