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

test('poster-brochure album starts from original item 7 onward followed by items 1 to 6', () => {
  const posterAlbum = PORTFOLIO_ALBUMS.find((album) => album.id === 'poster-brochure');
  assert.ok(posterAlbum, 'poster-brochure album must exist');
  assert.equal(posterAlbum.items.length, 34);

  const uniqueIds = new Set(posterAlbum.items.map((item) => item.id));
  assert.equal(uniqueIds.size, 34);

  // Items 7..34 appear first (indices 0..27)
  assert.equal(posterAlbum.items[0].id, 'poster-brochure-7');
  assert.equal(posterAlbum.items[0].fileName, '1.23 (1).jpg');
  assert.equal(posterAlbum.items[1].id, 'poster-brochure-8');
  assert.equal(posterAlbum.items[27].id, 'poster-brochure-34');

  // Items 1..6 appear at the end (indices 28..33)
  assert.equal(posterAlbum.items[28].id, 'poster-brochure-1');
  assert.equal(posterAlbum.items[28].fileName, '1.5.jpg');
  assert.equal(posterAlbum.items[33].id, 'poster-brochure-6');
  assert.equal(posterAlbum.items[33].fileName, '1.21.jpg');

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

test('infographic album starts from original item 3 onward followed by items 1 to 2', () => {
  const infoAlbum = PORTFOLIO_ALBUMS.find((album) => album.id === 'infographic');
  assert.ok(infoAlbum, 'infographic album must exist');
  assert.equal(infoAlbum.items.length, 10);

  const uniqueIds = new Set(infoAlbum.items.map((item) => item.id));
  assert.equal(uniqueIds.size, 10);

  // Items 3..10 appear first (indices 0..7)
  assert.equal(infoAlbum.items[0].id, 'infographic-3');
  assert.equal(infoAlbum.items[0].fileName, '2.3.jpg');
  assert.equal(infoAlbum.items[1].id, 'infographic-4');
  assert.equal(infoAlbum.items[7].id, 'infographic-10');
  assert.equal(infoAlbum.items[7].fileName, 'Safety Contact-01.jpg');

  // Items 1..2 appear at the end (indices 8..9)
  assert.equal(infoAlbum.items[8].id, 'infographic-1');
  assert.equal(infoAlbum.items[8].fileName, '1.4.jpg');
  assert.equal(infoAlbum.items[9].id, 'infographic-2');
  assert.equal(infoAlbum.items[9].fileName, '2.2 Infographic 3 x Mock 1x3.jpg');

  // Verify every local asset exists on disk
  for (const item of infoAlbum.items) {
    const relativePath = item.image.replace(/^\//, '');
    const fullPath = path.resolve(process.cwd(), 'public', relativePath);
    assert.ok(fs.existsSync(fullPath), `Missing local image file: ${relativePath}`);
    const stat = fs.statSync(fullPath);
    assert.ok(stat.size > 1000, `Image file too small/corrupt: ${relativePath}`);
  }
});
