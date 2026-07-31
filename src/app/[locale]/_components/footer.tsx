'use client';

import Link from 'next/link';
import { GitBranch, ShieldCheck } from 'lucide-react';

import { localeHref, appHref } from '@/lib/marketing-links';
import { Logo } from './site-ui';
import { useMarketing } from './marketing-context';

export function Footer() {
  const { locale } = useMarketing();

  const columns: Record<string, { label: string; href: string }[]> = {
    Product: [
      { label: 'Features', href: localeHref(locale, '/products') },
      { label: 'Solutions', href: localeHref(locale, '/solutions') },
      { label: 'Pricing', href: localeHref(locale, '/pricing') },
      { label: 'Book a demo', href: localeHref(locale, '/book-a-demo') },
    ],
    Company: [
      { label: 'Resources', href: localeHref(locale, '/resources') },
      { label: 'Contact', href: localeHref(locale, '/contact') },
      { label: 'Sign in', href: appHref('/login') },
      { label: 'Get started', href: appHref('/signup') },
    ],
    Developers: [
      { label: 'Content API', href: localeHref(locale, '/products') },
      { label: 'RSS & Atom feeds', href: localeHref(locale, '/products') },
      { label: 'Sitemap', href: localeHref(locale, '/products') },
      { label: 'Webhooks', href: localeHref(locale, '/products') },
    ],
    Legal: [
      { label: 'Privacy', href: localeHref(locale, '/resources') },
      { label: 'Terms', href: localeHref(locale, '/resources') },
      { label: 'Security', href: localeHref(locale, '/resources') },
      { label: 'Status', href: localeHref(locale, '/resources') },
    ],
  };

  return (
    <footer className="bg-[#0f0d0c] px-5 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Logo dark href={localeHref(locale)} />
            <p className="mt-4 max-w-xs text-sm text-white/50">
              The headless, multi-tenant blog CMS for modern teams. Run every
              site, author, and content API from one dashboard.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">
                <ShieldCheck className="size-3" /> 2FA &amp; account lockout
              </span>
            </div>
          </div>
          {Object.entries(columns).map(([col, links]) => (
            <div key={col}>
              <p className="text-sm font-medium text-white">{col}</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
          <p>© 2026 BlogInt. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-white">
              X
            </a>
            <a href="#" className="transition-colors hover:text-white">
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 transition-colors hover:text-white"
            >
              <GitBranch className="size-3.5" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
