'use client'
import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface MediaObject {
  url: string
  alt?: string
}

interface ContactSectionProps {
  formTitleRo: string
  formTitleEn: string
  formTitleHe: string
  nameFieldRo: string
  nameFieldEn: string
  nameFieldHe: string
  emailFieldRo: string
  emailFieldEn: string
  emailFieldHe: string
  phoneFieldRo: string
  phoneFieldEn: string
  phoneFieldHe: string
  messageFieldRo: string
  messageFieldEn: string
  messageFieldHe: string
  submitButtonRo: string
  submitButtonEn: string
  submitButtonHe: string
  backgroundImage: MediaObject
}

const ContactSection: React.FC<ContactSectionProps> = ({
  formTitleRo,
  formTitleEn,
  formTitleHe,
  nameFieldRo,
  nameFieldEn,
  nameFieldHe,
  emailFieldRo,
  emailFieldEn,
  emailFieldHe,
  phoneFieldRo,
  phoneFieldEn,
  phoneFieldHe,
  messageFieldRo,
  messageFieldEn,
  messageFieldHe,
  submitButtonRo,
  submitButtonEn,
  submitButtonHe,
  backgroundImage,
}) => {
  const { t, currentLanguage } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // Add loading and status states
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  // Early return if required data is missing
  if (!backgroundImage?.url) {
    console.warn('ContactSection: Missing required background image')
    return null
  }

  const formTitle = t({
    ro: formTitleRo || '',
    en: formTitleEn || '',
    he: formTitleHe || '',
  })

  const nameField = t({
    ro: nameFieldRo || '',
    en: nameFieldEn || '',
    he: nameFieldHe || '',
  })

  const emailField = t({
    ro: emailFieldRo || '',
    en: emailFieldEn || '',
    he: emailFieldHe || '',
  })

  const phoneField = t({
    ro: phoneFieldRo || '',
    en: phoneFieldEn || '',
    he: phoneFieldHe || '',
  })

  const messageField = t({
    ro: messageFieldRo || '',
    en: messageFieldEn || '',
    he: messageFieldHe || '',
  })

  const submitButton = t({
    ro: submitButtonRo || '',
    en: submitButtonEn || '',
    he: submitButtonHe || '',
  })

  // Status messages in multiple languages
  const statusMessages = {
    success: t({
      ro: 'Mesajul a fost trimis cu succes! Vă vom contacta în curând.',
      en: 'Message sent successfully! We will contact you soon.',
      he: 'ההודעה נשלחה בהצלחה! ניצור איתך קשר בקרוב.',
    }),
    error: t({
      ro: 'A apărut o eroare. Vă rugăm să încercați din nou.',
      en: 'An error occurred. Please try again.',
      he: 'אירעה שגיאה. אנא נסה שוב.',
    }),
    connectionError: t({
      ro: 'A apărut o eroare de conexiune. Vă rugăm să încercați din nou.',
      en: 'A connection error occurred. Please try again.',
      he: 'אירעה שגיאת חיבור. אנא נסה שוב.',
    }),
    sending: t({
      ro: 'TRIMITERE...',
      en: 'SENDING...',
      he: 'שולח...',
    }),
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Map field names to match the API expectations
      const apiData = {
        nume: formData.name,
        email: formData.email,
        telefon: formData.phone,
        mesaj: formData.message,
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: statusMessages.success,
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || statusMessages.error,
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: statusMessages.connectionError,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-hero-bg.jpg"
          alt={backgroundImage.alt || 'Modern bedroom interior'}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for better form visibility */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Form Container */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen py-16">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 lg:p-12 w-full max-w-2xl">
          {/* Form Title */}
          {formTitle && (
            <h2
              className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-8 text-center ${
                currentLanguage === 'he' ? 'text-right' : 'text-left'
              } md:text-center`}
            >
              {formTitle}
            </h2>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                } ${currentLanguage === 'he' ? 'text-right' : 'text-left'}`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium text-gray-700 mb-2 tracking-wider ${
                  currentLanguage === 'he' ? 'text-right' : 'text-left'
                }`}
              >
                {nameField}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentLanguage === 'he' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium text-gray-700 mb-2 tracking-wider ${
                  currentLanguage === 'he' ? 'text-right' : 'text-left'
                }`}
              >
                {emailField}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentLanguage === 'he' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className={`block text-sm font-medium text-gray-700 mb-2 tracking-wider ${
                  currentLanguage === 'he' ? 'text-right' : 'text-left'
                }`}
              >
                {phoneField}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentLanguage === 'he' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium text-gray-700 mb-2 tracking-wider ${
                  currentLanguage === 'he' ? 'text-right' : 'text-left'
                }`}
              >
                {messageField}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent transition-all duration-300 resize-vertical disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentLanguage === 'he' ? 'text-right' : 'text-left'
                }`}
                dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Submit Button */}
            <div
              className={`${currentLanguage === 'he' ? 'text-right' : 'text-left'} md:text-center`}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D4B896] hover:bg-[#c9a87d] disabled:bg-[#D4B896]/50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-sm transition-all duration-300 text-sm font-semibold tracking-wider uppercase btn-elegant transform hover:scale-105 disabled:transform-none focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:ring-offset-2 flex items-center justify-center min-w-[200px] mx-auto"
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
                    {statusMessages.sending}
                  </>
                ) : (
                  submitButton
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
