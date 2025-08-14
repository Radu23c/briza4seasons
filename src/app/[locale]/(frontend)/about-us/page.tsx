import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import AboutUsHero from '@/components/AboutUs/AboutUsHero'
import AboutUsContent from '@/components/AboutUs/AboutUsContent'
import { Suspense } from 'react'
import { Media } from '@/payload-types'

// ADD THIS TYPE AT THE TOP
type PageProps = {
  params: { locale: string }
}

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

// Helper function to build localized URLs
function buildLocalizedUrl(routeKey: string, locale: string) {
  const routeMap = {
    home: { ro: '', en: '', he: '' },
    'about-us': { ro: 'despre-noi', en: 'about-us', he: 'אודותינו' },
  }

  const route =
    routeMap[routeKey as keyof typeof routeMap]?.[
      locale as keyof (typeof routeMap)[keyof typeof routeMap]
    ] || ''
  return `/${locale}${route ? `/${route}` : ''}`
}

// Helper function to transform breadcrumbs with localized URLs
function transformBreadcrumbs(breadcrumbs: any[] | null | undefined, locale: string): any[] {
  if (!breadcrumbs || !Array.isArray(breadcrumbs)) {
    // Return default breadcrumbs with localized URLs
    return [
      {
        labelRo: 'ACASĂ',
        labelEn: 'HOME',
        labelHe: 'בית',
        href: buildLocalizedUrl('home', locale),
        isActive: false,
      },
      {
        labelRo: 'DESPRE NOI',
        labelEn: 'ABOUT US',
        labelHe: 'אודותינו',
        href: buildLocalizedUrl('about-us', locale),
        isActive: true,
      },
    ]
  }

  return breadcrumbs.map((crumb) => {
    // Determine the route key based on the original href
    let routeKey = 'home'
    if (crumb.href === '/about-us' || crumb.href?.includes('about')) {
      routeKey = 'about-us'
    }

    return {
      ...crumb,
      labelRo: ensureString(crumb.labelRo),
      labelEn: ensureString(crumb.labelEn),
      labelHe: ensureString(crumb.labelHe),
      href: buildLocalizedUrl(routeKey, locale),
      id: nullToUndefined(crumb.id),
    }
  })
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

// Updated AboutUsPageContent to accept locale parameter
async function AboutUsPageContent({ locale }: { locale: string }) {
  try {
    const payload = await getPayloadHMR({ config: configPromise })

    const aboutUsData = await payload.findGlobal({
      slug: 'about-us-page',
    })

    if (!aboutUsData) {
      // Return default data structure with localized URLs
      const defaultData = {
        heroSection: {
          isActive: true,
          mainTitleRo: 'Despre Ansamblul Rezidential Briza4Seasons',
          mainTitleEn: 'About Briza4Seasons Residential Complex',
          mainTitleHe: 'אודות מתחם המגורים בריזה4סיזונס',
          subtitleRo: 'CINE SUNTEM?',
          subtitleEn: 'WHO ARE WE?',
          subtitleHe: 'מי אנחנו?',
          backgroundImage: { url: '/images/about-hero-bg.jpg' },
          breadcrumbs: transformBreadcrumbs(null, locale), // Use localized breadcrumbs
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
            breadcrumbs={transformBreadcrumbs(aboutUsData.heroSection.breadcrumbs, locale)}
          />
        )}

        {/* About Content Section */}
        {aboutUsData?.aboutContentSection?.isActive &&
          aboutUsData.aboutContentSection.images?.length &&
          aboutUsData.aboutContentSection.images.length > 0 &&
          aboutUsData.aboutContentSection.contentParagraphs?.length &&
          aboutUsData.aboutContentSection.contentParagraphs.length > 0 && (
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

    // Return safe fallback on error with localized URLs
    const fallbackData = {
      heroSection: {
        isActive: true,
        mainTitleRo: 'Despre Ansamblul Rezidential Briza4Seasons',
        mainTitleEn: 'About Briza4Seasons Residential Complex',
        mainTitleHe: 'אודות מתחם המגורים בריזה4סיזונס',
        subtitleRo: 'CINE SUNTEM?',
        subtitleEn: 'WHO ARE WE?',
        subtitleHe: 'מי אנחנו?',
        backgroundImage: { url: '/images/about-hero-bg.jpg' },
        breadcrumbs: transformBreadcrumbs(null, locale), // Use localized breadcrumbs
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

// CHANGE THIS FUNCTION SIGNATURE - ADD PARAMS AND PASS LOCALE
export default function AboutUsPage({ params: { locale } }: PageProps) {
  return (
    <Suspense fallback={<AboutUsPageSkeleton />}>
      <AboutUsPageContent locale={locale} />
    </Suspense>
  )
}

// REPLACE THE OLD METADATA EXPORT WITH THIS:
export function generateMetadata({ params }: PageProps) {
  const titles = {
    ro: 'Despre Noi - Bliss Imobiliare',
    en: 'About Us - Bliss Real Estate',
    he: 'אודותינו - בליס נדלן',
  }

  const descriptions = {
    ro: 'Aflați mai multe despre complexul rezidențial Briza4Seasons și povestea proiectului nostru.',
    en: "Learn more about Briza4Seasons residential complex and our project's story.",
    he: 'למדו עוד על מתחם המגורים בריזה4סיזונס והסיפור של הפרויקט שלנו.',
  }

  return {
    title: titles[params.locale as keyof typeof titles] || titles.ro,
    description: descriptions[params.locale as keyof typeof descriptions] || descriptions.ro,
  }
}

// ADD THIS NEW FUNCTION
export function generateStaticParams() {
  return [{ locale: 'ro' }, { locale: 'en' }, { locale: 'he' }]
}
