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
      ],
    },

    // GALLERY SECTION
    {
      name: 'gallerySection',
      type: 'group',
      label: 'Gallery Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          label: 'Show Gallery Section',
          defaultValue: true,
          admin: {
            description: 'Show/hide the main gallery section',
          },
        },
        {
          name: 'sectionTitleRo',
          type: 'text',
          label: 'Section Title (Romanian)',
          defaultValue: 'Progresul',
          admin: {
            description: 'Main section title in Romanian',
          },
        },
        {
          name: 'sectionTitleEn',
          type: 'text',
          label: 'Section Title (English)',
          defaultValue: 'Progress',
          admin: {
            description: 'Main section title in English',
          },
        },
        {
          name: 'sectionTitleHe',
          type: 'text',
          label: 'Section Title (Hebrew)',
          defaultValue: 'התקדמות',
          admin: {
            description: 'Main section title in Hebrew',
          },
        },
        {
          name: 'sectionSubtitleRo',
          type: 'text',
          label: 'Section Subtitle (Romanian)',
          defaultValue: 'Construcției',
          admin: {
            description: 'Section subtitle in Romanian (appears after title in italic)',
          },
        },
        {
          name: 'sectionSubtitleEn',
          type: 'text',
          label: 'Section Subtitle (English)',
          defaultValue: 'Construction',
          admin: {
            description: 'Section subtitle in English (appears after title in italic)',
          },
        },
        {
          name: 'sectionSubtitleHe',
          type: 'text',
          label: 'Section Subtitle (Hebrew)',
          defaultValue: 'הבנייה',
          admin: {
            description: 'Section subtitle in Hebrew (appears after title in italic)',
          },
        },
        {
          name: 'enableLightbox',
          type: 'checkbox',
          label: 'Enable Lightbox',
          defaultValue: true,
          admin: {
            description: 'Allow users to click images to view them in fullscreen lightbox',
          },
        },
        {
          name: 'dateDisplayFormat',
          type: 'select',
          label: 'Date Display Format',
          options: [
            { label: 'Full (15 January, 2024)', value: 'full' },
            { label: 'Short (15 Jan, 2024)', value: 'short' },
            { label: 'Numeric (15/01/2024)', value: 'numeric' },
            { label: 'ISO (2024-01-15)', value: 'iso' },
          ],
          defaultValue: 'full',
          admin: {
            description: 'How to display dates above image groups',
          },
        },

        // Gallery Images
        {
          name: 'galleryImages',
          type: 'array',
          label: 'Gallery Images',
          minRows: 1,
          admin: {
            description: 'Upload and organize your gallery images by date',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Image',
              admin: {
                description: 'The image to display in the gallery',
              },
            },
            {
              name: 'uploadDate',
              type: 'date',
              label: 'Upload Date',
              required: true,
              admin: {
                description:
                  'Images will be grouped by this date. Use the same date for images that should appear together.',
              },
            },
            {
              name: 'order',
              type: 'number',
              label: 'Order',
              defaultValue: 1,
              admin: {
                description: 'Order within the date group (lower numbers appear first)',
              },
            },
            {
              name: 'caption',
              type: 'group',
              label: 'Image Caption (Optional)',
              admin: {
                description: 'Optional caption that appears over the image on hover',
              },
              fields: [
                {
                  name: 'captionRo',
                  type: 'text',
                  label: 'Caption (Romanian)',
                },
                {
                  name: 'captionEn',
                  type: 'text',
                  label: 'Caption (English)',
                },
                {
                  name: 'captionHe',
                  type: 'text',
                  label: 'Caption (Hebrew)',
                },
              ],
            },
          ],
        },

        // Date Info Boxes
        {
          name: 'dateInfoBoxes',
          type: 'array',
          label: 'Date Information Boxes',
          admin: {
            description:
              'Add informative text boxes for specific dates. These will appear below the date heading but above the images for that date.',
          },
          fields: [
            {
              name: 'date',
              type: 'date',
              label: 'Date',
              required: true,
              admin: {
                description:
                  'Must exactly match the upload date of images to appear for that date group',
              },
            },
            {
              name: 'order',
              type: 'number',
              label: 'Display Order',
              defaultValue: 1,
              admin: {
                description:
                  'If multiple info boxes exist for the same date, they will be ordered by this field (lower numbers first)',
              },
            },
            {
              name: 'titleRo',
              type: 'text',
              label: 'Title (Romanian)',
              admin: {
                description:
                  'Optional title for the info box - leave empty if you only want description',
              },
            },
            {
              name: 'titleEn',
              type: 'text',
              label: 'Title (English)',
              admin: {
                description:
                  'Optional title for the info box - leave empty if you only want description',
              },
            },
            {
              name: 'titleHe',
              type: 'text',
              label: 'Title (Hebrew)',
              admin: {
                description:
                  'Optional title for the info box - leave empty if you only want description',
              },
            },
            {
              name: 'descriptionRo',
              type: 'textarea',
              label: 'Description (Romanian)',
              admin: {
                description: 'Main informative text about the photos from this date',
              },
            },
            {
              name: 'descriptionEn',
              type: 'textarea',
              label: 'Description (English)',
              admin: {
                description: 'Main informative text about the photos from this date',
              },
            },
            {
              name: 'descriptionHe',
              type: 'textarea',
              label: 'Description (Hebrew)',
              admin: {
                description: 'Main informative text about the photos from this date',
              },
            },
          ],
        },
      ],
    },
  ],
}