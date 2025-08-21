'use client'

import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { RichText } from '@payloadcms/richtext-lexical/react'

interface MediaObject {
  url: string
  alt?: string
}

interface FAQItem {
  questionRo?: any // Rich text content in Romanian
  questionEn?: any // Rich text content in English
  questionHe?: any // Rich text content in Hebrew
  answerRo?: any // Rich text content in Romanian
  answerEn?: any // Rich text content in English
  answerHe?: any // Rich text content in Hebrew
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

  // Get the appropriate rich text content based on current language
  const getRichTextQuestion = (item: FAQItem) => {
    switch (currentLanguage) {
      case 'ro':
        return item.questionRo
      case 'en':
        return item.questionEn
      case 'he':
        return item.questionHe
      default:
        return item.questionEn || item.questionRo || item.questionHe
    }
  }

  const getRichTextAnswer = (item: FAQItem) => {
    switch (currentLanguage) {
      case 'ro':
        return item.answerRo
      case 'en':
        return item.answerEn
      case 'he':
        return item.answerHe
      default:
        return item.answerEn || item.answerRo || item.answerHe
    }
  }

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
                const questionContent = getRichTextQuestion(item)
                const answerContent = getRichTextAnswer(item)
                const isOpen = openItems.includes(index)

                // Skip items without question content
                if (!questionContent) return null

                return (
                  <div key={index} className="border-b border-gray-200 pb-2">
                    {/* Question */}
                    <button
                      onClick={() => toggleItem(index)}
                      className={`w-full flex items-start justify-between text-left group hover:text-[#D4B896] transition-colors duration-300 ${
                        currentLanguage === 'he' ? 'text-right' : ''
                      }`}
                    >
                      <div className="flex-1 pr-4">
                        {/* Rich Text Question */}
                        <div className="prose prose-lg max-w-none prose-gray prose-p:text-gray-900 prose-p:font-semibold prose-p:leading-tight prose-p:text-lg prose-p:lg:text-xl prose-p:m-0 prose-headings:text-gray-900 prose-strong:text-gray-900 prose-em:text-gray-700 group-hover:prose-p:text-[#D4B896] transition-colors duration-300 [&>p]:m-0">
                          <RichText data={questionContent} />
                        </div>
                      </div>

                      {/* Plus/Minus Icon */}
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1">
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
                      {answerContent && (
                        <div
                          className={`prose prose-lg max-w-none prose-gray prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:text-gray-900 prose-strong:text-gray-900 prose-em:text-gray-700 ${
                            currentLanguage === 'he' ? 'text-right' : 'text-left'
                          }`}
                        >
                          {/* Rich Text Answer */}
                          <RichText data={answerContent} />
                        </div>
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
