'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { SUPPORTED_LOCALES, LOCALE_CONFIG } from '@/lib/i18n';
import { useMarketing } from './marketing-context';

/**
 * Region control. Switches the locale (URL + default currency used for
 * pricing behind the scenes). Country is detected automatically on first
 * visit (middleware), but this lets the user change it.
 */
export function RegionSwitcher({ dark = false }: { dark?: boolean }) {
  const router = useRouter();
  const { locale, setCurrency } = useMarketing();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function chooseRegion(target: (typeof SUPPORTED_LOCALES)[number]) {
    setOpen(false);
    if (target !== locale) {
      // Switch locale: adopt its default currency and navigate to the same page
      // under the new locale prefix.
      setCurrency(LOCALE_CONFIG[target].currency);
      const rest = window.location.pathname.replace(`/${locale}`, '') || '';
      router.push(`/${target}${rest}`);
    }
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors',
          dark
            ? 'border-white/15 bg-white/5 text-white/80 hover:bg-white/10'
            : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50',
        )}
      >
        <Globe className="size-3.5" />
        <span className="flex items-center gap-1">
          <span>{LOCALE_CONFIG[locale].flag}</span>
          <span>{LOCALE_CONFIG[locale].shortLabel}</span>
        </span>
        <ChevronDown className="size-3 opacity-60" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-neutral-200 bg-white p-1.5 text-neutral-900 shadow-lg">
          <p className="px-2 pt-1.5 pb-1 text-[10px] font-medium tracking-widest text-neutral-400 uppercase">
            Region
          </p>
          {SUPPORTED_LOCALES.map((l) => (
            <button
              key={l}
              onClick={() => chooseRegion(l)}
              className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-neutral-100"
            >
              <span className="flex items-center gap-2">
                <span>{LOCALE_CONFIG[l].flag}</span>
                {LOCALE_CONFIG[l].label}
              </span>
              {l === locale && <Check className="text-primary size-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
