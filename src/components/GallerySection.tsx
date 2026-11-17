import {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Expand, X} from 'lucide-react';
import {GALLERY_ITEMS, GalleryItem} from '../data/villageData';
import {SmartImage} from './SmartImage';

type GalleryFilter = 'Semua' | GalleryItem['category'];
const GALLERY_FILTERS: GalleryFilter[] = ['Semua', 'Alam', 'Penginapan', 'Kuliner & Budaya'];

export function GallerySection() {
  const [filter, setFilter] = useState<GalleryFilter>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleItems =
    filter === 'Semua'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleItems.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + visibleItems.length) % visibleItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, visibleItems.length]);

  const activeItem = lightboxIndex !== null ? visibleItems[lightboxIndex] : null;

  return (
    <section id="galeri" className="py-12 sm:py-16 border-t border-[#1B4332]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <p className="text-sm font-semibold text-[#D97736] mb-1.5">
              03. Galeri Suasana Desa
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B4332]">
              Potret Nyata Sudut Desa Lereng Asri
            </h2>
            <p className="text-base text-[#414844] mt-2 max-w-xl">
              Ketuk foto mana saja untuk melihat detail suasana alam, penginapan kayu, dan sajian
              hangat dari dapur warga.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter galeri foto"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-[#1B4332]/10 self-start"
          >
            {GALLERY_FILTERS.map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setFilter(tab);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? 'bg-[#1B4332] text-white'
                      : 'text-[#1E293B] hover:bg-[#F8FAF6] hover:text-[#1B4332]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {visibleItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="group relative text-left rounded-2xl overflow-hidden bg-white border border-[#1B4332]/10 card-elevation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#1B4332]/10">
                <SmartImage
                  src={item.image}
                  alt={item.alt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#012D1D]/80 via-[#012D1D]/15 to-transparent"
              />

              <span
                aria-hidden="true"
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 text-[#1B4332] flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity"
              >
                <Expand className="w-4 h-4" />
              </span>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs font-medium text-white/85">{item.category}</p>
                <h3 className="text-base font-bold leading-snug mt-0.5">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Viewer */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full bg-[#1B4332]">
              <SmartImage
                src={activeItem.image}
                alt={activeItem.alt}
                fallbackTitle={activeItem.title}
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Tutup pratinjau foto"
                className="absolute top-3 right-3 min-w-[44px] min-h-[44px] rounded-full bg-white/95 text-[#1B4332] flex items-center justify-center shadow-md hover:bg-white"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              {visibleItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + visibleItems.length) % visibleItems.length
                      )
                    }
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-white/95 text-[#1B4332] flex items-center justify-center shadow-md hover:bg-white"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % visibleItems.length)
                    }
                    aria-label="Foto berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-white/95 text-[#1B4332] flex items-center justify-center shadow-md hover:bg-white"
                  >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-[#2D6A4F]">
                  {activeItem.category} · Foto {lightboxIndex + 1} dari {visibleItems.length}
                </p>
                <h3 className="text-lg font-bold text-[#1B4332] mt-0.5">{activeItem.title}</h3>
                <p className="text-sm text-[#414844] mt-1">{activeItem.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
