import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import AboutUsHero from '@/components/AboutUs/AboutUsHero'
import GallerySection from '@/components/Home/GallerySection'
import ImageGallerySection from '@/components/Home/ImageGallerySection'
import { Suspense } from 'react'
import type { Media as PayloadMedia, Homepage } from '@/payload-types'

// Types for CMS data - matching Payload's exact structure
interface RawGalleryImage {
  image: string | PayloadMedia
  caption?: {
    captionRo?: string | null
    captionEn?: string | null
    captionHe?: string | null
  }
  order?: number | null
  id?: string | null
}

// General helper function to transform any Media field to MediaObject
function transformMediaToObject(media: string | PayloadMedia | null | undefined): any {
  if (!media) return undefined

  if (typeof media === 'string') {
    return {
      url: media,
      alt: '',
    }
  }

  return {
    url: (media as PayloadMedia).url || '/images/default-image.jpg',
    alt: (media as PayloadMedia).alt || '',
    width: (media as PayloadMedia).width ?? undefined,
    height: (media as PayloadMedia).height ?? undefined,
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

// Helper function to convert raw gallery images to the expected format
function convertGalleryImages(rawImages: Homepage['gallerySection']['galleryImages']) {
  return rawImages.map((rawImage) => {
    const imageObject = transformMediaToObject(rawImage.image)

    const caption = rawImage.caption
      ? {
          captionRo: nullToUndefined(rawImage.caption.captionRo),
          captionEn: nullToUndefined(rawImage.caption.captionEn),
          captionHe: nullToUndefined(rawImage.caption.captionHe),
        }
      : undefined

    return {
      image: imageObject,
      caption,
      order: nullToUndefined(rawImage.order),
      id: nullToUndefined(rawImage.id),
    }
  })
}

function GalleryPageSkeleton() {
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

      {/* Gallery Section Skeleton */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-48 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section Skeleton */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded w-80 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-56 mx-auto mb-4 animate-pulse"></div>
            <div className="h-20 bg-gray-200 rounded w-full max-w-2xl mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

async function GalleryPageContent() {
  try {
    const payload = await getPayloadHMR({ config: configPromise })

    const [galleryData, homepageData] = await Promise.all([
      payload.findGlobal({ slug: 'gallery-page' }),
      payload.findGlobal({ slug: 'homepage' }),
    ])

    const defaultGalleryData = {
      heroSection: {
        isActive: true,
        mainTitleRo: 'Galeria Ansamblului Rezidential Torga45',
        mainTitleEn: 'Torga45 Residential Complex Gallery',
        mainTitleHe: 'גלריית מתחם המגורים טורגה45',
        subtitleRo: 'GALERIE FOTO',
        subtitleEn: 'PHOTO GALLERY',
        subtitleHe: 'גלריית תמונות',
        backgroundImage: { url: '/images/gallery-hero-bg.jpg' },
        breadcrumbs: [
          { labelRo: 'ACASĂ', labelEn: 'HOME', labelHe: 'בית', href: '/', isActive: false },
          {
            labelRo: 'GALERIE',
            labelEn: 'GALLERY',
            labelHe: 'גלריה',
            href: '/gallery',
            isActive: true,
          },
        ],
      },
    }

    const heroData = galleryData?.heroSection || defaultGalleryData.heroSection

    return (
      <div>
        {heroData?.isActive && heroData.backgroundImage && (
          <AboutUsHero
            mainTitleRo={ensureString(heroData.mainTitleRo)}
            mainTitleEn={ensureString(heroData.mainTitleEn)}
            mainTitleHe={ensureString(heroData.mainTitleHe)}
            subtitleRo={ensureString(heroData.subtitleRo)}
            subtitleEn={ensureString(heroData.subtitleEn)}
            subtitleHe={ensureString(heroData.subtitleHe)}
            backgroundImage={transformMediaToObject(heroData.backgroundImage)!}
            breadcrumbs={transformBreadcrumbs(heroData.breadcrumbs)}
          />
        )}

        {homepageData?.gallerySection?.isActive &&
          homepageData.gallerySection.galleryImages?.length > 0 && (
            <GallerySection
              sectionTitleRo={ensureString(homepageData.gallerySection.sectionTitleRo)}
              sectionTitleEn={ensureString(homepageData.gallerySection.sectionTitleEn)}
              sectionTitleHe={ensureString(homepageData.gallerySection.sectionTitleHe)}
              sectionSubtitleRo={ensureString(homepageData.gallerySection.sectionSubtitleRo)}
              sectionSubtitleEn={ensureString(homepageData.gallerySection.sectionSubtitleEn)}
              sectionSubtitleHe={ensureString(homepageData.gallerySection.sectionSubtitleHe)}
              galleryImages={convertGalleryImages(homepageData.gallerySection.galleryImages)}
              enableLightbox={nullToUndefined(homepageData.gallerySection.enableLightbox)}
            />
          )}

        {homepageData?.imageGallerySection?.isActive &&
          homepageData.imageGallerySection.images?.length > 0 && (
            <ImageGallerySection
              mainTitleRo={ensureString(homepageData.imageGallerySection.mainTitleRo)}
              mainTitleEn={ensureString(homepageData.imageGallerySection.mainTitleEn)}
              mainTitleHe={ensureString(homepageData.imageGallerySection.mainTitleHe)}
              subtitleRo={ensureString(homepageData.imageGallerySection.subtitleRo)}
              subtitleEn={ensureString(homepageData.imageGallerySection.subtitleEn)}
              subtitleHe={ensureString(homepageData.imageGallerySection.subtitleHe)}
              descriptionRo={ensureString(homepageData.imageGallerySection.descriptionRo)}
              descriptionEn={ensureString(homepageData.imageGallerySection.descriptionEn)}
              descriptionHe={ensureString(homepageData.imageGallerySection.descriptionHe)}
              images={convertGalleryImages(homepageData.imageGallerySection.images)}
              enableLightbox={nullToUndefined(homepageData.imageGallerySection.enableLightbox)}
            />
          )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching gallery data:', error)

    const fallbackData = {
      heroSection: {
        isActive: true,
        mainTitleRo: 'Galeria Ansamblului Rezidential Torga45',
        mainTitleEn: 'Torga45 Residential Complex Gallery',
        mainTitleHe: 'גלריית מתחם המגורים טורגה45',
        subtitleRo: 'GALERIE FOTO',
        subtitleEn: 'PHOTO GALLERY',
        subtitleHe: 'גלריית תמונות',
        backgroundImage: { url: '/images/gallery-hero-bg.jpg' },
        breadcrumbs: [
          { labelRo: 'ACASĂ', labelEn: 'HOME', labelHe: 'בית', href: '/', isActive: false },
          {
            labelRo: 'GALERIE',
            labelEn: 'GALLERY',
            labelHe: 'גלריה',
            href: '/gallery',
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

export default function GalleryPage() {
  return (
    <Suspense fallback={<GalleryPageSkeleton />}>
      <GalleryPageContent />
    </Suspense>
  )
}

export const metadata = {
  title: 'Gallery - Torga45 Residence',
  description: 'Explore the photo gallery of Torga45 residential complex.',
}
