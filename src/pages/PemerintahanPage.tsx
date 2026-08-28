import { useState } from 'react';
import { PageMetadata } from '@/components/common';
import { 
  HeartHandshake, 
  FileText, 
  Users, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Maximize2,
  X,
  MessageCircle
} from 'lucide-react';
import { villageHistory } from '@/content/village/history';

const PRINCIPLES = [
  {
    icon: HeartHandshake,
    title: "Pelayanan Prima",
    description: "Melayani kebutuhan administrasi warga dengan sigap dan ramah."
  },
  {
    icon: FileText,
    title: "Transparansi",
    description: "Keterbukaan informasi dan akuntabilitas tata kelola desa."
  },
  {
    icon: Users,
    title: "Partisipatif",
    description: "Melibatkan peran aktif masyarakat dalam musyawarah pembangunan."
  },
  {
    icon: ShieldCheck,
    title: "Akuntabel",
    description: "Bertanggung jawab dalam pelaksanaan program dan anggaran desa."
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
  'Surat Keterangan Usaha (SKU)',
  'Surat Keterangan Tidak Mampu (SKTM)',
  'Pengurusan Akta Kelahiran & Kematian'
];

const CONTACT_PERSONS = [
  {
    role: "Kasi Pelayanan",
    name: "Rusli",
    phone: "+62 813-8351-1356",
    waUrl: "https://wa.me/6281383511356",
    desc: "Pelayanan administrasi kependudukan & surat pengantar desa"
  },
  {
    role: "Kasi Pemerintahan",
    name: "Abdul Muttaqin, S.T",
    phone: "+62 823-8736-0261",
    waUrl: "https://wa.me/6282387360261",
    desc: "Konsultasi tata kelola, ketertiban & administrasi pemerintahan"
  }
];

export function PemerintahanPage() {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);

  return (
    <>
      <PageMetadata 
        title="Pemerintahan & Pelayanan Publik | Desa Air Putih" 
        description="Tata kelola pemerintahan Desa Air Putih, struktur organisasi perangkat desa, riwayat kepala desa, dan pusat layanan administrasi warga." 
      />
      
      <main className="flex-1 flex flex-col bg-[#FAF8F5] min-h-screen pt-14 md:pt-16">
        
        {/* 1. HERO SECTION */}
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 pt-2 md:pt-4 mb-16 md:mb-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[480px] lg:min-h-[540px] relative">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 flex flex-col items-start z-10 pr-0 lg:pr-6">
              
              <div className="inline-flex items-center px-3 py-1 bg-[#234A31]/10 text-[#234A31] text-xs font-semibold rounded-full uppercase tracking-wider mb-4 font-mono">
                TATA KELOLA & TRANSPARANSI
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] text-stone-900 leading-[1.12] tracking-tight font-bold mb-6">
                Penggerak<br />
                Roda Desa &<br />
                <span className="text-[#234A31]">Pelayanan Publik.</span>
              </h1>

              <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-lg mb-8 font-sans">
                Pemerintah Desa Air Putih berkomitmen menyelenggarakan tata kelola yang profesional, transparan, dan berorientasi pada kemudahan pelayanan bagi seluruh lapisan masyarakat.
              </p>

            </div>

            {/* Right Column: Hero Visual with Building & Botanical Line Art */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              
              {/* Botanical SVG Motif */}
              <div className="absolute -top-6 -left-8 w-32 h-32 pointer-events-none opacity-25 text-[#234A31] z-20">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path d="M20,90 Q40,50 80,20 M40,65 Q60,60 70,45 M30,78 Q50,80 65,70 M60,35 Q75,30 85,15" strokeLinecap="round" />
                  <path d="M45,60 C50,55 55,55 60,60 C55,65 50,65 45,60 Z" fill="currentColor" fillOpacity="0.3" />
                  <path d="M65,40 C70,35 75,35 80,40 C75,45 70,45 65,40 Z" fill="currentColor" fillOpacity="0.3" />
                </svg>
              </div>

              {/* Building Image Container with Natural 3:2 Proportion */}
              <div className="w-full aspect-[3/2] rounded-3xl overflow-hidden shadow-md relative bg-stone-200 border border-stone-200/90">
                <img 
                  src="/images/pemerintahan/pemerintahan_hero.webp" 
                  srcSet="/images/pemerintahan/pemerintahan_hero_sm.webp 768w, /images/pemerintahan/pemerintahan_hero.webp 1536w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt="Kantor Desa Air Putih" 
                  width={1536}
                  height={1024}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
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
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-16 md:mb-24">
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

        {/* 3. AKSES LAYANAN ADMINISTRASI (PLACED BEFORE STRUKTUR FOR QUICK ACCESS) */}
        <section id="layanan-administrasi" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
          
          <div className="mb-8 md:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#234A31]"></span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
                AKSES LAYANAN ADMINISTRASI
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-2">
              Pusat Layanan Warga.
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm font-sans max-w-2xl">
              Pelayanan administrasi kependudukan dan surat-menyurat resmi desa dipusatkan di Kantor Desa Air Putih pada hari dan jam kerja operasional.
            </p>
          </div>

          {/* 3 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            
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

          </div>

          {/* Kontak Langsung Petugas Layanan (WhatsApp) */}
          <div className="mt-6 bg-[#EBF3ED] border border-[#234A31]/20 rounded-2xl p-5 md:p-7 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#234A31]/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#234A31] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-stone-900">
                    Kontak Layanan & Informasi Cepat (WhatsApp)
                  </h3>
                  <p className="text-xs text-stone-600 font-sans">
                    Hubungi langsung perangkat desa yang bertugas untuk pertanyaan dan konfirmasi administrasi:
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#234A31] bg-white px-3 py-1 rounded-full border border-[#234A31]/20 self-start sm:self-auto">
                RESPON HARI KERJA
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CONTACT_PERSONS.map((cp, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-4 border border-stone-200/80 shadow-xs flex flex-col justify-between gap-3 hover:border-[#234A31]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#234A31] bg-[#234A31]/10 px-2 py-0.5 rounded">
                        {cp.role}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-stone-900 leading-tight">
                      {cp.name}
                    </h4>
                    <p className="text-xs text-stone-500 font-sans mt-0.5">
                      {cp.desc}
                    </p>
                  </div>

                  <a 
                    href={cp.waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-xl shadow-xs transition-all hover:shadow group"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Chat WhatsApp: {cp.phone}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* 4. STRUKTUR PEMERINTAHAN (ORGANIZATIONAL CHART) */}
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
                Bagan Perangkat Desa.
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
                Dipimpin oleh Kepala Desa dan didukung oleh jajaran perangkat desa untuk memastikan operasional pemerintahan, administrasi, dan pembangunan berjalan efektif.
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
                  src="/logo_inhu.png" 
                  alt="Lambang Kabupaten Indragiri Hulu" 
                  className="w-8 h-8 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-xs sm:text-sm font-bold text-stone-900 uppercase">
                    Struktur Organisasi Pemerintah Desa Air Putih
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

            <div className="mt-4 flex items-center justify-between text-[11px] text-stone-500 font-sans px-1">
              <span>* Geser ke samping pada layar ponsel untuk melihat bagan lengkap</span>
              <button 
                onClick={() => setIsChartModalOpen(true)}
                className="text-[#234A31] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Buka Versi Besar</span>
                <span>↗</span>
              </button>
            </div>

          </div>

        </section>

        {/* 5. RIWAYAT KEPALA DESA */}
        <section id="riwayat-kepemimpinan" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
          
          <div className="mb-8 md:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#234A31]"></span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
                HISTORIS & KEPEMIMPINAN
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-3">
              Riwayat Kepala Desa.
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
              Jejak pengabdian para tokoh dan Kepala Desa yang telah mendedikasikan tenaga dan pikiran memimpin masyarakat Desa Air Putih sejak awal berdirinya desa pada tahun 1993 hingga saat ini.
            </p>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {villageHistory.kadesList.map((kades, idx) => (
                <div 
                  key={idx}
                  className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-stone-100 hover:border-stone-300 hover:bg-[#FAF8F5] transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Number Badge */}
                    <div className="w-7 h-7 rounded-full bg-[#234A31]/10 group-hover:bg-[#234A31] text-[#234A31] group-hover:text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors">
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

      </main>

      {/* Modal Lightbox for Fullscreen Organizational Chart */}
      {isChartModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col justify-center items-center p-4 sm:p-6"
          onClick={() => setIsChartModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl p-4 sm:p-6 max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <img 
                  src="/logo_inhu.png" 
                  alt="Lambang Kabupaten Indragiri Hulu" 
                  className="w-6 h-6 object-contain"
                />
                <span className="font-serif text-sm sm:text-base font-bold text-stone-900">
                  Bagan Struktur Organisasi Pemerintah Desa Air Putih
                </span>
              </div>
              <button 
                onClick={() => setIsChartModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors"
                aria-label="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-2 bg-[#F8F6F3] rounded-2xl flex items-center justify-center">
              <img 
                src="/images/pemerintahan/struktur-perangkat-desa.svg" 
                alt="Struktur Organisasi Perangkat Desa Air Putih"
                className="w-full h-auto object-contain max-h-[70vh]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/images/pemerintahan/struktur-perangkat-desa.webp';
                }}
              />
            </div>

            <div className="mt-3 text-right">
              <button
                onClick={() => setIsChartModalOpen(false)}
                className="px-5 py-2 bg-[#1E3A2B] hover:bg-[#152B1F] text-white text-xs font-semibold rounded-full shadow-sm transition-colors"
              >
                Tutup Tampilan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
