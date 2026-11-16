import React from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle, Sparkles, Layers, ChevronRight } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ExperienceSkillsProps {
  lang: 'th' | 'en';
}

export const ExperienceSkills: React.FC<ExperienceSkillsProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-12 sm:py-14 relative bg-[#060b14]/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1.5 block">
              {lang === 'th' ? 'เส้นทางสายอาชีพ' : 'CAREER TIMELINE'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-5">
              {lang === 'th' ? 'ประสบการณ์การทำงาน (10+ ปี)' : 'Work Experience'}
            </h2>

            <div className="space-y-4 relative before:content-[''] before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-cyan-500 before:to-slate-800">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={exp.id} className="relative pl-11 group">
                  {/* Timeline dot */}
                  <div className="absolute left-[9px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#060b14] border-2 border-blue-400 group-hover:scale-125 group-hover:border-cyan-300 transition-all shadow-md shadow-blue-500/50" />

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1325]/95 border border-white/10 hover:border-blue-500/30 transition-all shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-cyan-400 mb-3">
                      {exp.company}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights list if any */}
                    {exp.highlights && (
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <p className="text-xs font-semibold text-slate-400 mb-2">
                          {lang === 'th' ? 'เพจและวิทยากรที่ร่วมงานด้วย:' : 'Key Clients & Pages:'}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                          {exp.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                              <span className="truncate">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Software Mastery & Skills */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                {lang === 'th' ? 'ทักษะและความเชี่ยวชาญ' : 'SKILLS & EXPERTISE'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-8">
                {lang === 'th' ? 'เครื่องมือและโปรแกรมหลัก' : 'Software Mastery'}
              </h2>
            </div>

            {/* Ps & Ai Hero Cards */}
            <div className="grid grid-cols-1 gap-4">
              {/* Photoshop Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#03152e] to-[#071d40] border border-blue-500/30 shadow-xl relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#001e36] border border-[#00a8ff]/40 flex items-center justify-center font-black text-2xl text-[#00a8ff] shadow-lg">
                      Ps
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Adobe Photoshop</h4>
                      <p className="text-xs text-slate-400">Photo Retouching & Composite</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-[#00a8ff] font-mono">98%</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  เชี่ยวชาญการตัดต่อ รีทัช จัดแสงเงาสินค้า ปรับแต่งโทนสี ทำภาพม็อคอัพสินค้า และสร้างกราฟิก Facebook Ads ที่ดึงดูดสายตา
                </p>

                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden">
                  <div className="w-[98%] h-full rounded-full bg-gradient-to-r from-blue-500 to-[#00a8ff]" />
                </div>
              </div>

              {/* Illustrator Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#291404] to-[#3d1f08] border border-amber-500/30 shadow-xl relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#330000] border border-[#ff9a00]/40 flex items-center justify-center font-black text-2xl text-[#ff9a00] shadow-lg">
                      Ai
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Adobe Illustrator</h4>
                      <p className="text-xs text-slate-400">Vector Art & Infographics</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-[#ff9a00] font-mono">95%</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  เชี่ยวชาญงานวาดเวกเตอร์ โลโก้ อินโฟกราฟิก สื่อสิ่งพิมพ์ โปสเตอร์ โบรชัวร์ การจัดหน้า และการเตรียมไฟล์ส่งพิมพ์ระดับอุตสาหกรรม
                </p>

                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden">
                  <div className="w-[95%] h-full rounded-full bg-gradient-to-r from-amber-600 to-[#ff9a00]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
