'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { localeHref, appHref } from '@/lib/marketing-links';
import { Logo } from './site-ui';
import { RegionSwitcher } from './region-switcher';
import { useMarketing } from './marketing-context';

const NAV = [
  { label: 'Products', path: '/products' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Resources', path: '/resources' },
];

export function Navbar() {
  const { locale } = useMarketing();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#faf7f2]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo href={localeHref(locale)} />
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.path}
              href={localeHref(locale, item.path)}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <RegionSwitcher />
          <Link
            href={appHref('/login')}
            className="hidden text-sm text-neutral-600 transition-colors hover:text-neutral-900 sm:block"
          >
            Sign in
          </Link>
          <Link
            href={localeHref(locale, '/book-a-demo')}
            className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Book a Demo
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-lg border border-neutral-200 md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-neutral-200/70 px-5 py-3 md:hidden">
          {[...NAV, { label: 'Contact', path: '/contact' }].map((item) => (
            <Link
              key={item.path}
              href={localeHref(locale, item.path)}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={appHref('/login')}
            className="rounded-md px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            Sign in
          </Link>
        </nav>
      )}
    </header>
  );
}
