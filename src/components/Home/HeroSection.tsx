'use client'
import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface MediaObject {
  url: string
  alt?: string
  width?: number
  height?: number
}

interface HeroSectionProps {
  mainHeadingRo: string
  mainHeadingEn: string
  mainHeadingHe: string
  ctaButton: {
    textRo: string
    textEn: string
    textHe: string
    link: string
  }
  projectNameRo: string
  projectNameEn: string
  projectNameHe: string
  projectSubtitleRo: string
  projectSubtitleEn: string
  projectSubtitleHe: string
  backgroundImage?: MediaObject
}

// Contact Form Popup Component
const ContactPopup: React.FC<{
  isOpen: boolean
  onClose: () => void
  currentLanguage: string
}> = ({ isOpen, onClose, currentLanguage }) => {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    mesaj: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      console.log('=== Contact Popup Form Submission Started ===')
      console.log('Form data:', formData)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log('API Response:', result)

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: translations[currentLanguage as keyof typeof translations].successMessage,
        })
        // Reset form
        setFormData({
          nume: '',
          email: '',
          telefon: '',
          mesaj: '',
        })
        // Auto close after success message
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' })
          onClose()
        }, 3000)
      } else {
        setSubmitStatus({
          type: 'error',
          message:
            result.error || translations[currentLanguage as keyof typeof translations].errorMessage,
        })
      }
    } catch (error) {
      console.error('Contact popup form error:', error)
      setSubmitStatus({
        type: 'error',
        message: translations[currentLanguage as keyof typeof translations].connectionError,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  if (!isOpen) return null

  const translations = {
    ro: {
      title: 'Programează o vizită',
      name: 'NUME',
      email: 'EMAIL',
      phone: 'TELEFON',
      message: 'MESAJ',
      send: 'TRIMITEȚI',
      sending: 'TRIMITERE...',
      successMessage: 'Mesajul a fost trimis cu succes! Vă vom contacta în curând.',
      errorMessage: 'A apărut o eroare. Vă rugăm să încercați din nou.',
      connectionError: 'A apărut o eroare de conexiune. Vă rugăm să încercați din nou.',
      close: 'Închide',
    },
    en: {
      title: 'Schedule a visit',
      name: 'NAME',
      email: 'EMAIL',
      phone: 'PHONE',
      message: 'MESSAGE',
      send: 'SEND',
      sending: 'SENDING...',
      successMessage: 'Message sent successfully! We will contact you soon.',
      errorMessage: 'An error occurred. Please try again.',
      connectionError: 'A connection error occurred. Please try again.',
      close: 'Close',
    },
    he: {
      title: 'תזמן ביקור',
      name: 'שם',
      email: 'אימייל',
      phone: 'טלפון',
      message: 'הודעה',
      send: 'שלח',
      sending: 'שולח...',
      successMessage: 'ההודעה נשלחה בהצלחה! ניצור איתך קשר בקרוב.',
      errorMessage: 'אירעה שגיאה. אנא נסה שוב.',
      connectionError: 'אירעה שגיאת חיבור. אנא נסה שוב.',
      close: 'סגור',
    },
  }

  const t = translations[currentLanguage as keyof typeof translations] || translations.en
  const isRTL = currentLanguage === 'he'

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto ${
          isRTL ? 'text-right rtl' : 'text-left ltr'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-colors duration-200"
            disabled={isSubmitting}
          >
            ×
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Name Field */}
            <div>
              <input
                type="text"
                name="nume"
                placeholder={t.name}
                value={formData.nume}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-4 border-b-2 border-gray-200 bg-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 text-lg disabled:opacity-50 disabled:cursor-not-allowed ${isRTL ? 'text-right' : 'text-left'}`}
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder={t.email}
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-4 border-b-2 border-gray-200 bg-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 text-lg disabled:opacity-50 disabled:cursor-not-allowed ${isRTL ? 'text-right' : 'text-left'}`}
              />
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                name="telefon"
                placeholder={t.phone}
                value={formData.telefon}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-4 border-b-2 border-gray-200 bg-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 text-lg disabled:opacity-50 disabled:cursor-not-allowed ${isRTL ? 'text-right' : 'text-left'}`}
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="mesaj"
                placeholder={t.message}
                value={formData.mesaj}
                onChange={handleInputChange}
                required
                rows={4}
                disabled={isSubmitting}
                className={`w-full px-4 py-4 border-b-2 border-gray-200 bg-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 text-lg resize-none disabled:opacity-50 disabled:cursor-not-allowed ${isRTL ? 'text-right' : 'text-left'}`}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold tracking-wider transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center min-w-[180px]"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t.sending}
                  </>
                ) : (
                  t.send
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {t.close}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mainHeadingRo,
  mainHeadingEn,
  mainHeadingHe,
  ctaButton,
  projectNameRo,
  projectNameEn,
  projectNameHe,
  projectSubtitleRo,
  projectSubtitleEn,
  projectSubtitleHe,
  backgroundImage,
}) => {
  const { t, currentLanguage } = useLanguage()
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  const mainHeading = t({
    ro: mainHeadingRo,
    en: mainHeadingEn,
    he: mainHeadingHe,
  })

  const ctaText = t({
    ro: ctaButton.textRo,
    en: ctaButton.textEn,
    he: ctaButton.textHe,
  })

  const projectName = t({
    ro: projectNameRo,
    en: projectNameEn,
    he: projectNameHe,
  })

  const projectSubtitle = t({
    ro: projectSubtitleRo,
    en: projectSubtitleEn,
    he: projectSubtitleHe,
  })

  const bgImageUrl = backgroundImage?.url || '/images/home-hero-bg.png'
  const bgImageAlt = backgroundImage?.alt || 'Hero background'

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('CTA button clicked - opening contact popup')
    setIsContactPopupOpen(true)
  }

  const handleClosePopup = () => {
    console.log('Closing contact popup')
    setIsContactPopupOpen(false)
  }

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImageUrl || '/placeholder.svg'}
            alt={bgImageAlt}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content Container */}
        <div
          className={`relative z-10 container mx-auto px-4 text-center text-white ${
            currentLanguage === 'he' ? 'text-right' : 'text-left'
          } md:text-center`}
        >
          {/* Main Heading */}
          <h1 className="hero-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 max-w-4xl mx-auto text-balance">
            {mainHeading}
          </h1>

          {/* CTA Button - Now opens popup */}
          <button
            onClick={handleCtaClick}
            className="hero-cta inline-block bg-[#D4B896] hover:bg-[#c9a87d] text-black px-8 py-4 rounded-sm transition-all duration-300 text-sm md:text-base mb-16 btn-elegant cursor-pointer transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:ring-offset-2"
          >
            {ctaText}
          </button>

          {/* Project Name Banner */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#D4B896]/90 backdrop-blur-sm px-8 py-6 rounded-lg">
              <h2 className="hero-banner-title text-3xl md:text-4xl lg:text-5xl text-black mb-2 text-balance">
                {projectName}
              </h2>
              <p className="hero-banner-title text-3xl md:text-4xl lg:text-5xl text-black mb-2 text-balance">
                {projectSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 right-10 z-10 hidden md:block">
          <div className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white/10">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={handleClosePopup}
        currentLanguage={currentLanguage}
      />
    </>
  )
}

export default HeroSection
