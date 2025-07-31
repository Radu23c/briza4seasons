'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const { t, currentLanguage } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50) // Hide header after 50px scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items with multi-language support
  const navigationItems = [
    {
      labelRo: 'ACASĂ',
      labelEn: 'HOME',
      labelHe: 'בית',
      href: '/',
    },
    {
      labelRo: 'DESPRE NOI',
      labelEn: 'ABOUT US',
      labelHe: 'אודותינו',
      href: '/about',
    },
    {
      labelRo: 'VILE COMPLEX',
      labelEn: 'VILLA COMPLEX',
      labelHe: 'מתחם וילות',
      href: '/villa-complex', // Changed from "/vile-complex"
    },
    {
      labelRo: 'LOCALIZARE',
      labelEn: 'LOCATION',
      labelHe: 'מיקום',
      href: '/location', // Changed from "/localizare"
    },
    {
      labelRo: 'GALERIE FOTO',
      labelEn: 'PHOTO GALLERY',
      labelHe: 'גלריית תמונות',
      href: '/gallery', // Changed from "/galerie-foto"
    },
    {
      labelRo: 'CONTACT',
      labelEn: 'CONTACT',
      labelHe: 'צור קשר',
      href: '/contact',
    },
  ]

  // Contact information with multi-language support
  const contactInfo = {
    address: {
      labelRo: 'Adresa:',
      labelEn: 'Address:',
      labelHe: 'כתובת:',
      valueRo: 'Str. Nicolae Iorga 45, Tunari',
      valueEn: 'Nicolae Iorga Street 45, Tunari',
      valueHe: 'רחוב ניקולאה יורגה 45, טונארי',
    },
    phone: {
      labelRo: 'Contact telefonic:',
      labelEn: 'Phone contact:',
      labelHe: 'יצירת קשר טלפונית:',
      value: '+40 751 116 116',
    },
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Header Section - Full width white background */}
      <div
        className={`bg-white w-full border-b border-gray-100 transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0 -translate-y-full' : 'max-h-32 opacity-100 translate-y-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div
            className={`flex items-center justify-between ${
              currentLanguage === 'he' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            {/* Logo */}
            <div className={`${currentLanguage === 'he' ? 'order-2' : 'order-1'}`}>
              <Link
                href="/"
                className="font-elegant text-2xl sm:text-3xl lg:text-4xl text-gray-900 hover:text-[#D4B896] transition-colors duration-300"
              >
                Iorga45
              </Link>
            </div>

            {/* Contact Information - Hidden on mobile */}
            <div
              className={`hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-12 ${
                currentLanguage === 'he' ? 'order-1 space-x-reverse' : 'order-2'
              }`}
            >
              {/* Address */}
              <div
                className={`flex items-center space-x-2 lg:space-x-3 ${
                  currentLanguage === 'he' ? 'space-x-reverse text-right' : 'text-left'
                }`}
              >
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
              <div
                className={`flex items-center space-x-2 lg:space-x-3 ${
                  currentLanguage === 'he' ? 'space-x-reverse text-right' : 'text-left'
                }`}
              >
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
          </div>
        </div>
      </div>

      {/* Navigation Bar - Centered container with rounded corners */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <nav
          className={`bg-gray-800 text-white transition-all duration-500 ease-in-out rounded-b-lg shadow-lg ${
            isScrolled ? 'shadow-xl' : ''
          } w-full max-w-5xl`}
        >
          <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div
                className={`flex items-center justify-center space-x-6 xl:space-x-12 ${
                  currentLanguage === 'he' ? 'space-x-reverse' : ''
                }`}
              >
                {navigationItems.map((item, index) => {
                  const label = t({
                    ro: item.labelRo,
                    en: item.labelEn,
                    he: item.labelHe,
                  })

                  const isActive = pathname === item.href || (pathname === '/' && item.href === '/')

                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`nav-link text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group px-3 py-2 rounded ${
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
              <div className="flex items-center justify-between">
                {/* Mobile Logo (shown when top header is hidden) */}
                <div className={`${isScrolled ? 'block' : 'hidden'}`}>
                  <Link href="/" className="font-elegant text-xl text-[#D4B896]">
                    Iorga45
                  </Link>
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:text-[#D4B896] transition-colors duration-300 ml-auto"
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
                  {navigationItems.map((item, index) => {
                    const label = t({
                      ro: item.labelRo,
                      en: item.labelEn,
                      he: item.labelHe,
                    })

                    const isActive =
                      pathname === item.href || (pathname === '/' && item.href === '/')

                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 rounded ${
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
              <div
                className={`flex items-center justify-center flex-wrap gap-x-4 gap-y-2 ${
                  currentLanguage === 'he' ? 'space-x-reverse' : ''
                }`}
              >
                {navigationItems.map((item, index) => {
                  const label = t({
                    ro: item.labelRo,
                    en: item.labelEn,
                    he: item.labelHe,
                  })

                  const isActive = pathname === item.href || (pathname === '/' && item.href === '/')

                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className={`nav-link text-xs font-medium tracking-wider uppercase transition-all duration-300 relative group px-2 py-2 rounded ${
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
