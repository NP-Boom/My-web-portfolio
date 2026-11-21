export interface HeroScrollMetrics {
  /**
   * The bottom coordinate of the hero section relative to the viewport
   * (from `heroElement.getBoundingClientRect().bottom`), or `null` if unavailable.
   */
  heroBottom: number | null;
  /** Current vertical scroll offset (`window.scrollY`). */
  scrollY: number;
  /** Fallback scroll threshold in pixels when hero element bounds are unavailable. */
  fallbackThreshold?: number;
  /** Tolerance in pixels to account for subpixel layout rounding at the viewport edge. */
  edgeTolerance?: number;
}

/**
 * Determines whether the user has scrolled past the hero section.
 * Returns `true` only once the bottom edge of the hero section has left the viewport.
 */
export function isScrolledPastHero({
  heroBottom,
  scrollY,
  fallbackThreshold = 500,
  edgeTolerance = 1,
}: HeroScrollMetrics): boolean {
  if (typeof heroBottom === 'number' && Number.isFinite(heroBottom)) {
    return heroBottom <= edgeTolerance;
  }

  return Number.isFinite(scrollY) && scrollY > fallbackThreshold;
}

/**
 * Returns the appropriate `ScrollBehavior` respecting reduced-motion preferences.
 */
export function getBackToTopScrollBehavior(prefersReducedMotion: boolean): ScrollBehavior {
  return prefersReducedMotion ? 'auto' : 'smooth';
}
