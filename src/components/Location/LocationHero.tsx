'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface MediaObject {
  url: string
  alt?: string
  width?: number
  height?: number
}

interface LocationHeroProps {
  mainTitleRo: string
  mainTitleEn: string
  mainTitleHe: string
  subtitleRo: string
  subtitleEn: string
  subtitleHe: string
  backgroundImage: MediaObject
}

const LocationHero: React.FC<LocationHeroProps> = ({
  mainTitleRo,
  mainTitleEn,
  mainTitleHe,
  subtitleRo,
  subtitleEn,
  subtitleHe,
  backgroundImage,
}) => {
  const { t, currentLanguage } = useLanguage()

  const mainTitle = t({
    ro: mainTitleRo,
    en: mainTitleEn,
    he: mainTitleHe,
  })

  const subtitle = t({
    ro: subtitleRo,
    en: subtitleEn,
    he: subtitleHe,
  })

  // Hardcoded breadcrumbs
  const breadcrumbs = [
    {
      labelRo: 'ACASĂ',
      labelEn: 'HOME',
      labelHe: 'בית',
      href: '/',
      isActive: false,
    },
    {
      labelRo: 'LOCAȚIE',
      labelEn: 'LOCATION',
      labelHe: 'מיקום',
      href: '/location',
      isActive: true,
    },
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage.url || '/placeholder.svg'}
          alt={backgroundImage.alt || 'Location hero background'}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div
          className={`flex flex-col lg:flex-row lg:items-center lg:justify-between ${
            currentLanguage === 'he' ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Main Content */}
          <div className={`flex-1 ${currentLanguage === 'he' ? 'text-right' : 'text-left'}`}>
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 pt-8 lg:pt-24 leading-tight max-w-4xl">
              {mainTitle}
            </h1>
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wider uppercase mb-6 lg:mb-0">
              {subtitle}
            </p>
          </div>

          {/* Breadcrumbs */}
          <div
            className={`flex-shrink-0 lg:ml-8 ${currentLanguage === 'he' ? 'lg:mr-8 lg:ml-0' : ''}`}
          >
            <div className="bg-[#D4B896]/90 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg inline-block">
              <nav
                className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium tracking-wider uppercase ${
                  currentLanguage === 'he' ? 'justify-end' : 'justify-start'
                }`}
              >
                {breadcrumbs.map((item, index) => {
                  const label = t({
                    ro: item.labelRo,
                    en: item.labelEn,
                    he: item.labelHe,
                  })
                  return (
                    <React.Fragment key={index}>
                      {item.isActive ? (
                        <span className="text-gray-900 font-semibold whitespace-nowrap">
                          {label}
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-gray-900 transition-colors duration-300 whitespace-nowrap"
                        >
                          {label}
                        </Link>
                      )}
                      {/* Separator */}
                      {index < breadcrumbs.length - 1 && <span className="text-gray-600">/</span>}
                    </React.Fragment>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationHero