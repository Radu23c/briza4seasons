'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { CookieUtils } from '@/utilities/cookies'

interface CookieContextType {
  hasConsent: boolean
  isAccepted: boolean
  consentStatus: 'accepted' | 'declined' | null
  initializeTracking: () => void
  clearConsent: () => void
}

const CookieContext = createContext<CookieContextType>({
  hasConsent: false,
  isAccepted: false,
  consentStatus: null,
  initializeTracking: () => {},
  clearConsent: () => {},
})

export const useCookies = () => useContext(CookieContext)

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [hasConsent, setHasConsent] = useState(false)
  const [isAccepted, setIsAccepted] = useState(false)
  const [consentStatus, setConsentStatus] = useState<'accepted' | 'declined' | null>(null)

  useEffect(() => {
    // Check consent status on mount and when localStorage changes
    const checkConsent = () => {
      setHasConsent(CookieUtils.hasConsent())
      setIsAccepted(CookieUtils.isAccepted())
      setConsentStatus(CookieUtils.getConsentStatus())
    }

    checkConsent()

    // Listen for storage changes (when user makes choice)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookieConsent') {
        checkConsent()

        // Initialize tracking if accepted
        if (e.newValue === 'accepted') {
          CookieUtils.initializeTracking()
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)

    // Also listen for custom event for same-tab updates
    const handleConsentChange = () => {
      checkConsent()
      if (CookieUtils.isAccepted()) {
        CookieUtils.initializeTracking()
      }
    }

    window.addEventListener('cookieConsentChange', handleConsentChange)

    // Initialize tracking if already accepted
    if (CookieUtils.isAccepted()) {
      CookieUtils.initializeTracking()
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cookieConsentChange', handleConsentChange)
    }
  }, [])

  const initializeTracking = () => {
    CookieUtils.initializeTracking()
  }

  const clearConsent = () => {
    CookieUtils.clearConsent()
    setHasConsent(false)
    setIsAccepted(false)
    setConsentStatus(null)
  }

  return (
    <CookieContext.Provider
      value={{
        hasConsent,
        isAccepted,
        consentStatus,
        initializeTracking,
        clearConsent,
      }}
    >
      {children}
    </CookieContext.Provider>
  )
}
