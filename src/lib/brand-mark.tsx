// Shared brand constants + the "B" mark (extracted from public/BlogintLogo.svg)
// for use in dynamically generated icons/OG images (next/og ImageResponse).

export const BRAND = {
  orange: '#F04F28',
  ink: '#1A1713',
  cream: '#FAF7F2',
} as const;

const MARK_PATH =
  'M59 2.46094C26.42 2.46094 0 28.8709 0 61.4609V149.961H29.5V120.461H41.79V169.631H71.29V120.461H83.58V189.291H113.08V2.46094H59Z';

export function BrandMark({ size, color = BRAND.orange }: { size: number; color?: string }) {
  return (
    <svg width={size} height={size * (190 / 113.08)} viewBox="0 0 113.08 190" fill="none">
      <path d={MARK_PATH} fill={color} />
    </svg>
  );
}

// Shared 1200x630 social-share card, reused by opengraph-image.tsx and
// twitter-image.tsx so both cards stay pixel-identical.
export function SocialCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 80,
        background: BRAND.ink,
        backgroundImage: `radial-gradient(circle at 88% 12%, ${BRAND.orange}33, transparent 55%)`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <BrandMark size={68} />
        <span
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: BRAND.cream,
            letterSpacing: -1,
          }}
        >
          BlogInt
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 980 }}>
        <span style={{ fontSize: 60, fontWeight: 700, color: BRAND.cream, lineHeight: 1.15 }}>
          {title}
        </span>
        <span style={{ fontSize: 30, color: '#B8B0A8', lineHeight: 1.4 }}>{subtitle}</span>
      </div>
    </div>
  );
}
