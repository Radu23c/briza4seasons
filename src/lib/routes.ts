// lib/routes.ts
export const routeTranslations = {
  // Home page
  home: {
    ro: '',
    en: '',
    he: '',
  },

  // About Us
  'about-us': {
    ro: 'despre-noi',
    en: 'about-us',
    he: 'אודותינו',
  },

  // Contact
  contact: {
    ro: 'contact',
    en: 'contact',
    he: 'צור-קשר',
  },

  // Cookie Policy
  'cookie-policy': {
    ro: 'politica-cookie',
    en: 'cookie-policy',
    he: 'מדיניות-עוגיות',
  },

  // Gallery
  gallery: {
    ro: 'galerie',
    en: 'gallery',
    he: 'גלריה',
  },

  // Location
  location: {
    ro: 'locatie',
    en: 'location',
    he: 'מיקום',
  },

  // Posts/Articles
  posts: {
    ro: 'articole',
    en: 'posts',
    he: 'פוסטים',
  },

  // Search
  search: {
    ro: 'cautare',
    en: 'search',
    he: 'חיפוש',
  },

  // Terms and Conditions
  'terms-and-conditions': {
    ro: 'termeni-si-conditii',
    en: 'terms-and-conditions',
    he: 'תנאים-והגבלות',
  },

  // Villas
  villas: {
    ro: 'vile',
    en: 'villas',
    he: 'וילות',
  },
}

export type RouteKey = keyof typeof routeTranslations
export type Locale = 'ro' | 'en' | 'he'

// Helper function to get localized route
export function getLocalizedRoute(routeKey: RouteKey, locale: Locale): string {
  return routeTranslations[routeKey][locale]
}

// Helper function to build full path with locale
export function buildLocalizedPath(routeKey: RouteKey, locale: Locale): string {
  const localizedRoute = getLocalizedRoute(routeKey, locale)
  if (localizedRoute === '') {
    return `/${locale}`
  }
  return `/${locale}/${localizedRoute}`
}

// Helper function to get route key from pathname
export function getRouteKeyFromPath(pathname: string): RouteKey | null {
  const pathSegments = pathname.split('/').filter(Boolean)

  // Handle home page
  if (pathSegments.length === 1 && ['ro', 'en', 'he'].includes(pathSegments[0])) {
    return 'home'
  }

  const routePath = pathSegments[1] // Skip locale segment

  // If no route path, it's home
  if (!routePath) {
    return 'home'
  }

  for (const [routeKey, translations] of Object.entries(routeTranslations)) {
    if (Object.values(translations).includes(routePath)) {
      return routeKey as RouteKey
    }
  }

  return null
}

// Navigation helper for generating menu links
export function getNavigation(locale: Locale) {
  return [
    {
      key: 'home',
      href: buildLocalizedPath('home', locale),
      label: {
        ro: 'Acasă',
        en: 'Home',
        he: 'בית',
      }[locale],
    },
    {
      key: 'about-us',
      href: buildLocalizedPath('about-us', locale),
      label: {
        ro: 'Despre Noi',
        en: 'About Us',
        he: 'אודותינו',
      }[locale],
    },
    {
      key: 'villas',
      href: buildLocalizedPath('villas', locale),
      label: {
        ro: 'Vile',
        en: 'Villas',
        he: 'וילות',
      }[locale],
    },
    {
      key: 'gallery',
      href: buildLocalizedPath('gallery', locale),
      label: {
        ro: 'Galerie',
        en: 'Gallery',
        he: 'גלריה',
      }[locale],
    },
    {
      key: 'location',
      href: buildLocalizedPath('location', locale),
      label: {
        ro: 'Locație',
        en: 'Location',
        he: 'מיקום',
      }[locale],
    },
    {
      key: 'posts',
      href: buildLocalizedPath('posts', locale),
      label: {
        ro: 'Articole',
        en: 'Posts',
        he: 'פוסטים',
      }[locale],
    },
    {
      key: 'contact',
      href: buildLocalizedPath('contact', locale),
      label: {
        ro: 'Contact',
        en: 'Contact',
        he: 'צור קשר',
      }[locale],
    },
  ]
}

// Reverse mapping for finding route key from any language path
export const reverseRouteMap: Record<string, RouteKey> = {}

// Build reverse mapping on module load
Object.entries(routeTranslations).forEach(([routeKey, translations]) => {
  Object.values(translations).forEach((route) => {
    if (route !== '') {
      reverseRouteMap[route] = routeKey as RouteKey
    }
  })
})
