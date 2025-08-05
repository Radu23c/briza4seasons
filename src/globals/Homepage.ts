import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
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
        // CTA Button
        {
          name: 'ctaButton',
          type: 'group',
          fields: [
            {
              name: 'textRo',
              type: 'text',
              required: false,
              defaultValue: 'PROGRAMEAZĂ O VIZITĂ',
            },
            {
              name: 'textEn',
              type: 'text',
              required: false,
              defaultValue: 'SCHEDULE A VISIT',
            },
            {
              name: 'textHe',
              type: 'text',
              required: false,
              defaultValue: 'קבעו ביקור',
            },
            {
              name: 'link',
              type: 'text',
              required: false,
              defaultValue: '/contact',
            },
          ],
        },
        // Project Name
        {
          name: 'projectNameRo',
          type: 'text',
          required: false,
          defaultValue: 'Ansamblul de vile Torga15',
        },
        {
          name: 'projectNameEn',
          type: 'text',
          required: false,
          defaultValue: 'Torga15 Villa Complex',
        },
        {
          name: 'projectNameHe',
          type: 'text',
          required: false,
          defaultValue: 'מתחם וילות טורגה15',
        },
        // Project Subtitle
        {
          name: 'projectSubtitleRo',
          type: 'text',
          required: false,
          defaultValue: '',
        },
        {
          name: 'projectSubtitleEn',
          type: 'text',
          required: false,
          defaultValue: '',
        },
        {
          name: 'projectSubtitleHe',
          type: 'text',
          required: false,
          defaultValue: 'מגורים',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
    // FEATURES SECTION
    {
      name: 'featuresSection',
      type: 'group',
      label: 'Features Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide features section',
          },
        },
        // Project Name
        {
          name: 'projectNameRo',
          type: 'text',
          required: false,
          defaultValue: 'Torga15',
        },
        {
          name: 'projectNameEn',
          type: 'text',
          required: false,
          defaultValue: 'Torga15',
        },
        {
          name: 'projectNameHe',
          type: 'text',
          required: false,
          defaultValue: 'טורגה15',
        },
        {
          name: 'villaCount',
          type: 'number',
          required: false,
          defaultValue: 21,
        },
        // Villa Count Text
        {
          name: 'villaCountTextRo',
          type: 'text',
          required: false,
          defaultValue: 'Vile în ansamblul',
        },
        {
          name: 'villaCountTextEn',
          type: 'text',
          required: false,
          defaultValue: 'Villas in the complex',
        },
        {
          name: 'villaCountTextHe',
          type: 'text',
          required: false,
          defaultValue: 'וילות במתחם',
        },
        // Main Heading
        {
          name: 'mainHeadingRo',
          type: 'text',
          required: false,
          defaultValue: 'oferă o experiență rezidențială aparte, cu',
        },
        {
          name: 'mainHeadingEn',
          type: 'text',
          required: false,
          defaultValue: 'offers a unique residential experience, with',
        },
        {
          name: 'mainHeadingHe',
          type: 'text',
          required: false,
          defaultValue: 'מציע חוויית מגורים ייחודית, עם',
        },
        // Accent Text
        {
          name: 'accentTextRo',
          type: 'text',
          required: false,
          defaultValue: 'accent pe confort',
        },
        {
          name: 'accentTextEn',
          type: 'text',
          required: false,
          defaultValue: 'emphasis on comfort',
        },
        {
          name: 'accentTextHe',
          type: 'text',
          required: false,
          defaultValue: 'דגש על נוחות',
        },
        // Sub Heading
        {
          name: 'subHeadingRo',
          type: 'text',
          required: false,
          defaultValue: 'și comoditatea vieții moderne',
        },
        {
          name: 'subHeadingEn',
          type: 'text',
          required: false,
          defaultValue: 'and the convenience of modern living',
        },
        {
          name: 'subHeadingHe',
          type: 'text',
          required: false,
          defaultValue: 'והנוחות של חיים מודרניים',
        },
        // Details Text
        {
          name: 'detailsTextRo',
          type: 'text',
          required: false,
          defaultValue: 'MAI MULTE DETALII?',
        },
        {
          name: 'detailsTextEn',
          type: 'text',
          required: false,
          defaultValue: 'MORE DETAILS?',
        },
        {
          name: 'detailsTextHe',
          type: 'text',
          required: false,
          defaultValue: 'פרטים נוספים?',
        },
        {
          name: 'exteriorImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'interiorImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'detailsLink',
          type: 'text',
          required: false,
          defaultValue: '/about',
        },
      ],
    },
    // FEATURES OVERVIEW SECTION
    {
      name: 'featuresOverviewSection',
      type: 'group',
      label: 'Features Overview Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide features overview section',
          },
        },
        // Section Title (optional)
        {
          name: 'titleRo',
          type: 'text',
          required: false,
        },
        {
          name: 'titleEn',
          type: 'text',
          required: false,
        },
        {
          name: 'titleHe',
          type: 'text',
          required: false,
        },
        // Feature Items
        {
          name: 'featureItems',
          type: 'array',
          required: false,
          minRows: 1,
          maxRows: 10,
          fields: [
            {
              name: 'order',
              type: 'number',
              required: false,
              defaultValue: 1,
            },
            {
              name: 'icon',
              type: 'select',
              required: false,
              options: [
                { label: 'Sofa (Living)', value: 'sofa' },
                { label: 'House (Home)', value: 'house' },
                { label: 'Car (Parking)', value: 'car' },
                { label: 'Tree (Garden)', value: 'tree' },
                { label: 'Shield (Security)', value: 'shield' },
                { label: 'Wifi (Technology)', value: 'wifi' },
                { label: 'Heart (Comfort)', value: 'heart' },
                { label: 'Star (Premium)', value: 'star' },
              ],
            },
            {
              name: 'titleRo',
              type: 'text',
              required: false,
            },
            {
              name: 'titleEn',
              type: 'text',
              required: false,
            },
            {
              name: 'titleHe',
              type: 'text',
              required: false,
            },
            {
              name: 'descriptionRo',
              type: 'textarea',
              required: false,
            },
            {
              name: 'descriptionEn',
              type: 'textarea',
              required: false,
            },
            {
              name: 'descriptionHe',
              type: 'textarea',
              required: false,
            },
          ],
          defaultValue: [
            {
              order: 1,
              icon: 'sofa',
              titleRo: 'PARTER',
              titleEn: 'GROUND FLOOR',
              titleHe: 'קומת קרקע',
              descriptionRo:
                'Suprafața construită a parterului este de 87 m2, în care se regăsesc: holul, o baie, zona de living și dining, bucătăria, un birou și camera tehnică.',
              descriptionEn:
                'The built area of the ground floor is 87 sqm, which includes: hall, bathroom, living and dining area, kitchen, office and technical room.',
              descriptionHe:
                'השטח הבנוי של קומת הקרקע הוא 87 מ"ר, הכולל: אולם, חדר רחצה, אזור מגורים ואוכל, מטבח, משרד וחדר טכני.',
            },
            {
              order: 2,
              icon: 'house',
              titleRo: 'ETAJ',
              titleEn: 'FLOOR',
              titleHe: 'קומה',
              descriptionRo:
                'Suprafața construită a etajului este de 87 m2, în care se regăsesc: 3 dormitoare, 2 băi, dressing, hol și casa de scară.',
              descriptionEn:
                'The built area of the floor is 87 sqm, which includes: 3 bedrooms, 2 bathrooms, dressing room, hall and staircase.',
              descriptionHe:
                'השטח הבנוי של הקומה הוא 87 מ"ר, הכולל: 3 חדרי שינה, 2 חדרי רחצה, חדר הלבשה, אולם וגרם מדרגות.',
            },
            {
              order: 3,
              icon: 'car',
              titleRo: 'TERASĂ',
              titleEn: 'TERRACE',
              titleHe: 'מרפסת',
              descriptionRo:
                'Terasa exterioară, poziționată în spatele casei, cu suprafața de 12.50 m2. Proprietatea conține două locuri de parcare, poziționate în fața casei.',
              descriptionEn:
                'Exterior terrace, positioned behind the house, with an area of 12.50 sqm. The property contains two parking spaces, positioned in front of the house.',
              descriptionHe:
                'מרפסת חיצונית, הממוקמת מאחורי הבית, בשטח של 12.50 מ"ר. הנכס מכיל שני מקומות חניה, הממוקמים מול הבית.',
            },
          ],
        },
        // Background Image
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        // Background Image Alt Text
        {
          name: 'backgroundImageAltRo',
          type: 'text',
          required: false,
        },
        {
          name: 'backgroundImageAltEn',
          type: 'text',
          required: false,
        },
        {
          name: 'backgroundImageAltHe',
          type: 'text',
          required: false,
        },
      ],
    },
    // BENEFITS SECTION
    {
      name: 'benefitsSection',
      type: 'group',
      label: 'Benefits Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide benefits section',
          },
        },
        // Section Title
        {
          name: 'sectionTitleRo',
          type: 'text',
          required: false,
          defaultValue: 'BENEFICII TORGA45',
        },
        {
          name: 'sectionTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'TORGA45 BENEFITS',
        },
        {
          name: 'sectionTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'יתרונות טורגה45',
        },
        // Benefits List
        {
          name: 'benefits',
          type: 'array',
          required: false,
          minRows: 1,
          maxRows: 10,
          fields: [
            {
              name: 'benefitRo',
              type: 'text',
              required: false,
            },
            {
              name: 'benefitEn',
              type: 'text',
              required: false,
            },
            {
              name: 'benefitHe',
              type: 'text',
              required: false,
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
          required: false,
        },
        // Styling Options
        {
          name: 'backgroundColor',
          type: 'text',
          required: false,
          defaultValue: '#D4B896',
          admin: {
            description: 'Background color (hex code)',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          required: false,
          defaultValue: '#FFFFFF',
          admin: {
            description: 'Text color (hex code)',
          },
        },
      ],
    },
    // FAQ SECTION
    {
      name: 'faqSection',
      type: 'group',
      label: 'FAQ Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide FAQ section',
          },
        },
        // Section Title
        {
          name: 'sectionTitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Ce Trebuie Sa Stii',
        },
        {
          name: 'sectionTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'What You Need to Know',
        },
        {
          name: 'sectionTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'מה שאתם צריכים לדעת',
        },
        // Main Heading
        {
          name: 'mainHeadingRo',
          type: 'text',
          required: false,
          defaultValue: 'Informații utile despre proprietățile noastre',
        },
        {
          name: 'mainHeadingEn',
          type: 'text',
          required: false,
          defaultValue: 'Useful information about our properties',
        },
        {
          name: 'mainHeadingHe',
          type: 'text',
          required: false,
          defaultValue: 'מידע שימושי על הנכסים שלנו',
        },
        // FAQ Items
        {
          name: 'faqItems',
          type: 'array',
          required: false,
          minRows: 1,
          maxRows: 10,
          fields: [
            {
              name: 'questionRo',
              type: 'text',
              required: false,
            },
            {
              name: 'questionEn',
              type: 'text',
              required: false,
            },
            {
              name: 'questionHe',
              type: 'text',
              required: false,
            },
            {
              name: 'answerRo',
              type: 'textarea',
              required: false,
            },
            {
              name: 'answerEn',
              type: 'textarea',
              required: false,
            },
            {
              name: 'answerHe',
              type: 'textarea',
              required: false,
            },
          ],
          defaultValue: [
            {
              questionRo: 'CARE SUNT PUNCTELE DE REPER APROPIATE DE ANSAMBLUL NOSTRU ?',
              questionEn: 'WHAT ARE THE LANDMARKS NEAR OUR DEVELOPMENT?',
              questionHe: 'מהם נקודות הציון הקרובות לפיתוח שלנו?',
              answerRo:
                'Ansamblul nostru se află în apropierea mai multor puncte de reper importante, inclusiv centre comerciale, școli, spitale și stații de transport public. Distanța până în centrul Bucureștiului este de aproximativ 15 minute cu mașina.',
              answerEn:
                'Our development is located near several important landmarks, including shopping centers, schools, hospitals, and public transport stations. The distance to downtown Bucharest is approximately 15 minutes by car.',
              answerHe:
                'הפיתוח שלנו ממוקם ליד כמה נקודות ציון חשובות, כולל מרכזי קניות, בתי ספר, בתי חולים ותחנות תחבורה ציבורית. המרחק למרכז בוקרשט הוא כ-15 דקות נסיעה ברכב.',
            },
            {
              questionRo: 'CARE SUNT COSTURILE ASOCIATE CU LOCUIREA ÎN ACEST ANSAMBLU REZIDENȚIAL?',
              questionEn: 'WHAT ARE THE COSTS ASSOCIATED WITH LIVING IN THIS RESIDENTIAL COMPLEX?',
              questionHe: 'מהם העלויות הקשורות למגורים במתחם המגורים הזה?',
              answerRo:
                'Costurile includ taxa de întreținere lunară pentru spațiile comune, utilitățile (apă, gaz, electricitate), securitatea 24/7 și întreținerea zonelor verzi. De asemenea, există costuri pentru parcarea suplimentară și serviciile premium.',
              answerEn:
                'Costs include monthly maintenance fee for common areas, utilities (water, gas, electricity), 24/7 security, and green area maintenance. There are also costs for additional parking and premium services.',
              answerHe:
                'העלויות כוללות דמי תחזוקה חודשיים לאזורים משותפים, שירותים (מים, גז, חשמל), אבטחה 24/7 ותחזוקת אזורים ירוקים. יש גם עלויות לחניה נוספת ושירותים פרימיום.',
            },
          ],
        },
        // Background Image
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
    // CONTACT SECTION
    {
      name: 'contactSection',
      type: 'group',
      label: 'Contact Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide contact section',
          },
        },
        // Form Title
        {
          name: 'formTitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Discutați cu un reprezentant',
        },
        {
          name: 'formTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'Discuss with a representative',
        },
        {
          name: 'formTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'דברו עם נציג',
        },
        // Form Fields Labels
        {
          name: 'nameFieldRo',
          type: 'text',
          required: false,
          defaultValue: 'NUME',
        },
        {
          name: 'nameFieldEn',
          type: 'text',
          required: false,
          defaultValue: 'NAME',
        },
        {
          name: 'nameFieldHe',
          type: 'text',
          required: false,
          defaultValue: 'שם',
        },
        {
          name: 'emailFieldRo',
          type: 'text',
          required: false,
          defaultValue: 'EMAIL',
        },
        {
          name: 'emailFieldEn',
          type: 'text',
          required: false,
          defaultValue: 'EMAIL',
        },
        {
          name: 'emailFieldHe',
          type: 'text',
          required: false,
          defaultValue: 'אימייל',
        },
        {
          name: 'phoneFieldRo',
          type: 'text',
          required: false,
          defaultValue: 'TELEFON',
        },
        {
          name: 'phoneFieldEn',
          type: 'text',
          required: false,
          defaultValue: 'PHONE',
        },
        {
          name: 'phoneFieldHe',
          type: 'text',
          required: false,
          defaultValue: 'טלפון',
        },
        {
          name: 'messageFieldRo',
          type: 'text',
          required: false,
          defaultValue: 'MESAJ',
        },
        {
          name: 'messageFieldEn',
          type: 'text',
          required: false,
          defaultValue: 'MESSAGE',
        },
        {
          name: 'messageFieldHe',
          type: 'text',
          required: false,
          defaultValue: 'הודעה',
        },
        // Submit Button
        {
          name: 'submitButtonRo',
          type: 'text',
          required: false,
          defaultValue: 'TRIMITEȚI',
        },
        {
          name: 'submitButtonEn',
          type: 'text',
          required: false,
          defaultValue: 'SEND',
        },
        {
          name: 'submitButtonHe',
          type: 'text',
          required: false,
          defaultValue: 'שלח',
        },
        // Background Image
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
      ],
    },
    // FIRST GALLERY SECTION (Full Width) - UPDATED WITH DATE GROUPING
    {
      name: 'gallerySection',
      type: 'group',
      label: 'Gallery Section (Full Width)',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide gallery section',
          },
        },
        // Section Title
        {
          name: 'sectionTitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Prezentare',
        },
        {
          name: 'sectionTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'Presentation',
        },
        {
          name: 'sectionTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'מצגת',
        },
        // Section Subtitle
        {
          name: 'sectionSubtitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Complex',
        },
        {
          name: 'sectionSubtitleEn',
          type: 'text',
          required: false,
          defaultValue: 'Complex',
        },
        {
          name: 'sectionSubtitleHe',
          type: 'text',
          required: false,
          defaultValue: 'מתחם',
        },
        // Gallery Images - UPDATED WITH DATE FIELD
        {
          name: 'galleryImages',
          type: 'array',
          required: false,
          minRows: 1,
          maxRows: 200,
          admin: {
            description: 'Add images - they will be automatically grouped by upload date',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description: 'Upload an image of your complex',
              },
            },
            {
              name: 'uploadDate',
              type: 'date',
              required: false,
              defaultValue: () => new Date().toISOString().split('T')[0],
              admin: {
                description: 'Date when this image was uploaded (used for grouping)',
                date: {
                  pickerAppearance: 'dayOnly',
                },
              },
            },
            {
              name: 'caption',
              type: 'group',
              fields: [
                {
                  name: 'captionRo',
                  type: 'text',
                  required: false,
                  admin: {
                    description: 'Optional caption in Romanian',
                  },
                },
                {
                  name: 'captionEn',
                  type: 'text',
                  required: false,
                  admin: {
                    description: 'Optional caption in English',
                  },
                },
                {
                  name: 'captionHe',
                  type: 'text',
                  required: false,
                  admin: {
                    description: 'Optional caption in Hebrew',
                  },
                },
              ],
            },
            {
              name: 'order',
              type: 'number',
              required: false,
              defaultValue: 1,
              admin: {
                description: 'Order within the same date group',
              },
            },
          ],
          defaultValue: [],
        },
        // Layout Options
        {
          name: 'enableLightbox',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Enable lightbox/modal view when clicking images',
          },
        },
        // Date Display Options - NEW FIELD
        {
          name: 'dateDisplayFormat',
          type: 'select',
          defaultValue: 'full',
          options: [
            { label: 'Full Date (5 August, 2025)', value: 'full' },
            { label: 'Short Date (5 Aug, 2025)', value: 'short' },
            { label: 'Numeric (05/08/2025)', value: 'numeric' },
            { label: 'ISO (2025-08-05)', value: 'iso' },
          ],
          admin: {
            description: 'How to display the date subtitles',
          },
        },
      ],
    },
    // SECOND GALLERY SECTION (Container Width) - UPDATED WITH DATE GROUPING
    {
      name: 'imageGallerySection',
      type: 'group',
      label: 'Image Gallery Section (Container Width)',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show/hide image gallery section',
          },
        },
        // Section Title
        {
          name: 'mainTitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Galerie',
          admin: {
            description: 'Main title (first part) in Romanian',
          },
        },
        {
          name: 'mainTitleEn',
          type: 'text',
          required: false,
          defaultValue: 'Gallery',
          admin: {
            description: 'Main title (first part) in English',
          },
        },
        {
          name: 'mainTitleHe',
          type: 'text',
          required: false,
          defaultValue: 'גלריה',
          admin: {
            description: 'Main title (first part) in Hebrew',
          },
        },
        // Section Subtitle (colored part)
        {
          name: 'subtitleRo',
          type: 'text',
          required: false,
          defaultValue: 'Imagini',
          admin: {
            description: 'Subtitle (colored part) in Romanian',
          },
        },
        {
          name: 'subtitleEn',
          type: 'text',
          required: false,
          defaultValue: 'Images',
          admin: {
            description: 'Subtitle (colored part) in English',
          },
        },
        {
          name: 'subtitleHe',
          type: 'text',
          required: false,
          defaultValue: 'תמונות',
          admin: {
            description: 'Subtitle (colored part) in Hebrew',
          },
        },
        // Description Text
        {
          name: 'descriptionRo',
          type: 'textarea',
          required: false,
          defaultValue:
            'Imaginile sunt cu titlu de prezentare, designul interior se poate personaliza în funcție de dorința dumneavoastră.',
          admin: {
            description: 'Description text in Romanian',
          },
        },
        {
          name: 'descriptionEn',
          type: 'textarea',
          required: false,
          defaultValue:
            'The images are for presentation purposes, the interior design can be customized according to your wishes.',
          admin: {
            description: 'Description text in English',
          },
        },
        {
          name: 'descriptionHe',
          type: 'textarea',
          required: false,
          defaultValue: 'התמונות הן למטרות הצגה, עיצוב הפנים ניתן להתאמה אישית לפי רצונכם.',
          admin: {
            description: 'Description text in Hebrew',
          },
        },
        // Gallery Images - UPDATED WITH DATE FIELD
        {
          name: 'images',
          type: 'array',
          required: false,
          minRows: 1,
          maxRows: 200,
          admin: {
            description:
              'Add images - they will be automatically grouped by upload date and displayed in a 4-column grid',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description: 'Upload an image for the gallery',
              },
            },
            {
              name: 'uploadDate',
              type: 'date',
              required: false,
              defaultValue: () => new Date().toISOString().split('T')[0],
              admin: {
                description: 'Date when this image was uploaded (used for grouping)',
                date: {
                  pickerAppearance: 'dayOnly',
                },
              },
            },
            {
              name: 'caption',
              type: 'group',
              fields: [
                {
                  name: 'captionRo',
                  type: 'text',
                  required: false,
                  admin: {
                    description: 'Optional caption in Romanian',
                  },
                },
                {
                  name: 'captionEn',
                  type: 'text',
                  required: false,
                  admin: {
                    description: 'Optional caption in English',
                  },
                },
                {
                  name: 'captionHe',
                  type: 'text',
                  required: false,
                  admin: {
                    description: 'Optional caption in Hebrew',
                  },
                },
              ],
            },
            {
              name: 'order',
              type: 'number',
              required: false,
              defaultValue: 1,
              admin: {
                description: 'Order within the same date group',
              },
            },
          ],
          defaultValue: [],
        },
        // Layout Options
        {
          name: 'enableLightbox',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Enable lightbox/modal view when clicking images',
          },
        },
        // Date Display Options - NEW FIELD
        {
          name: 'dateDisplayFormat',
          type: 'select',
          defaultValue: 'full',
          options: [
            { label: 'Full Date (5 August, 2025)', value: 'full' },
            { label: 'Short Date (5 Aug, 2025)', value: 'short' },
            { label: 'Numeric (05/08/2025)', value: 'numeric' },
            { label: 'ISO (2025-08-05)', value: 'iso' },
          ],
          admin: {
            description: 'How to display the date subtitles',
          },
        },
      ],
    },
  ],
}
