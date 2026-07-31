'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, Loader2 } from 'lucide-react';

import { appHref } from '@/lib/marketing-links';
import { marketingApi } from '@/lib/marketing-client';
import { CURRENCY_LABEL, SUPPORTED_CURRENCIES, isCurrency, type Currency } from '@/lib/i18n';
import type { PublicPricing, PublicPlan } from '@/lib/pricing-types';
import { PageHero } from '../_components/marketing';
import { CtaBand } from '../_components/cta-band';
import { SectionLabel } from '../_components/site-ui';
import { useMarketing } from '../_components/marketing-context';

function money(cents: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    maximumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

function formatStorage(bytesStr: string): string {
  const bytes = Number(bytesStr);
  const gb = bytes / 1024 ** 3;
  if (gb >= 1) return `${gb % 1 === 0 ? gb : gb.toFixed(1)} GB`;
  return `${Math.round(bytes / 1024 ** 2)} MB`;
}

function formatNumber(n: number): string {
  return new Intl.NumberFormat('en-US').format(n);
}

function planFeatures(plan: PublicPlan): string[] {
  const base = [
    `${plan.included.websites} website${plan.included.websites === 1 ? '' : 's'}`,
    `${formatNumber(plan.included.apiRequests)} API requests / mo`,
    `${formatStorage(plan.included.storageBytes)} storage`,
    `${plan.included.teamMembers} team member${plan.included.teamMembers === 1 ? '' : 's'}`,
  ];
  return plan.isFree ? base : [...base, 'Prepaid add-ons available'];
}

export default function PricingPage() {
  const { currency, setCurrency } = useMarketing();
  const [data, setData] = useState<PublicPricing | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let active = true;
    setStatus('loading');
    marketingApi
      .pricing(currency)
      .then((res) => {
        if (!active) return;
        setData(res);
        setStatus('ready');
        // If the requested currency isn't sold, the API falls back to one that
        // is — adopt it so the switcher (here and in the nav) stays in sync.
        if (res.currency !== currency) setCurrency(res.currency);
      })
      .catch(() => active && setStatus('error'));
    return () => {
      active = false;
    };
  }, [currency]);

  const firstPaidIndex = data?.plans.findIndex((p) => !p.isFree) ?? -1;
  const currencyOptions: Currency[] = data?.availableCurrencies?.length
    ? data.availableCurrencies
    : [...SUPPORTED_CURRENCIES];

  return (
    <>
      <PageHero
        label="Pricing"
        title="Simple pricing,"
        emph="no surprises."
        subtitle="Every plan starts with a 14-day free trial — no card required. Scale up any dimension with prepaid add-ons whenever you need to."
      />

      <section className="px-5 pb-8">
        <div className="mx-auto max-w-6xl">
          {/* Currency control */}
          <div className="mb-6 flex items-center justify-end gap-2">
            <label htmlFor="currency" className="text-sm text-neutral-500">
              Currency
            </label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => {
                if (isCurrency(e.target.value)) setCurrency(e.target.value);
              }}
              className="focus:border-primary rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 outline-none"
            >
              {currencyOptions.map((c) => (
                <option key={c} value={c}>
                  {CURRENCY_LABEL[c]}
                </option>
              ))}
            </select>
          </div>

          {status === 'loading' && (
            <div className="flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white p-16 text-sm text-neutral-500">
              <Loader2 className="size-4 animate-spin" /> Loading plans…
            </div>
          )}

          {status === 'error' && (
            <p className="rounded-2xl border border-dashed border-neutral-300 bg-white p-10 text-center text-sm text-neutral-500">
              We couldn&apos;t load pricing right now. Please refresh to try again.
            </p>
          )}

          {status === 'ready' && data && data.plans.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.plans.map((plan, i) => {
                const highlight = i === firstPaidIndex;
                const priceLabel = plan.isFree
                  ? money(0, currency)
                  : plan.price
                    ? money(plan.price.baseAmount, plan.price.currency)
                    : '—';
                const intervalLabel = plan.isFree
                  ? 'forever'
                  : plan.price
                    ? `per ${plan.price.interval}`
                    : '';
                return (
                  <div
                    key={plan.id}
                    className={
                      highlight
                        ? 'border-primary shadow-[0_30px_70px_-40px_rgba(232,120,60,0.6)] relative flex flex-col rounded-2xl border-2 bg-white p-6'
                        : 'relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6'
                    }
                  >
                    {highlight && (
                      <span className="bg-primary text-primary-foreground absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium">
                        <Sparkles className="size-3" /> Most popular
                      </span>
                    )}
                    <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                      {plan.name}
                    </h3>
                    {plan.description && (
                      <p className="mt-1 text-sm text-neutral-500">{plan.description}</p>
                    )}
                    <div className="mt-5 flex items-end gap-1.5">
                      <span className="text-4xl font-semibold tracking-tight text-neutral-900">
                        {priceLabel}
                      </span>
                      <span className="mb-1 text-sm text-neutral-400">{intervalLabel}</span>
                    </div>
                    <Link
                      href={appHref(`/signup?plan=${plan.slug}`)}
                      className={
                        highlight
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors'
                          : 'mt-6 inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50'
                      }
                    >
                      {plan.isFree ? 'Get started free' : 'Start 14-day trial'}
                    </Link>
                    <ul className="mt-6 space-y-2.5 border-t border-neutral-100 pt-6">
                      {planFeatures(plan).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                          <Check className="text-primary size-4 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}

          {status === 'ready' && data && data.plans.length === 0 && (
            <p className="rounded-2xl border border-dashed border-neutral-300 bg-white p-10 text-center text-sm text-neutral-500">
              Plans are being finalised. Join the waitlist to be notified when pricing goes live.
            </p>
          )}
        </div>
      </section>

      <section className="px-5 pb-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Good to know</SectionLabel>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['14-day free trial', 'Full access with elevated limits, no card required.'],
              ['Prepaid add-ons', 'Top up websites, API requests, storage, or seats à la carte.'],
              ['Cancel anytime', 'Month-to-month billing with no lock-in.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <p className="font-medium text-neutral-900">{title}</p>
                <p className="mt-1 text-sm text-neutral-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready when"
        emph="you are."
        subtitle="Start your free trial today, or talk to us about a plan that fits your team."
      />
    </>
  );
}
