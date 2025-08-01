import type { CollectionConfig } from 'payload'

export const FeaturesOverview: CollectionConfig = {
  slug: 'features-overview',
  admin: {
    useAsTitle: 'titleRo',
    defaultColumns: ['titleRo', 'isActive', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    // Section title in all languages
    {
      name: 'titleRo',
      type: 'text',
      required: false,
      admin: {
        description: 'Section title in Romanian (optional)',
      },
    },
    {
      name: 'titleEn',
      type: 'text',
      required: false,
      admin: {
        description: 'Section title in English (optional)',
      },
    },
    {
      name: 'titleHe',
      type: 'text',
      required: false,
      admin: {
        description: 'Section title in Hebrew (optional)',
      },
    },
    // Background image
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Large background image showing the development overview',
      },
    },
    // Background image alt text in all languages
    {
      name: 'backgroundImageAltRo',
      type: 'text',
      required: false,
      admin: {
        description: 'Background image alt text in Romanian',
      },
    },
    {
      name: 'backgroundImageAltEn',
      type: 'text',
      required: false,
      admin: {
        description: 'Background image alt text in English',
      },
    },
    {
      name: 'backgroundImageAltHe',
      type: 'text',
      required: false,
      admin: {
        description: 'Background image alt text in Hebrew',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle to activate/deactivate this features overview section',
      },
    },
  ],
}
