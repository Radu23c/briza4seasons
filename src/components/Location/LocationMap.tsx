'use client'
import type React from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface LocationPoint {
  nameRo: string
  nameEn: string
  nameHe: string
  distance: string
  category: 'shopping' | 'education' | 'transport' | 'retail' | 'other'
  order: number
  id?: string | null
}

interface LocationMapProps {
  sectionTitleRo: string
  sectionTitleEn: string
  sectionTitleHe: string
  sectionSubtitleRo: string
  sectionSubtitleEn: string
  sectionSubtitleHe: string
  sectionDescriptionRo: string
  sectionDescriptionEn: string
  sectionDescriptionHe: string
  mapEmbedUrl: string
  locationPoints: LocationPoint[]
  ctaButtonTextRo: string
  ctaButtonTextEn: string
  ctaButtonTextHe: string
  ctaDescriptionRo: string
  ctaDescriptionEn: string
  ctaDescriptionHe: string
}

const LocationMap: React.FC<LocationMapProps> = ({
  sectionTitleRo,
  sectionTitleEn,
  sectionTitleHe,
  sectionSubtitleRo,
  sectionSubtitleEn,
  sectionSubtitleHe,
  sectionDescriptionRo,
  sectionDescriptionEn,
  sectionDescriptionHe,
  // mapEmbedUrl is no longer used since we're hardcoding it
  locationPoints,
  ctaButtonTextRo,
  ctaButtonTextEn,
  ctaButtonTextHe,
  ctaDescriptionRo,
  ctaDescriptionEn,
  ctaDescriptionHe,
}) => {
  const { t, currentLanguage } = useLanguage()

  // Hardcoded Google Maps embed URL for Intrarea Mesteacănului, Otopeni
  const hardcodedMapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.1943385180093!2d26.095480976714853!3d44.550572493930936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b21ceb096d5d31%3A0xac8553244cabe0c7!2sIntrarea%20Mesteac%C4%83nului%2C%20075100%20Otopeni!5e1!3m2!1sde!2sro!4v1754480844195!5m2!1sde!2sro'

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

  const ctaButtonText = t({
    ro: ctaButtonTextRo,
    en: ctaButtonTextEn,
    he: ctaButtonTextHe,
  })

  const ctaDescription = t({
    ro: ctaDescriptionRo,
    en: ctaDescriptionEn,
    he: ctaDescriptionHe,
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
                  src={hardcodedMapUrl}
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
              {/* Address - Updated to new location */}
              <div className="mt-6 text-center">
                <p className="text-gray-900 font-semibold text-lg mb-2">
                  {t({
                    ro: 'Adresa:',
                    en: 'Address:',
                    he: 'כתובת:',
                  })}
                </p>
                <p className="text-[#D4B896] font-medium text-xl">
                  Intrarea Mesteacănului, Otopeni, București / Ilfov
                </p>
              </div>
            </div>

            {/* Right Side - CTA Description, Location Points, and Button */}
            <div className={currentLanguage === 'he' ? 'lg:order-1' : ''}>
              {/* CTA Description - Moved to top */}
              <div className="text-center mb-8">
                <p className="text-gray-600 text-lg">{ctaDescription}</p>
              </div>

              {/* Location Points List */}
              <div className="space-y-4 mb-8">
                {locationPoints.map((point, index) => {
                  const pointName = t({
                    ro: point.nameRo,
                    en: point.nameEn,
                    he: point.nameHe,
                  })
                  return (
                    <div
                      key={point.id || index}
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

              {/* CTA Button - Stays at bottom */}
              <div className="text-center">
                <button className="inline-block bg-[#D4B896] hover:bg-[#c9a87d] text-white px-12 py-6 rounded-lg transition-all duration-300 text-lg font-semibold tracking-wider uppercase btn-elegant transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {ctaButtonText}
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
