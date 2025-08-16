// src/app/[locale]/(frontend)/contact/page.tsx - SERVER COMPONENT
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import ContactHero from '@/components/Contact/ContactHero'
import ContactForm from '@/components/Contact/ContactForm'
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

interface BreadcrumbItem {
  labelRo: string
  labelEn: string
  labelHe: string
  href: string
  isActive: boolean
  id?: string
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
function transformBreadcrumbs(breadcrumbs: any[] | null | undefined): BreadcrumbItem[] {
  if (!breadcrumbs || !Array.isArray(breadcrumbs)) return []
  return breadcrumbs.map((crumb) => ({
    labelRo: ensureString(crumb.labelRo),
    labelEn: ensureString(crumb.labelEn),
    labelHe: ensureString(crumb.labelHe),
    href: ensureString(crumb.href),
    isActive: crumb.isActive || false,
    id: nullToUndefined(crumb.id),
  }))
}

// Loading skeleton for Contact page
function ContactPageSkeleton() {
  return (
    <div>
      {/* Hero Skeleton */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-200 animate-pulse">
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <div className="h-16 bg-gray-300 rounded mb-4 max-w-4xl mx-auto"></div>
            <div className="h-8 bg-gray-300 rounded max-w-md mx-auto mb-16"></div>
          </div>

          {/* Contact Cards Skeleton */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/90 rounded-lg p-8 text-center animate-pulse">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-6"></div>
                <div className="h-4 bg-gray-300 rounded mx-auto max-w-24 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mx-auto max-w-32"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section Skeleton */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="h-12 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-6 bg-gray-100 rounded animate-pulse"></div>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-100 rounded animate-pulse"></div>
                ))}
                <div className="h-12 bg-gray-200 rounded w-48 animate-pulse"></div>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="h-8 bg-gray-200 rounded w-2/3 mb-6 animate-pulse"></div>
                <div className="aspect-[4/3] bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

async function ContactPageContent() {
  try {
    const payload = await getPayloadHMR({ config: configPromise })
    const contactData = await payload.findGlobal({
      slug: 'contact-page',
    })

    if (!contactData) {
      // Return default data structure if no data found
      const defaultData = {
        heroSection: {
          isActive: true,
          mainTitleRo: 'Contactează-ne',
          mainTitleEn: 'Contact Us',
          mainTitleHe: 'צור קשר',
          subtitleRo: 'SUNTEM AICI PENTRU TINE',
          subtitleEn: 'WE ARE HERE FOR YOU',
          subtitleHe: 'אנחנו כאן בשבילך',
          backgroundImage: { url: '/images/home-hero-bg.jpg' },
          breadcrumbs: [
            {
              labelRo: 'Acasă',
              labelEn: 'Home',
              labelHe: 'בית',
              href: '/',
              isActive: false,
            },
            {
              labelRo: 'Contact',
              labelEn: 'Contact',
              labelHe: 'צור קשר',
              href: '/contact',
              isActive: true,
            },
          ],
        },
        contactInfoSection: {
          isActive: true,
          addressTitleRo: 'Adresa',
          addressTitleEn: 'Address',
          addressTitleHe: 'כתובת',
          phoneTitleRo: 'Telefon',
          phoneTitleEn: 'Phone',
          phoneTitleHe: 'טלפון',
          emailTitleRo: 'Email',
          emailTitleEn: 'Email',
          emailTitleHe: 'אימייל',
          fullAddressRo: 'Intrarea Mesteacănului, Otopeni',
          fullAddressEn: 'Intrarea Mesteacănului, Otopeni',
          fullAddressHe: '23 אוגוסט, אוטופיני',
          cityRegionRo: 'București / Ilfov',
          cityRegionEn: 'Bucharest / Ilfov',
          cityRegionHe: 'בוקרשט / איילפוב',
          postalCode: '075100',
          phoneNumber: '+40 729 005 624',
          email: 'blissimobiliare@briza4seasons.ro',
        },
        contactFormSection: {
          isActive: false,
        },
        representativeSection: {
          isActive: false,
        },
      }

      return (
        <div>
          <ContactHero
            mainTitleRo={defaultData.heroSection.mainTitleRo}
            mainTitleEn={defaultData.heroSection.mainTitleEn}
            mainTitleHe={defaultData.heroSection.mainTitleHe}
            subtitleRo={defaultData.heroSection.subtitleRo}
            subtitleEn={defaultData.heroSection.subtitleEn}
            subtitleHe={defaultData.heroSection.subtitleHe}
            backgroundImage={defaultData.heroSection.backgroundImage}
            breadcrumbs={defaultData.heroSection.breadcrumbs}
            addressTitleRo={defaultData.contactInfoSection.addressTitleRo}
            addressTitleEn={defaultData.contactInfoSection.addressTitleEn}
            addressTitleHe={defaultData.contactInfoSection.addressTitleHe}
            phoneTitleRo={defaultData.contactInfoSection.phoneTitleRo}
            phoneTitleEn={defaultData.contactInfoSection.phoneTitleEn}
            phoneTitleHe={defaultData.contactInfoSection.phoneTitleHe}
            emailTitleRo={defaultData.contactInfoSection.emailTitleRo}
            emailTitleEn={defaultData.contactInfoSection.emailTitleEn}
            emailTitleHe={defaultData.contactInfoSection.emailTitleHe}
            fullAddressRo={defaultData.contactInfoSection.fullAddressRo}
            fullAddressEn={defaultData.contactInfoSection.fullAddressEn}
            fullAddressHe={defaultData.contactInfoSection.fullAddressHe}
            cityRegionRo={defaultData.contactInfoSection.cityRegionRo}
            cityRegionEn={defaultData.contactInfoSection.cityRegionEn}
            cityRegionHe={defaultData.contactInfoSection.cityRegionHe}
            phoneNumber={defaultData.contactInfoSection.phoneNumber}
            email={defaultData.contactInfoSection.email}
          />
        </div>
      )
    }

    return (
      <div>
        {/* Hero Section */}
        {contactData?.heroSection?.isActive && contactData.heroSection.backgroundImage && (
          <ContactHero
            mainTitleRo={ensureString(contactData.heroSection.mainTitleRo)}
            mainTitleEn={ensureString(contactData.heroSection.mainTitleEn)}
            mainTitleHe={ensureString(contactData.heroSection.mainTitleHe)}
            subtitleRo={ensureString(contactData.heroSection.subtitleRo)}
            subtitleEn={ensureString(contactData.heroSection.subtitleEn)}
            subtitleHe={ensureString(contactData.heroSection.subtitleHe)}
            backgroundImage={transformMediaToObject(contactData.heroSection.backgroundImage)!}
            breadcrumbs={transformBreadcrumbs(contactData.heroSection.breadcrumbs)}
            addressTitleRo={ensureString(contactData.contactInfoSection?.addressTitleRo)}
            addressTitleEn={ensureString(contactData.contactInfoSection?.addressTitleEn)}
            addressTitleHe={ensureString(contactData.contactInfoSection?.addressTitleHe)}
            phoneTitleRo={ensureString(contactData.contactInfoSection?.phoneTitleRo)}
            phoneTitleEn={ensureString(contactData.contactInfoSection?.phoneTitleEn)}
            phoneTitleHe={ensureString(contactData.contactInfoSection?.phoneTitleHe)}
            emailTitleRo={ensureString(contactData.contactInfoSection?.emailTitleRo)}
            emailTitleEn={ensureString(contactData.contactInfoSection?.emailTitleEn)}
            emailTitleHe={ensureString(contactData.contactInfoSection?.emailTitleHe)}
            fullAddressRo={ensureString(contactData.contactInfoSection?.fullAddressRo)}
            fullAddressEn={ensureString(contactData.contactInfoSection?.fullAddressEn)}
            fullAddressHe={ensureString(contactData.contactInfoSection?.fullAddressHe)}
            cityRegionRo={ensureString(contactData.contactInfoSection?.cityRegionRo)}
            cityRegionEn={ensureString(contactData.contactInfoSection?.cityRegionEn)}
            cityRegionHe={ensureString(contactData.contactInfoSection?.cityRegionHe)}
            phoneNumber={ensureString(contactData.contactInfoSection?.phoneNumber)}
            email={ensureString(contactData.contactInfoSection?.email)}
          />
        )}

        {/* Contact Form Section */}
        {contactData?.contactFormSection?.isActive &&
          contactData?.representativeSection?.isActive && (
            <ContactForm
              formTitleRo={ensureString(contactData.contactFormSection.formTitleRo)}
              formTitleEn={ensureString(contactData.contactFormSection.formTitleEn)}
              formTitleHe={ensureString(contactData.contactFormSection.formTitleHe)}
              formDescriptionRo={ensureString(contactData.contactFormSection.formDescriptionRo)}
              formDescriptionEn={ensureString(contactData.contactFormSection.formDescriptionEn)}
              formDescriptionHe={ensureString(contactData.contactFormSection.formDescriptionHe)}
              namePlaceholderRo={ensureString(contactData.contactFormSection.namePlaceholderRo)}
              namePlaceholderEn={ensureString(contactData.contactFormSection.namePlaceholderEn)}
              namePlaceholderHe={ensureString(contactData.contactFormSection.namePlaceholderHe)}
              emailPlaceholderRo={ensureString(contactData.contactFormSection.emailPlaceholderRo)}
              emailPlaceholderEn={ensureString(contactData.contactFormSection.emailPlaceholderEn)}
              emailPlaceholderHe={ensureString(contactData.contactFormSection.emailPlaceholderHe)}
              phonePlaceholderRo={ensureString(contactData.contactFormSection.phonePlaceholderRo)}
              phonePlaceholderEn={ensureString(contactData.contactFormSection.phonePlaceholderEn)}
              phonePlaceholderHe={ensureString(contactData.contactFormSection.phonePlaceholderHe)}
              messagePlaceholderRo={ensureString(
                contactData.contactFormSection.messagePlaceholderRo,
              )}
              messagePlaceholderEn={ensureString(
                contactData.contactFormSection.messagePlaceholderEn,
              )}
              messagePlaceholderHe={ensureString(
                contactData.contactFormSection.messagePlaceholderHe,
              )}
              submitButtonRo={ensureString(contactData.contactFormSection.submitButtonRo)}
              submitButtonEn={ensureString(contactData.contactFormSection.submitButtonEn)}
              submitButtonHe={ensureString(contactData.contactFormSection.submitButtonHe)}
              sendingButtonRo={ensureString(contactData.contactFormSection.sendingButtonRo)}
              sendingButtonEn={ensureString(contactData.contactFormSection.sendingButtonEn)}
              sendingButtonHe={ensureString(contactData.contactFormSection.sendingButtonHe)}
              successMessageRo={ensureString(contactData.contactFormSection.successMessageRo)}
              successMessageEn={ensureString(contactData.contactFormSection.successMessageEn)}
              successMessageHe={ensureString(contactData.contactFormSection.successMessageHe)}
              errorMessageRo={ensureString(contactData.contactFormSection.errorMessageRo)}
              errorMessageEn={ensureString(contactData.contactFormSection.errorMessageEn)}
              errorMessageHe={ensureString(contactData.contactFormSection.errorMessageHe)}
              connectionErrorRo={ensureString(contactData.contactFormSection.connectionErrorRo)}
              connectionErrorEn={ensureString(contactData.contactFormSection.connectionErrorEn)}
              connectionErrorHe={ensureString(contactData.contactFormSection.connectionErrorHe)}
              representativeTitleRo={ensureString(contactData.representativeSection.sectionTitleRo)}
              representativeTitleEn={ensureString(contactData.representativeSection.sectionTitleEn)}
              representativeTitleHe={ensureString(contactData.representativeSection.sectionTitleHe)}
              showLargerMapRo={ensureString(contactData.representativeSection.showLargerMapRo)}
              showLargerMapEn={ensureString(contactData.representativeSection.showLargerMapEn)}
              showLargerMapHe={ensureString(contactData.representativeSection.showLargerMapHe)}
              mapEmbedUrl={ensureString(contactData.representativeSection.mapEmbedUrl)}
              mapTitle={ensureString(contactData.representativeSection.mapTitle)}
              fullAddressRo={ensureString(contactData.contactInfoSection?.fullAddressRo)}
              fullAddressEn={ensureString(contactData.contactInfoSection?.fullAddressEn)}
              fullAddressHe={ensureString(contactData.contactInfoSection?.fullAddressHe)}
              cityRegionRo={ensureString(contactData.contactInfoSection?.cityRegionRo)}
              cityRegionEn={ensureString(contactData.contactInfoSection?.cityRegionEn)}
              cityRegionHe={ensureString(contactData.contactInfoSection?.cityRegionHe)}
              postalCode={ensureString(contactData.contactInfoSection?.postalCode)}
              phoneNumber={ensureString(contactData.contactInfoSection?.phoneNumber)}
              email={ensureString(contactData.contactInfoSection?.email)}
            />
          )}
      </div>
    )
  } catch (error) {
    console.error('Error fetching contact data:', error)
    // Return safe fallback on error
    const fallbackData = {
      heroSection: {
        isActive: true,
        mainTitleRo: 'Contactează-ne',
        mainTitleEn: 'Contact Us',
        mainTitleHe: 'צור קשר',
        subtitleRo: 'SUNTEM AICI PENTRU TINE',
        subtitleEn: 'WE ARE HERE FOR YOU',
        subtitleHe: 'אנחנו כאן בשבילך',
        backgroundImage: { url: '/images/home-hero-bg.jpg' },
        breadcrumbs: [
          {
            labelRo: 'Acasă',
            labelEn: 'Home',
            labelHe: 'בית',
            href: '/',
            isActive: false,
          },
          {
            labelRo: 'Contact',
            labelEn: 'Contact',
            labelHe: 'צור קשר',
            href: '/contact',
            isActive: true,
          },
        ],
      },
      contactInfoSection: {
        addressTitleRo: 'Adresa',
        addressTitleEn: 'Address',
        addressTitleHe: 'כתובת',
        phoneTitleRo: 'Telefon',
        phoneTitleEn: 'Phone',
        phoneTitleHe: 'טלפון',
        emailTitleRo: 'Email',
        emailTitleEn: 'Email',
        emailTitleHe: 'אימייל',
        fullAddressRo: 'Intrarea Mesteacănului, Otopeni',
        fullAddressEn: 'Intrarea Mesteacănului, Otopeni',
        fullAddressHe: '23 אוגוסט, אוטופיני',
        cityRegionRo: 'București / Ilfov',
        cityRegionEn: 'Bucharest / Ilfov',
        cityRegionHe: 'בוקרשט / איילפוב',
        phoneNumber: '+40 729 005 624',
        email: 'blissimobiliare@briza4seasons.ro',
      },
    }

    return (
      <div>
        <ContactHero
          mainTitleRo={fallbackData.heroSection.mainTitleRo}
          mainTitleEn={fallbackData.heroSection.mainTitleEn}
          mainTitleHe={fallbackData.heroSection.mainTitleHe}
          subtitleRo={fallbackData.heroSection.subtitleRo}
          subtitleEn={fallbackData.heroSection.subtitleEn}
          subtitleHe={fallbackData.heroSection.subtitleHe}
          backgroundImage={fallbackData.heroSection.backgroundImage}
          breadcrumbs={fallbackData.heroSection.breadcrumbs}
          addressTitleRo={fallbackData.contactInfoSection.addressTitleRo}
          addressTitleEn={fallbackData.contactInfoSection.addressTitleEn}
          addressTitleHe={fallbackData.contactInfoSection.addressTitleHe}
          phoneTitleRo={fallbackData.contactInfoSection.phoneTitleRo}
          phoneTitleEn={fallbackData.contactInfoSection.phoneTitleEn}
          phoneTitleHe={fallbackData.contactInfoSection.phoneTitleHe}
          emailTitleRo={fallbackData.contactInfoSection.emailTitleRo}
          emailTitleEn={fallbackData.contactInfoSection.emailTitleEn}
          emailTitleHe={fallbackData.contactInfoSection.emailTitleHe}
          fullAddressRo={fallbackData.contactInfoSection.fullAddressRo}
          fullAddressEn={fallbackData.contactInfoSection.fullAddressEn}
          fullAddressHe={fallbackData.contactInfoSection.fullAddressHe}
          cityRegionRo={fallbackData.contactInfoSection.cityRegionRo}
          cityRegionEn={fallbackData.contactInfoSection.cityRegionEn}
          cityRegionHe={fallbackData.contactInfoSection.cityRegionHe}
          phoneNumber={fallbackData.contactInfoSection.phoneNumber}
          email={fallbackData.contactInfoSection.email}
        />
      </div>
    )
  }
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params // Await the params Promise

  return (
    <main className="min-h-screen">
      <Suspense fallback={<ContactPageSkeleton />}>
        <ContactPageContent />
      </Suspense>
    </main>
  )
}

// FIXED: Updated generateMetadata to handle Promise params
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params // Await the params Promise

  const titles = {
    ro: 'Contact - Briza4Seasons',
    en: 'Contact - Briza4Seasons',
    he: 'צור קשר - בריזה4עונות',
  }

  const descriptions = {
    ro: 'Contactați-ne pentru orice întrebări despre ansamblul rezidențial Briza4Seasons. Suntem aici pentru dumneavoastră!',
    en: 'Contact us for any questions about Briza4Seasons residential complex. We are here for you!',
    he: 'צרו איתנו קשר עבור כל שאלה על מתחם המגורים בריזה4סיזונס. אנחנו כאן בשבילכם!',
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.ro,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.ro,
  }
}

// generateStaticParams doesn't need to be changed
export function generateStaticParams() {
  return [{ locale: 'ro' }, { locale: 'en' }, { locale: 'he' }]
}
