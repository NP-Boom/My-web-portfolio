import type { CSSProperties } from 'react';

export interface FloatAnimationSpec {
  durationSec: number;
  delaySec: number;
  amplitudePx: number;
}

const DURATION_CYCLE = [4.8, 5.4, 5.1, 5.8, 4.6, 5.5] as const;
const AMPLITUDE_CYCLE = [5, 6, 5.5, 6.5, 5, 6] as const;

/**
 * Computes subtle, organic staggered floating animation parameters for a project card.
 * Uses negative delays so cards start immediately mid-wave without a frozen startup gap.
 */
export function getProjectFloatSpec(itemIndex: number, albumIndex = 0): FloatAnimationSpec {
  const safeItem = Math.max(0, Math.floor(itemIndex));
  const safeAlbum = Math.max(0, Math.floor(albumIndex));

  const durationSec = DURATION_CYCLE[(safeItem + safeAlbum * 2) % DURATION_CYCLE.length];
  const amplitudePx = AMPLITUDE_CYCLE[(safeItem * 2 + safeAlbum) % AMPLITUDE_CYCLE.length];

  // Smooth wave offset across adjacent cards and albums, kept negative so motion is active on first paint.
  const rawPhase = ((safeItem * 0.85) + (safeAlbum * 1.35)) % durationSec;
  const delaySec = Number((-rawPhase).toFixed(2));

  return {
    durationSec,
    delaySec,
    amplitudePx,
  };
}

/**
 * Returns CSS custom properties consumed by `.project-float-item` keyframes in index.css.
 */
export function getProjectFloatStyle(itemIndex: number, albumIndex = 0): CSSProperties {
  const { durationSec, delaySec, amplitudePx } = getProjectFloatSpec(itemIndex, albumIndex);
  return {
    '--float-duration': `${durationSec}s`,
    '--float-delay': `${delaySec}s`,
    '--float-distance': `-${amplitudePx}px`,
  } as CSSProperties;
}
