import type { Metadata } from 'next';

import type { Locale } from '@/lib/i18n';
import { localeHref } from '@/lib/marketing-links';
import { PageHero } from '../../_components/marketing';
import { CtaBand } from '../../_components/cta-band';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Ideas on content operations, headless publishing, and building with BlogInt.',
};

const POSTS = [
  { tag: 'Playbooks', title: 'Migrating from WordPress to a headless CMS', date: '18 June 2026' },
  { tag: 'Engineering', title: 'Rendering your BlogInt content in Next.js', date: '11 June 2026' },
  { tag: 'Product', title: 'Running ten client blogs from one dashboard', date: '4 June 2026' },
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <PageHero
        label="Resources"
        title="Sharper thinking,"
        emph="fresh every week."
        subtitle="Ideas on content operations, headless publishing, and building with BlogInt."
      />

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {POSTS.map((p) => (
              <article key={p.title} className="group">
                <div className="flex aspect-[16/10] items-end overflow-hidden rounded-2xl bg-gradient-to-br from-primary/25 to-neutral-900/80 p-5">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-medium tracking-tight text-neutral-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">{p.date}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-neutral-500">
            Full posts are coming soon — in the meantime,{' '}
            <a
              href={localeHref(locale, '/contact')}
              className="text-primary underline underline-offset-2"
            >
              get in touch
            </a>{' '}
            if you&apos;d like early access.
          </p>
        </div>
      </section>

      <CtaBand title="Get notified" emph="when we publish." />
    </>
  );
}
