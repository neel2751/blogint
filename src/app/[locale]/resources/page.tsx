import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Code2,
  FileText,
  Newspaper,
  LifeBuoy,
  Rss,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import type { Locale } from '@/lib/i18n';
import { localeHref } from '@/lib/marketing-links';
import { SectionLabel, Display } from '../_components/site-ui';
import { PageHero } from '../_components/marketing';
import { CtaBand } from '../_components/cta-band';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Docs, API reference, guides, changelog, and the BlogInt blog — everything you need to get the most out of the platform.',
};

const RESOURCES = [
  {
    icon: <BookOpen className="size-5" />,
    title: 'Documentation',
    body: 'Set up your first site, invite your team, and configure domains step by step.',
    href: '#',
  },
  {
    icon: <Code2 className="size-5" />,
    title: 'API reference',
    body: 'Every endpoint for posts, authors, categories, and search — with examples.',
    href: '#',
  },
  {
    icon: <FileText className="size-5" />,
    title: 'Guides',
    body: 'Practical playbooks for migrating, scheduling, and scaling your publishing.',
    href: '#',
  },
  {
    icon: <Rss className="size-5" />,
    title: 'Changelog',
    body: 'What shipped recently, from new API fields to dashboard improvements.',
    href: '#',
  },
  {
    icon: <Newspaper className="size-5" />,
    title: 'Blog',
    body: 'Ideas on content operations, headless publishing, and building with BlogInt.',
    href: '#',
  },
  {
    icon: <LifeBuoy className="size-5" />,
    title: 'Support',
    body: 'Reach the team for help with your account, billing, or integration.',
    href: '/contact',
  },
];

const POSTS = [
  { tag: 'Playbooks', title: 'Migrating from WordPress to a headless CMS', date: '18 June 2026' },
  { tag: 'Engineering', title: 'Rendering your BlogInt content in Next.js', date: '11 June 2026' },
  { tag: 'Product', title: 'Running ten client blogs from one dashboard', date: '4 June 2026' },
];

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const resolve = (href: string) => (href.startsWith('/') ? localeHref(locale, href) : href);
  return (
    <>
      <PageHero
        label="Resources"
        title="Everything to help you"
        emph="ship faster."
        subtitle="Docs, API references, and guides — plus the stories behind how teams publish with BlogInt."
      />

      <section className="px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Browse</SectionLabel>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r) => (
              <Link
                key={r.title}
                href={resolve(r.href)}
                className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-primary/10 text-primary grid size-10 place-items-center rounded-xl">
                    {r.icon}
                  </span>
                  <ArrowUpRight className="size-4 text-neutral-300 transition-colors group-hover:text-neutral-900" />
                </div>
                <h3 className="mt-4 text-lg font-medium tracking-tight text-neutral-900">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{r.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe7] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Latest from the blog</SectionLabel>
          <div className="mt-6">
            <Display lead="Sharper thinking," emph="fresh every week." />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {POSTS.map((p) => (
              <article key={p.title} className="group cursor-pointer">
                <div className="flex aspect-[16/10] items-end overflow-hidden rounded-2xl bg-gradient-to-br from-primary/25 to-neutral-900/80 p-5">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800">
                    {p.tag}
                  </span>
                </div>
                <h3 className="group-hover:text-primary mt-4 font-medium tracking-tight text-neutral-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">{p.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-neutral-200 bg-white p-10 text-center">
          <span className="bg-primary/10 text-primary grid size-11 place-items-center rounded-xl">
            <Sparkles className="size-5" />
          </span>
          <h3 className="mt-4 text-xl font-medium tracking-tight text-neutral-900">
            Want early access?
          </h3>
          <p className="mt-2 max-w-sm text-sm text-neutral-500">
            Join the waitlist to get an invite and a 14-day free trial when your spot opens up.
          </p>
          <Link
            href={localeHref(locale)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Join the waitlist
          </Link>
        </div>
      </section>

      <CtaBand title="Start building" emph="today." />
    </>
  );
}
