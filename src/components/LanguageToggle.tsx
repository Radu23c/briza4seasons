'use client'
import type React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLanguage } from '@/app/contexts/LanguageContext'

const LanguageToggle: React.FC = () => {
  const { currentLanguage } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'ro' as const, name: 'RO', flag: '🇷🇴' },
    { code: 'en' as const, name: 'EN', flag: '🇺🇸' },
    { code: 'he' as const, name: 'עב', flag: '🇮🇱' },
  ]

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  // Route translations mapping
  const routeMap = {
    // Romanian to other languages
    'despre-noi': { en: 'about-us', he: 'אודותינו' },
    contact: { en: 'contact', he: 'צור-קשר' },
    'politica-cookie': { en: 'cookie-policy', he: 'מדיניות-עוגיות' },
    galerie: { en: 'gallery', he: 'גלריה' },
    locatie: { en: 'location', he: 'מיקום' },
    articole: { en: 'posts', he: 'פוסטים' },
    cautare: { en: 'search', he: 'חיפוש' },
    'termeni-si-conditii': { en: 'terms-and-conditions', he: 'תנאים-והגבלות' },
    vile: { en: 'villas', he: 'וילות' },

    // English to other languages
    'about-us': { ro: 'despre-noi', he: 'אודותינו' },
    'cookie-policy': { ro: 'politica-cookie', he: 'מדיניות-עוגיות' },
    gallery: { ro: 'galerie', he: 'גלריה' },
    location: { ro: 'locatie', he: 'מיקום' },
    posts: { ro: 'articole', he: 'פוסטים' },
    search: { ro: 'cautare', he: 'חיפוש' },
    'terms-and-conditions': { ro: 'termeni-si-conditii', he: 'תנאים-והגבלות' },
    villas: { ro: 'vile', he: 'וילות' },

    // Hebrew to other languages
    אודותינו: { ro: 'despre-noi', en: 'about-us' },
    'צור-קשר': { ro: 'contact', en: 'contact' },
    'מדיניות-עוגיות': { ro: 'politica-cookie', en: 'cookie-policy' },
    גלריה: { ro: 'galerie', en: 'gallery' },
    מיקום: { ro: 'locatie', en: 'location' },
    פוסטים: { ro: 'articole', en: 'posts' },
    חיפוש: { ro: 'cautare', en: 'search' },
    'תנאים-והגבלות': { ro: 'termeni-si-conditii', en: 'terms-and-conditions' },
    וילות: { ro: 'vile', en: 'villas' },
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageSelect = (langCode: 'ro' | 'en' | 'he') => {
    const pathSegments = pathname.split('/').filter(Boolean)

    // Check if current path has a locale
    const currentLocale = ['ro', 'en', 'he'].includes(pathSegments[0]) ? pathSegments[0] : null

    if (currentLocale) {
      // Get the route part (after locale)
      const routePart = pathSegments[1]

      if (!routePart) {
        // Home page - just change locale
        router.push(`/${langCode}`)
      } else {
        // Try to find the route translation
        const routeTranslation = routeMap[routePart as keyof typeof routeMap]

        if (routeTranslation && routeTranslation[langCode]) {
          // Use translated route
          const newRoute = routeTranslation[langCode]
          router.push(`/${langCode}/${newRoute}`)
        } else {
          // Fallback: keep the same route
          router.push(`/${langCode}/${routePart}`)
        }
      }
    } else {
      // Path doesn't have locale, add it
      router.push(`/${langCode}${pathname === '/' ? '' : pathname}`)
    }

    setIsDropdownOpen(false)
  }

  return (
    <>
      {/* Desktop version - horizontal buttons */}
      <div className="hidden md:flex bg-white rounded-lg p-2 space-x-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
              currentLanguage === lang.code
                ? 'bg-[#D4B896] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span>{lang.name}</span>
          </button>
        ))}
      </div>

      {/* Mobile version - dropdown */}
      <div className="md:hidden relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-white rounded-lg p-2 px-3 flex items-center space-x-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
          aria-label="Select language"
        >
          <span>{currentLang.flag}</span>
          <span>{currentLang.name}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown menu with portal-like positioning */}
        {isDropdownOpen && (
          <div
            className="fixed bg-white rounded-lg shadow-lg border border-gray-200 min-w-[100px] z-[9999]"
            style={{
              top: dropdownRef.current?.getBoundingClientRect().bottom
                ? `${dropdownRef.current.getBoundingClientRect().bottom + window.scrollY + 4}px`
                : 'auto',
              left: dropdownRef.current?.getBoundingClientRect().left
                ? `${dropdownRef.current.getBoundingClientRect().left + window.scrollX}px`
                : 'auto',
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 flex items-center space-x-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                  currentLanguage === lang.code
                    ? 'bg-[#D4B896] text-white hover:bg-[#c9a87d]'
                    : 'text-gray-700'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default LanguageToggle
