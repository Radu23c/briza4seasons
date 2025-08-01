import type { CollectionConfig } from 'payload'

export const FeatureItem: CollectionConfig = {
  slug: 'feature-items',
  admin: {
    useAsTitle: 'titleRo',
    defaultColumns: ['titleRo', 'order', 'isActive', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'order',
      type: 'number',
      required: false,
      defaultValue: 1,
      admin: {
        description: 'Order of appearance (01, 02, 03, etc.)',
      },
    },
    {
      name: 'icon',
      type: 'select',
      required: false,
      options: [
        { label: 'Sofa (Living)', value: 'sofa' },
        { label: 'House (Home)', value: 'house' },
        { label: 'Car (Parking)', value: 'car' },
        { label: 'Tree (Garden)', value: 'tree' },
        { label: 'Shield (Security)', value: 'shield' },
        { label: 'Wifi (Technology)', value: 'wifi' },
        { label: 'Heart (Comfort)', value: 'heart' },
        { label: 'Star (Premium)', value: 'star' },
      ],
      admin: {
        description: 'Icon to display for this feature',
      },
    },
    // Romanian fields
    {
      name: 'titleRo',
      type: 'text',
      required: false,
      admin: {
        description: 'Title in Romanian',
      },
    },
    {
      name: 'descriptionRo',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Description in Romanian',
      },
    },
    // English fields
    {
      name: 'titleEn',
      type: 'text',
      required: false,
      admin: {
        description: 'Title in English',
      },
    },
    {
      name: 'descriptionEn',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Description in English',
      },
    },
    // Hebrew fields
    {
      name: 'titleHe',
      type: 'text',
      required: false,
      admin: {
        description: 'Title in Hebrew',
      },
    },
    {
      name: 'descriptionHe',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Description in Hebrew',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle to activate/deactivate this feature item',
      },
    },
  ],
}
