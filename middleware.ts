import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/request'

const routeMap = {
  // Romanian routes
  'ro/despre-noi': 'ro/about-us-internal',
  // Hebrew routes
  'he/אודותינו': 'he/about-us-internal',
  // Add other routes as needed
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Remove leading slash for comparison
  const pathKey = pathname.substring(1)

  if (routeMap[pathKey as keyof typeof routeMap]) {
    const internalRoute = routeMap[pathKey as keyof typeof routeMap]
    return NextResponse.rewrite(new URL(`/${internalRoute}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
