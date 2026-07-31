import type { Metadata } from 'next';
import {
  Globe,
  PenLine,
  Code2,
  BarChart3,
  Users,
  Rss,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';

import type { Locale } from '@/lib/i18n';
import { localeHref, appHref } from '@/lib/marketing-links';
import { SectionLabel, Display } from '../_components/site-ui';
import { PageHero, IconCard } from '../_components/marketing';
import { CtaBand } from '../_components/cta-band';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Everything in BlogInt: multi-site management, a rich editor with scheduling, a headless content API, analytics, team roles, feeds, security, and billing.',
};

const FEATURES = [
  {
    icon: <Globe className="size-5" />,
    title: 'Multi-site management',
    body: 'Run unlimited blogs as isolated tenants — each with its own subdomain or custom domain, authors, and categories.',
  },
  {
    icon: <PenLine className="size-5" />,
    title: 'Editor, scheduling & revisions',
    body: 'Draft in a clean editor, schedule posts to publish themselves, and roll back to any point with full revision history.',
  },
  {
    icon: <Code2 className="size-5" />,
    title: 'Headless content API',
    body: 'A versioned REST API for posts, authors, categories, and search — render your content in any frontend you like.',
  },
  {
    icon: <BarChart3 className="size-5" />,
    title: 'Analytics',
    body: 'Track reads, traffic sources, and audience growth per site, with ranked lists and trends right in the dashboard.',
  },
  {
    icon: <Users className="size-5" />,
    title: 'Authors & team roles',
    body: 'Invite collaborators with scoped workspace roles, so the right people can write, edit, or just view each site.',
  },
  {
    icon: <Rss className="size-5" />,
    title: 'Feeds, SEO & Mailchimp',
    body: 'Auto-generated RSS, Atom, and sitemap.xml, plus Mailchimp audience sync to grow your subscriber list.',
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: 'Security',
    body: 'Two-factor authentication, automatic account lockout, short-lived sessions, and an audit log of sensitive actions.',
  },
  {
    icon: <CreditCard className="size-5" />,
    title: 'Flexible billing',
    body: 'Start on a 14-day trial, then pick a plan and top up websites, API requests, storage, or seats as prepaid add-ons.',
  },
];

const MODULES = [
  {
    label: 'Multi-tenant core',
    title: 'One dashboard, every blog',
    body: 'Most CMSes give you a single site. BlogInt treats every blog as its own tenant — separate content, domains, authors, and analytics — while you manage them all from one login. Perfect for publishers, agencies, and teams running multiple brands.',
    bullets: ['Subdomain or custom domain per site', 'Per-site authors & categories', 'Isolated analytics and API usage'],
  },
  {
    label: 'Headless delivery',
    title: 'Your content, your frontend',
    body: 'Content lives in BlogInt; you decide how it is rendered. Every site exposes the same predictable REST endpoints with per-plan usage limits, so your developers keep the stack they love and editors keep a familiar workflow.',
    bullets: ['REST endpoints for posts, authors, search', 'RSS / Atom / sitemap out of the box', 'Usage limits visible in the dashboard'],
  },
];

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <PageHero
        label="Products"
        title="Everything you need"
        emph="to publish."
        subtitle="BlogInt bundles multi-site management, a headless content API, analytics, and team collaboration into one platform — no plugins to wrangle."
        primary={{ href: appHref('/signup'), label: 'Start free trial' }}
        secondary={{ href: localeHref(locale, '/pricing'), label: 'See pricing' }}
      />

      <section className="px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>What&apos;s inside</SectionLabel>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <IconCard key={f.title} icon={f.icon} title={f.title}>
                {f.body}
              </IconCard>
            ))}
          </div>
        </div>
      </section>

      {MODULES.map((m, i) => (
        <section
          key={m.title}
          className={i % 2 === 0 ? 'bg-[#f4efe7] px-5 py-20' : 'px-5 py-20'}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <SectionLabel>{m.label}</SectionLabel>
              <div className="mt-6">
                <Display lead={m.title.split(',')[0] + (m.title.includes(',') ? ',' : '')} emph={m.title.split(',').slice(1).join(',').trim() || ''} className="max-w-md" />
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500">{m.body}</p>
              <ul className="mt-6 space-y-2">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-neutral-700">
                    <span className="bg-primary/15 text-primary grid size-5 place-items-center rounded-full text-[10px]">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className={i % 2 === 1 ? 'md:order-1' : ''}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-primary/15 to-neutral-900/80" />
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="See BlogInt"
        emph="in action."
        subtitle="Spin up your first site on a 14-day free trial, or get a guided walkthrough."
      />
    </>
  );
}
