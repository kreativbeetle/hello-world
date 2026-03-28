import type { CollectionConfig } from 'payload'

export const EstimateSubmissions: CollectionConfig = {
  slug: 'estimateSubmissions',
  admin: { useAsTitle: 'contactName' },
  fields: [
    { name: 'contactName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'serviceType', type: 'relationship', relationTo: 'services' },
    { name: 'propertyAddress', type: 'textarea', required: true },
    {
      name: 'occupancyStatus',
      type: 'select',
      options: ['Occupied', 'Vacant', 'Unknown'],
      required: true,
    },
    { name: 'timeline', type: 'text' },
    { name: 'accessDetails', type: 'textarea' },
    { name: 'payerApprover', type: 'text' },
    { name: 'uploadKeys', type: 'array', fields: [{ name: 'key', type: 'text' }] },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: ['new', 'reviewing', 'quoted', 'closed'],
    },
  ],
}
