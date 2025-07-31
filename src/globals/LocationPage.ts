import type { GlobalConfig } from 'payload'

export const LocationPage: GlobalConfig = {
  slug: 'locationPage',
  label: 'Location Page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image',
        },
        {
          name: 'breadcrumbs',
          type: 'group',
          label: 'Breadcrumbs',
          fields: [
            {
              name: 'homeTextRo',
              type: 'text',
              label: 'Home Text (Romanian)',
              defaultValue: 'Acasă',
            },
            {
              name: 'homeTextEn',
              type: 'text',
              label: 'Home Text (English)',
              defaultValue: 'Home',
            },
            {
              name: 'homeTextHe',
              type: 'text',
              label: 'Home Text (Hebrew)',
              defaultValue: 'בית',
            },
            {
              name: 'currentPageTextRo',
              type: 'text',
              label: 'Current Page Text (Romanian)',
              defaultValue: 'Localizare',
            },
            {
              name: 'currentPageTextEn',
              type: 'text',
              label: 'Current Page Text (English)',
              defaultValue: 'Location',
            },
            {
              name: 'currentPageTextHe',
              type: 'text',
              label: 'Current Page Text (Hebrew)',
              defaultValue: 'מיקום',
            },
            {
              name: 'href',
              type: 'text',
              label: 'Current Page Link',
              defaultValue: '/localizare',
            },
          ],
        },
        {
          name: 'titleRo',
          type: 'text',
          label: 'Title (Romanian)',
          defaultValue: 'Localizare Ansamblul Rezidential Torga45',
        },
        {
          name: 'titleEn',
          type: 'text',
          label: 'Title (English)',
          defaultValue: 'Location of Torga45 Residential Complex',
        },
        {
          name: 'titleHe',
          type: 'text',
          label: 'Title (Hebrew)',
          defaultValue: 'מיקום מתחם המגורים טורגה45',
        },
        {
          name: 'subtitleRo',
          type: 'text',
          label: 'Subtitle (Romanian)',
          defaultValue: 'UNDE NE GĂSIȚI?',
        },
        {
          name: 'subtitleEn',
          type: 'text',
          label: 'Subtitle (English)',
          defaultValue: 'WHERE TO FIND US?',
        },
        {
          name: 'subtitleHe',
          type: 'text',
          label: 'Subtitle (Hebrew)',
          defaultValue: 'איפה למצוא אותנו?',
        },
      ],
    },
    {
      name: 'locationSection',
      type: 'group',
      label: 'Location Section',
      fields: [
        {
          name: 'address',
          type: 'text',
          label: 'Address',
          defaultValue: '23 August Otopeni, Bucuresti / Ilfov',
        },
        {
          name: 'decorativeTextRo',
          type: 'text',
          label: 'Decorative Text (Romanian)',
          defaultValue: 'Localizare Ansamblul',
        },
        {
          name: 'decorativeTextEn',
          type: 'text',
          label: 'Decorative Text (English)',
          defaultValue: 'Complex Location',
        },
        {
          name: 'decorativeTextHe',
          type: 'text',
          label: 'Decorative Text (Hebrew)',
          defaultValue: 'מיקום המתחם',
        },
        {
          name: 'headingRo',
          type: 'text',
          label: 'Heading (Romanian)',
          defaultValue: 'Unde ne găsiți?',
        },
        {
          name: 'headingEn',
          type: 'text',
          label: 'Heading (English)',
          defaultValue: 'Where can you find us?',
        },
        {
          name: 'headingHe',
          type: 'text',
          label: 'Heading (Hebrew)',
          defaultValue: 'איפה אתם יכולים למצוא אותנו?',
        },
        {
          name: 'descriptionRo',
          type: 'textarea',
          label: 'Description (Romanian)',
          defaultValue:
            'Locuirea în Tunari, în comparație cu București, aduce numeroase avantaje. Tunari este o comună mică și liniștită, situată în apropierea Bucureștiului, oferind un echilibru perfect între viața urbană și confortul rural.\n\nPentru a vă ajuta să vă orientați mai bine în zonă, iată câteva zone importante la care puteți ajunge cu ușurință cu mașina din Tunari în mai puțin de 10 km:',
        },
        {
          name: 'descriptionEn',
          type: 'textarea',
          label: 'Description (English)',
          defaultValue:
            'Living in Tunari, compared to Bucharest, brings numerous advantages. Tunari is a small and quiet commune, located near Bucharest, offering a perfect balance between urban life and rural comfort.\n\nTo help you orient yourself better in the area, here are some important areas you can easily reach by car from Tunari in less than 10 km:',
        },
        {
          name: 'descriptionHe',
          type: 'textarea',
          label: 'Description (Hebrew)',
          defaultValue:
            'מגורים בטונארי, בהשוואה לבוקרשט, מביאים יתרונות רבים. טונארי היא קומונה קטנה ושקטה, הממוקמת ליד בוקרשט, המציעה איזון מושלם בין חיי עיר לנוחות כפרית.\n\nכדי לעזור לכם להתמצא טוב יותר באזור, הנה כמה אזורים חשובים שאליהם תוכלו להגיע בקלות ברכב מטונארי בפחות מ-10 ק"מ:',
        },
        {
          name: 'nearbyPlaces',
          type: 'array',
          label: 'Nearby Places',
          fields: [
            {
              name: 'nameRo',
              type: 'text',
              label: 'Name (Romanian)',
            },
            {
              name: 'nameEn',
              type: 'text',
              label: 'Name (English)',
            },
            {
              name: 'nameHe',
              type: 'text',
              label: 'Name (Hebrew)',
            },
            {
              name: 'distance',
              type: 'text',
              label: 'Distance',
            },
          ],
          defaultValue: [
            {
              nameRo: 'Baneasa Shopping City',
              nameEn: 'Baneasa Shopping City',
              nameHe: 'בנאסה שופינג סיטי',
              distance: '10 km',
            },
            {
              nameRo: 'Școala Olga Gudynn',
              nameEn: 'Olga Gudynn School',
              nameHe: 'בית ספר אולגה גודין',
              distance: '2.5 km',
            },
            {
              nameRo: 'Școala Americană',
              nameEn: 'American School',
              nameHe: 'בית ספר אמריקאי',
              distance: '2.7 km',
            },
            {
              nameRo: 'Lidl',
              nameEn: 'Lidl',
              nameHe: 'לידל',
              distance: '1.6 km',
            },
            {
              nameRo: 'Benzinărie Carbogaz',
              nameEn: 'Carbogaz Gas Station',
              nameHe: 'תחנת דלק קרבוגז',
              distance: '1.6 km',
            },
            {
              nameRo: "D.N.1 Mc Donald's",
              nameEn: "D.N.1 McDonald's",
              nameHe: "מקדונלד'ס ד.נ.1",
              distance: '8 km',
            },
            {
              nameRo: 'Aeroport',
              nameEn: 'Airport',
              nameHe: 'שדה תעופה',
              distance: '9 km',
            },
          ],
        },
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'textRo',
              type: 'text',
              label: 'Text (Romanian)',
              defaultValue: 'AFLAȚI MAI MULTE',
            },
            {
              name: 'textEn',
              type: 'text',
              label: 'Text (English)',
              defaultValue: 'FIND OUT MORE',
            },
            {
              name: 'textHe',
              type: 'text',
              label: 'Text (Hebrew)',
              defaultValue: 'גלו עוד',
            },
            {
              name: 'link',
              type: 'text',
              label: 'Link',
              defaultValue: '/contact',
            },
          ],
        },
      ],
    },
  ],
}
