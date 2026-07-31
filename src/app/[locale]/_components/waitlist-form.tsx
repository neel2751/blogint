'use client';

import { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { marketingApi } from '@/lib/marketing-client';

export function WaitlistForm({
  source = 'website/home',
  dark = false,
}: {
  source?: string;
  dark?: boolean;
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');

    const result = await marketingApi.joinWaitlist({ email, source });
    if (result.ok) {
      setStatus('done');
      setEmail('');
    } else {
      setStatus('error');
      setMessage(result.message);
    }
  }

  if (status === 'done') {
    return (
      <div
        className={cn(
          'inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium',
          dark ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary',
        )}
      >
        <Check className="size-4" />
        You&apos;re on the list — we&apos;ll email your invite soon.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-md">
      <div
        className={cn(
          'flex items-center gap-2 rounded-xl border p-1.5',
          dark ? 'border-white/15 bg-white/5' : 'border-neutral-300 bg-white shadow-sm',
        )}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={cn(
            'min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none',
            dark ? 'text-white placeholder:text-white/40' : 'text-neutral-900 placeholder:text-neutral-400',
          )}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              Join waitlist
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className={cn('mt-2 text-xs', dark ? 'text-red-300' : 'text-red-600')}>{message}</p>
      )}
      <p className={cn('mt-2 text-xs', dark ? 'text-white/40' : 'text-neutral-400')}>
        Get early access + a 14-day free trial when you&apos;re invited. No card required.
      </p>
    </form>
  );
}
