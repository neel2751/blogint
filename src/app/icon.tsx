import { ImageResponse } from 'next/og';

import { BRAND, BrandMark } from '@/lib/brand-mark';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <BrandMark height={20} color={BRAND.orange} />
      </div>
    ),
    { ...size }
  );
}
