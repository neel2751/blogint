import type { Metadata } from 'next';
import { Mail, MessageSquare, LifeBuoy } from 'lucide-react';

import { Pill, Serif } from '../_components/site-ui';
import { ContactForm } from '../_components/contact-form';

export const metadata: Metadata = {
  title: 'Contact us',
  description:
    'Get in touch with the BlogInt team about your account, billing, integrations, or anything else.',
};

const CHANNELS = [
  {
    icon: <MessageSquare className="size-5" />,
    title: 'Sales & general',
    body: 'Questions about plans, migrations, or whether BlogInt is right for your team.',
  },
  {
    icon: <LifeBuoy className="size-5" />,
    title: 'Support',
    body: 'Already a customer? We’ll help with your account, billing, or the content API.',
  },
  {
    icon: <Mail className="size-5" />,
    title: 'Prefer email?',
    body: 'Reach us any time and we usually reply within one business day.',
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden px-5 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(232,120,60,0.12),transparent)]" />
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <Pill>Contact us</Pill>
          <h1 className="mt-6 text-4xl leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
            Let&apos;s talk <Serif className="text-primary">publishing.</Serif>
          </h1>
          <p className="mt-5 max-w-md text-base text-neutral-500">
            Tell us what you&apos;re working on and how we can help. Whether it&apos;s a
            migration, a pricing question, or a technical detail, a real person will
            get back to you.
          </p>
          <div className="mt-10 space-y-5">
            {CHANNELS.map((c) => (
              <div key={c.title} className="flex gap-4">
                <span className="bg-primary/10 text-primary grid size-10 shrink-0 place-items-center rounded-xl">
                  {c.icon}
                </span>
                <div>
                  <p className="font-medium text-neutral-900">{c.title}</p>
                  <p className="mt-0.5 max-w-sm text-sm text-neutral-500">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
