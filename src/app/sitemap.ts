import type { MetadataRoute } from 'next';

import { SUPPORTED_LOCALES } from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001';

// Public marketing routes under each locale prefix. Legal pages are included
// but deprioritised — search engines should favour the product pages.
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/products', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/solutions', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/resources', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/book-a-demo', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/security', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/status', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency,
      priority,
    })),
  );
}
