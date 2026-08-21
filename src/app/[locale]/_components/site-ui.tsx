import Link from 'next/link';
import { Instrument_Serif } from 'next/font/google';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { BrandMark } from '@/lib/brand-mark';

/** Shared italic serif used for the emphasised part of marketing headings. */
export const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export function Serif({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn(serif.className, 'italic', className)}>{children}</span>;
}

export function Pill({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase',
        dark
          ? 'border-white/15 bg-white/5 text-white/70'
          : 'border-neutral-200 bg-white text-neutral-500',
      )}
    >
      <span className="relative flex size-1.5">
        <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-70" />
        <span className="bg-primary relative inline-flex size-1.5 rounded-full" />
      </span>
      {children}
    </span>
  );
}

export function SectionLabel({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 text-xs font-medium tracking-widest uppercase',
        dark ? 'text-white/50' : 'text-neutral-400',
      )}
    >
      <span className="bg-primary h-px w-6" />
      {children}
    </div>
  );
}

/** Heading where the emphasised part renders in italic serif. */
export function Display({
  lead,
  emph,
  className,
  dark,
}: {
  lead: ReactNode;
  emph: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={cn(
        'text-3xl leading-[1.05] tracking-tight sm:text-4xl md:text-5xl',
        dark ? 'text-white' : 'text-neutral-900',
        className,
      )}
    >
      {lead} <span className={cn(serif.className, 'text-primary italic')}>{emph}</span>
    </h2>
  );
}

export function Logo({ dark, href = '/' }: { dark?: boolean; href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2">
      <BrandMark height={22} />
      <span
        className={cn(
          'text-lg font-semibold tracking-tight',
          dark ? 'text-white' : 'text-neutral-900',
        )}
      >
        BlogInt
      </span>
    </Link>
  );
}

/** Primary (orange) / outline / dark call-to-action links used across pages. */
export function CtaLink({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'dark' | 'outline-dark';
  className?: string;
}) {
  const styles = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary/90',
    outline:
      'border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50',
    dark: 'bg-neutral-900 text-white hover:bg-neutral-800',
    'outline-dark':
      'border border-white/20 bg-white/5 text-white hover:bg-white/10',
  }[variant];
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors',
        styles,
        className,
      )}
    >
      {children}
    </Link>
  );
}
