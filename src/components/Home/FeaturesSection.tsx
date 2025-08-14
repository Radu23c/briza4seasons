'use client'

import type React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface MediaObject {
  url: string
  alt?: string
  width?: number
  height?: number
}

interface FeaturesSectionProps {
  projectNameRo: string
  projectNameEn: string
  projectNameHe: string
  villaCount: number
  villaCountTextRo: string
  villaCountTextEn: string
  villaCountTextHe: string
  mainHeadingRo: string
  mainHeadingEn: string
  mainHeadingHe: string
  accentTextRo: string
  accentTextEn: string
  accentTextHe: string
  subHeadingRo: string
  subHeadingEn: string
  subHeadingHe: string
  detailsTextRo: string
  detailsTextEn: string
  detailsTextHe: string
  exteriorImage: MediaObject
  interiorImage: MediaObject
  detailsLink?: string
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  projectNameRo,
  projectNameEn,
  projectNameHe,
  villaCount,
  villaCountTextRo,
  villaCountTextEn,
  villaCountTextHe,
  mainHeadingRo,
  mainHeadingEn,
  mainHeadingHe,
  accentTextRo,
  accentTextEn,
  accentTextHe,
  subHeadingRo,
  subHeadingEn,
  subHeadingHe,
  detailsTextRo,
  detailsTextEn,
  detailsTextHe,
  exteriorImage,
  interiorImage,
  detailsLink = '/about-us',
}) => {
  const { t, currentLanguage } = useLanguage()

  // Early return if required images are missing
  if (!exteriorImage?.url || !interiorImage?.url) {
    console.warn('FeaturesSection: Missing required images')
    return null
  }

  const projectName = t({
    ro: projectNameRo || '',
    en: projectNameEn || '',
    he: projectNameHe || '',
  })

  const villaCountText = t({
    ro: villaCountTextRo || '',
    en: villaCountTextEn || '',
    he: villaCountTextHe || '',
  })

  const mainHeading = t({
    ro: mainHeadingRo || '',
    en: mainHeadingEn || '',
    he: mainHeadingHe || '',
  })

  const accentText = t({
    ro: accentTextRo || '',
    en: accentTextEn || '',
    he: accentTextHe || '',
  })

  const subHeading = t({
    ro: subHeadingRo || '',
    en: subHeadingEn || '',
    he: subHeadingHe || '',
  })

  const detailsText = t({
    ro: detailsTextRo || '',
    en: detailsTextEn || '',
    he: detailsTextHe || '',
  })

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            currentLanguage === 'he' ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* Left Side - Images */}
          <div className={`relative ${currentLanguage === 'he' ? 'lg:order-2' : ''}`}>
            {/* Main exterior image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={exteriorImage.url || '/placeholder.svg'}
                alt={exteriorImage.alt || 'Exterior view'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Villa count overlay */}
            <div
              className={`absolute top-8 ${
                currentLanguage === 'he' ? 'left-8' : 'right-8'
              } bg-white rounded-lg shadow-lg p-6 text-center min-w-[120px]`}
            >
              <div className="text-5xl lg:text-6xl font-bold text-[#D4B896] mb-2">
                {villaCount || 0}
              </div>
              <div className="text-sm text-gray-600 leading-tight">
                <span className="block">{villaCountText}</span>
                <span className="font-elegant text-[#D4B896] italic">{projectName}</span>
              </div>
            </div>

            {/* Interior image - positioned at bottom */}
            <div
              className={`absolute -bottom-8 ${
                currentLanguage === 'he' ? '-left-8' : '-right-8'
              } w-48 h-32 lg:w-64 lg:h-40 rounded-lg overflow-hidden shadow-xl`}
            >
              <Image
                src={interiorImage.url || '/placeholder.svg'}
                alt={interiorImage.alt || 'Interior view'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 200px, 256px"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`lg:pl-8 ${currentLanguage === 'he' ? 'lg:order-1 lg:pr-8 lg:pl-0 text-right' : 'text-left'}`}
          >
            {/* Project name in elegant script */}
            {projectName && (
              <div className="font-elegant text-3xl lg:text-4xl text-[#D4B896] mb-6 italic">
                {projectName}
              </div>
            )}

            {/* Main heading */}
            {mainHeading && (
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {mainHeading}
              </h2>
            )}

            {/* Accent text in elegant font */}
            {accentText && (
              <div className="font-elegant text-2xl lg:text-3xl text-[#D4B896] mb-4 italic">
                {accentText}
              </div>
            )}

            {/* Sub-heading */}
            {subHeading && (
              <h3 className="text-2xl lg:text-3xl text-[#D4B896] mb-8 font-light">{subHeading}</h3>
            )}

            {/* Details link */}
            {detailsLink && detailsText && (
              <div className="mt-12">
                {/* <Link
                  href={detailsLink}
                  className="inline-flex items-center text-gray-900 font-semibold text-sm tracking-wider hover:text-[#D4B896] transition-colors duration-300"
                >
                  {detailsText}
                  <svg
                    className={`${currentLanguage === 'he' ? 'mr-2 rotate-180' : 'ml-2'} w-4 h-4`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
