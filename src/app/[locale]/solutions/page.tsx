import type { Metadata } from 'next';
import { Newspaper, Megaphone, Code2, Building2, Rocket, Check } from 'lucide-react';

import type { Locale } from '@/lib/i18n';
import { localeHref, appHref } from '@/lib/marketing-links';
import { SectionLabel } from '../_components/site-ui';
import { PageHero } from '../_components/marketing';
import { CtaBand } from '../_components/cta-band';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'How teams use BlogInt — publishers, marketing teams, developers, agencies, and startups all run their content on one multi-tenant CMS.',
};

const SOLUTIONS = [
  {
    icon: <Newspaper className="size-5" />,
    audience: 'Publishers',
    title: 'Run every publication from one place',
    body: 'Manage dozens of blogs and brands side by side, each with its own authors, categories, and domain.',
    points: ['Unlimited sites as tenants', 'Per-site authors & analytics', 'Custom domains'],
  },
  {
    icon: <Megaphone className="size-5" />,
    audience: 'Marketing teams',
    title: 'Plan and ship campaigns on time',
    body: 'Editorial calendars, scheduled publishing, and Mailchimp sync keep every channel moving together.',
    points: ['Scheduled posts & revisions', 'Mailchimp audience sync', 'Traffic & growth analytics'],
  },
  {
    icon: <Code2 className="size-5" />,
    audience: 'Developers',
    title: 'A content API, not a monolith',
    body: 'Keep your own frontend and pull content over a clean REST API with predictable, versioned endpoints.',
    points: ['REST API for all content', 'RSS / Atom / sitemap', 'Per-plan usage limits'],
  },
  {
    icon: <Building2 className="size-5" />,
    audience: 'Agencies',
    title: 'One login for every client',
    body: 'Give each client blog its own tenant with scoped team access, and bill add-ons as you grow.',
    points: ['Scoped team roles', 'Per-client analytics', 'Prepaid add-ons'],
  },
  {
    icon: <Rocket className="size-5" />,
    audience: 'Startups',
    title: 'Launch a blog in an afternoon',
    body: 'Start on the free trial, publish on a subdomain, and add a custom domain when you are ready to scale.',
    points: ['14-day free trial', 'Subdomain to custom domain', 'No plugins to manage'],
  },
];

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <PageHero
        label="Solutions"
        title="Built for teams that"
        emph="ship content."
        subtitle="Whatever you publish and however you render it, BlogInt adapts to the way your team already works."
        primary={{ href: appHref('/signup'), label: 'Start free trial' }}
        secondary={{ href: localeHref(locale, '/contact'), label: 'Talk to us' }}
      />

      <section className="px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>By team</SectionLabel>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s) => (
              <div
                key={s.audience}
                className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <span className="bg-primary/10 text-primary grid size-10 place-items-center rounded-xl">
                  {s.icon}
                </span>
                <p className="text-primary mt-4 text-xs font-medium tracking-widest uppercase">
                  {s.audience}
                </p>
                <h3 className="mt-1 text-lg font-medium tracking-tight text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{s.body}</p>
                <ul className="mt-4 space-y-2 border-t border-neutral-100 pt-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-neutral-700">
                      <Check className="text-primary size-4" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Find your"
        emph="workflow."
        subtitle="Start free, or tell us about your setup and we'll show you how BlogInt fits."
      />
    </>
  );
}
