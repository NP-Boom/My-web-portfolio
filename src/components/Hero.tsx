import React from 'react';
import { ArrowRight, Mail, FileDown, CheckCircle2, Sparkles, FolderOpen } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  lang: 'th' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, lang }) => {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      {/* Background Hero Scenery - Minimalist Designer Desk in Website Blue Tone */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base dark container */}
        <div className="absolute inset-0 bg-[#060b14]" />

        {/* 3D Black Cubes Abstract Backdrop with deep blue duotone grading */}
        <img
          src="/assets/aistudio/black-cubes-background-abstract_b531b825.jpg"
          alt="Abstract 3D black cubes backdrop"
          className="w-full h-full object-cover object-[center_35%] opacity-75 scale-105"
          style={{
            filter: 'sepia(100%) hue-rotate(190deg) saturate(380%) brightness(0.85) contrast(1.25)',
          }}
        />

        {/* Deep blue color wash and blend layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#051329]/80 via-[#09224d]/45 to-[#061022]/70 mix-blend-color" />
        <div className="absolute inset-0 bg-blue-600/15 mix-blend-overlay" />

        {/* Ambient atmospheric glow highlights matching 3D edges */}
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[400px] bg-blue-500/25 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[350px] bg-cyan-500/20 blur-[120px] pointer-events-none rounded-full" />

        {/* Gradients to keep text super legible on left while showing 3D geometry clearly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b14]/90 via-[#060b14]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{lang === 'th' ? 'สวัสดีครับ ยินดีต้อนรับ' : "Hello, I'm"}</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-2">
              {RESUME_DATA.nameEn} (Boom)
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent mb-7">
              {lang === 'th' ? 'นักออกแบบกราฟิก' : 'Graphic Designer'}
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
              >
                <span>{lang === 'th' ? 'ดูผลงานออกแบบ' : 'View My Work'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95 transition-all"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{lang === 'th' ? 'ติดต่อจ้างงาน' : 'Contact Me'}</span>
              </button>

              <a
                href={RESUME_DATA.pdfResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95 transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'th' ? 'Resume PDF' : 'Download CV'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-84 md:w-96 group">
              {/* Ambient Glows */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-80" />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-white/10 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0a1222]">
                  <img
                    src={RESUME_DATA.avatar}
                    alt={RESUME_DATA.nameEn}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle bottom gradient on image */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060b14] via-[#060b14]/50 to-transparent" />

                  {/* Overlay Tag inside card */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <div>
                      <p className="font-bold text-sm text-white drop-shadow">{RESUME_DATA.name}</p>
                      <p className="text-cyan-300 font-medium text-xs">บูม · Graphic Designer</p>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-600/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold border border-white/20">
                      <span>Freelance & Full-time</span>
                    </div>
                  </div>
                </div>

                {/* Floating skill badge Ps / Ai */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="py-2 px-3 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center gap-2">
                    <span className="font-extrabold text-blue-400 font-mono text-sm">Ps</span>
                    <span className="text-slate-300 font-medium">Photoshop</span>
                  </div>
                  <div className="py-2 px-3 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center gap-2">
                    <span className="font-extrabold text-amber-400 font-mono text-sm">Ai</span>
                    <span className="text-slate-300 font-medium">Illustrator</span>
                  </div>
                </div>
              </div>

              {/* Floating Quick Feature Badge */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#0d1629]/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">ผลงานคุณภาพระดับมืออาชีพ</p>
                  <p className="text-sm font-extrabold text-white">Creative & Commercial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
