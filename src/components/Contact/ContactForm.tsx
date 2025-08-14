// src/components/Contact/ContactForm.tsx
'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface ContactFormProps {
  // Form section props
  formTitleRo: string
  formTitleEn: string
  formTitleHe: string
  formDescriptionRo: string
  formDescriptionEn: string
  formDescriptionHe: string

  // Form field placeholders
  namePlaceholderRo: string
  namePlaceholderEn: string
  namePlaceholderHe: string
  emailPlaceholderRo: string
  emailPlaceholderEn: string
  emailPlaceholderHe: string
  phonePlaceholderRo: string
  phonePlaceholderEn: string
  phonePlaceholderHe: string
  messagePlaceholderRo: string
  messagePlaceholderEn: string
  messagePlaceholderHe: string

  // Button text
  submitButtonRo: string
  submitButtonEn: string
  submitButtonHe: string
  sendingButtonRo: string
  sendingButtonEn: string
  sendingButtonHe: string

  // Status messages
  successMessageRo: string
  successMessageEn: string
  successMessageHe: string
  errorMessageRo: string
  errorMessageEn: string
  errorMessageHe: string
  connectionErrorRo: string
  connectionErrorEn: string
  connectionErrorHe: string

  // Representative section props
  representativeTitleRo: string
  representativeTitleEn: string
  representativeTitleHe: string
  showLargerMapRo: string
  showLargerMapEn: string
  showLargerMapHe: string
  mapEmbedUrl: string
  mapTitle: string

  // Contact info for representative section
  fullAddressRo: string
  fullAddressEn: string
  fullAddressHe: string
  cityRegionRo: string
  cityRegionEn: string
  cityRegionHe: string
  postalCode: string
  phoneNumber: string
  email: string
}

export default function ContactForm({
  formTitleRo,
  formTitleEn,
  formTitleHe,
  formDescriptionRo,
  formDescriptionEn,
  formDescriptionHe,
  namePlaceholderRo,
  namePlaceholderEn,
  namePlaceholderHe,
  emailPlaceholderRo,
  emailPlaceholderEn,
  emailPlaceholderHe,
  phonePlaceholderRo,
  phonePlaceholderEn,
  phonePlaceholderHe,
  messagePlaceholderRo,
  messagePlaceholderEn,
  messagePlaceholderHe,
  submitButtonRo,
  submitButtonEn,
  submitButtonHe,
  sendingButtonRo,
  sendingButtonEn,
  sendingButtonHe,
  successMessageRo,
  successMessageEn,
  successMessageHe,
  errorMessageRo,
  errorMessageEn,
  errorMessageHe,
  connectionErrorRo,
  connectionErrorEn,
  connectionErrorHe,
  representativeTitleRo,
  representativeTitleEn,
  representativeTitleHe,
  showLargerMapRo,
  showLargerMapEn,
  showLargerMapHe,
  mapEmbedUrl,
  mapTitle,
  fullAddressRo,
  fullAddressEn,
  fullAddressHe,
  cityRegionRo,
  cityRegionEn,
  cityRegionHe,
  postalCode,
  phoneNumber,
  email,
}: ContactFormProps) {
  const { currentLanguage } = useLanguage()
  const isRTL = currentLanguage === 'he'

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

  // Get translated content based on current language
  const formTitle = {
    ro: formTitleRo,
    en: formTitleEn,
    he: formTitleHe,
  }[currentLanguage]

  const formDescription = {
    ro: formDescriptionRo,
    en: formDescriptionEn,
    he: formDescriptionHe,
  }[currentLanguage]

  const namePlaceholder = {
    ro: namePlaceholderRo,
    en: namePlaceholderEn,
    he: namePlaceholderHe,
  }[currentLanguage]

  const emailPlaceholder = {
    ro: emailPlaceholderRo,
    en: emailPlaceholderEn,
    he: emailPlaceholderHe,
  }[currentLanguage]

  const phonePlaceholder = {
    ro: phonePlaceholderRo,
    en: phonePlaceholderEn,
    he: phonePlaceholderHe,
  }[currentLanguage]

  const messagePlaceholder = {
    ro: messagePlaceholderRo,
    en: messagePlaceholderEn,
    he: messagePlaceholderHe,
  }[currentLanguage]

  const submitButton = {
    ro: submitButtonRo,
    en: submitButtonEn,
    he: submitButtonHe,
  }[currentLanguage]

  const sendingButton = {
    ro: sendingButtonRo,
    en: sendingButtonEn,
    he: sendingButtonHe,
  }[currentLanguage]

  const successMessage = {
    ro: successMessageRo,
    en: successMessageEn,
    he: successMessageHe,
  }[currentLanguage]

  const errorMessage = {
    ro: errorMessageRo,
    en: errorMessageEn,
    he: errorMessageHe,
  }[currentLanguage]

  const connectionError = {
    ro: connectionErrorRo,
    en: connectionErrorEn,
    he: connectionErrorHe,
  }[currentLanguage]

  const representativeTitle = {
    ro: representativeTitleRo,
    en: representativeTitleEn,
    he: representativeTitleHe,
  }[currentLanguage]

  const showLargerMap = {
    ro: showLargerMapRo,
    en: showLargerMapEn,
    he: showLargerMapHe,
  }[currentLanguage]

  const fullAddress = {
    ro: fullAddressRo,
    en: fullAddressEn,
    he: fullAddressHe,
  }[currentLanguage]

  const cityRegion = {
    ro: cityRegionRo,
    en: cityRegionEn,
    he: cityRegionHe,
  }[currentLanguage]

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: successMessage,
        })
        // Reset form
        setFormData({
          nume: '',
          email: '',
          telefon: '',
          mesaj: '',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || errorMessage,
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: connectionError,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      className={`py-16 lg:py-24 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{formTitle}</h2>
                <p className="text-gray-600 text-lg">{formDescription}</p>
              </div>

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

                <div>
                  <input
                    type="text"
                    name="nume"
                    placeholder={namePlaceholder}
                    value={formData.nume}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-4 border-b-2 border-gray-200 bg-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 text-lg disabled:opacity-50 ${isRTL ? 'text-right' : 'text-left'}`}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={emailPlaceholder}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-4 border-b-2 border-gray-200 bg-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 text-lg disabled:opacity-50 ${isRTL ? 'text-right' : 'text-left'}`}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="telefon"
                    placeholder={phonePlaceholder}
                    value={formData.telefon}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-4 border-b-2 border-gray-200 bg-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 text-lg disabled:opacity-50 ${isRTL ? 'text-right' : 'text-left'}`}
                  />
                </div>

                <div>
                  <textarea
                    name="mesaj"
                    placeholder={messagePlaceholder}
                    value={formData.mesaj}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-4 border-b-2 border-gray-200 bg-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 text-lg resize-none disabled:opacity-50 ${isRTL ? 'text-right' : 'text-left'}`}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 disabled:cursor-not-allowed text-white px-12 py-4 rounded-lg transition-all duration-300 text-lg font-semibold tracking-wider uppercase transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center min-w-[200px]"
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
                        {sendingButton}
                      </>
                    ) : (
                      submitButton
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Representative Section */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{representativeTitle}</h3>

              {/* Map Section */}
              <div className="mb-8">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{fullAddress}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {fullAddress}
                    <br />
                    {cityRegion}
                    <br />
                    {postalCode}
                  </p>
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors duration-200">
                    {showLargerMap}
                  </button>
                </div>

                {/* Embedded Map */}
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={mapTitle}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div
                  className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
                >
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  >
                    {phoneNumber}
                  </a>
                </div>

                <div
                  className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}
                >
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
