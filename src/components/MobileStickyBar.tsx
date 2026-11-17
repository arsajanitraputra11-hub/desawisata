import {MessageCircle} from 'lucide-react';
import {buildWhatsAppUrl} from '../utils/whatsapp';

export function MobileStickyBar() {
  const waQuickUrl = buildWhatsAppUrl(
    'Halo Admin Desa Wisata Lereng Asri, saya ingin memesan paket wisata / bertanya jadwal kunjungan.'
  );

  return (
    <div
      className="fixed bottom-3 inset-x-4 z-40 md:hidden pointer-events-none"
      aria-label="Aksi cepat WhatsApp"
    >
      <a
        href={waQuickUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center gap-2.5 w-full h-[52px] px-5 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-base font-bold shadow-[0_12px_28px_-6px_rgba(21,128,61,0.45)] transition-transform active:scale-[0.98]"
      >
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span>Pesan Wisata via WhatsApp</span>
      </a>
    </div>
  );
}
