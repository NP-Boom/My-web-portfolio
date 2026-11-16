import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  User,
  CheckCircle2,
  FileDown,
  Copy,
  Check,
  Award,
  Layers,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface AboutProps {
  lang: 'th' | 'en';
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLine, setCopiedLine] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyLine = () => {
    navigator.clipboard.writeText(RESUME_DATA.line);
    setCopiedLine(true);
    setTimeout(() => setCopiedLine(false), 2000);
  };

  return (
    <section id="about" className="py-10 sm:py-14 relative bg-[#070d18]/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Story & Highlights */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
              {lang === 'th' ? 'เกี่ยวกับตัวผม' : 'ABOUT ME'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {lang === 'th'
                ? 'ออกแบบสื่อกราฟิกที่ตอบโจทย์ ทรงพลัง และสร้างผลลัพธ์จริง'
                : 'Designing Visuals That Make a Real Impact'}
            </h2>

            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
              <p>
                {lang === 'th'
                  ? 'สวัสดีครับ ผมชื่อ '
                  : "Hello! I am "}
                <strong className="text-white font-semibold">
                  {lang === 'th' ? `${RESUME_DATA.name} (ชื่อเล่น: บูม)` : `${RESUME_DATA.nameEn} (Boom)`}
                </strong>
                {lang === 'th'
                  ? ' นักออกแบบกราฟิกผู้มีประสบการณ์การทำงานจริงในแวดวงสื่อออนไลน์และออฟไลน์มากกว่า 10 ปี'
                  : ' a professional Graphic Designer with over 10 years of proven experience in both digital and print media.'}
              </p>
              <p>
                {lang === 'th'
                  ? 'ความเชี่ยวชาญหลักครอบคลุมงานหลากหลายประเภท ได้แก่ Poster โปสเตอร์, Brochure โบรชัวร์, Infographic, Facebook Ads, Banner แบนเนอร์, Leaflets แผ่นพับ และ Social Media Post ทุกรูปแบบ โดยทำงานให้กับองค์กรชั้นนำ อาทิ SCG, Sanwa และเพจชื่อดังระดับประเทศมากมาย'
                  : 'My core expertise spans across Posters, Brochures, Infographics, Facebook Ads, Product Banners, Leaflets, and high-impact Social Media campaigns for renowned brands such as SCG, Sanwa, and prominent educational and corporate leaders.'}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                {lang === 'th'
                  ? 'หัวใจสำคัญของการทำงานคือ การเข้าใจกลุ่มเป้าหมาย จัดวางองค์ประกอบอย่างลงตัว คัดสรร Typography ที่คมชัด และให้ความสำคัญกับความถูกต้องของไฟล์งานทั้งในจอและงานพิมพ์'
                  : 'I believe great design bridges aesthetics with business results — catching attention, communicating value effortlessly, and driving customer action.'}
              </p>
            </div>

            {/* Quick check highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-5 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">10+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">Available for Freelance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">Online & Offline Media</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">Top Corporate Clients</span>
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="flex items-center gap-4">
              <a
                href={RESUME_DATA.pdfResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 active:scale-95 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>{lang === 'th' ? 'ดาวน์โหลด Resume ฉบับเต็ม (PDF)' : 'Download Full CV (PDF)'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Metadata Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0b1324]/95 border border-white/10 p-5 sm:p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center justify-between">
                <span>{lang === 'th' ? 'ข้อมูลติดต่อและโปรไฟล์' : 'Contact & Profile Details'}</span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded">
                  2025 - 2026
                </span>
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                {/* Name & Nickname */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">ชื่อ-นามสกุล / Nickname</p>
                    <p className="text-white font-semibold mt-0.5">{RESUME_DATA.name} ({RESUME_DATA.nameEn})</p>
                    <p className="text-cyan-300 text-xs mt-0.5">ชื่อเล่น: {RESUME_DATA.nickname}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{lang === 'th' ? 'ที่อยู่ / Location' : 'Location'}</p>
                    <p className="text-white font-semibold mt-0.5">{RESUME_DATA.location}</p>
                  </div>
                </div>

                {/* Email with 1-click copy */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-400 font-medium">อีเมล / Email</p>
                    <div className="flex items-center justify-between gap-2 mt-0.5">
                      <a
                        href={`mailto:${RESUME_DATA.email}`}
                        className="text-white hover:text-cyan-300 font-semibold transition-colors"
                      >
                        {RESUME_DATA.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="คัดลอกอีเมล / Copy email"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    {copiedEmail && (
                      <span className="text-[11px] text-emerald-400 mt-1 block">คัดลอกอีเมลเรียบร้อยแล้ว!</span>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">เบอร์โทรศัพท์ / Phone</p>
                    <a
                      href={`tel:${RESUME_DATA.phoneRaw}`}
                      className="text-white hover:text-cyan-300 font-semibold mt-0.5 block transition-colors"
                    >
                      {RESUME_DATA.phone}
                    </a>
                  </div>
                </div>

                {/* LINE */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-[#06c755]/15 text-[#06c755] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-400 font-medium">LINE ID / Line</p>
                    <div className="flex items-center justify-between gap-2 mt-0.5">
                      <a
                        href={RESUME_DATA.lineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#06c755] font-semibold transition-colors"
                      >
                        {RESUME_DATA.line}
                      </a>
                      <button
                        onClick={handleCopyLine}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="คัดลอก LINE ID"
                      >
                        {copiedLine ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    {copiedLine && (
                      <span className="text-[11px] text-emerald-400 mt-1 block">คัดลอก LINE ID เรียบร้อยแล้ว!</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
