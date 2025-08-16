import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import LocationHero from '@/components/Location/LocationHero'
import LocationMap from '@/components/Location/LocationMap'
import { Suspense } from 'react'
import { Media } from '@/payload-types'
import type { Metadata } from 'next'

// Type definitions for better type safety
interface MediaObject {
  url: string
  alt?: string
  width?: number
  height?: number
}

interface LocationPoint {
  nameRo: string
  nameEn: string
  nameHe: string
  distance: string
  category: 'shopping' | 'education' | 'transport' | 'retail' | 'other'
  order: number
  id?: string | null
}

// FIXED: Updated PageProps for Next.js 15
type PageProps = {
  params: Promise<{ locale: string }>
}

// General helper function to transform any Media field to MediaObject
function transformMediaToObject(media: string | Media | null | undefined): MediaObject | undefined {
  if (!media) return undefined
  if (typeof media === 'string') {
    return {
      url: media,
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
function ensureString(value: string | null | undefined, fallback: string = ''): string {
  return value || fallback
}

// Helper function to transform breadcrumbs
function transformBreadcrumbs(breadcrumbs: any[] | null | undefined): any[] {
  if (!breadcrumbs || !Array.isArray(breadcrumbs)) return []
  return breadcrumbs.map((crumb) => ({
    ...crumb,
    labelRo: ensureString(crumb.labelRo),
    labelEn: ensureString(crumb.labelEn),
    labelHe: ensureString(crumb.labelHe),
    href: ensureString(crumb.href),
    id: nullToUndefined(crumb.id),
  }))
}

// Helper function to transform location points - updated to handle null
function transformLocationPoints(points: any[] | null | undefined): LocationPoint[] {
  if (!points || !Array.isArray(points)) return []
  return points
    .map((point) => ({
      nameRo: ensureString(point.nameRo),
      nameEn: ensureString(point.nameEn),
      nameHe: ensureString(point.nameHe),
      distance: ensureString(point.distance),
      category: point.category || 'other',
      order: point.order || 0,
      id: nullToUndefined(point.id),
    }))
    .sort((a, b) => a.order - b.order)
}

// Loading skeleton for Location page
function LocationPageSkeleton() {
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
      {/* Map Section Skeleton */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-100 rounded max-w-4xl mx-auto animate-pulse"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="relative aspect-[4/3] rounded-lg bg-gray-200 animate-pulse"></div>
              <div className="space-y-4">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-100 rounded-lg animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

async function LocationPageContent() {
  try {
    const payload = await getPayloadHMR({ config: configPromise })
    const locationData = await payload.findGlobal({
      slug: 'location-page',
    })

    if (!locationData) {
      // Return default data structure if no data found
      const defaultData = {
        heroSection: {
          isActive: true,
          mainTitleRo: 'Locație Strategică',
          mainTitleEn: 'Strategic Location',
          mainTitleHe: 'מיקום אסטרטגי',
          subtitleRo: 'Tunari, Ilfov',
          subtitleEn: 'Tunari, Ilfov',
          subtitleHe: 'טונארי, איילפוב',
          backgroundImage: { url: '/images/location-hero-bg.png' },
          breadcrumbs: [
            {
              labelRo: 'Acasă',
              labelEn: 'Home',
              labelHe: 'בית',
              href: '/',
              isActive: false,
            },
            {
              labelRo: 'Locație',
              labelEn: 'Location',
              labelHe: 'מיקום',
              href: '/location',
              isActive: true,
            },
          ],
        },
        locationMapSection: {
          isActive: false,
        },
      }

      return (
        <div>
          <LocationHero
            mainTitleRo={defaultData.heroSection.mainTitleRo}
            mainTitleEn={defaultData.heroSection.mainTitleEn}
            mainTitleHe={defaultData.heroSection.mainTitleHe}
            subtitleRo={defaultData.heroSection.subtitleRo}
            subtitleEn={defaultData.heroSection.subtitleEn}
            subtitleHe={defaultData.heroSection.subtitleHe}
            backgroundImage={defaultData.heroSection.backgroundImage}
            breadcrumbs={defaultData.heroSection.breadcrumbs}
          />
        </div>
      )
    }

    return (
      <div>
        {/* Hero Section */}
        {locationData?.heroSection?.isActive && locationData.heroSection.backgroundImage && (
          <LocationHero
            mainTitleRo={ensureString(locationData.heroSection.mainTitleRo)}
            mainTitleEn={ensureString(locationData.heroSection.mainTitleEn)}
            mainTitleHe={ensureString(locationData.heroSection.mainTitleHe)}
            subtitleRo={ensureString(locationData.heroSection.subtitleRo)}
            subtitleEn={ensureString(locationData.heroSection.subtitleEn)}
            subtitleHe={ensureString(locationData.heroSection.subtitleHe)}
            backgroundImage={transformMediaToObject(locationData.heroSection.backgroundImage)!}
            breadcrumbs={transformBreadcrumbs(locationData.heroSection.breadcrumbs)}
          />
        )}

        {/* Location Map Section */}
        {locationData?.locationMapSection?.isActive && (
          <LocationMap
            sectionTitleRo={ensureString(locationData.locationMapSection.sectionTitleRo)}
            sectionTitleEn={ensureString(locationData.locationMapSection.sectionTitleEn)}
            sectionTitleHe={ensureString(locationData.locationMapSection.sectionTitleHe)}
            sectionSubtitleRo={ensureString(locationData.locationMapSection.sectionSubtitleRo)}
            sectionSubtitleEn={ensureString(locationData.locationMapSection.sectionSubtitleEn)}
            sectionSubtitleHe={ensureString(locationData.locationMapSection.sectionSubtitleHe)}
            sectionDescriptionRo={ensureString(
              locationData.locationMapSection.sectionDescriptionRo,
            )}
            sectionDescriptionEn={ensureString(
              locationData.locationMapSection.sectionDescriptionEn,
            )}
            sectionDescriptionHe={ensureString(
              locationData.locationMapSection.sectionDescriptionHe,
            )}
            mapEmbedUrl={ensureString(locationData.locationMapSection.mapEmbedUrl)}
            locationPoints={transformLocationPoints(locationData.locationMapSection.locationPoints)}
            ctaButtonTextRo={ensureString(locationData.locationMapSection.ctaButtonTextRo)}
            ctaButtonTextEn={ensureString(locationData.locationMapSection.ctaButtonTextEn)}
            ctaButtonTextHe={ensureString(locationData.locationMapSection.ctaButtonTextHe)}
            ctaDescriptionRo={ensureString(locationData.locationMapSection.ctaDescriptionRo)}
            ctaDescriptionEn={ensureString(locationData.locationMapSection.ctaDescriptionEn)}
            ctaDescriptionHe={ensureString(locationData.locationMapSection.ctaDescriptionHe)}
          />
        )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching location data:', error)
    // Return safe fallback on error
    const fallbackData = {
      heroSection: {
        isActive: true,
        mainTitleRo: 'Locație Strategică',
        mainTitleEn: 'Strategic Location',
        mainTitleHe: 'מיקום אסטרטגי',
        subtitleRo: 'Tunari, Ilfov',
        subtitleEn: 'Tunari, Ilfov',
        subtitleHe: 'טונארי, איילפוב',
        backgroundImage: { url: '/images/location-hero-bg.png' },
        breadcrumbs: [
          {
            labelRo: 'Acasă',
            labelEn: 'Home',
            labelHe: 'בית',
            href: '/',
            isActive: false,
          },
          {
            labelRo: 'Locație',
            labelEn: 'Location',
            labelHe: 'מיקום',
            href: '/location',
            isActive: true,
          },
        ],
      },
    }

    return (
      <div>
        <LocationHero
          mainTitleRo={fallbackData.heroSection.mainTitleRo}
          mainTitleEn={fallbackData.heroSection.mainTitleEn}
          mainTitleHe={fallbackData.heroSection.mainTitleHe}
          subtitleRo={fallbackData.heroSection.subtitleRo}
          subtitleEn={fallbackData.heroSection.subtitleEn}
          subtitleHe={fallbackData.heroSection.subtitleHe}
          backgroundImage={fallbackData.heroSection.backgroundImage}
          breadcrumbs={fallbackData.heroSection.breadcrumbs}
        />
      </div>
    )
  }
}

export default async function LocationPage({ params }: PageProps) {
  const { locale } = await params // Await the params Promise

  return (
    <main className="min-h-screen">
      <Suspense fallback={<LocationPageSkeleton />}>
        <LocationPageContent />
      </Suspense>
    </main>
  )
}

// FIXED: Updated generateMetadata to handle Promise params and add multilingual support
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params // Await the params Promise

  const titles = {
    ro: 'Locație - Briza4Seasons',
    en: 'Location - Briza4Seasons',
    he: 'מיקום - בריזה4עונות',
  }

  const descriptions = {
    ro: 'Descoperă locația strategică a complexului de vile Briza4Seasons în Tunari, la doar 15 minute de centrul Bucureștiului.',
    en: 'Discover the strategic location of Briza4Seasons villa complex in Tunari, just 15 minutes from downtown Bucharest.',
    he: 'גלו את המיקום האסטרטגי של מתחם הוילות בריזה4סיזונס בטונארי, רק 15 דקות ממרכז בוקרשט.',
  }

  const keywords = {
    ro: 'locație, Tunari, București, complex vile, poziție strategică',
    en: 'location, Tunari, Bucharest, villa complex, strategic position',
    he: 'מיקום, טונארי, בוקרשט, מתחם וילות, עמדה אסטרטגית',
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.ro,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.ro,
    keywords: keywords[locale as keyof typeof keywords] || keywords.en,
  }
}

// generateStaticParams for the three supported locales
export function generateStaticParams() {
  return [{ locale: 'ro' }, { locale: 'en' }, { locale: 'he' }]
}
