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
  PortfolioAlbum,
  PortfolioArtwork
} from '../data/portfolioAlbums';
import { RESUME_DATA } from '../data/portfolioData';

interface ProjectsProps {
  lang: 'th' | 'en';
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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

  // Filtered albums based on selected tab
  const displayedAlbums =
    selectedCategory === 'all'
      ? PORTFOLIO_ALBUMS
      : PORTFOLIO_ALBUMS.filter((album) => album.id === selectedCategory);

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
  }, [activeItem, lang]);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = ALL_PORTFOLIO_ITEMS.findIndex((it) => it.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % ALL_PORTFOLIO_ITEMS.length;
    setActiveItem(ALL_PORTFOLIO_ITEMS[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = ALL_PORTFOLIO_ITEMS.findIndex((it) => it.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + ALL_PORTFOLIO_ITEMS.length) % ALL_PORTFOLIO_ITEMS.length;
    setActiveItem(ALL_PORTFOLIO_ITEMS[prevIndex]);
    setZoomLevel(1);
  };

  return (
    <section id="projects" className="py-10 sm:py-12 relative bg-[#070d18]/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Folder Category Filter Tabs (Strictly no numeric counts) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none border-b border-white/10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 border border-blue-400'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            {lang === 'th' ? 'ทุกโฟลเดอร์ผลงาน' : 'All Folders'}
          </button>
          {PORTFOLIO_ALBUMS.map((album) => (
            <button
              key={album.id}
              onClick={() => setSelectedCategory(album.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedCategory === album.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 border border-blue-400'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {lang === 'th' ? album.titleTh : album.titleEn}
            </button>
          ))}
        </div>

        {/* Categorized Slide Albums Container */}
        <div className="space-y-6 sm:space-y-7">
          {displayedAlbums.map((album) => (
            <div
              key={album.id}
              id={`album-${album.id}`}
              className="rounded-2xl sm:rounded-3xl bg-[#091122]/75 border border-white/10 p-4 sm:p-6 shadow-xl relative overflow-hidden transition-all duration-300"
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
                className="flex items-center gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
                style={{ scrollbarWidth: 'thin' }}
              >
                {album.items.map((item) => (
                  <div
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
                    className="group relative flex-none w-56 sm:w-64 md:w-72 aspect-square rounded-2xl overflow-hidden bg-[#060a14] border border-white/10 hover:border-cyan-400/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/15 snap-start transition-all duration-300 cursor-pointer select-none protected-artwork"
                  >
                    {/* Pure artwork image: Protected from right-click save and dragging */}
                    <img
                      src={item.image}
                      alt="ผลงานออกแบบ"
                      loading="lazy"
                      draggable={false}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== item.cdnFallback) {
                          target.src = item.cdnFallback;
                        }
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none protected-artwork-img select-none"
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

                    {/* Minimalist Hover Overlay with Preview Icon */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 pointer-events-none">
                      <div className="p-3 rounded-full bg-blue-600/90 text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                        <Eye className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-medium text-cyan-200 bg-black/75 px-2.5 py-0.5 rounded-full border border-white/15 flex items-center gap-1 shadow-sm">
                        <Lock className="w-3 h-3 text-cyan-400" />
                        <span>{lang === 'th' ? 'คลิกพรีวิวภาพ' : 'Click to Preview'}</span>
                      </span>
                    </div>
                  </div>
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
      {activeItem && (
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
            <div className="flex items-center justify-between px-6 py-4 bg-[#080e1c] border-b border-white/10 text-xs select-none">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-300">
                  {lang === 'th' ? activeItem.albumName : activeItem.albumName}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400 font-mono text-[11px]">
                  Adobe Photoshop / Illustrator
                </span>
              </div>

              <div className="flex items-center gap-2.5">
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
                  onClick={() => {
                    setActiveItem(null);
                    setZoomLevel(1);
                  }}
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
      )}

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
