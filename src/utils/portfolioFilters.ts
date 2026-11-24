import type { PortfolioAlbum } from '../data/portfolioAlbums';

export type PortfolioCategoryId = 'ads' | 'infographics' | 'print' | 'branding';

export interface PortfolioCategoryDefinition {
  id: PortfolioCategoryId;
  labelTh: string;
  labelEn: string;
  albumIds: readonly string[];
}

export const PORTFOLIO_CATEGORIES: readonly PortfolioCategoryDefinition[] = [
  {
    id: 'ads',
    labelTh: 'งานโฆษณา Ads',
    labelEn: 'Ads',
    albumIds: ['ads-products', 'promotion', 'ads-fashion', 'mutelu'],
  },
  {
    id: 'infographics',
    labelTh: 'อินโฟกราฟิก',
    labelEn: 'Infographics',
    albumIds: ['infographic'],
  },
  {
    id: 'print',
    labelTh: 'สื่อสิ่งพิมพ์',
    labelEn: 'Print',
    albumIds: [
      'poster-brochure',
      'leaflet-brochure',
      'catalog-menu',
      'rollup-billboard',
      'user-guide',
      'book',
    ],
  },
  {
    id: 'branding',
    labelTh: 'แบรนด์บุคคล',
    labelEn: 'Branding',
    albumIds: ['personal-brand'],
  },
] as const;

const ALBUM_TO_CATEGORY = new Map<string, PortfolioCategoryId>();
for (const category of PORTFOLIO_CATEGORIES) {
  for (const albumId of category.albumIds) {
    ALBUM_TO_CATEGORY.set(albumId, category.id);
  }
}

export function getAlbumCategory(albumId: string): PortfolioCategoryId | null {
  return ALBUM_TO_CATEGORY.get(albumId) ?? null;
}

/**
 * Toggles a portfolio category in the active filter list.
 * An empty list (`[]`) represents "All" categories visible.
 * Selecting all individual categories or unselecting the last active category
 * normalizes back to `[]` ("All") so the portfolio grid is never left empty.
 */
export function toggleCategoryFilter(
  activeCategories: readonly PortfolioCategoryId[],
  target: PortfolioCategoryId | 'all',
): PortfolioCategoryId[] {
  if (target === 'all') {
    return [];
  }

  const next = activeCategories.includes(target)
    ? activeCategories.filter((id) => id !== target)
    : [...activeCategories, target];

  if (next.length === 0 || next.length === PORTFOLIO_CATEGORIES.length) {
    return [];
  }

  return next;
}

export function getAlbumsForCategories(
  albums: readonly PortfolioAlbum[],
  activeCategories: readonly PortfolioCategoryId[],
): PortfolioAlbum[] {
  if (activeCategories.length === 0) {
    return [...albums];
  }

  const activeSet = new Set<PortfolioCategoryId>(activeCategories);
  return albums.filter((album) => {
    const category = getAlbumCategory(album.id);
    return category !== null && activeSet.has(category);
  });
}

export function filterPortfolioAlbums(
  albums: readonly PortfolioAlbum[],
  activeCategories: readonly PortfolioCategoryId[],
  selectedAlbumId: string = 'all',
): PortfolioAlbum[] {
  const categoryMatched = getAlbumsForCategories(albums, activeCategories);
  if (selectedAlbumId === 'all') {
    return categoryMatched;
  }

  const narrowed = categoryMatched.filter((album) => album.id === selectedAlbumId);
  return narrowed.length > 0 ? narrowed : categoryMatched;
}
