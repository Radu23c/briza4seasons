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

  return (
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

        {/* CTA Button */}
        <Link
          href={ctaButton.link}
          className="hero-cta inline-block bg-[#D4B896] hover:bg-[#c9a87d] text-black px-8 py-4 rounded-sm transition-all duration-300 text-sm md:text-base mb-16 btn-elegant"
        >
          {ctaText}
        </Link>

        {/* Project Name Banner */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#D4B896]/90 backdrop-blur-sm px-8 py-6 rounded-lg">
            <h2 className="hero-banner-title text-3xl md:text-4xl lg:text-5xl text-black mb-2 text-balance">
              {projectName}
            </h2>
            <p className="hero-banner-subtitle text-xl md:text-2xl lg:text-3xl text-black">
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
  )
}

export default HeroSection
