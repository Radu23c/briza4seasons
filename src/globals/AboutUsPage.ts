import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const AboutUsPage: GlobalConfig = {
  slug: 'about-us-page',
  label: 'About Us Page',
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
          defaultValue: 'Despre Ansamblul Rezidential Torga45',
          admin: {
            description: 'Main hero title in Romanian',
          },
        },
        {
          name: 'mainTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'About Torga45 Residential Complex',
          admin: {
            description: 'Main hero title in English',
          },
        },
        {
          name: 'mainTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'אודות מתחם המגורים טורגה45',
          admin: {
            description: 'Main hero title in Hebrew',
          },
        },
        // Subtitle
        {
          name: 'subtitleRo',
          type: 'text',
          required: false,
          defaultValue: 'CINE SUNTEM?',
          admin: {
            description: 'Hero subtitle in Romanian',
          },
        },
        {
          name: 'subtitleEn',
          type: 'text',
          required: false,
          defaultValue: 'WHO ARE WE?',
          admin: {
            description: 'Hero subtitle in English',
          },
        },
        {
          name: 'subtitleHe',
          type: 'text',
          required: false,
          defaultValue: 'מי אנחנו?',
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
      ],
    },

    // ABOUT CONTENT SECTION
    {
      name: 'aboutContentSection',
      type: 'group',
      label: 'About Content Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide about content section',
          },
        },
        // Section Title
        {
          name: 'sectionTitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Despre Noi',
          admin: {
            description: 'Section title in Romanian',
          },
        },
        {
          name: 'sectionTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'About Us',
          admin: {
            description: 'Section title in English',
          },
        },
        {
          name: 'sectionTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'אודותינו',
          admin: {
            description: 'Section title in Hebrew',
          },
        },
        // Main Heading
        {
          name: 'mainHeadingRo',
          type: 'text',
          required: false,
          defaultValue: 'Povestea proiectului nostru',
          admin: {
            description: 'Main heading in Romanian',
          },
        },
        {
          name: 'mainHeadingEn',
          type: 'text',
          required: false,
          defaultValue: "Our project's story",
          admin: {
            description: 'Main heading in English',
          },
        },
        {
          name: 'mainHeadingHe',
          type: 'text',
          required: false,
          defaultValue: 'הסיפור של הפרויקט שלנו',
          admin: {
            description: 'Main heading in Hebrew',
          },
        },
        // Rich Text Content
        {
          name: 'contentRo',
          type: 'richText',
          required: false,
          admin: {
            description: 'Main content in Romanian - use rich text formatting for styling',
          },
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures],
          }),
        },
        {
          name: 'contentEn',
          type: 'richText',
          required: false,
          admin: {
            description: 'Main content in English - use rich text formatting for styling',
          },
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures],
          }),
        },
        {
          name: 'contentHe',
          type: 'richText',
          required: false,
          admin: {
            description: 'Main content in Hebrew - use rich text formatting for styling',
          },
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures],
          }),
        },
        // Images for overlapping layout
        {
          name: 'images',
          type: 'array',
          required: false,
          minRows: 2,
          maxRows: 4,
          admin: {
            description: 'Images for the overlapping layout (2-4 images recommended)',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'altTextRo',
              type: 'text',
              required: false,
              admin: {
                description: 'Alt text in Romanian',
              },
            },
            {
              name: 'altTextEn',
              type: 'text',
              required: false,
              admin: {
                description: 'Alt text in English',
              },
            },
            {
              name: 'altTextHe',
              type: 'text',
              required: false,
              admin: {
                description: 'Alt text in Hebrew',
              },
            },
            {
              name: 'order',
              type: 'number',
              required: false,
              defaultValue: 1,
              admin: {
                description: 'Display order (1 = front, higher numbers = behind)',
              },
            },
          ],
          defaultValue: [],
        },
      ],
    },
  ],
}