import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';
import type { PortfolioAlbum, PortfolioArtwork } from '../data/portfolioAlbums';

export interface ProjectDisplayMeta {
  title: string;
  description: string;
  tag: string;
}

interface CustomItemMeta {
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  tag?: string;
}

const PORTFOLIO_BY_FILENAME = new Map<string, PortfolioItem>(
  PORTFOLIO_ITEMS.map((item) => [item.fileName, item])
);

const CUSTOM_META_BY_ID: Record<string, CustomItemMeta> = {
  'mutelu-new-1': {
    titleTh: 'เทวมนตรา — พิธีดึงจิตตรึงใจ',
    titleEn: 'Thepmontra — Attraction Ritual Ad',
    descriptionTh: 'ภาพแอดโฆษณาสายมูโทนขลังพรีเมียม ดึงดูดความรักและเสริมเสน่ห์',
    descriptionEn: 'Premium spiritual Facebook ad artwork crafted for love & attraction rituals.',
    tag: 'เทวมนตรา'
  },
  'mutelu-new-2': {
    titleTh: 'เทวมนตรา — พิธีตัดสายสัมพันธ์',
    titleEn: 'Thepmontra — Relationship Ritual Ad',
    descriptionTh: 'สื่อโฆษณา Facebook Ads สายมู เน้นพาดหัวคมชัดและการจัดวางระดับมืออาชีพ',
    descriptionEn: 'High-contrast social media visual designed for spiritual relationship services.',
    tag: 'เทวมนตรา'
  },
  'mutelu-new-3': {
    titleTh: 'เรือนมนต์ล้านนา — ดวงชะตาและคำทำนาย',
    titleEn: 'Ruenmon Lanna — Zodiac & Fortune',
    descriptionTh: 'กราฟิกพยากรณ์และพิธีเสริมดวง โทนสีทองมงคลอ่านง่ายสะดุดตา',
    descriptionEn: 'Auspicious gold-toned zodiac horoscope and Lanna ritual graphic design.',
    tag: 'เรือนมนต์ล้านนา'
  },
  'mutelu-new-4': {
    titleTh: 'บ้านมนต์ดวงเศรษฐี — พิธีทำบุญเสริมดวง',
    titleEn: 'Ban Mon Duang — Merit & Blessing Ritual',
    descriptionTh: 'ภาพแบนเนอร์ประชาสัมพันธ์พิธีทำบุญและชุดสังฆทาน จัดวางข้อมูลครบถ้วนชัดเจน',
    descriptionEn: 'Structured promotional visual for merit-making rituals and blessing sets.',
    tag: 'บ้านมนต์ดวงเศรษฐี'
  }
};

const CUSTOM_META_BY_FILENAME: Record<string, CustomItemMeta> = {
  '1.1 Lucent Skin.jpg': {
    titleTh: 'Lucent Skin — คู่มือการใช้งานผลิตภัณฑ์',
    titleEn: 'Lucent Skin — Product User Guide',
    descriptionTh: 'คู่มือแนะนำขั้นตอนการใช้ผลิตภัณฑ์ดูแลผิว อ่านง่าย สะอาดตา และหรูหรา',
    descriptionEn: 'Clean and elegant skincare application guide designed for quick customer understanding.',
    tag: 'Lucent Skin'
  },
  '1.2 Lucent Skin.jpg': {
    titleTh: 'Lucent Skin — ขั้นตอนการดูแลผิวประจำวัน',
    titleEn: 'Lucent Skin — Daily Skincare Routine',
    descriptionTh: 'กราฟิกสรุปลำดับการใช้สกินแคร์เพื่อผลลัพธ์สูงสุด พร้อมภาพประกอบชัดเจน',
    descriptionEn: 'Step-by-step daily skincare routine graphic with clear visual hierarchy.',
    tag: 'Lucent Skin'
  },
  '1.3 Denti User Guide.jpg': {
    titleTh: 'Denti — คู่มือแนะนำการดูแลช่องปาก',
    titleEn: 'Denti — Oral Care User Guide',
    descriptionTh: 'อินโฟกราฟิกวิธีใช้งานผลิตภัณฑ์ดูแลช่องปาก จัดวางเป็นขั้นตอนชัดเจนในหน้าเดียว',
    descriptionEn: 'One-page step-by-step product usage instructions for oral care customers.',
    tag: 'Denti'
  },
  '2.2 Infographic 3 x Mock 1x3.jpg': {
    titleTh: 'อินโฟกราฟิกชุดให้ความรู้แบบต่อเนื่อง',
    titleEn: 'Multi-Panel Knowledge Infographic',
    descriptionTh: 'ชุดภาพอินโฟกราฟิกแบบ 3 ช่อง ย่อยข้อมูลสำคัญให้เข้าใจง่ายและน่าแชร์',
    descriptionEn: 'Three-panel educational infographic series built for high social media shareability.',
    tag: 'Infographic'
  }
};

const ALBUM_FALLBACK_VARIATIONS: Record<string, CustomItemMeta[]> = {
  'ads-products': [
    {
      titleTh: 'แบนเนอร์โฆษณาสินค้า Social Ads',
      titleEn: 'Product Social Advertising Banner',
      descriptionTh: 'ออกแบบภาพยิงแอด Facebook & Instagram ชูจุดเด่นสินค้าและ Packshot สะดุดตา',
      descriptionEn: 'High-impact Facebook & Instagram product ad highlighting key benefits and packshot.'
    },
    {
      titleTh: 'กราฟิกโปรโมทผลิตภัณฑ์พรีเมียม',
      titleEn: 'Premium Product Marketing Visual',
      descriptionTh: 'จัดองค์ประกอบแสงเงาและตัวอักษรคมชัด เพิ่มความน่าเชื่อถือและกระตุ้นการคลิก',
      descriptionEn: 'Studio-lit product composition with crisp typography engineered to boost click-through rate.'
    },
    {
      titleTh: 'อาร์ตเวิร์กสื่อขายสินค้าออนไลน์',
      titleEn: 'E-Commerce Conversion Creative',
      descriptionTh: 'สื่อโฆษณาเน้นจุดขายสินค้าและ Call to Action ชัดเจน ตอบโจทย์กลุ่มเป้าหมาย',
      descriptionEn: 'Conversion-focused social ad artwork crafted with clear value propositions.'
    }
  ],
  promotion: [
    {
      titleTh: 'แบนเนอร์แคมเปญโปรโมชั่นพิเศษ',
      titleEn: 'Special Campaign Promotion Banner',
      descriptionTh: 'ดีไซน์ภาพโปรโมชั่นเน้นราคาและดีลสุดคุ้ม ดึงดูดสายตาและเร่งการตัดสินใจซื้อ',
      descriptionEn: 'High-conversion promotional banner highlighting bundle pricing and limited-time deals.'
    },
    {
      titleTh: 'ภาพโฆษณาเซ็ตดีลสุดคุ้ม',
      titleEn: 'Bundle Offer Campaign Visual',
      descriptionTh: 'จัดวางเซ็ตสินค้าโปรโมชั่นแบบมีมิติ พร้อมป้ายราคาและสิทธิพิเศษชัดเจน',
      descriptionEn: 'Dynamic bundle layout with clear promotional badges and standout pricing hierarchy.'
    }
  ],
  'ads-fashion': [
    {
      titleTh: 'ภาพโฆษณาสินค้าแฟชันและคอลเลกชันกระเป๋า',
      titleEn: 'Fashion & Handbag Collection Social Ad',
      descriptionTh: 'ออกแบบสื่อโฆษณาแฟชันสไตล์ Editorial ชูภาพลักษณ์แบรนด์และคอลเลกชันใหม่อย่างหรูหรา',
      descriptionEn: 'Editorial fashion social ad highlighting new handbag collections and seasonal promotions.'
    },
    {
      titleTh: 'แบนเนอร์โปรโมชั่นสินค้าแฟชันและไลฟ์สด',
      titleEn: 'Fashion Live & Seasonal Sale Campaign',
      descriptionTh: 'จัดองค์ประกอบภาพนางแบบ สินค้า และพาดหัวโปรโมชั่นให้โดดเด่นน่าติดตาม',
      descriptionEn: 'Balanced lookbook composition combining model photography, product focus, and sale offers.'
    }
  ],
  mutelu: [
    {
      titleTh: 'อาร์ตเวิร์กโฆษณาสายมูเตลูพรีเมียม',
      titleEn: 'Auspicious & Spiritual Ad Visual',
      descriptionTh: 'งานกราฟิกคอนเซ็ปต์สายมูโทนสีขลังหรูหรา สื่อสารพลังศรัทธาและจุดเด่นชัดเจน',
      descriptionEn: 'Premium auspicious artwork blending traditional spiritual aesthetics with sharp ad layout.'
    },
    {
      titleTh: 'กราฟิกประชาสัมพันธ์พิธีมงคล',
      titleEn: 'Spiritual Ritual & Blessing Graphic',
      descriptionTh: 'ออกแบบภาพสื่อสารข้อมูลพิธีกรรมและวัตถุมงคลให้น่าเชื่อถือและดึงดูดใจ',
      descriptionEn: 'Trust-building promotional graphic for spiritual services and auspicious rituals.'
    }
  ],
  infographic: [
    {
      titleTh: 'อินโฟกราฟิกสรุปจุดเด่นผลิตภัณฑ์',
      titleEn: 'Product Benefits Infographic',
      descriptionTh: 'ย่อยข้อมูลสารสกัดและคุณสมบัติสำคัญให้อ่านเข้าใจง่ายภายในไม่กี่วินาที',
      descriptionEn: 'Visual breakdown of active ingredients and key benefits for instant comprehension.'
    },
    {
      titleTh: 'กราฟิกให้ความรู้และข้อมูลเปรียบเทียบ',
      titleEn: 'Educational Data Visualization',
      descriptionTh: 'จัดลำดับข้อมูลด้วยไอคอนและแผนภาพที่สะอาดตา ช่วยให้ผู้ชมจดจำและแชร์ต่อ',
      descriptionEn: 'Clean icon-driven visual explanation designed to educate and drive shares.'
    }
  ],
  'poster-brochure': [
    {
      titleTh: 'โปสเตอร์และโบรชัวร์ประชาสัมพันธ์',
      titleEn: 'Promotional Poster & Brochure',
      descriptionTh: 'ออกแบบสื่อสิ่งพิมพ์และโปสเตอร์ความละเอียดสูง จัดวางสมดุลพร้อมส่งโรงพิมพ์',
      descriptionEn: 'Print-ready high-resolution poster and brochure layout with refined typographic balance.'
    },
    {
      titleTh: 'สื่อสิ่งพิมพ์ภาพลักษณ์องค์กรและกิจกรรม',
      titleEn: 'Corporate & Event Print Visual',
      descriptionTh: 'ถ่ายทอดสารสำคัญของแคมเปญและองค์กรผ่านงานสิ่งพิมพ์ระดับมืออาชีพ',
      descriptionEn: 'Professional print design communicating brand identity and key campaign messages.'
    }
  ],
  'leaflet-brochure': [
    {
      titleTh: 'แผ่นพับและใบปลิวแนะนำผลิตภัณฑ์',
      titleEn: 'Product Leaflet & Handout Design',
      descriptionTh: 'จัดหน้าแผ่นพับอย่างเป็นระบบ อ่านง่าย น่าถือ และครบถ้วนทุกข้อมูลสำคัญ',
      descriptionEn: 'Structured folded leaflet organizing product details into clean, scannable sections.'
    },
    {
      titleTh: 'สื่อแจกประชาสัมพันธ์และโปรโมทบริการ',
      titleEn: 'Promotional Flyer & Brochure',
      descriptionTh: 'ดีไซน์ใบปลิวและโบรชัวร์พับที่โดดเด่นทั้งสีสันและการจัดวางข้อความ',
      descriptionEn: 'Eye-catching flyer layout balancing vivid imagery and structured informational copy.'
    }
  ],
  'catalog-menu': [
    {
      titleTh: 'แคตตาล็อกรวมสินค้าและรายละเอียด',
      titleEn: 'Commercial Product Catalog Layout',
      descriptionTh: 'จัดหมวดหมู่สินค้าและราคาอย่างเป็นระเบียบ ดูทันสมัยและค้นหาข้อมูลสะดวก',
      descriptionEn: 'Organized commercial catalog page featuring clean product grids and clear pricing.'
    },
    {
      titleTh: 'เล่มเมนูอาหารและเครื่องดื่ม',
      titleEn: 'Culinary Menu Editorial Design',
      descriptionTh: 'ออกแบบเมนูให้ภาพอาหารดูน่ารับประทาน พร้อมเลย์เอาต์ที่อ่านสั่งง่าย',
      descriptionEn: 'Appetizing culinary menu design crafted for effortless browsing and visual appeal.'
    }
  ],
  'rollup-billboard': [
    {
      titleTh: 'ป้ายโฆษณา Roll-up & สื่อออกบูธ',
      titleEn: 'Exhibition Roll-up & Standee Banner',
      descriptionTh: 'ดีไซน์ป้ายขนาดใหญ่ให้มองเห็นเด่นชัดจากระยะไกล สื่อสารครบในพริบตา',
      descriptionEn: 'Large-format exhibition banner engineered for maximum visibility from a distance.'
    },
    {
      titleTh: 'ป้ายไวนิลและสื่อประชาสัมพันธ์ขนาดใหญ่',
      titleEn: 'Vinyl & Outdoor Billboard Design',
      descriptionTh: 'จัดวางพาดหัวและภาพลักษณ์สินค้าขนาดใหญ่ คมชัดทุกสัดส่วนงานพิมพ์',
      descriptionEn: 'Bold outdoor vinyl and billboard composition prepared for large-scale printing.'
    }
  ],
  'user-guide': [
    {
      titleTh: 'คู่มือแนะนำการใช้งานผลิตภัณฑ์',
      titleEn: 'Product Usage & Step Guide',
      descriptionTh: 'สรุปขั้นตอนการใช้งาน ข้อแนะนำ และวิธีดูแลรักษาให้เข้าใจง่ายในหน้าเดียว',
      descriptionEn: 'Clear visual instructions guiding customers through proper product usage steps.'
    },
    {
      titleTh: 'กราฟิกขั้นตอนวิธีใช้และการรับประทาน',
      titleEn: 'Application & Dosage Visual Guide',
      descriptionTh: 'ภาพประกอบลำดับขั้นตอนชัดเจน ช่วยสร้างความมั่นใจและความพึงพอใจให้ลูกค้า',
      descriptionEn: 'Step-by-step instructional graphic enhancing customer confidence and clarity.'
    }
  ],
  book: [
    {
      titleTh: 'ออกแบบปกหนังสือและสื่อสิ่งพิมพ์',
      titleEn: 'Book Cover & Editorial Presentation',
      descriptionTh: 'ถ่ายทอดอารมณ์และคุณค่าของเนื้อหาผ่านงานออกแบบปกที่ทรงพลังและมีเอกลักษณ์',
      descriptionEn: 'Expressive book cover and editorial mockup crafted to reflect the story within.'
    }
  ],
  'personal-brand': [
    {
      titleTh: 'ภาพกราฟิกสร้างภาพลักษณ์ Personal Brand',
      titleEn: 'Personal Branding Key Visual',
      descriptionTh: 'ออกแบบสื่อโซเชียลสำหรับโค้ช วิทยากร และผู้นำทางความคิดให้ดูโดดเด่นน่าเชื่อถือ',
      descriptionEn: 'Signature visual branding crafted for speakers, mentors, and thought leaders.'
    }
  ]
};

function hashId(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function getProjectDisplayMeta(
  item: PortfolioArtwork,
  album: PortfolioAlbum,
  lang: 'th' | 'en'
): ProjectDisplayMeta {
  const defaultTag = lang === 'th' ? album.badgeTh : album.badgeEn;

  // 1. Explicit fields on item
  if (item.titleTh || item.titleEn || item.descriptionTh || item.descriptionEn) {
    return {
      title:
        lang === 'th'
          ? item.titleTh || item.titleEn || album.titleTh
          : item.titleEn || item.titleTh || album.titleEn,
      description:
        lang === 'th'
          ? item.descriptionTh || item.descriptionEn || album.subtitleTh
          : item.descriptionEn || item.descriptionTh || album.subtitleEn,
      tag: item.client || defaultTag
    };
  }

  // 2. Explicit curated overrides by id
  const byId = CUSTOM_META_BY_ID[item.id];
  if (byId) {
    return {
      title: lang === 'th' ? byId.titleTh : byId.titleEn,
      description: lang === 'th' ? byId.descriptionTh : byId.descriptionEn,
      tag: byId.tag || defaultTag
    };
  }

  // 3. Explicit curated overrides by filename
  const byFileName = CUSTOM_META_BY_FILENAME[item.fileName];
  if (byFileName) {
    return {
      title: lang === 'th' ? byFileName.titleTh : byFileName.titleEn,
      description: lang === 'th' ? byFileName.descriptionTh : byFileName.descriptionEn,
      tag: byFileName.tag || defaultTag
    };
  }

  // 4. Matched item from PORTFOLIO_ITEMS in portfolioData.ts
  const matched = PORTFOLIO_BY_FILENAME.get(item.fileName);
  if (matched) {
    return {
      title: matched.title,
      description: matched.description,
      tag: matched.client || defaultTag
    };
  }

  // 5. Curated variation for the album (no numeric counts)
  const variations = ALBUM_FALLBACK_VARIATIONS[album.id];
  if (variations && variations.length > 0) {
    const picked = variations[hashId(item.id) % variations.length];
    return {
      title: lang === 'th' ? picked.titleTh : picked.titleEn,
      description: lang === 'th' ? picked.descriptionTh : picked.descriptionEn,
      tag: picked.tag || defaultTag
    };
  }

  // 6. Safe album-level fallback
  return {
    title: lang === 'th' ? album.titleTh : album.titleEn,
    description: lang === 'th' ? album.subtitleTh : album.subtitleEn,
    tag: defaultTag
  };
}
