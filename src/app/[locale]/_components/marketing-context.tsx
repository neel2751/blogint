'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

import { type Currency, type Locale } from '@/lib/i18n';
import { Navbar } from './navbar';
import { Footer } from './footer';

interface MarketingContextValue {
  locale: Locale;
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

const MarketingContext = createContext<MarketingContextValue | null>(null);

/**
 * Client shell for the whole marketing site: carries the active locale (from
 * the URL) and the display currency, which always follows the locale. Renders
 * the shared Navbar/Footer around the server-rendered page content.
 */
export function MarketingShell({
  locale,
  initialCurrency,
  children,
}: {
  locale: Locale;
  initialCurrency: Currency;
  children: React.ReactNode;
}) {
  const [currency, setCurrencyState] = useState<Currency>(initialCurrency);

  // Only called from the region switcher, to reflect the new locale's
  // currency immediately while the navigation to it is in flight.
  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
  }, []);

  const value = useMemo(
    () => ({ locale, currency, setCurrency }),
    [locale, currency, setCurrency],
  );

  return (
    <MarketingContext.Provider value={value}>
      <div className="min-h-screen bg-[#faf7f2] text-neutral-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </MarketingContext.Provider>
  );
}

export function useMarketing(): MarketingContextValue {
  const ctx = useContext(MarketingContext);
  if (!ctx) {
    throw new Error('useMarketing must be used within MarketingShell');
  }
  return ctx;
}
