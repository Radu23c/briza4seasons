// app/(frontend)/cookie-policy/page.tsx
import type { Metadata } from 'next'
import PrivacyPolicyClient from '@/components/PrivacyPolicyClient'

// Metadata for SEO (can only be in server components)
export const metadata: Metadata = {
  title: 'Politica de Confidențialitate | Briza4Seasons',
  description:
    'Politica de confidențialitate pentru Briza4Seasons - Cum colectăm, utilizăm și protejăm datele dvs. personale.',
  robots: 'index, follow',
}

// Server component that renders the client component
export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
}
