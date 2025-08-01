import type React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { LanguageProvider } from '@/app/contexts/LanguageContext'
import LanguageToggle from '@/components/LanguageToggle'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import './globals.css'

// Configure the fonts with Next.js optimization
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Torga45 Residence',
  description: 'Ansamblul de vile Torga45 - Găsește locuința visurilor tale',
}

export const revalidate = 60

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          <LanguageToggle />
          <Header />
          {/* Add top padding to account for fixed header */}
          <main className="">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
