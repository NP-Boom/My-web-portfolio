import React from 'react';
import {
  Megaphone,
  FileText,
  Printer,
  Sparkles,
  Building2,
  Palette,
  ArrowRight
} from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ServicesProps {
  onServiceSelect?: (serviceId: string) => void;
  lang: 'th' | 'en';
}

const iconMap: Record<string, React.ReactNode> = {
  Megaphone: <Megaphone className="w-6 h-6 text-blue-400" />,
  FileText: <FileText className="w-6 h-6 text-cyan-400" />,
  Printer: <Printer className="w-6 h-6 text-sky-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-indigo-400" />,
  Building2: <Building2 className="w-6 h-6 text-blue-300" />,
  Palette: <Palette className="w-6 h-6 text-teal-400" />
};

export const Services: React.FC<ServicesProps> = ({ onServiceSelect, lang }) => {
  return (
    <section id="services" className="py-12 sm:py-14 relative bg-[#060b14]/90 border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
            {lang === 'th' ? 'บริการด้านงานออกแบบ' : 'MY SERVICES'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'th' ? 'สิ่งที่จะช่วยยกระดับแบรนด์ของคุณ' : 'What I Can Do For You'}
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-relaxed">
            {lang === 'th'
              ? 'ด้วยประสบการณ์การออกแบบกว่า 10 ปี เราสร้างสรรค์ผลงานที่ผสมผสานความสวยงามเข้ากับหลักจิตวิทยาการตลาด เพื่อผลลัพธ์ที่ดีที่สุดสำหรับธุรกิจของคุณ'
              : 'Combining over a decade of design craftsmanship with marketing psychology to deliver compelling visuals that drive engagement and business growth.'}
          </p>
        </div>

        {/* Services Grid (Matching the 4-column / 6-card dark grid in reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESUME_DATA.services.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#0b1325]/90 hover:bg-[#0e1933] border border-white/10 hover:border-blue-500/40 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Top Icon Box */}
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  {iconMap[service.icon] || <Sparkles className="w-6 h-6 text-blue-400" />}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {lang === 'th' ? service.title : service.titleEn}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tags / Sub-services */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
