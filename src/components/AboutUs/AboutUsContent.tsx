'use client'

import type React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { RichText } from '@payloadcms/richtext-lexical/react'

interface MediaObject {
  url: string
  alt?: string
}

interface AboutImage {
  image: MediaObject
  altTextRo?: string | null
  altTextEn?: string | null
  altTextHe?: string | null
  order: number
}

interface AboutUsContentProps {
  sectionTitleRo: string
  sectionTitleEn: string
  sectionTitleHe: string
  mainHeadingRo: string
  mainHeadingEn: string
  mainHeadingHe: string
  contentRo?: any // Rich text content in Romanian
  contentEn?: any // Rich text content in English
  contentHe?: any // Rich text content in Hebrew
  images: AboutImage[]
}

const AboutUsContent: React.FC<AboutUsContentProps> = ({
  sectionTitleRo,
  sectionTitleEn,
  sectionTitleHe,
  mainHeadingRo,
  mainHeadingEn,
  mainHeadingHe,
  contentRo,
  contentEn,
  contentHe,
  images,
}) => {
  const { t, currentLanguage } = useLanguage()

  const sectionTitle = t({
    ro: sectionTitleRo,
    en: sectionTitleEn,
    he: sectionTitleHe,
  })

  const mainHeading = t({
    ro: mainHeadingRo,
    en: mainHeadingEn,
    he: mainHeadingHe,
  })

  // Get the appropriate rich text content based on current language
  const getRichTextContent = () => {
    switch (currentLanguage) {
      case 'ro':
        return contentRo
      case 'en':
        return contentEn
      case 'he':
        return contentHe
      default:
        return contentEn || contentRo || contentHe
    }
  }

  const richTextContent = getRichTextContent()

  // Sort images by order
  const sortedImages = [...images].sort((a, b) => a.order - b.order)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
            currentLanguage === 'he' ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Left Side - Overlapping Images */}
          <div className={`relative ${currentLanguage === 'he' ? 'lg:order-2' : ''}`}>
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {sortedImages.map((item, index) => {
                const altText = t({
                  ro: item.altTextRo || `About us image ${index + 1}`,
                  en: item.altTextEn || `About us image ${index + 1}`,
                  he: item.altTextHe || `About us image ${index + 1}`,
                })

                // Create overlapping positions at the top
                const positions = [
                  { top: '0', left: '0', width: '70%', height: '50%', zIndex: 3 },
                  { top: '10%', right: '0', width: '60%', height: '45%', zIndex: 2 },
                  { top: '25%', left: '10%', width: '50%', height: '40%', zIndex: 1 },
                  { top: '5%', left: '50%', width: '35%', height: '30%', zIndex: 4 },
                ]

                const position = positions[index] || positions[0]

                return (
                  <div
                    key={index}
                    className="absolute rounded-lg overflow-hidden shadow-xl"
                    style={{
                      top: position.top,
                      left: position.left,
                      right: position.right,
                      width: position.width,
                      height: position.height,
                      zIndex: position.zIndex,
                    }}
                  >
                    <Image
                      src={item.image.url || '/placeholder.svg'}
                      alt={altText}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`lg:pl-8 ${currentLanguage === 'he' ? 'lg:order-1 lg:pr-8 lg:pl-0 text-right' : 'text-left'}`}
          >
            {/* Section Title */}
            <div className="font-elegant text-2xl lg:text-3xl text-[#D4B896] mb-6 italic">
              {sectionTitle}
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {mainHeading}
            </h2>

            {/* Rich Text Content */}
            <div className="prose prose-lg max-w-none prose-gray prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-lg prose-headings:text-gray-900 prose-strong:text-gray-900 prose-em:text-gray-700">
              {richTextContent && <RichText data={richTextContent} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsContent