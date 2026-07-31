import type { Locale } from '@/lib/i18n';

/**
 * Client-safe URL helpers for the marketing site. These read only NEXT_PUBLIC_*
 * env vars (inlined at build time) so they can be used from client components —
 * never import the server-only `@/config/env` here.
 */

/** A path on the locale-prefixed marketing site, e.g. localeHref('en-gb', '/pricing'). */
export function localeHref(locale: Locale, path = ''): string {
  return `/${locale}${path}`;
}

/**
 * A path on the product host (app.blogint.com) — signup, login, dashboard.
 * Absolute so it works when the marketing site is served from a different
 * origin than the app. In dev both are localhost, so it stays same-origin.
 */
export function appHref(path: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? '';
  return `${base}${path}`;
}

/** Base origin the marketing frontend calls for the marketing API ('' = same origin). */
export function marketingApiBase(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
}
