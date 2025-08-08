'use client'

import type React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/contexts/LanguageContext'
import FeatureItem from './FeatureItem'

interface MediaObject {
  url: string
  alt?: string
}

interface FeatureItemData {
  order: number
  // Removed icon: string
  titleRo: string
  titleEn: string
  titleHe: string
  descriptionRo: string
  descriptionEn: string
  descriptionHe: string
}

interface FeaturesOverviewProps {
  titleRo?: string
  titleEn?: string
  titleHe?: string
  backgroundImage: MediaObject
  backgroundImageAltRo?: string
  backgroundImageAltEn?: string
  backgroundImageAltHe?: string
  featureItems: FeatureItemData[]
}

const FeaturesOverview: React.FC<FeaturesOverviewProps> = ({
  titleRo,
  titleEn,
  titleHe,
  backgroundImage,
  backgroundImageAltRo,
  backgroundImageAltEn,
  backgroundImageAltHe,
  featureItems,
}) => {
  const { t, currentLanguage } = useLanguage()

  // Early return if required data is missing
  if (!backgroundImage?.url || !featureItems?.length) {
    console.warn('FeaturesOverview: Missing required data')
    return null
  }

  const title =
    titleRo || titleEn || titleHe
      ? t({
          ro: titleRo || '',
          en: titleEn || '',
          he: titleHe || '',
        })
      : null

  const backgroundImageAlt = t({
    ro: backgroundImageAltRo || 'Development overview',
    en: backgroundImageAltEn || 'Development overview',
    he: backgroundImageAltHe || 'Development overview',
  })

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Optional section title */}
        {title && (
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-900">
            {title}
          </h2>
        )}

        {/* Feature items grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {featureItems.map((item, index) => (
            <FeatureItem
              key={index}
              order={item.order}
              // Removed icon={item.icon}
              titleRo={item.titleRo}
              titleEn={item.titleEn}
              titleHe={item.titleHe}
              descriptionRo={item.descriptionRo}
              descriptionEn={item.descriptionEn}
              descriptionHe={item.descriptionHe}
            />
          ))}
        </div>

        {/* Background image */}
        <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={backgroundImage.url || '/placeholder.svg'}
            alt={backgroundImageAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesOverview
