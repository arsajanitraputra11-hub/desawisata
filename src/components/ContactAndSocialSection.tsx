import {FormEvent, useState} from 'react';
import {
  Camera,
  CheckCircle2,
  ExternalLink,
  Film,
  MessageCircle,
  Send,
  Share2,
  Users,
} from 'lucide-react';
import {SOCIAL_CHANNELS} from '../data/villageData';
import {buildWhatsAppUrl, VILLAGE_DISPLAY_PHONE} from '../utils/whatsapp';

const INQUIRY_TOPICS = [
  'Tanya Jadwal & Ketersediaan Penginapan',
  'Pesan Paket Keluarga / Akhir Pekan',
  'Penawaran Rombongan / Gathering Kantor',
  'Kunjungan Edukasi Sekolah / Anak',
];

function getPlatformIcon(platform: string) {
  switch (platform) {
    case 'Instagram':
      return <Camera className="w-5 h-5" aria-hidden="true" />;
    case 'TikTok':
      return <Film className="w-5 h-5" aria-hidden="true" />;
    case 'YouTube':
      return <Share2 className="w-5 h-5" aria-hidden="true" />;
    default:
      return <Users className="w-5 h-5" aria-hidden="true" />;
  }
}

export function ContactAndSocialSection() {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [topic, setTopic] = useState(INQUIRY_TOPICS[0]);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    whatsapp: string;
    topic: string;
    message: string;
  } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanPhone = whatsapp.replace(/\s+/g, '');
    const cleanMessage = message.trim();

    if (cleanName.length < 2) {
      setErrorMsg('Mohon tuliskan nama lengkap Anda (minimal 2 huruf).');
      return;
    }

    if (!/^(\+62|62|08)[0-9]{8,13}$/.test(cleanPhone)) {
      setErrorMsg('Mohon masukkan nomor WhatsApp yang valid, contoh: 081234567890.');
      return;
    }

    if (cleanMessage.length < 10) {
      setErrorMsg('Mohon tuliskan pesan atau rencana kunjungan singkat (minimal 10 karakter).');
      return;
    }

    setErrorMsg(null);
    setSubmittedData({
      name: cleanName,
      whatsapp: cleanPhone,
      topic,
      message: cleanMessage,
    });
  };

  const resetForm = () => {
    setSubmittedData(null);
    setName('');
    setWhatsapp('');
    setMessage('');
    setErrorMsg(null);
  };

  const waFollowUpUrl = submittedData
    ? buildWhatsAppUrl(
        `Halo Admin Desa Wisata Lereng Asri, saya ${submittedData.name} (${submittedData.whatsapp}).\n` +
          `Topik: ${submittedData.topic}\n` +
          `Pesan: ${submittedData.message}`
      )
    : '';

  return (
    <section id="kontak" className="py-12 sm:py-16 border-t border-[#1B4332]/10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Quick Contact Form */}
          <div className="lg:col-span-7 bg-[#F8FAF6] rounded-3xl p-6 sm:p-8 border border-[#1B4332]/12">
            <p className="text-sm font-semibold text-[#D97736] mb-1.5">
              06. Formulir Kontak Cepat
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B4332]">
              Konsultasikan Rencana Liburan Anda
            </h2>
            <p className="text-base text-[#414844] mt-2 mb-6">
              Isi formulir singkat di bawah ini atau langsung terhubung dengan tim pengelola desa di{' '}
              <span className="font-semibold text-[#1B4332] tabular-nums">
                {VILLAGE_DISPLAY_PHONE}
              </span>
              .
            </p>

            {submittedData ? (
              <div
                role="status"
                className="bg-white rounded-2xl p-6 border border-[#52B788]/40 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 text-[#15803D] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-extrabold text-[#1B4332]">
                      Terima kasih, {submittedData.name}!
                    </h3>
                    <p className="text-sm text-[#414844] mt-1 leading-relaxed">
                      Pertanyaan Anda mengenai <strong>{submittedData.topic}</strong> telah tercatat.
                      Untuk respon instan di bawah 10 menit, lanjutkan pesan ini langsung ke
                      WhatsApp admin desa kami.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={waFollowUpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-full bg-[#15803D] hover:bg-[#166534] text-white text-sm font-bold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Kirim Langsung via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="min-h-[48px] px-5 py-3 rounded-full border border-[#1B4332]/25 text-[#1B4332] hover:bg-[#F8FAF6] text-sm font-semibold transition-colors"
                  >
                    Kirim Pertanyaan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {errorMsg && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-xl bg-[#FFDAD6] text-[#93000A] text-sm font-semibold"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-bold text-[#1B4332] mb-1.5"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full h-12 px-4 rounded-xl bg-white border border-[#1E293B]/20 text-base text-[#1E293B] placeholder:text-[#717973] focus:outline-none focus:border-[#2D6A4F] focus:ring-3 focus:ring-[#2D6A4F]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-wa"
                      className="block text-sm font-bold text-[#1B4332] mb-1.5"
                    >
                      Nomor WhatsApp Aktif
                    </label>
                    <input
                      id="contact-wa"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className="w-full h-12 px-4 rounded-xl bg-white border border-[#1E293B]/20 text-base text-[#1E293B] placeholder:text-[#717973] focus:outline-none focus:border-[#2D6A4F] focus:ring-3 focus:ring-[#2D6A4F]/15"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-sm font-bold text-[#1B4332] mb-1.5"
                  >
                    Keperluan Kunjungan
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl bg-white border border-[#1E293B]/20 text-base text-[#1E293B] focus:outline-none focus:border-[#2D6A4F] focus:ring-3 focus:ring-[#2D6A4F]/15"
                  >
                    {INQUIRY_TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-bold text-[#1B4332] mb-1.5"
                  >
                    Pesan atau Pertanyaan
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan perkiraan tanggal kunjungan, jumlah orang, atau kebutuhan khusus seperti menu makanan..."
                    className="w-full p-4 rounded-xl bg-white border border-[#1E293B]/20 text-base text-[#1E293B] placeholder:text-[#717973] focus:outline-none focus:border-[#2D6A4F] focus:ring-3 focus:ring-[#2D6A4F]/15"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[52px] px-7 py-3.5 rounded-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-base font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
                >
                  <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Kirim Pertanyaan Sekarang</span>
                </button>
              </form>
            )}
          </div>

          {/* Social Media Integration Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <p className="text-sm font-semibold text-[#D97736] mb-1.5">
                Terhubung Bersama Kami
              </p>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#1B4332]">
                Ikuti Keseharian Desa di Media Sosial
              </h3>
              <p className="text-sm sm:text-base text-[#414844] mt-1.5">
                Pantau kondisi cuaca pagi, jadwal panen stroberi, dan cuplikan video wisata terbaru
                dari kanal resmi Desa Lereng Asri.
              </p>
            </div>

            <div className="space-y-3">
              {SOCIAL_CHANNELS.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAF6] border border-[#1B4332]/10 hover:border-[#1B4332]/35 hover:bg-white transition-all card-elevation"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1B4332] text-white flex items-center justify-center shrink-0 group-hover:bg-[#2D6A4F] transition-colors">
                    {getPlatformIcon(channel.platform)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-extrabold text-[#1B4332] truncate">
                        {channel.platform} · {channel.handle}
                      </p>
                      <ExternalLink
                        className="w-4 h-4 text-[#414844] group-hover:text-[#1B4332] shrink-0"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-xs font-semibold text-[#D97736] mt-0.5 tabular-nums">
                      {channel.followers}
                    </p>
                    <p className="text-xs sm:text-sm text-[#414844] mt-1 leading-snug">
                      {channel.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
