'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/app/contexts/LanguageContext'

const LocationHero = () => {
  const { t, currentLanguage } = useLanguage()

  // Hardcoded data
  const mainTitleRo = 'Locație Strategică'
  const mainTitleEn = 'Strategic Location'
  const mainTitleHe = 'מיקום אסטרטגי'

  const subtitleRo = 'Tunari, Ilfov'
  const subtitleEn = 'Tunari, Ilfov'
  const subtitleHe = 'טונארי, איילפוב'

  const backgroundImage = {
    url: '/images/location-hero-bg.png',
    alt: 'Location hero background',
  }

  const breadcrumbs = [
    {
      labelRo: 'Acasă',
      labelEn: 'Home',
      labelHe: 'בית',
      href: '/',
      isActive: false,
    },
    {
      labelRo: 'Locație',
      labelEn: 'Location',
      labelHe: 'מיקום',
      href: '/location',
      isActive: true,
    },
  ]

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

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-hero-bg.jpg"
          alt={backgroundImage.alt}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div
          className={`flex items-center justify-between ${currentLanguage === 'he' ? 'flex-row-reverse' : 'flex-row'}`}
        >
          {/* Main Content */}
          <div className={`flex-1 ${currentLanguage === 'he' ? 'text-right' : 'text-left'}`}>
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight max-w-4xl">
              {mainTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wider uppercase">
              {subtitle}
            </p>
          </div>

          {/* Breadcrumbs */}
          <div className="flex-shrink-0 ml-8">
            <div className="bg-[#D4B896]/90 backdrop-blur-sm px-6 py-4 rounded-lg">
              <nav
                className={`flex items-center space-x-2 text-sm font-medium tracking-wider uppercase ${
                  currentLanguage === 'he' ? 'space-x-reverse' : ''
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
                        <span className="text-gray-900 font-semibold">{label}</span>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                          {label}
                        </Link>
                      )}

                      {/* Separator */}
                      {index < breadcrumbs.length - 1 && (
                        <span className="text-gray-600 mx-2">/</span>
                      )}
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
