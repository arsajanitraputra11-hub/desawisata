import {Star} from 'lucide-react';
import {TESTIMONIALS} from '../data/villageData';

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-12 sm:py-16 border-t border-[#1B4332]/10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <p className="text-sm font-semibold text-[#D97736] mb-1.5">
              04. Cerita Pengunjung
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B4332]">
              Pengalaman Nyata Wisatawan di Lereng Asri
            </h2>
            <p className="text-base text-[#414844] mt-2 max-w-2xl">
              Lebih dari 340 keluarga, sekolah, dan rombongan kantor telah menikmati suasana tenang
              dan pelayanan ramah warga desa kami.
            </p>
          </div>

          <div className="bg-[#F8FAF6] rounded-2xl px-5 py-3.5 border border-[#1B4332]/10 self-start">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-[#D97736]" aria-hidden="true">
                {Array.from({length: 5}).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-lg font-extrabold text-[#1B4332] tabular-nums">
                4,9 / 5,0
              </span>
            </div>
            <p className="text-xs font-medium text-[#414844] mt-0.5">
              Rata-rata penilaian 342 ulasan terverifikasi
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-[#F8FAF6] rounded-2xl p-6 border border-[#1B4332]/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className="flex items-center gap-0.5 text-[#D97736]"
                    aria-label={`Penilaian ${item.rating} dari 5 bintang`}
                  >
                    {Array.from({length: item.rating}).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#414844]">{item.visitDate}</span>
                </div>

                <p className="text-[15px] leading-relaxed text-[#1E293B] mb-5">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B4332]/10">
                <p className="text-base font-bold text-[#1B4332]">{item.name}</p>
                <p className="text-sm text-[#414844] mt-0.5">{item.roleOrGroup}</p>
                <p className="text-xs font-semibold text-[#2D6A4F] mt-1">{item.packageTaken}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
