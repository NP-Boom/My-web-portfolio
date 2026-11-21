import React, { useEffect, useRef } from 'react';
import {
  HeroParticle,
  ParticlePointer,
  computeParticleLinks,
  createHeroParticles,
  getParticleAlpha,
  stepHeroParticles,
} from '../utils/heroParticles';

export const HeroParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: HeroParticle[] = [];
    let rafId: number | null = null;
    let isVisible = true;
    let lastTime = performance.now();
    let elapsedSeconds = 0;

    const pointer: ParticlePointer = { x: 0, y: 0, active: false };

    const drawFrame = (timeSec: number) => {
      ctx.clearRect(0, 0, width, height);

      // Subtle hairline geometric connections echoing the 3D cube lines
      const links = computeParticleLinks(particles, 126);
      ctx.lineWidth = 0.75;
      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const a = particles[link.fromIndex];
        const b = particles[link.toIndex];
        const alpha = link.strength * 0.13;
        ctx.strokeStyle = `rgba(96, 185, 255, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Luminous drifting particles with soft outer halo on larger motes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const alpha = getParticleAlpha(p, timeSec);

        if (p.radius >= 1.8) {
          const glowRadius = p.radius * 4.2;
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
          gradient.addColorStop(0, `rgba(125, 211, 252, ${(alpha * 0.45).toFixed(3)})`);
          gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = p.color.replace(', 1)', `, ${alpha.toFixed(3)})`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = createHeroParticles(width, height);
      drawFrame(elapsedSeconds);
    };

    const tick = (now: number) => {
      if (!isVisible || document.hidden) {
        rafId = null;
        return;
      }

      const dtMs = now - lastTime;
      lastTime = now;
      elapsedSeconds += Math.min(dtMs, 50) / 1000;

      stepHeroParticles(particles, width, height, dtMs, pointer);
      drawFrame(elapsedSeconds);

      rafId = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (prefersReducedMotion || rafId !== null || !isVisible || document.hidden) return;
      lastTime = performance.now();
      rafId = window.requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        pointer.x = x;
        pointer.y = y;
        pointer.active = true;
      } else {
        pointer.active = false;
      }
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    resize();
    startLoop();

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => resize()) : null;
    resizeObserver?.observe(canvas);

    const intersectionObserver =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              isVisible = entries.some((entry) => entry.isIntersecting);
              if (isVisible) startLoop();
              else stopLoop();
            },
            { threshold: 0.01 }
          )
        : null;
    intersectionObserver?.observe(canvas);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopLoop();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="hero-particles-canvas"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
    />
  );
};
