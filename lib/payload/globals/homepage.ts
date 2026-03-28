import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    { name: 'heroHeading', type: 'text', required: true },
    { name: 'heroSubheading', type: 'textarea', required: true },
    {
      name: 'trustStripItems',
      type: 'array',
      fields: [{ name: 'item', type: 'text', required: true }],
    },
    {
      name: 'processSteps',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    { name: 'finalCtaTitle', type: 'text' },
  ],
}
