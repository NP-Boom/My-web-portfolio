import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown, Phone, Mail, FolderKanban } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
  lang: 'th' | 'en';
  setLang: (lang: 'th' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelTh: 'หน้าแรก', labelEn: 'Home' },
    { href: '#about', labelTh: 'เกี่ยวกับ', labelEn: 'About' },
    { href: '#projects', labelTh: 'ผลงาน', labelEn: 'Projects' },
    { href: '#services', labelTh: 'บริการ', labelEn: 'Services' },
    { href: '#experience', labelTh: 'ประสบการณ์', labelEn: 'Experience' },
    { href: '#contact', labelTh: 'ติดต่อ', labelEn: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060b14]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#070e1c] rounded-[11px] flex items-center justify-center font-bold text-lg text-white">
                B
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {RESUME_DATA.nameEn}
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-blue-400">
                GRAPHIC DESIGNER
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {lang === 'th' ? link.labelTh : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Language Switch */}
            <button
              onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="สลับภาษา / Switch Language"
            >
              {lang === 'th' ? 'EN' : 'TH'}
            </button>

            {/* Resume Download */}
            <a
              href={RESUME_DATA.pdfResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume PDF</span>
            </a>

            {/* Hire Me CTA Button */}
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 active:scale-95 transition-all"
            >
              <span>{lang === 'th' ? 'ติดต่อจ้างงาน' : 'Hire Me'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
              className="px-2 py-1 text-xs font-semibold rounded border border-white/10 bg-white/5 text-slate-300"
            >
              {lang === 'th' ? 'EN' : 'TH'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a1120] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-white/5 text-slate-200 hover:bg-blue-600/20 hover:text-white transition-colors"
              >
                {lang === 'th' ? link.labelTh : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={RESUME_DATA.pdfResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-medium text-slate-200 bg-white/5 border border-white/10"
            >
              <FileDown className="w-4 h-4 text-blue-400" />
              <span>ดาวน์โหลด Resume (PDF)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30"
            >
              <span>{lang === 'th' ? 'ติดต่อจ้างงานทันที' : 'Hire Me Now'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
