'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'
import LanguageToggle from '../components/LanguageToggle'

const cookieTexts = {
  ro: {
    title: 'Cookie-uri',
    message:
      'Folosim cookie-uri pentru a îmbunătăți experiența dvs. pe site-ul nostru și pentru a analiza traficul. Prin continuarea navigării, sunteți de acord cu folosirea cookie-urilor. Dacă nu sunteți de acord cu folosirea cookie-urilor, vă rugăm să nu continuați cu navigarea website-ului.',
    declineWarning:
      'Prin refuzul cookie-urilor, vă recomandăm să nu continuați navigarea pe site-ul nostru, deoarece funcționalitatea poate fi limitată.',
    accept: 'Accept',
    decline: 'Refuz',
    termsAndConditions: 'Termeni și Condiții',
    cookiePolicy: 'Politica Cookie-uri',
    privacyPolicy: 'Politica de Confidențialitate',
  },
  en: {
    title: 'Cookies',
    message:
      'We use cookies to improve your experience on our website and to analyze traffic. By continuing to browse, you agree to the use of cookies. If you do not agree to the use of cookies, please do not continue browsing the website.',
    declineWarning:
      'By declining cookies, we recommend that you do not continue browsing our website as functionality may be limited.',
    accept: 'Accept',
    decline: 'Decline',
    termsAndConditions: 'Terms & Conditions',
    cookiePolicy: 'Cookie Policy',
    privacyPolicy: 'Privacy Policy',
  },
  he: {
    title: 'עוגיות',
    message:
      'אנחנו משתמשים בעוגיות כדי לשפר את החוויה שלכם באתר ולנתח תנועה. על ידי המשך הגלישה, אתם מסכימים לשימוש בעוגיות. אם אינכם מסכימים לשימוש בעוגיות, אנא אל תמשיכו לגלוש באתר.',
    declineWarning:
      'על ידי דחיית העוגיות, אנו ממליצים שלא תמשיכו לגלוש באתר שלנו מכיוון שהפונקציונליות עלולה להיות מוגבלת.',
    accept: 'קבל',
    decline: 'דחה',
    termsAndConditions: 'תנאי השימוש',
    cookiePolicy: 'מדיניות עוגיות',
    privacyPolicy: 'מדיניות פרטיות',
  },
}

const languageOptions = [
  { code: 'ro', name: 'RO', flag: '🇷🇴' },
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  { code: 'he', name: 'עב', flag: '🇮🇱' },
]

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showDeclineWarning, setShowDeclineWarning] = useState(false)
  const { currentLanguage } = useLanguage()

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookieConsent')
    if (!consentGiven) {
      // Show after a delay for better UX
      setTimeout(() => {
        setShowConsent(true)
        setTimeout(() => setIsVisible(true), 100)
      }, 2000) // 2 second delay after page load
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsVisible(false)
    setTimeout(() => setShowConsent(false), 300)

    // Dispatch custom event to notify other components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookieConsentChange'))
    }

    console.log('Cookies accepted for Briza4Seasons - tracking will be initialized')
  }

  const handleDecline = () => {
    setShowDeclineWarning(true)
  }

  const handleDeclineConfirm = () => {
    localStorage.setItem('cookieConsent', 'declined')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsVisible(false)
    setTimeout(() => setShowConsent(false), 300)

    // Dispatch custom event to notify other components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cookieConsentChange'))
    }

    console.log('Cookies declined for Briza4Seasons - tracking disabled')
  }

  const handleBackToConsent = () => {
    setShowDeclineWarning(false)
  }

  const handleTermsClick = () => {
    // Open terms and conditions in new tab
    window.open('/terms-and-conditions', '_blank')
  }

  const handleCookiePolicyClick = () => {
    // Open cookie policy in new tab
    window.open('/cookie-policy', '_blank')
  }

  const handlePrivacyPolicyClick = () => {
    // Open privacy policy in new tab
    window.open('/privacy-policy', '_blank')
  }

  if (!showConsent) return null

  const currentTexts = cookieTexts[currentLanguage as keyof typeof cookieTexts] || cookieTexts.ro
  const isRTL = currentLanguage === 'he'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className={`
          relative bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 mx-4 max-w-lg w-full 
          transform transition-all duration-300 border border-[#D4B896]/20
          ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          ${isRTL ? 'text-right' : 'text-left'}
        `}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Language Toggle - positioned at top right/left based on direction */}
        <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10`}>
          <LanguageToggle />
        </div>

        {!showDeclineWarning ? (
          <>
            {/* Decorative border accent */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-[#D4B896] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍪</span>
              </div>
            </div>

            <div className="pt-4 mb-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 font-playfair mb-2">
                  {currentTexts.title}
                </h3>
                <div className="w-16 h-0.5 bg-[#D4B896] mx-auto"></div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6 text-center">
                {currentTexts.message}
              </p>

              {/* Terms, Cookie Policy, and Privacy Policy links */}
              <div className="text-center mb-6 space-y-2">
                <div
                  className={`flex gap-3 justify-center items-center flex-wrap ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <button
                    className="text-[#D4B896] hover:text-[#c9a87d] text-sm underline transition-colors duration-300 font-medium"
                    onClick={handleTermsClick}
                  >
                    {currentTexts.termsAndConditions}
                  </button>
                  <span className="text-gray-400 text-sm">|</span>
                  <button
                    className="text-[#D4B896] hover:text-[#c9a87d] text-sm underline transition-colors duration-300 font-medium"
                    onClick={handleCookiePolicyClick}
                  >
                    {currentTexts.cookiePolicy}
                  </button>
                  <span className="text-gray-400 text-sm">|</span>
                  <button
                    className="text-[#D4B896] hover:text-[#c9a87d] text-sm underline transition-colors duration-300 font-medium"
                    onClick={handlePrivacyPolicyClick}
                  >
                    {currentTexts.privacyPolicy}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'} flex-col sm:flex-row`}
            >
              <button
                onClick={handleAccept}
                className="
                  flex-1 bg-[#D4B896] hover:bg-[#c9a87d] text-black px-6 py-3 rounded-sm
                  transition-all duration-300 font-medium text-sm hover:shadow-lg
                  transform hover:scale-105 active:scale-95 btn-elegant
                "
              >
                {currentTexts.accept}
              </button>
              <button
                onClick={handleDecline}
                className="
                  flex-1 bg-transparent border-2 border-gray-300 hover:border-[#D4B896] 
                  text-gray-700 hover:text-[#D4B896] px-6 py-3 rounded-sm
                  transition-all duration-300 font-medium text-sm hover:shadow-md
                  transform hover:scale-105 active:scale-95
                "
              >
                {currentTexts.decline}
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Warning icon */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">⚠️</span>
              </div>
            </div>

            <div className="pt-4 mb-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 font-playfair mb-2">
                  {currentTexts.title}
                </h3>
                <div className="w-16 h-0.5 bg-orange-500 mx-auto"></div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <p className="text-orange-800 text-sm leading-relaxed text-center font-medium">
                  {currentTexts.declineWarning}
                </p>
              </div>
            </div>

            <div
              className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'} flex-col sm:flex-row`}
            >
              <button
                onClick={handleBackToConsent}
                className="
                  flex-1 bg-[#D4B896] hover:bg-[#c9a87d] text-black px-6 py-3 rounded-sm
                  transition-all duration-300 font-medium text-sm hover:shadow-lg
                  transform hover:scale-105 active:scale-95 btn-elegant
                "
              >
                {currentLanguage === 'ro' ? 'Înapoi' : currentLanguage === 'en' ? 'Back' : 'חזור'}
              </button>
              <button
                onClick={handleDeclineConfirm}
                className="
                  flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-sm
                  transition-all duration-300 font-medium text-sm hover:shadow-lg
                  transform hover:scale-105 active:scale-95
                "
              >
                {currentLanguage === 'ro'
                  ? 'Confirm Refuz'
                  : currentLanguage === 'en'
                    ? 'Confirm Decline'
                    : 'אשר דחייה'}
              </button>
            </div>
          </>
        )}

        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#D4B896]/30 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#D4B896]/30 rounded-full"></div>
      </div>
    </div>
  )
}
