import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, MessageSquare, ExternalLink, FileDown, ArrowRight, MessageCircle } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ContactCtaProps {
  lang: 'th' | 'en';
}

export const ContactCta: React.FC<ContactCtaProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'social-ads',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 overflow-hidden bg-[#050912]">
      {/* Background - 3D Black Cubes Abstract Backdrop in Website Blue Tone */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/aistudio/black-cubes-background-abstract_b531b825.jpg"
          alt="Abstract 3D black cubes backdrop"
          className="w-full h-full object-cover object-[center_50%] opacity-55 scale-105"
          style={{
            filter: 'sepia(100%) hue-rotate(190deg) saturate(380%) brightness(0.8) contrast(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-[#060b14]/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/75 to-[#060b14]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Banner Title */}
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1.5 block">
          {lang === 'th' ? 'ร่วมงานกับเรา' : 'COLLABORATION'}
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {lang === 'th' ? "มาสร้างสรรค์ผลงานชั้นยอดไปด้วยกัน" : "Let's Work Together"}
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-6">
          {lang === 'th'
            ? 'มีโปรเจกต์ที่ต้องการออกแบบ หรืออยากปรึกษาแนวทางงานดีไซน์ ติดต่อพูดคุยกันได้ตลอดเวลาครับ'
            : "Have a project in mind? I'd love to hear about it. Let's create something amazing together."}
        </p>

        {/* Quick Contact Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href={`tel:${RESUME_DATA.phoneRaw}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>โทรเลย: {RESUME_DATA.phone}</span>
          </a>

          <a
            href={RESUME_DATA.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#06c755] hover:bg-[#05b54c] shadow-lg shadow-[#06c755]/30 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>LINE: {RESUME_DATA.line}</span>
          </a>

          <a
            href={`mailto:${RESUME_DATA.email}?subject=ติดต่อจ้างงานออกแบบกราฟิก - Narupon Boom`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 active:scale-95 transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{RESUME_DATA.email}</span>
          </a>

          <a
            href={RESUME_DATA.pdfResumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <FileDown className="w-4 h-4 text-slate-400" />
            <span>Resume PDF</span>
          </a>
        </div>

        {/* Interactive Inquiry Card */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-[#0b1324]/90 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-md text-left">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {lang === 'th' ? 'ส่งข้อความเรียบร้อยแล้ว!' : 'Message Sent Successfully!'}
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                {lang === 'th'
                  ? `ขอบคุณ คุณ ${formData.name} ที่ให้ความสนใจ ผมจะติดต่อกลับทางอีเมล ${formData.email} หรือโทรกลับโดยเร็วที่สุดครับ`
                  : `Thank you, ${formData.name}! I will reach out to you at ${formData.email} shortly.`}
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${RESUME_DATA.email}?subject=ติดต่อจ้างงานจาก ${formData.name}&body=${encodeURIComponent(formData.message)}`}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500"
                >
                  เปิดส่งผ่าน Email Client
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/10 hover:bg-white/15"
                >
                  ส่งข้อความอีกครั้ง
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === 'th' ? 'ส่งข้อความเพื่อประเมินราคา / ปรึกษางาน' : 'Send an Inquiry / Request a Quote'}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {lang === 'th'
                  ? 'กรอกข้อมูลเบื้องต้นเพื่อให้ผมประเมินเนื้องานและระยะเวลาได้รวดเร็วขึ้นครับ'
                  : 'Fill in your project details to get a prompt proposal.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    {lang === 'th' ? 'ชื่อของคุณ / องค์กร *' : 'Your Name / Company *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="คุณสมชาย หรือ บริษัท ABC"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    {lang === 'th' ? 'อีเมลสำหรับติดต่อกลับ *' : 'Your Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    {lang === 'th' ? 'เบอร์โทรศัพท์ (ถ้ามี)' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="081-xxx-xxxx"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    {lang === 'th' ? 'ประเภทงานที่ต้องการ' : 'Service Type'}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a1120] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="social-ads">Facebook Ads & สื่อโซเชียล</option>
                    <option value="infographics">Infographics & สื่อให้ความรู้</option>
                    <option value="product-beauty">ภาพสินค้า สกินแคร์ อาหารเสริม</option>
                    <option value="print-media">โปสเตอร์ โบรชัวร์ สื่อสิ่งพิมพ์</option>
                    <option value="corporate-pr">งานประชาสัมพันธ์องค์กร / อื่นๆ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  {lang === 'th' ? 'รายละเอียดงาน / ข้อความ *' : 'Project Details / Message *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === 'th' ? 'ระบุจำนวนภาพ สไตล์ที่ต้องการ หรือกำหนดเวลาส่งงาน...' : 'Describe your project requirements, deliverables, timeline...'}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'th' ? 'ส่งข้อความติดต่อจ้างงาน' : 'Send Project Inquiry'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
