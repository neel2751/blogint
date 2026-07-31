import type { ReactNode } from 'react';

import { Pill, Serif } from './site-ui';

export function LegalPage({
  eyebrow,
  title,
  emphasis,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  emphasis: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <Pill>{eyebrow}</Pill>
        <h1 className="mt-6 text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          {title} <Serif className="text-primary">{emphasis}</Serif>
        </h1>
        <p className="mt-4 text-sm text-neutral-400">Last updated {updated}</p>
        <div className="mt-10 space-y-8">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-medium text-neutral-900">{title}</h2>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-neutral-600">{children}</div>
    </div>
  );
}
