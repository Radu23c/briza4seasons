'use client'

import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface MediaObject {
  url: string
  alt?: string
}

interface FAQItem {
  questionRo: string
  questionEn: string
  questionHe: string
  answerRo: string
  answerEn: string
  answerHe: string
}

interface FAQSectionProps {
  sectionTitleRo: string
  sectionTitleEn: string
  sectionTitleHe: string
  mainHeadingRo: string
  mainHeadingEn: string
  mainHeadingHe: string
  faqItems: FAQItem[]
  backgroundImage: MediaObject
}

const FAQSection: React.FC<FAQSectionProps> = ({
  sectionTitleRo,
  sectionTitleEn,
  sectionTitleHe,
  mainHeadingRo,
  mainHeadingEn,
  mainHeadingHe,
  faqItems,
  backgroundImage,
}) => {
  const { t, currentLanguage } = useLanguage()
  const [openItems, setOpenItems] = useState<number[]>([])

  // Early return if required data is missing
  if (!backgroundImage?.url || !faqItems?.length) {
    console.warn('FAQSection: Missing required data')
    return null
  }

  const sectionTitle = t({
    ro: sectionTitleRo || '',
    en: sectionTitleEn || '',
    he: sectionTitleHe || '',
  })

  const mainHeading = t({
    ro: mainHeadingRo || '',
    en: mainHeadingEn || '',
    he: mainHeadingHe || '',
  })

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
            currentLanguage === 'he' ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Left Side - Image */}
          <div className={`relative ${currentLanguage === 'he' ? 'lg:order-2' : ''}`}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={backgroundImage.url || '/placeholder.svg'}
                alt={backgroundImage.alt || 'Modern interior'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div
            className={`lg:pl-8 ${currentLanguage === 'he' ? 'lg:order-1 lg:pr-8 lg:pl-0 text-right' : 'text-left'}`}
          >
            {/* Section Title */}
            {sectionTitle && (
              <div className="font-elegant text-2xl lg:text-3xl text-[#D4B896] mb-6 italic">
                {sectionTitle}
              </div>
            )}

            {/* Main Heading */}
            {mainHeading && (
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-12 leading-tight">
                {mainHeading}
              </h2>
            )}

            {/* FAQ Items */}
            <div className="space-y-6">
              {faqItems.map((item, index) => {
                const question = t({
                  ro: item.questionRo || '',
                  en: item.questionEn || '',
                  he: item.questionHe || '',
                })

                const answer = t({
                  ro: item.answerRo || '',
                  en: item.answerEn || '',
                  he: item.answerHe || '',
                })

                const isOpen = openItems.includes(index)

                if (!question) return null

                return (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    {/* Question */}
                    <button
                      onClick={() => toggleItem(index)}
                      className={`w-full flex items-center justify-between text-left group hover:text-[#D4B896] transition-colors duration-300 ${
                        currentLanguage === 'he' ? 'text-right' : ''
                      }`}
                    >
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-[#D4B896] transition-colors duration-300 flex-1 pr-4">
                        {question}
                      </h3>

                      {/* Plus/Minus Icon */}
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <div className="relative w-6 h-6">
                          {/* Horizontal line */}
                          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#D4B896] transform -translate-y-1/2 transition-all duration-300"></div>
                          {/* Vertical line */}
                          <div
                            className={`absolute left-1/2 top-0 w-0.5 h-full bg-[#D4B896] transform -translate-x-1/2 transition-all duration-300 ${
                              isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                            }`}
                          ></div>
                        </div>
                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {answer && (
                        <p
                          className={`text-gray-600 leading-relaxed ${
                            currentLanguage === 'he' ? 'text-right' : 'text-left'
                          }`}
                        >
                          {answer}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
