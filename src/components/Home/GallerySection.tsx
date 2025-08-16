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
  uploadDate?: string
  caption?: {
    captionRo?: string
    captionEn?: string
    captionHe?: string
  }
  order?: number
}

interface DateInfo {
  date: string
  titleRo?: string
  titleEn?: string
  titleHe?: string
  descriptionRo?: string
  descriptionEn?: string
  descriptionHe?: string
  order?: number
}

interface GallerySectionProps {
  sectionTitleRo: string
  sectionTitleEn: string
  sectionTitleHe: string
  sectionSubtitleRo: string
  sectionSubtitleEn: string
  sectionSubtitleHe: string
  galleryImages: GalleryImage[]
  dateInfoBoxes?: DateInfo[]
  enableLightbox?: boolean
  dateDisplayFormat?: 'full' | 'short' | 'numeric' | 'iso'
}

interface GroupedImages {
  [date: string]: GalleryImage[]
}

const GallerySection: React.FC<GallerySectionProps> = ({
  sectionTitleRo,
  sectionTitleEn,
  sectionTitleHe,
  sectionSubtitleRo,
  sectionSubtitleEn,
  sectionSubtitleHe,
  galleryImages,
  dateInfoBoxes = [],
  enableLightbox = true,
  dateDisplayFormat = 'full',
}) => {
  const { t, currentLanguage } = useLanguage()
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)
  const isRTL = currentLanguage === 'he'

  // IMPROVED: Normalize date to YYYY-MM-DD format
  const normalizeDate = (dateStr: string | undefined): string => {
    if (!dateStr) return new Date().toISOString().split('T')[0]

    try {
      // Handle various date formats and normalize to YYYY-MM-DD
      const date = new Date(dateStr)

      // Check if date is valid
      if (isNaN(date.getTime())) {
        console.warn(`Invalid date: ${dateStr}`)
        return new Date().toISOString().split('T')[0]
      }

      // Return normalized ISO date format (YYYY-MM-DD)
      return date.toISOString().split('T')[0]
    } catch (error) {
      console.warn(`Error parsing date: ${dateStr}`, error)
      return new Date().toISOString().split('T')[0]
    }
  }

  // Early return if no images
  if (!galleryImages?.length) {
    console.warn('GallerySection: No gallery images provided')
    return null
  }

  const sectionTitle = t({
    ro: sectionTitleRo || '',
    en: sectionTitleEn || '',
    he: sectionTitleHe || '',
  })

  const sectionSubtitle = t({
    ro: sectionSubtitleRo || '',
    en: sectionSubtitleEn || '',
    he: sectionSubtitleHe || '',
  })

  // IMPROVED: Group images by normalized upload date
  const groupImagesByDate = (images: GalleryImage[]): GroupedImages => {
    const grouped: GroupedImages = {}

    images.forEach((image) => {
      console.log('uploadDate: ', image.uploadDate)
      const normalizedDate = normalizeDate(image.uploadDate)
      console.log('norm: ', normalizedDate)

      if (!grouped[normalizedDate]) {
        grouped[normalizedDate] = []
      }
      grouped[normalizedDate].push(image)
    })

    // Sort images within each group by order
    Object.keys(grouped).forEach((date) => {
      grouped[date].sort((a, b) => (a.order || 999) - (b.order || 999))
    })

    return grouped
  }

  // IMPROVED: Get date info with normalized date matching
  const getDateInfo = (date: string): DateInfo | undefined => {
    console.log('dateeee:   ', date)
    const normalizedDate = normalizeDate(date)
    console.log('dateInfoBoxes:  ', dateInfoBoxes)
    // Find matching date info by normalizing both dates
    return dateInfoBoxes?.find((info) => {
      const normalizedInfoDate = normalizeDate(info.date)
      return normalizedInfoDate === normalizedDate
    })
  }

  // Format date for display
  const formatDate = (dateString: string, format: string, lang: string): string => {
    const normalizedDate = normalizeDate(dateString)
    const date = new Date(normalizedDate)

    const monthNames = {
      ro: [
        'Ianuarie',
        'Februarie',
        'Martie',
        'Aprilie',
        'Mai',
        'Iunie',
        'Iulie',
        'August',
        'Septembrie',
        'Octombrie',
        'Noiembrie',
        'Decembrie',
      ],
      en: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      he: [
        'ינואר',
        'פברואר',
        'מרץ',
        'אפריל',
        'מאי',
        'יוני',
        'יולי',
        'אוגוסט',
        'ספטמבר',
        'אוקטובר',
        'נובמבר',
        'דצמבר',
      ],
    }

    const shortMonthNames = {
      ro: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec'],
      en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      he: ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'],
    }

    switch (format) {
      case 'full':
        return `${date.getDate()} ${monthNames[lang as keyof typeof monthNames][date.getMonth()]}, ${date.getFullYear()}`
      case 'short':
        return `${date.getDate()} ${shortMonthNames[lang as keyof typeof shortMonthNames][date.getMonth()]}, ${date.getFullYear()}`
      case 'numeric':
        return date.toLocaleDateString(lang === 'ro' ? 'ro-RO' : lang === 'he' ? 'he-IL' : 'en-US')
      case 'iso':
        return normalizedDate
      default:
        return normalizedDate
    }
  }

  const groupedImages = groupImagesByDate(galleryImages)
  const sortedDates = Object.keys(groupedImages).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  )

  // Create flat array for lightbox navigation
  const flatImages = sortedDates.reduce((acc: GalleryImage[], date) => {
    return [...acc, ...groupedImages[date]]
  }, [])

  const openLightbox = (imageUrl: string, globalIndex: number) => {
    if (enableLightbox) {
      setLightboxImage(imageUrl)
      setLightboxIndex(globalIndex)
    }
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'next'
        ? (lightboxIndex + 1) % flatImages.length
        : (lightboxIndex - 1 + flatImages.length) % flatImages.length
    setLightboxIndex(newIndex)
    setLightboxImage(flatImages[newIndex].image.url)
  }

  return (
    <>
      <section
        className={`py-16 lg:py-24 bg-white ${isRTL ? 'rtl' : 'ltr'}`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Section Title */}
        <div
          className={`text-center mb-16 px-4 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="font-elegant text-[#D4B896] italic text-2xl lg:text-3xl xl:text-4xl">
            {sectionSubtitle}
          </p>
        </div>

        {/* Date-Grouped Gallery */}
        <div className="px-2">
          {sortedDates.map((date, dateIndex) => {
            const dateImages = groupedImages[date]
            let currentImageIndex = 0

            // Calculate the starting index for this date group in the flat array
            for (let i = 0; i < dateIndex; i++) {
              currentImageIndex += groupedImages[sortedDates[i]].length
            }

            // IMPROVED: Get date info with normalized matching
            const dateInfo = getDateInfo(date)

            return (
              <div key={date} className="mb-12 lg:mb-16">
                {/* Date Subtitle */}
                <div
                  className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                    {formatDate(date, dateDisplayFormat, currentLanguage)}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#D4B896] to-amber-600 mx-auto rounded-full"></div>
                </div>

                {/* Date Info - Simple text on white background */}
                {dateInfo && (
                  <div className="max-w-4xl mx-auto mb-8 px-4">
                    {/* Info title if provided */}
                    {(dateInfo.titleRo || dateInfo.titleEn || dateInfo.titleHe) && (
                      <h4
                        className={`text-xl lg:text-2xl font-semibold text-gray-900 mb-4 text-balance ${isRTL ? 'text-right' : 'text-left'} md:text-center`}
                      >
                        {t({
                          ro: dateInfo.titleRo || '',
                          en: dateInfo.titleEn || '',
                          he: dateInfo.titleHe || '',
                        })}
                      </h4>
                    )}

                    {/* Info description */}
                    {(dateInfo.descriptionRo ||
                      dateInfo.descriptionEn ||
                      dateInfo.descriptionHe) && (
                      <p
                        className={`text-gray-700 leading-relaxed text-lg mb-6 text-balance ${isRTL ? 'text-right' : 'text-left'} md:text-center`}
                      >
                        {t({
                          ro: dateInfo.descriptionRo || '',
                          en: dateInfo.descriptionEn || '',
                          he: dateInfo.descriptionHe || '',
                        })}
                      </p>
                    )}
                  </div>
                )}

                {/* Images Grid - Same styling as original */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {dateImages.map((item, imageIndex) => {
                    const globalIndex = currentImageIndex + imageIndex
                    const caption = item.caption
                      ? t({
                          ro: item.caption.captionRo || '',
                          en: item.caption.captionEn || '',
                          he: item.caption.captionHe || '',
                        })
                      : ''

                    return (
                      <div
                        key={`${date}-${imageIndex}`}
                        className="group relative overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-300"
                      >
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.image.url || '/placeholder.svg'}
                            alt={`Gallery image ${globalIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                          {/* Click overlay for lightbox */}
                          {enableLightbox && (
                            <button
                              onClick={() => openLightbox(item.image.url, globalIndex)}
                              className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4B896] focus:ring-inset"
                              aria-label={`View gallery image ${globalIndex + 1} in lightbox`}
                            >
                              {/* Zoom icon */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/90 rounded-full p-2">
                                  <svg
                                    className="w-5 h-5 text-gray-900"
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
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                            <p
                              className={`text-white text-xs font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                            >
                              {caption}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Lightbox Modal - Same as original */}
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
          {flatImages.length > 1 && (
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
          {flatImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {lightboxIndex + 1} / {flatImages.length}
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

export default GallerySection
