import type { GlobalConfig } from 'payload'

export const GalleryPage: GlobalConfig = {
  slug: 'gallery-page',
  label: 'Gallery Page',
  access: {
    read: () => true,
  },
  fields: [
    // HERO SECTION
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide hero section',
          },
        },
        // Main Title
        {
          name: 'mainTitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Galeria Ansamblului Rezidential Torga45',
          admin: {
            description: 'Main hero title in Romanian',
          },
        },
        {
          name: 'mainTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'Torga45 Residential Complex Gallery',
          admin: {
            description: 'Main hero title in English',
          },
        },
        {
          name: 'mainTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'גלריית מתחם המגורים טורגה45',
          admin: {
            description: 'Main hero title in Hebrew',
          },
        },
        // Subtitle
        {
          name: 'subtitleRo',
          type: 'text',
          required: false,
          defaultValue: 'GALERIE',
          admin: {
            description: 'Hero subtitle in Romanian',
          },
        },
        {
          name: 'subtitleEn',
          type: 'text',
          required: false,
          defaultValue: 'GALLERY',
          admin: {
            description: 'Hero subtitle in English',
          },
        },
        {
          name: 'subtitleHe',
          type: 'text',
          required: false,
          defaultValue: 'גלריה',
          admin: {
            description: 'Hero subtitle in Hebrew',
          },
        },
        // Background Image
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            description: 'Hero background image',
          },
        },
        // Breadcrumbs
        {
          name: 'breadcrumbs',
          type: 'array',
          required: false,
          minRows: 1,
          maxRows: 5,
          fields: [
            {
              name: 'labelRo',
              type: 'text',
              required: false,
            },
            {
              name: 'labelEn',
              type: 'text',
              required: false,
            },
            {
              name: 'labelHe',
              type: 'text',
              required: false,
            },
            {
              name: 'href',
              type: 'text',
              required: false,
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Is this the current page?',
              },
            },
          ],
          defaultValue: [
            {
              labelRo: 'ACASĂ',
              labelEn: 'HOME',
              labelHe: 'בית',
              href: '/',
              isActive: false,
            },
            {
              labelRo: 'GALERIE',
              labelEn: 'GALLERY',
              labelHe: 'גלריה',
              href: '/gallery',
              isActive: true,
            },
          ],
        },
      ],
    },
  ],
}
