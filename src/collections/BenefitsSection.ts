import type { CollectionConfig } from 'payload'

export const BenefitsSection: CollectionConfig = {
  slug: 'benefits-sections',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'isActive', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Benefits Section',
      admin: {
        description: 'Internal title for this benefits section',
      },
    },
    // Section Title in all languages
    {
      name: 'sectionTitleRo',
      type: 'text',
      required: true,
      defaultValue: 'BENEFICII TORGA45',
      admin: {
        description: 'Section title in Romanian',
      },
    },
    {
      name: 'sectionTitleEn',
      type: 'text',
      required: true,
      defaultValue: 'TORGA45 BENEFITS',
      admin: {
        description: 'Section title in English',
      },
    },
    {
      name: 'sectionTitleHe',
      type: 'text',
      required: true,
      defaultValue: 'יתרונות טורגה45',
      admin: {
        description: 'Section title in Hebrew',
      },
    },
    // Benefits List - Array of benefit items
    {
      name: 'benefits',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'benefitRo',
          type: 'text',
          required: true,
          admin: {
            description: 'Benefit text in Romanian',
          },
        },
        {
          name: 'benefitEn',
          type: 'text',
          required: true,
          admin: {
            description: 'Benefit text in English',
          },
        },
        {
          name: 'benefitHe',
          type: 'text',
          required: true,
          admin: {
            description: 'Benefit text in Hebrew',
          },
        },
      ],
      defaultValue: [
        {
          benefitRo: 'ZONĂ LINIȘTITĂ',
          benefitEn: 'QUIET AREA',
          benefitHe: 'אזור שקט',
        },
        {
          benefitRo: 'APROAPE DE BUCUREȘTI',
          benefitEn: 'CLOSE TO BUCHAREST',
          benefitHe: 'קרוב לבוקרשט',
        },
        {
          benefitRo: 'ACCES SECURIZAT',
          benefitEn: 'SECURE ACCESS',
          benefitHe: 'גישה מאובטחת',
        },
        {
          benefitRo: 'DOTĂRI PREMIUM',
          benefitEn: 'PREMIUM AMENITIES',
          benefitHe: 'שירותים פרימיום',
        },
      ],
    },
    // Main Image
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Main architectural image for the left side',
      },
    },
    // Background Color
    {
      name: 'backgroundColor',
      type: 'text',
      required: false,
      defaultValue: '#D4B896',
      admin: {
        description: 'Background color for the right side (hex code)',
      },
    },
    // Text Color
    {
      name: 'textColor',
      type: 'text',
      required: false,
      defaultValue: '#FFFFFF',
      admin: {
        description: 'Text color for the benefits (hex code)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle to activate/deactivate this benefits section',
      },
    },
  ],
}
