import { useState } from 'react';
import { PageMetadata } from '@/components/common';
import { 
  HeartHandshake, 
  FileText, 
  Users, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Share2, 
  Maximize2,
  X
} from 'lucide-react';
import { villageHistory } from '@/content/village/history';

const PRINCIPLES = [
  {
    icon: HeartHandshake,
    title: "Pelayanan Prima",
    description: "Melayani masyarakat dengan sepenuh hati."
  },
  {
    icon: FileText,
    title: "Transparansi",
    description: "Informasi terbuka dan dapat diakses semua."
  },
  {
    icon: Users,
    title: "Partisipatif",
    description: "Bersama membangun desa yang lebih baik."
  },
  {
    icon: ShieldCheck,
    title: "Akuntabel",
    description: "Tanggung jawab dalam setiap langkah."
  }
];

const OPERATIONAL_HOURS = [
  { days: 'Senin – Kamis', time: '08.00 – 15.00 WIB', isClosed: false },
  { days: 'Jumat', time: '08.00 – 11.30 WIB', isClosed: false },
  { days: 'Sabtu – Minggu', time: 'Libur', isClosed: true },
];

const MAIN_SERVICES = [
  'Pembuatan Surat Pengantar KTP / KK',
  'Surat Keterangan Domisili',
  'Surat Keterangan Usaha',
  'Surat Keterangan Tidak Mampu',
  'Pengurusan Akta Kelahiran & Kematian'
];

export function PemerintahanPage() {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);

  return (
    <>
      <PageMetadata 
        title="Pemerintahan & Pelayanan | Desa Air Putih" 
        description="Struktur pemerintahan desa, kepemimpinan historis, pelayanan publik, dan transparansi administrasi Desa Air Putih." 
      />
      
      <main className="flex-1 flex flex-col bg-[#FAF8F5] min-h-screen pt-20 md:pt-28">
        
        {/* 1. HERO SECTION */}
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 pt-4 md:pt-8 mb-16 md:mb-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[480px] lg:min-h-[540px] relative">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 flex flex-col items-start z-10 pr-0 lg:pr-6">
              
              <div className="inline-flex items-center px-3 py-1 bg-[#234A31]/10 text-[#234A31] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                GOVERNANCE & TRANSPARENCY
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] text-stone-900 leading-[1.12] tracking-tight font-bold mb-6">
                Penggerak<br />
                Roda Desa &<br />
                <span className="text-[#234A31]">Transparansi.</span>
              </h1>

              <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-lg mb-8 font-sans">
                Pemerintah Desa Air Putih berkomitmen melayani dengan transparan, menjunjung akuntabilitas, dan menghadirkan informasi publik yang terbuka untuk semua warga.
              </p>

            </div>

            {/* Right Column: Hero Visual with Building & Botanical Line Art */}
            <div className="lg:col-span-6 relative h-[280px] sm:h-[360px] md:h-[440px] flex items-center justify-center">
              
              {/* Botanical SVG Motif */}
              <div className="absolute -top-6 -left-8 w-32 h-32 pointer-events-none opacity-25 text-[#234A31] z-20">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path d="M20,90 Q40,50 80,20 M40,65 Q60,60 70,45 M30,78 Q50,80 65,70 M60,35 Q75,30 85,15" strokeLinecap="round" />
                  <path d="M45,60 C50,55 55,55 60,60 C55,65 50,65 45,60 Z" fill="currentColor" fillOpacity="0.3" />
                  <path d="M65,40 C70,35 75,35 80,40 C75,45 70,45 65,40 Z" fill="currentColor" fillOpacity="0.3" />
                </svg>
              </div>

              {/* Building Image Container */}
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-md relative bg-stone-200 border border-stone-200/90">
                <img 
                  src="/images/home/home_hero_01.webp" 
                  alt="Kantor Desa Air Putih" 
                  className="w-full h-full object-cover object-center scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>

          </div>

          {/* Floating 4 Principles Bar */}
          <div className="w-full bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-sm mt-6 md:-mt-6 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
              {PRINCIPLES.map((principle, idx) => {
                const IconComp = principle.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 px-2 pt-3 sm:pt-0">
                    <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-serif text-sm font-bold text-stone-900 leading-tight">
                        {principle.title}
                      </h3>
                      <p className="text-xs text-stone-500 font-sans mt-0.5 leading-snug">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* 2. QUOTE SECTION */}
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-28">
          <div className="w-full bg-[#F5F2EC] border border-stone-300/80 rounded-3xl p-6 sm:p-10 md:p-14 text-center relative overflow-hidden shadow-sm">
            
            {/* Subtle Hands Botanical Watermark */}
            <div className="absolute right-6 -bottom-6 w-36 h-36 pointer-events-none opacity-20 text-[#234A31]">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                <path d="M15,85 Q35,45 75,15 M35,60 Q55,55 65,40 M25,73 Q45,75 60,65 M55,30 Q70,25 80,10" strokeLinecap="round" />
                <path d="M40,55 C45,50 50,50 55,55 C50,60 45,60 40,55 Z" fill="currentColor" fillOpacity="0.4" />
                <path d="M60,35 C65,30 70,30 75,35 C70,40 65,40 60,35 Z" fill="currentColor" fillOpacity="0.4" />
              </svg>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
              <span className="font-serif text-5xl md:text-6xl text-[#234A31] leading-none mb-3 select-none">
                “
              </span>
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-stone-900 font-bold leading-relaxed tracking-tight mb-4 italic">
                “Menjadi pelayan masyarakat yang tanggap, transparan, dan berakar teguh pada nilai-nilai gotong royong.”
              </blockquote>
              <p className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-semibold">
                Komitmen Pelayanan Desa Air Putih
              </p>
            </div>

          </div>
        </section>

        {/* 3. STRUKTUR PEMERINTAHAN (ORGANIZATIONAL CHART) */}
        <section id="struktur-organisasi" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#234A31]"></span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
                  STRUKTUR PEMERINTAHAN
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-3">
                Penggerak Roda Desa.
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
                Dipimpin oleh Kepala Desa dan dibantu oleh perangkat desa lainnya, pemerintahan beroperasi untuk memastikan seluruh aspek administrasi dan sosial berjalan dengan baik.
              </p>
            </div>

            <button 
              onClick={() => setIsChartModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-300 hover:border-[#234A31] text-stone-800 hover:text-[#234A31] text-xs font-semibold rounded-full shadow-sm transition-all self-start sm:self-auto group"
            >
              <span>Lihat Struktur Penuh</span>
              <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Framed Editorial Organization Chart */}
          <div className="w-full bg-[#EBE7DF] border border-stone-300/80 rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
            
            {/* Header of the Chart Frame */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-300/60">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/logo/logo_inhu.png" 
                  alt="Logo Kabupaten Indragiri Hulu" 
                  className="w-8 h-8 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-xs sm:text-sm font-bold text-stone-900 uppercase">
                    Struktur Organisasi Pemerintahan Desa Air Putih
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">
                    Kecamatan Lubuk Batu Jaya · Kabupaten Indragiri Hulu – Riau
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 bg-white/80 border border-stone-300 text-[10px] font-mono font-bold text-[#234A31] rounded-full">
                PERIODE AKTIF 2025/2026
              </span>
            </div>

            {/* Scrollable / Responsive SVG Container */}
            <div className="w-full overflow-x-auto bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-stone-200/80 shadow-inner">
              <img 
                src="/images/pemerintahan/struktur-perangkat-desa.svg" 
                alt="Struktur Organisasi Perangkat Desa Air Putih"
                className="w-full min-w-[720px] md:min-w-0 h-auto object-contain mx-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/images/pemerintahan/struktur-perangkat-desa.webp';
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-3 px-1 text-[10px] font-mono text-stone-500">
              <span>BAGAN 01 — STRUKTUR ORGANISASI PERANGKAT DESA</span>
              <span className="italic text-stone-400">Geser ke samping untuk melihat seluruh bagan pada layar kecil</span>
            </div>

          </div>

        </section>

        {/* 4. RIWAYAT KEPALA DESA (10 HISTORICAL VILLAGE HEADS) */}
        <section id="riwayat-kepemimpinan" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
          
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#234A31]"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
              RIWAYAT KEPALA DESA
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-8">
            Perjalanan Kepemimpinan
          </h2>

          {/* 10 Heads Timeline Grid / List */}
          <div className="bg-white border border-stone-200/90 rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 divide-y md:divide-y-0 divide-stone-100">
              {villageHistory.kadesList.map((kades, idx) => (
                <div 
                  key={idx}
                  className="pt-4 md:pt-0 flex items-start justify-between gap-3 p-3 rounded-2xl hover:bg-stone-50 transition-colors group"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Number Badge */}
                    <div className="w-8 h-8 rounded-full bg-[#234A31]/10 text-[#234A31] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#234A31] group-hover:text-white transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Name & Role Description */}
                    <div>
                      <h3 className="font-serif text-base font-bold text-stone-900 leading-snug group-hover:text-[#234A31] transition-colors">
                        {kades.name}
                      </h3>
                      <p className="text-xs text-stone-500 font-sans mt-0.5 leading-snug">
                        {kades.desc}
                      </p>
                    </div>
                  </div>

                  {/* Period Tag */}
                  <span className="font-mono text-xs font-semibold text-stone-600 bg-stone-100 group-hover:bg-emerald-50 group-hover:text-[#234A31] px-2.5 py-1 rounded-full shrink-0 self-start transition-colors">
                    {kades.period}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-stone-500 font-sans">
              <span>Masa bakti 10 Kepala Desa definitif & pejabat pelaksana tugas sejak 1993.</span>
              <span className="font-mono text-[11px] text-[#234A31] font-semibold">1993 — Sekarang</span>
            </div>

          </div>

        </section>

        {/* 5. AKSES LAYANAN ADMINISTRASI (4-CARD SYSTEM) */}
        <section id="layanan-administrasi" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
          
          <div className="mb-8 md:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#234A31]"></span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
                AKSES LAYANAN ADMINISTRASI
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-2">
              Mudah, Cepat, Transparan.
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm font-sans">
              Kami hadir untuk memudahkan urusan administrasi dan pelayanan masyarakat.
            </p>
          </div>

          {/* 4 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            {/* Card 1: Jam Layanan */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-stone-100">
                  <div className="w-8 h-8 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-stone-800">
                    Jam Layanan
                  </h3>
                </div>

                <div className="flex flex-col gap-3 text-xs sm:text-sm">
                  {OPERATIONAL_HOURS.map((hour, idx) => (
                    <div key={idx} className={`flex flex-col ${hour.isClosed ? 'text-stone-400' : 'text-stone-700'}`}>
                      <span className="font-medium">{hour.days}</span>
                      <span className="font-mono text-xs font-semibold text-stone-900">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
                Kantor Desa Air Putih
              </div>
            </div>

            {/* Card 2: Layanan Tersedia */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-stone-100">
                  <div className="w-8 h-8 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-stone-800">
                    Layanan Tersedia
                  </h3>
                </div>

                <ul className="flex flex-col gap-2 text-xs text-stone-700">
                  {MAIN_SERVICES.map((srv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#234A31] mt-1.5 shrink-0"></span>
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
                Pelayanan Langsung di Kantor
              </div>
            </div>

            {/* Card 3: Tempat Pelayanan */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-stone-100">
                  <div className="w-8 h-8 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-stone-800">
                    Tempat Pelayanan
                  </h3>
                </div>

                <div className="w-full h-24 rounded-xl overflow-hidden mb-3 bg-stone-200">
                  <img 
                    src="/images/home/home_hero_01.webp" 
                    alt="Kantor Desa Air Putih" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-serif text-xs font-bold text-stone-900 mb-0.5">
                  Kantor Desa Air Putih
                </p>
                <p className="text-[11px] text-stone-600 leading-snug">
                  Jl. Lintas Air Putih No. 21, Kec. Lubuk Batu Jaya, Kab. Inhu – Riau (29358)
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
                Akses Jalan Utama Desa
              </div>
            </div>

            {/* Card 4: Follow Kami */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-stone-100">
                  <div className="w-8 h-8 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-stone-800">
                    Follow Kami
                  </h3>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Tetap terhubung dengan kabar terbaru dan kegiatan Pemerintahan Desa Air Putih.
                </p>

                <div className="flex items-center gap-3">
                  <a 
                    href="https://instagram.com/kkn.airputih.26" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-stone-100 hover:bg-[#234A31] text-stone-700 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Instagram Desa"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  <a 
                    href="https://tiktok.com/@kkn_desa.air.putih" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-stone-100 hover:bg-[#234A31] text-stone-700 hover:text-white flex items-center justify-center transition-colors text-xs font-mono font-bold"
                    aria-label="TikTok Desa"
                  >
                    TT
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
                Media Publikasi Desa
              </div>
            </div>

          </div>

        </section>

      </main>

      {/* FULLSCREEN MODAL FOR ORGANIZATIONAL CHART */}
      {isChartModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8">
          <div className="bg-white rounded-3xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto flex flex-col relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Struktur Organisasi Pemerintahan Desa Air Putih
              </h3>
              <button 
                onClick={() => setIsChartModalOpen(false)}
                className="p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="w-full overflow-x-auto p-4 flex items-center justify-center bg-stone-50 rounded-2xl border border-stone-200">
              <img 
                src="/images/pemerintahan/struktur-perangkat-desa.svg" 
                alt="Struktur Lengkap Perangkat Desa Air Putih"
                className="w-full min-w-[900px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </>
  );
}
