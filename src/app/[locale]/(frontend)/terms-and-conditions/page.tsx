// app/(frontend)/terms-conditions/page.tsx
import type { Metadata } from 'next'
import TermsAndConditionsClient from '@/components/TermsAndCoditionsClient'

// Metadata for SEO (can only be in server components)
export const metadata: Metadata = {
  title: 'Termeni și Condiții | Briza4Seasons',
  description:
    'Termenii și condițiile de utilizare pentru site-ul Briza4Seasons - Regulile și condițiile pentru utilizarea platformei noastre.',
  robots: 'index, follow',
  alternates: {
    languages: {
      ro: '/ro/terms-and-conditions',
      en: '/en/terms-and-conditions',
      he: '/he/terms-and-conditions',
    },
  },
}

// Server component that renders the client component
export default function TermsConditionsPage() {
  return <TermsAndConditionsClient />
}
