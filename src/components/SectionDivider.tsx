import React from 'react';

interface SectionDividerProps {
  id?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ id }) => {
  return (
    <div
      id={id}
      data-testid="section-divider"
      aria-hidden="true"
      className="relative z-20 w-full h-px pointer-events-none select-none overflow-visible"
    >
      {/* Full-width subtle dark-blue base seam fading cleanly at edges */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0077ff]/45 to-transparent" />

      {/* Focused soft neon-blue gradient core line */}
      <div className="absolute inset-x-0 top-0 mx-auto w-[86%] max-w-6xl h-px bg-gradient-to-r from-transparent via-[#1da1ff]/85 to-transparent" />

      {/* Delicate center cyan specular highlight */}
      <div className="absolute inset-x-0 top-0 mx-auto w-[42%] max-w-2xl h-px bg-gradient-to-r from-transparent via-[#7dd3fc]/95 to-transparent" />

      {/* Tight soft neon-blue glow halo */}
      <div className="absolute inset-x-0 -top-[2px] mx-auto w-[72%] max-w-5xl h-[5px] bg-gradient-to-r from-transparent via-[#1da1ff]/50 to-transparent blur-[4px]" />

      {/* Whisper-soft ambient bloom */}
      <div className="absolute inset-x-0 -top-[5px] mx-auto w-[46%] max-w-2xl h-[11px] bg-gradient-to-r from-transparent via-[#38bdf8]/25 to-transparent blur-[10px]" />
    </div>
  );
};
