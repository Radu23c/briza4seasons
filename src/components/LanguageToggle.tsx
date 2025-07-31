'use client'

import type React from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'

const LanguageToggle: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage()

  const languages = [
    { code: 'ro' as const, name: 'RO', flag: '🇷🇴' },
    { code: 'en' as const, name: 'EN', flag: '🇺🇸' },
    { code: 'he' as const, name: 'עב', flag: '🇮🇱' },
  ]

  return (
    <div className="fixed top-4 right-4 z-[60] bg-white rounded-lg shadow-lg p-2 flex space-x-1">
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
          <span>{lang.flag}</span>
          <span>{lang.name}</span>
        </button>
      ))}
    </div>
  )
}

export default LanguageToggle
