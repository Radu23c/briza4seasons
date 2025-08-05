'use client'

import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface MediaObject {
  url: string
  alt?: string
}

interface RoomDetail {
  roomNameRo: string
  roomNameEn: string
  roomNameHe: string
  roomArea: number
}

interface FloorPlanImage {
  image?: MediaObject
  altTextRo?: string
  altTextEn?: string
  altTextHe?: string
  order: number
}

interface FloorPlan {
  order: number
  floorNameRo: string
  floorNameEn: string
  floorNameHe: string
  floorPlanImages: FloorPlanImage[]
  usableArea: number
  usableAreaLabelRo: string
  usableAreaLabelEn: string
  usableAreaLabelHe: string
  roomDetails: RoomDetail[]
  pdfDownload?: {
    buttonTextRo: string
    buttonTextEn: string
    buttonTextHe: string
    pdfFile?: MediaObject
  }
}

interface Villa {
  key: 'spring' | 'summer' | 'autumn' | 'winter'
  nameRo: string
  nameEn: string
  nameHe: string
  floorPlans: FloorPlan[]
  isDisabled?: boolean
}

interface FloorPlansSectionProps {
  sectionTitleRo: string
  sectionTitleEn: string
  sectionTitleHe: string
  sectionSubtitleRo: string
  sectionSubtitleEn: string
  sectionSubtitleHe: string
  sectionDescriptionRo: string
  sectionDescriptionEn: string
  sectionDescriptionHe: string
  villas: Villa[]
}

const FloorPlansSection: React.FC<FloorPlansSectionProps> = ({
  sectionTitleRo,
  sectionTitleEn,
  sectionTitleHe,
  sectionSubtitleRo,
  sectionSubtitleEn,
  sectionSubtitleHe,
  sectionDescriptionRo,
  sectionDescriptionEn,
  sectionDescriptionHe,
  villas,
}) => {
  const { t, currentLanguage } = useLanguage()

  // Find autumn villa index and set it as default, or find first enabled villa
  const getDefaultVillaIndex = () => {
    const autumnIndex = villas.findIndex((villa) => villa.key === 'autumn')
    if (autumnIndex !== -1 && !villas[autumnIndex].isDisabled) {
      return autumnIndex
    }
    // Fallback to first non-disabled villa
    const firstEnabledIndex = villas.findIndex((villa) => !villa.isDisabled)
    return firstEnabledIndex !== -1 ? firstEnabledIndex : 0
  }

  const [activeVilla, setActiveVilla] = useState(getDefaultVillaIndex())
  const [activeFloor, setActiveFloor] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Early return if no villas
  if (!villas?.length) {
    console.warn('FloorPlansSection: No villas provided')
    return null
  }

  // Reset floor selection and image index when villa changes
  const handleVillaChange = (villaIndex: number) => {
    const villa = villas[villaIndex]
    if (villa.isDisabled) return // Don't allow selecting disabled villas

    setActiveVilla(villaIndex)
    setActiveFloor(0) // Reset to first floor
    setCurrentImageIndex(0) // Reset to first image
  }

  // Reset image index when floor changes
  const handleFloorChange = (floorIndex: number) => {
    setActiveFloor(floorIndex)
    setCurrentImageIndex(0) // Reset to first image
  }

  const currentVilla = villas[activeVilla]

  // Early return if current villa has no floor plans
  if (!currentVilla?.floorPlans?.length) {
    console.warn(`FloorPlansSection: Villa ${activeVilla} has no floor plans`)
    return null
  }

  // Sort floor plans by order
  const sortedFloorPlans = [...currentVilla.floorPlans].sort((a, b) => a.order - b.order)

  const sectionTitle = t({
    ro: sectionTitleRo,
    en: sectionTitleEn,
    he: sectionTitleHe,
  })

  const sectionSubtitle = t({
    ro: sectionSubtitleRo,
    en: sectionSubtitleEn,
    he: sectionSubtitleHe,
  })

  const sectionDescription = t({
    ro: sectionDescriptionRo,
    en: sectionDescriptionEn,
    he: sectionDescriptionHe,
  })

  const currentFloorPlan = sortedFloorPlans[activeFloor]

  // Sort floor plan images by order
  const sortedImages = currentFloorPlan.floorPlanImages
    ? [...currentFloorPlan.floorPlanImages].sort((a, b) => a.order - b.order)
    : []

  const currentImage = sortedImages[currentImageIndex]

  const floorPlanImageAlt = currentImage
    ? t({
        ro: currentImage.altTextRo || `Floor plan image ${currentImageIndex + 1}`,
        en: currentImage.altTextEn || `Floor plan image ${currentImageIndex + 1}`,
        he: currentImage.altTextHe || `Floor plan image ${currentImageIndex + 1}`,
      })
    : t({
        ro: `Planul etajului ${activeFloor + 1}`,
        en: `Floor plan ${activeFloor + 1}`,
        he: `תוכנית הקומה ${activeFloor + 1}`,
      })

  const usableAreaLabel = t({
    ro: currentFloorPlan.usableAreaLabelRo,
    en: currentFloorPlan.usableAreaLabelEn,
    he: currentFloorPlan.usableAreaLabelHe,
  })

  const pdfButtonText = currentFloorPlan.pdfDownload
    ? t({
        ro: currentFloorPlan.pdfDownload.buttonTextRo,
        en: currentFloorPlan.pdfDownload.buttonTextEn,
        he: currentFloorPlan.pdfDownload.buttonTextHe,
      })
    : ''

  // Villa selection icons/colors
  const villaIcons = {
    spring: '🌸',
    summer: '☀️',
    autumn: '🍂',
    winter: '❄️',
  }

  const villaColors = {
    spring: 'from-green-400 to-pink-400',
    summer: 'from-yellow-400 to-orange-400',
    autumn: 'from-orange-400 to-red-400',
    winter: 'from-blue-400 to-cyan-400',
  }

  // Image navigation functions
  const nextImage = () => {
    if (sortedImages.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % sortedImages.length)
    }
  }

  const prevImage = () => {
    if (sortedImages.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + sortedImages.length) % sortedImages.length)
    }
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 ${currentLanguage === 'he' ? 'text-right' : 'text-left'} md:text-center`}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            {sectionTitle}{' '}
            <span className="font-elegant text-[#D4B896] italic">{sectionSubtitle}</span>
          </h2>
          <p className="text-gray-600 text-lg">{sectionDescription}</p>
        </div>

        {/* Villa Selection */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {villas.map((villa, index) => {
              const villaName = t({
                ro: villa.nameRo,
                en: villa.nameEn,
                he: villa.nameHe,
              })

              const isDisabled = villa.isDisabled
              const isActive = activeVilla === index

              return (
                <button
                  key={villa.key}
                  onClick={() => handleVillaChange(index)}
                  disabled={isDisabled}
                  className={`relative px-6 py-4 rounded-xl font-semibold text-sm tracking-wider uppercase transition-all duration-300 overflow-hidden group ${
                    isDisabled
                      ? 'text-gray-400 bg-gray-100 cursor-not-allowed opacity-50'
                      : isActive
                        ? 'text-white shadow-lg transform scale-105'
                        : 'text-gray-700 bg-white hover:text-white shadow-md hover:shadow-lg hover:transform hover:scale-105'
                  }`}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${villaColors[villa.key]} transition-opacity duration-300 ${
                      isDisabled
                        ? 'opacity-20'
                        : isActive
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-90'
                    }`}
                  />

                  {/* Content */}
                  <div className="relative flex items-center justify-center space-x-2">
                    <span className={`text-lg ${isDisabled ? 'grayscale' : ''}`}>
                      {villaIcons[villa.key]}
                    </span>
                    <span>{villaName}</span>
                  </div>

                  {/* Disabled overlay */}
                  {isDisabled && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-gray-500 font-medium">
                        {t({
                          ro: 'În curând',
                          en: 'Coming Soon',
                          he: 'בקרוב',
                        })}
                      </span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Floor Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8 bg-gray-100 rounded-lg p-2">
            {sortedFloorPlans.map((floorPlan, index) => {
              const floorName = t({
                ro: floorPlan.floorNameRo,
                en: floorPlan.floorNameEn,
                he: floorPlan.floorNameHe,
              })

              return (
                <button
                  key={index}
                  onClick={() => handleFloorChange(index)}
                  className={`px-8 py-3 rounded-lg font-semibold text-sm tracking-wider uppercase transition-all duration-300 ${
                    activeFloor === index
                      ? 'bg-[#D4B896] text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  {floorName}
                </button>
              )
            })}
          </div>
        </div>

        {/* Floor Plan Display */}
        <div className="max-w-6xl mx-auto">
          {/* Floor Plan Images with Navigation */}
          <div className="relative aspect-[16/10] mb-12 rounded-lg overflow-hidden shadow-2xl bg-gray-200">
            {currentImage?.image?.url ? (
              <>
                <Image
                  src={currentImage.image.url || '/placeholder.svg'}
                  alt={floorPlanImageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />

                {/* Navigation arrows - only show if more than 1 image */}
                {sortedImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 group"
                      aria-label={t({
                        ro: 'Imaginea anterioară',
                        en: 'Previous image',
                        he: 'תמונה קודמת',
                      })}
                    >
                      <svg
                        className="w-6 h-6 transform group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 group"
                      aria-label={t({
                        ro: 'Imaginea următoare',
                        en: 'Next image',
                        he: 'תמונה הבאה',
                      })}
                    >
                      <svg
                        className="w-6 h-6 transform group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image indicators - only show if more than 1 image */}
                {sortedImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {sortedImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-white shadow-lg'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-80'
                        }`}
                        aria-label={t({
                          ro: `Mergi la imaginea ${index + 1}`,
                          en: `Go to image ${index + 1}`,
                          he: `עבור לתמונה ${index + 1}`,
                        })}
                      />
                    ))}
                  </div>
                )}

                {/* Image counter */}
                {sortedImages.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {sortedImages.length}
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">
                    {t({
                      ro: 'Planul va fi disponibil în curând',
                      en: 'Floor plan will be available soon',
                      he: 'תוכנית הקומה תהיה זמינה בקרוב',
                    })}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Floor Details */}
          <div
            className={`grid lg:grid-cols-2 gap-12 ${currentLanguage === 'he' ? 'lg:grid-flow-col-dense' : ''}`}
          >
            {/* Left Side - Area Information and Room Details */}
            <div className={currentLanguage === 'he' ? 'lg:order-2' : ''}>
              {/* Area Information */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <span className="text-gray-900 font-semibold text-lg">{usableAreaLabel}</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {currentFloorPlan.usableArea.toFixed(2)} MP
                  </span>
                </div>
              </div>

              {/* Room Details */}
              <div className="space-y-4">
                {currentFloorPlan.roomDetails?.map((room, index) => {
                  const roomName = t({
                    ro: room.roomNameRo,
                    en: room.roomNameEn,
                    he: room.roomNameHe,
                  })

                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between py-3 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } px-4 rounded-lg`}
                    >
                      <span className="text-[#D4B896] font-medium text-sm tracking-wider uppercase">
                        {roomName}
                      </span>
                      <span className="text-gray-900 font-semibold">
                        {room.roomArea.toFixed(2)} MP
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Side - PDF Download Button */}
            <div
              className={`flex items-center justify-center ${currentLanguage === 'he' ? 'lg:order-1' : ''}`}
            >
              <div className="text-center">
                {currentFloorPlan.pdfDownload?.pdfFile?.url ? (
                  <>
                    <a
                      href={currentFloorPlan.pdfDownload.pdfFile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#D4B896] hover:bg-[#c9a87d] text-white px-12 py-6 rounded-lg transition-all duration-300 text-lg font-semibold tracking-wider uppercase btn-elegant transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {pdfButtonText}
                    </a>
                    <p className="text-gray-500 text-sm mt-4">
                      {t({
                        ro: 'Descarcă planul complet în format PDF',
                        en: 'Download the complete plan in PDF format',
                        he: 'הורד את התוכנית המלאה בפורמט PDF',
                      })}
                    </p>
                  </>
                ) : (
                  <>
                    <button
                      disabled
                      className="inline-block bg-gray-300 text-gray-500 px-12 py-6 rounded-lg text-lg font-semibold tracking-wider uppercase cursor-not-allowed"
                    >
                      {pdfButtonText ||
                        t({
                          ro: 'PDF INDISPONIBIL',
                          en: 'PDF UNAVAILABLE',
                          he: 'PDF לא זמין',
                        })}
                    </button>
                    <p className="text-gray-400 text-sm mt-4">
                      {t({
                        ro: 'PDF-ul va fi disponibil în curând',
                        en: 'PDF will be available soon',
                        he: 'PDF יהיה זמין בקרוב',
                      })}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FloorPlansSection
