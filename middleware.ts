import { NextResponse } from 'next/server'

export function middleware (request: NextResponse) {
  const isAuthorized = request.cookies.has('token')

  const goTo = (path: string) => new URL(path, request.url).toString()

  // Redirect to login page if not authorized
  if (!isAuthorized) {
    return NextResponse.redirect(goTo('/login'))
  }
}

export const config = {
  matcher: [
    '/',
    '/users/:path*',
    '/product/:path*',
    '/products:path*'
  ]
}
