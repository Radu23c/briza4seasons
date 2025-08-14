import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Route mapping - maps localized routes to your actual file structure
const routeMap = {
  // Romanian routes (rewrite to English structure)
  'ro/despre-noi': 'ro/about-us',
  'ro/contact': 'ro/contact',
  'ro/politica-cookie': 'ro/cookie-policy',
  'ro/galerie': 'ro/gallery',
  'ro/locatie': 'ro/location',
  'ro/articole': 'ro/posts',
  'ro/cautare': 'ro/search',
  'ro/termeni-si-conditii': 'ro/terms-and-conditions',
  'ro/vile': 'ro/villas',

  // Hebrew routes (rewrite to English structure)
  'he/אודותינו': 'he/about-us',
  'he/צור-קשר': 'he/contact',
  'he/מדיניות-עוגיות': 'he/cookie-policy',
  'he/גלריה': 'he/gallery',
  'he/מיקום': 'he/location',
  'he/פוסטים': 'he/posts',
  'he/חיפוש': 'he/search',
  'he/תנאים-והגבלות': 'he/terms-and-conditions',
  'he/וילות': 'he/villas',
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  console.log('🔍 Middleware triggered for:', pathname)

  // Remove leading slash for comparison
  const pathKey = pathname.substring(1)

  // Also try with decoded URI for Hebrew characters
  const decodedPathKey = decodeURIComponent(pathKey)

  console.log('🔑 Original path key:', pathKey)
  console.log('🔓 Decoded path key:', decodedPathKey)

  // Check if this path needs to be rewritten (try both encoded and decoded)
  let internalRoute = routeMap[pathKey as keyof typeof routeMap]

  if (!internalRoute && pathKey !== decodedPathKey) {
    // If original didn't match, try decoded version
    internalRoute = routeMap[decodedPathKey as keyof typeof routeMap]
    console.log('🔄 Trying decoded version...')
  }

  if (internalRoute) {
    console.log('✅ Found route mapping!')
    console.log(`📝 Rewriting ${pathname} to /${internalRoute}`)

    // Rewrite to the internal route structure
    const rewriteUrl = new URL(`/${internalRoute}`, request.url)

    return NextResponse.rewrite(rewriteUrl)
  } else {
    console.log('❌ No route mapping found for:', pathKey)
    if (pathKey !== decodedPathKey) {
      console.log('❌ Also tried decoded:', decodedPathKey)
    }
    console.log('Available routes:', Object.keys(routeMap))
  }

  // For all other routes, continue normally
  return NextResponse.next()
}

export const config = {
  // Match all paths except static files and API routes
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Any file with an extension (like .jpg, .png, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}
