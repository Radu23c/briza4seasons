import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import Homepage from '@/components/Home/Homepage'
import { Suspense } from 'react'
import type { Homepage as HomepageType } from '@/payload-types'

// Single loading component for entire homepage
function HomepageSkeleton() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-200 animate-pulse">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="h-16 bg-gray-300 rounded mb-8 max-w-4xl mx-auto"></div>
          <div className="h-12 bg-gray-300 rounded mb-16 max-w-xs mx-auto"></div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-300 rounded-lg px-8 py-6">
              <div className="h-12 bg-gray-400 rounded mb-2"></div>
              <div className="h-8 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Skeleton */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="absolute top-8 right-8 bg-gray-300 rounded-lg p-6 w-32 h-24 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-32 lg:w-64 lg:h-40 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="lg:pl-8 space-y-4">
              <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded w-64 animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded w-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview Skeleton */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-16 h-16 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-24 mx-auto animate-pulse"></div>
                <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
          <div className="aspect-[16/9] lg:aspect-[21/9] bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </section>

      {/* Benefits Skeleton */}
      <section className="relative min-h-screen flex">
        <div className="w-full lg:w-1/2 bg-gray-200 animate-pulse"></div>
        <div className="w-full lg:w-1/2 bg-gray-300 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg w-full space-y-8">
            <div className="h-6 bg-gray-400 rounded w-48 animate-pulse"></div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-6">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="h-8 bg-gray-400 rounded flex-1 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Skeleton */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            <div className="lg:pl-8 space-y-6">
              <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
              {[1, 2].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-16 bg-gray-100 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Skeleton */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-200 animate-pulse">
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen py-16">
          <div className="bg-white/95 rounded-lg shadow-2xl p-8 lg:p-12 w-full max-w-2xl">
            <div className="h-8 bg-gray-300 rounded mb-8 w-3/4 mx-auto animate-pulse"></div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
                  <div className="h-12 bg-gray-100 rounded animate-pulse"></div>
                </div>
              ))}
              <div>
                <div className="h-4 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
                <div className="h-32 bg-gray-100 rounded animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="h-12 bg-gray-300 rounded w-32 mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Gallery Skeleton - Full Width */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="text-center mb-16 px-4">
          <div className="h-12 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
        </div>
        <div className="px-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-[4/3] bg-gray-200 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Gallery Skeleton - Container Width */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="h-12 bg-gray-200 rounded w-80 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-[4/3] bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper function to convert Payload data to component-expected format
function convertHomepageData(payloadData: HomepageType): any {
  // Define defaults
  const defaults = {
    heroSection: {
      isActive: true,
      mainHeadingRo: 'Vizitează showroom-ul nostru și găsește locuința visurilor tale',
      mainHeadingEn: 'Visit our showroom and find the home of your dreams',
      mainHeadingHe: 'בקרו באולם התצוגה שלנו ומצאו את בית החלומות שלכם',
      ctaButton: {
        textRo: 'PROGRAMEAZĂ O VIZITĂ',
        textEn: 'SCHEDULE A VISIT',
        textHe: 'קבעו ביקור',
        link: '/contact',
      },
      projectNameRo: 'Ansamblul de vile Torga45',
      projectNameEn: 'Torga45 Villa Complex',
      projectNameHe: 'מתחם וילות טורגה45',
      projectSubtitleRo: 'Residence',
      projectSubtitleEn: 'Residence',
      projectSubtitleHe: 'מגורים',
      backgroundImage: null,
    },
    featuresSection: {
      isActive: false,
      projectNameRo: 'Torga45',
      projectNameEn: 'Torga45',
      projectNameHe: 'טורגה45',
      villaCount: 25,
      villaCountTextRo: 'VILE',
      villaCountTextEn: 'VILLAS',
      villaCountTextHe: 'וילות',
      mainHeadingRo: 'Complex Rezidențial',
      mainHeadingEn: 'Residential Complex',
      mainHeadingHe: 'מתחם מגורים',
      accentTextRo: 'Premium',
      accentTextEn: 'Premium',
      accentTextHe: 'פרימיום',
      subHeadingRo: 'În mijlocul naturii',
      subHeadingEn: 'In the heart of nature',
      subHeadingHe: 'בלב הטבע',
      detailsTextRo: 'Detalii complete',
      detailsTextEn: 'Complete details',
      detailsTextHe: 'פרטים מלאים',
      exteriorImage: '/images/default-exterior.jpg',
      interiorImage: '/images/default-interior.jpg',
      detailsLink: '/villa-complex',
    },
    featuresOverviewSection: {
      isActive: false,
      titleRo: 'Facilități',
      titleEn: 'Features',
      titleHe: 'מתקנים',
      featureItems: [],
      backgroundImage: '/images/default-bg.jpg',
      backgroundImageAltRo: 'Fundal facilități',
      backgroundImageAltEn: 'Features background',
      backgroundImageAltHe: 'רקע מתקנים',
    },
    benefitsSection: {
      isActive: false,
      sectionTitleRo: 'Beneficii',
      sectionTitleEn: 'Benefits',
      sectionTitleHe: 'יתרונות',
      benefits: [],
      mainImage: '/images/default-benefits.jpg',
      backgroundColor: '#ffffff',
      textColor: '#000000',
    },
    faqSection: {
      isActive: false,
      sectionTitleRo: 'Întrebări Frecvente',
      sectionTitleEn: 'FAQ',
      sectionTitleHe: 'שאלות נפוצות',
      mainHeadingRo: 'Răspunsuri la întrebările tale',
      mainHeadingEn: 'Answers to your questions',
      mainHeadingHe: 'תשובות לשאלות שלך',
      faqItems: [],
      backgroundImage: '/images/default-faq.jpg',
    },
    contactSection: {
      isActive: false,
      formTitleRo: 'Contactează-ne',
      formTitleEn: 'Contact Us',
      formTitleHe: 'צור קשר',
      nameFieldRo: 'Nume',
      nameFieldEn: 'Name',
      nameFieldHe: 'שם',
      emailFieldRo: 'Email',
      emailFieldEn: 'Email',
      emailFieldHe: 'אימייל',
      phoneFieldRo: 'Telefon',
      phoneFieldEn: 'Phone',
      phoneFieldHe: 'טלפון',
      messageFieldRo: 'Mesaj',
      messageFieldEn: 'Message',
      messageFieldHe: 'הודעה',
      submitButtonRo: 'Trimite',
      submitButtonEn: 'Send',
      submitButtonHe: 'שלח',
      backgroundImage: '/images/default-contact.jpg',
    },
    gallerySection: {
      isActive: false,
      sectionTitleRo: 'Galerie',
      sectionTitleEn: 'Gallery',
      sectionTitleHe: 'גלריה',
      sectionSubtitleRo: 'Imagini',
      sectionSubtitleEn: 'Images',
      sectionSubtitleHe: 'תמונות',
      galleryImages: [],
      enableLightbox: true,
    },
    imageGallerySection: {
      isActive: false,
      mainTitleRo: 'Galerie Imagini',
      mainTitleEn: 'Image Gallery',
      mainTitleHe: 'גלריית תמונות',
      subtitleRo: 'Colecție',
      subtitleEn: 'Collection',
      subtitleHe: 'אוסף',
      descriptionRo: 'Descriere galerie',
      descriptionEn: 'Gallery description',
      descriptionHe: 'תיאור הגלריה',
      images: [],
      enableLightbox: true,
    },
  }

  return {
    // Preserve all top-level properties from payloadData (including id, updatedAt, createdAt)
    ...payloadData,
    heroSection: {
      ...defaults.heroSection,
      ...payloadData.heroSection,
      isActive: payloadData.heroSection.isActive ?? defaults.heroSection.isActive,
    },
    featuresSection: {
      ...defaults.featuresSection,
      ...payloadData.featuresSection,
      isActive: payloadData.featuresSection.isActive ?? defaults.featuresSection.isActive,
    },
    featuresOverviewSection: {
      ...defaults.featuresOverviewSection,
      ...payloadData.featuresOverviewSection,
      isActive:
        payloadData.featuresOverviewSection.isActive ?? defaults.featuresOverviewSection.isActive,
    },
    benefitsSection: {
      ...defaults.benefitsSection,
      ...payloadData.benefitsSection,
      isActive: payloadData.benefitsSection.isActive ?? defaults.benefitsSection.isActive,
    },
    faqSection: {
      ...defaults.faqSection,
      ...payloadData.faqSection,
      isActive: payloadData.faqSection.isActive ?? defaults.faqSection.isActive,
    },
    contactSection: {
      ...defaults.contactSection,
      ...payloadData.contactSection,
      isActive: payloadData.contactSection.isActive ?? defaults.contactSection.isActive,
    },
    gallerySection: {
      ...defaults.gallerySection,
      ...payloadData.gallerySection,
      isActive: payloadData.gallerySection.isActive ?? defaults.gallerySection.isActive,
      enableLightbox:
        payloadData.gallerySection.enableLightbox ?? defaults.gallerySection.enableLightbox,
    },
    imageGallerySection: {
      ...defaults.imageGallerySection,
      ...payloadData.imageGallerySection,
      isActive: payloadData.imageGallerySection.isActive ?? defaults.imageGallerySection.isActive,
      enableLightbox:
        payloadData.imageGallerySection.enableLightbox ??
        defaults.imageGallerySection.enableLightbox,
    },
  }
}

// Create a function to generate default/fallback data
function createDefaultHomepageData(): HomepageType {
  return {
    id: 'fallback',
    heroSection: {
      isActive: true,
      mainHeadingRo: 'Vizitează showroom-ul nostru și găsește locuința visurilor tale',
      mainHeadingEn: 'Visit our showroom and find the home of your dreams',
      mainHeadingHe: 'בקרו באולם התצוגה שלנו ומצאו את בית החלומות שלכם',
      ctaButton: {
        textRo: 'PROGRAMEAZĂ O VIZITĂ',
        textEn: 'SCHEDULE A VISIT',
        textHe: 'קבעו ביקור',
        link: '/contact',
      },
      projectNameRo: 'Ansamblul de vile Torga45',
      projectNameEn: 'Torga45 Villa Complex',
      projectNameHe: 'מתחם וילות טורגה45',
      projectSubtitleRo: 'Residence',
      projectSubtitleEn: 'Residence',
      projectSubtitleHe: 'מגורים',
      backgroundImage: null,
    },
    featuresSection: {
      isActive: false,
      projectNameRo: 'Torga45',
      projectNameEn: 'Torga45',
      projectNameHe: 'טורגה45',
      villaCount: 25,
      villaCountTextRo: 'VILE',
      villaCountTextEn: 'VILLAS',
      villaCountTextHe: 'וילות',
      mainHeadingRo: 'Complex Rezidențial',
      mainHeadingEn: 'Residential Complex',
      mainHeadingHe: 'מתחם מגורים',
      accentTextRo: 'Premium',
      accentTextEn: 'Premium',
      accentTextHe: 'פרימיום',
      subHeadingRo: 'În mijlocul naturii',
      subHeadingEn: 'In the heart of nature',
      subHeadingHe: 'בלב הטבע',
      detailsTextRo: 'Detalii complete',
      detailsTextEn: 'Complete details',
      detailsTextHe: 'פרטים מלאים',
      exteriorImage: '/images/default-exterior.jpg',
      interiorImage: '/images/default-interior.jpg',
      detailsLink: '/villa-complex',
    },
    featuresOverviewSection: {
      isActive: false,
      titleRo: 'Facilități',
      titleEn: 'Features',
      titleHe: 'מתקנים',
      featureItems: [],
      backgroundImage: '/images/default-bg.jpg',
      backgroundImageAltRo: 'Fundal facilități',
      backgroundImageAltEn: 'Features background',
      backgroundImageAltHe: 'רקע מתקנים',
    },
    benefitsSection: {
      isActive: false,
      sectionTitleRo: 'Beneficii',
      sectionTitleEn: 'Benefits',
      sectionTitleHe: 'יתרונות',
      benefits: [],
      mainImage: '/images/default-benefits.jpg',
      backgroundColor: '#ffffff',
      textColor: '#000000',
    },
    faqSection: {
      isActive: false,
      sectionTitleRo: 'Întrebări Frecvente',
      sectionTitleEn: 'FAQ',
      sectionTitleHe: 'שאלות נפוצות',
      mainHeadingRo: 'Răspunsuri la întrebările tale',
      mainHeadingEn: 'Answers to your questions',
      mainHeadingHe: 'תשובות לשאלות שלך',
      faqItems: [],
      backgroundImage: '/images/default-faq.jpg',
    },
    contactSection: {
      isActive: false,
      formTitleRo: 'Contactează-ne',
      formTitleEn: 'Contact Us',
      formTitleHe: 'צור קשר',
      nameFieldRo: 'Nume',
      nameFieldEn: 'Name',
      nameFieldHe: 'שם',
      emailFieldRo: 'Email',
      emailFieldEn: 'Email',
      emailFieldHe: 'אימייל',
      phoneFieldRo: 'Telefon',
      phoneFieldEn: 'Phone',
      phoneFieldHe: 'טלפון',
      messageFieldRo: 'Mesaj',
      messageFieldEn: 'Message',
      messageFieldHe: 'הודעה',
      submitButtonRo: 'Trimite',
      submitButtonEn: 'Send',
      submitButtonHe: 'שלח',
      backgroundImage: '/images/default-contact.jpg',
    },
    gallerySection: {
      isActive: false,
      sectionTitleRo: 'Galerie',
      sectionTitleEn: 'Gallery',
      sectionTitleHe: 'גלריה',
      sectionSubtitleRo: 'Imagini',
      sectionSubtitleEn: 'Images',
      sectionSubtitleHe: 'תמונות',
      galleryImages: [],
      enableLightbox: true,
    },
    imageGallerySection: {
      isActive: false,
      mainTitleRo: 'Galerie Imagini',
      mainTitleEn: 'Image Gallery',
      mainTitleHe: 'גלריית תמונות',
      subtitleRo: 'Colecție',
      subtitleEn: 'Collection',
      subtitleHe: 'אוסף',
      descriptionRo: 'Descriere galerie',
      descriptionEn: 'Gallery description',
      descriptionHe: 'תיאור הגלריה',
      images: [],
      enableLightbox: true,
    },
    updatedAt: null,
    createdAt: null,
  }
}

async function HomepageContent() {
  try {
    const payload = await getPayloadHMR({ config: configPromise })

    const homepageData = await payload.findGlobal({
      slug: 'homepage',
    })

    if (!homepageData) {
      return <Homepage data={convertHomepageData(createDefaultHomepageData())} />
    }

    return <Homepage data={convertHomepageData(homepageData)} />
  } catch (error) {
    console.error('Error fetching homepage data:', error)

    // Return safe fallback on error using the same structure
    return <Homepage data={convertHomepageData(createDefaultHomepageData())} />
  }
}

export default function HomePage() {
  return (
    <Suspense fallback={<HomepageSkeleton />}>
      <HomepageContent />
    </Suspense>
  )
}
