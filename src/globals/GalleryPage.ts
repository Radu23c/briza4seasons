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
          required: true,
          defaultValue: 'Galeria Ansamblului Rezidential Torga45',
          admin: {
            description: 'Main hero title in Romanian',
          },
        },
        {
          name: 'mainTitleEn',
          type: 'text',
          required: true,
          defaultValue: 'Torga45 Residential Complex Gallery',
          admin: {
            description: 'Main hero title in English',
          },
        },
        {
          name: 'mainTitleHe',
          type: 'text',
          required: true,
          defaultValue: 'גלריית מתחם המגורים טורגה45',
          admin: {
            description: 'Main hero title in Hebrew',
          },
        },
        // Subtitle
        {
          name: 'subtitleRo',
          type: 'text',
          required: true,
          defaultValue: 'GALERIE FOTO',
          admin: {
            description: 'Hero subtitle in Romanian',
          },
        },
        {
          name: 'subtitleEn',
          type: 'text',
          required: true,
          defaultValue: 'PHOTO GALLERY',
          admin: {
            description: 'Hero subtitle in English',
          },
        },
        {
          name: 'subtitleHe',
          type: 'text',
          required: true,
          defaultValue: 'גלריית תמונות',
          admin: {
            description: 'Hero subtitle in Hebrew',
          },
        },
        // Background Image
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Hero background image',
          },
        },
        // Breadcrumbs
        {
          name: 'breadcrumbs',
          type: 'array',
          required: true,
          minRows: 1,
          maxRows: 5,
          fields: [
            {
              name: 'labelRo',
              type: 'text',
              required: true,
            },
            {
              name: 'labelEn',
              type: 'text',
              required: true,
            },
            {
              name: 'labelHe',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
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
