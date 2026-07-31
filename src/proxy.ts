import { NextResponse, type NextRequest } from 'next/server';

import { isLocale, localeFromCountry, type Locale } from '@/lib/i18n';

/**
 * Locale routing for the pure marketing site. Unlike the backend proxy, there
 * are no auth guards here — this app has no product routes, only the
 * locale-prefixed marketing pages.
 */

const LOCALE_COOKIE = 'NEXT_LOCALE';

// Dev-only: localhost never has a real edge in front of it, so
// x-vercel-ip-country/cf-ipcountry are never set and detection always falls
// back to the default locale. `?geo=GB` (or GEO_COUNTRY env var) lets you
// simulate a country locally without spoofing headers by hand. Takes
// precedence over the remembered-locale cookie so switching `?geo=` values
// actually does something.
function devGeoOverride(request: NextRequest): string | null {
  if (process.env.NODE_ENV === 'production') return null;
  return request.nextUrl.searchParams.get('geo') ?? process.env.GEO_COUNTRY ?? null;
}

function detectLocale(request: NextRequest): Locale {
  const devGeo = devGeoOverride(request);
  if (devGeo) return localeFromCountry(devGeo);

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  const country =
    request.headers.get('x-vercel-ip-country') ??
    request.headers.get('cf-ipcountry') ??
    request.headers.get('x-country-code');

  return localeFromCountry(country);
}

function withLocaleCookie(response: NextResponse, locale: Locale): NextResponse {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Legacy /website/* links → locale-prefixed equivalents.
  if (pathname === '/website' || pathname.startsWith('/website/')) {
    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname.slice('/website'.length)}`;
    url.searchParams.delete('geo');
    return withLocaleCookie(NextResponse.redirect(url), locale);
  }

  // Already locale-prefixed: pass through, refreshing the remembered locale.
  const firstSegment = pathname.split('/')[1];
  if (isLocale(firstSegment)) {
    return withLocaleCookie(NextResponse.next(), firstSegment);
  }

  // Root: send to the geo-detected locale home.
  if (pathname === '/') {
    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    url.searchParams.delete('geo');
    return withLocaleCookie(NextResponse.redirect(url), locale);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
