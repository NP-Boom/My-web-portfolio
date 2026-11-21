import React, { useCallback, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { getBackToTopScrollBehavior, isScrolledPastHero } from '../utils/scrollVisibility';

interface BackToTopButtonProps {
  heroId?: string;
  lang: 'th' | 'en';
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  heroId = 'home',
  lang,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const updateVisibility = () => {
      rafId = null;
      const heroEl = document.getElementById(heroId);
      const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : null;
      const nextVisible = isScrolledPastHero({
        heroBottom,
        scrollY: window.scrollY,
      });
      setIsVisible((prev) => (prev === nextVisible ? prev : nextVisible));
    };

    const scheduleUpdate = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [heroId]);

  const handleScrollToTop = useCallback(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: getBackToTopScrollBehavior(prefersReducedMotion),
    });
  }, []);

  const label = lang === 'th' ? 'กลับขึ้นด้านบน' : 'Back to top';

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label={label}
      title={label}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      data-testid="back-to-top-button"
      data-visible={isVisible ? 'true' : 'false'}
      className={`fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full flex items-center justify-center bg-[#0a1326]/90 backdrop-blur-md text-cyan-200 hover:text-white border border-[#1da1ff]/50 hover:border-[#38bdf8] shadow-[0_8px_24px_rgba(2,8,23,0.65),0_0_16px_rgba(29,161,255,0.24)] hover:shadow-[0_10px_28px_rgba(2,8,23,0.75),0_0_24px_rgba(56,189,248,0.45)] hover:bg-[#0e1b36] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060b14] transition-[opacity,transform,visibility,background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none cursor-pointer group ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
          : 'opacity-0 translate-y-3 scale-95 pointer-events-none invisible'
      }`}
    >
      <ArrowUp
        className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none"
        aria-hidden="true"
      />
    </button>
  );
};
