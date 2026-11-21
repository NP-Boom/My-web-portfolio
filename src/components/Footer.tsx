import React from 'react';
import { ArrowUp, FileDown } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface FooterProps {
  lang: 'th' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#040810] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
              <div className="w-full h-full bg-[#060b14] rounded-[11px] flex items-center justify-center font-bold text-sm text-white">
                B
              </div>
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-white block">
                {RESUME_DATA.nameEn}
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-blue-400">
                GRAPHIC DESIGNER · BOOM DESIGN
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-medium text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">
              {lang === 'th' ? 'หน้าแรก' : 'Home'}
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              {lang === 'th' ? 'เกี่ยวกับ' : 'About'}
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              {lang === 'th' ? 'ผลงาน' : 'Projects'}
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              {lang === 'th' ? 'บริการ' : 'Services'}
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              {lang === 'th' ? 'ประสบการณ์' : 'Experience'}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {lang === 'th' ? 'ติดต่อ' : 'Contact'}
            </a>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={RESUME_DATA.pdfResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-blue-600/20 text-slate-400 hover:text-cyan-300 border border-white/10 transition-colors"
              title="ดาวน์โหลด Resume (PDF)"
            >
              <FileDown className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              title="กลับสู่ด้านบน"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {RESUME_DATA.nameEn} ({RESUME_DATA.name}). All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Portfolio & Resume Crafted for Boom Design</span>
            <span className="text-slate-600">·</span>
            <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
