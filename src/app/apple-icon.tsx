import { ImageResponse } from 'next/og';

import { BRAND, BrandMark } from '@/lib/brand-mark';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: BRAND.ink,
        }}
      >
        <BrandMark size={92} color={BRAND.orange} />
      </div>
    ),
    { ...size }
  );
}
