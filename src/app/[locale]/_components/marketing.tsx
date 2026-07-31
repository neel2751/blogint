import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { Pill, Serif, CtaLink } from './site-ui';
import { cn } from '@/lib/utils';

/** Standard centred hero for the secondary marketing pages. */
export function PageHero({
  label,
  title,
  emph,
  subtitle,
  primary,
  secondary,
}: {
  label: string;
  title: string;
  emph: string;
  subtitle?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-20 pb-12 text-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(232,120,60,0.12),transparent)]" />
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-center">
          <Pill>{label}</Pill>
        </div>
        <h1 className="mt-6 text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          {title} <Serif className="text-primary">{emph}</Serif>
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-xl text-base text-neutral-500">{subtitle}</p>
        )}
        {(primary || secondary) && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {primary && (
              <CtaLink href={primary.href} variant="primary">
                {primary.label}
                <ArrowRight className="size-4" />
              </CtaLink>
            )}
            {secondary && (
              <CtaLink href={secondary.href} variant="outline">
                {secondary.label}
              </CtaLink>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/** A reusable card with an icon, title and description. */
export function IconCard({
  icon,
  title,
  children,
  className,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]',
        className,
      )}
    >
      <span className="bg-primary/10 text-primary grid size-10 place-items-center rounded-xl">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-medium tracking-tight text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{children}</p>
    </div>
  );
}
