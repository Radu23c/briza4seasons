'use client'

import type React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/app/contexts/LanguageContext'

const Footer: React.FC = () => {
  const { t, currentLanguage } = useLanguage()
  const pathname = usePathname()

  const currentYear = new Date().getFullYear()

  // Check if we're on a contact page (any language variant)
  const isContactPage = (() => {
    // Remove leading slash and decode for Hebrew characters
    const cleanPath = pathname.startsWith('/') ? pathname.substring(1) : pathname
    const decodedPath = decodeURIComponent(cleanPath)

    // Contact page routes for each language
    const contactRoutes = [
      'ro/contact',
      'en/contact',
      'he/contact',
      'he/צור-קשר',
      // Also check without locale prefix
      'contact',
      'צור-קשר',
    ]

    // Check if current path matches any contact route
    return contactRoutes.some(
      (route) =>
        cleanPath === route ||
        decodedPath === route ||
        cleanPath.endsWith(`/${route}`) ||
        decodedPath.endsWith(`/${route}`),
    )
  })()

  // Footer content with multi-language support
  const footerContent = {
    cta: {
      titleRo: 'Sunteți interesat de una din proprietățile noastre?',
      titleEn: 'Are you interested in one of our properties?',
      titleHe: 'האם אתם מעוניינים באחד מהנכסים שלנו?',
      buttonRo: 'VREAU INFORMAȚII',
      buttonEn: 'I WANT INFORMATION',
      buttonHe: 'אני רוצה מידע',
    },
    contact: {
      titleRo: 'Contact',
      titleEn: 'Contact',
      titleHe: 'צור קשר',
      addressLabel: {
        ro: 'Adresa:',
        en: 'Address:',
        he: 'כתובת:',
      },
      address: {
        ro: 'Intrarea Mesteacănului, Otopeni, București / Ilfov',
        en: 'Intrarea Mesteacănului, Otopeni, București / Ilfov',
        he: 'אינטרה מסטאקן, אוטופני, בוקרשט / אילפוב',
      },
      phoneLabel: {
        ro: 'Contact telefonic:',
        en: 'Phone contact:',
        he: 'יצירת קשר טלפונית:',
      },
      phone: '+40 729 005 624',
      emailLabel: {
        ro: 'Email:',
        en: 'Email:',
        he: 'אימייל:',
      },
      email: 'blissimobiliare@briza4seasons.ro',
    },
    legal: {
      terms: {
        ro: 'Termeni și condiții',
        en: 'Terms and conditions',
        he: 'תנאים והגבלות',
      },
      cookies: {
        ro: 'Politica cookies',
        en: 'Cookie policy',
        he: 'מדיניות עוגיות',
      },
    },
    copyright: {
      ro: 'Toate drepturile rezervate. Website dezvoltat de',
      en: 'All rights reserved. Website developed by',
      he: 'כל הזכויות שמורות. האתר פותח על ידי',
    },
  }

  // Helper function to get the correct contact URL based on current language
  const getContactUrl = () => {
    switch (currentLanguage) {
      case 'he':
        return '/he/צור-קשר'
      case 'en':
        return '/en/contact'
      case 'ro':
      default:
        return '/ro/contact'
    }
  }

  // Helper function to get localized Terms & Conditions URL
  const getTermsUrl = () => {
    switch (currentLanguage) {
      case 'he':
        return '/he/תנאים-והגבלות'
      case 'en':
        return '/en/terms-and-conditions'
      case 'ro':
      default:
        return '/ro/termeni-si-conditii'
    }
  }

  // Helper function to get localized Cookie Policy URL
  const getCookiePolicyUrl = () => {
    switch (currentLanguage) {
      case 'he':
        return '/he/מדיניות-עוגיות'
      case 'en':
        return '/en/cookie-policy'
      case 'ro':
      default:
        return '/ro/politica-cookie'
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Call to Action Section - Floating Card - Hidden on contact pages */}
      {!isContactPage && (
        <div className="relative z-10 flex justify-center px-4 sm:px-6 lg:px-8 -mb-20 lg:-mb-24">
          <div
            className="bg-[#D4B896] text-white rounded-2xl w-full max-w-6xl transform hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-3xl mt-8"
            style={{
              boxShadow:
                '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              background: 'linear-gradient(135deg, #D4B896 0%, #C5A882 100%)',
            }}
          >
            <div className="px-6 sm:px-8 lg:px-12 py-10 lg:py-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className={`flex-1 ${currentLanguage === 'he' ? 'text-right' : 'text-left'}`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-white drop-shadow-sm">
                    {t({
                      ro: footerContent.cta.titleRo,
                      en: footerContent.cta.titleEn,
                      he: footerContent.cta.titleHe,
                    })}
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href={getContactUrl()}
                    className="inline-block bg-gray-900 text-white px-8 lg:px-10 py-4 lg:py-5 text-sm font-semibold tracking-wider uppercase hover:bg-gray-800 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {t({
                      ro: footerContent.cta.buttonRo,
                      en: footerContent.cta.buttonEn,
                      he: footerContent.cta.buttonHe,
                    })}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Content - Adjust padding based on whether CTA is shown */}
      <div className={`bg-gray-900 pb-8 ${isContactPage ? 'pt-16' : 'pt-36 lg:pt-40'}`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Logo/Brand Section */}
            <div
              className={`${currentLanguage === 'he' ? 'text-right lg:order-3' : 'text-left lg:order-1'}`}
            >
              <div className="mb-8">
                <h3
                  className="text-4xl font-light text-[#D4B896] mb-4"
                  style={{ fontFamily: 'serif' }}
                >
                  Briza4Seasons
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {currentLanguage === 'ro' && 'Proprietăți premium în inima Otopeni'}
                  {currentLanguage === 'en' && 'Premium properties in the heart of Otopeni'}
                  {currentLanguage === 'he' && 'נכסים פרמיום בלב אוטופני'}
                </p>
              </div>

              {/* Social Media Icons */}
              <div
                className={`flex gap-6 ${currentLanguage === 'he' ? 'justify-end' : 'justify-start'}`}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61578197220078"
                  className="text-gray-400 hover:text-[#D4B896] transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/briza4seasons/"
                  className="text-gray-400 hover:text-[#D4B896] transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Empty spacer for better layout */}
            <div className="hidden lg:block lg:order-2"></div>

            {/* Contact Information */}
            <div
              className={`${currentLanguage === 'he' ? 'text-right lg:order-1' : 'text-left lg:order-3'}`}
            >
              <h3
                className="text-3xl font-light text-[#D4B896] mb-8 italic"
                style={{ fontFamily: 'serif' }}
              >
                {t({
                  ro: footerContent.contact.titleRo,
                  en: footerContent.contact.titleEn,
                  he: footerContent.contact.titleHe,
                })}
              </h3>

              <div className="space-y-8">
                {/* Address */}
                <div className="group">
                  <p
                    className="text-[#D4B896] text-lg font-light italic mb-3 group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'serif' }}
                  >
                    {t({
                      ro: footerContent.contact.addressLabel.ro,
                      en: footerContent.contact.addressLabel.en,
                      he: footerContent.contact.addressLabel.he,
                    })}
                  </p>
                  <p className="text-white text-lg leading-relaxed">
                    {t({
                      ro: footerContent.contact.address.ro,
                      en: footerContent.contact.address.en,
                      he: footerContent.contact.address.he,
                    })}
                  </p>
                </div>

                {/* Phone */}
                <div className="group">
                  <p
                    className="text-[#D4B896] text-lg font-light italic mb-3 group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'serif' }}
                  >
                    {t({
                      ro: footerContent.contact.phoneLabel.ro,
                      en: footerContent.contact.phoneLabel.en,
                      he: footerContent.contact.phoneLabel.he,
                    })}
                  </p>
                  <p className="text-white text-lg">
                    <a
                      href={`tel:${footerContent.contact.phone}`}
                      className="hover:text-[#D4B896] transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                      {footerContent.contact.phone}
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div className="group">
                  <p
                    className="text-[#D4B896] text-lg font-light italic mb-3 group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'serif' }}
                  >
                    {t({
                      ro: footerContent.contact.emailLabel.ro,
                      en: footerContent.contact.emailLabel.en,
                      he: footerContent.contact.emailLabel.he,
                    })}
                  </p>
                  <p className="text-white text-lg">
                    <a
                      href={`mailto:${footerContent.contact.email}`}
                      className="hover:text-[#D4B896] transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                      {footerContent.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links - Redesigned */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div
              className={`flex flex-col sm:flex-row justify-center items-center gap-6 ${currentLanguage === 'he' ? 'sm:flex-row-reverse' : ''}`}
            >
              <div className={`flex gap-6 ${currentLanguage === 'he' ? 'flex-row-reverse' : ''}`}>
                <Link
                  href={getTermsUrl()}
                  className="text-[#D4B896] hover:text-white transition-all duration-300 text-sm font-medium uppercase tracking-wider border-b border-transparent hover:border-[#D4B896] pb-1"
                >
                  {t({
                    ro: footerContent.legal.terms.ro,
                    en: footerContent.legal.terms.en,
                    he: footerContent.legal.terms.he,
                  })}
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href={getCookiePolicyUrl()}
                  className="text-[#D4B896] hover:text-white transition-all duration-300 text-sm font-medium uppercase tracking-wider border-b border-transparent hover:border-[#D4B896] pb-1"
                >
                  {t({
                    ro: footerContent.legal.cookies.ro,
                    en: footerContent.legal.cookies.en,
                    he: footerContent.legal.cookies.he,
                  })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Refined */}
      <div className="bg-gray-800 border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className={`text-center ${currentLanguage === 'he' ? 'text-right' : 'text-left'}`}>
            <p className="text-gray-400 text-sm leading-relaxed">
              ©Briza4Seasons {currentYear}.{' '}
              {t({
                ro: footerContent.copyright.ro,
                en: footerContent.copyright.en,
                he: footerContent.copyright.he,
              })}{' '}
              <a
                href="https://www.blissconsulting.ro/"
                className="text-[#D4B896] hover:text-white transition-colors duration-300 font-medium"
              >
                BLISS Consulting
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
