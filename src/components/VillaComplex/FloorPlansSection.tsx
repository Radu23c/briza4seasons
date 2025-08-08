'use client'

import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/app/contexts/LanguageContext'

interface MediaObject {
  url: string
  alt?: string
}

interface FloorPlanImage {
  image?: MediaObject
  altTextRo?: string
  altTextEn?: string
  altTextHe?: string
  order: number
}

interface RoomDetail {
  roomNameRo: string
  roomNameEn: string
  roomNameHe: string
  roomArea: number
}

interface FloorPlan {
  order: number
  floorNameRo: string
  floorNameEn: string
  floorNameHe: string
  floorPlanImages?: FloorPlanImage[]
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
  descriptionRo?: string
  descriptionEn?: string
  descriptionHe?: string
  floorPlans: FloorPlan[]
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
  // Find the autumn villa index, default to 0 if not found
  const autumnIndex = villas.findIndex((villa) => villa.key === 'autumn')
  const [activeVilla, setActiveVilla] = useState(autumnIndex >= 0 ? autumnIndex : 0)
  const [activeFloor, setActiveFloor] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Early return if no villas
  if (!villas?.length) {
    console.warn('FloorPlansSection: No villas provided')
    return null
  }

  // Reset floor and image selection when villa changes
  const handleVillaChange = (villaIndex: number) => {
    setActiveVilla(villaIndex)
    setActiveFloor(0) // Reset to first floor
    setCurrentImageIndex(0) // Reset to first image
  }

  // Reset image selection when floor changes
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
  const currentFloorPlan = sortedFloorPlans[activeFloor]

  // Sort images by order
  const sortedImages = currentFloorPlan.floorPlanImages
    ? [...currentFloorPlan.floorPlanImages].sort((a, b) => a.order - b.order)
    : []

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

  // Navigation functions for images
  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? sortedImages.length - 1 : prev - 1))
  }

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === sortedImages.length - 1 ? 0 : prev + 1))
  }

  // Get current image alt text
  const getCurrentImageAlt = () => {
    if (!sortedImages[currentImageIndex]) return 'Floor plan image'

    const currentImage = sortedImages[currentImageIndex]
    return t({
      ro: currentImage.altTextRo || `Floor plan image ${currentImageIndex + 1}`,
      en: currentImage.altTextEn || `Floor plan image ${currentImageIndex + 1}`,
      he: currentImage.altTextHe || `Floor plan image ${currentImageIndex + 1}`,
    })
  }

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

  // Direction labels for villas
  const getDirectionLabel = (villaKey: string) => {
    switch (villaKey) {
      case 'spring':
        return t({
          ro: 'EST',
          en: 'EAST',
          he: 'מזרח',
        })
      case 'summer':
        return t({
          ro: 'EST',
          en: 'EAST',
          he: 'מזרח',
        })
      case 'autumn':
        return t({
          ro: 'VEST',
          en: 'WEST',
          he: 'מערב',
        })
      case 'winter':
        return t({
          ro: 'VEST',
          en: 'WEST',
          he: 'מערב',
        })
      default:
        return ''
    }
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

        {/* Villa Selection with Direction Indicator */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Villa Selection Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {villas.map((villa, index) => {
                const villaName = t({
                  ro: villa.nameRo,
                  en: villa.nameEn,
                  he: villa.nameHe,
                })

                return (
                  <div key={villa.key} className="text-center">
                    <button
                      onClick={() => handleVillaChange(index)}
                      className={`relative px-6 py-4 rounded-xl font-semibold text-sm tracking-wider uppercase transition-all duration-300 overflow-hidden group w-full ${
                        activeVilla === index
                          ? 'text-white shadow-lg transform scale-105'
                          : 'text-gray-700 bg-white hover:text-white shadow-md hover:shadow-lg hover:transform hover:scale-105'
                      }`}
                    >
                      {/* Background gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${villaColors[villa.key]} transition-opacity duration-300 ${
                          activeVilla === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-90'
                        }`}
                      />
                      {/* Content */}
                      <div className="relative flex items-center justify-center space-x-2">
                        <span className="text-lg">{villaIcons[villa.key]}</span>
                        <span>{villaName}</span>
                      </div>
                    </button>

                    {/* Direction Label */}
                    <div className="mt-2">
                      <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">
                        {getDirectionLabel(villa.key)}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Direction Arrow */}
            <div className="hidden md:flex items-center justify-center mt-6 mb-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-semibold text-gray-700 tracking-wider">
                  {t({
                    ro: 'EST',
                    en: 'EAST',
                    he: 'מזרח',
                  })}
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 h-px bg-gradient-to-r from-gray-400 to-gray-600"></div>
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                  <div className="w-24 h-px bg-gradient-to-r from-gray-600 to-gray-400"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700 tracking-wider">
                  {t({
                    ro: 'VEST',
                    en: 'WEST',
                    he: 'מערב',
                  })}
                </span>
              </div>
            </div>

            {/* Mobile Direction Indicator */}
            <div className="md:hidden flex items-center justify-center mt-4 mb-2">
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <span className="font-semibold">
                  {t({
                    ro: 'Orientare:',
                    en: 'Orientation:',
                    he: 'כיוון:',
                  })}
                </span>
                <span>
                  {t({
                    ro: 'EST ← → VEST',
                    en: 'EAST ← → WEST',
                    he: 'מזרח ← → מערב',
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Villa Description */}
        {currentVilla && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{villaIcons[currentVilla.key]}</span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t({
                        ro: currentVilla.nameRo,
                        en: currentVilla.nameEn,
                        he: currentVilla.nameHe,
                      })}
                    </h3>
                    <span className="text-3xl">{villaIcons[currentVilla.key]}</span>
                  </div>
                </div>

                {/* Villa Description */}
                {(currentVilla.descriptionRo ||
                  currentVilla.descriptionEn ||
                  currentVilla.descriptionHe) && (
                  <div className="max-w-3xl mx-auto">
                    <p
                      className={`text-gray-700 text-lg leading-relaxed ${
                        currentLanguage === 'he' ? 'text-right' : 'text-left'
                      } md:text-center`}
                    >
                      {t({
                        ro: currentVilla.descriptionRo || '',
                        en: currentVilla.descriptionEn || '',
                        he: currentVilla.descriptionHe || '',
                      })}
                    </p>
                  </div>
                )}

                {/* Decorative element */}
                <div className="mt-6 flex justify-center">
                  <div
                    className={`w-24 h-1 bg-gradient-to-r ${villaColors[currentVilla.key]} rounded-full`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

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
            {sortedImages.length > 0 && sortedImages[currentImageIndex]?.image?.url ? (
              <>
                <Image
                  src={sortedImages[currentImageIndex].image.url || '/placeholder.svg'}
                  alt={getCurrentImageAlt()}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />

                {/* Navigation Arrows - Only show if more than 1 image */}
                {sortedImages.length > 1 && (
                  <>
                    {/* Left Arrow */}
                    <button
                      onClick={goToPreviousImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                      aria-label={t({
                        ro: 'Imaginea anterioară',
                        en: 'Previous image',
                        he: 'תמונה קודמת',
                      })}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right Arrow */}
                    <button
                      onClick={goToNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                      aria-label={t({
                        ro: 'Imaginea următoare',
                        en: 'Next image',
                        he: 'תמונה הבאה',
                      })}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                      {currentImageIndex + 1} / {sortedImages.length}
                    </div>

                    {/* Image Dots Indicator */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                      {sortedImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? 'bg-white scale-125'
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`${t({
                            ro: 'Mergi la imaginea',
                            en: 'Go to image',
                            he: 'עבור לתמונה',
                          })} ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
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
                      ro: 'Planurile vor fi disponibile în curând',
                      en: 'Floor plans will be available soon',
                      he: 'תוכניות הקומה יהיו זמינות בקרוב',
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
