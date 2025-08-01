import type { GlobalConfig } from 'payload'

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
              labelRo: 'DESPRE NOI',
              labelEn: 'ABOUT US',
              labelHe: 'אודותינו',
              href: '/despre-noi',
              isActive: true,
            },
          ],
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
        // Content Paragraphs
        {
          name: 'contentParagraphs',
          type: 'array',
          required: false,
          minRows: 1,
          maxRows: 10,
          fields: [
            {
              name: 'paragraphRo',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Paragraph content in Romanian',
              },
            },
            {
              name: 'paragraphEn',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Paragraph content in English',
              },
            },
            {
              name: 'paragraphHe',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Paragraph content in Hebrew',
              },
            },
          ],
          defaultValue: [
            {
              paragraphRo:
                'În proiectarea noului ansamblu rezidențial, am pornit la drum cu câteva principii bine înrădăcinate: dotări premium care să reflecte un design și concept unic, care alături de o poziționare excelentă, într-un cadru intim și liniștit, dar cu acces facil către importante puncte de interes, să construiască calea perfectă pentru tine.',
              paragraphEn:
                'In designing the new residential complex, we started with a few well-rooted principles: premium amenities that reflect a unique design and concept, which together with excellent positioning, in an intimate and quiet setting, but with easy access to important points of interest, build the perfect path for you.',
              paragraphHe:
                'בתכנון המתחם המגורים החדש, התחלנו עם כמה עקרונות מושרשים היטב: שירותים פרימיום המשקפים עיצוב וקונספט ייחודיים, אשר יחד עם מיקום מעולה, במסגרת אינטימית ושקטה, אך עם גישה נוחה לנקודות עניין חשובות, בונים עבורכם את הדרך המושלמת.',
            },
            {
              paragraphRo:
                'Complexul este format din 21 vile, fiecare dintre acestea având o suprafață utilă de 136 m2 și 12.5 m2 de terasă, o compartimentare inteligentă, finisaje premium și dotări moderne care să îți ofere confortul de care ai nevoie.',
              paragraphEn:
                'The complex consists of 21 villas, each with a usable area of 136 sqm and 12.5 sqm of terrace, intelligent compartmentalization, premium finishes and modern amenities to provide you with the comfort you need.',
              paragraphHe:
                'המתחם מורכב מ-21 וילות, כל אחת עם שטח שימושי של 136 מ"ר ו-12.5 מ"ר של מרפסת, חלוקה חכמה, גימורים פרימיום ושירותים מודרניים כדי לספק לכם את הנוחות שאתם צריכים.',
            },
          ],
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
