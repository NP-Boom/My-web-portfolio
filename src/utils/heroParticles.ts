export interface HeroParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  phase: number;
  twinkleSpeed: number;
  color: string;
}

export interface ParticlePointer {
  x: number;
  y: number;
  active: boolean;
}

export interface ParticleLink {
  fromIndex: number;
  toIndex: number;
  strength: number; // 0..1 proximity ratio
}

const HERO_PARTICLE_PALETTE = [
  'rgba(125, 211, 252, 1)', // sky-300
  'rgba(56, 189, 248, 1)',  // sky-400
  'rgba(96, 165, 250, 1)',  // blue-400
  'rgba(147, 197, 253, 1)', // blue-300
  'rgba(224, 242, 254, 1)', // sky-100
];

/** Deterministic mulberry32 PRNG for balanced, reproducible particle distribution */
function createSeededRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Computes a balanced particle count based on viewport area so desktop stays airy and mobile stays clean */
export function getTargetParticleCount(width: number, height: number): number {
  if (width <= 0 || height <= 0) return 0;
  const area = width * height;
  const raw = Math.round(area / 22000);
  return Math.max(20, Math.min(54, raw));
}

/** Initializes particles with gentle velocities, subtle radii, and staggered twinkle phases */
export function createHeroParticles(
  width: number,
  height: number,
  seed = 202605
): HeroParticle[] {
  const count = getTargetParticleCount(width, height);
  if (count === 0) return [];

  const rand = createSeededRng(seed);
  const particles: HeroParticle[] = [];

  for (let i = 0; i < count; i++) {
    const angle = rand() * Math.PI * 2;
    // Calm studio drift: 8 to 24 px/sec
    const speed = 8 + rand() * 16;
    const isAccent = rand() > 0.72;
    particles.push({
      x: rand() * width,
      y: rand() * height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3.5, // slight gentle upward lift
      radius: isAccent ? 1.8 + rand() * 1.1 : 0.9 + rand() * 1.0,
      baseAlpha: isAccent ? 0.42 + rand() * 0.24 : 0.22 + rand() * 0.22,
      phase: rand() * Math.PI * 2,
      twinkleSpeed: 0.7 + rand() * 1.1,
      color: HERO_PARTICLE_PALETTE[Math.floor(rand() * HERO_PARTICLE_PALETTE.length)],
    });
  }

  return particles;
}

/** Computes current shimmering opacity for a particle at elapsedTime (seconds) */
export function getParticleAlpha(particle: HeroParticle, elapsedSeconds: number): number {
  const pulse = 0.72 + 0.28 * Math.sin(elapsedSeconds * particle.twinkleSpeed + particle.phase);
  return Math.max(0.08, Math.min(0.85, particle.baseAlpha * pulse));
}

/** Advances particle positions smoothly by dtMs (clamped) with gentle pointer interaction & edge wrap */
export function stepHeroParticles(
  particles: HeroParticle[],
  width: number,
  height: number,
  dtMs: number,
  pointer?: ParticlePointer
): void {
  if (width <= 0 || height <= 0 || dtMs <= 0) return;

  const dtSec = Math.min(dtMs, 50) / 1000;
  const margin = 16;
  const interactionRadius = 130;
  const interactionRadiusSq = interactionRadius * interactionRadius;
  const maxSpeed = 38;

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    // Subtle pointer repulsion when hovering in the Hero
    if (pointer && pointer.active) {
      const dx = p.x - pointer.x;
      const dy = p.y - pointer.y;
      const distSq = dx * dx + dy * dy;
      if (distSq > 0.01 && distSq < interactionRadiusSq) {
        const dist = Math.sqrt(distSq);
        const force = ((interactionRadius - dist) / interactionRadius) * 28 * dtSec;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }
    }

    // Clamp velocity & gently damp back toward calm ambient speed
    const speedSq = p.vx * p.vx + p.vy * p.vy;
    if (speedSq > maxSpeed * maxSpeed) {
      const speed = Math.sqrt(speedSq);
      p.vx = (p.vx / speed) * maxSpeed;
      p.vy = (p.vy / speed) * maxSpeed;
    } else if (speedSq > 26 * 26) {
      p.vx *= 1 - 0.6 * dtSec;
      p.vy *= 1 - 0.6 * dtSec;
    }

    p.x += p.vx * dtSec;
    p.y += p.vy * dtSec;

    // Seamless toroidal wrapping around the Hero bounds
    if (p.x < -margin) p.x = width + margin;
    else if (p.x > width + margin) p.x = -margin;

    if (p.y < -margin) p.y = height + margin;
    else if (p.y > height + margin) p.y = -margin;
  }
}

/** Finds nearby particle pairs for delicate constellation hairline connections */
export function computeParticleLinks(
  particles: HeroParticle[],
  maxDistance = 128
): ParticleLink[] {
  const links: ParticleLink[] = [];
  const maxDistSq = maxDistance * maxDistance;

  for (let i = 0; i < particles.length; i++) {
    const a = particles[i];
    for (let j = i + 1; j < particles.length; j++) {
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const distSq = dx * dx + dy * dy;
      if (distSq < maxDistSq) {
        const strength = 1 - Math.sqrt(distSq) / maxDistance;
        links.push({ fromIndex: i, toIndex: j, strength });
      }
    }
  }

  return links;
}
