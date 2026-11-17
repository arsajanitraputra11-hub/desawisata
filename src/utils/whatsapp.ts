export const VILLAGE_WHATSAPP_NUMBER = '6281234567890';
export const VILLAGE_DISPLAY_PHONE = '+62 812-3456-7890';
export const VILLAGE_EMAIL = 'sapa@desalerengasri.id';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${VILLAGE_WHATSAPP_NUMBER}?text=${encoded}`;
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}
