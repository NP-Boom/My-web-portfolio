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
        "id": "ads-products-58",
        "driveId": "1Com4s8_vV2Bim_Zn-f7vk--ZLTMqDQGU",
        "fileName": "1769994514388.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/58_1769994514388.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Com4s8_vV2Bim_Zn-f7vk--ZLTMqDQGU",
        "driveUrl": "https://drive.google.com/file/d/1Com4s8_vV2Bim_Zn-f7vk--ZLTMqDQGU/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-57",
        "driveId": "1yWKAbfE7H0XsxDQN8P4sEkcpFEMgKmC8",
        "fileName": "1769994513873.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/57_1769994513873.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1yWKAbfE7H0XsxDQN8P4sEkcpFEMgKmC8",
        "driveUrl": "https://drive.google.com/file/d/1yWKAbfE7H0XsxDQN8P4sEkcpFEMgKmC8/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-56",
        "driveId": "1LkSBvdTnOIn8NG1rSZvwpi0x3XEPU717",
        "fileName": "1769994513374.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/56_1769994513374.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1LkSBvdTnOIn8NG1rSZvwpi0x3XEPU717",
        "driveUrl": "https://drive.google.com/file/d/1LkSBvdTnOIn8NG1rSZvwpi0x3XEPU717/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-55",
        "driveId": "1FZpi6oCVMrRwC7CuOpa98-zafVdn56Ag",
        "fileName": "1769994500836.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/55_1769994500836.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1FZpi6oCVMrRwC7CuOpa98-zafVdn56Ag",
        "driveUrl": "https://drive.google.com/file/d/1FZpi6oCVMrRwC7CuOpa98-zafVdn56Ag/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-54",
        "driveId": "1kdrQT7ljRaiIF1hmUZzfbCLF2F6dZQFG",
        "fileName": "1769386822090.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/54_1769386822090.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1kdrQT7ljRaiIF1hmUZzfbCLF2F6dZQFG",
        "driveUrl": "https://drive.google.com/file/d/1kdrQT7ljRaiIF1hmUZzfbCLF2F6dZQFG/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-53",
        "driveId": "1n2X6R9SmUURZL1RAAcBgztXn3QRYjePI",
        "fileName": "1769386815272.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/53_1769386815272.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1n2X6R9SmUURZL1RAAcBgztXn3QRYjePI",
        "driveUrl": "https://drive.google.com/file/d/1n2X6R9SmUURZL1RAAcBgztXn3QRYjePI/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-52",
        "driveId": "19RQxU3c_xGHjQMZ5STAxVf3jyKQGhDhx",
        "fileName": "1763337819162.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/52_1763337819162.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/19RQxU3c_xGHjQMZ5STAxVf3jyKQGhDhx",
        "driveUrl": "https://drive.google.com/file/d/19RQxU3c_xGHjQMZ5STAxVf3jyKQGhDhx/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-51",
        "driveId": "1bncoarerOSacWtAg8_u5AYp-UdpRWSHL",
        "fileName": "1762734754360.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/51_1762734754360.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1bncoarerOSacWtAg8_u5AYp-UdpRWSHL",
        "driveUrl": "https://drive.google.com/file/d/1bncoarerOSacWtAg8_u5AYp-UdpRWSHL/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-50",
        "driveId": "1fvzwku2mv9EMDxxn-ZbOjKhqdnOWrhVT",
        "fileName": "1762306042483.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/50_1762306042483.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1fvzwku2mv9EMDxxn-ZbOjKhqdnOWrhVT",
        "driveUrl": "https://drive.google.com/file/d/1fvzwku2mv9EMDxxn-ZbOjKhqdnOWrhVT/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-49",
        "driveId": "1ls7lnuMjmxABh-09z7rDSESDVgfqwSDY",
        "fileName": "1762168052428.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/49_1762168052428.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1ls7lnuMjmxABh-09z7rDSESDVgfqwSDY",
        "driveUrl": "https://drive.google.com/file/d/1ls7lnuMjmxABh-09z7rDSESDVgfqwSDY/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-48",
        "driveId": "1pFwLtNTLEecIyTZOJQSfp6PVU3fdmodL",
        "fileName": "1762168051628.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/48_1762168051628.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1pFwLtNTLEecIyTZOJQSfp6PVU3fdmodL",
        "driveUrl": "https://drive.google.com/file/d/1pFwLtNTLEecIyTZOJQSfp6PVU3fdmodL/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-47",
        "driveId": "1gRoI_Epjtyv1OXtqXtVog9w-tGL72tz5",
        "fileName": "1762168050527.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/47_1762168050527.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1gRoI_Epjtyv1OXtqXtVog9w-tGL72tz5",
        "driveUrl": "https://drive.google.com/file/d/1gRoI_Epjtyv1OXtqXtVog9w-tGL72tz5/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-46",
        "driveId": "120o0jLFD67GVbRFHrYPxqMRlK639qPny",
        "fileName": "1761613945406.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/46_1761613945406.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/120o0jLFD67GVbRFHrYPxqMRlK639qPny",
        "driveUrl": "https://drive.google.com/file/d/120o0jLFD67GVbRFHrYPxqMRlK639qPny/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-45",
        "driveId": "1oi_m8rGWN7EfWfnnO_fR04gnnkk0bb1B",
        "fileName": "1761613944720.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/45_1761613944720.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1oi_m8rGWN7EfWfnnO_fR04gnnkk0bb1B",
        "driveUrl": "https://drive.google.com/file/d/1oi_m8rGWN7EfWfnnO_fR04gnnkk0bb1B/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-44",
        "driveId": "1pPjcZYitHGp29rlgIalAqE0LAR_STaKg",
        "fileName": "1761613942278.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/44_1761613942278.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1pPjcZYitHGp29rlgIalAqE0LAR_STaKg",
        "driveUrl": "https://drive.google.com/file/d/1pPjcZYitHGp29rlgIalAqE0LAR_STaKg/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-43",
        "driveId": "1wPJ2rv-OvK_9UjGqoAJB8eH2Zr_NfZta",
        "fileName": "1761529203463.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/43_1761529203463.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1wPJ2rv-OvK_9UjGqoAJB8eH2Zr_NfZta",
        "driveUrl": "https://drive.google.com/file/d/1wPJ2rv-OvK_9UjGqoAJB8eH2Zr_NfZta/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-42",
        "driveId": "1rpJu5LxsI8YMMjNRZC_622cr499IV9x-",
        "fileName": "1761050401089.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/42_1761050401089.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1rpJu5LxsI8YMMjNRZC_622cr499IV9x-",
        "driveUrl": "https://drive.google.com/file/d/1rpJu5LxsI8YMMjNRZC_622cr499IV9x-/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-41",
        "driveId": "10ukuQWMNaLLjKS97BHBnGp5azUe6yt43",
        "fileName": "1760809056453.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/41_1760809056453.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/10ukuQWMNaLLjKS97BHBnGp5azUe6yt43",
        "driveUrl": "https://drive.google.com/file/d/10ukuQWMNaLLjKS97BHBnGp5azUe6yt43/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-40",
        "driveId": "1OM8-KYy_MYufwhrXTqmM9i_q6tysbHFC",
        "fileName": "1760809045041.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/40_1760809045041.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1OM8-KYy_MYufwhrXTqmM9i_q6tysbHFC",
        "driveUrl": "https://drive.google.com/file/d/1OM8-KYy_MYufwhrXTqmM9i_q6tysbHFC/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-39",
        "driveId": "18n4MrO8QGBSngiPy6TIVs8c7EiJYOff4",
        "fileName": "1760809044657.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/39_1760809044657.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/18n4MrO8QGBSngiPy6TIVs8c7EiJYOff4",
        "driveUrl": "https://drive.google.com/file/d/18n4MrO8QGBSngiPy6TIVs8c7EiJYOff4/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-38",
        "driveId": "1AzE3SchgkZVFI8MOu4p3aJdoRxmOe5pC",
        "fileName": "1760809043793.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/38_1760809043793.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1AzE3SchgkZVFI8MOu4p3aJdoRxmOe5pC",
        "driveUrl": "https://drive.google.com/file/d/1AzE3SchgkZVFI8MOu4p3aJdoRxmOe5pC/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-37",
        "driveId": "1OOmu0M4gB1YpU8jX1D3F65lfX26f8LCQ",
        "fileName": "1760396686337.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/37_1760396686337.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1OOmu0M4gB1YpU8jX1D3F65lfX26f8LCQ",
        "driveUrl": "https://drive.google.com/file/d/1OOmu0M4gB1YpU8jX1D3F65lfX26f8LCQ/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-36",
        "driveId": "1SfjBgEpkkMZ3T8ZRkAXN71ZIc5qqmtpI",
        "fileName": "1760396686266.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/36_1760396686266.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1SfjBgEpkkMZ3T8ZRkAXN71ZIc5qqmtpI",
        "driveUrl": "https://drive.google.com/file/d/1SfjBgEpkkMZ3T8ZRkAXN71ZIc5qqmtpI/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-35",
        "driveId": "1qhfvppUeAYIJ7NoOUZpsv_oNFJwbGYs9",
        "fileName": "1760396686185.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/35_1760396686185.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1qhfvppUeAYIJ7NoOUZpsv_oNFJwbGYs9",
        "driveUrl": "https://drive.google.com/file/d/1qhfvppUeAYIJ7NoOUZpsv_oNFJwbGYs9/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-34",
        "driveId": "102CgVXTTp-tZXOgX2uZoEOTxhcs0TvgE",
        "fileName": "1760360509528.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/34_1760360509528.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/102CgVXTTp-tZXOgX2uZoEOTxhcs0TvgE",
        "driveUrl": "https://drive.google.com/file/d/102CgVXTTp-tZXOgX2uZoEOTxhcs0TvgE/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-33",
        "driveId": "16nWdQVJ2g-FRqmEvNO_R8BiLs_fSM73U",
        "fileName": "1760360508802.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/33_1760360508802.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/16nWdQVJ2g-FRqmEvNO_R8BiLs_fSM73U",
        "driveUrl": "https://drive.google.com/file/d/16nWdQVJ2g-FRqmEvNO_R8BiLs_fSM73U/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-32",
        "driveId": "1JgPKhK6w4g5H6Xla-pjEyL1MkwNimIMA",
        "fileName": "1759712132397.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/32_1759712132397.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1JgPKhK6w4g5H6Xla-pjEyL1MkwNimIMA",
        "driveUrl": "https://drive.google.com/file/d/1JgPKhK6w4g5H6Xla-pjEyL1MkwNimIMA/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-31",
        "driveId": "111y0zt8xbvle-9pflzj1U3CH4TiIfi-2",
        "fileName": "1759712131987.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/31_1759712131987.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/111y0zt8xbvle-9pflzj1U3CH4TiIfi-2",
        "driveUrl": "https://drive.google.com/file/d/111y0zt8xbvle-9pflzj1U3CH4TiIfi-2/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-30",
        "driveId": "1SgeCFIVRrKWtPmIh84UUJD9w_e1MSdWX",
        "fileName": "1759712131502.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/30_1759712131502.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1SgeCFIVRrKWtPmIh84UUJD9w_e1MSdWX",
        "driveUrl": "https://drive.google.com/file/d/1SgeCFIVRrKWtPmIh84UUJD9w_e1MSdWX/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-29",
        "driveId": "16OO7XqqeBoCC1G0bzMQRlmrtB2eNVlUu",
        "fileName": "1759218871088.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/29_1759218871088.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/16OO7XqqeBoCC1G0bzMQRlmrtB2eNVlUu",
        "driveUrl": "https://drive.google.com/file/d/16OO7XqqeBoCC1G0bzMQRlmrtB2eNVlUu/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-28",
        "driveId": "1NtJ5plfRrDcOx4z3lqTJDHI-inZ_k32R",
        "fileName": "1759218870614.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/28_1759218870614.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1NtJ5plfRrDcOx4z3lqTJDHI-inZ_k32R",
        "driveUrl": "https://drive.google.com/file/d/1NtJ5plfRrDcOx4z3lqTJDHI-inZ_k32R/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-27",
        "driveId": "1FJl3Z349ubVTBB5YlnwbOVBJSyC6nQ6E",
        "fileName": "1759107439898.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/27_1759107439898.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1FJl3Z349ubVTBB5YlnwbOVBJSyC6nQ6E",
        "driveUrl": "https://drive.google.com/file/d/1FJl3Z349ubVTBB5YlnwbOVBJSyC6nQ6E/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-26",
        "driveId": "1Ty4dZKttX4tHg72G6LhW8Vy1_2IKDrhJ",
        "fileName": "1759107439381.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/26_1759107439381.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Ty4dZKttX4tHg72G6LhW8Vy1_2IKDrhJ",
        "driveUrl": "https://drive.google.com/file/d/1Ty4dZKttX4tHg72G6LhW8Vy1_2IKDrhJ/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-25",
        "driveId": "1-R_nxBLvxMDa2ooOoLlDNIRSUo1kRjCI",
        "fileName": "1759107438910.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/25_1759107438910.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1-R_nxBLvxMDa2ooOoLlDNIRSUo1kRjCI",
        "driveUrl": "https://drive.google.com/file/d/1-R_nxBLvxMDa2ooOoLlDNIRSUo1kRjCI/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-24",
        "driveId": "10ohKPfWKqUZjqTgetl2VE21XU1b2z_mk",
        "fileName": "1759107438413.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/24_1759107438413.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/10ohKPfWKqUZjqTgetl2VE21XU1b2z_mk",
        "driveUrl": "https://drive.google.com/file/d/10ohKPfWKqUZjqTgetl2VE21XU1b2z_mk/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-23",
        "driveId": "1GZL57gRBYrhRXtqEC8PLvRYXf_MxComK",
        "fileName": "1759107437790.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/23_1759107437790.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1GZL57gRBYrhRXtqEC8PLvRYXf_MxComK",
        "driveUrl": "https://drive.google.com/file/d/1GZL57gRBYrhRXtqEC8PLvRYXf_MxComK/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-22",
        "driveId": "1KKHYo5Xa5qVOKzweRzF2xrlomnyNcdFZ",
        "fileName": "1758500571601.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/22_1758500571601.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1KKHYo5Xa5qVOKzweRzF2xrlomnyNcdFZ",
        "driveUrl": "https://drive.google.com/file/d/1KKHYo5Xa5qVOKzweRzF2xrlomnyNcdFZ/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-21",
        "driveId": "1vC9tWdV5mCyb0zIY4yArskizlmo88fcS",
        "fileName": "1758500570288.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/21_1758500570288.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1vC9tWdV5mCyb0zIY4yArskizlmo88fcS",
        "driveUrl": "https://drive.google.com/file/d/1vC9tWdV5mCyb0zIY4yArskizlmo88fcS/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-20",
        "driveId": "1rDxfP4QeiirjTHv-e8l77wJ8-TqpEIbg",
        "fileName": "1758500568955.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/20_1758500568955.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1rDxfP4QeiirjTHv-e8l77wJ8-TqpEIbg",
        "driveUrl": "https://drive.google.com/file/d/1rDxfP4QeiirjTHv-e8l77wJ8-TqpEIbg/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-19",
        "driveId": "1l0q7mX0mxO3aDMLSOq4jlYpuJajtipIU",
        "fileName": "1758500560151.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/19_1758500560151.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1l0q7mX0mxO3aDMLSOq4jlYpuJajtipIU",
        "driveUrl": "https://drive.google.com/file/d/1l0q7mX0mxO3aDMLSOq4jlYpuJajtipIU/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-18",
        "driveId": "1tBFALK_pF3UdstXIdfY7fm6MkZsDQDOL",
        "fileName": "1758500557720.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/18_1758500557720.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1tBFALK_pF3UdstXIdfY7fm6MkZsDQDOL",
        "driveUrl": "https://drive.google.com/file/d/1tBFALK_pF3UdstXIdfY7fm6MkZsDQDOL/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-17",
        "driveId": "1uZsvjO0bkeyDwPTeChRPqTmbzfFbAifx",
        "fileName": "1757898959926.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/17_1757898959926.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1uZsvjO0bkeyDwPTeChRPqTmbzfFbAifx",
        "driveUrl": "https://drive.google.com/file/d/1uZsvjO0bkeyDwPTeChRPqTmbzfFbAifx/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-16",
        "driveId": "1YoJ8WsShsqhFJr528-tBzKAzzYpikZxb",
        "fileName": "1757898959335.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/16_1757898959335.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1YoJ8WsShsqhFJr528-tBzKAzzYpikZxb",
        "driveUrl": "https://drive.google.com/file/d/1YoJ8WsShsqhFJr528-tBzKAzzYpikZxb/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-15",
        "driveId": "1Yk_Qn4HiP8ImNMgFo6zK1hIsYeQc_J6J",
        "fileName": "1757898958750.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/15_1757898958750.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Yk_Qn4HiP8ImNMgFo6zK1hIsYeQc_J6J",
        "driveUrl": "https://drive.google.com/file/d/1Yk_Qn4HiP8ImNMgFo6zK1hIsYeQc_J6J/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-14",
        "driveId": "1Vumx6Qg0lmqW0X0o3l0c4WwKmnrSG-AT",
        "fileName": "1757898958252.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/14_1757898958252.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1Vumx6Qg0lmqW0X0o3l0c4WwKmnrSG-AT",
        "driveUrl": "https://drive.google.com/file/d/1Vumx6Qg0lmqW0X0o3l0c4WwKmnrSG-AT/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-13",
        "driveId": "1oD6t6lPxALZ9T4-qh8YYCVqD6hIPrypb",
        "fileName": "1757898957579.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/13_1757898957579.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1oD6t6lPxALZ9T4-qh8YYCVqD6hIPrypb",
        "driveUrl": "https://drive.google.com/file/d/1oD6t6lPxALZ9T4-qh8YYCVqD6hIPrypb/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-12",
        "driveId": "1safeZe0rcP5Bg3gWOOwT-6Jsywyi3F5W",
        "fileName": "1751846889197.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/12_1751846889197.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1safeZe0rcP5Bg3gWOOwT-6Jsywyi3F5W",
        "driveUrl": "https://drive.google.com/file/d/1safeZe0rcP5Bg3gWOOwT-6Jsywyi3F5W/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-11",
        "driveId": "1qIxjYKZY9LQqitkWqDDUeA0MycJEGH3o",
        "fileName": "1751846887917.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/11_1751846887917.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1qIxjYKZY9LQqitkWqDDUeA0MycJEGH3o",
        "driveUrl": "https://drive.google.com/file/d/1qIxjYKZY9LQqitkWqDDUeA0MycJEGH3o/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-10",
        "driveId": "1lzdEDGYSlA92QsUuSnA2fco7ZpefXM1p",
        "fileName": "1751846886384.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/10_1751846886384.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1lzdEDGYSlA92QsUuSnA2fco7ZpefXM1p",
        "driveUrl": "https://drive.google.com/file/d/1lzdEDGYSlA92QsUuSnA2fco7ZpefXM1p/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-9",
        "driveId": "1vf6s8CtJxfa0IUGHmSWppMK0AZ9SulkP",
        "fileName": "1751242740627.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/09_1751242740627.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1vf6s8CtJxfa0IUGHmSWppMK0AZ9SulkP",
        "driveUrl": "https://drive.google.com/file/d/1vf6s8CtJxfa0IUGHmSWppMK0AZ9SulkP/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-8",
        "driveId": "173UZkYBeafhptrkF-Q9X_lQV_Pmqd7kD",
        "fileName": "1734670539041.jpg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/08_1734670539041.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/173UZkYBeafhptrkF-Q9X_lQV_Pmqd7kD",
        "driveUrl": "https://drive.google.com/file/d/173UZkYBeafhptrkF-Q9X_lQV_Pmqd7kD/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-7",
        "driveId": "1exMqCN4IPutLetaRKvNsvOgAKmXY4Aq2",
        "fileName": "87944000_3060932550681668_1512428555252793344_n.jpeg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/07_87944000_3060932550681668_1512428555252793344_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1exMqCN4IPutLetaRKvNsvOgAKmXY4Aq2",
        "driveUrl": "https://drive.google.com/file/d/1exMqCN4IPutLetaRKvNsvOgAKmXY4Aq2/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-6",
        "driveId": "1suL0MonyzJ30xf_4C7OmMRPCVnW0nWZF",
        "fileName": "87937080_3060931954015061_886151813017894912_n.jpeg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/06_87937080_3060931954015061_886151813017894912_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1suL0MonyzJ30xf_4C7OmMRPCVnW0nWZF",
        "driveUrl": "https://drive.google.com/file/d/1suL0MonyzJ30xf_4C7OmMRPCVnW0nWZF/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-5",
        "driveId": "122QpUT0P7SIswie_HEiN7j28jk34LPBM",
        "fileName": "87936971_3060932817348308_8396909845365653504_n.jpeg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/05_87936971_3060932817348308_8396909845365653504_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/122QpUT0P7SIswie_HEiN7j28jk34LPBM",
        "driveUrl": "https://drive.google.com/file/d/122QpUT0P7SIswie_HEiN7j28jk34LPBM/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-4",
        "driveId": "1xdJPGRBgF_n2jN-uh7ilCxEVsHQVKCn1",
        "fileName": "87935448_3060932367348353_4577639116887293952_n.jpeg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/04_87935448_3060932367348353_4577639116887293952_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1xdJPGRBgF_n2jN-uh7ilCxEVsHQVKCn1",
        "driveUrl": "https://drive.google.com/file/d/1xdJPGRBgF_n2jN-uh7ilCxEVsHQVKCn1/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-3",
        "driveId": "1B9Kc8RMU-I0xSYFv3uDSBX6tzeUUgCf1",
        "fileName": "87333598_3060932090681714_5170011726589984768_n.jpeg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/03_87333598_3060932090681714_5170011726589984768_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1B9Kc8RMU-I0xSYFv3uDSBX6tzeUUgCf1",
        "driveUrl": "https://drive.google.com/file/d/1B9Kc8RMU-I0xSYFv3uDSBX6tzeUUgCf1/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-2",
        "driveId": "1HcfR1SROUwbF5EHrI_RM08w74xvVpcvY",
        "fileName": "87296573_3060932307348359_1117650442898112512_n.jpeg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/02_87296573_3060932307348359_1117650442898112512_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1HcfR1SROUwbF5EHrI_RM08w74xvVpcvY",
        "driveUrl": "https://drive.google.com/file/d/1HcfR1SROUwbF5EHrI_RM08w74xvVpcvY/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
      },
      {
        "id": "ads-products-1",
        "driveId": "1rwJrIOFNpDEAY68kzpFnmxhnEnu2gVlq",
        "fileName": "87273508_3060932234015033_9118441368723652608_n.jpeg",
        "image": "/portfolio_all/ภาพ_Ads_สินค้า/01_87273508_3060932234015033_9118441368723652608_n.jpeg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1rwJrIOFNpDEAY68kzpFnmxhnEnu2gVlq",
        "driveUrl": "https://drive.google.com/file/d/1rwJrIOFNpDEAY68kzpFnmxhnEnu2gVlq/view?usp=sharing",
        "albumId": "ads-products",
        "albumName": "ภาพ Ads สินค้า"
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
        "id": "infographic-3",
        "driveId": "13X8-Mf71mtVnE-Z8Lb4I1RurpOjmRKw4",
        "fileName": "2.3.jpg",
        "image": "/portfolio_all/Infographic/03_2.3.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/13X8-Mf71mtVnE-Z8Lb4I1RurpOjmRKw4",
        "driveUrl": "https://drive.google.com/file/d/13X8-Mf71mtVnE-Z8Lb4I1RurpOjmRKw4/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-4",
        "driveId": "1YFvjPed9qqmCgPDps13FTklElVoJlCop",
        "fileName": "2.4.jpg",
        "image": "/portfolio_all/Infographic/04_2.4.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1YFvjPed9qqmCgPDps13FTklElVoJlCop",
        "driveUrl": "https://drive.google.com/file/d/1YFvjPed9qqmCgPDps13FTklElVoJlCop/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-5",
        "driveId": "11WDf3C2NvyXJRHmZGPXqyy1rGSqDOVJR",
        "fileName": "2.5.jpg",
        "image": "/portfolio_all/Infographic/05_2.5.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/11WDf3C2NvyXJRHmZGPXqyy1rGSqDOVJR",
        "driveUrl": "https://drive.google.com/file/d/11WDf3C2NvyXJRHmZGPXqyy1rGSqDOVJR/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-6",
        "driveId": "1g9F6ISsWvOuwvMAYrg3RoDjNGhqf9vnX",
        "fileName": "14.jpg",
        "image": "/portfolio_all/Infographic/06_14.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1g9F6ISsWvOuwvMAYrg3RoDjNGhqf9vnX",
        "driveUrl": "https://drive.google.com/file/d/1g9F6ISsWvOuwvMAYrg3RoDjNGhqf9vnX/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-7",
        "driveId": "1GhVGFRyMAwoDCOJ8lRwvro2N6vWd4jYs",
        "fileName": "15.jpg",
        "image": "/portfolio_all/Infographic/07_15.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1GhVGFRyMAwoDCOJ8lRwvro2N6vWd4jYs",
        "driveUrl": "https://drive.google.com/file/d/1GhVGFRyMAwoDCOJ8lRwvro2N6vWd4jYs/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-8",
        "driveId": "171xZLOz37CRHhlR3Er-iFxFzYE6yOsj0",
        "fileName": "16.jpg",
        "image": "/portfolio_all/Infographic/08_16.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/171xZLOz37CRHhlR3Er-iFxFzYE6yOsj0",
        "driveUrl": "https://drive.google.com/file/d/171xZLOz37CRHhlR3Er-iFxFzYE6yOsj0/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-9",
        "driveId": "1_UdvTGUyzw3kPYZ0jsk2WUI9tWNqnHtQ",
        "fileName": "54. Isometric Tablet Mockup.jpg",
        "image": "/portfolio_all/Infographic/09_54. Isometric Tablet Mockup.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1_UdvTGUyzw3kPYZ0jsk2WUI9tWNqnHtQ",
        "driveUrl": "https://drive.google.com/file/d/1_UdvTGUyzw3kPYZ0jsk2WUI9tWNqnHtQ/view?usp=sharing",
        "albumId": "infographic",
        "albumName": "Infographic"
      },
      {
        "id": "infographic-10",
        "driveId": "1tg2SAYznkjZWPzNOQ5hvECoHQivwbHe-",
        "fileName": "Safety Contact-01.jpg",
        "image": "/portfolio_all/Infographic/10_Safety Contact-01.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1tg2SAYznkjZWPzNOQ5hvECoHQivwbHe-",
        "driveUrl": "https://drive.google.com/file/d/1tg2SAYznkjZWPzNOQ5hvECoHQivwbHe-/view?usp=sharing",
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
        "driveId": "1do7p2RMlVlBDJSSIX-ABNQSTMdMHdJqU",
        "fileName": "2.2 Infographic 3 x Mock 1x3.jpg",
        "image": "/portfolio_all/Infographic/02_2.2 Infographic 3 x Mock 1x3.jpg",
        "cdnFallback": "https://lh3.googleusercontent.com/d/1do7p2RMlVlBDJSSIX-ABNQSTMdMHdJqU",
        "driveUrl": "https://drive.google.com/file/d/1do7p2RMlVlBDJSSIX-ABNQSTMdMHdJqU/view?usp=sharing",
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
