// src/globals/ContactPage.ts
import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact Page',
  access: {
    read: () => true,
  },
  fields: [
    // Hero Section
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          label: 'Show Hero Section',
          defaultValue: true,
        },
        {
          name: 'mainTitleRo',
          type: 'text',
          label: 'Main Title (Romanian)',
          defaultValue: 'Contactează-ne',
        },
        {
          name: 'mainTitleEn',
          type: 'text',
          label: 'Main Title (English)',
          defaultValue: 'Contact Us',
        },
        {
          name: 'mainTitleHe',
          type: 'text',
          label: 'Main Title (Hebrew)',
          defaultValue: 'צור קשר',
        },
        {
          name: 'subtitleRo',
          type: 'text',
          label: 'Subtitle (Romanian)',
          defaultValue: 'SUNTEM AICI PENTRU TINE',
        },
        {
          name: 'subtitleEn',
          type: 'text',
          label: 'Subtitle (English)',
          defaultValue: 'WE ARE HERE FOR YOU',
        },
        {
          name: 'subtitleHe',
          type: 'text',
          label: 'Subtitle (Hebrew)',
          defaultValue: 'אנחנו כאן בשבילך',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image',
          required: true,
        },
        {
          name: 'breadcrumbs',
          type: 'array',
          label: 'Breadcrumbs',
          maxRows: 5,
          fields: [
            {
              name: 'labelRo',
              type: 'text',
              label: 'Label (Romanian)',
              required: true,
            },
            {
              name: 'labelEn',
              type: 'text',
              label: 'Label (English)',
              required: true,
            },
            {
              name: 'labelHe',
              type: 'text',
              label: 'Label (Hebrew)',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              label: 'Link',
              required: true,
            },
            {
              name: 'isActive',
              type: 'checkbox',
              label: 'Is Current Page',
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              labelRo: 'Acasă',
              labelEn: 'Home',
              labelHe: 'בית',
              href: '/',
              isActive: false,
            },
            {
              labelRo: 'Contact',
              labelEn: 'Contact',
              labelHe: 'צור קשר',
              href: '/contact',
              isActive: true,
            },
          ],
        },
      ],
    },

    // Contact Information Section
    {
      name: 'contactInfoSection',
      type: 'group',
      label: 'Contact Information Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          label: 'Show Contact Info Section',
          defaultValue: true,
        },
        {
          name: 'addressTitleRo',
          type: 'text',
          label: 'Address Title (Romanian)',
          defaultValue: 'Adresa',
        },
        {
          name: 'addressTitleEn',
          type: 'text',
          label: 'Address Title (English)',
          defaultValue: 'Address',
        },
        {
          name: 'addressTitleHe',
          type: 'text',
          label: 'Address Title (Hebrew)',
          defaultValue: 'כתובת',
        },
        {
          name: 'phoneTitleRo',
          type: 'text',
          label: 'Phone Title (Romanian)',
          defaultValue: 'Telefon',
        },
        {
          name: 'phoneTitleEn',
          type: 'text',
          label: 'Phone Title (English)',
          defaultValue: 'Phone',
        },
        {
          name: 'phoneTitleHe',
          type: 'text',
          label: 'Phone Title (Hebrew)',
          defaultValue: 'טלפון',
        },
        {
          name: 'emailTitleRo',
          type: 'text',
          label: 'Email Title (Romanian)',
          defaultValue: 'Email',
        },
        {
          name: 'emailTitleEn',
          type: 'text',
          label: 'Email Title (English)',
          defaultValue: 'Email',
        },
        {
          name: 'emailTitleHe',
          type: 'text',
          label: 'Email Title (Hebrew)',
          defaultValue: 'אימייל',
        },
        {
          name: 'fullAddressRo',
          type: 'text',
          label: 'Full Address (Romanian)',
          defaultValue: 'Intrarea Mesteacănului, Otopeni',
        },
        {
          name: 'fullAddressEn',
          type: 'text',
          label: 'Full Address (English)',
          defaultValue: 'Intrarea Mesteacănului, Otopeni',
        },
        {
          name: 'fullAddressHe',
          type: 'text',
          label: 'Full Address (Hebrew)',
          defaultValue: '23 אוגוסט, אוטופיני',
        },
        {
          name: 'cityRegionRo',
          type: 'text',
          label: 'City/Region (Romanian)',
          defaultValue: 'București / Ilfov',
        },
        {
          name: 'cityRegionEn',
          type: 'text',
          label: 'City/Region (English)',
          defaultValue: 'Bucharest / Ilfov',
        },
        {
          name: 'cityRegionHe',
          type: 'text',
          label: 'City/Region (Hebrew)',
          defaultValue: 'בוקרשט / איילפוב',
        },
        {
          name: 'postalCode',
          type: 'text',
          label: 'Postal Code',
          defaultValue: '075100',
        },
        {
          name: 'phoneNumber',
          type: 'text',
          label: 'Phone Number',
          defaultValue: '+40 729 005 624',
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
          defaultValue: 'blissimobiliare@briza4seasons.ro',
        },
      ],
    },

    // Contact Form Section
    {
      name: 'contactFormSection',
      type: 'group',
      label: 'Contact Form Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          label: 'Show Contact Form Section',
          defaultValue: true,
        },
        {
          name: 'formTitleRo',
          type: 'text',
          label: 'Form Title (Romanian)',
          defaultValue: 'Trimiteți-ne un mesaj!',
        },
        {
          name: 'formTitleEn',
          type: 'text',
          label: 'Form Title (English)',
          defaultValue: 'Send us a message!',
        },
        {
          name: 'formTitleHe',
          type: 'text',
          label: 'Form Title (Hebrew)',
          defaultValue: 'שלח לנו הודעה!',
        },
        {
          name: 'formDescriptionRo',
          type: 'textarea',
          label: 'Form Description (Romanian)',
          defaultValue:
            'Orice întrebare ați avea, suntem siguri că avem un răspuns sau o soluție pentru dumneavoastră.',
        },
        {
          name: 'formDescriptionEn',
          type: 'textarea',
          label: 'Form Description (English)',
          defaultValue:
            'Whatever question you have, we are sure we have an answer or solution for you.',
        },
        {
          name: 'formDescriptionHe',
          type: 'textarea',
          label: 'Form Description (Hebrew)',
          defaultValue: 'איזו שאלה שיש לך, אנחנו בטוחים שיש לנו תשובה או פתרון עבורך.',
        },
        // Form Field Labels
        {
          name: 'namePlaceholderRo',
          type: 'text',
          label: 'Name Placeholder (Romanian)',
          defaultValue: 'NUME',
        },
        {
          name: 'namePlaceholderEn',
          type: 'text',
          label: 'Name Placeholder (English)',
          defaultValue: 'NAME',
        },
        {
          name: 'namePlaceholderHe',
          type: 'text',
          label: 'Name Placeholder (Hebrew)',
          defaultValue: 'שם',
        },
        {
          name: 'emailPlaceholderRo',
          type: 'text',
          label: 'Email Placeholder (Romanian)',
          defaultValue: 'EMAIL',
        },
        {
          name: 'emailPlaceholderEn',
          type: 'text',
          label: 'Email Placeholder (English)',
          defaultValue: 'EMAIL',
        },
        {
          name: 'emailPlaceholderHe',
          type: 'text',
          label: 'Email Placeholder (Hebrew)',
          defaultValue: 'אימייל',
        },
        {
          name: 'phonePlaceholderRo',
          type: 'text',
          label: 'Phone Placeholder (Romanian)',
          defaultValue: 'TELEFON',
        },
        {
          name: 'phonePlaceholderEn',
          type: 'text',
          label: 'Phone Placeholder (English)',
          defaultValue: 'PHONE',
        },
        {
          name: 'phonePlaceholderHe',
          type: 'text',
          label: 'Phone Placeholder (Hebrew)',
          defaultValue: 'טלפון',
        },
        {
          name: 'messagePlaceholderRo',
          type: 'text',
          label: 'Message Placeholder (Romanian)',
          defaultValue: 'MESAJ',
        },
        {
          name: 'messagePlaceholderEn',
          type: 'text',
          label: 'Message Placeholder (English)',
          defaultValue: 'MESSAGE',
        },
        {
          name: 'messagePlaceholderHe',
          type: 'text',
          label: 'Message Placeholder (Hebrew)',
          defaultValue: 'הודעה',
        },
        // Submit Button
        {
          name: 'submitButtonRo',
          type: 'text',
          label: 'Submit Button (Romanian)',
          defaultValue: 'TRIMITEȚI',
        },
        {
          name: 'submitButtonEn',
          type: 'text',
          label: 'Submit Button (English)',
          defaultValue: 'SEND',
        },
        {
          name: 'submitButtonHe',
          type: 'text',
          label: 'Submit Button (Hebrew)',
          defaultValue: 'שלח',
        },
        {
          name: 'sendingButtonRo',
          type: 'text',
          label: 'Sending Button (Romanian)',
          defaultValue: 'TRIMITERE...',
        },
        {
          name: 'sendingButtonEn',
          type: 'text',
          label: 'Sending Button (English)',
          defaultValue: 'SENDING...',
        },
        {
          name: 'sendingButtonHe',
          type: 'text',
          label: 'Sending Button (Hebrew)',
          defaultValue: 'שולח...',
        },
        // Status Messages
        {
          name: 'successMessageRo',
          type: 'text',
          label: 'Success Message (Romanian)',
          defaultValue: 'Mesajul a fost trimis cu succes! Vă vom contacta în curând.',
        },
        {
          name: 'successMessageEn',
          type: 'text',
          label: 'Success Message (English)',
          defaultValue: 'Message sent successfully! We will contact you soon.',
        },
        {
          name: 'successMessageHe',
          type: 'text',
          label: 'Success Message (Hebrew)',
          defaultValue: 'ההודעה נשלחה בהצלחה! ניצור איתך קשר בקרוב.',
        },
        {
          name: 'errorMessageRo',
          type: 'text',
          label: 'Error Message (Romanian)',
          defaultValue: 'A apărut o eroare. Vă rugăm să încercați din nou.',
        },
        {
          name: 'errorMessageEn',
          type: 'text',
          label: 'Error Message (English)',
          defaultValue: 'An error occurred. Please try again.',
        },
        {
          name: 'errorMessageHe',
          type: 'text',
          label: 'Error Message (Hebrew)',
          defaultValue: 'אירעה שגיאה. אנא נסה שוב.',
        },
        {
          name: 'connectionErrorRo',
          type: 'text',
          label: 'Connection Error (Romanian)',
          defaultValue: 'A apărut o eroare de conexiune. Vă rugăm să încercați din nou.',
        },
        {
          name: 'connectionErrorEn',
          type: 'text',
          label: 'Connection Error (English)',
          defaultValue: 'A connection error occurred. Please try again.',
        },
        {
          name: 'connectionErrorHe',
          type: 'text',
          label: 'Connection Error (Hebrew)',
          defaultValue: 'אירעה שגיאת חיבור. אנא נסה שוב.',
        },
      ],
    },

    // Representative Section
    {
      name: 'representativeSection',
      type: 'group',
      label: 'Talk to Representative Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          label: 'Show Representative Section',
          defaultValue: true,
        },
        {
          name: 'sectionTitleRo',
          type: 'text',
          label: 'Section Title (Romanian)',
          defaultValue: 'Discutați cu un reprezentant',
        },
        {
          name: 'sectionTitleEn',
          type: 'text',
          label: 'Section Title (English)',
          defaultValue: 'Talk to a representative',
        },
        {
          name: 'sectionTitleHe',
          type: 'text',
          label: 'Section Title (Hebrew)',
          defaultValue: 'דבר עם נציג',
        },
        {
          name: 'showLargerMapRo',
          type: 'text',
          label: 'Show Larger Map (Romanian)',
          defaultValue: 'Afișați harta mărită',
        },
        {
          name: 'showLargerMapEn',
          type: 'text',
          label: 'Show Larger Map (English)',
          defaultValue: 'Show larger map',
        },
        {
          name: 'showLargerMapHe',
          type: 'text',
          label: 'Show Larger Map (Hebrew)',
          defaultValue: 'הצג מפה מוגדלת',
        },
        {
          name: 'mapEmbedUrl',
          type: 'textarea',
          label: 'Google Maps Embed URL',
          defaultValue:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.39000437285!2d26.09556707671471!3d44.54812109409198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b21d003ea00761%3A0x8eb6ff58e92d97a3!2sBriza4Seasons!5e0!3m2!1sen!2sro!4v1754898476179!5m2!1sen!2sro',
        },
        {
          name: 'mapTitle',
          type: 'text',
          label: 'Map Title',
          defaultValue: 'Locația Intrarea Mesteacănului, Otopeni',
        },
      ],
    },
  ],
}
