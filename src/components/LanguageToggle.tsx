'use client'
import type React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'

const LanguageToggle: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'ro' as const, name: 'RO', flag: '🇷🇴' },
    { code: 'en' as const, name: 'EN', flag: '🇺🇸' },
    { code: 'he' as const, name: 'עב', flag: '🇮🇱' },
  ]

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

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
    setLanguage(langCode)
    setIsDropdownOpen(false)
  }

  return (
    <>
      {/* Desktop version - horizontal buttons */}
      <div className="hidden md:flex bg-white rounded-lg p-2 space-x-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
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

        {/* Dropdown menu with higher z-index and fixed positioning */}
        <div
          className={`absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 origin-top min-w-[100px] z-[9999] ${
            isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
          }`}
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            zIndex: 9999,
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 flex items-center space-x-2 hover:bg-gray-50 ${
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
      </div>
    </>
  )
}

export default LanguageToggle
