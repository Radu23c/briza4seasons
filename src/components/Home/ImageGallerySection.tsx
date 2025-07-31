'use client'

import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface MediaObject {
  url: string
  alt?: string
  width?: number
  height?: number
}

interface GalleryImage {
  image: MediaObject
  caption?: {
    captionRo?: string
    captionEn?: string
    captionHe?: string
  }
  order?: number
}

interface ImageGallerySectionProps {
  mainTitleRo: string
  mainTitleEn: string
  mainTitleHe: string
  subtitleRo: string
  subtitleEn: string
  subtitleHe: string
  descriptionRo: string
  descriptionEn: string
  descriptionHe: string
  images: GalleryImage[]
  enableLightbox?: boolean
}

const ImageGallerySection: React.FC<ImageGallerySectionProps> = ({
  mainTitleRo,
  mainTitleEn,
  mainTitleHe,
  subtitleRo,
  subtitleEn,
  subtitleHe,
  descriptionRo,
  descriptionEn,
  descriptionHe,
  images,
  enableLightbox = true,
}) => {
  const { t, currentLanguage } = useLanguage()
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

  // Early return if no images
  if (!images?.length) {
    console.warn('ImageGallerySection: No images provided')
    return null
  }

  const mainTitle = t({
    ro: mainTitleRo || '',
    en: mainTitleEn || '',
    he: mainTitleHe || '',
  })

  const subtitle = t({
    ro: subtitleRo || '',
    en: subtitleEn || '',
    he: subtitleHe || '',
  })

  const description = t({
    ro: descriptionRo || '',
    en: descriptionEn || '',
    he: descriptionHe || '',
  })

  // Sort images by order if provided
  const sortedImages = [...images].sort((a, b) => {
    const orderA = a.order || 999
    const orderB = b.order || 999
    return orderA - orderB
  })

  const openLightbox = (imageUrl: string, index: number) => {
    if (enableLightbox) {
      setLightboxImage(imageUrl)
      setLightboxIndex(index)
    }
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'next'
        ? (lightboxIndex + 1) % sortedImages.length
        : (lightboxIndex - 1 + sortedImages.length) % sortedImages.length

    setLightboxIndex(newIndex)
    setLightboxImage(sortedImages[newIndex].image.url)
  }

  return (
    <>
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div
            className={`text-center mb-8 ${currentLanguage === 'he' ? 'text-right' : 'text-left'} md:text-center`}
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
              {mainTitle} <span className="font-elegant text-[#D4B896] italic">{subtitle}</span>
            </h2>

            {/* Description */}
            {description && (
              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Gallery Grid - 4 columns with proper spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
            {sortedImages.map((item, index) => {
              const caption = item.caption
                ? t({
                    ro: item.caption.captionRo || '',
                    en: item.caption.captionEn || '',
                    he: item.caption.captionHe || '',
                  })
                : ''

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image.url || '/placeholder.svg'}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

                    {/* Click overlay for lightbox */}
                    {enableLightbox && (
                      <button
                        onClick={() => openLightbox(item.image.url, index)}
                        className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:ring-inset"
                        aria-label={`View gallery image ${index + 1} in lightbox`}
                      >
                        {/* Zoom icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 rounded-full p-3">
                            <svg
                              className="w-6 h-6 text-gray-900"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Caption */}
                  {caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{caption}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {enableLightbox && lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#D4B896] transition-colors duration-200 z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation buttons */}
          {sortedImages.length > 1 && (
            <>
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#D4B896] transition-colors duration-200 z-10"
                aria-label="Previous image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#D4B896] transition-colors duration-200 z-10"
                aria-label="Next image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <Image
              src={lightboxImage || '/placeholder.svg'}
              alt={`Gallery image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Image counter */}
          {sortedImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {lightboxIndex + 1} / {sortedImages.length}
            </div>
          )}

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          />
        </div>
      )}
    </>
  )
}

export default ImageGallerySection
