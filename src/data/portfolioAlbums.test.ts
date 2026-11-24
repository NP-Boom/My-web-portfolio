import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { PORTFOLIO_ALBUMS } from './portfolioAlbums';

test('ads-products album includes all 72 artworks in reversed Google Drive link order (last image first)', () => {
  const adsAlbum = PORTFOLIO_ALBUMS.find((album) => album.id === 'ads-products');
  assert.ok(adsAlbum, 'ads-products album must exist');
  assert.equal(adsAlbum.items.length, 72);

  // Verify unique IDs and exact reversed order (72 down to 1)
  const uniqueIds = new Set(adsAlbum.items.map((item) => item.id));
  assert.equal(uniqueIds.size, 72);
  assert.equal(adsAlbum.items[0].id, 'ads-products-72');
  assert.equal(adsAlbum.items[0].fileName, 'ผลงานออกแบบ_Page_12.jpg');
  assert.equal(adsAlbum.items[10].fileName, 'Screenshot 2567-07-10 at 12.41.16.png');
  assert.equal(adsAlbum.items[21].fileName, '1762734754360.jpg');
  assert.equal(adsAlbum.items[22].fileName, '1762306042483.jpg');
  assert.equal(adsAlbum.items[64].fileName, '1734670539041.jpg');
  assert.equal(adsAlbum.items[71].id, 'ads-products-1');
  assert.equal(adsAlbum.items[71].fileName, '87273508_3060932234015033_9118441368723652608_n.jpeg');

  // Verify every local asset exists on disk and is non-empty
  for (const item of adsAlbum.items) {
    const relativePath = item.image.replace(/^\//, '');
    const fullPath = path.resolve(process.cwd(), 'public', relativePath);
    assert.ok(fs.existsSync(fullPath), `Missing local image file: ${relativePath}`);
    const stat = fs.statSync(fullPath);
    assert.ok(stat.size > 1000, `Image file too small/corrupt: ${relativePath}`);
  }
});

test('poster-brochure album leads with the 3 newly added brochure mockups followed by items 7..34 and 1..6', () => {
  const posterAlbum = PORTFOLIO_ALBUMS.find((album) => album.id === 'poster-brochure');
  assert.ok(posterAlbum, 'poster-brochure album must exist');
  assert.equal(posterAlbum.items.length, 37);

  const uniqueIds = new Set(posterAlbum.items.map((item) => item.id));
  assert.equal(uniqueIds.size, 37);

  // 3 newly uploaded brochure mockups appear first (indices 0..2)
  assert.equal(posterAlbum.items[0].id, 'poster-brochure-35');
  assert.equal(posterAlbum.items[0].image, '/assets/aistudio/magnific_mock-up_s7tUgP6l8e_2ba98191.png');
  assert.equal(posterAlbum.items[1].id, 'poster-brochure-36');
  assert.equal(posterAlbum.items[1].image, '/assets/aistudio/magnific_mock-up_ovimtjZ829_f281a209.png');
  assert.equal(posterAlbum.items[2].id, 'poster-brochure-37');
  assert.equal(posterAlbum.items[2].image, '/assets/aistudio/magnific_mock-up_gOh77IsSXO_6b910187.png');

  // Existing items 7..34 follow (indices 3..30)
  assert.equal(posterAlbum.items[3].id, 'poster-brochure-7');
  assert.equal(posterAlbum.items[3].fileName, '1.23 (1).jpg');
  assert.equal(posterAlbum.items[4].id, 'poster-brochure-8');
  assert.equal(posterAlbum.items[30].id, 'poster-brochure-34');

  // Existing items 1..6 appear at the end (indices 31..36)
  assert.equal(posterAlbum.items[31].id, 'poster-brochure-1');
  assert.equal(posterAlbum.items[31].fileName, '1.5.jpg');
  assert.equal(posterAlbum.items[36].id, 'poster-brochure-6');
  assert.equal(posterAlbum.items[36].fileName, '1.21.jpg');

  // Verify every local asset exists on disk
  for (const item of posterAlbum.items) {
    const relativePath = item.image.replace(/^\//, '');
    const fullPath = path.resolve(process.cwd(), 'public', relativePath);
    assert.ok(fs.existsSync(fullPath), `Missing local image file: ${relativePath}`);
    const stat = fs.statSync(fullPath);
    assert.ok(stat.size > 1000, `Image file too small/corrupt: ${relativePath}`);
  }
});

test('leaflet-brochure album starts from original item 9 onward followed by items 1 to 8', () => {
  const leafletAlbum = PORTFOLIO_ALBUMS.find((album) => album.id === 'leaflet-brochure');
  assert.ok(leafletAlbum, 'leaflet-brochure album must exist');
  assert.equal(leafletAlbum.items.length, 14);

  const uniqueIds = new Set(leafletAlbum.items.map((item) => item.id));
  assert.equal(uniqueIds.size, 14);

  // Items 9..14 appear first (indices 0..5)
  assert.equal(leafletAlbum.items[0].id, 'leaflet-brochure-9');
  assert.equal(leafletAlbum.items[0].fileName, '48. PF8Y181.jpg');
  assert.equal(leafletAlbum.items[1].id, 'leaflet-brochure-10');
  assert.equal(leafletAlbum.items[5].id, 'leaflet-brochure-14');
  assert.equal(leafletAlbum.items[5].fileName, 'Portfolio-03 2.jpg');

  // Items 1..8 appear at the end (indices 6..13)
  assert.equal(leafletAlbum.items[6].id, 'leaflet-brochure-1');
  assert.equal(leafletAlbum.items[6].fileName, '1.9.jpg');
  assert.equal(leafletAlbum.items[13].id, 'leaflet-brochure-8');
  assert.equal(leafletAlbum.items[13].fileName, '45.jpg');

  // Verify every local asset exists on disk
  for (const item of leafletAlbum.items) {
    const relativePath = item.image.replace(/^\//, '');
    const fullPath = path.resolve(process.cwd(), 'public', relativePath);
    assert.ok(fs.existsSync(fullPath), `Missing local image file: ${relativePath}`);
    const stat = fs.statSync(fullPath);
    assert.ok(stat.size > 1000, `Image file too small/corrupt: ${relativePath}`);
  }
});

test('infographic album starts from item 5 onward followed by items 1 to 4 with all 30 local assets on disk', () => {
  const infoAlbum = PORTFOLIO_ALBUMS.find((album) => album.id === 'infographic');
  assert.ok(infoAlbum, 'infographic album must exist');
  assert.equal(infoAlbum.items.length, 30);

  const uniqueIds = new Set(infoAlbum.items.map((item) => item.id));
  assert.equal(uniqueIds.size, 30);

  // Items 5..30 appear first (indices 0..25)
  assert.equal(infoAlbum.items[0].id, 'infographic-5');
  assert.equal(infoAlbum.items[0].fileName, '2.4.jpg');
  assert.equal(infoAlbum.items[1].id, 'infographic-6');
  assert.equal(infoAlbum.items[1].fileName, '2.5.jpg');
  assert.equal(infoAlbum.items[25].id, 'infographic-30');
  assert.equal(infoAlbum.items[25].fileName, 'SendTo.jpeg');

  // Items 1..4 appear at the end (indices 26..29)
  assert.equal(infoAlbum.items[26].id, 'infographic-1');
  assert.equal(infoAlbum.items[26].fileName, '1.4.jpg');
  assert.equal(infoAlbum.items[29].id, 'infographic-4');
  assert.equal(infoAlbum.items[29].fileName, '2.3.jpg');

  // Verify every local asset exists on disk
  for (const item of infoAlbum.items) {
    const relativePath = item.image.replace(/^\//, '');
    const fullPath = path.resolve(process.cwd(), 'public', relativePath);
    assert.ok(fs.existsSync(fullPath), `Missing local image file: ${relativePath}`);
    const stat = fs.statSync(fullPath);
    assert.ok(stat.size > 1000, `Image file too small/corrupt: ${relativePath}`);
  }
});

test('catalog-menu album leads with the 2 newly added mockups followed by existing items 1..13', () => {
  const catalogAlbum = PORTFOLIO_ALBUMS.find((album) => album.id === 'catalog-menu');
  assert.ok(catalogAlbum, 'catalog-menu album must exist');
  assert.equal(catalogAlbum.items.length, 15);

  const uniqueIds = new Set(catalogAlbum.items.map((item) => item.id));
  assert.equal(uniqueIds.size, 15);

  // 2 newly uploaded mockups appear first (indices 0..1)
  assert.equal(catalogAlbum.items[0].id, 'catalog-menu-14');
  assert.equal(catalogAlbum.items[0].image, '/assets/aistudio/magnific_mock-up-proposal-book_EbWHWATuuO_d24b2849.png');
  assert.equal(catalogAlbum.items[1].id, 'catalog-menu-15');
  assert.equal(catalogAlbum.items[1].image, '/assets/aistudio/magnific_mock-up-brochure_lJmwfWegv9_31b2bf44.png');

  // Existing items 1..13 follow (indices 2..14)
  assert.equal(catalogAlbum.items[2].id, 'catalog-menu-1');
  assert.equal(catalogAlbum.items[2].fileName, '11.jpg');
  assert.equal(catalogAlbum.items[14].id, 'catalog-menu-13');

  // Verify every local asset exists on disk
  for (const item of catalogAlbum.items) {
    const relativePath = item.image.replace(/^\//, '');
    const fullPath = path.resolve(process.cwd(), 'public', relativePath);
    assert.ok(fs.existsSync(fullPath), `Missing local image file: ${relativePath}`);
    const stat = fs.statSync(fullPath);
    assert.ok(stat.size > 1000, `Image file too small/corrupt: ${relativePath}`);
  }
});

test('rollup-billboard album leads with the 2 newly added mockups followed by existing items 1..6', () => {
  const rollupAlbum = PORTFOLIO_ALBUMS.find((album) => album.id === 'rollup-billboard');
  assert.ok(rollupAlbum, 'rollup-billboard album must exist');
  assert.equal(rollupAlbum.items.length, 8);

  const uniqueIds = new Set(rollupAlbum.items.map((item) => item.id));
  assert.equal(uniqueIds.size, 8);

  // 2 newly uploaded mockups appear first (indices 0..1)
  assert.equal(rollupAlbum.items[0].id, 'rollup-billboard-7');
  assert.equal(rollupAlbum.items[0].image, '/assets/aistudio/magnific_mock-up-back-drop-299264-cm_8a3hRY9IrU_1d200d22.png');
  assert.equal(rollupAlbum.items[1].id, 'rollup-billboard-8');
  assert.equal(rollupAlbum.items[1].image, '/assets/aistudio/magnific_mock-up-poster-2_IfRvWoUtvE_25458d59.png');

  // Existing items 1..6 follow (indices 2..7)
  assert.equal(rollupAlbum.items[2].id, 'rollup-billboard-1');
  assert.equal(rollupAlbum.items[2].fileName, '1.01.jpg');
  assert.equal(rollupAlbum.items[7].id, 'rollup-billboard-6');

  // Verify newly added local assets exist on disk and existing items have valid CDN fallbacks
  for (const item of rollupAlbum.items) {
    if (item.image.startsWith('/assets/aistudio/')) {
      const relativePath = item.image.replace(/^\//, '');
      const fullPath = path.resolve(process.cwd(), 'public', relativePath);
      assert.ok(fs.existsSync(fullPath), `Missing local image file: ${relativePath}`);
      const stat = fs.statSync(fullPath);
      assert.ok(stat.size > 1000, `Image file too small/corrupt: ${relativePath}`);
    } else {
      assert.ok(item.cdnFallback.startsWith('https://'), `Expected valid cdnFallback for ${item.id}`);
    }
  }
});

test('promotion album places the new CapCut Secret banner at position 3 (index 2) among all 12 items', () => {
  const promoAlbum = PORTFOLIO_ALBUMS.find((album) => album.id === 'promotion');
  assert.ok(promoAlbum, 'promotion album must exist');
  assert.equal(promoAlbum.items.length, 12);

  const uniqueIds = new Set(promoAlbum.items.map((item) => item.id));
  assert.equal(uniqueIds.size, 12);

  // Position 1..2 remain existing top items
  assert.equal(promoAlbum.items[0].id, 'promotion-11');
  assert.equal(promoAlbum.items[1].id, 'promotion-10');

  // Position 3 (index 2) is the newly uploaded CapCut Secret promotion banner
  assert.equal(promoAlbum.items[2].id, 'promotion-12');
  assert.equal(promoAlbum.items[2].image, '/assets/aistudio/IMG_3948_cb03f40e.jpeg');

  // Position 4 onward continues existing order
  assert.equal(promoAlbum.items[3].id, 'promotion-9');
  assert.equal(promoAlbum.items[11].id, 'promotion-1');

  // Verify every local asset exists on disk
  for (const item of promoAlbum.items) {
    const relativePath = item.image.replace(/^\//, '');
    const fullPath = path.resolve(process.cwd(), 'public', relativePath);
    assert.ok(fs.existsSync(fullPath), `Missing local image file: ${relativePath}`);
    const stat = fs.statSync(fullPath);
    assert.ok(stat.size > 1000, `Image file too small/corrupt: ${relativePath}`);
  }
});

test('ads-fashion album appears immediately after promotion with exact Thai title and all 4 artworks', () => {
  const promoIndex = PORTFOLIO_ALBUMS.findIndex((album) => album.id === 'promotion');
  const fashionIndex = PORTFOLIO_ALBUMS.findIndex((album) => album.id === 'ads-fashion');
  assert.ok(promoIndex >= 0, 'promotion album must exist');
  assert.equal(fashionIndex, promoIndex + 1, 'ads-fashion must immediately follow promotion');

  const fashionAlbum = PORTFOLIO_ALBUMS[fashionIndex];
  assert.equal(fashionAlbum.titleTh, 'ภาพ Ads สินค้าแฟชัน');
  assert.equal(fashionAlbum.items.length, 4);

  const expectedImages = [
    '/assets/aistudio/SendTo_1_3d8c6c7f.jpeg',
    '/assets/aistudio/SendTo2_cfbbbc9c.jpeg',
    '/assets/aistudio/SendTo3_bf71bdf1.jpeg',
    '/assets/aistudio/SendTo4_a237e78c.jpeg',
  ];

  const uniqueIds = new Set(fashionAlbum.items.map((item) => item.id));
  assert.equal(uniqueIds.size, 4);
  assert.deepEqual(
    fashionAlbum.items.map((item) => item.image),
    expectedImages,
  );

  for (const item of fashionAlbum.items) {
    const relativePath = item.image.replace(/^\//, '');
    const fullPath = path.resolve(process.cwd(), 'public', relativePath);
    assert.ok(fs.existsSync(fullPath), `Missing local image file: ${relativePath}`);
    const stat = fs.statSync(fullPath);
    assert.ok(stat.size > 1000, `Image file too small/corrupt: ${relativePath}`);
  }
});
