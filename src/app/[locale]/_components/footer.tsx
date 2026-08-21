'use client';

import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

import { localeHref, appHref } from '@/lib/marketing-links';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from '@/lib/social-icons';
import { Logo } from './site-ui';
import { useMarketing } from './marketing-context';

const SOCIAL_LINKS = [
  { label: 'YouTube', href: 'https://youtube.com/@bloglnt', Icon: YoutubeIcon },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61592718397503',
    Icon: FacebookIcon,
  },
  { label: 'Instagram', href: 'https://www.instagram.com/bloglnt/', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/blogint', Icon: LinkedinIcon },
];

export function Footer() {
  const { locale } = useMarketing();

  // Only pages that actually exist get linked here — no placeholder
  // Developers column pointing at a page that doesn't cover that topic.
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
    Legal: [
      { label: 'Privacy', href: localeHref(locale, '/privacy') },
      { label: 'Terms', href: localeHref(locale, '/terms') },
      { label: 'Security', href: localeHref(locale, '/security') },
      { label: 'Status', href: localeHref(locale, '/status') },
    ],
  };

  return (
    <footer className="bg-[#0f0d0c] px-5 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
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
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`BlogInt on ${label}`}
                  className="flex size-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
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
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          <p>© 2026 BlogInt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
