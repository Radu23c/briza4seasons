import type { CollectionConfig } from 'payload'

export const FeaturesSection: CollectionConfig = {
  slug: 'features-sections',
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
      required: false,
      defaultValue: 'Features Section',
      admin: {
        description: 'Internal title for this features section',
      },
    },
    // Project Name in all languages
    {
      name: 'projectNameRo',
      type: 'text',
      required: false,
      defaultValue: 'Torga15',
      admin: {
        description: 'Project name in Romanian',
      },
    },
    {
      name: 'projectNameEn',
      type: 'text',
      required: false,
      defaultValue: 'Torga15',
      admin: {
        description: 'Project name in English',
      },
    },
    {
      name: 'projectNameHe',
      type: 'text',
      required: false,
      defaultValue: 'טורגה15',
      admin: {
        description: 'Project name in Hebrew',
      },
    },
    {
      name: 'villaCount',
      type: 'number',
      required: false,
      defaultValue: 21,
      admin: {
        description: 'Number of villas in the development',
      },
    },
    // Villa Count Text in all languages
    {
      name: 'villaCountTextRo',
      type: 'text',
      required: false,
      defaultValue: 'Vile în ansamblul',
      admin: {
        description: 'Villa count text in Romanian',
      },
    },
    {
      name: 'villaCountTextEn',
      type: 'text',
      required: false,
      defaultValue: 'Villas in the complex',
      admin: {
        description: 'Villa count text in English',
      },
    },
    {
      name: 'villaCountTextHe',
      type: 'text',
      required: false,
      defaultValue: 'וילות במתחם',
      admin: {
        description: 'Villa count text in Hebrew',
      },
    },
    // Main Heading in all languages
    {
      name: 'mainHeadingRo',
      type: 'text',
      required: false,
      defaultValue: 'oferă o experiență rezidențială aparte, cu',
      admin: {
        description: 'Main heading in Romanian',
      },
    },
    {
      name: 'mainHeadingEn',
      type: 'text',
      required: false,
      defaultValue: 'offers a unique residential experience, with',
      admin: {
        description: 'Main heading in English',
      },
    },
    {
      name: 'mainHeadingHe',
      type: 'text',
      required: false,
      defaultValue: 'מציע חוויית מגורים ייחודית, עם',
      admin: {
        description: 'Main heading in Hebrew',
      },
    },
    // Accent Text in all languages
    {
      name: 'accentTextRo',
      type: 'text',
      required: false,
      defaultValue: 'accent pe confort',
      admin: {
        description: 'Accent text in Romanian',
      },
    },
    {
      name: 'accentTextEn',
      type: 'text',
      required: false,
      defaultValue: 'emphasis on comfort',
      admin: {
        description: 'Accent text in English',
      },
    },
    {
      name: 'accentTextHe',
      type: 'text',
      required: false,
      defaultValue: 'דגש על נוחות',
      admin: {
        description: 'Accent text in Hebrew',
      },
    },
    // Sub Heading in all languages
    {
      name: 'subHeadingRo',
      type: 'text',
      required: false,
      defaultValue: 'și comoditatea vieții moderne',
      admin: {
        description: 'Sub-heading in Romanian',
      },
    },
    {
      name: 'subHeadingEn',
      type: 'text',
      required: false,
      defaultValue: 'and the convenience of modern living',
      admin: {
        description: 'Sub-heading in English',
      },
    },
    {
      name: 'subHeadingHe',
      type: 'text',
      required: false,
      defaultValue: 'והנוחות של חיים מודרניים',
      admin: {
        description: 'Sub-heading in Hebrew',
      },
    },
    // Details Text in all languages
    {
      name: 'detailsTextRo',
      type: 'text',
      required: false,
      defaultValue: 'MAI MULTE DETALII?',
      admin: {
        description: 'Details text in Romanian',
      },
    },
    {
      name: 'detailsTextEn',
      type: 'text',
      required: false,
      defaultValue: 'MORE DETAILS?',
      admin: {
        description: 'Details text in English',
      },
    },
    {
      name: 'detailsTextHe',
      type: 'text',
      required: false,
      defaultValue: 'פרטים נוספים?',
      admin: {
        description: 'Details text in Hebrew',
      },
    },
    {
      name: 'exteriorImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Main exterior/garden image',
      },
    },
    {
      name: 'interiorImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Interior living space image',
      },
    },
    {
      name: 'detailsLink',
      type: 'text',
      required: false,
      defaultValue: '/details',
      admin: {
        description: 'Link for the details section (optional)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle to activate/deactivate this features section',
      },
    },
  ],
}
