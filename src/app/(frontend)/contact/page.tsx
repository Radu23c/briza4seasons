'use client'

import { Suspense, useState } from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'

// Translations object
const translations = {
  ro: {
    // Hero Section
    contactUs: 'Contactează-ne',
    heroSubtitle: 'SUNTEM AICI PENTRU TINE',

    // Contact Cards
    address: 'Adresa',
    phone: 'Telefon',
    email: 'Email',

    // Form Section
    sendMessage: 'Trimiteți-ne un mesaj!',
    formDescription:
      'Orice întrebare ați avea, suntem siguri că avem un răspuns sau o soluție pentru dumneavoastră.',

    // Form Fields
    name: 'NUME',
    emailField: 'EMAIL',
    phoneField: 'TELEFON',
    message: 'MESAJ',
    send: 'TRIMITEȚI',
    sending: 'TRIMITERE...',

    // Status Messages
    successMessage: 'Mesajul a fost trimis cu succes! Vă vom contacta în curând.',
    errorMessage: 'A apărut o eroare. Vă rugăm să încercați din nou.',
    connectionError: 'A apărut o eroare de conexiune. Vă rugăm să încercați din nou.',

    // Representative Section
    talkToRep: 'Discutați cu un reprezentant',
    showLargerMap: 'Afișați harta mărită',

    // Address
    fullAddress: 'Intrarea Mesteacănului, Otopeni',
    cityRegion: 'București / Ilfov',
    postalCode: '075100',
  },

  en: {
    // Hero Section
    contactUs: 'Contact Us',
    heroSubtitle: 'WE ARE HERE FOR YOU',

    // Contact Cards
    address: 'Address',
    phone: 'Phone',
    email: 'Email',

    // Form Section
    sendMessage: 'Send us a message!',
    formDescription:
      'Whatever question you have, we are sure we have an answer or solution for you.',

    // Form Fields
    name: 'NAME',
    emailField: 'EMAIL',
    phoneField: 'PHONE',
    message: 'MESSAGE',
    send: 'SEND',
    sending: 'SENDING...',

    // Status Messages
    successMessage: 'Message sent successfully! We will contact you soon.',
    errorMessage: 'An error occurred. Please try again.',
    connectionError: 'A connection error occurred. Please try again.',

    // Representative Section
    talkToRep: 'Talk to a representative',
    showLargerMap: 'Show larger map',

    // Address
    fullAddress: 'Intrarea Mesteacănului, Otopeni',
    cityRegion: 'Bucharest / Ilfov',
    postalCode: '075100',
  },

  he: {
    // Hero Section
    contactUs: 'צור קשר',
    heroSubtitle: 'אנחנו כאן בשבילך',

    // Contact Cards
    address: 'כתובת',
    phone: 'טלפון',
    email: 'אימייל',

    // Form Section
    sendMessage: 'שלח לנו הודעה!',
    formDescription: 'איזו שאלה שיש לך, אנחנו בטוחים שיש לנו תשובה או פתרון עבורך.',

    // Form Fields
    name: 'שם',
    emailField: 'אימייל',
    phoneField: 'טלפון',
    message: 'הודעה',
    send: 'שלח',
    sending: 'שולח...',

    // Status Messages
    successMessage: 'ההודעה נשלחה בהצלחה! ניצור איתך קשר בקרוב.',
    errorMessage: 'אירעה שגיאה. אנא נסה שוב.',
    connectionError: 'אירעה שגיאת חיבור. אנא נסה שוב.',

    // Representative Section
    talkToRep: 'דבר עם נציג',
    showLargerMap: 'הצג מפה מוגדלת',

    // Address
    fullAddress: '23 אוגוסט, אוטופיני',
    cityRegion: 'בוקרשט / איילפוב',
    postalCode: '075100',
  },
}

// Loading skeleton for Contact page
function ContactPageSkeleton() {
  return (
    <div>
      {/* Hero Skeleton */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-200 animate-pulse">
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <div className="h-16 bg-gray-300 rounded mb-4 max-w-4xl mx-auto"></div>
            <div className="h-8 bg-gray-300 rounded max-w-md mx-auto mb-16"></div>
          </div>

          {/* Contact Cards Skeleton */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/90 rounded-full px-8 py-12 text-center animate-pulse"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mx-auto max-w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Contact Form Component
function ContactForm() {
  const { currentLanguage } = useLanguage()
  const t = translations[currentLanguage]
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
          message: t.successMessage,
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
          message: result.error || t.errorMessage,
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t.connectionError,
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
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {t.sendMessage}
                </h2>
                <p className="text-gray-600 text-lg">{t.formDescription}</p>
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
                    placeholder={t.name}
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
                    placeholder={t.emailField}
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
                    placeholder={t.phoneField}
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
                    placeholder={t.message}
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
                        {t.sending}
                      </>
                    ) : (
                      t.send
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Representative Section */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.talkToRep}</h3>

              {/* Map Section */}
              <div className="mb-8">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{t.fullAddress}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {t.fullAddress}
                    <br />
                    {t.cityRegion}
                    <br />
                    {t.postalCode}
                  </p>
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors duration-200">
                    {t.showLargerMap}
                  </button>
                </div>

                {/* Embedded Map - Updated for Otopeni location */}
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.123456789!2d26.056789!3d44.553456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201a0a0a0a0a0%3A0x1234567890abcdef!2s23%20August%2C%20Otopeni%2C%20Ilfov%2C%20Romania!5e0!3m2!1sen!2sro!4v1642684800000!5m2!1sen!2sro"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Locația Intrarea Mesteacănului, Otopeni"
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
                    href="tel:+40729005624"
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  >
                    +40 729 005 624
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
                    href="mailto:blissimobiliare@briza4seasons.ro"
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
                  >
                    blissimobiliare@briza4seasons.ro
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

function ContactHero() {
  const { currentLanguage } = useLanguage()
  const t = translations[currentLanguage]
  const isRTL = currentLanguage === 'he'

  return (
    <section
      className={`relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundImage: "url('/images/home-hero-bg.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center text-white mb-16 pt-36">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-24 mb-4">{t.contactUs}</h1>
          <p className="text-xl md:text-2xl font-light opacity-90">{t.heroSubtitle}</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Address Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.address}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.fullAddress}
              <br />
              {t.cityRegion}
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
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
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.phone}</h3>
            <a
              href="tel:+40729005624"
              className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
            >
              +40 729 005 624
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 pt-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.email}</h3>
            <a
              href="mailto:blissimobiliare@briza4seasons.ro"
              className="text-gray-600 hover:text-amber-600 transition-colors duration-200 break-all text-sm sm:text-base inline-block"
            >
              blissimobiliare@briza4seasons.ro
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

async function ContactPageContent() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      {/* Additional contact sections can be added here */}
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactPageSkeleton />}>
      <ContactPageContent />
    </Suspense>
  )
}
