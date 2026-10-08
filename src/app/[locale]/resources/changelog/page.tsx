import type { Metadata } from 'next';

import type { Locale } from '@/lib/i18n';
import { Pill, Serif } from '../../_components/site-ui';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'What shipped recently, from new API fields to dashboard improvements.',
};

const ENTRIES: { date: string; tag: string; title: string; body: string }[] = [
  {
    date: '27 July 2026',
    tag: 'Billing',
    title: 'EUR pricing and an Enterprise agency tier',
    body: 'Every plan now has EUR pricing alongside USD and GBP. Added an Enterprise tier for agencies running many client sites, plus an in-app, currency-locked flow for changing plans.',
  },
  {
    date: '17 July 2026',
    tag: 'Platform',
    title: 'Custom domains and a redesigned checkout',
    body: 'Sites can now run on your own domain in addition to a blogint.site subdomain. Checkout moved to a card-first modal, addresses are stored per account, and the team view is read-only for non-owners.',
  },
  {
    date: '3 July 2026',
    tag: 'Usage & billing',
    title: 'Prepaid add-on top-ups',
    body: 'Hit a plan limit and need more right away? Buy additional websites, API requests, storage, or seats as prepaid add-ons, prorated for the current cycle, without changing plans.',
  },
  {
    date: '12 June 2026',
    tag: 'Security',
    title: 'Two-factor authentication and account lockout',
    body: 'Added optional 2FA for all accounts and automatic lockout after repeated failed sign-in attempts.',
  },
];

export default async function ChangelogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  await params;
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-2xl">
        <Pill>Resources</Pill>
        <h1 className="mt-6 text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          What&apos;s <Serif className="text-primary">new.</Serif>
        </h1>
        <p className="mt-4 max-w-md text-sm text-neutral-500">
          Recent updates to the BlogInt platform and dashboard.
        </p>

        <div className="mt-10 space-y-8">
          {ENTRIES.map((e) => (
            <div key={e.title} className="border-l-2 border-neutral-200 pl-5">
              <div className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-medium">
                  {e.tag}
                </span>
                <span className="text-xs text-neutral-400">{e.date}</span>
              </div>
              <h2 className="mt-2 text-lg font-medium text-neutral-900">{e.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
