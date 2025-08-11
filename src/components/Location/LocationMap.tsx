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
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.39000437285!2d26.09556707671471!3d44.54812109409198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b21d003ea00761%3A0x8eb6ff58e92d97a3!2sBriza4Seasons!5e0!3m2!1sen!2sro!4v1754898476179!5m2!1sen!2sro'

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
                      <div className="flex items-center">
                        <span className="text-gray-900 font-medium text-lg">{pointName}</span>
                      </div>
                      <span className="text-[#D4B896] font-bold text-lg">{point.distance}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationMap
