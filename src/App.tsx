/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ExperienceSkills } from './components/ExperienceSkills';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { Phone, MessageCircle } from 'lucide-react';
import { RESUME_DATA } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<'th' | 'en'>('th');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-200 selection:bg-blue-600 selection:text-white relative">
      {/* Global 3D Black Cubes Abstract Wallpaper - Graded in Deep Cyber/Sapphire Blue */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <img
          src="/assets/aistudio/black-cubes-background-abstract_b531b825.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-30 scale-100"
          style={{
            filter: 'sepia(100%) hue-rotate(190deg) saturate(380%) brightness(0.75) contrast(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-[#060b14]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b14]/60 via-[#060b14]/30 to-[#060b14]" />
      </div>

      {/* Top Navbar */}
      <Navbar onContactClick={scrollToContact} lang={lang} setLang={setLang} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onContactClick={scrollToContact} lang={lang} />

        {/* About Section (ข้อมูลติดต่อและโปรไฟล์) */}
        <About lang={lang} />

        {/* Portfolio Showcase (ต่อจากส่วนข้อมูลติดต่อและโปรไฟล์) */}
        <Projects lang={lang} />

        {/* Services Section */}
        <Services lang={lang} />

        {/* Skills & Experience Timeline */}
        <ExperienceSkills lang={lang} />

        {/* Contact & Inquiry Banner */}
        <ContactCta lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Quick Action Widget for quick mobile / desktop contact */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        <a
          href={RESUME_DATA.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#06c755] hover:bg-[#05b54c] text-white text-xs font-bold shadow-xl shadow-[#06c755]/30 hover:scale-105 transition-all group"
          title="ติดต่อทาง LINE: 0955893230"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">LINE: {RESUME_DATA.line}</span>
        </a>

        <a
          href={`tel:${RESUME_DATA.phoneRaw}`}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-xl shadow-blue-600/40 hover:scale-105 transition-all group"
          title="โทรติดต่อ บูม ทันที"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{RESUME_DATA.phone}</span>
        </a>
      </aside>
    </div>
  );
}
