'use client'

import type React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface NearbyPlace {
  nameRo: string
  nameEn: string
  nameHe: string
  distance: string
}

interface LocationSectionProps {
  address: string
  decorativeTextRo: string
  decorativeTextEn: string
  decorativeTextHe: string
  headingRo: string
  headingEn: string
  headingHe: string
  descriptionRo: string
  descriptionEn: string
  descriptionHe: string
  nearbyPlaces: NearbyPlace[]
  ctaButton: {
    textRo: string
    textEn: string
    textHe: string
    link: string
  }
}

const LocationSection: React.FC<LocationSectionProps> = ({
  address,
  decorativeTextRo,
  decorativeTextEn,
  decorativeTextHe,
  headingRo,
  headingEn,
  headingHe,
  descriptionRo,
  descriptionEn,
  descriptionHe,
  nearbyPlaces,
  ctaButton,
}) => {
  const { t, currentLanguage } = useLanguage()

  const decorativeText = t({
    ro: decorativeTextRo,
    en: decorativeTextEn,
    he: decorativeTextHe,
  })

  const heading = t({
    ro: headingRo,
    en: headingEn,
    he: headingHe,
  })

  const description = t({
    ro: descriptionRo,
    en: descriptionEn,
    he: descriptionHe,
  })

  const ctaText = t({
    ro: ctaButton.textRo,
    en: ctaButton.textEn,
    he: ctaButton.textHe,
  })

  // Create Google Maps embed URL for the address
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.39000437285!2d26.09556707671471!3d44.54812109409198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b21d003ea00761%3A0x8eb6ff58e92d97a3!2sBriza4Seasons!5e0!3m2!1sen!2sro!4v1754898476179!5m2!1sen!2sro`

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing location: ${address}`}
                className="w-full h-full"
              />

              {/* Address overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                <p className="text-sm font-medium text-gray-800">{address}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`order-1 lg:order-2 ${currentLanguage === 'he' ? 'text-right' : 'text-left'}`}
          >
            {/* Decorative Text */}
            <p className="font-script text-2xl lg:text-3xl text-[#D4B896] mb-4">{decorativeText}</p>

            {/* Main Heading */}
            <h2 className="hero-heading text-3xl lg:text-4xl xl:text-5xl text-black mb-8 text-balance">
              {heading}
            </h2>

            {/* Description */}
            <div className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8 space-y-4">
              {description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Nearby Places List */}
            <div className="mb-10">
              <ul className="space-y-3">
                {nearbyPlaces.map((place, index) => {
                  const placeName = t({
                    ro: place.nameRo,
                    en: place.nameEn,
                    he: place.nameHe,
                  })

                  return (
                    <li
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-800 font-medium">{placeName}</span>
                      <span className="text-[#D4B896] font-semibold">{place.distance}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              href={ctaButton.link}
              className="inline-block bg-[#D4B896] hover:bg-[#c9a87d] text-black px-8 py-4 rounded-sm transition-all duration-300 text-sm font-semibold tracking-wide btn-elegant"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
