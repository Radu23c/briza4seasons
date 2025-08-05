import type { CollectionConfig } from 'payload'

export const HeroSection: CollectionConfig = {
  slug: 'hero-sections',
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
      defaultValue: 'Hero Section',
      admin: {
        description: 'Internal title for this hero section',
      },
    },
    // Main Heading in all languages
    {
      name: 'mainHeadingRo',
      type: 'text',
      required: false,
      defaultValue: 'Vizitează showroom-ul nostru și găsește locuința visurilor tale',
      admin: {
        description: 'Main heading text in Romanian',
      },
    },
    {
      name: 'mainHeadingEn',
      type: 'text',
      required: false,
      defaultValue: 'Visit our showroom and find the home of your dreams',
      admin: {
        description: 'Main heading text in English',
      },
    },
    {
      name: 'mainHeadingHe',
      type: 'text',
      required: false,
      defaultValue: 'בקרו באולם התצוגה שלנו ומצאו את בית החלומות שלכם',
      admin: {
        description: 'Main heading text in Hebrew',
      },
    },
    // CTA Button in all languages
    {
      name: 'ctaButton',
      type: 'group',
      fields: [
        {
          name: 'textRo',
          type: 'text',
          required: false,
          defaultValue: 'PROGRAMEAZĂ O VIZITĂ',
          admin: {
            description: 'Button text in Romanian',
          },
        },
        {
          name: 'textEn',
          type: 'text',
          required: false,
          defaultValue: 'SCHEDULE A VISIT',
          admin: {
            description: 'Button text in English',
          },
        },
        {
          name: 'textHe',
          type: 'text',
          required: false,
          defaultValue: 'קבעו ביקור',
          admin: {
            description: 'Button text in Hebrew',
          },
        },
        {
          name: 'link',
          type: 'text',
          required: false,
          defaultValue: '/contact',
          admin: {
            description: 'URL or path for the button link',
          },
        },
      ],
    },
    // Project Name in all languages
    {
      name: 'projectNameRo',
      type: 'text',
      required: false,
      defaultValue: 'Ansamblul de vile Torga15',
      admin: {
        description: 'Project name in Romanian',
      },
    },
    {
      name: 'projectNameEn',
      type: 'text',
      required: false,
      defaultValue: 'Torga15 Villa Complex',
      admin: {
        description: 'Project name in English',
      },
    },
    {
      name: 'projectNameHe',
      type: 'text',
      required: false,
      defaultValue: 'מתחם וילות טורגה15',
      admin: {
        description: 'Project name in Hebrew',
      },
    },
    // Project Subtitle in all languages
    {
      name: 'projectSubtitleRo',
      type: 'text',
      required: false,
      defaultValue: '',
      admin: {
        description: 'Project subtitle in Romanian',
      },
    },
    {
      name: 'projectSubtitleEn',
      type: 'text',
      required: false,
      defaultValue: '',
      admin: {
        description: 'Project subtitle in English',
      },
    },
    {
      name: 'projectSubtitleHe',
      type: 'text',
      required: false,
      defaultValue: 'מגורים',
      admin: {
        description: 'Project subtitle in Hebrew',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description:
          'Background image for the hero section. If not provided, will use default from public/images/home-hero-bg.png',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle to activate/deactivate this hero section',
      },
    },
  ],
}
