'use client';

import { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

import { marketingApi } from '@/lib/marketing-client';

const fieldClass =
  'w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');

    const form = new FormData(e.currentTarget);
    const result = await marketingApi.submitContact({
      name: String(form.get('name') ?? ''),
      email: String(form.get('email') ?? ''),
      company: (form.get('company') as string) || undefined,
      message: String(form.get('message') ?? ''),
    });

    if (result.ok) {
      setStatus('done');
    } else {
      setStatus('error');
      setMessage(result.message);
    }
  }

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-10 text-center">
        <span className="bg-primary/10 text-primary grid size-11 place-items-center rounded-full">
          <Check className="size-5" />
        </span>
        <h3 className="text-lg font-medium text-neutral-900">Thanks — we&apos;ll be in touch</h3>
        <p className="max-w-sm text-sm text-neutral-500">
          Your message has reached our team. We usually reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-neutral-700">Name</span>
          <input name="name" required maxLength={100} className={fieldClass} placeholder="Ada Lovelace" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-neutral-700">Work email</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            className={fieldClass}
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="text-sm font-medium text-neutral-700">
          Company <span className="text-neutral-400">(optional)</span>
        </span>
        <input name="company" maxLength={120} className={fieldClass} placeholder="Acme Inc." />
      </label>
      <label className="grid gap-1.5">
        <span className="text-sm font-medium text-neutral-700">How can we help?</span>
        <textarea
          name="message"
          required
          maxLength={4000}
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us a bit about what you're looking for…"
        />
      </label>
      {status === 'error' && <p className="text-sm text-red-600">{message}</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? <Loader2 className="size-4 animate-spin" /> : 'Send message'}
      </button>
    </form>
  );
}
