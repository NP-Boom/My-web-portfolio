import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createHeroParticles,
  getTargetParticleCount,
  getParticleAlpha,
  stepHeroParticles,
  computeParticleLinks,
} from './heroParticles';

test('getTargetParticleCount scales reasonably across viewports and guards empty dimensions', () => {
  assert.equal(getTargetParticleCount(0, 600), 0);
  assert.equal(getTargetParticleCount(1440, 0), 0);

  const mobileCount = getTargetParticleCount(390, 560);
  const desktopCount = getTargetParticleCount(1440, 680);
  const ultraWideCount = getTargetParticleCount(3840, 1400);

  assert.ok(mobileCount >= 20 && mobileCount <= 30, `Unexpected mobile count: ${mobileCount}`);
  assert.ok(desktopCount >= 35 && desktopCount <= 54, `Unexpected desktop count: ${desktopCount}`);
  assert.equal(ultraWideCount, 54);
});

test('createHeroParticles initializes deterministic, bounded, calm particles', () => {
  const a = createHeroParticles(1440, 680, 12345);
  const b = createHeroParticles(1440, 680, 12345);
  assert.equal(a.length, b.length);
  assert.deepEqual(a, b);

  for (const p of a) {
    assert.ok(p.x >= 0 && p.x <= 1440);
    assert.ok(p.y >= 0 && p.y <= 680);
    assert.ok(p.radius >= 0.9 && p.radius <= 3.0);
    assert.ok(p.baseAlpha >= 0.2 && p.baseAlpha <= 0.7);
    const speed = Math.hypot(p.vx, p.vy);
    assert.ok(speed > 0 && speed <= 30, `Speed out of calm bounds: ${speed}`);
  }
});

test('stepHeroParticles advances motion smoothly, wraps edges, and handles gentle pointer repulsion', () => {
  const particles = [
    {
      x: 100,
      y: 100,
      vx: 20,
      vy: 0,
      radius: 1.5,
      baseAlpha: 0.4,
      phase: 0,
      twinkleSpeed: 1,
      color: 'rgba(56, 189, 248, 1)',
    },
    {
      x: 1455,
      y: 200,
      vx: 30,
      vy: 0,
      radius: 1.5,
      baseAlpha: 0.4,
      phase: 1,
      twinkleSpeed: 1,
      color: 'rgba(56, 189, 248, 1)',
    },
  ];

  // Step without pointer
  stepHeroParticles(particles, 1440, 680, 1000); // clamped to 50ms -> dx = 1.0
  assert.ok(particles[0].x > 100 && particles[0].x <= 101.5);
  // Particle past right edge + margin wraps to left margin
  assert.ok(particles[1].x < 0, `Expected wrap to left margin, got ${particles[1].x}`);

  // Step with pointer just to the left of particle 0 -> gently increases positive vx
  const vxBefore = particles[0].vx;
  stepHeroParticles(particles, 1440, 680, 32, { x: particles[0].x - 20, y: particles[0].y, active: true });
  assert.ok(particles[0].vx > vxBefore, 'Pointer repulsion should nudge particle away');
  assert.ok(Math.hypot(particles[0].vx, particles[0].vy) <= 38.01, 'Speed must remain capped');
});

test('getParticleAlpha and computeParticleLinks produce bounded subtle values', () => {
  const particles = createHeroParticles(400, 300, 99);
  for (const p of particles) {
    const alpha = getParticleAlpha(p, 2.5);
    assert.ok(alpha >= 0.08 && alpha <= 0.85);
  }

  const pair = [
    { ...particles[0], x: 10, y: 10 },
    { ...particles[1], x: 60, y: 10 },
    { ...particles[2], x: 300, y: 250 },
  ];
  const links = computeParticleLinks(pair, 100);
  assert.equal(links.length, 1);
  assert.equal(links[0].fromIndex, 0);
  assert.equal(links[0].toIndex, 1);
  assert.ok(Math.abs(links[0].strength - 0.5) < 1e-6);
});
