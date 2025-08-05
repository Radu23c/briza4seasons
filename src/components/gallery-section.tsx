'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  image?: {
    url?: string
    alt?: string
    width?: number
    height?: number
  }
  uploadDate?: string
  caption?: {
    captionRo?: string
    captionEn?: string
    captionHe?: string
  }
  order?: number
}

interface GalleryProps {
  images: GalleryImage[]
  enableLightbox?: boolean
  dateDisplayFormat?: 'full' | 'short' | 'numeric' | 'iso'
  language?: 'ro' | 'en' | 'he'
  isFullWidth?: boolean
}

interface GroupedImages {
  [date: string]: GalleryImage[]
}

export default function GallerySection({
  images = [],
  enableLightbox = true,
  dateDisplayFormat = 'full',
  language = 'ro',
  isFullWidth = false,
}: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [allImages, setAllImages] = useState<GalleryImage[]>([])

  // Group images by upload date
  const groupImagesByDate = (images: GalleryImage[]): GroupedImages => {
    const grouped: GroupedImages = {}

    images.forEach((image) => {
      const date = image.uploadDate || new Date().toISOString().split('T')[0]
      if (!grouped[date]) {
        grouped[date] = []
      }
      grouped[date].push(image)
    })

    // Sort images within each group by order
    Object.keys(grouped).forEach((date) => {
      grouped[date].sort((a, b) => (a.order || 1) - (b.order || 1))
    })

    return grouped
  }

  // Format date for display
  const formatDate = (dateString: string, format: string, lang: string): string => {
    const date = new Date(dateString)

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
        return dateString
      default:
        return dateString
    }
  }

  const groupedImages = groupImagesByDate(images)
  const sortedDates = Object.keys(groupedImages).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  )

  // Create flat array for lightbox navigation
  const flatImages = sortedDates.reduce((acc: GalleryImage[], date) => {
    return [...acc, ...groupedImages[date]]
  }, [])

  const openLightbox = (imageIndex: number) => {
    if (enableLightbox) {
      setCurrentImageIndex(imageIndex)
      setLightboxOpen(true)
    }
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % flatImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + flatImages.length) % flatImages.length)
  }

  const getImageUrl = (image: GalleryImage['image']) => {
    return image?.url || '/placeholder.svg?height=400&width=400'
  }

  const getCaption = (caption: GalleryImage['caption']) => {
    if (!caption) return ''
    switch (language) {
      case 'en':
        return caption.captionEn || caption.captionRo || ''
      case 'he':
        return caption.captionHe || caption.captionRo || ''
      default:
        return caption.captionRo || ''
    }
  }

  if (!images.length) {
    return null
  }

  const containerClass = isFullWidth ? 'px-2' : 'container mx-auto px-4'
  const gridClass = isFullWidth
    ? 'grid grid-cols-2 md:grid-cols-4 gap-2'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'

  return (
    <div className={containerClass}>
      {sortedDates.map((date, dateIndex) => {
        const dateImages = groupedImages[date]
        let currentImageIndex = 0

        // Calculate the starting index for this date group in the flat array
        for (let i = 0; i < dateIndex; i++) {
          currentImageIndex += groupedImages[sortedDates[i]].length
        }

        return (
          <div key={date} className="mb-12 lg:mb-16">
            {/* Date Subtitle */}
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                {formatDate(date, dateDisplayFormat, language)}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
            </div>

            {/* Images Grid */}
            <div className={gridClass}>
              {dateImages.map((imageItem, imageIndex) => {
                const globalIndex = currentImageIndex + imageIndex
                const imageUrl = getImageUrl(imageItem.image)
                const caption = getCaption(imageItem.caption)

                return (
                  <div
                    key={`${date}-${imageIndex}`}
                    className={`group relative overflow-hidden ${
                      isFullWidth ? 'aspect-[4/3]' : 'aspect-[4/3] rounded-lg'
                    } ${enableLightbox ? 'cursor-pointer' : ''} transition-transform duration-300 hover:scale-105`}
                    onClick={() => openLightbox(globalIndex)}
                  >
                    <Image
                      src={imageUrl || '/placeholder.svg'}
                      alt={caption || `Gallery image ${globalIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes={
                        isFullWidth
                          ? '(max-width: 768px) 50vw, 25vw'
                          : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                      }
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Caption overlay */}
                    {caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-medium">{caption}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      {/* Lightbox */}
      {lightboxOpen && enableLightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation buttons */}
            {flatImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Current image */}
            <div className="relative max-w-full max-h-full">
              <Image
                src={getImageUrl(flatImages[currentImageIndex]?.image) || '/placeholder.svg'}
                alt={
                  getCaption(flatImages[currentImageIndex]?.caption) ||
                  `Gallery image ${currentImageIndex + 1}`
                }
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />

              {/* Image caption in lightbox */}
              {getCaption(flatImages[currentImageIndex]?.caption) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium text-center">
                    {getCaption(flatImages[currentImageIndex]?.caption)}
                  </p>
                </div>
              )}
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                {currentImageIndex + 1} / {flatImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
