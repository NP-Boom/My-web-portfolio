/**
 * Complete Portfolio Albums Data divided accurately by Google Drive folder structure.
 * Generated from https://drive.google.com/drive/folders/1eDR7zgFiU6tJAfsyfba7_wyri3txmkdB?usp=sharing
 * Total artworks: 170 items across 11 folders.
 */

export interface PortfolioArtwork {
  id: string;
  driveId: string;
  fileName: string;
  image: string;
  cdnFallback: string;
  driveUrl: string;
  albumId: string;
  albumName: string;
  titleTh?: string;
  titleEn?: string;
  descriptionTh?: string;
  descriptionEn?: string;
  client?: string;
}

export interface PortfolioAlbum {
  id: string;
  folderName: string;
  folderId: string;
  folderDriveUrl: string;
  titleTh: string;
  titleEn: string;
  subtitleTh: string;
  subtitleEn: string;
  badgeTh: string;
  badgeEn: string;
  items: PortfolioArtwork[];
}

export const PORTFOLIO_ALBUMS: PortfolioAlbum[] = [
  {
    "id": "ads-products",
    "folderName": "ภาพ Ads สินค้า",
    "folderId": "1QA3okWHAJnFcMfe3qUdAYkg3_veLIM1J",
    "titleTh": "ภาพ Ads สินค้า",
    "titleEn": "Product Advertising Ads",
    "subtitleTh": "งานออกแบบภาพแบนเนอร์ยิงแอด Facebook, Instagram และโซเชียลมีเดียสำหรับสินค้าและแบรนด์ชั้นนำ",
    "subtitleEn": "Commercial product advertising banners and social media ad creatives.",
    "badgeTh": "Ads & Commercial",
    "badgeEn": "Product Ads",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1QA3okWHAJnFcMfe3qUdAYkg3_veLIM1J?usp=sharing",
    "items": [
      {
        "id": "ads-products-72",
        "driveId": "13v0pAsb2n3vs7Y7uJ_LWmP1SYTeJi-ti",
        "fileName": "ผลงานออกแบบ_Page_12.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/72_ผลงานออกแบบ_Page_12.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/13v0pAsb2n3vs7Y7uJ_LWmP1SYTeJi-ti",
        "driveUrl": "https://drive.google.com/file/d/13v0pAsb2n3vs7Y7uJ_LWmP1SYTeJi-ti/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-71",
        "driveId": "1-dEeJEAx5E2LRPvNVwM4GU6MehZ4cc0t",
        "fileName": "ผลงานออกแบบ_Page_11.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/71_ผลงานออกแบบ_Page_11.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1-dEeJEAx5E2LRPvNVwM4GU6MehZ4cc0t",
        "driveUrl": "https://drive.google.com/file/d/1-dEeJEAx5E2LRPvNVwM4GU6MehZ4cc0t/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-70",
        "driveId": "1aF2kmE5Qbon9aEJQ3EDAIy0R8cidlwVp",
        "fileName": "ผลงานออกแบบ_Page_09.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/70_ผลงานออกแบบ_Page_09.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1aF2kmE5Qbon9aEJQ3EDAIy0R8cidlwVp",
        "driveUrl": "https://drive.google.com/file/d/1aF2kmE5Qbon9aEJQ3EDAIy0R8cidlwVp/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-69",
        "driveId": "1P6a3PLbUTnutL42gu_1hdi8EJViAzir2",
        "fileName": "ผลงานออกแบบ_Page_08.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/69_ผลงานออกแบบ_Page_08.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1P6a3PLbUTnutL42gu_1hdi8EJViAzir2",
        "driveUrl": "https://drive.google.com/file/d/1P6a3PLbUTnutL42gu_1hdi8EJViAzir2/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-68",
        "driveId": "1vtXtlqGXiTDIiY0LGdaQV7TswChmtxL_",
        "fileName": "ผลงานออกแบบ_Page_06.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/68_ผลงานออกแบบ_Page_06.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1vtXtlqGXiTDIiY0LGdaQV7TswChmtxL_",
        "driveUrl": "https://drive.google.com/file/d/1vtXtlqGXiTDIiY0LGdaQV7TswChmtxL_/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-67",
        "driveId": "12iqgFf0wfuXFjh0rPw5fbXMM1f5mVJkv",
        "fileName": "ผลงานออกแบบ_Page_05.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/67_ผลงานออกแบบ_Page_05.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/12iqgFf0wfuXFjh0rPw5fbXMM1f5mVJkv",
        "driveUrl": "https://drive.google.com/file/d/12iqgFf0wfuXFjh0rPw5fbXMM1f5mVJkv/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-66",
        "driveId": "1Co0udRjTBz5vbwaTAPqAU3G27VjUNhq2",
        "fileName": "ผลงานออกแบบ_Page_04.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/66_ผลงานออกแบบ_Page_04.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Co0udRjTBz5vbwaTAPqAU3G27VjUNhq2",
        "driveUrl": "https://drive.google.com/file/d/1Co0udRjTBz5vbwaTAPqAU3G27VjUNhq2/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-65",
        "driveId": "11NIzdNAfob_xbHY2C9hJeZAvoMsgxT-N",
        "fileName": "ผลงานออกแบบ_Page_03.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/65_ผลงานออกแบบ_Page_03.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/11NIzdNAfob_xbHY2C9hJeZAvoMsgxT-N",
        "driveUrl": "https://drive.google.com/file/d/11NIzdNAfob_xbHY2C9hJeZAvoMsgxT-N/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-64",
        "driveId": "1cJYQTi77dqid7SIvgIHaBGWuZgsl6l7q",
        "fileName": "ผลงานออกแบบ_Page_02.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/64_ผลงานออกแบบ_Page_02.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1cJYQTi77dqid7SIvgIHaBGWuZgsl6l7q",
        "driveUrl": "https://drive.google.com/file/d/1cJYQTi77dqid7SIvgIHaBGWuZgsl6l7q/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-63",
        "driveId": "1Ev4SNCMz0hPvC1zipPKVWRlkbI1TdVh1",
        "fileName": "ผลงานออกแบบ_Page_01.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/63_ผลงานออกแบบ_Page_01.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Ev4SNCMz0hPvC1zipPKVWRlkbI1TdVh1",
        "driveUrl": "https://drive.google.com/file/d/1Ev4SNCMz0hPvC1zipPKVWRlkbI1TdVh1/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-62",
        "driveId": "1l2SzJVMXjZZeRbTgevRdS3cQDxiW9EKP",
        "fileName": "Screenshot 2567-07-10 at 12.41.16.png",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/62_Screenshot_2567-07-10_at_12.41.16.png",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1l2SzJVMXjZZeRbTgevRdS3cQDxiW9EKP",
        "driveUrl": "https://drive.google.com/file/d/1l2SzJVMXjZZeRbTgevRdS3cQDxiW9EKP/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-61",
        "driveId": "1KLEJwLLDKA5fbyADk_VbwDD7tBJ9og2p",
        "fileName": "Portfolio-04.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/61_Portfolio-04.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1KLEJwLLDKA5fbyADk_VbwDD7tBJ9og2p",
        "driveUrl": "https://drive.google.com/file/d/1KLEJwLLDKA5fbyADk_VbwDD7tBJ9og2p/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-60",
        "driveId": "1VDoRK7yT-E1c6LHVqiqOHt_Rx0oys4Zr",
        "fileName": "photo-collage.png-6.png",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/60_photo-collage.png-6.png",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1VDoRK7yT-E1c6LHVqiqOHt_Rx0oys4Zr",
        "driveUrl": "https://drive.google.com/file/d/1VDoRK7yT-E1c6LHVqiqOHt_Rx0oys4Zr/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-59",
        "driveId": "1csNUysHvJz-O167VqZf2qrGAghxKjv5d",
        "fileName": "IMG_8772.JPG",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/59_IMG_8772.JPG",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1csNUysHvJz-O167VqZf2qrGAghxKjv5d",
        "driveUrl": "https://drive.google.com/file/d/1csNUysHvJz-O167VqZf2qrGAghxKjv5d/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-73",
        "driveId": "",
        "fileName": "SendTo_b167352c.jpeg",
        "image": "/assets/aistudio/SendTo_b167352c.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo_b167352c.jpeg",
        "driveUrl": "",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า",
        "titleTh": "ชุดภาพโฆษณา Firm X Serum & Real Repair Serum",
        "titleEn": "Firm X Serum & Real Repair Serum Ad Set",
        "descriptionTh": "ชุดภาพโฆษณาสินค้าสกินแคร์ Emporessa Firm X Serum และ AVA Real Repair Serum นำเสนอจุดขาย ส่วนประกอบ และวิธีใช้ครบเซ็ต",
        "descriptionEn": "Complete skincare ad set for Emporessa Firm X Serum and AVA Real Repair Serum featuring benefits, ingredients, and usage guide."
      },
      {
        "id": "ads-products-74",
        "driveId": "",
        "fileName": "SendTo6_05dccc1f.jpeg",
        "image": "/assets/aistudio/SendTo6_05dccc1f.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo6_05dccc1f.jpeg",
        "driveUrl": "",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า",
        "titleTh": "ชุดภาพโฆษณา Pink Glow Serum & Max Leep",
        "titleEn": "Pink Glow Serum & Max Leep Ad Set",
        "descriptionTh": "ชุดภาพโฆษณาเซรั่มบำรุงผิวสูตรอ่อนโยน Pink Glow Serum และผลิตภัณฑ์เสริมอาหาร Max Leep สำหรับการยิงแอดโซเชียล",
        "descriptionEn": "Social ad creatives for Emporessa Pink Glow Serum and Max Leep dietary supplement with structured benefit highlights."
      },
      {
        "id": "ads-products-75",
        "driveId": "",
        "fileName": "SendTo3_d20b1828.jpeg",
        "image": "/assets/aistudio/SendTo3_d20b1828.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo3_d20b1828.jpeg",
        "driveUrl": "",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า",
        "titleTh": "ชุดภาพโฆษณาโปรโมชั่น Clear Serum สูตร HPR",
        "titleEn": "Clear Serum HPR Promotion Ad Set",
        "descriptionTh": "ชุดภาพโฆษณาและโปรโมชั่นส่วนลด Clear Serum สูตร HPR เน้นจุดเด่นลดริ้วรอยและอ่อนโยนต่อผิวแพ้ง่าย",
        "descriptionEn": "Promotional and product ad creative suite for Clear Serum HPR highlighting gentle anti-aging performance and bundle offers."
      },
      {
        "id": "ads-products-76",
        "driveId": "",
        "fileName": "SendTo5_b8e1ba92.jpeg",
        "image": "/assets/aistudio/SendTo5_b8e1ba92.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo5_b8e1ba92.jpeg",
        "driveUrl": "",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า",
        "titleTh": "ชุดภาพโฆษณา Clear Serum สำหรับผิวแพ้ง่าย",
        "titleEn": "Clear Serum Sensitive Skin Ad Set",
        "descriptionTh": "ชุดภาพโฆษณาสินค้า Clear Serum นำเสนอจุดขายอ่อนโยนกว่า Retinol พร้อมนวัตกรรม HPR และสารสกัดปลอบประโลมผิว",
        "descriptionEn": "Product ad suite showcasing Clear Serum's gentle HPR complex and soothing botanical extracts for sensitive skin."
      },
      {
        "id": "ads-products-77",
        "driveId": "",
        "fileName": "SendTo4_2d493afc.jpeg",
        "image": "/assets/aistudio/SendTo4_2d493afc.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo4_2d493afc.jpeg",
        "driveUrl": "",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า",
        "titleTh": "ชุดภาพโฆษณา Firm Eye Cream & Cleansing Series",
        "titleEn": "Firm Eye Cream & Cleansing Series Ad Set",
        "descriptionTh": "ชุดภาพโฆษณาครีมบำรุงรอบดวงตาหัวนวดลูกกลิ้ง 3 หัว Firm Eye Cream และผลิตภัณฑ์ทำความสะอาดผิวหน้า Emporessa",
        "descriptionEn": "Ad creative collection for Emporessa Firm Eye Cream triple-roller treatment and facial cleansing series."
      },
      {
        "id": "ads-products-78",
        "driveId": "",
        "fileName": "SendTo2_688bf107.jpeg",
        "image": "/assets/aistudio/SendTo2_688bf107.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo2_688bf107.jpeg",
        "driveUrl": "",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า",
        "titleTh": "ชุดภาพโฆษณา Clear Serum นวัตกรรมผิวเด็กจากยุโรป",
        "titleEn": "Clear Serum European Innovation Ad Set",
        "descriptionTh": "ชุดภาพโฆษณา Clear Serum สื่อสารกลไกฟื้นผิว 3 ระดับและ 4 พลังผิวเด็กจากงานวิจัยยุโรปด้วยกราฟิกที่เข้าใจง่าย",
        "descriptionEn": "Visual ad campaign for Clear Serum explaining 3-level skin renewal and European active complex technology."
      },
      {
        "id": "ads-products-79",
        "driveId": "",
        "fileName": "SendTo7_df91f9a9.jpeg",
        "image": "/assets/aistudio/SendTo7_df91f9a9.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo7_df91f9a9.jpeg",
        "driveUrl": "",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า",
        "titleTh": "ชุดภาพแคมเปญ NIA Founder Apprentice (STEAM4INNOVATOR)",
        "titleEn": "NIA Founder Apprentice Campaign Ad Set",
        "descriptionTh": "ชุดภาพโฆษณาประชาสัมพันธ์โครงการฝึกงาน Founder Apprentice โดยสำนักงานนวัตกรรมแห่งชาติ (NIA) และ STEAM4INNOVATOR",
        "descriptionEn": "Social media campaign graphics for NIA's Founder Apprentice & STEAM4INNOVATOR internship program."
      }
    ]
  },
  {
    "id": "promotion",
    "folderName": "ภาพ Promotion",
    "folderId": "1B5LlE4LQ8woJ1DZ3TbqpaOgjOG81xLcT",
    "titleTh": "ภาพ Promotion",
    "titleEn": "Promotional Campaigns",
    "subtitleTh": "แบนเนอร์โปรโมชั่น แคมเปญพิเศษ เซ็ตดีลซื้อแถม Flash Sale กระตุ้นยอดสั่งซื้ออย่างรวดเร็ว",
    "subtitleEn": "Sales promotion banners, special bundle offers, and high-conversion campaign visuals.",
    "badgeTh": "Promotion & Deals",
    "badgeEn": "Campaigns",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1B5LlE4LQ8woJ1DZ3TbqpaOgjOG81xLcT?usp=sharing",
    "items": [
      {
        "id": "promotion-11",
        "driveId": "1Wn3l51NLuq1EeZYtf5dnVGnTWJ1tNasg",
        "fileName": "photo-collage.png.png",
        "image": "/portfolio_all/ภาพ_Promotion/11_photo-collage.png.png",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Wn3l51NLuq1EeZYtf5dnVGnTWJ1tNasg",
        "driveUrl": "https://drive.google.com/file/d/1Wn3l51NLuq1EeZYtf5dnVGnTWJ1tNasg/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
},
      {
        "id": "promotion-10",
        "driveId": "13AcHPGcVGuN6Z77PuK0jd6CSy6sriD3Q",
        "fileName": "photo-collage.png-5.png",
        "image": "/portfolio_all/ภาพ_Promotion/10_photo-collage.png-5.png",
        "cdnFallback": "https://lh3.googleusercontent.com/d/13AcHPGcVGuN6Z77PuK0jd6CSy6sriD3Q",
        "driveUrl": "https://drive.google.com/file/d/13AcHPGcVGuN6Z77PuK0jd6CSy6sriD3Q/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
      },
      {
        "id": "promotion-12",
        "driveId": "",
        "fileName": "IMG_3948_cb03f40e.jpeg",
        "image": "/assets/aistudio/IMG_3948_cb03f40e.jpeg",
        "cdnFallback": "/assets/aistudio/IMG_3948_cb03f40e.jpeg",
        "driveUrl": "",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
      },
      {
        "id": "promotion-9",
        "driveId": "1-GSyW2ZqqFlDYvNeQt8TmCFpsxLDginK",
        "fileName": "1750035650403.jpg",
        "image": "/portfolio_all/ภาพ_Promotion/09_1750035650403.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1-GSyW2ZqqFlDYvNeQt8TmCFpsxLDginK",
        "driveUrl": "https://drive.google.com/file/d/1-GSyW2ZqqFlDYvNeQt8TmCFpsxLDginK/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
      },
      {
        "id": "promotion-8",
        "driveId": "1mUhdVhRtV41VTxP8OgnEqwPbiypvLlgg",
        "fileName": "1743987834244.jpg",
        "image": "/portfolio_all/ภาพ_Promotion/08_1743987834244.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1mUhdVhRtV41VTxP8OgnEqwPbiypvLlgg",
        "driveUrl": "https://drive.google.com/file/d/1mUhdVhRtV41VTxP8OgnEqwPbiypvLlgg/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
},
      {
        "id": "promotion-7",
        "driveId": "1220cv0Pdk99fh_h_zoKaEIKAhd39KNbi",
        "fileName": "1743987832490.jpg",
        "image": "/portfolio_all/ภาพ_Promotion/07_1743987832490.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1220cv0Pdk99fh_h_zoKaEIKAhd39KNbi",
        "driveUrl": "https://drive.google.com/file/d/1220cv0Pdk99fh_h_zoKaEIKAhd39KNbi/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
},
      {
        "id": "promotion-6",
        "driveId": "1rMVb3c-e-BDNbOVgwi9fmYILkwp7to9a",
        "fileName": "1743987825109.jpg",
        "image": "/portfolio_all/ภาพ_Promotion/06_1743987825109.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1rMVb3c-e-BDNbOVgwi9fmYILkwp7to9a",
        "driveUrl": "https://drive.google.com/file/d/1rMVb3c-e-BDNbOVgwi9fmYILkwp7to9a/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
},
      {
        "id": "promotion-5",
        "driveId": "1AjED0KaKhzYFEN060OJlD7e1Y-1tuJYN",
        "fileName": "1743987824619.jpg",
        "image": "/portfolio_all/ภาพ_Promotion/05_1743987824619.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1AjED0KaKhzYFEN060OJlD7e1Y-1tuJYN",
        "driveUrl": "https://drive.google.com/file/d/1AjED0KaKhzYFEN060OJlD7e1Y-1tuJYN/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
},
      {
        "id": "promotion-4",
        "driveId": "1XrDScvzK9hb4YUCpQ8Tccx-RBUTY9ZSo",
        "fileName": "1740617524469.jpg",
        "image": "/portfolio_all/ภาพ_Promotion/04_1740617524469.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1XrDScvzK9hb4YUCpQ8Tccx-RBUTY9ZSo",
        "driveUrl": "https://drive.google.com/file/d/1XrDScvzK9hb4YUCpQ8Tccx-RBUTY9ZSo/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
},
      {
        "id": "promotion-3",
        "driveId": "1h0q0SlUPkTyfJfN-6USfySY8ZZWpeTja",
        "fileName": "1740510392028.jpg",
        "image": "/portfolio_all/ภาพ_Promotion/03_1740510392028.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1h0q0SlUPkTyfJfN-6USfySY8ZZWpeTja",
        "driveUrl": "https://drive.google.com/file/d/1h0q0SlUPkTyfJfN-6USfySY8ZZWpeTja/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
},
      {
        "id": "promotion-2",
        "driveId": "1zeg6BM_a9Ef6G0tI-D5v-8Wt9Z2Uwv30",
        "fileName": "1740510391597.jpg",
        "image": "/portfolio_all/ภาพ_Promotion/02_1740510391597.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1zeg6BM_a9Ef6G0tI-D5v-8Wt9Z2Uwv30",
        "driveUrl": "https://drive.google.com/file/d/1zeg6BM_a9Ef6G0tI-D5v-8Wt9Z2Uwv30/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
},
      {
        "id": "promotion-1",
        "driveId": "1FlvUWJLzUOEjNJXMIfMkFzRF2ZEDEY0N",
        "fileName": "1727511859401.jpg",
        "image": "/portfolio_all/ภาพ_Promotion/01_1727511859401.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1FlvUWJLzUOEjNJXMIfMkFzRF2ZEDEY0N",
        "driveUrl": "https://drive.google.com/file/d/1FlvUWJLzUOEjNJXMIfMkFzRF2ZEDEY0N/view?usp=sharing",
        "albumId": "promotion",
        "albumName": "ภาพ Promotion"
      }
    ]
  },
  {
    "id": "ads-fashion",
    "folderName": "ภาพ Ads สินค้าแฟชัน",
    "folderId": "",
    "titleTh": "ภาพ Ads สินค้าแฟชัน",
    "titleEn": "Fashion & Bag Ads",
    "subtitleTh": "งานออกแบบภาพโฆษณาสินค้าแฟชัน กระเป๋า และคอลเลกชันไลฟ์สไตล์ โดดเด่นหรูหราดึงดูดสายตา",
    "subtitleEn": "Editorial fashion, handbag collections, and high-converting social campaign visuals.",
    "badgeTh": "Fashion Ads",
    "badgeEn": "Fashion",
    "folderDriveUrl": "",
    "items": [
      {
        "id": "ads-fashion-1",
        "driveId": "",
        "fileName": "SendTo_1_3d8c6c7f.jpeg",
        "image": "/assets/aistudio/SendTo_1_3d8c6c7f.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo_1_3d8c6c7f.jpeg",
        "driveUrl": "",
        "albumId": "ads-fashion",
        "albumName": "ภาพ Ads สินค้าแฟชัน"
      },
      {
        "id": "ads-fashion-2",
        "driveId": "",
        "fileName": "SendTo2_cfbbbc9c.jpeg",
        "image": "/assets/aistudio/SendTo2_cfbbbc9c.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo2_cfbbbc9c.jpeg",
        "driveUrl": "",
        "albumId": "ads-fashion",
        "albumName": "ภาพ Ads สินค้าแฟชัน"
      },
      {
        "id": "ads-fashion-3",
        "driveId": "",
        "fileName": "SendTo3_bf71bdf1.jpeg",
        "image": "/assets/aistudio/SendTo3_bf71bdf1.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo3_bf71bdf1.jpeg",
        "driveUrl": "",
        "albumId": "ads-fashion",
        "albumName": "ภาพ Ads สินค้าแฟชัน"
      },
      {
        "id": "ads-fashion-4",
        "driveId": "",
        "fileName": "SendTo4_a237e78c.jpeg",
        "image": "/assets/aistudio/SendTo4_a237e78c.jpeg",
        "cdnFallback": "/assets/aistudio/SendTo4_a237e78c.jpeg",
        "driveUrl": "",
        "albumId": "ads-fashion",
        "albumName": "ภาพ Ads สินค้าแฟชัน"
      }
    ]
  },
  {
    "id": "mutelu",
    "folderName": "ภาพแอดสายมู",
    "folderId": "1ywSEFKE-wbEXvyMLtxDcoVF0a5vPHMgD",
    "titleTh": "ภาพแอดสายมู",
    "titleEn": "Mutelu & Astrological Visuals",
    "subtitleTh": "งานกราฟิกดีไซน์คอนเซ็ปต์สายมูเตลู วัตถุมงคล และพุทธคุณ สวยขลังและพรีเมียม",
    "subtitleEn": "Spiritual and auspicious astrological artwork for modern lifestyle brands.",
    "badgeTh": "Auspicious Art",
    "badgeEn": "Spiritual",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1ywSEFKE-wbEXvyMLtxDcoVF0a5vPHMgD?usp=sharing",
    "items": [
      {
        "id": "mutelu-1",
        "driveId": "1hZd4H1hgR6MzVkuBx_iPwBOYiWKYiwQ4",
        "fileName": "ผลงานออกแบบ_Page_16.jpg",
        "image": "/portfolio_all/ภาพแอดสายมู/01_ผลงานออกแบบ_Page_16.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1hZd4H1hgR6MzVkuBx_iPwBOYiWKYiwQ4",
        "driveUrl": "",
        "albumId": "mutelu",
        "albumName": "ภาพแอดสายมู"
      },
      {
        "id": "mutelu-new-1",
        "driveId": "sendto-3",
        "fileName": "SendTo3.jpeg",
        "image": "/assets/aistudio/SendTo3_0d1c2333.jpeg",
        "cdnFallback": "/portfolio_all/ภาพแอดสายมู/SendTo3.jpeg",
        "driveUrl": "",
        "albumId": "mutelu",
        "albumName": "ภาพแอดสายมู"
      },
      {
        "id": "mutelu-new-2",
        "driveId": "sendto-4",
        "fileName": "SendTo4.jpeg",
        "image": "/assets/aistudio/SendTo4_5c22b861.jpeg",
        "cdnFallback": "/portfolio_all/ภาพแอดสายมู/SendTo4.jpeg",
        "driveUrl": "",
        "albumId": "mutelu",
        "albumName": "ภาพแอดสายมู"
      },
      {
        "id": "mutelu-new-3",
        "driveId": "sendto-2",
        "fileName": "SendTo2.jpeg",
        "image": "/assets/aistudio/SendTo2_0f75c713.jpeg",
        "cdnFallback": "/portfolio_all/ภาพแอดสายมู/SendTo2.jpeg",
        "driveUrl": "",
        "albumId": "mutelu",
        "albumName": "ภาพแอดสายมู"
      },
      {
        "id": "mutelu-new-4",
        "driveId": "sendto-1",
        "fileName": "SendTo.jpeg",
        "image": "/assets/aistudio/SendTo_41b86b6f.jpeg",
        "cdnFallback": "/portfolio_all/ภาพแอดสายมู/SendTo.jpeg",
        "driveUrl": "",
        "albumId": "mutelu",
        "albumName": "ภาพแอดสายมู"
      },
      {
        "id": "mutelu-2",
        "driveId": "1w29Pfx5ieyBe3GelnZSzmVNXIC0EbysT",
        "fileName": "ผลงานออกแบบ_Page_17.jpg",
        "image": "/portfolio_all/ภาพแอดสายมู/02_ผลงานออกแบบ_Page_17.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1w29Pfx5ieyBe3GelnZSzmVNXIC0EbysT",
        "driveUrl": "",
        "albumId": "mutelu",
        "albumName": "ภาพแอดสายมู"
      }
    ]
  },
  {
    "id": "infographic",
    "folderName": "Infographic",
    "folderId": "1JKJuAgbT0MHaqFWOQrykKgSpmFd3E-W_",
    "titleTh": "Infographic",
    "titleEn": "Infographic & Knowledge",
    "subtitleTh": "ย่อยข้อมูลที่ซับซ้อน สารสกัด ผลการทดลอง และความรู้ทางการแพทย์ให้อ่านง่าย สวยงาม น่าแชร์",
    "subtitleEn": "Clear visual explanations, ingredient highlights, and educational data design.",
    "badgeTh": "Infographics",
    "badgeEn": "Information",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1JKJuAgbT0MHaqFWOQrykKgSpmFd3E-W_?usp=sharing",
    "items": [
      {
        "id": "infographic-5",
        "driveId": "1YFvjPed9qqmCgPDps13FTklElVoJlCop",
        "fileName": "2.4.jpg",
        "image": "/portfolio_all/Infographic/05_2.4.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1YFvjPed9qqmCgPDps13FTklElVoJlCop",
        "driveUrl": "https://drive.google.com/file/d/1YFvjPed9qqmCgPDps13FTklElVoJlCop/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-6",
        "driveId": "11WDf3C2NvyXJRHmZGPXqyy1rGSqDOVJR",
        "fileName": "2.5.jpg",
        "image": "/portfolio_all/Infographic/06_2.5.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/11WDf3C2NvyXJRHmZGPXqyy1rGSqDOVJR",
        "driveUrl": "https://drive.google.com/file/d/11WDf3C2NvyXJRHmZGPXqyy1rGSqDOVJR/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-7",
        "driveId": "1L_3m9cLNko4tiHHNMb0-g7iaeXpi2Gzq",
        "fileName": "3.jpg",
        "image": "/portfolio_all/Infographic/07_3.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1L_3m9cLNko4tiHHNMb0-g7iaeXpi2Gzq",
        "driveUrl": "https://drive.google.com/file/d/1L_3m9cLNko4tiHHNMb0-g7iaeXpi2Gzq/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-8",
        "driveId": "18ENIfWYzhZM7law1xX8gm_f-CryOgfpy",
        "fileName": "12.jpg",
        "image": "/portfolio_all/Infographic/08_12.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/18ENIfWYzhZM7law1xX8gm_f-CryOgfpy",
        "driveUrl": "https://drive.google.com/file/d/18ENIfWYzhZM7law1xX8gm_f-CryOgfpy/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-9",
        "driveId": "1iAtCXEU0a1sRhFQ2Ht7GDKdwr4uQJ1pk",
        "fileName": "13.jpg",
        "image": "/portfolio_all/Infographic/09_13.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1iAtCXEU0a1sRhFQ2Ht7GDKdwr4uQJ1pk",
        "driveUrl": "https://drive.google.com/file/d/1iAtCXEU0a1sRhFQ2Ht7GDKdwr4uQJ1pk/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-10",
        "driveId": "1g9F6ISsWvOuwvMAYrg3RoDjNGhqf9vnX",
        "fileName": "14.jpg",
        "image": "/portfolio_all/Infographic/10_14.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1g9F6ISsWvOuwvMAYrg3RoDjNGhqf9vnX",
        "driveUrl": "https://drive.google.com/file/d/1g9F6ISsWvOuwvMAYrg3RoDjNGhqf9vnX/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-11",
        "driveId": "1GhVGFRyMAwoDCOJ8lRwvro2N6vWd4jYs",
        "fileName": "15.jpg",
        "image": "/portfolio_all/Infographic/11_15.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1GhVGFRyMAwoDCOJ8lRwvro2N6vWd4jYs",
        "driveUrl": "https://drive.google.com/file/d/1GhVGFRyMAwoDCOJ8lRwvro2N6vWd4jYs/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-12",
        "driveId": "171xZLOz37CRHhlR3Er-iFxFzYE6yOsj0",
        "fileName": "16.jpg",
        "image": "/portfolio_all/Infographic/12_16.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/171xZLOz37CRHhlR3Er-iFxFzYE6yOsj0",
        "driveUrl": "https://drive.google.com/file/d/171xZLOz37CRHhlR3Er-iFxFzYE6yOsj0/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-13",
        "driveId": "1rrPgM4yt5bFgheaheWPXEpK_9ARDjTS2",
        "fileName": "21.jpg",
        "image": "/portfolio_all/Infographic/13_21.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1rrPgM4yt5bFgheaheWPXEpK_9ARDjTS2",
        "driveUrl": "https://drive.google.com/file/d/1rrPgM4yt5bFgheaheWPXEpK_9ARDjTS2/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-14",
        "driveId": "1DBKE3txUyYmig-_qsm6qn-0zku9YHCmT",
        "fileName": "22.jpg",
        "image": "/portfolio_all/Infographic/14_22.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1DBKE3txUyYmig-_qsm6qn-0zku9YHCmT",
        "driveUrl": "https://drive.google.com/file/d/1DBKE3txUyYmig-_qsm6qn-0zku9YHCmT/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-15",
        "driveId": "1Ldc2xmseldDBuNVnw-Ckj2_WH209hyTz",
        "fileName": "23.jpg",
        "image": "/portfolio_all/Infographic/15_23.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Ldc2xmseldDBuNVnw-Ckj2_WH209hyTz",
        "driveUrl": "https://drive.google.com/file/d/1Ldc2xmseldDBuNVnw-Ckj2_WH209hyTz/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-16",
        "driveId": "173ympXYOaf0g8LZOLV6EYyEv_SB5Xxiz",
        "fileName": "24.jpg",
        "image": "/portfolio_all/Infographic/16_24.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/173ympXYOaf0g8LZOLV6EYyEv_SB5Xxiz",
        "driveUrl": "https://drive.google.com/file/d/173ympXYOaf0g8LZOLV6EYyEv_SB5Xxiz/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-17",
        "driveId": "1gFmYYPurJY2y9yY7cvwSIYkMsaGEEI3t",
        "fileName": "25.jpg",
        "image": "/portfolio_all/Infographic/17_25.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1gFmYYPurJY2y9yY7cvwSIYkMsaGEEI3t",
        "driveUrl": "https://drive.google.com/file/d/1gFmYYPurJY2y9yY7cvwSIYkMsaGEEI3t/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-18",
        "driveId": "1tb1dun_8UrXkS-xYgdivbQSghHSnF5dz",
        "fileName": "26.jpg",
        "image": "/portfolio_all/Infographic/18_26.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1tb1dun_8UrXkS-xYgdivbQSghHSnF5dz",
        "driveUrl": "https://drive.google.com/file/d/1tb1dun_8UrXkS-xYgdivbQSghHSnF5dz/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-19",
        "driveId": "1q8BSNMSuBuu-QNley-a44EJJYg5XRdhh",
        "fileName": "27.jpg",
        "image": "/portfolio_all/Infographic/19_27.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1q8BSNMSuBuu-QNley-a44EJJYg5XRdhh",
        "driveUrl": "https://drive.google.com/file/d/1q8BSNMSuBuu-QNley-a44EJJYg5XRdhh/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-20",
        "driveId": "1U17rM7gQShPKRFOevpSF4ovb4unaibP-",
        "fileName": "32.jpg",
        "image": "/portfolio_all/Infographic/20_32.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1U17rM7gQShPKRFOevpSF4ovb4unaibP-",
        "driveUrl": "https://drive.google.com/file/d/1U17rM7gQShPKRFOevpSF4ovb4unaibP-/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-21",
        "driveId": "1IMarw8pX2AEbeTuF50vsHKP-6W_ASEs_",
        "fileName": "35.jpg",
        "image": "/portfolio_all/Infographic/21_35.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1IMarw8pX2AEbeTuF50vsHKP-6W_ASEs_",
        "driveUrl": "https://drive.google.com/file/d/1IMarw8pX2AEbeTuF50vsHKP-6W_ASEs_/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-22",
        "driveId": "1PXg6droPMvUBICVLY70dRk-ofcKsCr5m",
        "fileName": "44. PSD Poster Branding Mockup For Designers Vol 1.jpg",
        "image": "/portfolio_all/Infographic/22_44. PSD Poster Branding Mockup For Designers Vol 1.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1PXg6droPMvUBICVLY70dRk-ofcKsCr5m",
        "driveUrl": "https://drive.google.com/file/d/1PXg6droPMvUBICVLY70dRk-ofcKsCr5m/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-23",
        "driveId": "1P0805VU0Rkc7m1lXFcas9SBPNdl5b9SY",
        "fileName": "52. โครงการเครื่องช่วยหายใจและเครื่องมือแพทย์พระราชทาน-01.jpg",
        "image": "/portfolio_all/Infographic/23_52. โครงการเครื่องช่วยหายใจและเครื่องมือแพทย์พระราชทาน-01.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1P0805VU0Rkc7m1lXFcas9SBPNdl5b9SY",
        "driveUrl": "https://drive.google.com/file/d/1P0805VU0Rkc7m1lXFcas9SBPNdl5b9SY/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-24",
        "driveId": "1_UdvTGUyzw3kPYZ0jsk2WUI9tWNqnHtQ",
        "fileName": "54. Isometric Tablet Mockup.jpg",
        "image": "/portfolio_all/Infographic/24_54. Isometric Tablet Mockup.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1_UdvTGUyzw3kPYZ0jsk2WUI9tWNqnHtQ",
        "driveUrl": "https://drive.google.com/file/d/1_UdvTGUyzw3kPYZ0jsk2WUI9tWNqnHtQ/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-25",
        "driveId": "1UvoQcTSKIxRmof5XutkwQHKHSoPuh44r",
        "fileName": "55.jpg",
        "image": "/portfolio_all/Infographic/25_55.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1UvoQcTSKIxRmof5XutkwQHKHSoPuh44r",
        "driveUrl": "https://drive.google.com/file/d/1UvoQcTSKIxRmof5XutkwQHKHSoPuh44r/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-26",
        "driveId": "1EiZ9CFcEZndfDFza4ha6OejZ_YQggRHh",
        "fileName": "55.โปสเตอร์ อ.นก Size 2 x 2 เมตร.jpg",
        "image": "/portfolio_all/Infographic/26_55.โปสเตอร์ อ.นก Size 2 x 2 เมตร.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1EiZ9CFcEZndfDFza4ha6OejZ_YQggRHh",
        "driveUrl": "https://drive.google.com/file/d/1EiZ9CFcEZndfDFza4ha6OejZ_YQggRHh/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-27",
        "driveId": "19Rz_eGk7TCkf9wRF4BeKzvawChdprXtq",
        "fileName": "56.jpg",
        "image": "/portfolio_all/Infographic/27_56.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/19Rz_eGk7TCkf9wRF4BeKzvawChdprXtq",
        "driveUrl": "https://drive.google.com/file/d/19Rz_eGk7TCkf9wRF4BeKzvawChdprXtq/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-28",
        "driveId": "1Rq6WyhMCRokDs87dSNjEvXR2Dd60ycvd",
        "fileName": "JWD Timelines 2522-2561-01.jpg",
        "image": "/portfolio_all/Infographic/28_JWD Timelines 2522-2561-01.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Rq6WyhMCRokDs87dSNjEvXR2Dd60ycvd",
        "driveUrl": "https://drive.google.com/file/d/1Rq6WyhMCRokDs87dSNjEvXR2Dd60ycvd/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-29",
        "driveId": "19IzFF84EhQH2cXbzNJ-EDnLoEzEo00P1",
        "fileName": "Office syndrome.jpg",
        "image": "/portfolio_all/Infographic/29_Office syndrome.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/19IzFF84EhQH2cXbzNJ-EDnLoEzEo00P1",
        "driveUrl": "https://drive.google.com/file/d/19IzFF84EhQH2cXbzNJ-EDnLoEzEo00P1/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-30",
        "driveId": "1cGUF51zSy2YBJamaoIodrMr5WE1qtnZ-",
        "fileName": "SendTo.jpeg",
        "image": "/portfolio_all/Infographic/30_SendTo.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1cGUF51zSy2YBJamaoIodrMr5WE1qtnZ-",
        "driveUrl": "https://drive.google.com/file/d/1cGUF51zSy2YBJamaoIodrMr5WE1qtnZ-/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-1",
        "driveId": "1ft3wdycLkiM2FsKAF0dtpYWbHED6YGK4",
        "fileName": "1.4.jpg",
        "image": "/portfolio_all/Infographic/01_1.4.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1ft3wdycLkiM2FsKAF0dtpYWbHED6YGK4",
        "driveUrl": "https://drive.google.com/file/d/1ft3wdycLkiM2FsKAF0dtpYWbHED6YGK4/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-2",
        "driveId": "1JEco4YR5PKv_E-CPcNGhT-eHIRU-zuIP",
        "fileName": "2.1 Infographic 3 x Mock 1x3.jpg",
        "image": "/portfolio_all/Infographic/02_2.1 Infographic 3 x Mock 1x3.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1JEco4YR5PKv_E-CPcNGhT-eHIRU-zuIP",
        "driveUrl": "https://drive.google.com/file/d/1JEco4YR5PKv_E-CPcNGhT-eHIRU-zuIP/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-3",
        "driveId": "1do7p2RMlVlBDJSSIX-ABNQSTMdMHdJqU",
        "fileName": "2.2 Infographic 3 x Mock 1x3.jpg",
        "image": "/portfolio_all/Infographic/03_2.2 Infographic 3 x Mock 1x3.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1do7p2RMlVlBDJSSIX-ABNQSTMdMHdJqU",
        "driveUrl": "https://drive.google.com/file/d/1do7p2RMlVlBDJSSIX-ABNQSTMdMHdJqU/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-4",
        "driveId": "13X8-Mf71mtVnE-Z8Lb4I1RurpOjmRKw4",
        "fileName": "2.3.jpg",
        "image": "/portfolio_all/Infographic/04_2.3.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/13X8-Mf71mtVnE-Z8Lb4I1RurpOjmRKw4",
        "driveUrl": "https://drive.google.com/file/d/13X8-Mf71mtVnE-Z8Lb4I1RurpOjmRKw4/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      }
    ]
  },
  {
    "id": "poster-brochure",
    "folderName": "Poster + Brochure",
    "folderId": "1SX1Y0Jyo3biAkM3Cpf5UNMIvp2rRAQ4L",
    "titleTh": "Poster + Brochure",
    "titleEn": "Posters & Brochures",
    "subtitleTh": "งานออกแบบโปสเตอร์และโบรชัวร์ประชาสัมพันธ์ พร้อมไฟล์คุณภาพสูงสำหรับสื่อสิ่งพิมพ์",
    "subtitleEn": "High-resolution promotional posters and publication brochures for print & display.",
    "badgeTh": "Poster & Print",
    "badgeEn": "Publication",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1SX1Y0Jyo3biAkM3Cpf5UNMIvp2rRAQ4L?usp=sharing",
    "items": [
      {
        "id": "poster-brochure-35",
        "driveId": "",
        "fileName": "magnific_mock-up_s7tUgP6l8e_2ba98191.png",
        "image": "/assets/aistudio/magnific_mock-up_s7tUgP6l8e_2ba98191.png",
        "cdnFallback": "/assets/aistudio/magnific_mock-up_s7tUgP6l8e_2ba98191.png",
        "driveUrl": "",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-36",
        "driveId": "",
        "fileName": "magnific_mock-up_ovimtjZ829_f281a209.png",
        "image": "/assets/aistudio/magnific_mock-up_ovimtjZ829_f281a209.png",
        "cdnFallback": "/assets/aistudio/magnific_mock-up_ovimtjZ829_f281a209.png",
        "driveUrl": "",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-37",
        "driveId": "",
        "fileName": "magnific_mock-up_gOh77IsSXO_6b910187.png",
        "image": "/assets/aistudio/magnific_mock-up_gOh77IsSXO_6b910187.png",
        "cdnFallback": "/assets/aistudio/magnific_mock-up_gOh77IsSXO_6b910187.png",
        "driveUrl": "",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-7",
        "driveId": "1533GmizKqx6wgnwDv3CQWRcb2Zutjl8G",
        "fileName": "1.23 (1).jpg",
        "image": "/portfolio_all/Poster_Brochure/07_1.23 _1_.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1533GmizKqx6wgnwDv3CQWRcb2Zutjl8G",
        "driveUrl": "https://drive.google.com/file/d/1533GmizKqx6wgnwDv3CQWRcb2Zutjl8G/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-8",
        "driveId": "1xblRmEXG60cqOwaynmhL9T-fNnbVT6Za",
        "fileName": "1.23.jpg",
        "image": "/portfolio_all/Poster_Brochure/08_1.23.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1xblRmEXG60cqOwaynmhL9T-fNnbVT6Za",
        "driveUrl": "https://drive.google.com/file/d/1xblRmEXG60cqOwaynmhL9T-fNnbVT6Za/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-9",
        "driveId": "1NmeEeRbvjfHXua3T6kcZ7r34FcbwdGYD",
        "fileName": "1.24.jpg",
        "image": "/portfolio_all/Poster_Brochure/09_1.24.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1NmeEeRbvjfHXua3T6kcZ7r34FcbwdGYD",
        "driveUrl": "https://drive.google.com/file/d/1NmeEeRbvjfHXua3T6kcZ7r34FcbwdGYD/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-10",
        "driveId": "1thX3G5byJFBg6eX8p-V_iR0AQjXofTtc",
        "fileName": "1.25.jpg",
        "image": "/portfolio_all/Poster_Brochure/10_1.25.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1thX3G5byJFBg6eX8p-V_iR0AQjXofTtc",
        "driveUrl": "https://drive.google.com/file/d/1thX3G5byJFBg6eX8p-V_iR0AQjXofTtc/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-11",
        "driveId": "1QJGTH9U5UhH86w9n1MwIXuYohs775cfX",
        "fileName": "1.jpg",
        "image": "/portfolio_all/Poster_Brochure/11_1.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1QJGTH9U5UhH86w9n1MwIXuYohs775cfX",
        "driveUrl": "https://drive.google.com/file/d/1QJGTH9U5UhH86w9n1MwIXuYohs775cfX/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-12",
        "driveId": "1HpvEiAHAo5mvUgke7SYe2DjC3efo3rpt",
        "fileName": "2.jpg",
        "image": "/portfolio_all/Poster_Brochure/12_2.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1HpvEiAHAo5mvUgke7SYe2DjC3efo3rpt",
        "driveUrl": "https://drive.google.com/file/d/1HpvEiAHAo5mvUgke7SYe2DjC3efo3rpt/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-13",
        "driveId": "1c6nZLeLKMkSFPYhhQECh2ZjWtqvXgDKy",
        "fileName": "7.jpg",
        "image": "/portfolio_all/Poster_Brochure/13_7.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1c6nZLeLKMkSFPYhhQECh2ZjWtqvXgDKy",
        "driveUrl": "https://drive.google.com/file/d/1c6nZLeLKMkSFPYhhQECh2ZjWtqvXgDKy/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-14",
        "driveId": "16DD8rx7fUDnS_Ywk3sHE-jltwxlRBUcZ",
        "fileName": "10.jpg",
        "image": "/portfolio_all/Poster_Brochure/14_10.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/16DD8rx7fUDnS_Ywk3sHE-jltwxlRBUcZ",
        "driveUrl": "https://drive.google.com/file/d/16DD8rx7fUDnS_Ywk3sHE-jltwxlRBUcZ/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-15",
        "driveId": "1zlbzOkOdgbANc3aOcG71vhCbomaPcuGr",
        "fileName": "17.jpg",
        "image": "/portfolio_all/Poster_Brochure/15_17.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1zlbzOkOdgbANc3aOcG71vhCbomaPcuGr",
        "driveUrl": "https://drive.google.com/file/d/1zlbzOkOdgbANc3aOcG71vhCbomaPcuGr/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-16",
        "driveId": "1oAuU3H-EYEx1h5WHBI63Bg9lzjzqZ4rP",
        "fileName": "18.jpg",
        "image": "/portfolio_all/Poster_Brochure/16_18.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1oAuU3H-EYEx1h5WHBI63Bg9lzjzqZ4rP",
        "driveUrl": "https://drive.google.com/file/d/1oAuU3H-EYEx1h5WHBI63Bg9lzjzqZ4rP/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-17",
        "driveId": "1Di_0iiqbJDPbNbEYXeEHvjqWv8_fTnHL",
        "fileName": "19.jpg",
        "image": "/portfolio_all/Poster_Brochure/17_19.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Di_0iiqbJDPbNbEYXeEHvjqWv8_fTnHL",
        "driveUrl": "https://drive.google.com/file/d/1Di_0iiqbJDPbNbEYXeEHvjqWv8_fTnHL/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-18",
        "driveId": "10RDDMbOka_1Gxd6FhYWC1gxIqW4yCttD",
        "fileName": "20.jpg",
        "image": "/portfolio_all/Poster_Brochure/18_20.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/10RDDMbOka_1Gxd6FhYWC1gxIqW4yCttD",
        "driveUrl": "https://drive.google.com/file/d/10RDDMbOka_1Gxd6FhYWC1gxIqW4yCttD/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-19",
        "driveId": "14A-p_ghvTRdioPhbh4XLLX9sl7ERwW8E",
        "fileName": "28.jpg",
        "image": "/portfolio_all/Poster_Brochure/19_28.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/14A-p_ghvTRdioPhbh4XLLX9sl7ERwW8E",
        "driveUrl": "https://drive.google.com/file/d/14A-p_ghvTRdioPhbh4XLLX9sl7ERwW8E/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-20",
        "driveId": "1eVg3I_RmveZtoQ0DQWj_jJEe7R_OKFUI",
        "fileName": "34.jpg",
        "image": "/portfolio_all/Poster_Brochure/20_34.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1eVg3I_RmveZtoQ0DQWj_jJEe7R_OKFUI",
        "driveUrl": "https://drive.google.com/file/d/1eVg3I_RmveZtoQ0DQWj_jJEe7R_OKFUI/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-21",
        "driveId": "1pKdf9OjNU5ApRL0p59L-wmrRh2we0br4",
        "fileName": "37.jpg",
        "image": "/portfolio_all/Poster_Brochure/21_37.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1pKdf9OjNU5ApRL0p59L-wmrRh2we0br4",
        "driveUrl": "https://drive.google.com/file/d/1pKdf9OjNU5ApRL0p59L-wmrRh2we0br4/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-22",
        "driveId": "1ANgJgh060pdf7peGw43xecbOoKMCAPVM",
        "fileName": "38.jpg",
        "image": "/portfolio_all/Poster_Brochure/22_38.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1ANgJgh060pdf7peGw43xecbOoKMCAPVM",
        "driveUrl": "https://drive.google.com/file/d/1ANgJgh060pdf7peGw43xecbOoKMCAPVM/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-23",
        "driveId": "1Y3tW7kvFq1Q0rPFOi45rC3SZrEy_cd3S",
        "fileName": "40.jpg",
        "image": "/portfolio_all/Poster_Brochure/23_40.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Y3tW7kvFq1Q0rPFOi45rC3SZrEy_cd3S",
        "driveUrl": "https://drive.google.com/file/d/1Y3tW7kvFq1Q0rPFOi45rC3SZrEy_cd3S/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-24",
        "driveId": "16aARWvxgwm82rAzrgnuu6ZWsNpReLZgf",
        "fileName": "51. P3QEK01.jpg",
        "image": "/portfolio_all/Poster_Brochure/24_51. P3QEK01.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/16aARWvxgwm82rAzrgnuu6ZWsNpReLZgf",
        "driveUrl": "https://drive.google.com/file/d/16aARWvxgwm82rAzrgnuu6ZWsNpReLZgf/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-25",
        "driveId": "1TA4OGPyW871msbWxUtutQ3RFtePiqnft",
        "fileName": "52. One page flyer mockup 02.jpg",
        "image": "/portfolio_all/Poster_Brochure/25_52. One page flyer mockup 02.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1TA4OGPyW871msbWxUtutQ3RFtePiqnft",
        "driveUrl": "https://drive.google.com/file/d/1TA4OGPyW871msbWxUtutQ3RFtePiqnft/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-26",
        "driveId": "1A-A13rJjIZXP4d03dDV8-a9qDFPgNh5P",
        "fileName": "53.jpg",
        "image": "/portfolio_all/Poster_Brochure/26_53.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1A-A13rJjIZXP4d03dDV8-a9qDFPgNh5P",
        "driveUrl": "https://drive.google.com/file/d/1A-A13rJjIZXP4d03dDV8-a9qDFPgNh5P/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-27",
        "driveId": "1eKoqAZh4qguB67g1aHvTfB6CkOrJynwl",
        "fileName": "285.jpg",
        "image": "/portfolio_all/Poster_Brochure/27_285.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1eKoqAZh4qguB67g1aHvTfB6CkOrJynwl",
        "driveUrl": "https://drive.google.com/file/d/1eKoqAZh4qguB67g1aHvTfB6CkOrJynwl/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-28",
        "driveId": "1opk-OzwL_cqG2GM-mp1qA5TXLK7_6Vax",
        "fileName": "2507440 copy.jpg",
        "image": "/portfolio_all/Poster_Brochure/28_2507440 copy.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1opk-OzwL_cqG2GM-mp1qA5TXLK7_6Vax",
        "driveUrl": "https://drive.google.com/file/d/1opk-OzwL_cqG2GM-mp1qA5TXLK7_6Vax/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-29",
        "driveId": "1pYj1nENpG-tJdSjUcRfltSTmGmUTJ6QP",
        "fileName": "Brochure Design.jpg",
        "image": "/portfolio_all/Poster_Brochure/29_Brochure Design.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1pYj1nENpG-tJdSjUcRfltSTmGmUTJ6QP",
        "driveUrl": "https://drive.google.com/file/d/1pYj1nENpG-tJdSjUcRfltSTmGmUTJ6QP/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-30",
        "driveId": "1ylcY5e6BbsUw3X8xWF89JJ404S3Hlbgl",
        "fileName": "Infographic Brochure.jpg",
        "image": "/portfolio_all/Poster_Brochure/30_Infographic Brochure.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1ylcY5e6BbsUw3X8xWF89JJ404S3Hlbgl",
        "driveUrl": "https://drive.google.com/file/d/1ylcY5e6BbsUw3X8xWF89JJ404S3Hlbgl/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-31",
        "driveId": "1HZCX9JFJ7SEV6LXZG2lEVaIpRqj_9uiV",
        "fileName": "PC5UCO1.jpg",
        "image": "/portfolio_all/Poster_Brochure/31_PC5UCO1.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1HZCX9JFJ7SEV6LXZG2lEVaIpRqj_9uiV",
        "driveUrl": "https://drive.google.com/file/d/1HZCX9JFJ7SEV6LXZG2lEVaIpRqj_9uiV/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-32",
        "driveId": "1S22SoVA5GcO5bC0p4uB4Z5T7cHirJQ0B",
        "fileName": "Poster.jpg",
        "image": "/portfolio_all/Poster_Brochure/32_Poster.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1S22SoVA5GcO5bC0p4uB4Z5T7cHirJQ0B",
        "driveUrl": "https://drive.google.com/file/d/1S22SoVA5GcO5bC0p4uB4Z5T7cHirJQ0B/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-33",
        "driveId": "1ievXBPf1dgr_lIN9bwWe4IbyASDBmLFD",
        "fileName": "Screen Shot 2564-07-06 at 15.57.47.png",
        "image": "/portfolio_all/Poster_Brochure/33_Screen Shot 2564-07-06 at 15.57.47.png",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1ievXBPf1dgr_lIN9bwWe4IbyASDBmLFD",
        "driveUrl": "https://drive.google.com/file/d/1ievXBPf1dgr_lIN9bwWe4IbyASDBmLFD/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-34",
        "driveId": "1fdLX229vZCjKULAJPci3UOR264wAnrte",
        "fileName": "WMN กระดาษนำเข้าจากต่างประเทศ-01.jpg",
        "image": "/portfolio_all/Poster_Brochure/34_WMN กระดาษนำเข้าจากต่างประเทศ-01.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1fdLX229vZCjKULAJPci3UOR264wAnrte",
        "driveUrl": "https://drive.google.com/file/d/1fdLX229vZCjKULAJPci3UOR264wAnrte/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-1",
        "driveId": "1Vddsb3MqwAfpwqQDjQV8Te4mbrQdFQ5a",
        "fileName": "1.5.jpg",
        "image": "/portfolio_all/Poster_Brochure/01_1.5.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Vddsb3MqwAfpwqQDjQV8Te4mbrQdFQ5a",
        "driveUrl": "https://drive.google.com/file/d/1Vddsb3MqwAfpwqQDjQV8Te4mbrQdFQ5a/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-2",
        "driveId": "1WndmW-CP2UootKrlGZZa17eJ0asXmF9V",
        "fileName": "1.6.jpg",
        "image": "/portfolio_all/Poster_Brochure/02_1.6.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1WndmW-CP2UootKrlGZZa17eJ0asXmF9V",
        "driveUrl": "https://drive.google.com/file/d/1WndmW-CP2UootKrlGZZa17eJ0asXmF9V/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-3",
        "driveId": "146hiIk8W0XbhSrYy7xmBqWEJ6k74aYGZ",
        "fileName": "1.7.jpg",
        "image": "/portfolio_all/Poster_Brochure/03_1.7.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/146hiIk8W0XbhSrYy7xmBqWEJ6k74aYGZ",
        "driveUrl": "https://drive.google.com/file/d/146hiIk8W0XbhSrYy7xmBqWEJ6k74aYGZ/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-4",
        "driveId": "1ga4mJyzkPI4Uxu39h26I9o8vzoEhgHzn",
        "fileName": "1.8.jpg",
        "image": "/portfolio_all/Poster_Brochure/04_1.8.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1ga4mJyzkPI4Uxu39h26I9o8vzoEhgHzn",
        "driveUrl": "https://drive.google.com/file/d/1ga4mJyzkPI4Uxu39h26I9o8vzoEhgHzn/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-5",
        "driveId": "1m1yyovOhlXhyE82osecgcQ9nXtu-Jo2b",
        "fileName": "1.11.jpg",
        "image": "/portfolio_all/Poster_Brochure/05_1.11.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1m1yyovOhlXhyE82osecgcQ9nXtu-Jo2b",
        "driveUrl": "https://drive.google.com/file/d/1m1yyovOhlXhyE82osecgcQ9nXtu-Jo2b/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      },
      {
        "id": "poster-brochure-6",
        "driveId": "1F_mXnegcmZlTWlwXubQiy3zjydAazUUZ",
        "fileName": "1.21.jpg",
        "image": "/portfolio_all/Poster_Brochure/06_1.21.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1F_mXnegcmZlTWlwXubQiy3zjydAazUUZ",
        "driveUrl": "https://drive.google.com/file/d/1F_mXnegcmZlTWlwXubQiy3zjydAazUUZ/view?usp=sharing",
        "albumId": "poster-brochure",
        "albumName": "Poster + Brochure"
      }
    ]
  },
  {
    "id": "leaflet-brochure",
    "folderName": "Leaflet / Brochure",
    "folderId": "1FXPL7L12IzdFitd6O_b-o3MYWcp5gYCj",
    "titleTh": "Leaflet / Brochure",
    "titleEn": "Leaflets & Folded Brochures",
    "subtitleTh": "แผ่นพับ ใบปลิวแนะนำผลิตภัณฑ์ และเอกสารแจกประชาสัมพันธ์ จัดวางเนื้อหาและรูปเล่มเป็นระเบียบ",
    "subtitleEn": "Folded leaflets and informational sales handouts designed for maximum clarity.",
    "badgeTh": "Leaflets",
    "badgeEn": "Folded Media",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1FXPL7L12IzdFitd6O_b-o3MYWcp5gYCj?usp=sharing",
    "items": [
      {
        "id": "leaflet-brochure-9",
        "driveId": "122EmPEcuEgezik1zM5oDgMtQ08XcR4BZ",
        "fileName": "48. PF8Y181.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/09_48. PF8Y181.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/122EmPEcuEgezik1zM5oDgMtQ08XcR4BZ",
        "driveUrl": "https://drive.google.com/file/d/122EmPEcuEgezik1zM5oDgMtQ08XcR4BZ/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-10",
        "driveId": "1qgoWYsGjdUUeuKFEM7RgMrd1J4SXvuFQ",
        "fileName": "118781128_726066851366278_7070742736411869450_n.jpeg",
        "image": "/portfolio_all/Leaflet_Brochure/10_118781128_726066851366278_7070742736411869450_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1qgoWYsGjdUUeuKFEM7RgMrd1J4SXvuFQ",
        "driveUrl": "https://drive.google.com/file/d/1qgoWYsGjdUUeuKFEM7RgMrd1J4SXvuFQ/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-11",
        "driveId": "1DKNBsXOyqvtBGX8G79hvMY7UOgpm7SLy",
        "fileName": "Portfolio-01 2.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/11_Portfolio-01 2.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1DKNBsXOyqvtBGX8G79hvMY7UOgpm7SLy",
        "driveUrl": "https://drive.google.com/file/d/1DKNBsXOyqvtBGX8G79hvMY7UOgpm7SLy/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-12",
        "driveId": "1ITkDzd1Ifds1nYKT_tqFqa6iwCdjuWMW",
        "fileName": "Portfolio-01 copy.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/12_Portfolio-01 copy.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1ITkDzd1Ifds1nYKT_tqFqa6iwCdjuWMW",
        "driveUrl": "https://drive.google.com/file/d/1ITkDzd1Ifds1nYKT_tqFqa6iwCdjuWMW/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-13",
        "driveId": "1gnMgYaHDY5Y6unA8TG3mDKgArjt4QJiZ",
        "fileName": "Portfolio-02.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/13_Portfolio-02.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1gnMgYaHDY5Y6unA8TG3mDKgArjt4QJiZ",
        "driveUrl": "https://drive.google.com/file/d/1gnMgYaHDY5Y6unA8TG3mDKgArjt4QJiZ/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-14",
        "driveId": "1dJtCX7BOwn7voYQsLw12NdGHq34H7FYi",
        "fileName": "Portfolio-03 2.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/14_Portfolio-03 2.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1dJtCX7BOwn7voYQsLw12NdGHq34H7FYi",
        "driveUrl": "https://drive.google.com/file/d/1dJtCX7BOwn7voYQsLw12NdGHq34H7FYi/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-1",
        "driveId": "1uyqwGgV5eHdLkISRp2scrtIxd_4t9NV-",
        "fileName": "1.9.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/01_1.9.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1uyqwGgV5eHdLkISRp2scrtIxd_4t9NV-",
        "driveUrl": "https://drive.google.com/file/d/1uyqwGgV5eHdLkISRp2scrtIxd_4t9NV-/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-2",
        "driveId": "1NYx3tMYwIzL1kmcCsMV2Bq1D_rthtvqK",
        "fileName": "1.10.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/02_1.10.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1NYx3tMYwIzL1kmcCsMV2Bq1D_rthtvqK",
        "driveUrl": "https://drive.google.com/file/d/1NYx3tMYwIzL1kmcCsMV2Bq1D_rthtvqK/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-3",
        "driveId": "14r_d7my48wigY7l_rU6-s57425_d_C7Z",
        "fileName": "1.24.png",
        "image": "/portfolio_all/Leaflet_Brochure/03_1.24.png",
        "cdnFallback": "https://lh3.googleusercontent.com/d/14r_d7my48wigY7l_rU6-s57425_d_C7Z",
        "driveUrl": "https://drive.google.com/file/d/14r_d7my48wigY7l_rU6-s57425_d_C7Z/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-4",
        "driveId": "1yRzeytSn-jr0lf2ToMVA_4yQ9Uimx4Ny",
        "fileName": "4.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/04_4.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1yRzeytSn-jr0lf2ToMVA_4yQ9Uimx4Ny",
        "driveUrl": "https://drive.google.com/file/d/1yRzeytSn-jr0lf2ToMVA_4yQ9Uimx4Ny/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-5",
        "driveId": "1nqU6GzHlfeRE90ttHIehxbJz_l2R4x5E",
        "fileName": "33.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/05_33.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1nqU6GzHlfeRE90ttHIehxbJz_l2R4x5E",
        "driveUrl": "https://drive.google.com/file/d/1nqU6GzHlfeRE90ttHIehxbJz_l2R4x5E/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-6",
        "driveId": "1so9wgxDnikzmzC4XnmUM4D9YTgfSoLWN",
        "fileName": "36.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/06_36.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1so9wgxDnikzmzC4XnmUM4D9YTgfSoLWN",
        "driveUrl": "https://drive.google.com/file/d/1so9wgxDnikzmzC4XnmUM4D9YTgfSoLWN/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-7",
        "driveId": "1a-KxU5j464zXxkaZ1mgTVLeL2tdv4Nd5",
        "fileName": "39.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/07_39.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1a-KxU5j464zXxkaZ1mgTVLeL2tdv4Nd5",
        "driveUrl": "https://drive.google.com/file/d/1a-KxU5j464zXxkaZ1mgTVLeL2tdv4Nd5/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      },
      {
        "id": "leaflet-brochure-8",
        "driveId": "1U5GJjWA7GG27qM8JCDabvxPQBiCjuFMX",
        "fileName": "45.jpg",
        "image": "/portfolio_all/Leaflet_Brochure/08_45.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1U5GJjWA7GG27qM8JCDabvxPQBiCjuFMX",
        "driveUrl": "https://drive.google.com/file/d/1U5GJjWA7GG27qM8JCDabvxPQBiCjuFMX/view?usp=sharing",
        "albumId": "leaflet-brochure",
        "albumName": "Leaflet / Brochure"
      }
    ]
  },
  {
    "id": "catalog-menu",
    "folderName": "Catalog : Menu",
    "folderId": "1BPZzAd7xUFSJcrzkl5OwM9ztSyilHACt",
    "titleTh": "Catalog : Menu",
    "titleEn": "Product Catalogs & Menus",
    "subtitleTh": "แคตตาล็อกรวมสินค้าและเล่มเมนูอาหารเครื่องดื่ม จัดหมวดหมู่ชัดเจน ดีไซน์ทันสมัย",
    "subtitleEn": "Comprehensive commercial catalogs and culinary menu layouts.",
    "badgeTh": "Catalog & Menu",
    "badgeEn": "Menu Design",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1BPZzAd7xUFSJcrzkl5OwM9ztSyilHACt?usp=sharing",
    "items": [
      {
        "id": "catalog-menu-14",
        "driveId": "",
        "fileName": "magnific_mock-up-proposal-book_EbWHWATuuO_d24b2849.png",
        "image": "/assets/aistudio/magnific_mock-up-proposal-book_EbWHWATuuO_d24b2849.png",
        "cdnFallback": "/assets/aistudio/magnific_mock-up-proposal-book_EbWHWATuuO_d24b2849.png",
        "driveUrl": "",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-15",
        "driveId": "",
        "fileName": "magnific_mock-up-brochure_lJmwfWegv9_31b2bf44.png",
        "image": "/assets/aistudio/magnific_mock-up-brochure_lJmwfWegv9_31b2bf44.png",
        "cdnFallback": "/assets/aistudio/magnific_mock-up-brochure_lJmwfWegv9_31b2bf44.png",
        "driveUrl": "",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-1",
        "driveId": "1S-s3IRjcva9zHqA2nefdAGTE_90MUZ6T",
        "fileName": "11.jpg",
        "image": "/portfolio_all/Catalog_Menu/01_11.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1S-s3IRjcva9zHqA2nefdAGTE_90MUZ6T",
        "driveUrl": "https://drive.google.com/file/d/1S-s3IRjcva9zHqA2nefdAGTE_90MUZ6T/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-2",
        "driveId": "1fwYCDHQ5NEyWOoupezbRRM3zMzG6TVKF",
        "fileName": "31.jpg",
        "image": "/portfolio_all/Catalog_Menu/02_31.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1fwYCDHQ5NEyWOoupezbRRM3zMzG6TVKF",
        "driveUrl": "https://drive.google.com/file/d/1fwYCDHQ5NEyWOoupezbRRM3zMzG6TVKF/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-3",
        "driveId": "1eyy0Ocb-8U9o2dND61QVDi370PSxOWFs",
        "fileName": "90185774_620429611930003_4155018720122503168_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/03_90185774_620429611930003_4155018720122503168_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1eyy0Ocb-8U9o2dND61QVDi370PSxOWFs",
        "driveUrl": "https://drive.google.com/file/d/1eyy0Ocb-8U9o2dND61QVDi370PSxOWFs/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-4",
        "driveId": "1Ov1qEIlnUcj03kzImRZSNXB2fX39DU7U",
        "fileName": "182950324_877964136176548_7973877516372870929_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/04_182950324_877964136176548_7973877516372870929_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Ov1qEIlnUcj03kzImRZSNXB2fX39DU7U",
        "driveUrl": "https://drive.google.com/file/d/1Ov1qEIlnUcj03kzImRZSNXB2fX39DU7U/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-5",
        "driveId": "1IaZ3DiSuXN1idijZc0lFiAVYE9X2TeHF",
        "fileName": "229581929_928323281140633_1638640906007994187_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/05_229581929_928323281140633_1638640906007994187_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1IaZ3DiSuXN1idijZc0lFiAVYE9X2TeHF",
        "driveUrl": "https://drive.google.com/file/d/1IaZ3DiSuXN1idijZc0lFiAVYE9X2TeHF/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-6",
        "driveId": "1p8MrE6Yi4ARfw5EHpKCMGuItgC72zh2U",
        "fileName": "230488388_928323284473966_1696949499967559028_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/06_230488388_928323284473966_1696949499967559028_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1p8MrE6Yi4ARfw5EHpKCMGuItgC72zh2U",
        "driveUrl": "https://drive.google.com/file/d/1p8MrE6Yi4ARfw5EHpKCMGuItgC72zh2U/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-7",
        "driveId": "1Iair_pAXlmJfZlPvNhg0YtSAkRPXxsjo",
        "fileName": "231586107_929244954381799_8820193068477989760_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/07_231586107_929244954381799_8820193068477989760_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Iair_pAXlmJfZlPvNhg0YtSAkRPXxsjo",
        "driveUrl": "https://drive.google.com/file/d/1Iair_pAXlmJfZlPvNhg0YtSAkRPXxsjo/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-8",
        "driveId": "1EO1pzGZhBTglb-uvSs2CSqQJtrihgF4k",
        "fileName": "231707331_928323181140643_2163395785139431297_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/08_231707331_928323181140643_2163395785139431297_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1EO1pzGZhBTglb-uvSs2CSqQJtrihgF4k",
        "driveUrl": "https://drive.google.com/file/d/1EO1pzGZhBTglb-uvSs2CSqQJtrihgF4k/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-9",
        "driveId": "12dtRssFTbsy2Hhb6avKMM_46oKZYS09_",
        "fileName": "232000733_929245051048456_9027221270688342698_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/09_232000733_929245051048456_9027221270688342698_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/12dtRssFTbsy2Hhb6avKMM_46oKZYS09_",
        "driveUrl": "https://drive.google.com/file/d/12dtRssFTbsy2Hhb6avKMM_46oKZYS09_/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-10",
        "driveId": "1Yzt4trEy-jyUXgZLoZc51WGUp-iu4468",
        "fileName": "232100481_929245107715117_1989540641891661967_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/10_232100481_929245107715117_1989540641891661967_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Yzt4trEy-jyUXgZLoZc51WGUp-iu4468",
        "driveUrl": "https://drive.google.com/file/d/1Yzt4trEy-jyUXgZLoZc51WGUp-iu4468/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-11",
        "driveId": "1SKp5y2SU_DA1RZLD23mLgTBbltFBZHt3",
        "fileName": "232332516_928323324473962_7508507812784123288_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/11_232332516_928323324473962_7508507812784123288_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1SKp5y2SU_DA1RZLD23mLgTBbltFBZHt3",
        "driveUrl": "https://drive.google.com/file/d/1SKp5y2SU_DA1RZLD23mLgTBbltFBZHt3/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-12",
        "driveId": "1YZ_cIv6TisWiEqBhgCTP7Zipr2trZmLB",
        "fileName": "232506042_929245067715121_1467862491348169534_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/12_232506042_929245067715121_1467862491348169534_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1YZ_cIv6TisWiEqBhgCTP7Zipr2trZmLB",
        "driveUrl": "https://drive.google.com/file/d/1YZ_cIv6TisWiEqBhgCTP7Zipr2trZmLB/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      },
      {
        "id": "catalog-menu-13",
        "driveId": "1WqIY5i9YvEAEJieuJ1DvTfhS9swxhtlU",
        "fileName": "233074838_929245094381785_2803670082490953910_n.jpeg",
        "image": "/portfolio_all/Catalog_Menu/13_233074838_929245094381785_2803670082490953910_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1WqIY5i9YvEAEJieuJ1DvTfhS9swxhtlU",
        "driveUrl": "https://drive.google.com/file/d/1WqIY5i9YvEAEJieuJ1DvTfhS9swxhtlU/view?usp=sharing",
        "albumId": "catalog-menu",
        "albumName": "Catalog : Menu"
      }
    ]
  },
  {
    "id": "rollup-billboard",
    "folderName": "Roll up / Vinyl / Billboard",
    "folderId": "1onemgIGmpsE493PXYLGc9fJ10FB-KgOm",
    "titleTh": "Roll up / Vinyl / Billboard",
    "titleEn": "Banners & Large Format Print",
    "subtitleTh": "ป้ายโฆษณาขนาดใหญ่ โรลอัปออกบูธ ไวนิลหน้าร้าน และบิลบอร์ด มองเห็นเด่นชัดจากระยะไกล",
    "subtitleEn": "Exhibition roll-up stands, vinyl banners, and large-format outdoor billboards.",
    "badgeTh": "Large Format",
    "badgeEn": "Signage",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1onemgIGmpsE493PXYLGc9fJ10FB-KgOm?usp=sharing",
    "items": [
      {
        "id": "rollup-billboard-7",
        "driveId": "",
        "fileName": "magnific_mock-up-back-drop-299264-cm_8a3hRY9IrU_1d200d22.png",
        "image": "/assets/aistudio/magnific_mock-up-back-drop-299264-cm_8a3hRY9IrU_1d200d22.png",
        "cdnFallback": "/assets/aistudio/magnific_mock-up-back-drop-299264-cm_8a3hRY9IrU_1d200d22.png",
        "driveUrl": "",
        "albumId": "rollup-billboard",
        "albumName": "Roll up / Vinyl / Billboard"
      },
      {
        "id": "rollup-billboard-8",
        "driveId": "",
        "fileName": "magnific_mock-up-poster-2_IfRvWoUtvE_25458d59.png",
        "image": "/assets/aistudio/magnific_mock-up-poster-2_IfRvWoUtvE_25458d59.png",
        "cdnFallback": "/assets/aistudio/magnific_mock-up-poster-2_IfRvWoUtvE_25458d59.png",
        "driveUrl": "",
        "albumId": "rollup-billboard",
        "albumName": "Roll up / Vinyl / Billboard"
      },
      {
        "id": "rollup-billboard-1",
        "driveId": "1gwcTiwT0uZxYXkSVSE12Q20OERxKL29T",
        "fileName": "1.01.jpg",
        "image": "/portfolio_all/Roll_up_Vinyl_Billboard/01_1.01.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1gwcTiwT0uZxYXkSVSE12Q20OERxKL29T",
        "driveUrl": "https://drive.google.com/file/d/1gwcTiwT0uZxYXkSVSE12Q20OERxKL29T/view?usp=sharing",
        "albumId": "rollup-billboard",
        "albumName": "Roll up / Vinyl / Billboard"
      },
      {
        "id": "rollup-billboard-2",
        "driveId": "10CAAstrdhnEUF1gmkiEx_FDE6ytWbw9w",
        "fileName": "1.02.jpg",
        "image": "/portfolio_all/Roll_up_Vinyl_Billboard/02_1.02.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/10CAAstrdhnEUF1gmkiEx_FDE6ytWbw9w",
        "driveUrl": "https://drive.google.com/file/d/10CAAstrdhnEUF1gmkiEx_FDE6ytWbw9w/view?usp=sharing",
        "albumId": "rollup-billboard",
        "albumName": "Roll up / Vinyl / Billboard"
      },
      {
        "id": "rollup-billboard-3",
        "driveId": "1Mv845WMgOAuQjXolV6A6Ipo9QK59qPpL",
        "fileName": "42.jpg",
        "image": "/portfolio_all/Roll_up_Vinyl_Billboard/03_42.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Mv845WMgOAuQjXolV6A6Ipo9QK59qPpL",
        "driveUrl": "https://drive.google.com/file/d/1Mv845WMgOAuQjXolV6A6Ipo9QK59qPpL/view?usp=sharing",
        "albumId": "rollup-billboard",
        "albumName": "Roll up / Vinyl / Billboard"
      },
      {
        "id": "rollup-billboard-4",
        "driveId": "1VszfJjEIAKWhyBkbXrvAPSGpSEA1xIkQ",
        "fileName": "12218.jpg",
        "image": "/portfolio_all/Roll_up_Vinyl_Billboard/04_12218.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1VszfJjEIAKWhyBkbXrvAPSGpSEA1xIkQ",
        "driveUrl": "https://drive.google.com/file/d/1VszfJjEIAKWhyBkbXrvAPSGpSEA1xIkQ/view?usp=sharing",
        "albumId": "rollup-billboard",
        "albumName": "Roll up / Vinyl / Billboard"
      },
      {
        "id": "rollup-billboard-5",
        "driveId": "1f9yTQ_SxkFHNDdrh-BkorSiPHmgpHwPo",
        "fileName": "96585383_649672972339000_6996355545972080640_n.jpeg",
        "image": "/portfolio_all/Roll_up_Vinyl_Billboard/05_96585383_649672972339000_6996355545972080640_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1f9yTQ_SxkFHNDdrh-BkorSiPHmgpHwPo",
        "driveUrl": "https://drive.google.com/file/d/1f9yTQ_SxkFHNDdrh-BkorSiPHmgpHwPo/view?usp=sharing",
        "albumId": "rollup-billboard",
        "albumName": "Roll up / Vinyl / Billboard"
      },
      {
        "id": "rollup-billboard-6",
        "driveId": "1SDt3w8AlU2L-ONxzLvTbhRRjffe6G0vd",
        "fileName": "140625358_820594135246882_1332438613724637271_o.jpg",
        "image": "/portfolio_all/Roll_up_Vinyl_Billboard/06_140625358_820594135246882_1332438613724637271_o.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1SDt3w8AlU2L-ONxzLvTbhRRjffe6G0vd",
        "driveUrl": "https://drive.google.com/file/d/1SDt3w8AlU2L-ONxzLvTbhRRjffe6G0vd/view?usp=sharing",
        "albumId": "rollup-billboard",
        "albumName": "Roll up / Vinyl / Billboard"
      }
    ]
  },
  {
    "id": "user-guide",
    "folderName": "User Guide",
    "folderId": "1Llz1BmqbC8hPvxOU7LJQlgKAX7ai9jFI",
    "titleTh": "User Guide",
    "titleEn": "Product User Guides",
    "subtitleTh": "คู่มือแนะนำวิธีการใช้งานผลิตภัณฑ์ ขั้นตอนการทาน และข้อควรระวัง เข้าใจง่ายในหน้าเดียว",
    "subtitleEn": "Step-by-step product usage instructions and consumer application guides.",
    "badgeTh": "User Manuals",
    "badgeEn": "Guides",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1Llz1BmqbC8hPvxOU7LJQlgKAX7ai9jFI?usp=sharing",
    "items": [
      {
        "id": "user-guide-1",
        "driveId": "1amEQGbBpuJVgdt-FzPR94DQJLJrRUlHv",
        "fileName": "1.1 Lucent Skin.jpg",
        "image": "/portfolio_all/User_Guide/01_1.1 Lucent Skin.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1amEQGbBpuJVgdt-FzPR94DQJLJrRUlHv",
        "driveUrl": "https://drive.google.com/file/d/1amEQGbBpuJVgdt-FzPR94DQJLJrRUlHv/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-2",
        "driveId": "1_RtX5uhLXYVX6CEEiGTFrGHZmHnjYUCk",
        "fileName": "1.2 Lucent Skin.jpg",
        "image": "/portfolio_all/User_Guide/02_1.2 Lucent Skin.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1_RtX5uhLXYVX6CEEiGTFrGHZmHnjYUCk",
        "driveUrl": "https://drive.google.com/file/d/1_RtX5uhLXYVX6CEEiGTFrGHZmHnjYUCk/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-3",
        "driveId": "1THIFPM-U_G_geYlEqbSmtLBCHkpZCM32",
        "fileName": "1.3 Denti User Guide.jpg",
        "image": "/portfolio_all/User_Guide/03_1.3 Denti User Guide.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1THIFPM-U_G_geYlEqbSmtLBCHkpZCM32",
        "driveUrl": "https://drive.google.com/file/d/1THIFPM-U_G_geYlEqbSmtLBCHkpZCM32/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-4",
        "driveId": "11nkJWbVozJeJhtxtF6rLp7LNa_4jQaFF",
        "fileName": "3.jpeg",
        "image": "/portfolio_all/User_Guide/04_3.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/11nkJWbVozJeJhtxtF6rLp7LNa_4jQaFF",
        "driveUrl": "https://drive.google.com/file/d/11nkJWbVozJeJhtxtF6rLp7LNa_4jQaFF/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-5",
        "driveId": "1fGOvhkdzlaofQvgCEhNKNWxcGpN5zkNz",
        "fileName": "8.jpg",
        "image": "/portfolio_all/User_Guide/05_8.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1fGOvhkdzlaofQvgCEhNKNWxcGpN5zkNz",
        "driveUrl": "https://drive.google.com/file/d/1fGOvhkdzlaofQvgCEhNKNWxcGpN5zkNz/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-6",
        "driveId": "1vI4c-TKeX0QlSjHAjFqwLBUqRWM1CSlz",
        "fileName": "9.jpg",
        "image": "/portfolio_all/User_Guide/06_9.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1vI4c-TKeX0QlSjHAjFqwLBUqRWM1CSlz",
        "driveUrl": "https://drive.google.com/file/d/1vI4c-TKeX0QlSjHAjFqwLBUqRWM1CSlz/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-7",
        "driveId": "1QtFJdgDRgXuAZGDEHoeMHsg3NR8Y0oH0",
        "fileName": "65.jpeg",
        "image": "/portfolio_all/User_Guide/07_65.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1QtFJdgDRgXuAZGDEHoeMHsg3NR8Y0oH0",
        "driveUrl": "https://drive.google.com/file/d/1QtFJdgDRgXuAZGDEHoeMHsg3NR8Y0oH0/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-8",
        "driveId": "10CCNvOKOxe0ZtwjISJdlAXm0usAhSn6-",
        "fileName": "95701746_646730692633228_4544146558186160128_n.jpeg",
        "image": "/portfolio_all/User_Guide/08_95701746_646730692633228_4544146558186160128_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/10CCNvOKOxe0ZtwjISJdlAXm0usAhSn6-",
        "driveUrl": "https://drive.google.com/file/d/10CCNvOKOxe0ZtwjISJdlAXm0usAhSn6-/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-9",
        "driveId": "1KpdDqCNHyUzx0d8esS_A8pBCg2kp_XTm",
        "fileName": "95805763_646730619299902_8160738776398692352_n.jpeg",
        "image": "/portfolio_all/User_Guide/09_95805763_646730619299902_8160738776398692352_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1KpdDqCNHyUzx0d8esS_A8pBCg2kp_XTm",
        "driveUrl": "https://drive.google.com/file/d/1KpdDqCNHyUzx0d8esS_A8pBCg2kp_XTm/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-10",
        "driveId": "1LQ3qzcjQ95ZzDjV4bF43had3VD-Fo9VV",
        "fileName": "95845031_646730675966563_8006241986648473600_n.jpeg",
        "image": "/portfolio_all/User_Guide/10_95845031_646730675966563_8006241986648473600_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1LQ3qzcjQ95ZzDjV4bF43had3VD-Fo9VV",
        "driveUrl": "https://drive.google.com/file/d/1LQ3qzcjQ95ZzDjV4bF43had3VD-Fo9VV/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-11",
        "driveId": "1PWPsblh4In21xGpRBzIiFQCsl1d9WbrE",
        "fileName": "95851859_646730715966559_4984713072070361088_n.jpeg",
        "image": "/portfolio_all/User_Guide/11_95851859_646730715966559_4984713072070361088_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1PWPsblh4In21xGpRBzIiFQCsl1d9WbrE",
        "driveUrl": "https://drive.google.com/file/d/1PWPsblh4In21xGpRBzIiFQCsl1d9WbrE/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-12",
        "driveId": "1dinGMnmSEE_YzvkSBcArqhdT1ndLQwyY",
        "fileName": "95982757_646730612633236_7640635137549402112_n.jpeg",
        "image": "/portfolio_all/User_Guide/12_95982757_646730612633236_7640635137549402112_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1dinGMnmSEE_YzvkSBcArqhdT1ndLQwyY",
        "driveUrl": "https://drive.google.com/file/d/1dinGMnmSEE_YzvkSBcArqhdT1ndLQwyY/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-13",
        "driveId": "1YEGsBgUqplY7CHe4u43GZwr6S24xy6WW",
        "fileName": "96360363_646730632633234_5728730647598465024_n.jpeg",
        "image": "/portfolio_all/User_Guide/13_96360363_646730632633234_5728730647598465024_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1YEGsBgUqplY7CHe4u43GZwr6S24xy6WW",
        "driveUrl": "https://drive.google.com/file/d/1YEGsBgUqplY7CHe4u43GZwr6S24xy6WW/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-14",
        "driveId": "18gFbta7fxElRqD2ARmxYkk94V1QZIA7x",
        "fileName": "187631670_886846488621646_7180125520062678882_n.jpeg",
        "image": "/portfolio_all/User_Guide/14_187631670_886846488621646_7180125520062678882_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/18gFbta7fxElRqD2ARmxYkk94V1QZIA7x",
        "driveUrl": "https://drive.google.com/file/d/18gFbta7fxElRqD2ARmxYkk94V1QZIA7x/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-15",
        "driveId": "1oocxqFH0JtN-0oI63nopzJjTDYTJO5jh",
        "fileName": "187729420_887267948579500_4923658658471958286_n.jpeg",
        "image": "/portfolio_all/User_Guide/15_187729420_887267948579500_4923658658471958286_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1oocxqFH0JtN-0oI63nopzJjTDYTJO5jh",
        "driveUrl": "https://drive.google.com/file/d/1oocxqFH0JtN-0oI63nopzJjTDYTJO5jh/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-16",
        "driveId": "1Lgv_-zrPnK9dX99NxH7Sx5JEeXSK0LGl",
        "fileName": "189246482_886846505288311_8923780765400715248_n.jpeg",
        "image": "/portfolio_all/User_Guide/16_189246482_886846505288311_8923780765400715248_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Lgv_-zrPnK9dX99NxH7Sx5JEeXSK0LGl",
        "driveUrl": "https://drive.google.com/file/d/1Lgv_-zrPnK9dX99NxH7Sx5JEeXSK0LGl/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-17",
        "driveId": "1gO6sg45Z05FXjvEYhroj7VYLZXm_aP7m",
        "fileName": "189579992_887267885246173_4496558659113289398_n.jpeg",
        "image": "/portfolio_all/User_Guide/17_189579992_887267885246173_4496558659113289398_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1gO6sg45Z05FXjvEYhroj7VYLZXm_aP7m",
        "driveUrl": "https://drive.google.com/file/d/1gO6sg45Z05FXjvEYhroj7VYLZXm_aP7m/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-18",
        "driveId": "1SVSgZBMJzSOrFER5lD5vQ_52kwhcMqUi",
        "fileName": "189692590_887267931912835_3767943783673905637_n.jpeg",
        "image": "/portfolio_all/User_Guide/18_189692590_887267931912835_3767943783673905637_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1SVSgZBMJzSOrFER5lD5vQ_52kwhcMqUi",
        "driveUrl": "https://drive.google.com/file/d/1SVSgZBMJzSOrFER5lD5vQ_52kwhcMqUi/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-19",
        "driveId": "1k_SJUKqHuf5k-ghnRLDgAVUJt7nI_CAt",
        "fileName": "190110415_887267911912837_8225343220444713911_n.jpeg",
        "image": "/portfolio_all/User_Guide/19_190110415_887267911912837_8225343220444713911_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1k_SJUKqHuf5k-ghnRLDgAVUJt7nI_CAt",
        "driveUrl": "https://drive.google.com/file/d/1k_SJUKqHuf5k-ghnRLDgAVUJt7nI_CAt/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-20",
        "driveId": "1FFQ21PsT4Y2yKFj4s86Q8KNA3cJDYG7F",
        "fileName": "Mockup 3.jpeg",
        "image": "/portfolio_all/User_Guide/20_Mockup 3.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1FFQ21PsT4Y2yKFj4s86Q8KNA3cJDYG7F",
        "driveUrl": "https://drive.google.com/file/d/1FFQ21PsT4Y2yKFj4s86Q8KNA3cJDYG7F/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-21",
        "driveId": "1ERDGnzT6PA2-ufvPWHAkRsMqm5cy6sVr",
        "fileName": "Presentation.jpg",
        "image": "/portfolio_all/User_Guide/21_Presentation.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1ERDGnzT6PA2-ufvPWHAkRsMqm5cy6sVr",
        "driveUrl": "https://drive.google.com/file/d/1ERDGnzT6PA2-ufvPWHAkRsMqm5cy6sVr/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      },
      {
        "id": "user-guide-22",
        "driveId": "1NS1Bxd56IUXjV6p9ATq6-_hxNGn5nlN5",
        "fileName": "Trifold Mockup 2.jpeg",
        "image": "/portfolio_all/User_Guide/22_Trifold Mockup 2.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1NS1Bxd56IUXjV6p9ATq6-_hxNGn5nlN5",
        "driveUrl": "https://drive.google.com/file/d/1NS1Bxd56IUXjV6p9ATq6-_hxNGn5nlN5/view?usp=sharing",
        "albumId": "user-guide",
        "albumName": "User Guide"
      }
    ]
  },
  {
    "id": "book",
    "folderName": "Book",
    "folderId": "1VMxYEvgScQFMU8HDa8Ov2DnK_uObEf4C",
    "titleTh": "Book",
    "titleEn": "Book Cover & Editorial",
    "subtitleTh": "งานออกแบบปกหนังสือ ปกอีบุ๊ก และรูปเล่มสิ่งพิมพ์ สื่อสารอารมณ์และคุณค่าของเนื้อหาอย่างลึกซึ้ง",
    "subtitleEn": "Book covers, eBook illustrations, and editorial layout presentations.",
    "badgeTh": "Book Publishing",
    "badgeEn": "Editorial",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1VMxYEvgScQFMU8HDa8Ov2DnK_uObEf4C?usp=sharing",
    "items": [
      {
        "id": "book-1",
        "driveId": "1xY_PV8DNiv0aSXVFp7xeWjl2xjeh5tUA",
        "fileName": "1.11 1200X800 px.jpg",
        "image": "/portfolio_all/Book/01_1.11 1200X800 px.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1xY_PV8DNiv0aSXVFp7xeWjl2xjeh5tUA",
        "driveUrl": "https://drive.google.com/file/d/1xY_PV8DNiv0aSXVFp7xeWjl2xjeh5tUA/view?usp=sharing",
        "albumId": "book",
        "albumName": "Book"
      },
      {
        "id": "book-2",
        "driveId": "1ZiND7cgVeeRiWKslUupKQX3-iUxsGRGU",
        "fileName": "1.11 1200X1200 px_1.jpg",
        "image": "/portfolio_all/Book/02_1.11 1200X1200 px_1.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1ZiND7cgVeeRiWKslUupKQX3-iUxsGRGU",
        "driveUrl": "https://drive.google.com/file/d/1ZiND7cgVeeRiWKslUupKQX3-iUxsGRGU/view?usp=sharing",
        "albumId": "book",
        "albumName": "Book"
      },
      {
        "id": "book-3",
        "driveId": "1Tx0zIYM9ZGyoMWkAKo1exzgLB1HUszJW",
        "fileName": "1.11 1200X1200 px_2.jpg",
        "image": "/portfolio_all/Book/03_1.11 1200X1200 px_2.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Tx0zIYM9ZGyoMWkAKo1exzgLB1HUszJW",
        "driveUrl": "https://drive.google.com/file/d/1Tx0zIYM9ZGyoMWkAKo1exzgLB1HUszJW/view?usp=sharing",
        "albumId": "book",
        "albumName": "Book"
      }
    ]
  },
  {
    "id": "personal-brand",
    "folderName": "Personal Brand",
    "folderId": "1oFvB_P7WobwXv4tcYVE095U1BJWkCsZe",
    "titleTh": "Personal Brand",
    "titleEn": "Personal Branding & Visuals",
    "subtitleTh": "ภาพกราฟิกสื่อสารภาพลักษณ์บุคคล โค้ช วิทยากร และคอนเทนต์ครีเอเตอร์ชื่อดังระดับประเทศ",
    "subtitleEn": "Personal branding graphics, speaker portraits, and thought leader social media visuals.",
    "badgeTh": "Personal Branding",
    "badgeEn": "Brand Identity",
    "folderDriveUrl": "https://drive.google.com/drive/folders/1oFvB_P7WobwXv4tcYVE095U1BJWkCsZe?usp=sharing",
    "items": [
      {
        "id": "personal-brand-1",
        "driveId": "1NrG8LYSVP4u9s60m708HDpS_ATsFMmmh",
        "fileName": "photo-collage.png-3.png",
        "image": "/portfolio_all/Personal_Brand/01_photo-collage.png-3.png",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1NrG8LYSVP4u9s60m708HDpS_ATsFMmmh",
        "driveUrl": "https://drive.google.com/file/d/1NrG8LYSVP4u9s60m708HDpS_ATsFMmmh/view?usp=sharing",
        "albumId": "personal-brand",
        "albumName": "Personal Brand"
      },
      {
        "id": "personal-brand-2",
        "driveId": "1ivAKxsNWKtNWkcKH018SekE2G5GUn9bE",
        "fileName": "photo-collage.png-7.png",
        "image": "/portfolio_all/Personal_Brand/02_photo-collage.png-7.png",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1ivAKxsNWKtNWkcKH018SekE2G5GUn9bE",
        "driveUrl": "https://drive.google.com/file/d/1ivAKxsNWKtNWkcKH018SekE2G5GUn9bE/view?usp=sharing",
        "albumId": "personal-brand",
        "albumName": "Personal Brand"
      },
      {
        "id": "personal-brand-3",
        "driveId": "1FC6KsmPDra-o3ZIgc4_MjdsoPCqXb38L",
        "fileName": "photo-collage.png-8.png",
        "image": "/portfolio_all/Personal_Brand/03_photo-collage.png-8.png",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1FC6KsmPDra-o3ZIgc4_MjdsoPCqXb38L",
        "driveUrl": "https://drive.google.com/file/d/1FC6KsmPDra-o3ZIgc4_MjdsoPCqXb38L/view?usp=sharing",
        "albumId": "personal-brand",
        "albumName": "Personal Brand"
      },
      {
        "id": "personal-brand-4",
        "driveId": "1P83xQMlgh9Y-XlQNv5snIMdhx78q7ZXT",
        "fileName": "photo-collage.png-9.png",
        "image": "/portfolio_all/Personal_Brand/04_photo-collage.png-9.png",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1P83xQMlgh9Y-XlQNv5snIMdhx78q7ZXT",
        "driveUrl": "https://drive.google.com/file/d/1P83xQMlgh9Y-XlQNv5snIMdhx78q7ZXT/view?usp=sharing",
        "albumId": "personal-brand",
        "albumName": "Personal Brand"
      },
      {
        "id": "personal-brand-5",
        "driveId": "116ehzN34igqmfnaR_U5matT530r-vAEI",
        "fileName": "ผลงานออกแบบ_Page_18.jpg",
        "image": "/portfolio_all/Personal_Brand/05_ผลงานออกแบบ_Page_18.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/116ehzN34igqmfnaR_U5matT530r-vAEI",
        "driveUrl": "https://drive.google.com/file/d/116ehzN34igqmfnaR_U5matT530r-vAEI/view?usp=sharing",
        "albumId": "personal-brand",
        "albumName": "Personal Brand"
      }
    ]
  }
];

export const ALL_PORTFOLIO_ITEMS: PortfolioArtwork[] = PORTFOLIO_ALBUMS.flatMap(
  (album) => album.items
);
