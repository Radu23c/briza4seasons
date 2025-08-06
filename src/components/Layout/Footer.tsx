'use client'

import type React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/app/contexts/LanguageContext'

const Footer: React.FC = () => {
  const { t, currentLanguage } = useLanguage()

  const currentYear = new Date().getFullYear()

  // Footer content with multi-language support
  const footerContent = {
    cta: {
      titleRo: 'Sunteți interesat de una din proprietățile noastre?',
      titleEn: 'Are you interested in one of our properties?',
      titleHe: 'האם אתם מעוניינים באחד מהנכסים שלנו?',
      buttonRo: 'SPRE CONTACT',
      buttonEn: 'TO CONTACT',
      buttonHe: 'ליצירת קשר',
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
        ro: '23 August Otopeni, Bucuresti / Ilfov',
        en: '23 August Otopeni, Bucuresti / Ilfov',
        he: '23 אוגוסט אוטופני, בוקרשט / אילפוב',
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

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Call to Action Section - Floating Card */}
      <div className="relative z-10 flex justify-center px-4 sm:px-6 lg:px-8 -mb-20 lg:-mb-24">
        <div
          className="bg-[#D4B896] text-white rounded-2xl w-full max-w-6xl transform hover:scale-[1.02] transition-all duration-300 shadow-2xl hover:shadow-3xl"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
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
                  href="/contact"
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

      {/* Main Footer Content */}
      <div className="bg-gray-900 pt-36 lg:pt-40 pb-8">
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
                  href="#"
                  className="text-gray-400 hover:text-[#D4B896] transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4B896] transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM15.803 8.4c.24 0 .435-.195.435-.435s-.195-.435-.435-.435-.435.195-.435.435.195.435.435.435zm-3.786-.435c-2.13 0-3.865 1.735-3.865 3.865s1.735 3.865 3.865 3.865 3.865-1.735 3.865-3.865-1.735-3.865-3.865-3.865zm0 6.371c-1.384 0-2.506-1.122-2.506-2.506s1.122-2.506 2.506-2.506 2.506 1.122 2.506 2.506-1.122 2.506-2.506 2.506z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4B896] transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
                  href="/terms-conditions"
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
                  href="/cookie-policy"
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
                href="https://www.linkedin.com/in/radu-cristea-63b514222/"
                className="text-[#D4B896] hover:text-white transition-colors duration-300 font-medium"
              >
                Radu Cristea
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
