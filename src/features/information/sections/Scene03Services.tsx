import { Section } from '@/components/ui';

export function Scene03Services() {
  return (
    <Section variant="default" spacing="none" className="bg-[#EBE7E0] py-32 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-24">
        
        {/* Services Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-16">
          
          <div className="flex flex-col md:w-1/3">
            <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">
              02 — LAYANAN MASYARAKAT
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 leading-[1.2] mb-6 mix-blend-multiply">
              Layanan Masyarakat
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed max-w-xs mb-8">
              Berbagai layanan administrasi dan informasi yang disediakan untuk memudahkan masyarakat.
            </p>
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-stone-900 font-bold hover:text-stone-500 transition-colors pb-2 border-b border-stone-900 hover:border-stone-500 w-fit">
              LIHAT SEMUA LAYANAN
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 ml-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            
            {/* Service 1 */}
            <div className="flex flex-col gap-4 border-t border-stone-300 pt-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 text-stone-700">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <h3 className="font-serif text-xl text-stone-900">Surat Keterangan Domisili</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Pengurusan surat keterangan domisili penduduk.</p>
            </div>
            
            {/* Service 2 */}
            <div className="flex flex-col gap-4 border-t border-stone-300 pt-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 text-stone-700">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <h3 className="font-serif text-xl text-stone-900">Surat Pengantar</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Surat pengantar untuk keperluan berbagai urusan.</p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col gap-4 border-t border-stone-300 pt-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 text-stone-700">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              <h3 className="font-serif text-xl text-stone-900">KTP & KK</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Informasi dan pengurusan data kependudukan.</p>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col gap-4 border-t border-stone-300 pt-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 text-stone-700">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <h3 className="font-serif text-xl text-stone-900">Layanan Pengaduan</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Sampaikan keluhan atau masukan untuk desa.</p>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-stone-300" />

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-16">
          <div className="flex flex-col md:w-1/3">
            <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">
              03 — HUBUNGI KAMI
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-[1.2] mb-4 mix-blend-multiply">
              Hubungi Kami
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Kami siap membantu Anda.
            </p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.1em] text-stone-400 font-bold">Alamat</span>
              <p className="text-xs text-stone-700 leading-relaxed font-medium">Jl. Lintas Air Putih No. 01<br />Kecamatan Lubuk Batu Jaya<br />Kabupaten Indragiri Hulu, Riau 29351</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.1em] text-stone-400 font-bold">Telepon</span>
              <p className="text-xs text-stone-700 leading-relaxed font-medium">+62 812-3456-7890</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.1em] text-stone-400 font-bold">Email</span>
              <p className="text-xs text-stone-700 leading-relaxed font-medium">desaairputih@email.com</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.1em] text-stone-400 font-bold">Media Sosial</span>
              <p className="text-xs text-stone-700 leading-relaxed font-medium">@desaairputih</p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
