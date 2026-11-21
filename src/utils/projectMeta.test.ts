import test from 'node:test';
import assert from 'node:assert/strict';
import { PORTFOLIO_ALBUMS } from '../data/portfolioAlbums';
import { getProjectDisplayMeta } from './projectMeta';

test('resolves explicit custom metadata for newly added Mutelu items in both TH and EN', () => {
  const muteluAlbum = PORTFOLIO_ALBUMS.find((a) => a.id === 'mutelu');
  assert.ok(muteluAlbum, 'mutelu album should exist');

  const newItem = muteluAlbum.items.find((i) => i.id === 'mutelu-new-1');
  assert.ok(newItem, 'mutelu-new-1 should exist');

  const thMeta = getProjectDisplayMeta(newItem, muteluAlbum, 'th');
  assert.equal(thMeta.title, 'เทวมนตรา — พิธีดึงจิตตรึงใจ');
  assert.ok(thMeta.description.length > 10);
  assert.equal(thMeta.tag, 'เทวมนตรา');

  const enMeta = getProjectDisplayMeta(newItem, muteluAlbum, 'en');
  assert.equal(enMeta.title, 'Thepmontra — Attraction Ritual Ad');
  assert.ok(enMeta.description.length > 10);
});

test('prefers explicit item fields over fallback metadata', () => {
  const album = PORTFOLIO_ALBUMS[0];
  const item = {
    ...album.items[0],
    titleTh: 'หัวข้อทดสอบ',
    titleEn: 'Test Custom Title',
    descriptionTh: 'คำอธิบายทดสอบ',
    descriptionEn: 'Test Custom Description',
    client: 'Test Client'
  };

  const thMeta = getProjectDisplayMeta(item, album, 'th');
  assert.equal(thMeta.title, 'หัวข้อทดสอบ');
  assert.equal(thMeta.description, 'คำอธิบายทดสอบ');
  assert.equal(thMeta.tag, 'Test Client');

  const enMeta = getProjectDisplayMeta(item, album, 'en');
  assert.equal(enMeta.title, 'Test Custom Title');
  assert.equal(enMeta.description, 'Test Custom Description');
});

test('resolves matched PORTFOLIO_ITEMS metadata by filename', () => {
  const promoAlbum = PORTFOLIO_ALBUMS.find((a) => a.id === 'promotion');
  assert.ok(promoAlbum, 'promotion album should exist');

  const bunditItem = promoAlbum.items.find((i) => i.fileName === '1743987834244.jpg');
  assert.ok(bunditItem, '1743987834244.jpg should exist in promotion album');

  const meta = getProjectDisplayMeta(bunditItem, promoAlbum, 'th');
  assert.equal(meta.title, 'Bundit Ungrangsee Course Announcement');
  assert.equal(meta.tag, 'อ.บัณฑิต อึ้งรังษี');
});

test('every item across all albums produces non-empty title, description, and tag in TH and EN without raw filenames', () => {
  for (const album of PORTFOLIO_ALBUMS) {
    for (const item of album.items) {
      for (const lang of ['th', 'en'] as const) {
        const meta = getProjectDisplayMeta(item, album, lang);
        assert.ok(meta.title.trim().length > 0, `Missing title for ${item.id} (${lang})`);
        assert.ok(meta.description.trim().length > 0, `Missing description for ${item.id} (${lang})`);
        assert.ok(meta.tag.trim().length > 0, `Missing tag for ${item.id} (${lang})`);
        assert.ok(!meta.title.includes('.jpg') && !meta.title.includes('.png'), `Raw filename leaked into title for ${item.id}`);
      }
    }
  }
});
