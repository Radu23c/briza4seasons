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

interface FloorPlan {
  order: number
  floorNameRo: string
  floorNameEn: string
  floorNameHe: string
  floorPlanImage?: MediaObject
  floorPlanImageAltRo?: string
  floorPlanImageAltEn?: string
  floorPlanImageAltHe?: string
  builtArea: number
  usableArea: number
  builtAreaLabelRo: string
  builtAreaLabelEn: string
  builtAreaLabelHe: string
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
  floorPlans: FloorPlan[]
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
  floorPlans,
}) => {
  const { t, currentLanguage } = useLanguage()
  const [activeFloor, setActiveFloor] = useState(0)

  // Early return if no floor plans
  if (!floorPlans?.length) {
    console.warn('FloorPlansSection: No floor plans provided')
    return null
  }

  // Sort floor plans by order
  const sortedFloorPlans = [...floorPlans].sort((a, b) => a.order - b.order)

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

  const floorPlanImageAlt = t({
    ro: currentFloorPlan.floorPlanImageAltRo || `Floor plan ${activeFloor + 1}`,
    en: currentFloorPlan.floorPlanImageAltEn || `Floor plan ${activeFloor + 1}`,
    he: currentFloorPlan.floorPlanImageAltHe || `Floor plan ${activeFloor + 1}`,
  })

  const builtAreaLabel = t({
    ro: currentFloorPlan.builtAreaLabelRo,
    en: currentFloorPlan.builtAreaLabelEn,
    he: currentFloorPlan.builtAreaLabelHe,
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
                  onClick={() => setActiveFloor(index)}
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
          {/* Floor Plan Image */}
          <div className="relative aspect-[16/10] mb-12 rounded-lg overflow-hidden shadow-2xl bg-gray-200">
            {currentFloorPlan.floorPlanImage?.url ? (
              <Image
                src={currentFloorPlan.floorPlanImage.url || '/placeholder.svg'}
                alt={floorPlanImageAlt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
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
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <span className="text-gray-900 font-semibold text-lg">{builtAreaLabel}</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {currentFloorPlan.builtArea.toFixed(2)} MP
                  </span>
                </div>
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
