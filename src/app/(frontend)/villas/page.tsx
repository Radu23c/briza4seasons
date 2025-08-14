import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import AboutUsHero from '@/components/AboutUs/AboutUsHero'
import AboutUsContent from '@/components/AboutUs/AboutUsContent'
import FloorPlansSection from '@/components/VillaComplex/FloorPlansSection'
import FacilitiesSection from '@/components/AboutUs/FacilitiesSection'
import { Suspense } from 'react'
import type { Media } from '@/payload-types'

// Type for the expected AboutImage format
interface AboutImage {
  image: {
    url: string
    alt?: string
    width?: number
    height?: number
  }
  altTextRo?: string | null
  altTextEn?: string | null
  altTextHe?: string | null
  order: number
  id?: string | null
}

// General helper function to transform any Media field to MediaObject
function transformMediaToObject(media: string | Media | { url: string } | null | undefined): any {
  if (!media) return undefined
  if (typeof media === 'string') {
    return {
      url: media,
      alt: '',
    }
  }
  // Handle simple objects with just url
  if (media && typeof media === 'object' && 'url' in media && !('id' in media)) {
    return {
      url: media.url,
      alt: '',
    }
  }
  return {
    url: (media as Media).url || '/images/default-image.jpg',
    alt: (media as Media).alt || '',
    width: (media as Media).width ?? undefined,
    height: (media as Media).height ?? undefined,
  }
}

// Helper function to convert null to undefined for optional fields
function nullToUndefined<T>(value: T | null): T | undefined {
  return value === null ? undefined : value
}

// Helper function to ensure required string fields have fallback values
function ensureString(value: string | null | undefined, fallback = ''): string {
  return value || fallback
}

// Helper function to transform Payload images to AboutImage format
function transformPayloadImages(payloadImages: any[]): AboutImage[] {
  if (!payloadImages || !Array.isArray(payloadImages)) return []
  return payloadImages.map((item) => {
    return {
      image: transformMediaToObject(item.image),
      altTextRo: nullToUndefined(item.altTextRo),
      altTextEn: nullToUndefined(item.altTextEn),
      altTextHe: nullToUndefined(item.altTextHe),
      order: item.order,
      id: nullToUndefined(item.id),
    }
  })
}

// UPDATED: Helper function to transform villa floor plans with multiple images
function transformVillaFloorPlans(payloadVillas: any[]): any[] {
  if (!payloadVillas || !Array.isArray(payloadVillas)) return []

  // Ensure villas are in the correct order (spring, summer, autumn, winter)
  const villaOrder = ['spring', 'summer', 'autumn', 'winter'] as const
  const sortedVillas = villaOrder.map((season) => {
    const villa = payloadVillas.find((v) => v.villaType === season)
    if (!villa) {
      // Return a default villa structure if missing
      return {
        key: season,
        nameRo: `Vila ${season.charAt(0).toUpperCase() + season.slice(1)}`,
        nameEn: `${season.charAt(0).toUpperCase() + season.slice(1)} Villa`,
        nameHe: `וילת ${season}`,
        descriptionRo: undefined,
        descriptionEn: undefined,
        descriptionHe: undefined,
        floorPlans: [],
      }
    }
    return {
      key: season,
      nameRo: villa.nameRo,
      nameEn: villa.nameEn,
      nameHe: villa.nameHe,
      descriptionRo: nullToUndefined(villa.descriptionRo),
      descriptionEn: nullToUndefined(villa.descriptionEn),
      descriptionHe: nullToUndefined(villa.descriptionHe),
      floorPlans: transformFloorPlans(villa.floorPlans || []),
    }
  })
  return sortedVillas
}

// UPDATED: Helper function to transform Payload floor plans with multiple images
function transformFloorPlans(payloadFloorPlans: any[]): any[] {
  if (!payloadFloorPlans || !Array.isArray(payloadFloorPlans)) return []
  return payloadFloorPlans.map((floorPlan) => {
    return {
      ...floorPlan,
      // Transform multiple images instead of single image
      floorPlanImages: transformFloorPlanImages(floorPlan.floorPlanImages || []),
      usableArea: floorPlan.usableArea || 0,
      usableAreaLabelRo: nullToUndefined(floorPlan.usableAreaLabelRo),
      usableAreaLabelEn: nullToUndefined(floorPlan.usableAreaLabelEn),
      usableAreaLabelHe: nullToUndefined(floorPlan.usableAreaLabelHe),
      roomDetails: floorPlan.roomDetails || [],
      pdfDownload: floorPlan.pdfDownload
        ? {
            ...floorPlan.pdfDownload,
            pdfFile: transformMediaToObject(floorPlan.pdfDownload.pdfFile),
          }
        : undefined,
      id: nullToUndefined(floorPlan.id),
    }
  })
}

// NEW: Helper function to transform floor plan images array
function transformFloorPlanImages(payloadImages: any[]): any[] {
  if (!payloadImages || !Array.isArray(payloadImages)) return []
  return payloadImages.map((imageItem) => {
    return {
      image: transformMediaToObject(imageItem.image),
      altTextRo: nullToUndefined(imageItem.altTextRo),
      altTextEn: nullToUndefined(imageItem.altTextEn),
      altTextHe: nullToUndefined(imageItem.altTextHe),
      order: imageItem.order || 1,
    }
  })
}

// Helper function to transform Payload facilities
function transformFacilities(payloadFacilities: any[]): any[] {
  if (!payloadFacilities || !Array.isArray(payloadFacilities)) return []
  return payloadFacilities.map((facility) => {
    return {
      ...facility,
      descriptionRo: nullToUndefined(facility.descriptionRo),
      descriptionEn: nullToUndefined(facility.descriptionEn),
      descriptionHe: nullToUndefined(facility.descriptionHe),
      id: nullToUndefined(facility.id),
    }
  })
}

// Helper function to transform breadcrumbs - FIXED VERSION
function transformBreadcrumbs(breadcrumbs: any[] | null | undefined): any[] {
  if (!breadcrumbs || !Array.isArray(breadcrumbs)) return []
  return breadcrumbs.map((crumb) => ({
    ...crumb,
    labelRo: nullToUndefined(crumb.labelRo),
    labelEn: nullToUndefined(crumb.labelEn),
    labelHe: nullToUndefined(crumb.labelHe),
    href: nullToUndefined(crumb.href),
    id: nullToUndefined(crumb.id),
  }))
}

// Helper function to transform content paragraphs
function transformContentParagraphs(paragraphs: any[] | undefined): any[] {
  if (!paragraphs) return []
  return paragraphs.map((paragraph) => ({
    ...paragraph,
    textRo: nullToUndefined(paragraph.paragraphRo), // Note: mapping paragraphRo to textRo
    textEn: nullToUndefined(paragraph.paragraphEn), // Note: mapping paragraphEn to textEn
    textHe: nullToUndefined(paragraph.paragraphHe), // Note: mapping paragraphHe to textHe
    id: nullToUndefined(paragraph.id),
  }))
}

// Loading skeleton for Villa Complex page
function VillaComplexPageSkeleton() {
  return (
    <div>
      {/* Hero Skeleton */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-200 animate-pulse">
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="h-16 bg-gray-300 rounded mb-4 max-w-4xl"></div>
              <div className="h-8 bg-gray-300 rounded max-w-md"></div>
            </div>
            <div className="flex-shrink-0 ml-8">
              <div className="bg-gray-300 rounded-lg px-6 py-4 w-48 h-12"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Content Skeleton */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative w-full h-[500px] lg:h-[600px]">
                <div className="absolute top-0 left-0 w-[70%] h-[60%] bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="absolute top-[30%] right-0 w-[60%] h-[70%] bg-gray-300 rounded-lg animate-pulse"></div>
              </div>
            </div>
            <div className="lg:pl-8 space-y-6">
              <div className="h-8 bg-gray-200 rounded w-32 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-24 bg-gray-100 rounded animate-pulse"></div>
              <div className="h-24 bg-gray-100 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Villa Selection Skeleton */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded w-80 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          {/* Villa Selection Skeleton */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-gray-300 rounded-xl w-32 animate-pulse"></div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mb-12">
            <div className="flex space-x-8 bg-gray-100 rounded-lg p-2">
              <div className="h-12 bg-gray-300 rounded-lg w-24 animate-pulse"></div>
              <div className="h-12 bg-gray-300 rounded-lg w-24 animate-pulse"></div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="aspect-[16/10] bg-gray-200 rounded-lg mb-12 animate-pulse"></div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-12 bg-gray-100 rounded animate-pulse"></div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <div className="h-16 bg-gray-300 rounded-lg w-64 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Facilities Skeleton - BELOW FLOOR PLANS */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-300 rounded w-80 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-6 mb-8">
                  <div className="w-12 h-12 bg-gray-300 rounded animate-pulse"></div>
                  <div className="w-20 h-20 bg-gray-300 rounded animate-pulse"></div>
                  <div className="w-12 h-12 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="h-6 bg-gray-300 rounded w-48 mx-auto animate-pulse"></div>
                <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

async function VillaComplexPageContent() {
  try {
    const payload = await getPayloadHMR({ config: configPromise })
    const villaComplexData = await payload.findGlobal({
      slug: 'villa-complex-page',
    })

    if (!villaComplexData) {
      // Return default data structure if no data found
      const defaultData = {
        heroSection: {
          isActive: true,
          mainTitleRo: 'Mai multe despre Ansamblul Rezidential Briza4Seasons',
          mainTitleEn: 'More about Briza4Seasons Residential Complex',
          mainTitleHe: 'עוד על מתחם המגורים בריזה4סיזונס',
          subtitleRo: 'IMPARTIRE, SUPRAFETE, PLANURI',
          subtitleEn: 'DIVISION, AREAS, PLANS',
          subtitleHe: 'חלוקה, שטחים, תוכניות',
          backgroundImage: { url: '/images/villa-complex-hero-bg.jpg' },
          breadcrumbs: [
            {
              labelRo: 'ACASĂ',
              labelEn: 'HOME',
              labelHe: 'בית',
              href: '/',
              isActive: false,
            },
            {
              labelRo: 'PROPRIETATEA TA',
              labelEn: 'YOUR PROPERTY',
              labelHe: 'הנכס שלך',
              href: '/villas',
              isActive: true,
            },
          ],
        },
        villaComplexContentSection: {
          isActive: false,
          images: [],
          contentParagraphs: [],
        },
        floorPlansSection: {
          isActive: false,
          villas: [],
        },
        facilitiesSection: {
          isActive: false,
          facilities: [],
        },
      }
      return (
        <div>
          <AboutUsHero {...defaultData.heroSection} />
        </div>
      )
    }

    return (
      <div className="fixed-0">
        {/* Hero Section */}
        {villaComplexData?.heroSection?.isActive &&
          villaComplexData.heroSection.backgroundImage && (
            <AboutUsHero
              mainTitleRo={ensureString(villaComplexData.heroSection.mainTitleRo)}
              mainTitleEn={ensureString(villaComplexData.heroSection.mainTitleEn)}
              mainTitleHe={ensureString(villaComplexData.heroSection.mainTitleHe)}
              subtitleRo={ensureString(villaComplexData.heroSection.subtitleRo)}
              subtitleEn={ensureString(villaComplexData.heroSection.subtitleEn)}
              subtitleHe={ensureString(villaComplexData.heroSection.subtitleHe)}
              backgroundImage={transformMediaToObject(villaComplexData.heroSection.backgroundImage)}
              breadcrumbs={transformBreadcrumbs(villaComplexData.heroSection.breadcrumbs)}
            />
          )}

        {/* Villa Complex Content Section */}
        {villaComplexData?.villaComplexContentSection?.isActive &&
          villaComplexData.villaComplexContentSection.images?.length &&
          villaComplexData.villaComplexContentSection.images.length > 0 &&
          villaComplexData.villaComplexContentSection.contentParagraphs?.length &&
          villaComplexData.villaComplexContentSection.contentParagraphs.length > 0 && (
            <AboutUsContent
              sectionTitleRo={ensureString(
                villaComplexData.villaComplexContentSection.sectionTitleRo,
              )}
              sectionTitleEn={ensureString(
                villaComplexData.villaComplexContentSection.sectionTitleEn,
              )}
              sectionTitleHe={ensureString(
                villaComplexData.villaComplexContentSection.sectionTitleHe,
              )}
              mainHeadingRo={ensureString(
                villaComplexData.villaComplexContentSection.mainHeadingRo,
              )}
              mainHeadingEn={ensureString(
                villaComplexData.villaComplexContentSection.mainHeadingEn,
              )}
              mainHeadingHe={ensureString(
                villaComplexData.villaComplexContentSection.mainHeadingHe,
              )}
              contentParagraphs={transformContentParagraphs(
                villaComplexData.villaComplexContentSection.contentParagraphs,
              )}
              images={transformPayloadImages(villaComplexData.villaComplexContentSection.images)}
            />
          )}

        {/* Floor Plans Section with Villa Selection - ABOVE FACILITIES */}
        {villaComplexData?.floorPlansSection?.isActive &&
          villaComplexData.floorPlansSection.villas?.length &&
          villaComplexData.floorPlansSection.villas.length > 0 && (
            <FloorPlansSection
              sectionTitleRo={ensureString(villaComplexData.floorPlansSection.sectionTitleRo)}
              sectionTitleEn={ensureString(villaComplexData.floorPlansSection.sectionTitleEn)}
              sectionTitleHe={ensureString(villaComplexData.floorPlansSection.sectionTitleHe)}
              sectionSubtitleRo={ensureString(villaComplexData.floorPlansSection.sectionSubtitleRo)}
              sectionSubtitleEn={ensureString(villaComplexData.floorPlansSection.sectionSubtitleEn)}
              sectionSubtitleHe={ensureString(villaComplexData.floorPlansSection.sectionSubtitleHe)}
              sectionDescriptionRo={ensureString(
                villaComplexData.floorPlansSection.sectionDescriptionRo,
              )}
              sectionDescriptionEn={ensureString(
                villaComplexData.floorPlansSection.sectionDescriptionEn,
              )}
              sectionDescriptionHe={ensureString(
                villaComplexData.floorPlansSection.sectionDescriptionHe,
              )}
              villas={transformVillaFloorPlans(villaComplexData.floorPlansSection.villas)}
            />
          )}

        {/* Facilities Section - BELOW FLOOR PLANS */}
        {villaComplexData?.facilitiesSection?.isActive &&
          villaComplexData.facilitiesSection.facilities?.length &&
          villaComplexData.facilitiesSection.facilities.length > 0 &&
          villaComplexData.facilitiesSection.backgroundImage && (
            <FacilitiesSection
              sectionTitleRo={ensureString(villaComplexData.facilitiesSection.sectionTitleRo)}
              sectionTitleEn={ensureString(villaComplexData.facilitiesSection.sectionTitleEn)}
              sectionTitleHe={ensureString(villaComplexData.facilitiesSection.sectionTitleHe)}
              facilities={transformFacilities(villaComplexData.facilitiesSection.facilities)}
              backgroundImage={transformMediaToObject(
                villaComplexData.facilitiesSection.backgroundImage,
              )}
              backgroundImageAltRo={nullToUndefined(
                villaComplexData.facilitiesSection.backgroundImageAltRo,
              )}
              backgroundImageAltEn={nullToUndefined(
                villaComplexData.facilitiesSection.backgroundImageAltEn,
              )}
              backgroundImageAltHe={nullToUndefined(
                villaComplexData.facilitiesSection.backgroundImageAltHe,
              )}
            />
          )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching villa complex data:', error)
    // Return safe fallback on error
    const fallbackData = {
      heroSection: {
        isActive: true,
        mainTitleRo: 'Mai multe despre Ansamblul Rezidential Briza4Seasons',
        mainTitleEn: 'More about Briza4Seasons Residential Complex',
        mainTitleHe: 'עוד על מתחם המגורים בריזה4סיזונס',
        subtitleRo: 'IMPARTIRE, SUPRAFETE, PLANURI',
        subtitleEn: 'DIVISION, AREAS, PLANS',
        subtitleHe: 'חלוקה, שטחים, תוכניות',
        backgroundImage: { url: '/images/villa-complex-hero-bg.jpg' },
        breadcrumbs: [
          {
            labelRo: 'ACASĂ',
            labelEn: 'HOME',
            labelHe: 'בית',
            href: '/',
            isActive: false,
          },
          {
            labelRo: 'PROPRIETATEA TA',
            labelEn: 'YOUR PROPERTY',
            labelHe: 'הנכס שלך',
            href: '/villas',
            isActive: true,
          },
        ],
      },
    }
    return (
      <div>
        <AboutUsHero {...fallbackData.heroSection} />
      </div>
    )
  }
}

export default function VillaComplexPage() {
  return (
    <Suspense fallback={<VillaComplexPageSkeleton />}>
      <VillaComplexPageContent />
    </Suspense>
  )
}

export const metadata = {
  title: 'Villa Complex - Briza4Seasons Residence',
  description:
    'Discover more about Briza4Seasons residential complex - division, areas, and plans.',
}
