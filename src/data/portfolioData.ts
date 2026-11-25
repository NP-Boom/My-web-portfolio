/**
 * Portfolio and Resume Data for Narupon Palakul (Boom)
 * Auto-generated from user resume PDF and Google Drive portfolio folder
 */

export * from './portfolioAlbums';

export interface PortfolioItem {
  id: string;
  fileName: string;
  image: string;
  title: string;
  category: 'social-ads' | 'infographics' | 'product-beauty' | 'print-branding';
  client: string;
  description: string;
  date: string;
  tools: string[];
}

export interface ResumeData {
  name: string;
  nameEn: string;
  nickname: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  phoneRaw: string;
  line: string;
  lineUrl: string;
  location: string;
  avatar: string;
  logo: string;
  driveLink: string;
  pdfResumeUrl: string;
  summary: string;
  yearsOfExperience: number;
  completedProjects: string;
  stats: { label: string; value: string; desc: string }[];
  services: {
    id: string;
    title: string;
    titleEn: string;
    description: string;
    icon: string;
    tags: string[];
  }[];
  experience: {
    id: string;
    role: string;
    company: string;
    period: string;
    type: 'freelance' | 'fulltime';
    description: string;
    highlights?: string[];
  }[];
  skills: {
    category: string;
    items: { name: string; level: number; icon: string; desc: string }[];
  }[];
  trustedClients: {
    name: string;
    category: string;
  }[];
}

export const RESUME_DATA: ResumeData = {
  name: "นฤพนธ์ ปาละกูล",
  nameEn: "Narupon Palakul",
  nickname: "บูม (Boom)",
  title: "Professional Graphic Designer",
  tagline: "Boom Design — Think of Design",
  email: "narupon.work222@gmail.com",
  phone: "095-589-3230",
  phoneRaw: "0955893230",
  line: "0955893230",
  lineUrl: "https://line.me/ti/p/~0955893230",
  location: "นนทบุรี (ประเทศไทย)",
  avatar: "/assets/aistudio/IMG_5537_navy_gold.jpg",
  logo: "/boom_design_logo.png",
  driveLink: "https://drive.google.com/drive/folders/1eDR7zgFiU6tJAfsyfba7_wyri3txmkdB?usp=sharing",
  pdfResumeUrl: "/assets/aistudio/Resume_Boom_2025_4246d4e9.pdf",
  summary: "ประสบการณ์การทำงานด้านออกแบบสื่อออนไลน์และออฟไลน์กว่า 10 ปี เชี่ยวชาญการผลิตสื่อโฆษณา Facebook Ads แบนเนอร์สินค้า อินโฟกราฟิก โปสเตอร์ แผ่นพับ และสื่อสิ่งพิมพ์ทุกประเภท ด้วยดีไซน์ที่โดดเด่น สื่อสารตรงกลุ่มเป้าหมาย และเพิ่มยอดขายอย่างแท้จริง",
  yearsOfExperience: 10,
  completedProjects: "1,000+",
  stats: [
    { label: "ประสบการณ์ออกแบบ", value: "10+ ปี", desc: "ทั้งสื่อออนไลน์และออฟไลน์" },
    { label: "ผลงานที่ส่งมอบ", value: "1,000+", desc: "แบนเนอร์ โฆษณา และสื่อพิมพ์" },
    { label: "ความพึงพอใจลูกค้า", value: "100%", desc: "ทำงานตรงเวลา แก้งานตรงจุด" },
    { label: "สถานะการรับงาน", value: "Available", desc: "พร้อมรับงาน Freelance ทันที" }
  ],
  services: [
    {
      id: "social-media",
      title: "Facebook Ads & โซเชียลมีเดีย",
      titleEn: "Social Media & Advertising Design",
      description: "ออกแบบภาพแบนเนอร์ยิงแอด Facebook, Instagram, TikTok, Line OA เน้นภาพดึงดูดสายตา โครงสร้างโปรโมชั่นชัดเจน เพิ่มยอดคลิกและยอดสั่งซื้อ",
      icon: "Megaphone",
      tags: ["Facebook Ads", "Single & Carousel Ads", "Promotion Sets", "Line OA Rich Menu"]
    },
    {
      id: "infographic",
      title: "Infographic & ภาพให้ความรู้",
      titleEn: "Infographics & Information Design",
      description: "ย่อยข้อมูลที่ซับซ้อน ส่วนผสม ผลงานวิจัย หรือสถิติต่างๆ ให้ออกมาเป็นภาพที่เข้าใจง่าย สนุก ชวนอ่าน และกระตุ้นการแชร์บนโซเชียล",
      icon: "FileText",
      tags: ["Data Visualization", "How-To Steps", "Product Ingredients", "Educational Posts"]
    },
    {
      id: "print-media",
      title: "สื่อสิ่งพิมพ์ โปสเตอร์ & แผ่นพับ",
      titleEn: "Print & Publication Media",
      description: "ออกแบบโปสเตอร์ (Poster), โบรชัวร์ (Brochure), แผ่นพับ (Leaflets), โรลอัปแบนเนอร์ (Roll-up Banner) พร้อมส่งโรงพิมพ์ด้วยไฟล์คุณภาพสูงระดับมืออาชีพ",
      icon: "Printer",
      tags: ["Poster โปสเตอร์", "Brochure โบรชัวร์", "Leaflets แผ่นพับ", "Roll-up & Exhibition"]
    },
    {
      id: "product-branding",
      title: "สื่อโปรโมทสินค้า & สกินแคร์",
      titleEn: "Product Marketing & Brand Collateral",
      description: "งานกราฟิกสินค้า อาหารเสริม ความงาม สกินแคร์ จัดวาง Packshot สินค้าเสมือนจริงในสตูดิโอ เพิ่มมูลค่าแบรนด์ให้ดูพรีเมียมและน่าเชื่อถือ",
      icon: "Sparkles",
      tags: ["Cosmetics & Skincare", "Packshot Retouching", "Promotion Mockup", "Brand Collateral"]
    },
    {
      id: "corporate-pr",
      title: "งานประชาสัมพันธ์ & Corporate PR",
      titleEn: "Corporate PR & e-Resource Media",
      description: "จากประสบการณ์ 7+ ปีด้าน Public Relations Officer และ e-Resource Service จึงเข้าใจการสื่อสารภาพลักษณ์องค์กร การศึกษา และงานสถาบันอย่างลึกซึ้ง",
      icon: "Building2",
      tags: ["Corporate Communications", "e-Resource Graphics", "Press Releases", "Event Key Visual"]
    },
    {
      id: "design-tools",
      title: "การใช้งานโปรแกรมระดับเชี่ยวชาญ",
      titleEn: "Professional Software Proficiency",
      description: "ใช้งานโปรแกรมมาตรฐานอุตสาหกรรม Adobe Photoshop (Ps) และ Adobe Illustrator (Ai) ได้อย่างคล่องแคล่ว จัดการเลเยอร์และไฟล์อย่างเป็นระบบ",
      icon: "Palette",
      tags: ["Adobe Photoshop (Ps)", "Adobe Illustrator (Ai)", "Pre-press Preparation", "Color Proofing"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Freelance Graphic Designer",
      company: "Facebook Pages & Corporate Clients",
      period: "2021 - ปัจจุบัน",
      type: "freelance",
      description: "ออกแบบกราฟิกสื่อออนไลน์ โฆษณา Facebook Ads โปสเตอร์ และสื่อสารการตลาดให้กับเพจชื่อดังระดับประเทศและองค์กรชั้นนำ",
      highlights: [
        "อ.บัณฑิต อึ้งรังษี (Bundit Ungrangsee)",
        "ครูชัย M.I.B Marketing In Black (บริษัท Agency)",
        "ครูเอว่าสุรัญญา ธรรมสุนทร (I am ava)",
        "ครูพอลล่า นักจิตวิทยา : Paula The Mentalist",
        "อาจารย์ มงคล มนต์ดวงเศรษฐี",
        "มู everyday"
      ]
    },
    {
      id: "exp-2",
      role: "Freelance Graphic Designer",
      company: "บริษัทในเครือของผลิตภัณฑ์ Sanwa",
      period: "2021 - ปัจจุบัน",
      type: "freelance",
      description: "ออกแบบสื่อสิ่งพิมพ์ แผ่นพับ แบนเนอร์ผลิตภัณฑ์ และสื่อส่งเสริมการขายให้กับเครือผลิตภัณฑ์ Sanwa ชั้นนำของไทย"
    },
    {
      id: "exp-3",
      role: "Freelance Graphic Designer",
      company: "บริษัท SCG (บริษัท ปูนซิเมนต์ไทย จำกัด) และบริษัทในเครือ",
      period: "2021 - ปัจจุบัน",
      type: "freelance",
      description: "ออกแบบสื่อประชาสัมพันธ์ โปสเตอร์ สิ่งพิมพ์ และอาร์ตเวิร์กให้กับองค์กรระดับประเทศ SCG และบริษัทในเครือ"
    },
    {
      id: "exp-4",
      role: "Senior Public Relations Officer & Information e-Resource Service",
      company: "สถาบันการจัดการปัญญาภิวัฒน์ (PIM)",
      period: "2014 - 2021 (7 ปี)",
      type: "fulltime",
      description: "รับผิดชอบงานสื่อสารประชาสัมพันธ์ ออกแบบสื่อกราฟิก งาน e-Resource ประชาสัมพันธ์งานวิชาการและกิจกรรมของสถาบันการจัดการปัญญาภิวัฒน์"
    },
    {
      id: "exp-5",
      role: "Officer at Central Library",
      company: "Eastern Asia University (มหาวิทยาลัยอีสเทิร์นเอเชีย)",
      period: "2012 - 2014 (2 ปี)",
      type: "fulltime",
      description: "ดูแลงานประชาสัมพันธ์ สื่อสิ่งพิมพ์ และงานบริการสารสนเทศห้องสมุดกลาง"
    }
  ],
  skills: [
    {
      category: "Software & Tools",
      items: [
        { name: "Adobe Photoshop (Ps)", level: 98, icon: "Ps", desc: "รีทัชภาพ จัดวางองค์ประกอบ ออกแบบแบนเนอร์ แสงและเงาสมจริง" },
        { name: "Adobe Illustrator (Ai)", level: 95, icon: "Ai", desc: "งาน Vector, โลโก้, อินโฟกราฟิก, จัดหน้าสื่อสิ่งพิมพ์และฟอนต์" }
      ]
    },
    {
      category: "Design Specialization",
      items: [
        { name: "Facebook Ads & Promotion Banner", level: 98, icon: "Ads", desc: "ออกแบบภาพโฆษณาที่หยุดนิ้วโป้งคนดูและสร้างยอดขาย" },
        { name: "Infographic & Data Visualization", level: 92, icon: "Info", desc: "แปลงข้อมูลสถิติให้เข้าใจง่ายภายใน 3 วินาที" },
        { name: "Print Media (Poster, Brochure, Leaflets)", level: 95, icon: "Print", desc: "การจัดการไฟล์สิ่งพิมพ์ สี CMYK และการส่งพิมพ์" },
        { name: "Public Relations & Brand Identity", level: 90, icon: "PR", desc: "การวาง Mood & Tone และเอกลักษณ์ของแบรนด์" }
      ]
    }
  ],
  trustedClients: [
    { name: "SCG ปูนซิเมนต์ไทย", category: "Corporate" },
    { name: "Sanwa ซันวา", category: "Manufacturing" },
    { name: "อ.บัณฑิต อึ้งรังษี", category: "Influencer / Coach" },
    { name: "M.I.B Marketing In Black", category: "Digital Agency" },
    { name: "สถาบันการจัดการปัญญาภิวัฒน์ (PIM)", category: "Education" },
    { name: "Paula The Mentalist", category: "Psychology" },
    { name: "I am ava", category: "Parenting & Lifestyle" },
    { name: "มู everyday", category: "Lifestyle & Content" }
  ]
};

export const PORTFOLIO_CATEGORIES = [
  {
    "id": "all",
    "label": "ทั้งหมด (All Works)"
  },
  {
    "id": "social-ads",
    "label": "Facebook Ads & โปรโมชั่น"
  },
  {
    "id": "infographics",
    "label": "อินโฟกราฟิก & ให้ความรู้"
  },
  {
    "id": "product-beauty",
    "label": "สกินแคร์ & อาหารเสริม"
  },
  {
    "id": "print-branding",
    "label": "สิ่งพิมพ์ & โปสเตอร์"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    "id": "proj-1",
    "fileName": "1727511859401.jpg",
    "image": "/portfolio/1727511859401.jpg",
    "title": "Mana Collagen 3 Free 1 Flash Sale",
    "category": "social-ads",
    "client": "Mana Collagen",
    "description": "ออกแบบภาพโปรโมชั่น Facebook Ads พร้อมเซ็ตสินค้าและราคาดึงดูดใจ",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-2",
    "fileName": "1734670539041.jpg",
    "image": "/portfolio/1734670539041.jpg",
    "title": "Miga X 3.3 Mega Discount Promo",
    "category": "social-ads",
    "client": "Miga X Supplement",
    "description": "แบนเนอร์โปรโมชั่นดีลพิเศษ 3.3 กระตุ้นยอดขายบนโซเชียลมีเดีย",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-3",
    "fileName": "1740510391597.jpg",
    "image": "/portfolio/1740510391597.jpg",
    "title": "Empressa Firm Eye Cream Benefits",
    "category": "product-beauty",
    "client": "Empressa Official",
    "description": "ภาพอธิบายคุณสมบัติครีมบำรุงรอบดวงตา ดีไซน์หรูหราสะอาดตา",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-4",
    "fileName": "1740510392028.jpg",
    "image": "/portfolio/1740510392028.jpg",
    "title": "Empressa Clear Serum Retinol Formula",
    "category": "product-beauty",
    "client": "Empressa Official",
    "description": "ภาพแนะนำผลิตภัณฑ์เซรั่มสูตร HPR พร้อมรายละเอียดสารสกัด",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-5",
    "fileName": "1740617524469.jpg",
    "image": "/portfolio/1740617524469.jpg",
    "title": "Collagen Night Miracle Special Set",
    "category": "social-ads",
    "client": "Mana Skincare",
    "description": "กราฟิกเซ็ตโปรโมชั่นส่งฟรี ผิวสวยออร่าสะดุดตา",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-6",
    "fileName": "1743987824619.jpg",
    "image": "/portfolio/1743987824619.jpg",
    "title": "Anti-Stress Dietary Supplement",
    "category": "infographics",
    "client": "Miga X Health",
    "description": "อินโฟกราฟิกประโยชน์ของสารสกัด Ginkgo & Ginger สำหรับบำรุงสมอง",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-7",
    "fileName": "1743987825109.jpg",
    "image": "/portfolio/1743987825109.jpg",
    "title": "Firm Eye Cream 2 Key Benefits",
    "category": "infographics",
    "client": "Empressa Skincare",
    "description": "อินโฟกราฟิก 2 เรื่องสำคัญที่เป็นหัวใจของการดูแลรอบดวงตา",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-8",
    "fileName": "1743987832490.jpg",
    "image": "/portfolio/1743987832490.jpg",
    "title": "Gentle Retinol Clear Serum Features",
    "category": "product-beauty",
    "client": "Empressa Beauty",
    "description": "ภาพโปรโมทความอ่อนโยนสำหรับผิวบอบบางแพ้ง่าย ไม่ระคายเคือง",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-9",
    "fileName": "1743987834244.jpg",
    "image": "/portfolio/1743987834244.jpg",
    "title": "Bundit Ungrangsee Course Announcement",
    "category": "social-ads",
    "client": "อ.บัณฑิต อึ้งรังษี",
    "description": "ภาพโปรโมทคอร์สสัมมนาและหนังสือพัฒนาตนเองสไตล์พรีเมียม",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-10",
    "fileName": "1750035650403.jpg",
    "image": "/portfolio/1750035650403.jpg",
    "title": "M.I.B Marketing In Black Social Ads",
    "category": "social-ads",
    "client": "ครูชัย M.I.B Agency",
    "description": "งานออกแบบภาพโฆษณาดิจิทัลมาร์เก็ตติ้งสำหรับแคมเปญ Agency",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-11",
    "fileName": "1751242740627.jpg",
    "image": "/portfolio/1751242740627.jpg",
    "title": "I am ava Mom & Kids Lifestyle Banner",
    "category": "social-ads",
    "client": "ครูเอว่าสุรัญญา ธรรมสุนทร",
    "description": "กราฟิกเพจความรู้การเลี้ยงลูกและพัฒนาการเด็กในเชิงบวก",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-12",
    "fileName": "1751846886384.jpg",
    "image": "/portfolio/1751846886384.jpg",
    "title": "Paula The Mentalist Psychology Post",
    "category": "infographics",
    "client": "ครูพอลล่า นักจิตวิทยา",
    "description": "อินโฟกราฟิกถ่ายทอดจิตวิทยาและความสุขในชีวิตประจำวัน",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-13",
    "fileName": "1751846887917.jpg",
    "image": "/portfolio/1751846887917.jpg",
    "title": "SCG Building Materials Poster",
    "category": "print-branding",
    "client": "บริษัท SCG (ปูนซิเมนต์ไทย)",
    "description": "งานออกแบบสื่อสิ่งพิมพ์และภาพประชาสัมพันธ์ผลิตภัณฑ์ก่อสร้าง SCG",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-14",
    "fileName": "1751846889197.jpg",
    "image": "/portfolio/1751846889197.jpg",
    "title": "Sanwa Plumbing Innovations Brochure",
    "category": "print-branding",
    "client": "บริษัทในเครือผลิตภัณฑ์ Sanwa",
    "description": "แผ่นพับโบรชัวร์และแบนเนอร์สื่อสารนวัตกรรมวาล์วน้ำ Sanwa",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-15",
    "fileName": "1757898957579.jpg",
    "image": "/portfolio/1757898957579.jpg",
    "title": "Master Mongkol Lucky Astrology Visual",
    "category": "social-ads",
    "client": "อาจารย์มงคล มนต์ดวงเศรษฐี",
    "description": "ภาพกราฟิกสายมูเสริมดวงและคำทำนายมงคลประจำสัปดาห์",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-16",
    "fileName": "1757898958252.jpg",
    "image": "/portfolio/1757898958252.jpg",
    "title": "Moo Everyday Daily Horoscope Card",
    "category": "social-ads",
    "client": "มู everyday",
    "description": "การ์ดกราฟิกคำทำนายและสีมงคลประจำวัน เพิ่มยอดแชร์และ Engagement",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-17",
    "fileName": "1757898958750.jpg",
    "image": "/portfolio/1757898958750.jpg",
    "title": "PIM e-Resource & Library Campaign",
    "category": "print-branding",
    "client": "สถาบันการจัดการปัญญาภิวัฒน์",
    "description": "โปสเตอร์และแบนเนอร์ส่งเสริมการใช้งานฐานข้อมูลและ e-Resource",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-18",
    "fileName": "1757898959335.jpg",
    "image": "/portfolio/1757898959335.jpg",
    "title": "Collagen Miracle Skin Whitening Offer",
    "category": "social-ads",
    "client": "Mana Collagen",
    "description": "อาร์ตเวิร์กโปรโมชั่นเซ็ตคู่สุดคุ้ม เน้นสีชมพูกลีบกุหลาบสดใส",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-19",
    "fileName": "1757898959926.jpg",
    "image": "/portfolio/1757898959926.jpg",
    "title": "Deep Brain Nourish Ginkgo Extract",
    "category": "infographics",
    "client": "Miga X Supplement",
    "description": "อินโฟกราฟิกแยกส่วนประกอบทางวิทยาศาสตร์เข้าใจง่าย",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-20",
    "fileName": "1758500557720.jpg",
    "image": "/portfolio/1758500557720.jpg",
    "title": "Luxury Facial Serum Skincare Routine",
    "category": "product-beauty",
    "client": "Empressa Beauty",
    "description": "ภาพสื่อสารขั้นตอนการบำรุงผิวหน้าให้แลดูอ่อนเยาว์",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-21",
    "fileName": "1758500560151.jpg",
    "image": "/portfolio/1758500560151.jpg",
    "title": "High-Converting Facebook Carousel Ad",
    "category": "social-ads",
    "client": "E-Commerce Brand",
    "description": "ชุดภาพโฆษณา Carousel ออกแบบตามโครงสร้างจิตวิทยาการคลิก",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-22",
    "fileName": "1758500568955.jpg",
    "image": "/portfolio/1758500568955.jpg",
    "title": "Exclusive Holiday Gift Set Banner",
    "category": "social-ads",
    "client": "Beauty & Wellness",
    "description": "แบนเนอร์เซ็ตของขวัญช่วงเทศกาลพร้อมกล่องบรรจุภัณฑ์หรู",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-23",
    "fileName": "1758500570288.jpg",
    "image": "/portfolio/1758500570288.jpg",
    "title": "Science-Backed Skincare Infographic",
    "category": "infographics",
    "client": "Dermacare Lab",
    "description": "กราฟิกอธิบายค่า pH และเกราะป้องกันผิวสำหรับลูกค้าผิวแพ้ง่าย",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-24",
    "fileName": "1758500571601.jpg",
    "image": "/portfolio/1758500571601.jpg",
    "title": "Natural Herbal Health Booster Poster",
    "category": "print-branding",
    "client": "Wellness Clinic",
    "description": "โปสเตอร์ประชาสัมพันธ์สุขภาพองค์รวมและการดูแลตนเอง",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-25",
    "fileName": "1759107437790.jpg",
    "image": "/portfolio/1759107437790.jpg",
    "title": "Executive Leadership Workshop Key Visual",
    "category": "social-ads",
    "client": "Bundit Seminar",
    "description": "ภาพ Key Visual สัมมนาผู้นำระดับสูง โทนน้ำเงินทองพรีเมียม",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-26",
    "fileName": "1759107438413.jpg",
    "image": "/portfolio/1759107438413.jpg",
    "title": "Social Media Engagement Post Series",
    "category": "social-ads",
    "client": "Digital Marketing Agency",
    "description": "เทมเพลตโพสต์สร้างปฏิสัมพันธ์ ตอบคำถาม และโพลออนไลน์",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-27",
    "fileName": "1759107438910.jpg",
    "image": "/portfolio/1759107438910.jpg",
    "title": "Product Launch Teaser Poster",
    "category": "print-branding",
    "client": "Cosmetics Brand",
    "description": "โปสเตอร์เปิดตัวสินค้าใหม่ สร้างความตื่นเต้นและน่าค้นหา",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-28",
    "fileName": "1759107439381.jpg",
    "image": "/portfolio/1759107439381.jpg",
    "title": "Superfood Nutrition Facts Infographic",
    "category": "infographics",
    "client": "Healthy Living Co.",
    "description": "อินโฟกราฟิกข้อมูลโภชนาการสารอาหารและประโยชน์ต่อร่างกาย",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-29",
    "fileName": "1759107439898.jpg",
    "image": "/portfolio/1759107439898.jpg",
    "title": "Weekend Special Flash Sale 50% Off",
    "category": "social-ads",
    "client": "Retail Brand",
    "description": "แบนเนอร์ลดราคาสุดพิเศษช่วงวันหยุด เน้นตัวเลขโปรโมชั่นชัดเจน",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-30",
    "fileName": "1759218870614.jpg",
    "image": "/portfolio/1759218870614.jpg",
    "title": "Corporate Annual Report Visual Design",
    "category": "print-branding",
    "client": "Enterprise Client",
    "description": "การจัดหน้าและภาพประกอบรายงานผลการดำเนินงานระดับองค์กร",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-31",
    "fileName": "1759218871088.jpg",
    "image": "/portfolio/1759218871088.jpg",
    "title": "Daily Motivation & Mindset Quote",
    "category": "social-ads",
    "client": "Mindset Mentor",
    "description": "ภาพคำคมสร้างแรงบันดาลใจ ดีไซน์ Typography คมชัดอ่านง่าย",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-32",
    "fileName": "1759712131502.jpg",
    "image": "/portfolio/1759712131502.jpg",
    "title": "Hydrating Glow Serum Ad Campaign",
    "category": "product-beauty",
    "client": "Empressa Official",
    "description": "ภาพแคมเปญเซรั่มเติมน้ำให้ผิว ชูหยดน้ำและสัมผัสบางเบา",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-33",
    "fileName": "1759712131987.jpg",
    "image": "/portfolio/1759712131987.jpg",
    "title": "Organic Herbal Tea Leaflet",
    "category": "print-branding",
    "client": "Organic Farm",
    "description": "แผ่นพับ 3 พับแนะนำชาสมุนไพรออร์แกนิกและขั้นตอนการชง",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-34",
    "fileName": "1759712132397.jpg",
    "image": "/portfolio/1759712132397.jpg",
    "title": "Business Growth Strategy Diagram",
    "category": "infographics",
    "client": "M.I.B Agency",
    "description": "อินโฟกราฟิกแผนภาพกลยุทธ์การขยายธุรกิจบนโลกออนไลน์",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-35",
    "fileName": "1760360508802.jpg",
    "image": "/portfolio/1760360508802.jpg",
    "title": "Customer Review & Testimonial Card",
    "category": "social-ads",
    "client": "Social Commerce",
    "description": "ภาพรีวิวความประทับใจจากลูกค้าตัวจริงพร้อมภาพ Before-After",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-36",
    "fileName": "1760360509528.jpg",
    "image": "/portfolio/1760360509528.jpg",
    "title": "Brand Identity Stationery Mockup",
    "category": "print-branding",
    "client": "Corporate Identity",
    "description": "ม็อคอัพนามบัตร ซองจดหมาย และโฟลเดอร์เอกสารสำหรับแบรนด์",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-37",
    "fileName": "1760396686185.jpg",
    "image": "/portfolio/1760396686185.jpg",
    "title": "VIP Member Privilege Announcement",
    "category": "social-ads",
    "client": "Loyalty Program",
    "description": "ภาพแจ้งสิทธิพิเศษเฉพาะสมาชิกระดับ VIP ดีไซน์โทนดาร์กหรูหรา",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-38",
    "fileName": "1760396686266.jpg",
    "image": "/portfolio/1760396686266.jpg",
    "title": "Skin Barrier Repair Mechanism",
    "category": "infographics",
    "client": "Skincare Science",
    "description": "อินโฟกราฟิกเจาะลึกกระบวนการฟื้นฟูชั้นผิวระดับเซลล์",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-39",
    "fileName": "1760396686337.jpg",
    "image": "/portfolio/1760396686337.jpg",
    "title": "Summer Sunscreen Protection Poster",
    "category": "social-ads",
    "client": "Sun Care Thailand",
    "description": "ภาพโปรโมทครีมกันแดดเนื้อบางเบาสำหรับสภาพอากาศเมืองไทย",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-40",
    "fileName": "1760809043793.jpg",
    "image": "/portfolio/1760809043793.jpg",
    "title": "Dietary Supplement Dosage Guide",
    "category": "infographics",
    "client": "Health Care Brand",
    "description": "คู่มือวิธีรับประทานอาหารเสริมให้ได้ผลลัพธ์สูงสุด",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-41",
    "fileName": "1760809044657.jpg",
    "image": "/portfolio/1760809044657.jpg",
    "title": "Special Bundle Deal 5 FREE 2",
    "category": "social-ads",
    "client": "Mana Skincare",
    "description": "ภาพโปรโมชั่นซื้อ 5 แถม 2 จัดวางสินค้าเด่นชัดสะดุดสายตา",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-42",
    "fileName": "1760809045041.jpg",
    "image": "/portfolio/1760809045041.jpg",
    "title": "Library Open House Event Poster",
    "category": "print-branding",
    "client": "University Library",
    "description": "โปสเตอร์กิจกรรมเปิดบ้านห้องสมุดยุคดิจิทัล",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-43",
    "fileName": "1760809056453.jpg",
    "image": "/portfolio/1760809056453.jpg",
    "title": "Targeted Audience Advertising Visual",
    "category": "social-ads",
    "client": "Performance Marketing",
    "description": "ภาพโฆษณายิงแอดเจาะกลุ่มเป้าหมายเฉพาะ เพิ่ม CTR และ Conversion",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-44",
    "fileName": "1761050401089.jpg",
    "image": "/portfolio/1761050401089.jpg",
    "title": "Herbal Capsule Quality Standard",
    "category": "infographics",
    "client": "Pharmaceutical Co.",
    "description": "มาตรฐานการผลิตและการรับรองความปลอดภัยระดับสากล",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-45",
    "fileName": "1761529203463.jpg",
    "image": "/portfolio/1761529203463.jpg",
    "title": "Collagen Drink Flavor Showcase",
    "category": "product-beauty",
    "client": "Beverage & Beauty",
    "description": "ภาพรวมรสชาติและส่วนผสมผลไม้สกัดเข้มข้น",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-46",
    "fileName": "1761613942278.jpg",
    "image": "/portfolio/1761613942278.jpg",
    "title": "Creative Typography Art Post",
    "category": "social-ads",
    "client": "Boom Design Studio",
    "description": "งานทดลองออกแบบตัวอักษรไทยร่วมสมัยสำหรับงานกราฟิก",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-47",
    "fileName": "1761613944720.jpg",
    "image": "/portfolio/1761613944720.jpg",
    "title": "Anti-Aging Cream Product Spotlight",
    "category": "product-beauty",
    "client": "Empressa Official",
    "description": "ภาพเจาะลึกเนื้อสัมผัสครีมลดเลือนริ้วรอยระดับพรีเมียม",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-48",
    "fileName": "1761613945406.jpg",
    "image": "/portfolio/1761613945406.jpg",
    "title": "Online Course Enrollment Graphic",
    "category": "social-ads",
    "client": "Online Academy",
    "description": "แบนเนอร์รับสมัครคอร์สเรียนออนไลน์ พร้อมปุ่ม Call to Action ชัดเจน",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-49",
    "fileName": "1762168050527.jpg",
    "image": "/portfolio/1762168050527.jpg",
    "title": "Modern Exhibition Roll-up Banner",
    "category": "print-branding",
    "client": "Public Relations",
    "description": "โรลอัปแบนเนอร์สำหรับงานแสดงนิทรรศการและการประชุม",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },
  {
    "id": "proj-50",
    "fileName": "1762168051628.jpg",
    "image": "/portfolio/1762168051628.jpg",
    "title": "Best Seller Award Celebration Ad",
    "category": "social-ads",
    "client": "Brand Marketing",
    "description": "ภาพเฉลิมฉลองสินค้าขายดีอันดับ 1 ตอกย้ำความเชื่อมั่นผู้บริโภค",
    "date": "2024 - 2025",
    "tools": [
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  }
];
