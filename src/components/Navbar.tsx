import {useState} from 'react';
import {Menu, MessageCircle, X} from 'lucide-react';
import {buildWhatsAppUrl} from '../utils/whatsapp';

const NAV_LINKS = [
  {href: '#destinasi', label: 'Destinasi'},
  {href: '#paket', label: 'Paket Wisata'},
  {href: '#galeri', label: 'Galeri'},
  {href: '#testimoni', label: 'Testimoni'},
  {href: '#lokasi', label: 'Lokasi'},
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const waGeneralUrl = buildWhatsAppUrl(
    'Halo Admin Desa Wisata Lereng Asri, saya ingin bertanya informasi wisata dan ketersediaan jadwal kunjungan.'
  );

  return (
    <header className="bg-[#F8FAF6]/95 backdrop-blur-md border-b border-[#1B4332]/10 relative z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Wordmark */}
        <a
          href="#beranda"
          className="text-lg sm:text-xl font-extrabold tracking-tight text-[#1B4332] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B4332] rounded-sm"
        >
          Desa Lereng Asri
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-6 text-[15px] font-medium text-[#1E293B]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 hover:text-[#1B4332] hover:underline underline-offset-4 decoration-2 decoration-[#52B788] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B4332] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA (plus accessible mobile drawer toggle) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={waGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-sm font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Pesan WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl border border-[#1B4332]/15 bg-white text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Menu seluler"
          className="md:hidden border-t border-[#1B4332]/10 bg-white px-4 py-4 space-y-1 shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[48px] px-3 rounded-xl text-base font-semibold text-[#1E293B] hover:bg-[#F8FAF6] hover:text-[#1B4332] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center min-h-[48px] px-3 rounded-xl text-base font-semibold text-[#1E293B] hover:bg-[#F8FAF6] hover:text-[#1B4332] transition-colors"
          >
            Kontak Cepat
          </a>
          <div className="pt-2">
            <a
              href={waGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 min-h-[48px] w-full px-5 py-3 rounded-full bg-[#15803D] text-white text-base font-semibold"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Tanya Admin via WhatsApp</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
