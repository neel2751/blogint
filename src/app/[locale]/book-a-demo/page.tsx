import type { Metadata } from 'next';
import { Check } from 'lucide-react';

import { appHref } from '@/lib/marketing-links';
import { Pill, Serif } from '../_components/site-ui';
import { DemoForm } from '../_components/demo-form';

export const metadata: Metadata = {
  title: 'Book a demo',
  description:
    'See BlogInt in action. Book a guided walkthrough tailored to how your team publishes.',
};

const POINTS = [
  'A tour of multi-site management and the content API',
  'How scheduling, revisions, and team roles work',
  'Pricing and add-ons mapped to your team size',
  'Answers to your migration and integration questions',
];

export default function BookADemoPage() {
  return (
    <section className="relative overflow-hidden px-5 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(232,120,60,0.12),transparent)]" />
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <Pill>Book a demo</Pill>
          <h1 className="mt-6 text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
            See BlogInt <Serif className="text-primary">in action.</Serif>
          </h1>
          <p className="mt-5 max-w-md text-base text-neutral-500">
            Get a personalised walkthrough with our team. We&apos;ll tailor it to how
            you publish and answer whatever&apos;s on your list — no slide-deck marathon.
          </p>
          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-neutral-700">
                <span className="bg-primary/15 text-primary mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                  <Check className="size-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-5">
            <p className="text-sm text-neutral-600">
              Prefer to explore on your own?{' '}
              <a href={appHref('/signup')} className="text-primary font-medium underline underline-offset-4">
                Start a 14-day free trial
              </a>{' '}
              — no card required.
            </p>
          </div>
        </div>
        <div>
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
