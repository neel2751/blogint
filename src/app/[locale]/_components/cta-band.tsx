'use client';

import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { localeHref, appHref } from '@/lib/marketing-links';
import { serif, CtaLink } from './site-ui';
import { useMarketing } from './marketing-context';

/** Dark call-to-action band shared by the secondary pages. Locale-aware. */
export function CtaBand({
  title,
  emph,
  subtitle,
}: {
  title: string;
  emph: string;
  subtitle?: string;
}) {
  const { locale } = useMarketing();

  return (
    <section className="px-5 py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0f0d0c] px-6 py-16 text-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_50%_80%_at_50%_0%,rgba(232,120,60,0.25),transparent)]" />
        <div className="relative">
          <h2 className="text-3xl leading-tight tracking-tight text-white sm:text-4xl">
            {title} <span className={cn(serif.className, 'text-primary italic')}>{emph}</span>
          </h2>
          {subtitle && <p className="mx-auto mt-4 max-w-md text-sm text-white/50">{subtitle}</p>}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaLink href={appHref('/signup')} variant="primary">
              Start free trial
              <ArrowRight className="size-4" />
            </CtaLink>
            <CtaLink href={localeHref(locale, '/book-a-demo')} variant="outline-dark">
              Book a demo
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
