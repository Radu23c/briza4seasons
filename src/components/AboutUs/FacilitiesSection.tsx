'use client'

import type React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface MediaObject {
  url: string
  alt?: string
}

interface Facility {
  order: number
  titleRo: string
  titleEn: string
  titleHe: string
  descriptionRo?: string
  descriptionEn?: string
  descriptionHe?: string
}

interface FacilitiesSectionProps {
  sectionTitleRo: string
  sectionTitleEn: string
  sectionTitleHe: string
  facilities: Facility[]
  backgroundImage: MediaObject
  backgroundImageAltRo?: string
  backgroundImageAltEn?: string
  backgroundImageAltHe?: string
}

const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  sectionTitleRo,
  sectionTitleEn,
  sectionTitleHe,
  facilities,
  backgroundImage,
  backgroundImageAltRo,
  backgroundImageAltEn,
  backgroundImageAltHe,
}) => {
  const { t, currentLanguage } = useLanguage()

  const sectionTitle = t({
    ro: sectionTitleRo,
    en: sectionTitleEn,
    he: sectionTitleHe,
  })

  const backgroundImageAlt = t({
    ro: backgroundImageAltRo || 'Facilities background',
    en: backgroundImageAltEn || 'Facilities background',
    he: backgroundImageAltHe || 'Facilities background',
  })

  // Sort facilities by order
  const sortedFacilities = [...facilities].sort((a, b) => a.order - b.order)

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage.url || '/placeholder.svg'}
          alt={backgroundImageAlt}
          fill
          className="object-cover"
          quality={90}
        />
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 ${currentLanguage === 'he' ? 'text-right' : 'text-left'} md:text-center`}
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-wider">
            {sectionTitle}
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {sortedFacilities.map((facility, index) => {
            const title = t({
              ro: facility.titleRo,
              en: facility.titleEn,
              he: facility.titleHe,
            })

            const description =
              facility.descriptionRo || facility.descriptionEn || facility.descriptionHe
                ? t({
                    ro: facility.descriptionRo || '',
                    en: facility.descriptionEn || '',
                    he: facility.descriptionHe || '',
                  })
                : null

            return (
              <div
                key={index}
                className={`text-center space-y-6 ${currentLanguage === 'he' ? 'text-right' : 'text-left'} md:text-center`}
              >
                {/* Star Icon and Number */}
                <div className="flex items-center justify-center space-x-6 mb-8">
                  {/* Star Icon */}
                  <div className="text-[#D4B896]">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                    </svg>
                  </div>

                  {/* Large Number */}
                  <div className="text-8xl lg:text-9xl font-light text-[#D4B896]/30 leading-none">
                    {facility.order.toString().padStart(2, '0')}
                  </div>

                  {/* Star Icon */}
                  <div className="text-[#D4B896]">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-wider leading-tight">
                  {title}
                </h3>

                {/* Description (if provided) */}
                {description && (
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base max-w-xs mx-auto">
                    {description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection
