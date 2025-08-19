// src/components/Contact/ContactHero.tsx
'use client'

import { useLanguage } from '@/app/contexts/LanguageContext'
import Link from 'next/link'
import React from 'react'

interface MediaObject {
  url: string
  alt?: string
  width?: number
  height?: number
}

interface ContactHeroProps {
  mainTitleRo: string
  mainTitleEn: string
  mainTitleHe: string
  subtitleRo: string
  subtitleEn: string
  subtitleHe: string
  backgroundImage: MediaObject
  // Contact info props
  addressTitleRo: string
  addressTitleEn: string
  addressTitleHe: string
  phoneTitleRo: string
  phoneTitleEn: string
  phoneTitleHe: string
  emailTitleRo: string
  emailTitleEn: string
  emailTitleHe: string
  fullAddressRo: string
  fullAddressEn: string
  fullAddressHe: string
  cityRegionRo: string
  cityRegionEn: string
  cityRegionHe: string
  phoneNumber: string
  email: string
}

export default function ContactHero({
  mainTitleRo,
  mainTitleEn,
  mainTitleHe,
  subtitleRo,
  subtitleEn,
  subtitleHe,
  backgroundImage,
  addressTitleRo,
  addressTitleEn,
  addressTitleHe,
  phoneTitleRo,
  phoneTitleEn,
  phoneTitleHe,
  emailTitleRo,
  emailTitleEn,
  emailTitleHe,
  fullAddressRo,
  fullAddressEn,
  fullAddressHe,
  cityRegionRo,
  cityRegionEn,
  cityRegionHe,
  phoneNumber,
  email,
}: ContactHeroProps) {
  const { currentLanguage } = useLanguage()
  const isRTL = currentLanguage === 'he'

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
      labelRo: 'CONTACT',
      labelEn: 'CONTACT',
      labelHe: 'צור קשר',
      href: '/contact',
      isActive: true,
    },
  ]

  // Get translated content based on current language
  const mainTitle = {
    ro: mainTitleRo,
    en: mainTitleEn,
    he: mainTitleHe,
  }[currentLanguage]

  const subtitle = {
    ro: subtitleRo,
    en: subtitleEn,
    he: subtitleHe,
  }[currentLanguage]

  const addressTitle = {
    ro: addressTitleRo,
    en: addressTitleEn,
    he: addressTitleHe,
  }[currentLanguage]

  const phoneTitle = {
    ro: phoneTitleRo,
    en: phoneTitleEn,
    he: phoneTitleHe,
  }[currentLanguage]

  const emailTitle = {
    ro: emailTitleRo,
    en: emailTitleEn,
    he: emailTitleHe,
  }[currentLanguage]

  const fullAddress = {
    ro: fullAddressRo,
    en: fullAddressEn,
    he: fullAddressHe,
  }[currentLanguage]

  const cityRegion = {
    ro: cityRegionRo,
    en: cityRegionEn,
    he: cityRegionHe,
  }[currentLanguage]

  return (
    <section
      className={`relative min-h-[80vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundImage: `url('${backgroundImage.url}')`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4 w-full">
        {/* Breadcrumbs and Hero Content Container */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 pt-36">
          {/* Hero Content */}
          <div className={`text-white mb-8 lg:mb-0 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-24 mb-4">{mainTitle}</h1>
            <p className="text-xl md:text-2xl font-light opacity-90">{subtitle}</p>
          </div>

          {/* Breadcrumbs */}
          <div className={`flex-shrink-0 lg:ml-8 ${isRTL ? 'lg:mr-8 lg:ml-0' : ''}`}>
            <div className="bg-[#D4B896]/90 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg inline-block">
              <nav
                className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium tracking-wider ${
                  isRTL ? 'justify-end' : 'justify-start'
                }`}
              >
                {breadcrumbs.map((item, index) => {
                  const label = {
                    ro: item.labelRo,
                    en: item.labelEn,
                    he: item.labelHe,
                  }[currentLanguage]

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

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Address Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{addressTitle}</h3>
            <p className="text-gray-600 leading-relaxed">
              {fullAddress}
              <br />
              {cityRegion}
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{phoneTitle}</h3>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
              dir="ltr"
              style={{ unicodeBidi: 'embed' }}
            >
              {phoneNumber}
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 pt-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{emailTitle}</h3>
            <a
              href={`mailto:${email}`}
              className="text-gray-600 hover:text-amber-600 transition-colors duration-200 break-all text-sm sm:text-base inline-block"
              dir="ltr"
              style={{ unicodeBidi: 'embed' }}
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
