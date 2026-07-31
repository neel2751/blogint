import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SUPPORTED_LOCALES, isLocale, currencyForLocale } from '@/lib/i18n';
import { MarketingShell } from './_components/marketing-context';

export const metadata: Metadata = {
  title: {
    default: 'BlogInt — the headless multi-tenant blog CMS',
    template: '%s · BlogInt',
  },
  description:
    'BlogInt is the headless, multi-tenant blog CMS for modern teams. Run every site, author, and content API from one dashboard — with a 14-day free trial.',
};

// Pre-render the known locales; unknown segments 404 in the layout below.
export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <MarketingShell locale={locale} initialCurrency={currencyForLocale(locale)}>
      {children}
    </MarketingShell>
  );
}
