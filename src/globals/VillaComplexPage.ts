import type { GlobalConfig } from 'payload'

export const VillaComplexPage: GlobalConfig = {
  slug: 'villa-complex-page',
  label: 'Villa Complex Page',
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
          defaultValue: 'Mai multe despre Ansamblul Rezidential Torga45',
          admin: {
            description: 'Main hero title in Romanian',
          },
        },
        {
          name: 'mainTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'More about Torga45 Residential Complex',
          admin: {
            description: 'Main hero title in English',
          },
        },
        {
          name: 'mainTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'עוד על מתחם המגורים טורגה45',
          admin: {
            description: 'Main hero title in Hebrew',
          },
        },
        // Subtitle
        {
          name: 'subtitleRo',
          type: 'text',
          required: false,
          defaultValue: 'IMPARTIRE, SUPRAFETE, PLANURI',
          admin: {
            description: 'Hero subtitle in Romanian',
          },
        },
        {
          name: 'subtitleEn',
          type: 'text',
          required: false,
          defaultValue: 'DIVISION, AREAS, PLANS',
          admin: {
            description: 'Hero subtitle in English',
          },
        },
        {
          name: 'subtitleHe',
          type: 'text',
          required: false,
          defaultValue: 'חלוקה, שטחים, תוכניות',
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
              labelRo: 'PROPRIETATEA TA',
              labelEn: 'YOUR PROPERTY',
              labelHe: 'הנכס שלך',
              href: '/villa-complex',
              isActive: true,
            },
          ],
        },
      ],
    },
    // VILLA COMPLEX CONTENT SECTION
    {
      name: 'villaComplexContentSection',
      type: 'group',
      label: 'Villa Complex Content Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide villa complex content section',
          },
        },
        // Section Title
        {
          name: 'sectionTitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Torga45',
          admin: {
            description: 'Section title in Romanian',
          },
        },
        {
          name: 'sectionTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'Torga45',
          admin: {
            description: 'Section title in English',
          },
        },
        {
          name: 'sectionTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'טורגה45',
          admin: {
            description: 'Section title in Hebrew',
          },
        },
        // Main Heading
        {
          name: 'mainHeadingRo',
          type: 'text',
          required: false,
          defaultValue: 'Locul unde îți vei spune ACASĂ',
          admin: {
            description: 'Main heading in Romanian',
          },
        },
        {
          name: 'mainHeadingEn',
          type: 'text',
          required: false,
          defaultValue: 'The place where you will say HOME',
          admin: {
            description: 'Main heading in English',
          },
        },
        {
          name: 'mainHeadingHe',
          type: 'text',
          required: false,
          defaultValue: 'המקום שבו תגידו בית',
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
                'Descoperă și bucură-te de un nou concept de casă, ce va defini caminul perfect pentru un stil de viață modern, luxos și intim. Noul complex de case Torga45, este poziționat în Tunari, într-o zonă liniștită, sigură cu acces facil la toate punctele de interes ale capitalei.',
              paragraphEn:
                'Discover and enjoy a new concept of home that will define the perfect hearth for a modern, luxurious and intimate lifestyle. The new Torga45 house complex is positioned in Tunari, in a quiet, safe area with easy access to all points of interest in the capital.',
              paragraphHe:
                'גלו ותיהנו מקונספט חדש של בית שיגדיר את האח המושלם לאורח חיים מודרני, יוקרתי ואינטימי. מתחם הבתים החדש טורגה45 ממוקם בטונארי, באזור שקט ובטוח עם גישה נוחה לכל נקודות העניין בבירה.',
            },
            {
              paragraphRo:
                'Ansamblul rezidențial este format din 21 vile, fiecare dintre acestea având o suprafață utilă de 136 m² și 12.5 m² de terasă, o compartimentare inteligentă, finisaje premium și dotări moderne care să îți ofere confortul de care ai nevoie.',
              paragraphEn:
                'The residential complex consists of 21 villas, each with a usable area of 136 sqm and 12.5 sqm of terrace, intelligent compartmentalization, premium finishes and modern amenities to provide you with the comfort you need.',
              paragraphHe:
                'המתחם המגורים מורכב מ-21 וילות, כל אחת עם שטח שימושי של 136 מ"ר ו-12.5 מ"ר של מרפסת, חלוקה חכמה, גימורים פרימיום ושירותים מודרניים כדי לספק לכם את הנוחות שאתם צריכים.',
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
    // FLOOR PLANS SECTION WITH VILLA SELECTION - ABOVE FACILITIES
    {
      name: 'floorPlansSection',
      type: 'group',
      label: 'Floor Plans Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide floor plans section',
          },
        },
        // Section Title
        {
          name: 'sectionTitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Planul',
          admin: {
            description: 'Section title (first part) in Romanian',
          },
        },
        {
          name: 'sectionTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'Housing',
          admin: {
            description: 'Section title (first part) in English',
          },
        },
        {
          name: 'sectionTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'תוכנית',
          admin: {
            description: 'Section title (first part) in Hebrew',
          },
        },
        // Section Subtitle (colored part)
        {
          name: 'sectionSubtitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Locuintelor',
          admin: {
            description: 'Section subtitle (colored part) in Romanian',
          },
        },
        {
          name: 'sectionSubtitleEn',
          type: 'text',
          required: false,
          defaultValue: 'Plans',
          admin: {
            description: 'Section subtitle (colored part) in English',
          },
        },
        {
          name: 'sectionSubtitleHe',
          type: 'text',
          required: false,
          defaultValue: 'דיור',
          admin: {
            description: 'Section subtitle (colored part) in Hebrew',
          },
        },
        // Section Description
        {
          name: 'sectionDescriptionRo',
          type: 'text',
          required: false,
          defaultValue: 'Impartirea pe niveluri si detalierea camerelor',
          admin: {
            description: 'Section description in Romanian',
          },
        },
        {
          name: 'sectionDescriptionEn',
          type: 'text',
          required: false,
          defaultValue: 'Level division and room details',
          admin: {
            description: 'Section description in English',
          },
        },
        {
          name: 'sectionDescriptionHe',
          type: 'text',
          required: false,
          defaultValue: 'חלוקת רמות ופרטי חדרים',
          admin: {
            description: 'Section description in Hebrew',
          },
        },
        // Villa Types Configuration
        {
          name: 'villas',
          type: 'array',
          required: false,
          minRows: 4,
          maxRows: 4,
          admin: {
            description: 'Configure the 4 villa types (Spring, Summer, Autumn, Winter)',
          },
          fields: [
            {
              name: 'villaType',
              type: 'select',
              required: true,
              options: [
                { label: 'Spring Villa', value: 'spring' },
                { label: 'Summer Villa', value: 'summer' },
                { label: 'Autumn Villa', value: 'autumn' },
                { label: 'Winter Villa', value: 'winter' },
              ],
              admin: {
                description: 'Select the villa season type (each must be unique)',
              },
            },
            {
              name: 'nameRo',
              type: 'text',
              required: true,
              admin: {
                description: 'Villa name in Romanian',
              },
            },
            {
              name: 'nameEn',
              type: 'text',
              required: true,
              admin: {
                description: 'Villa name in English',
              },
            },
            {
              name: 'nameHe',
              type: 'text',
              required: true,
              admin: {
                description: 'Villa name in Hebrew',
              },
            },
            // Villa Description - NEW ADDITION
            {
              name: 'descriptionRo',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Villa description in Romanian',
              },
            },
            {
              name: 'descriptionEn',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Villa description in English',
              },
            },
            {
              name: 'descriptionHe',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Villa description in Hebrew',
              },
            },
            // Floor Plans for this specific villa
            {
              name: 'floorPlans',
              type: 'array',
              required: false,
              minRows: 1,
              maxRows: 10,
              admin: {
                description: 'Floor plans for this villa type',
              },
              fields: [
                {
                  name: 'order',
                  type: 'number',
                  required: false,
                  defaultValue: 1,
                  admin: {
                    description: 'Display order (1 = first tab, 2 = second tab, etc.)',
                  },
                },
                // Floor Name
                {
                  name: 'floorNameRo',
                  type: 'text',
                  required: false,
                  admin: {
                    description: 'Floor name in Romanian (e.g., PARTER, ETAJ)',
                  },
                },
                {
                  name: 'floorNameEn',
                  type: 'text',
                  required: false,
                  admin: {
                    description: 'Floor name in English (e.g., GROUND FLOOR, FLOOR)',
                  },
                },
                {
                  name: 'floorNameHe',
                  type: 'text',
                  required: false,
                  admin: {
                    description: 'Floor name in Hebrew',
                  },
                },
                // CHANGED: Multiple Floor Plan Images instead of single image
                {
                  name: 'floorPlanImages',
                  type: 'array',
                  required: false,
                  minRows: 1,
                  maxRows: 10,
                  admin: {
                    description: 'Multiple floor plan images for this floor',
                  },
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      required: false,
                      admin: {
                        description: 'Floor plan image',
                      },
                    },
                    {
                      name: 'altTextRo',
                      type: 'text',
                      required: false,
                      admin: {
                        description: 'Image alt text in Romanian',
                      },
                    },
                    {
                      name: 'altTextEn',
                      type: 'text',
                      required: false,
                      admin: {
                        description: 'Image alt text in English',
                      },
                    },
                    {
                      name: 'altTextHe',
                      type: 'text',
                      required: false,
                      admin: {
                        description: 'Image alt text in Hebrew',
                      },
                    },
                    {
                      name: 'order',
                      type: 'number',
                      required: false,
                      defaultValue: 1,
                      admin: {
                        description: 'Image display order',
                      },
                    },
                  ],
                },
                // Usable Area
                {
                  name: 'usableArea',
                  type: 'number',
                  required: false,
                  admin: {
                    description: 'Usable area in square meters',
                  },
                },
                // Usable Area Label
                {
                  name: 'usableAreaLabelRo',
                  type: 'text',
                  required: false,
                  defaultValue: 'S.UTILA',
                  admin: {
                    description: 'Usable area label in Romanian',
                  },
                },
                {
                  name: 'usableAreaLabelEn',
                  type: 'text',
                  required: false,
                  defaultValue: 'USABLE AREA',
                  admin: {
                    description: 'Usable area label in English',
                  },
                },
                {
                  name: 'usableAreaLabelHe',
                  type: 'text',
                  required: false,
                  defaultValue: 'שטח שימושי',
                  admin: {
                    description: 'Usable area label in Hebrew',
                  },
                },
                // Room Details
                {
                  name: 'roomDetails',
                  type: 'array',
                  required: false,
                  minRows: 1,
                  maxRows: 20,
                  admin: {
                    description: 'Add room details with areas',
                  },
                  fields: [
                    {
                      name: 'roomNameRo',
                      type: 'text',
                      required: false,
                      admin: {
                        description: 'Room name in Romanian',
                      },
                    },
                    {
                      name: 'roomNameEn',
                      type: 'text',
                      required: false,
                      admin: {
                        description: 'Room name in English',
                      },
                    },
                    {
                      name: 'roomNameHe',
                      type: 'text',
                      required: false,
                      admin: {
                        description: 'Room name in Hebrew',
                      },
                    },
                    {
                      name: 'roomArea',
                      type: 'number',
                      required: false,
                      admin: {
                        description: 'Room area in square meters',
                      },
                    },
                  ],
                },
                // PDF Download Button
                {
                  name: 'pdfDownload',
                  type: 'group',
                  fields: [
                    {
                      name: 'buttonTextRo',
                      type: 'text',
                      required: false,
                      defaultValue: 'PLAN PARTER CU TERASA',
                      admin: {
                        description: 'PDF button text in Romanian',
                      },
                    },
                    {
                      name: 'buttonTextEn',
                      type: 'text',
                      required: false,
                      defaultValue: 'GROUND FLOOR PLAN WITH TERRACE',
                      admin: {
                        description: 'PDF button text in English',
                      },
                    },
                    {
                      name: 'buttonTextHe',
                      type: 'text',
                      required: false,
                      defaultValue: 'תוכנית קומת קרקע עם מרפסת',
                      admin: {
                        description: 'PDF button text in Hebrew',
                      },
                    },
                    {
                      name: 'pdfFile',
                      type: 'upload',
                      relationTo: 'media',
                      required: false,
                      admin: {
                        description: 'PDF file for download',
                      },
                    },
                  ],
                },
              ],
            },
          ],
          defaultValue: [
            {
              villaType: 'spring',
              nameRo: 'Vila Primăvară',
              nameEn: 'Spring Villa',
              nameHe: 'וילת אביב',
              descriptionRo:
                'Vila Primăvară oferă un design fresh și luminos, inspirat de renașterea naturii. Cu finisaje în tonuri pastelate și spații generoase, această vilă este perfectă pentru familiile care doresc să se bucure de confortul modern într-un cadru elegant.',
              descriptionEn:
                "Spring Villa offers a fresh and bright design, inspired by nature's rebirth. With pastel-toned finishes and generous spaces, this villa is perfect for families who want to enjoy modern comfort in an elegant setting.",
              descriptionHe:
                'וילת האביב מציעה עיצוב רענן ובהיר, בהשראת התחדשות הטבע. עם גימורים בגוני פסטל וחללים נדיבים, וילה זו מושלמת למשפחות שרוצות ליהנות מנוחות מודרנית במסגרת אלגנטית.',
              floorPlans: [
                {
                  order: 1,
                  floorNameRo: 'PARTER',
                  floorNameEn: 'GROUND FLOOR',
                  floorNameHe: 'קומת קרקע',
                  usableArea: 69.5,
                  usableAreaLabelRo: 'S.UTILA PARTER',
                  usableAreaLabelEn: 'GROUND FLOOR USABLE AREA',
                  usableAreaLabelHe: 'שטח שימושי קומת קרקע',
                  floorPlanImages: [],
                  roomDetails: [
                    {
                      roomNameRo: 'HOL + CASA DE SCARA',
                      roomNameEn: 'HALL + STAIRCASE',
                      roomNameHe: 'אולם + גרם מדרגות',
                      roomArea: 11.5,
                    },
                    {
                      roomNameRo: 'LIVING+DINING',
                      roomNameEn: 'LIVING+DINING',
                      roomNameHe: 'סלון+פינת אוכל',
                      roomArea: 19.5,
                    },
                    {
                      roomNameRo: 'BUCATARIE',
                      roomNameEn: 'KITCHEN',
                      roomNameHe: 'מטבח',
                      roomArea: 11.0,
                    },
                    {
                      roomNameRo: 'BIROU',
                      roomNameEn: 'OFFICE',
                      roomNameHe: 'משרד',
                      roomArea: 14.5,
                    },
                    {
                      roomNameRo: 'BAIE',
                      roomNameEn: 'BATHROOM',
                      roomNameHe: 'חדר רחצה',
                      roomArea: 4.5,
                    },
                    {
                      roomNameRo: 'CAMERA TEHNICA',
                      roomNameEn: 'TECHNICAL ROOM',
                      roomNameHe: 'חדר טכני',
                      roomArea: 5.5,
                    },
                    {
                      roomNameRo: 'TERASA',
                      roomNameEn: 'TERRACE',
                      roomNameHe: 'מרפסת',
                      roomArea: 12.5,
                    },
                  ],
                  pdfDownload: {
                    buttonTextRo: 'PLAN PARTER CU TERASA 3.5 X 3.5',
                    buttonTextEn: 'GROUND FLOOR PLAN WITH 3.5 X 3.5 TERRACE',
                    buttonTextHe: 'תוכנית קומת קרקע עם מרפסת 3.5 X 3.5',
                  },
                },
              ],
            },
            {
              villaType: 'summer',
              nameRo: 'Vila Vară',
              nameEn: 'Summer Villa',
              nameHe: 'וילת קיץ',
              descriptionRo:
                'Vila Vară aduce căldura și energia sezonului estival în designul său vibrant. Cu accente în culori calde și spații deschise care invită la relaxare, această vilă este ideală pentru cei care iubesc luminozitatea și atmosfera de vacanță.',
              descriptionEn:
                'Summer Villa brings the warmth and energy of the summer season into its vibrant design. With warm color accents and open spaces that invite relaxation, this villa is ideal for those who love brightness and vacation atmosphere.',
              descriptionHe:
                'וילת הקיץ מביאה את החום והאנרגיה של עונת הקיץ לעיצוב התוסס שלה. עם הדגשות צבע חמות וחללים פתוחים המזמינים להירגעות, וילה זו אידיאלית לאלה שאוהבים בהירות ואווירת חופשה.',
              floorPlans: [],
            },
            {
              villaType: 'autumn',
              nameRo: 'Vila Toamnă',
              nameEn: 'Autumn Villa',
              nameHe: 'וילת סתיו',
              descriptionRo:
                'Vila Toamnă îmbină eleganța cu căldura, folosind o paletă de culori inspirată din frumusețea toamnei. Cu materiale naturale și o atmosferă primitoare, această vilă oferă un refugiu perfect pentru momentele de liniște și contemplare.',
              descriptionEn:
                "Autumn Villa combines elegance with warmth, using a color palette inspired by autumn's beauty. With natural materials and a welcoming atmosphere, this villa offers a perfect refuge for moments of peace and contemplation.",
              descriptionHe:
                'וילת הסתיו משלבת אלגנטיות עם חמימות, תוך שימוש בפלטת צבעים בהשראת יופי הסתיו. עם חומרים טבעיים ואווירה מזמינה, וילה זו מציעה מקלט מושלם לרגעים של שקט והתבוננות.',
              floorPlans: [],
            },
            {
              villaType: 'winter',
              nameRo: 'Vila Iarnă',
              nameEn: 'Winter Villa',
              nameHe: 'וילת חורף',
              descriptionRo:
                'Vila Iarnă creează o oază de confort și eleganță rafinată. Cu un design sofisticat în tonuri neutre și accente luxoase, această vilă oferă un spațiu intim și cald, perfect pentru cei care apreciază liniștea și stilul contemporan.',
              descriptionEn:
                'Winter Villa creates an oasis of comfort and refined elegance. With sophisticated design in neutral tones and luxurious accents, this villa offers an intimate and warm space, perfect for those who appreciate tranquility and contemporary style.',
              descriptionHe:
                'וילת החורף יוצרת נווה מדבר של נוחות ואלגנטיות מעודנת. עם עיצוב מתוחכם בגוונים ניטרליים והדגשות יוקרתיות, וילה זו מציעה חלל אינטימי וחם, מושלם לאלה שמעריכים שלווה וסגנון עכשווי.',
              floorPlans: [],
            },
          ],
        },
      ],
    },
    // FACILITIES SECTION - BELOW FLOOR PLANS
    {
      name: 'facilitiesSection',
      type: 'group',
      label: 'Facilities Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide facilities section',
          },
        },
        // Section Title
        {
          name: 'sectionTitleRo',
          type: 'text',
          required: false,
          defaultValue: 'DOTARI & FACILITATI',
          admin: {
            description: 'Section title in Romanian',
          },
        },
        {
          name: 'sectionTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'AMENITIES & FACILITIES',
          admin: {
            description: 'Section title in English',
          },
        },
        {
          name: 'sectionTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'שירותים ומתקנים',
          admin: {
            description: 'Section title in Hebrew',
          },
        },
        // Background Image
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            description: 'Background image for the facilities section',
          },
        },
        // Background Image Alt Text
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
        // Facilities List
        {
          name: 'facilities',
          type: 'array',
          required: false,
          minRows: 1,
          maxRows: 20,
          admin: {
            description: 'Add as many facilities as you want',
          },
          fields: [
            {
              name: 'order',
              type: 'number',
              required: false,
              defaultValue: 1,
              admin: {
                description: 'Display order (01, 02, 03, etc.)',
              },
            },
            {
              name: 'titleRo',
              type: 'text',
              required: false,
              admin: {
                description: 'Facility title in Romanian',
              },
            },
            {
              name: 'titleEn',
              type: 'text',
              required: false,
              admin: {
                description: 'Facility title in English',
              },
            },
            {
              name: 'titleHe',
              type: 'text',
              required: false,
              admin: {
                description: 'Facility title in Hebrew',
              },
            },
            {
              name: 'descriptionRo',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Optional description in Romanian',
              },
            },
            {
              name: 'descriptionEn',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Optional description in English',
              },
            },
            {
              name: 'descriptionHe',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Optional description in Hebrew',
              },
            },
          ],
          defaultValue: [
            {
              order: 1,
              titleRo: 'INCALZIRE PARDOSEALA',
              titleEn: 'FLOOR HEATING',
              titleHe: 'חימום תת רצפתי',
            },
            {
              order: 2,
              titleRo: 'STIL MEDITERANEAN',
              titleEn: 'MEDITERRANEAN STYLE',
              titleHe: 'סגנון ים תיכוני',
            },
            {
              order: 3,
              titleRo: 'TAMPLARIE TRI-PAN',
              titleEn: 'TRIPLE-PANE WINDOWS',
              titleHe: 'חלונות משולשים',
              descriptionRo: 'Aenean vehicula non mauris maximus elementum. Nulla facilisi.',
              descriptionEn: 'Advanced triple-pane windows for maximum energy efficiency.',
              descriptionHe: 'חלונות משולשים מתקדמים ליעילות אנרגטית מקסימלית.',
            },
            {
              order: 4,
              titleRo: 'GRESIE & FAIANTA PORTELANATA',
              titleEn: 'PORCELAIN TILES & CERAMICS',
              titleHe: 'אריחי חרסינה ופורצלן',
            },
            {
              order: 5,
              titleRo: 'CENTRALA TERMICA IN CONDENSARE',
              titleEn: 'CONDENSING BOILER',
              titleHe: 'דוד עיבוי',
            },
            {
              order: 6,
              titleRo: 'CARAMIDA',
              titleEn: 'BRICK CONSTRUCTION',
              titleHe: 'בנייה מלבנים',
            },
            {
              order: 7,
              titleRo: 'PANOURI FOTOVOLTAICE',
              titleEn: 'SOLAR PANELS',
              titleHe: 'פאנלים סולאריים',
            },
          ],
        },
      ],
    },
  ],
}
