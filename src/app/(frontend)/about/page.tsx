import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import AboutUsHero from '@/components/AboutUs/AboutUsHero'
import AboutUsContent from '@/components/AboutUs/AboutUsContent'
import { Suspense } from 'react'
import { Media } from '@/payload-types'

// Type definitions for better type safety
interface MediaObject {
  url: string
  alt?: string
  width?: number
  height?: number
}

interface AboutImage {
  image: MediaObject
  altTextRo?: string | null
  altTextEn?: string | null
  altTextHe?: string | null
  order: number
  id?: string | null
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
function transformBreadcrumbs(breadcrumbs: any[] | undefined): any[] {
  if (!breadcrumbs) return []

  return breadcrumbs.map((crumb) => ({
    ...crumb,
    labelRo: ensureString(crumb.labelRo),
    labelEn: ensureString(crumb.labelEn),
    labelHe: ensureString(crumb.labelHe),
    href: ensureString(crumb.href),
    id: nullToUndefined(crumb.id),
  }))
}

// Helper function to transform content paragraphs
function transformContentParagraphs(paragraphs: any[] | undefined): any[] {
  if (!paragraphs) return []

  return paragraphs.map((paragraph) => ({
    ...paragraph,
    textRo: nullToUndefined(paragraph.textRo),
    textEn: nullToUndefined(paragraph.textEn),
    textHe: nullToUndefined(paragraph.textHe),
    id: nullToUndefined(paragraph.id),
  }))
}

// Loading skeleton for About Us page
function AboutUsPageSkeleton() {
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
    </div>
  )
}

async function AboutUsPageContent() {
  try {
    const payload = await getPayloadHMR({ config: configPromise })

    const aboutUsData = await payload.findGlobal({
      slug: 'about-us-page',
    })

    if (!aboutUsData) {
      // Return default data structure if no data found
      const defaultData = {
        heroSection: {
          isActive: true,
          mainTitleRo: 'Despre Ansamblul Rezidential Torga45',
          mainTitleEn: 'About Torga45 Residential Complex',
          mainTitleHe: 'אודות מתחם המגורים טורגה45',
          subtitleRo: 'CINE SUNTEM?',
          subtitleEn: 'WHO ARE WE?',
          subtitleHe: 'מי אנחנו?',
          backgroundImage: { url: '/images/about-hero-bg.jpg' },
          breadcrumbs: [
            {
              labelRo: 'ACASĂ',
              labelEn: 'HOME',
              labelHe: 'בית',
              href: '/',
              isActive: false,
            },
            {
              labelRo: 'DESPRE NOI',
              labelEn: 'ABOUT US',
              labelHe: 'אודותינו',
              href: '/about',
              isActive: true,
            },
          ],
        },
        aboutContentSection: {
          isActive: false,
          images: [],
          contentParagraphs: [],
        },
      }
      return (
        <div>
          <AboutUsHero
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

    // Helper function to transform images to proper MediaObject format
    const transformImages = (images: any[]): AboutImage[] => {
      return images
        .map((img) => {
          const transformedImage = transformMediaToObject(img.image)
          if (!transformedImage) return null

          return {
            image: transformedImage,
            altTextRo: nullToUndefined(img.altTextRo),
            altTextEn: nullToUndefined(img.altTextEn),
            altTextHe: nullToUndefined(img.altTextHe),
            order: img.order,
            id: nullToUndefined(img.id),
          } as AboutImage
        })
        .filter((img): img is AboutImage => img !== null)
    }

    return (
      <div>
        {/* Hero Section */}
        {aboutUsData?.heroSection?.isActive && aboutUsData.heroSection.backgroundImage && (
          <AboutUsHero
            mainTitleRo={ensureString(aboutUsData.heroSection.mainTitleRo)}
            mainTitleEn={ensureString(aboutUsData.heroSection.mainTitleEn)}
            mainTitleHe={ensureString(aboutUsData.heroSection.mainTitleHe)}
            subtitleRo={ensureString(aboutUsData.heroSection.subtitleRo)}
            subtitleEn={ensureString(aboutUsData.heroSection.subtitleEn)}
            subtitleHe={ensureString(aboutUsData.heroSection.subtitleHe)}
            backgroundImage={transformMediaToObject(aboutUsData.heroSection.backgroundImage)!}
            breadcrumbs={transformBreadcrumbs(aboutUsData.heroSection.breadcrumbs)}
          />
        )}

        {/* About Content Section */}
        {aboutUsData?.aboutContentSection?.isActive &&
          aboutUsData.aboutContentSection.images?.length > 0 &&
          aboutUsData.aboutContentSection.contentParagraphs?.length > 0 && (
            <AboutUsContent
              sectionTitleRo={ensureString(aboutUsData.aboutContentSection.sectionTitleRo)}
              sectionTitleEn={ensureString(aboutUsData.aboutContentSection.sectionTitleEn)}
              sectionTitleHe={ensureString(aboutUsData.aboutContentSection.sectionTitleHe)}
              mainHeadingRo={ensureString(aboutUsData.aboutContentSection.mainHeadingRo)}
              mainHeadingEn={ensureString(aboutUsData.aboutContentSection.mainHeadingEn)}
              mainHeadingHe={ensureString(aboutUsData.aboutContentSection.mainHeadingHe)}
              contentParagraphs={transformContentParagraphs(
                aboutUsData.aboutContentSection.contentParagraphs,
              )}
              images={transformImages(aboutUsData.aboutContentSection.images)}
            />
          )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching about us data:', error)

    // Return safe fallback on error
    const fallbackData = {
      heroSection: {
        isActive: true,
        mainTitleRo: 'Despre Ansamblul Rezidential Torga45',
        mainTitleEn: 'About Torga45 Residential Complex',
        mainTitleHe: 'אודות מתחם המגורים טורגה45',
        subtitleRo: 'CINE SUNTEM?',
        subtitleEn: 'WHO ARE WE?',
        subtitleHe: 'מי אנחנו?',
        backgroundImage: { url: '/images/about-hero-bg.jpg' },
        breadcrumbs: [
          {
            labelRo: 'ACASĂ',
            labelEn: 'HOME',
            labelHe: 'בית',
            href: '/',
            isActive: false,
          },
          {
            labelRo: 'DESPRE NOI',
            labelEn: 'ABOUT US',
            labelHe: 'אודותינו',
            href: '/about',
            isActive: true,
          },
        ],
      },
    }

    return (
      <div>
        <AboutUsHero
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

export default function AboutUsPage() {
  return (
    <Suspense fallback={<AboutUsPageSkeleton />}>
      <AboutUsPageContent />
    </Suspense>
  )
}

export const metadata = {
  title: 'About Us - Torga45 Residence',
  description: "Learn more about Torga45 residential complex and our project's story.",
}
