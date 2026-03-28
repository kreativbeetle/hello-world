import type { Field } from 'payload'

export const seoFields: Field[] = [
  {
    name: 'seoTitle',
    type: 'text',
    required: true,
  },
  {
    name: 'seoDescription',
    type: 'textarea',
    required: true,
  },
]
