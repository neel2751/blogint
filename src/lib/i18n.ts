/**
 * Lightweight region/locale support for the public marketing site.
 *
 * These locales drive *region + currency*, not translated copy — the site is
 * English everywhere, but `blogint.com/en-gb` defaults to GBP pricing,
 * `/en-eu` to EUR, and so on. Users can still override the currency manually.
 *
 * Pricing currencies come from the PlanPrice rows in the DB (usd / gbp / eur),
 * so the currency set here mirrors what the billing side actually sells.
 */

export const SUPPORTED_LOCALES = ['en-us', 'en-gb', 'en-eu'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en-us';

export const SUPPORTED_CURRENCIES = ['usd', 'gbp', 'eur'] as const;
export type Currency = (typeof SUPPORTED_CURRENCIES)[number];

export const DEFAULT_CURRENCY: Currency = 'usd';

/** Each locale's default currency and a human label for the region switcher. */
export const LOCALE_CONFIG: Record<
  Locale,
  { label: string; shortLabel: string; currency: Currency; flag: string }
> = {
  'en-us': { label: 'United States', shortLabel: 'USA', currency: 'usd', flag: '🇺🇸' },
  'en-gb': { label: 'United Kingdom', shortLabel: 'UK', currency: 'gbp', flag: '🇬🇧' },
  'en-eu': { label: 'Europe', shortLabel: 'EU', currency: 'eur', flag: '🇪🇺' },
};

export const CURRENCY_LABEL: Record<Currency, string> = {
  usd: 'USD ($)',
  gbp: 'GBP (£)',
  eur: 'EUR (€)',
};

/** ISO-3166 country code → locale. Anything unmapped falls back to DEFAULT_LOCALE. */
const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  US: 'en-us',
  GB: 'en-gb',
  UK: 'en-gb',
  // EU / EEA members → EUR pricing. Ireland is a Eurozone member, not the UK.
  IE: 'en-eu',
  DE: 'en-eu',
  FR: 'en-eu',
  ES: 'en-eu',
  IT: 'en-eu',
  NL: 'en-eu',
  BE: 'en-eu',
  AT: 'en-eu',
  PT: 'en-eu',
  FI: 'en-eu',
  GR: 'en-eu',
  LU: 'en-eu',
  SK: 'en-eu',
  SI: 'en-eu',
  EE: 'en-eu',
  LV: 'en-eu',
  LT: 'en-eu',
  CY: 'en-eu',
  MT: 'en-eu',
  HR: 'en-eu',
  BG: 'en-eu',
  CZ: 'en-eu',
  DK: 'en-eu',
  HU: 'en-eu',
  PL: 'en-eu',
  RO: 'en-eu',
  SE: 'en-eu',
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function isCurrency(value: string | undefined | null): value is Currency {
  return !!value && (SUPPORTED_CURRENCIES as readonly string[]).includes(value);
}

/** Map a detected ISO country code (e.g. from x-vercel-ip-country) to a locale. */
export function localeFromCountry(country: string | undefined | null): Locale {
  if (!country) return DEFAULT_LOCALE;
  return COUNTRY_TO_LOCALE[country.toUpperCase()] ?? DEFAULT_LOCALE;
}

export function currencyForLocale(locale: Locale): Currency {
  return LOCALE_CONFIG[locale].currency;
}

/** Currency symbol used for optimistic client-side formatting. */
export const CURRENCY_SYMBOL: Record<Currency, string> = {
  usd: '$',
  gbp: '£',
  eur: '€',
};
