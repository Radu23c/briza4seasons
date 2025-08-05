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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
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
                className={`w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent transition-all duration-300 ${
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
                className={`w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent transition-all duration-300 ${
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
                className={`w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent transition-all duration-300 ${
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
                className={`w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:border-transparent transition-all duration-300 resize-vertical ${
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
                className="bg-[#D4B896] hover:bg-[#c9a87d] text-white px-8 py-4 rounded-sm transition-all duration-300 text-sm font-semibold tracking-wider uppercase btn-elegant transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:ring-offset-2"
              >
                {submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
