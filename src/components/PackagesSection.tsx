import {useState} from 'react';
import {Check, ChevronDown, ChevronUp, MessageCircle, Minus, Plus} from 'lucide-react';
import {SAMPLE_ITINERARY, TOUR_PACKAGES, TourPackage} from '../data/villageData';
import {buildWhatsAppUrl, formatRupiah} from '../utils/whatsapp';
import {SmartImage} from './SmartImage';

const ADDONS = [
  {id: 'dokumentasi', label: 'Dokumentasi Foto & Video Desa (+Rp 350.000 / grup)', flatPrice: 350000},
  {id: 'api-unggun', label: 'Paket Api Unggun & Jagung Bakar Malam (+Rp 25.000 / orang)', perPersonPrice: 25000},
];

export function PackagesSection() {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(TOUR_PACKAGES[1].id);
  const [guestCount, setGuestCount] = useState<number>(4);
  const [visitDate, setVisitDate] = useState<string>('');
  const [withDocs, setWithDocs] = useState<boolean>(false);
  const [withBonfire, setWithBonfire] = useState<boolean>(false);
  const [showItinerary, setShowItinerary] = useState<boolean>(false);

  const selectedPkg: TourPackage =
    TOUR_PACKAGES.find((p) => p.id === selectedPkgId) || TOUR_PACKAGES[0];

  const effectiveGuests = Math.max(selectedPkg.minPeople, guestCount);
  const baseTotal = selectedPkg.pricePerPerson * effectiveGuests;
  const docsCost = withDocs ? 350000 : 0;
  const bonfireCost = withBonfire ? 25000 * effectiveGuests : 0;
  const estimatedTotal = baseTotal + docsCost + bonfireCost;

  const handleSelectPackage = (pkg: TourPackage) => {
    setSelectedPkgId(pkg.id);
    if (guestCount < pkg.minPeople) {
      setGuestCount(pkg.minPeople);
    }
    const calcEl = document.getElementById('kalkulator-paket');
    calcEl?.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  };

  const addonNotes = [
    withDocs ? 'Dokumentasi Foto & Video Desa' : null,
    withBonfire ? 'Api Unggun & Jagung Bakar' : null,
  ]
    .filter(Boolean)
    .join(', ');

  const customBookingUrl = buildWhatsAppUrl(
    `Halo Admin Desa Wisata Lereng Asri, saya ingin memesan:\n` +
      `• Paket: ${selectedPkg.name}\n` +
      `• Jumlah Peserta: ${effectiveGuests} orang\n` +
      `• Rencana Tanggal: ${visitDate || 'Belum ditentukan (mohon info jadwal tersedia)'}\n` +
      `• Tambahan: ${addonNotes || 'Tidak ada'}\n` +
      `• Estimasi Biaya: ${formatRupiah(estimatedTotal)}\n\n` +
      `Mohon konfirmasi ketersediaannya ya, terima kasih.`
  );

  return (
    <section id="paket" className="py-12 sm:py-16 border-t border-[#1B4332]/10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="text-sm font-semibold text-[#D97736] mb-1.5">
            02. Paket Wisata &amp; Harga Transparan
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B4332]">
            Pilih Paket Liburan Sesuai Kebutuhan Anda
          </h2>
          <p className="text-base text-[#414844] mt-2">
            Semua harga tertera sudah termasuk tiket kawasan, pemandu warga lokal, dan sajian khas
            Desa Lereng Asri tanpa biaya tersembunyi.
          </p>
        </div>

        {/* 3-Column Comparative Package Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {TOUR_PACKAGES.map((pkg) => {
            const isSelected = pkg.id === selectedPkgId;
            return (
              <article
                key={pkg.id}
                className={`rounded-2xl overflow-hidden flex flex-col border transition-shadow ${
                  pkg.isPopular
                    ? 'bg-[#FDF8F5] border-[#D97736]/50 card-elevation'
                    : 'bg-[#F8FAF6] border-[#1B4332]/12 card-elevation'
                }`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#1B4332]/10">
                  <SmartImage
                    src={pkg.image}
                    alt={pkg.name}
                    fallbackTitle={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Unboxed kicker */}
                  <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-bold mb-2">
                    <span className="text-[#2D6A4F]">{pkg.duration}</span>
                    {pkg.isPopular && (
                      <span className="text-[#D97736]">Pilihan Paling Diminati</span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1B4332]">{pkg.name}</h3>
                  <p className="text-sm text-[#414844] mt-1 mb-4">{pkg.subtitle}</p>

                  <div className="pb-4 mb-4 border-b border-[#1B4332]/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-[26px] font-extrabold text-[#1B4332] tabular-nums">
                        {formatRupiah(pkg.pricePerPerson)}
                      </span>
                      <span className="text-sm text-[#414844]">/ orang</span>
                    </div>
                    <p className="text-xs text-[#6D3000] font-medium mt-1">
                      Minimal pemesanan {pkg.minPeople} orang
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-sm text-[#1E293B] mb-6 flex-1">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2.5">
                    <a
                      href={buildWhatsAppUrl(
                        `Halo Admin Desa Wisata Lereng Asri, saya tertarik memesan ${pkg.name} (${formatRupiah(pkg.pricePerPerson)}/orang). Mohon info jadwal yang tersedia.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-sm font-bold whitespace-nowrap transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Pesan Paket Ini via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleSelectPackage(pkg)}
                      className={`w-full min-h-[44px] px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#1B4332] text-white border-[#1B4332]'
                          : 'bg-white text-[#1B4332] border-[#1B4332]/25 hover:border-[#1B4332]'
                      }`}
                    >
                      {isSelected ? 'Sedang Dihitung di Kalkulator' : 'Hitung Estimasi Grup'}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Interactive Estimator + Sample Rundown Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Interactive Price Calculator */}
          <div
            id="kalkulator-paket"
            className="lg:col-span-7 bg-[#F8FAF6] rounded-3xl p-6 sm:p-8 border border-[#1B4332]/12"
          >
            <h3 className="text-xl font-extrabold text-[#1B4332]">
              Kalkulator Estimasi Biaya Wisata
            </h3>
            <p className="text-sm text-[#414844] mt-1 mb-6">
              Sesuaikan jumlah peserta dan tanggal rencana berkunjung untuk langsung mengirim
              rincian ke WhatsApp admin.
            </p>

            <div className="space-y-5">
              {/* Package Selector */}
              <div>
                <label
                  htmlFor="calc-package"
                  className="block text-sm font-bold text-[#1B4332] mb-2"
                >
                  Pilih Paket Wisata
                </label>
                <select
                  id="calc-package"
                  value={selectedPkgId}
                  onChange={(e) => {
                    const nextId = e.target.value;
                    setSelectedPkgId(nextId);
                    const found = TOUR_PACKAGES.find((p) => p.id === nextId);
                    if (found && guestCount < found.minPeople) {
                      setGuestCount(found.minPeople);
                    }
                  }}
                  className="w-full h-12 px-4 rounded-xl bg-white border border-[#1E293B]/20 text-base font-medium text-[#1E293B] focus:outline-none focus:border-[#2D6A4F] focus:ring-3 focus:ring-[#2D6A4F]/15"
                >
                  {TOUR_PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} — {formatRupiah(pkg.pricePerPerson)}/orang
                    </option>
                  ))}
                </select>
              </div>

              {/* Guest Count + Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-sm font-bold text-[#1B4332] mb-2">
                    Jumlah Peserta (min. {selectedPkg.minPeople} orang)
                  </span>
                  <div className="flex items-center justify-between h-12 px-2 rounded-xl bg-white border border-[#1E293B]/20">
                    <button
                      type="button"
                      onClick={() =>
                        setGuestCount((prev) => Math.max(selectedPkg.minPeople, prev - 1))
                      }
                      aria-label="Kurangi jumlah peserta"
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#1B4332] hover:bg-[#F8FAF6] transition-colors"
                    >
                      <Minus className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <span className="text-base font-extrabold text-[#1B4332] tabular-nums">
                      {effectiveGuests} Orang
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuestCount((prev) => Math.min(100, prev + 1))}
                      aria-label="Tambah jumlah peserta"
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#1B4332] hover:bg-[#F8FAF6] transition-colors"
                    >
                      <Plus className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="calc-date"
                    className="block text-sm font-bold text-[#1B4332] mb-2"
                  >
                    Rencana Tanggal Kunjungan
                  </label>
                  <input
                    id="calc-date"
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#1E293B]/20 text-base text-[#1E293B] focus:outline-none focus:border-[#2D6A4F] focus:ring-3 focus:ring-[#2D6A4F]/15"
                  />
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-2.5 pt-1">
                <span className="block text-sm font-bold text-[#1B4332]">
                  Tambahan Opsional
                </span>
                <label className="flex items-center gap-3 min-h-[44px] cursor-pointer text-sm text-[#1E293B]">
                  <input
                    type="checkbox"
                    checked={withDocs}
                    onChange={(e) => setWithDocs(e.target.checked)}
                    className="w-5 h-5 rounded accent-[#1B4332]"
                  />
                  <span>{ADDONS[0].label}</span>
                </label>
                <label className="flex items-center gap-3 min-h-[44px] cursor-pointer text-sm text-[#1E293B]">
                  <input
                    type="checkbox"
                    checked={withBonfire}
                    onChange={(e) => setWithBonfire(e.target.checked)}
                    className="w-5 h-5 rounded accent-[#1B4332]"
                  />
                  <span>{ADDONS[1].label}</span>
                </label>
              </div>

              {/* Live Total & CTA */}
              <div className="pt-5 border-t border-[#1B4332]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#414844]">
                    Estimasi Total ({effectiveGuests} orang)
                  </p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#1B4332] tabular-nums">
                    {formatRupiah(estimatedTotal)}
                  </p>
                </div>

                <a
                  href={customBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-sm sm:text-base font-bold whitespace-nowrap transition-colors"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Kirim Rincian ke WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Rundown Timeline Accordion */}
          <div className="lg:col-span-5 bg-[#F8FAF6] rounded-3xl p-6 sm:p-8 border border-[#1B4332]/12">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-[#1B4332]">
                  Contoh Rundown Sehari
                </h3>
                <p className="text-sm text-[#414844] mt-1">
                  Jadwal fleksibel menyesuaikan ritme rombongan.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowItinerary((prev) => !prev)}
                aria-expanded={showItinerary}
                className="lg:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-xl bg-white border border-[#1B4332]/15 text-[#1B4332]"
              >
                {showItinerary ? (
                  <ChevronUp className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>

            <div className={`mt-6 ${showItinerary ? 'block' : 'hidden lg:block'}`}>
              <ol className="relative space-y-5 pl-6">
                {/* Vertical pine-soft timeline guide */}
                <span
                  aria-hidden="true"
                  className="absolute left-2 top-2 bottom-2 w-0.5 bg-[#52B788]/50"
                />
                {SAMPLE_ITINERARY.map((step, index) => (
                  <li key={step.time} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-[#52B788] text-white text-[10px] font-bold flex items-center justify-center"
                    >
                      {index + 1}
                    </span>
                    <p className="text-xs font-bold text-[#D97736] tabular-nums">{step.time}</p>
                    <h4 className="text-sm font-bold text-[#1B4332] mt-0.5">{step.title}</h4>
                    <p className="text-sm text-[#414844] leading-relaxed mt-0.5">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
