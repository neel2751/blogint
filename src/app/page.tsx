import { redirect } from 'next/navigation';

import { DEFAULT_LOCALE } from '@/lib/i18n';

// The proxy redirects `/` to the geo-detected locale; this is the fallback for
// any request that reaches the root directly.
export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
