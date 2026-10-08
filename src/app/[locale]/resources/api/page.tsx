import type { Metadata } from 'next';

import type { Locale } from '@/lib/i18n';
import { localeHref } from '@/lib/marketing-links';
import { LegalPage, LegalSection } from '../../_components/legal';

export const metadata: Metadata = {
  title: 'API reference',
  description: 'Every endpoint for posts, authors, categories, and search — with examples.',
};

const ENDPOINTS: { method: string; path: string; body: string }[] = [
  { method: 'GET', path: '/api/v1/sites/:site/posts', body: 'List published posts, paginated and filterable by category or author.' },
  { method: 'GET', path: '/api/v1/sites/:site/posts/:slug', body: 'Fetch a single post by slug, including its full body and media.' },
  { method: 'GET', path: '/api/v1/sites/:site/authors', body: 'List authors on the site, with their public profile fields.' },
  { method: 'GET', path: '/api/v1/sites/:site/categories', body: 'List categories and the post count in each.' },
  { method: 'GET', path: '/api/v1/sites/:site/search', body: 'Full-text search across published posts via the `q` query param.' },
];

export default async function ApiReferencePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <LegalPage eyebrow="Resources" title="API" emphasis="reference." updated="8 October 2026">
      <LegalSection title="Base URL">
        <p>
          Every site exposes the same versioned REST API, scoped to that site:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-900 px-4 py-3 text-xs text-neutral-100">
          https://api.blogint.com/v1/sites/&#123;site&#125;
        </pre>
      </LegalSection>

      <LegalSection title="Authentication">
        <p>
          Generate an API key from Site Settings → API Keys, then send it as a bearer
          token on every request:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-900 px-4 py-3 text-xs text-neutral-100">
          Authorization: Bearer &#123;api_key&#125;
        </pre>
      </LegalSection>

      <LegalSection title="Endpoints">
        <div className="divide-y divide-neutral-200 overflow-hidden rounded-xl border border-neutral-200">
          {ENDPOINTS.map((e) => (
            <div key={e.path} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
              <span className="bg-primary/10 text-primary inline-flex w-fit shrink-0 items-center rounded-md px-2 py-0.5 font-mono text-[11px] font-medium">
                {e.method}
              </span>
              <code className="shrink-0 font-mono text-xs text-neutral-800">{e.path}</code>
              <span className="text-xs text-neutral-500">{e.body}</span>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="Rate limits">
        <p>
          API requests count against the monthly limit shown on your plan — see{' '}
          <a
            href={localeHref(locale, '/pricing')}
            className="text-primary underline underline-offset-2"
          >
            pricing
          </a>{' '}
          for plan limits, or top up API requests as a prepaid add-on from your dashboard.
        </p>
      </LegalSection>

      <LegalSection title="Need a hand integrating?">
        <p>
          Reach out via our{' '}
          <a
            href={localeHref(locale, '/contact')}
            className="text-primary underline underline-offset-2"
          >
            contact page
          </a>{' '}
          and we&apos;ll help you get the API wired up.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
