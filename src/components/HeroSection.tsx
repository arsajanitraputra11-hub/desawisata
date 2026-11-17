import {ArrowDown, MessageCircle, MapPin} from 'lucide-react';
import {HERO_IMAGE} from '../data/villageData';
import {buildWhatsAppUrl} from '../utils/whatsapp';
import {SmartImage} from './SmartImage';

export function HeroSection() {
  const waHeroUrl = buildWhatsAppUrl(
    'Halo Admin Desa Wisata Lereng Asri, saya ingin merencanakan liburan dan menanyakan jadwal yang tersedia.'
  );

  return (
    <section id="beranda" className="pt-6 pb-10 sm:pt-10 sm:pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Responsive Hero Split with equal vertical stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2 lg:py-4">
            <p className="text-sm font-semibold text-[#2D6A4F] tracking-tight mb-3 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D97736] shrink-0" aria-hidden="true" />
              <span>Kawasan Pegunungan Hijau · 1.240 mdpl · Jawa Tengah</span>
            </p>

            <h1 className="text-[32px] leading-[1.18] sm:text-[42px] lg:text-[46px] font-extrabold tracking-tight text-[#1B4332] mb-4">
              Segarnya Alam Pegunungan &amp; Hangatnya Keramahan Desa
            </h1>

            <p className="text-base sm:text-[17px] leading-relaxed text-[#414844] max-w-xl mb-7">
              Nikmati hutan pinus yang rindang, air terjun jernih, kebun petik stroberi organik,
              dan pondok kayu yang tenang. Semua tersusun rapi untuk liburan keluarga maupun
              rombongan tanpa ribet.
            </p>

            {/* Primary & Secondary Touch-Friendly Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={waHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] px-7 py-3.5 rounded-full bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] text-white text-base font-bold whitespace-nowrap shrink-0 transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Pesan Sekarang via WhatsApp</span>
              </a>

              <a
                href="#paket"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3.5 rounded-full border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white text-base font-bold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
              >
                <span>Lihat Paket &amp; Harga</span>
                <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Hero Photography */}
          <div className="lg:col-span-6">
            <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] rounded-3xl overflow-hidden card-elevation bg-[#1B4332]">
              <SmartImage
                src={HERO_IMAGE}
                alt="Pemandangan pagi Desa Wisata Lereng Asri dengan pondok kayu tradisional, kabut pegunungan, dan kebun hijau"
                fallbackTitle="Desa Wisata Lereng Asri"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#012D1D]/75 via-[#012D1D]/15 to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <p className="text-xs sm:text-sm font-medium text-white/90">
                  Buka Setiap Hari · 06.30 – 17.30 WIB
                </p>
                <p className="text-base sm:text-lg font-bold tracking-tight mt-0.5">
                  Harga Tiket Masuk Kawasan Mulai Rp 20.000 / Orang
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Trust & Highlight Strip below Hero Split */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#1B4332]/10 card-elevation">
            <p className="text-xl sm:text-2xl font-extrabold text-[#1B4332] tabular-nums">
              1.240 mdpl
            </p>
            <p className="text-sm text-[#414844] mt-1 leading-snug">
              Udara pegunungan sejuk 17–22°C sepanjang hari
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#1B4332]/10 card-elevation">
            <p className="text-xl sm:text-2xl font-extrabold text-[#1B4332] tabular-nums">
              4 Destinasi
            </p>
            <p className="text-sm text-[#414844] mt-1 leading-snug">
              Hutan pinus, curug jernih, kebun organik &amp; glamping
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#1B4332]/10 card-elevation">
            <p className="text-xl sm:text-2xl font-extrabold text-[#1B4332] tabular-nums">
              4,9 / 5,0
            </p>
            <p className="text-sm text-[#414844] mt-1 leading-snug">
              Kepuasan dari 340+ keluarga &amp; rombongan tamu
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#1B4332]/10 card-elevation">
            <p className="text-xl sm:text-2xl font-extrabold text-[#D97736] tabular-nums">
              &lt; 10 Menit
            </p>
            <p className="text-sm text-[#414844] mt-1 leading-snug">
              Respon ramah admin lokal langsung via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
