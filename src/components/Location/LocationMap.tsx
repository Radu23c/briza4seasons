'use client'

import type React from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface LocationPoint {
  nameRo: string
  nameEn: string
  nameHe: string
  distance: string
  category: 'shopping' | 'education' | 'transport' | 'retail' | 'other'
}

const LocationMap: React.FC = () => {
  const { t, currentLanguage } = useLanguage()

  // Hardcoded data
  const sectionTitleRo = 'Localizare'
  const sectionTitleEn = 'Location'
  const sectionTitleHe = 'מיקום'

  const sectionSubtitleRo = 'Avantaje'
  const sectionSubtitleEn = 'Advantages'
  const sectionSubtitleHe = 'יתרונות'

  const sectionDescriptionRo =
    'Locuirea în Tunari, în comparație cu București, aduce numeroase avantaje. Tunari este o comună mică și liniștită, situată în apropierea Bucureștiului, oferind un echilibru perfect între viața urbană și confortul rural.'
  const sectionDescriptionEn =
    'Living in Tunari, compared to Bucharest, brings numerous advantages. Tunari is a small and quiet commune, located near Bucharest, offering a perfect balance between urban life and rural comfort.'
  const sectionDescriptionHe =
    'מגורים בטונארי, בהשוואה לבוקרשט, מביאים יתרונות רבים. טונארי היא קומונה קטנה ושקטה, הממוקמת ליד בוקרשט, המציעה איזון מושלם בין חיים עירוניים לנוחות כפרית.'

  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.5!2d26.0826!3d44.5675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770b5b5b5%3A0x5!2s23%20August%2C%20Otopeni%2C%20Ilfov%2C%20Romania!5e0!3m2!1sen!2sro!4v1642684800000!5m2!1sen!2sro'

  const locationPoints: LocationPoint[] = [
    {
      nameRo: 'Baneasa Shopping City',
      nameEn: 'Baneasa Shopping City',
      nameHe: 'בנאסה שופינג סיטי',
      distance: '16 km',
      category: 'shopping',
    },
    {
      nameRo: 'Școala Olga Gudynn',
      nameEn: 'Olga Gudynn School',
      nameHe: 'בית ספר אולגה גודין',
      distance: '2.5 km',
      category: 'education',
    },
    {
      nameRo: 'Școala Americană',
      nameEn: 'American School',
      nameHe: 'בית הספר האמריקני',
      distance: '2.7 km',
      category: 'education',
    },
    {
      nameRo: 'Lidl',
      nameEn: 'Lidl',
      nameHe: 'לידל',
      distance: '1.6 km',
      category: 'retail',
    },
    {
      nameRo: 'Benzinărie Carbogaz',
      nameEn: 'Carbogaz Gas Station',
      nameHe: 'תחנת דלק קרבוגז',
      distance: '1.6 km',
      category: 'other',
    },
    {
      nameRo: "D'N 1 Mc Donalds",
      nameEn: "D'N 1 Mc Donalds",
      nameHe: "מקדונלדס D'N 1",
      distance: '8 km',
      category: 'retail',
    },
    {
      nameRo: 'Aeroport',
      nameEn: 'Airport',
      nameHe: 'שדה תעופה',
      distance: '9 km',
      category: 'transport',
    },
  ]

  const sectionTitle = t({
    ro: sectionTitleRo,
    en: sectionTitleEn,
    he: sectionTitleHe,
  })

  const sectionSubtitle = t({
    ro: sectionSubtitleRo,
    en: sectionSubtitleEn,
    he: sectionSubtitleHe,
  })

  const sectionDescription = t({
    ro: sectionDescriptionRo,
    en: sectionDescriptionEn,
    he: sectionDescriptionHe,
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'shopping':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
          </svg>
        )
      case 'education':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
          </svg>
        )
      case 'transport':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 16V14L13 9V7.5C13 6.67 12.33 6 11.5 6S10 6.67 10 7.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
          </svg>
        )
      case 'retail':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 7H16V6A4 4 0 0 0 8 6V7H5A1 1 0 0 0 4 8V19A3 3 0 0 0 7 22H17A3 3 0 0 0 20 19V8A1 1 0 0 0 19 7M10 6A2 2 0 0 1 14 6V7H10V6M18 19A1 1 0 0 1 17 20H7A1 1 0 0 1 6 19V9H8V10A1 1 0 0 0 10 10A1 1 0 0 0 10 9V9H14V10A1 1 0 0 0 16 10A1 1 0 0 0 16 9V9H18V19Z" />
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2M12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" />
          </svg>
        )
    }
  }

  const findMoreButtonText = t({
    ro: 'AFLĂ MAI MULTE',
    en: 'FIND OUT MORE',
    he: 'גלה עוד',
  })

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 ${currentLanguage === 'he' ? 'text-right' : 'text-left'} md:text-center`}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            {sectionTitle}{' '}
            <span className="font-elegant text-[#D4B896] italic">{sectionSubtitle}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">{sectionDescription}</p>
        </div>

        {/* Map and Details */}
        <div className="max-w-6xl mx-auto">
          <div
            className={`grid lg:grid-cols-2 gap-12 ${currentLanguage === 'he' ? 'lg:grid-flow-col-dense' : ''}`}
          >
            {/* Left Side - Map */}
            <div className={currentLanguage === 'he' ? 'lg:order-2' : ''}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-gray-200">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t({
                    ro: 'Hartă locație Torga45',
                    en: 'Torga45 location map',
                    he: 'מפת מיקום טורגה45',
                  })}
                  className="rounded-lg"
                />
              </div>

              {/* Address */}
              <div className="mt-6 text-center">
                <p className="text-gray-900 font-semibold text-lg mb-2">
                  {t({
                    ro: 'Adresa:',
                    en: 'Address:',
                    he: 'כתובת:',
                  })}
                </p>
                <p className="text-[#D4B896] font-medium text-xl">
                  23 August Otopeni, București / Ilfov
                </p>
              </div>
            </div>

            {/* Right Side - Location Points */}
            <div className={currentLanguage === 'he' ? 'lg:order-1' : ''}>
              <div className="space-y-4 mb-8">
                {locationPoints.map((point, index) => {
                  const pointName = t({
                    ro: point.nameRo,
                    en: point.nameEn,
                    he: point.nameHe,
                  })

                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between py-4 px-6 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } rounded-lg border border-gray-100 hover:border-[#D4B896] transition-all duration-300`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-[#D4B896] flex-shrink-0">
                          {getCategoryIcon(point.category)}
                        </div>
                        <span className="text-gray-900 font-medium text-lg">{pointName}</span>
                      </div>
                      <span className="text-[#D4B896] font-bold text-lg">{point.distance}</span>
                    </div>
                  )
                })}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  {t({
                    ro: 'Pentru a vă ajuta să vă orientați mai bine în zonă, iată câteva zone importante la care puteți ajunge cu ușurință cu mașina din Tunari în mai puțin de 10 km:',
                    en: 'To help you navigate the area better, here are some important areas you can easily reach by car from Tunari in less than 10 km:',
                    he: 'כדי לעזור לכם להתמצא טוב יותר באזור, הנה כמה אזורים חשובים שתוכלו להגיע אליהם בקלות ברכב מטונארי בפחות מ-10 ק"מ:',
                  })}
                </p>
                <button className="inline-block bg-[#D4B896] hover:bg-[#c9a87d] text-white px-12 py-6 rounded-lg transition-all duration-300 text-lg font-semibold tracking-wider uppercase btn-elegant transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {findMoreButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationMap
