'use client'
import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { usePathname } from 'next/navigation'
import LanguageToggle from '../LanguageToggle'
import Image from 'next/image'

const Header: React.FC = () => {
  const { t, currentLanguage } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Helper function to build localized URLs
  const buildLocalizedUrl = (routeKey: string) => {
    const routeMap = {
      home: { ro: '', en: '', he: '' },
      'about-us': { ro: 'despre-noi', en: 'about-us', he: 'אודותינו' },
      villas: { ro: 'vile', en: 'villas', he: 'וילות' },
      location: { ro: 'locatie', en: 'location', he: 'מיקום' },
      gallery: { ro: 'galerie', en: 'gallery', he: 'גלריה' },
      contact: { ro: 'contact', en: 'contact', he: 'צור-קשר' },
    }

    const route = routeMap[routeKey as keyof typeof routeMap]?.[currentLanguage] || ''
    return `/${currentLanguage}${route ? `/${route}` : ''}`
  }

  // Helper function to check if a link is active
  const isLinkActive = (routeKey: string) => {
    const expectedUrl = buildLocalizedUrl(routeKey)
    return pathname === expectedUrl
  }

  // Navigation items with multi-language support
  const navigationItems = [
    {
      labelRo: 'ACASĂ',
      labelEn: 'HOME',
      labelHe: 'בית',
      routeKey: 'home',
    },
    {
      labelRo: 'DESPRE NOI',
      labelEn: 'ABOUT US',
      labelHe: 'אודותינו',
      routeKey: 'about-us',
    },
    {
      labelRo: 'VILE',
      labelEn: 'VILLAS',
      labelHe: 'וילות',
      routeKey: 'villas',
    },
    {
      labelRo: 'LOCAȚIE',
      labelEn: 'LOCATION',
      labelHe: 'מיקום',
      routeKey: 'location',
    },
    {
      labelRo: 'GALERIE',
      labelEn: 'GALLERY',
      labelHe: 'גלריה',
      routeKey: 'gallery',
    },
    {
      labelRo: 'CONTACT',
      labelEn: 'CONTACT',
      labelHe: 'צור קשר',
      routeKey: 'contact',
    },
  ]

  // Get navigation items in the correct order for the current language
  const getOrderedNavigationItems = () => {
    if (currentLanguage === 'he') {
      // For Hebrew, reverse the order to show from right to left
      return [...navigationItems].reverse()
    }
    return navigationItems
  }

  // Contact information with multi-language support
  const contactInfo = {
    address: {
      labelRo: 'Adresa:',
      labelEn: 'Address:',
      labelHe: 'כתובת:',
      valueRo: 'Intrarea Mesteacănului, Otopeni, București / Ilfov',
      valueEn: 'Intrarea Mesteacănului, Otopeni, Bucharest / Ilfov',
      valueHe: 'אינטרה מסטאקן, אוטופני, בוקרשט / אילפוב',
    },
    phone: {
      labelRo: 'Contact telefonic:',
      labelEn: 'Phone contact:',
      labelHe: 'יצירת קשר טלפונית:',
      value: '+40 729 005 624',
    },
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Header Section - Always visible, no animation */}
      <div className="bg-white w-full border-b border-gray-100 relative z-[100]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Smaller on mobile */}
            <div className="order-1">
              <Link
                href={buildLocalizedUrl('home')}
                className="inline-block hover:opacity-80 transition-opacity duration-300"
              >
                <Image
                  src="/images/briza-logo.jpg"
                  alt="Briza Logo"
                  width={120}
                  height={60}
                  className="h-auto w-auto max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-14 xl:max-h-16"
                  priority
                />
              </Link>
            </div>

            {/* Phone number - Mobile only, centered */}
            <div className="flex md:hidden items-center space-x-1 order-2">
              <div className="text-[#D4B896] flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="text-[#D4B896] text-xs sm:text-sm">
                <a
                  href={`tel:${contactInfo.phone.value}`}
                  className="hover:text-[#c9a87d] transition-colors duration-300"
                >
                  {contactInfo.phone.value}
                </a>
              </div>
            </div>

            {/* Contact Information - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-12 order-2">
              {/* Address */}
              <div className="flex items-center space-x-2 lg:space-x-3 text-left">
                <div className="text-[#D4B896] flex-shrink-0">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#D4B896] text-xs lg:text-sm font-medium">
                    {t({
                      ro: contactInfo.address.labelRo,
                      en: contactInfo.address.labelEn,
                      he: contactInfo.address.labelHe,
                    })}
                  </div>
                  <div className="text-[#D4B896] text-xs lg:text-sm">
                    {t({
                      ro: contactInfo.address.valueRo,
                      en: contactInfo.address.valueEn,
                      he: contactInfo.address.valueHe,
                    })}
                  </div>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-2 lg:space-x-3 text-left">
                <div className="text-[#D4B896] flex-shrink-0">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#D4B896] text-xs lg:text-sm font-medium">
                    {t({
                      ro: contactInfo.phone.labelRo,
                      en: contactInfo.phone.labelEn,
                      he: contactInfo.phone.labelHe,
                    })}
                  </div>
                  <div className="text-[#D4B896] text-xs lg:text-sm">
                    <a
                      href={`tel:${contactInfo.phone.value}`}
                      className="hover:text-[#c9a87d] transition-colors duration-300"
                    >
                      {contactInfo.phone.value}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Language Toggle - Always visible with highest z-index */}
            <div className="relative z-[110] order-3">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Bar - Full width on mobile, centered container with rounded corners on desktop */}
      <div className="lg:flex lg:justify-center lg:px-4 lg:px-6 xl:px-8 relative z-[90]">
        <nav className="bg-gray-800 text-white shadow-lg w-full lg:max-w-5xl lg:rounded-b-lg">
          <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-center space-x-6 xl:space-x-12">
                {getOrderedNavigationItems().map((item, index) => {
                  const label = t({
                    ro: item.labelRo,
                    en: item.labelEn,
                    he: item.labelHe,
                  })
                  const href = buildLocalizedUrl(item.routeKey)
                  const isActive = isLinkActive(item.routeKey)

                  return (
                    <Link
                      key={`${item.routeKey}-${index}`}
                      href={href}
                      className={`nav-link text-sm font-medium tracking-wider transition-all duration-300 relative group px-3 py-2 rounded ${
                        isActive
                          ? 'text-[#D4B896] bg-[#D4B896]/10'
                          : 'text-white hover:text-[#D4B896]'
                      }`}
                    >
                      {label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#D4B896] rounded-full"></span>
                      )}
                      {!isActive && (
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4B896] transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <div className="flex items-center justify-end">
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:text-[#D4B896] transition-colors duration-300"
                  aria-label="Toggle mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
              {/* Mobile menu dropdown */}
              <div
                className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
                  isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-2 py-2">
                  {getOrderedNavigationItems().map((item, index) => {
                    const label = t({
                      ro: item.labelRo,
                      en: item.labelEn,
                      he: item.labelHe,
                    })
                    const href = buildLocalizedUrl(item.routeKey)
                    const isActive = isLinkActive(item.routeKey)

                    return (
                      <Link
                        key={`mobile-${item.routeKey}-${index}`}
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium tracking-wider transition-all duration-300 rounded ${
                          isActive
                            ? 'text-[#D4B896] bg-[#D4B896]/10'
                            : 'text-white hover:text-[#D4B896] hover:bg-gray-700'
                        }`}
                      >
                        {label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* Tablet Navigation */}
            <div className="hidden md:block lg:hidden">
              <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
                {getOrderedNavigationItems().map((item, index) => {
                  const label = t({
                    ro: item.labelRo,
                    en: item.labelEn,
                    he: item.labelHe,
                  })
                  const href = buildLocalizedUrl(item.routeKey)
                  const isActive = isLinkActive(item.routeKey)

                  return (
                    <Link
                      key={`tablet-${item.routeKey}-${index}`}
                      href={href}
                      className={`nav-link text-xs font-medium tracking-wider transition-all duration-300 relative group px-2 py-2 rounded ${
                        isActive
                          ? 'text-[#D4B896] bg-[#D4B896]/10'
                          : 'text-white hover:text-[#D4B896]'
                      }`}
                    >
                      {label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#D4B896] rounded-full"></span>
                      )}
                      {!isActive && (
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4B896] transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
