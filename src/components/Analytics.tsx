'use client'

import { useEffect } from 'react'
import { useCookies } from './CookieProvider'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function Analytics() {
  const { isAccepted } = useCookies()

  useEffect(() => {
    if (isAccepted && typeof window !== 'undefined') {
      // Replace with your actual Google Analytics ID
      const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

      // Initialize Google Analytics
      const script1 = document.createElement('script')
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      script1.async = true
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_title: 'Briza4Seasons',
          page_location: window.location.href
        });
      `
      document.head.appendChild(script2)

      console.log('Analytics initialized for Briza4Seasons')

      return () => {
        // Cleanup scripts when component unmounts or consent changes
        try {
          if (document.head.contains(script1)) {
            document.head.removeChild(script1)
          }
          if (document.head.contains(script2)) {
            document.head.removeChild(script2)
          }
        } catch (error) {
          console.log('Script cleanup error:', error)
        }
      }
    }
  }, [isAccepted])

  return null
}
