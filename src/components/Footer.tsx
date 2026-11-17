import {MapPin, MessageCircle, Mail} from 'lucide-react';
import {buildWhatsAppUrl, VILLAGE_DISPLAY_PHONE, VILLAGE_EMAIL} from '../utils/whatsapp';

export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white pt-12 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          <div className="md:col-span-5">
            <h2 className="text-xl font-extrabold tracking-tight">Desa Wisata Lereng Asri</h2>
            <p className="text-sm text-white/85 leading-relaxed mt-3 max-w-md">
              Dikelola langsung oleh Pokdarwis (Kelompok Sadar Wisata) bersama warga desa untuk
              menjaga kelestarian hutan pinus, mata air pegunungan, dan kehangatan budaya lokal.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <h3 className="text-sm font-bold text-[#A5D0B9]">Jelajah Halaman</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <a href="#destinasi" className="hover:underline">
                  Daftar Destinasi
                </a>
              </li>
              <li>
                <a href="#paket" className="hover:underline">
                  Paket Wisata &amp; Harga
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:underline">
                  Galeri Foto Desa
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:underline">
                  Testimoni Pengunjung
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:underline">
                  Peta Lokasi
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3 text-sm text-white/90">
            <h3 className="text-sm font-bold text-[#A5D0B9]">Alamat &amp; Layanan Pengunjung</h3>
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" aria-hidden="true" />
              <span>Jl. Raya Lereng Pegunungan No. 18, Kawasan Wisata Asri, Jawa Tengah</span>
            </p>
            <p className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-[#52B788] shrink-0" aria-hidden="true" />
              <a
                href={buildWhatsAppUrl('Halo Admin Desa Wisata Lereng Asri, saya ingin bertanya informasi wisata.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-semibold tabular-nums"
              >
                WhatsApp: {VILLAGE_DISPLAY_PHONE}
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#52B788] shrink-0" aria-hidden="true" />
              <a href={`mailto:${VILLAGE_EMAIL}`} className="hover:underline">
                {VILLAGE_EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/75">
          <p>&copy; {new Date().getFullYear()} Desa Wisata Lereng Asri. Dikelola oleh Warga Desa.</p>
          <p>Jam Operasional Kawasan: Setiap Hari 06.30 – 17.30 WIB</p>
        </div>
      </div>
    </footer>
  );
}
