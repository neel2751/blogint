import { ImageResponse } from 'next/og';

import { SocialCard } from '@/lib/brand-mark';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt =
  'BlogInt — the headless multi-tenant blog CMS. Run every site, author, and content API from one dashboard.';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <SocialCard
        title="The headless, multi-tenant blog CMS"
        subtitle="Run every site, author, and content API from one dashboard — 14-day free trial."
      />
    ),
    { ...size }
  );
}
