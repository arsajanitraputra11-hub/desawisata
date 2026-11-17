import {useEffect, useState} from 'react';
import {CheckCircle2, ChevronRight, MapPin, MessageCircle, X} from 'lucide-react';
import {DESTINATIONS, Destination, DestinationCategory} from '../data/villageData';
import {buildWhatsAppUrl, formatRupiah} from '../utils/whatsapp';
import {SmartImage} from './SmartImage';

const CATEGORIES: DestinationCategory[] = ['Semua', 'Wisata Alam', 'Agro & Edukasi', 'Penginapan'];

interface DestinationsSectionProps {
  onSelectSpotOnMap: (destinationId: string) => void;
}

export function DestinationsSection({onSelectSpotOnMap}: DestinationsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory>('Semua');
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);

  const filteredDestinations =
    selectedCategory === 'Semua'
      ? DESTINATIONS
      : DESTINATIONS.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    if (!activeDestination) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDestination(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDestination]);

  return (
    <section id="destinasi" className="py-12 sm:py-16 border-t border-[#1B4332]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading + Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <p className="text-sm font-semibold text-[#D97736] mb-1.5">
              01. Pilihan Tempat Singgah
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B4332]">
              Daftar Destinasi Desa Lereng Asri
            </h2>
            <p className="text-base text-[#414844] mt-2 max-w-2xl">
              Seluruh titik wisata berada dalam satu kawasan desa yang tertata rapi dan dapat
              dijangkau dengan berjalan kaki santai dari pendopo utama.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div
            role="tablist"
            aria-label="Filter kategori destinasi"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-[#1B4332]/10 self-start"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] ${
                    isActive
                      ? 'bg-[#1B4332] text-white'
                      : 'text-[#1E293B] hover:bg-[#F8FAF6] hover:text-[#1B4332]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredDestinations.map((dest) => {
            const waDestUrl = buildWhatsAppUrl(
              `Halo Admin Desa Wisata Lereng Asri, saya ingin bertanya informasi tiket & kunjungan ke ${dest.name}.`
            );

            return (
              <article
                key={dest.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#1B4332]/10 card-elevation card-elevation-hover flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1B4332]/10">
                  <SmartImage
                    src={dest.image}
                    alt={dest.imageAlt}
                    fallbackTitle={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                    <span className="text-xs sm:text-sm font-semibold tracking-tight text-white/95">
                      {dest.openHours}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold tabular-nums">
                      {formatRupiah(dest.ticketPrice)}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Unboxed Metadata Line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#2D6A4F] mb-2">
                    <span>{dest.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Estimasi {dest.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#1B4332] mb-2">
                    {dest.name}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-[#414844] mb-5 flex-1">
                    {dest.shortDesc}
                  </p>

                  {/* Unboxed Facility Highlights */}
                  <p className="text-xs sm:text-sm text-[#6D3000] font-medium mb-5">
                    Fasilitas: {dest.facilities.slice(0, 3).join(' · ')}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-[#1B4332]/10">
                    <button
                      type="button"
                      onClick={() => setActiveDestination(dest)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 min-h-[48px] px-4 py-2.5 rounded-full border border-[#1B4332]/25 text-[#1B4332] hover:bg-[#1B4332] hover:text-white text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
                    >
                      <span>Detail &amp; Tips</span>
                      <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </button>

                    <a
                      href={waDestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] px-4 py-2.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Tanya via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Destination Detail Bottom Sheet / Modal */}
      {activeDestination && (
        <div
          className="fixed inset-0 z-50 bg-black/55 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dest-modal-title"
          onClick={() => setActiveDestination(null)}
        >
          <div
            className="bg-white w-full sm:max-w-xl rounded-t-3xl sm:rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-52 sm:h-64 shrink-0 bg-[#1B4332]">
              <SmartImage
                src={activeDestination.image}
                alt={activeDestination.imageAlt}
                fallbackTitle={activeDestination.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveDestination(null)}
                aria-label="Tutup detail destinasi"
                className="absolute top-4 right-4 min-w-[44px] min-h-[44px] rounded-full bg-white/95 text-[#1B4332] flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#2D6A4F]">
                <span>{activeDestination.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeDestination.openHours}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#D97736] font-extrabold tabular-nums">
                  {formatRupiah(activeDestination.ticketPrice)}
                </span>
              </div>

              <h3 id="dest-modal-title" className="text-2xl font-extrabold text-[#1B4332]">
                {activeDestination.name}
              </h3>

              <p className="text-base leading-relaxed text-[#414844]">
                {activeDestination.fullDesc}
              </p>

              <div className="pt-2">
                <h4 className="text-sm font-bold text-[#1B4332] mb-2">Fasilitas Tersedia</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeDestination.facilities.map((facility) => (
                    <li key={facility} className="flex items-center gap-2 text-sm text-[#1E293B]">
                      <CheckCircle2
                        className="w-4 h-4 text-[#52B788] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FDF8F5] rounded-2xl p-4 text-sm text-[#6D3000]">
                <strong className="font-bold">Tips Berkunjung: </strong>
                {activeDestination.tips}
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-[#1B4332]/10 bg-[#F8FAF6] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  const destId = activeDestination.id;
                  setActiveDestination(null);
                  onSelectSpotOnMap(destId);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-full border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white text-sm font-bold transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Lihat Titik di Peta</span>
              </button>

              <a
                href={buildWhatsAppUrl(
                  `Halo Admin Desa Wisata Lereng Asri, saya ingin memesan kunjungan ke ${activeDestination.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-sm font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Pesan via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
