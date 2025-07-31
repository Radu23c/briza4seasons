'use client'

import type React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface MediaObject {
  url: string
  alt?: string
}

interface Benefit {
  benefitRo: string
  benefitEn: string
  benefitHe: string
}

interface BenefitsSectionProps {
  sectionTitleRo: string
  sectionTitleEn: string
  sectionTitleHe: string
  benefits: Benefit[]
  mainImage: MediaObject
  backgroundColor?: string
  textColor?: string
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  sectionTitleRo,
  sectionTitleEn,
  sectionTitleHe,
  benefits,
  mainImage,
  backgroundColor = '#D4B896',
  textColor = '#FFFFFF',
}) => {
  const { t, currentLanguage } = useLanguage()

  // Early return if required data is missing
  if (!mainImage?.url || !benefits?.length) {
    console.warn('BenefitsSection: Missing required data')
    return null
  }

  const sectionTitle = t({
    ro: sectionTitleRo || '',
    en: sectionTitleEn || '',
    he: sectionTitleHe || '',
  })

  return (
    <section className="relative min-h-screen flex">
      {/* Left Side - Image */}
      <div className={`w-full lg:w-1/2 relative `}>
        <Image
          src={mainImage.url || '/placeholder.svg'}
          alt={mainImage.alt || 'Modern residential architecture'}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Right Side - Benefits */}
      <div
        className={`w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 ${
          currentLanguage === 'he' ? 'lg:order-1' : ''
        }`}
        style={{ backgroundColor }}
      >
        <div className={`max-w-lg w-full ${currentLanguage === 'he' ? 'text-right' : 'text-left'}`}>
          {/* Section Title */}
          {sectionTitle && (
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div
                  className={`h-px flex-1 ${currentLanguage === 'he' ? 'ml-4' : 'mr-4'}`}
                  style={{ backgroundColor: textColor }}
                ></div>
                <h2
                  className="text-sm font-light tracking-[0.2em] uppercase"
                  style={{ color: textColor }}
                >
                  {sectionTitle}
                </h2>
              </div>
            </div>
          )}

          {/* Benefits List */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => {
              const benefitText = t({
                ro: benefit.benefitRo || '',
                en: benefit.benefitEn || '',
                he: benefit.benefitHe || '',
              })

              if (!benefitText) return null

              return (
                <div key={index} className="flex items-center group">
                  {/* Bullet Point */}
                  <div
                    className={`w-2 h-2 rounded-full ${currentLanguage === 'he' ? 'ml-6' : 'mr-6'} transition-all duration-300 group-hover:scale-150`}
                    style={{ backgroundColor: textColor }}
                  ></div>

                  {/* Benefit Text */}
                  <h3
                    className="text-xl lg:text-2xl font-bold tracking-wider uppercase transition-all duration-300 group-hover:translate-x-2"
                    style={{ color: textColor }}
                  >
                    {benefitText}
                  </h3>
                </div>
              )
            })}
          </div>

          {/* Decorative Element */}
          <div className={`mt-16 ${currentLanguage === 'he' ? 'text-right' : 'text-left'}`}>
            <div className="w-16 h-px" style={{ backgroundColor: textColor, opacity: 0.5 }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
