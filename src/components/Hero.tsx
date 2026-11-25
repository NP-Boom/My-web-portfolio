import React from 'react';
import { ArrowRight, Mail, FileDown, CheckCircle2, Sparkles, FolderOpen } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';
import { HeroParticles } from './HeroParticles';

interface HeroProps {
  onContactClick: () => void;
  lang: 'th' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, lang }) => {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      {/* Hero Atmosphere & Directional Contrast Scrims over Global Manhattan Skyline */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft ambient horizon glow */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[360px] bg-blue-500/12 blur-[130px] rounded-full" />

        {/* Directional scrims keeping left typography crisp while showcasing the sharp Manhattan skyline */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-[#040914]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040914]/78 via-[#040914]/32 to-transparent" />

        {/* Subtle animated studio particle layer */}
        <HeroParticles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#060b14]/65 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide mb-3 shadow-md shadow-black/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{lang === 'th' ? 'สวัสดีครับ ยินดีต้อนรับ' : "Hello, I'm"}</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-2 drop-shadow-[0_4px_20px_rgba(2,6,23,0.9)]">
              {RESUME_DATA.nameEn} (Boom)
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-200 bg-clip-text text-transparent mb-7 drop-shadow-[0_2px_16px_rgba(2,6,23,0.85)]">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-100 hover:text-white bg-[#070f1f]/70 hover:bg-[#0b162c]/85 backdrop-blur-sm border border-white/20 active:scale-95 transition-all shadow-md shadow-black/30"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{lang === 'th' ? 'ติดต่อจ้างงาน' : 'Contact Me'}</span>
              </button>

              <a
                href={RESUME_DATA.pdfResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-200 hover:text-white bg-[#070f1f]/70 hover:bg-[#0b162c]/85 backdrop-blur-sm border border-white/20 active:scale-95 transition-all shadow-md shadow-black/30"
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-700/35 via-indigo-600/20 to-amber-400/18 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-85" />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0b1730]/90 to-[#060d1d]/95 border border-blue-400/20 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#060e20] ring-1 ring-amber-200/15">
                  <img
                    src={RESUME_DATA.avatar}
                    alt={RESUME_DATA.nameEn}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle bottom gradient on image */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#040a18] via-[#040a18]/55 to-transparent" />

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
