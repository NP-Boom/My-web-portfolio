import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  X,
  Eye,
  ShieldAlert,
  ShieldCheck,
  Lock
} from 'lucide-react';
import {
  PORTFOLIO_ALBUMS,
  ALL_PORTFOLIO_ITEMS,
  PortfolioArtwork
} from '../data/portfolioAlbums';
import { getProjectFloatStyle } from '../utils/floatAnimation';
import {
  PORTFOLIO_CATEGORIES,
  PortfolioCategoryId,
  filterPortfolioAlbums,
  getAlbumsForCategories,
  toggleCategoryFilter
} from '../utils/portfolioFilters';

interface ProjectsProps {
  lang: 'th' | 'en';
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [activeCategories, setActiveCategories] = useState<PortfolioCategoryId[]>([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioArtwork | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showProtectedNotice, setShowProtectedNotice] = useState<boolean>(false);
  const [noticeMessage, setNoticeMessage] = useState<string>('');
  const noticeTimerRef = useRef<number | null>(null);

  const triggerProtectedNotice = (customMsg?: string) => {
    if (customMsg) {
      setNoticeMessage(customMsg);
    } else {
      setNoticeMessage(
        lang === 'th'
          ? 'สามารถพรีวิวรับชมได้เท่านั้น ไม่อนุญาตให้กดบันทึกหรือ Save ภาพ'
          : 'Preview only. Image saving and downloading is disabled.'
      );
    }
    setShowProtectedNotice(true);
    if (noticeTimerRef.current) {
      window.clearTimeout(noticeTimerRef.current);
    }
    noticeTimerRef.current = window.setTimeout(() => {
      setShowProtectedNotice(false);
    }, 3200);
  };

  // References for horizontal scrolling of each album slider
  const scrollContainers = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollAlbum = (albumId: string, direction: 'left' | 'right') => {
    const container = scrollContainers.current[albumId];
    if (container) {
      const scrollAmount = container.clientWidth * 0.75;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Albums available within the currently toggled high-level categories
  const categoryAlbums = getAlbumsForCategories(PORTFOLIO_ALBUMS, activeCategories);

  // Filtered albums displayed on the portfolio grid
  const displayedAlbums = filterPortfolioAlbums(
    PORTFOLIO_ALBUMS,
    activeCategories,
    selectedAlbumId
  );

  const visibleItems = displayedAlbums.flatMap((album) => album.items);

  const handleToggleCategory = (target: PortfolioCategoryId | 'all') => {
    const nextCategories = toggleCategoryFilter(activeCategories, target);
    setActiveCategories(nextCategories);
    if (selectedAlbumId !== 'all') {
      const nextAvailable = getAlbumsForCategories(PORTFOLIO_ALBUMS, nextCategories);
      if (!nextAvailable.some((album) => album.id === selectedAlbumId)) {
        setSelectedAlbumId('all');
      }
    }
  };

  // Keyboard navigation for lightbox & Anti-Save shortcuts prevention
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Intercept Save & Print shortcuts (Ctrl+S, Cmd+S, Ctrl+P, Cmd+P)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        triggerProtectedNotice(
          lang === 'th'
            ? 'ไม่อนุญาตให้กด Save หรือสั่งพิมพ์ภาพผลงาน (Preview Mode Only)'
            : 'Save and print shortcuts are disabled on this portfolio (Preview Only).'
        );
        return;
      }

      if (!activeItem) return;
      if (e.key === 'Escape') {
        setActiveItem(null);
        setZoomLevel(1);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, lang, visibleItems]);

  const handleNext = () => {
    if (!activeItem) return;
    const pool = visibleItems.length > 0 ? visibleItems : ALL_PORTFOLIO_ITEMS;
    const currentIndex = pool.findIndex((it) => it.id === activeItem.id);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % pool.length;
    setActiveItem(pool[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const pool = visibleItems.length > 0 ? visibleItems : ALL_PORTFOLIO_ITEMS;
    const currentIndex = pool.findIndex((it) => it.id === activeItem.id);
    const prevIndex = currentIndex === -1 ? 0 : (currentIndex - 1 + pool.length) % pool.length;
    setActiveItem(pool[prevIndex]);
    setZoomLevel(1);
  };

  const isAllActive = activeCategories.length === 0;

  return (
    <section id="projects" className="scroll-mt-20 py-10 sm:py-12 relative bg-[#070d18]/84">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary Category Filter Bar (Multi-toggle by portfolio type, strictly no numeric counts) */}
        <div
          role="group"
          aria-label={lang === 'th' ? 'กรองผลงานตามประเภท' : 'Filter portfolio by category'}
          data-testid="category-filter-bar"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10"
        >
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => handleToggleCategory('all')}
              aria-pressed={isAllActive}
              data-testid="category-filter-all"
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070d18] ${
                isAllActive
                  ? 'bg-blue-600 text-white border border-[#38bdf8] shadow-[0_0_16px_rgba(29,161,255,0.4)]'
                  : 'bg-[#0b1426]/90 hover:bg-[#11203d] text-slate-300 hover:text-white border border-white/10 hover:border-[#1da1ff]/50'
              }`}
            >
              {lang === 'th' ? 'ทั้งหมด' : 'All'}
            </button>

            {PORTFOLIO_CATEGORIES.map((category) => {
              const isSelected = activeCategories.includes(category.id);
              return (
                <button
                  type="button"
                  key={category.id}
                  onClick={() => handleToggleCategory(category.id)}
                  aria-pressed={isSelected}
                  data-testid={`category-filter-${category.id}`}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070d18] ${
                    isSelected
                      ? 'bg-blue-600 text-white border border-[#38bdf8] shadow-[0_0_16px_rgba(29,161,255,0.4)]'
                      : 'bg-[#0b1426]/90 hover:bg-[#11203d] text-slate-300 hover:text-white border border-white/10 hover:border-[#1da1ff]/50'
                  }`}
                >
                  {lang === 'th' ? category.labelTh : category.labelEn}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-slate-400 whitespace-nowrap shrink-0">
            {lang === 'th'
              ? 'เลือกเปิด/ปิดได้หลายหมวดพร้อมกัน'
              : 'Toggle one or more types'}
          </p>
        </div>

        {/* Secondary Folder Quick-Jump Strip (scoped to active categories, strictly no numeric counts) */}
        {categoryAlbums.length > 1 && (
          <div
            aria-label={lang === 'th' ? 'เลือกโฟลเดอร์ผลงาน' : 'Select portfolio folder'}
            className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none"
          >
            <button
              type="button"
              onClick={() => setSelectedAlbumId('all')}
              aria-pressed={selectedAlbumId === 'all'}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedAlbumId === 'all'
                  ? 'bg-blue-500/20 text-cyan-200 border border-[#1da1ff]/60'
                  : 'bg-white/[0.04] hover:bg-white/10 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {lang === 'th' ? 'ทุกอัลบั้มในหมวดนี้' : 'All in View'}
            </button>
            {categoryAlbums.map((album) => (
              <button
                type="button"
                key={album.id}
                onClick={() => setSelectedAlbumId(album.id)}
                aria-pressed={selectedAlbumId === album.id}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedAlbumId === album.id
                    ? 'bg-blue-500/20 text-cyan-200 border border-[#1da1ff]/60'
                    : 'bg-white/[0.04] hover:bg-white/10 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {lang === 'th' ? album.titleTh : album.titleEn}
              </button>
            ))}
          </div>
        )}

        {/* Categorized Slide Albums Container */}
        <div className="space-y-6 sm:space-y-7">
          {displayedAlbums.map((album, albumIndex) => (
            <div
              key={album.id}
              id={`album-${album.id}`}
              className="rounded-2xl sm:rounded-3xl bg-[#091122]/80 border-[1.5px] border-[#1da1ff]/75 hover:border-[#38d2ff] ring-1 ring-[#0077ff]/30 p-4 sm:p-6 shadow-[0_0_20px_rgba(14,165,233,0.28),inset_0_0_14px_rgba(37,99,235,0.14)] hover:shadow-[0_0_28px_rgba(56,189,248,0.45),inset_0_0_18px_rgba(37,99,235,0.22)] relative overflow-hidden transition-all duration-300"
            >
              {/* Album Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-[11px] font-semibold mb-1.5">
                    <span>{lang === 'th' ? album.badgeTh : album.badgeEn}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {lang === 'th' ? album.titleTh : album.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-3xl">
                    {lang === 'th' ? album.subtitleTh : album.subtitleEn}
                  </p>
                </div>

                {/* Right Controls: Slider Prev / Next Buttons */}
                <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">

                  {/* Slider Prev / Next Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => scrollAlbum(album.id, 'left')}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="เลื่อนซ้าย"
                      title="เลื่อนไปทางซ้าย"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => scrollAlbum(album.id, 'right')}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="เลื่อนขวา"
                      title="เลื่อนไปทางขวา"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Horizontal Slide Track with Snap Scrolling */}
              <div
                ref={(el) => {
                  scrollContainers.current[album.id] = el;
                }}
                className="flex items-center gap-4 sm:gap-5 overflow-x-auto pb-5 pt-3.5 px-1 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
                style={{ scrollbarWidth: 'thin' }}
              >
                {album.items.map((item, itemIndex) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item);
                      setZoomLevel(1);
                    }}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      triggerProtectedNotice();
                    }}
                    onDragStart={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    aria-label={lang === 'th' ? `เปิดดูภาพผลงานในหมวด ${album.titleTh}` : `Preview artwork in ${album.titleEn}`}
                    className="project-float-trigger group relative flex-none w-56 sm:w-64 md:w-72 aspect-square rounded-2xl snap-start cursor-pointer select-none protected-artwork focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#091122]"
                  >
                    <div
                      style={getProjectFloatStyle(itemIndex, albumIndex)}
                      className="project-float-item w-full h-full"
                    >
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#060a14] border border-white/10 group-hover:border-cyan-400/70 shadow-lg group-hover:shadow-[0_14px_30px_rgba(14,165,233,0.28)] group-hover:-translate-y-1.5 group-focus-visible:-translate-y-1.5 transition-all duration-300 ease-out">
                        {/* Pure artwork image: Smooth subtle scale on hover, protected from right-click save and dragging */}
                        <img
                          src={item.image}
                          alt={lang === 'th' ? album.titleTh : album.titleEn}
                          loading="lazy"
                          draggable={false}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src !== item.cdnFallback) {
                              target.src = item.cdnFallback;
                            }
                          }}
                          className="w-full h-full object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-focus-visible:scale-105 pointer-events-none protected-artwork-img select-none will-change-transform"
                        />

                        {/* Transparent Click & Anti-Right-Click Interceptor Layer */}
                        <div
                          className="absolute inset-0 z-10 bg-transparent"
                          onContextMenu={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            triggerProtectedNotice();
                          }}
                        />

                        {/* Clean Minimalist Hover Overlay (Icon only, no text descriptions) */}
                        <div className="absolute inset-0 z-20 bg-black/35 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <div className="p-3 rounded-full bg-blue-600/90 text-white shadow-xl border border-white/20 transform scale-75 group-hover:scale-100 group-focus-visible:scale-100 transition-transform duration-300">
                            <Eye className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Album Footer Helper Text */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                <span>← เลื่อนดูภาพในอัลบั้ม →</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{lang === 'th' ? 'โหมดพรีวิวภาพขนาดใหญ่ (ระบบป้องกันการ Save ภาพ)' : 'Preview Mode (Protected)'}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Clean showcase without bold headings, strictly Preview Only) */}
      {activeItem && (() => {
        const activeAlbum = PORTFOLIO_ALBUMS.find((a) => a.id === activeItem.albumId) || PORTFOLIO_ALBUMS[0];
        return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md animate-fadeIn"
          onClick={() => {
            setActiveItem(null);
            setZoomLevel(1);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            triggerProtectedNotice();
          }}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#0c1426] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => {
              e.preventDefault();
              triggerProtectedNotice();
            }}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-3.5 bg-[#080e1c] border-b border-white/10 text-xs select-none">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="font-semibold text-slate-200 truncate">
                  {lang === 'th' ? activeAlbum.titleTh : activeAlbum.titleEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                {/* Protected Preview Badge (No Download Button) */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold shadow-sm select-none">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="hidden sm:inline">
                    {lang === 'th' ? 'โหมดพรีวิวผลงาน (ไม่อนุญาตให้ Save)' : 'Preview Only (Protected)'}
                  </span>
                  <span className="sm:hidden">
                    {lang === 'th' ? 'พรีวิวเท่านั้น' : 'Preview Only'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveItem(null);
                    setZoomLevel(1);
                  }}
                  aria-label={lang === 'th' ? 'ปิดหน้าต่างพรีวิว' : 'Close preview'}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-rose-500/80 text-white transition-colors cursor-pointer"
                  title="ปิด (ESC)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Preview Container with Zoom & Prev/Next */}
            <div
              className="relative flex-1 bg-[#050912] flex items-center justify-center min-h-[420px] sm:min-h-[550px] overflow-hidden p-4 select-none"
              onContextMenu={(e) => {
                e.preventDefault();
                triggerProtectedNotice();
              }}
            >
              {/* Prev / Next controls */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-blue-600 text-white transition-colors border border-white/10 cursor-pointer shadow-lg active:scale-95"
                title="ผลงานก่อนหน้า (ลูกศรซ้าย)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-blue-600 text-white transition-colors border border-white/10 cursor-pointer shadow-lg active:scale-95"
                title="ผลงานถัดไป (ลูกศรขวา)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Protected Artwork Image Container */}
              <div
                className="relative max-w-full max-h-[72vh] flex items-center justify-center transition-transform duration-200 select-none protected-artwork"
                style={{ transform: `scale(${zoomLevel})` }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  triggerProtectedNotice();
                }}
                onDragStart={(e) => {
                  e.preventDefault();
                  return false;
                }}
              >
                <img
                  src={activeItem.image}
                  alt="ภาพผลงานออกแบบ"
                  draggable={false}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== activeItem.cdnFallback) {
                      target.src = activeItem.cdnFallback;
                    }
                  }}
                  className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl select-none protected-artwork-img pointer-events-none"
                />

                {/* Transparent Security Shield Overlay over the Image */}
                <div
                  className="absolute inset-0 z-20 cursor-default select-none bg-transparent"
                  onContextMenu={(e) => {
                    e.preventDefault();
                    triggerProtectedNotice();
                  }}
                  onDragStart={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                />

                {/* Discreet Watermark Badge */}
                <div className="absolute bottom-3 right-3 z-30 pointer-events-none px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-300 flex items-center gap-1.5 shadow-md">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  <span>BOOM DESIGN · PREVIEW ONLY · ห้ามบันทึกภาพ</span>
                </div>
              </div>

              {/* Bottom floating zoom toolbar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs text-white select-none">
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                  className="p-1 hover:text-cyan-400 transition-colors cursor-pointer"
                  title="ซูมออก"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="font-mono text-[11px] px-1">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                  className="p-1 hover:text-cyan-400 transition-colors cursor-pointer"
                  title="ซูมเข้า"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="text-[10px] px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-colors ml-1 cursor-pointer"
                >
                  รีเซ็ต
                </button>
              </div>
            </div>
          </div>
        </div>
        );
      })()}

      {/* Floating Copyright Protection Toast Notification */}
      {showProtectedNotice && (
        <div className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-[100] max-w-md w-[92%] sm:w-auto flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#091224]/95 border border-amber-500/50 text-white shadow-2xl shadow-black/80 backdrop-blur-xl animate-bounce">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-left text-xs">
            <p className="font-bold text-amber-300">
              {lang === 'th' ? '🔒 ลิขสิทธิ์ผลงานออกแบบ (Preview Only)' : '🔒 Copyright Protected'}
            </p>
            <p className="text-slate-300 text-[11px] mt-0.5">
              {noticeMessage}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
