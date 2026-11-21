import test from 'node:test';
import assert from 'node:assert/strict';
import { getBackToTopScrollBehavior, isScrolledPastHero } from './scrollVisibility';

test('isScrolledPastHero returns false while hero section is visible in viewport', () => {
  assert.equal(isScrolledPastHero({ heroBottom: 680, scrollY: 0 }), false);
  assert.equal(isScrolledPastHero({ heroBottom: 240, scrollY: 440 }), false);
  assert.equal(isScrolledPastHero({ heroBottom: 2, scrollY: 678 }), false);
});

test('isScrolledPastHero returns true once bottom of hero passes viewport top edge', () => {
  assert.equal(isScrolledPastHero({ heroBottom: 1, scrollY: 679 }), true);
  assert.equal(isScrolledPastHero({ heroBottom: 0, scrollY: 680 }), true);
  assert.equal(isScrolledPastHero({ heroBottom: -120, scrollY: 800 }), true);
});

test('isScrolledPastHero respects custom edgeTolerance', () => {
  assert.equal(isScrolledPastHero({ heroBottom: 0.5, scrollY: 680, edgeTolerance: 0 }), false);
  assert.equal(isScrolledPastHero({ heroBottom: 0, scrollY: 680, edgeTolerance: 0 }), true);
});

test('isScrolledPastHero falls back to scrollY threshold when heroBottom is unavailable', () => {
  assert.equal(isScrolledPastHero({ heroBottom: null, scrollY: 0 }), false);
  assert.equal(isScrolledPastHero({ heroBottom: null, scrollY: 500 }), false);
  assert.equal(isScrolledPastHero({ heroBottom: null, scrollY: 501 }), true);
  assert.equal(
    isScrolledPastHero({ heroBottom: Number.NaN, scrollY: 320, fallbackThreshold: 300 }),
    true,
  );
});

test('getBackToTopScrollBehavior respects prefers-reduced-motion', () => {
  assert.equal(getBackToTopScrollBehavior(false), 'smooth');
  assert.equal(getBackToTopScrollBehavior(true), 'auto');
});
