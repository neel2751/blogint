import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';

import type { Locale } from '@/lib/i18n';
import { localeHref } from '@/lib/marketing-links';
import { Pill, Serif } from '../_components/site-ui';

export const metadata: Metadata = {
  title: 'Status',
  description: 'Current status of BlogInt services.',
};

const COMPONENTS = [
  'Marketing site',
  'Dashboard & application',
  'Content API',
  'Email delivery',
  'Payments (Stripe)',
];

export default async function StatusPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-2xl">
        <Pill>Legal</Pill>
        <h1 className="mt-6 text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          System <Serif className="text-primary">status.</Serif>
        </h1>
        <p className="mt-4 max-w-md text-sm text-neutral-500">
          A general overview of BlogInt&apos;s services. This page isn&apos;t backed by
          live automated monitoring yet — for an active incident or outage, please{' '}
          <a
            href={localeHref(locale, '/contact')}
            className="text-primary underline underline-offset-2"
          >
            contact us
          </a>{' '}
          directly.
        </p>

        <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {COMPONENTS.map((name) => (
            <div key={name} className="flex items-center justify-between px-5 py-4">
              <span className="text-sm text-neutral-800">{name}</span>
              <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                <CheckCircle2 className="size-4" /> Operational
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
