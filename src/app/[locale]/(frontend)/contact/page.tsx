// src/app/[locale]/(frontend)/contact/page.tsx - SERVER COMPONENT
import { Suspense } from 'react'
import ContactPageClient from './ContactPageClient'

// FIXED: Updated PageProps for Next.js 15
type PageProps = {
  params: Promise<{ locale: string }>
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
              <div
                key={i}
                className="bg-white/90 rounded-full px-8 py-12 text-center animate-pulse"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mx-auto max-w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// FIXED: Updated to handle Promise params
export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params // Await the params Promise

  return (
    <Suspense fallback={<ContactPageSkeleton />}>
      <ContactPageClient />
    </Suspense>
  )
}

// FIXED: Updated generateMetadata to handle Promise params
export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params // Await the params Promise

  const titles = {
    ro: 'Contact - Bliss Imobiliare',
    en: 'Contact - Bliss Real Estate',
    he: 'צור קשר - בליס נדלן',
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
