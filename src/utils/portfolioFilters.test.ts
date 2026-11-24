import test from 'node:test';
import assert from 'node:assert/strict';
import { PORTFOLIO_ALBUMS } from '../data/portfolioAlbums';
import {
  PORTFOLIO_CATEGORIES,
  filterPortfolioAlbums,
  getAlbumCategory,
  getAlbumsForCategories,
  toggleCategoryFilter,
} from './portfolioFilters';

test('every portfolio album maps cleanly to exactly one category', () => {
  const seenAlbumIds = new Set<string>();
  for (const cat of PORTFOLIO_CATEGORIES) {
    for (const albumId of cat.albumIds) {
      assert.equal(
        seenAlbumIds.has(albumId),
        false,
        `Duplicate album assignment: ${albumId}`,
      );
      seenAlbumIds.add(albumId);
    }
  }

  for (const album of PORTFOLIO_ALBUMS) {
    const mapped = getAlbumCategory(album.id);
    assert.ok(mapped !== null, `Album ${album.id} is missing a category mapping`);
  }

  assert.equal(seenAlbumIds.size, PORTFOLIO_ALBUMS.length);
});

test('toggleCategoryFilter supports single toggle, multi-toggle, and All normalization', () => {
  // Start from All ([]) -> select Ads
  const afterAds = toggleCategoryFilter([], 'ads');
  assert.deepEqual(afterAds, ['ads']);

  // Multi-toggle Infographics alongside Ads
  const afterInfo = toggleCategoryFilter(afterAds, 'infographics');
  assert.deepEqual(afterInfo, ['ads', 'infographics']);

  // Toggle Ads off -> leaves Infographics
  const onlyInfo = toggleCategoryFilter(afterInfo, 'ads');
  assert.deepEqual(onlyInfo, ['infographics']);

  // Toggle last remaining category off -> normalizes to All ([])
  const backToAll = toggleCategoryFilter(onlyInfo, 'infographics');
  assert.deepEqual(backToAll, []);

  // Clicking All clears any active categories
  assert.deepEqual(toggleCategoryFilter(['ads', 'print'], 'all'), []);

  // Selecting all 4 individual categories normalizes to All ([])
  const allSelected = toggleCategoryFilter(['ads', 'infographics', 'print'], 'branding');
  assert.deepEqual(allSelected, []);
});

test('filterPortfolioAlbums returns accurate albums for each category and combination', () => {
  assert.equal(filterPortfolioAlbums(PORTFOLIO_ALBUMS, []).length, PORTFOLIO_ALBUMS.length);

  const ads = filterPortfolioAlbums(PORTFOLIO_ALBUMS, ['ads']);
  assert.deepEqual(
    ads.map((a) => a.id),
    ['ads-products', 'promotion', 'ads-fashion', 'mutelu'],
  );

  const infographics = filterPortfolioAlbums(PORTFOLIO_ALBUMS, ['infographics']);
  assert.deepEqual(
    infographics.map((a) => a.id),
    ['infographic'],
  );

  const print = filterPortfolioAlbums(PORTFOLIO_ALBUMS, ['print']);
  assert.deepEqual(
    print.map((a) => a.id),
    [
      'poster-brochure',
      'leaflet-brochure',
      'catalog-menu',
      'rollup-billboard',
      'user-guide',
      'book',
    ],
  );

  const combined = filterPortfolioAlbums(PORTFOLIO_ALBUMS, ['ads', 'infographics']);
  assert.deepEqual(
    combined.map((a) => a.id),
    ['ads-products', 'promotion', 'ads-fashion', 'mutelu', 'infographic'],
  );
});

test('filterPortfolioAlbums respects sub-album narrowing and falls back cleanly', () => {
  const narrowed = filterPortfolioAlbums(PORTFOLIO_ALBUMS, ['ads'], 'promotion');
  assert.deepEqual(
    narrowed.map((a) => a.id),
    ['promotion'],
  );

  // If selectedAlbumId is outside activeCategories, fall back to activeCategories albums
  const fallback = filterPortfolioAlbums(PORTFOLIO_ALBUMS, ['print'], 'promotion');
  assert.equal(fallback.length, 6);
  assert.equal(getAlbumsForCategories(PORTFOLIO_ALBUMS, ['branding']).length, 1);
});
