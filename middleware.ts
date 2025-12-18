import createMiddleware from 'next-intl/middleware';
import {type NextRequest, type NextResponse} from 'next/server';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'id'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en)/:path*']
};