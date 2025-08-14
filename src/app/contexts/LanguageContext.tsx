'use client'

import type React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

type Language = 'ro' | 'en' | 'he'

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  t: (translations: { ro: string; en: string; he: string }) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ro')
  const pathname = usePathname()

  // Sync language with URL pathname
  useEffect(() => {
    const pathSegments = pathname.split('/')
    const localeFromPath = pathSegments[1] as Language

    if (['ro', 'en', 'he'].includes(localeFromPath)) {
      // Only update if different to avoid infinite loops
      if (currentLanguage !== localeFromPath) {
        setCurrentLanguage(localeFromPath)
        // Also save to localStorage when URL changes
        localStorage.setItem('language', localeFromPath)
      }
    } else {
      // Fallback to saved language or default to Romanian
      const savedLanguage = localStorage.getItem('language') as Language
      if (savedLanguage && ['ro', 'en', 'he'].includes(savedLanguage)) {
        if (currentLanguage !== savedLanguage) {
          setCurrentLanguage(savedLanguage)
        }
      } else {
        if (currentLanguage !== 'ro') {
          setCurrentLanguage('ro')
        }
      }
    }
  }, [pathname, currentLanguage])

  // Load language from localStorage on initial mount (before pathname effect)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['ro', 'en', 'he'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem('language', lang)
    // Note: URL navigation is now handled by the LanguageToggle component
  }

  const t = (translations: { ro: string; en: string; he: string }) => {
    return translations[currentLanguage] || translations.ro
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
