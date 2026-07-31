import { marketingApiBase } from '@/lib/marketing-links';
import type { PublicPricing } from '@/lib/pricing-types';

/**
 * Browser-side client for the public marketing API. The marketing frontend is
 * "pure": it never touches the DB, it only calls these endpoints (which live on
 * the app host). Type-only import of PublicPricing is erased at build, so the
 * server-only service module is never pulled into the client bundle.
 */

type PostResult = { ok: true } | { ok: false; message: string };

async function post(path: string, body: unknown): Promise<PostResult> {
  try {
    const res = await fetch(`${marketingApiBase()}/api/marketing/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const json = await res.json().catch(() => null);
    if (res.ok && json?.success) return { ok: true };
    return {
      ok: false,
      message: json?.error?.message ?? 'Something went wrong. Please try again.',
    };
  } catch {
    return { ok: false, message: 'Network error. Please check your connection and try again.' };
  }
}

export const marketingApi = {
  joinWaitlist: (body: { email: string; source?: string }) => post('waitlist', body),
  submitContact: (body: { name: string; email: string; company?: string; message: string }) =>
    post('contact', body),
  submitDemo: (body: Record<string, unknown>) => post('demo', body),

  async pricing(currency: string): Promise<PublicPricing> {
    const res = await fetch(`${marketingApiBase()}/api/marketing/pricing?currency=${currency}`, {
      headers: { Accept: 'application/json' },
    });
    const json = await res.json();
    if (!json?.success) throw new Error('Failed to load pricing');
    return json.data as PublicPricing;
  },
};
