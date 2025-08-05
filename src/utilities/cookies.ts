export const CookieUtils = {
  // Check if cookies are accepted
  isAccepted: (): boolean => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('cookieConsent') === 'accepted'
  },

  // Check if user has made any choice
  hasConsent: (): boolean => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('cookieConsent') !== null
  },

  // Get consent status
  getConsentStatus: (): 'accepted' | 'declined' | null => {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('cookieConsent') as 'accepted' | 'declined' | null
  },

  // Clear consent (for testing or reset)
  clearConsent: (): void => {
    if (typeof window === 'undefined') return
    localStorage.removeItem('cookieConsent')
    localStorage.removeItem('cookieConsentDate')
  },

  // Initialize tracking only if cookies are accepted
  initializeTracking: (): void => {
    if (!CookieUtils.isAccepted()) return

    // Initialize Google Analytics or other tracking
    console.log('Initializing tracking services for Briza4Seasons...')

    // You can add more tracking services here
    // Example: Facebook Pixel, Hotjar, etc.
  },
}
