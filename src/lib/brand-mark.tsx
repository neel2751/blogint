// Shared brand constants + the "B" mark (extracted from public/BlogintLogo.svg)
// for use in dynamically generated icons/OG images (next/og ImageResponse).

export const BRAND = {
  orange: '#F04F28',
  ink: '#1A1713',
  cream: '#FAF7F2',
} as const;

const MARK_PATH =
  'M59 2.46094C26.42 2.46094 0 28.8709 0 61.4609V149.961H29.5V120.461H41.79V169.631H71.29V120.461H83.58V189.291H113.08V2.46094H59Z';

/** Aspect ratio of the mark's own artboard — it is a tall glyph, not a square. */
const MARK_ASPECT = 113.08 / 190;

/**
 * The mark sized in absolute pixels.
 *
 * Sized by height, since that is the dimension the mark fills. Satori ignores
 * the width/height *attributes* on a nested <svg> and stretches it to the flex
 * line instead, so both dimensions have to be pinned in `style`.
 */
export function BrandMark({ height, color = BRAND.orange }: { height: number; color?: string }) {
  const width = Math.round(height * MARK_ASPECT);
  return (
    <svg
      viewBox="0 0 113.08 190"
      fill="none"
      width={width}
      height={height}
      style={{ width, height, flexShrink: 0 }}
    >
      <path d={MARK_PATH} fill={color} />
    </svg>
  );
}
