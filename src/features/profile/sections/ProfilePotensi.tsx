import { Sprout, Trees, Store, Landmark, Users, Sparkles, CheckCircle2 } from 'lucide-react';

const POTENSI_LIST = [
  {
    icon: Sprout,
    title: "Pertanian",
    description: "Sektor utama dengan komoditas kelapa sawit, palawija, dan aneka tanaman pekarangan mandiri.",
    image: "/images/profil/potensi_pertanian.webp",
    alt: "Pertanian Desa Air Putih"
  },
  {
    icon: Trees,
    title: "Perkebunan",
    description: "Pengelolaan kebun kelapa sawit seluas 1.292 Ha dan karet sebagai penopang ekonomi keluarga.",
    image: "/images/profil/potensi_perkebunan.webp",
    alt: "Perkebunan Desa Air Putih"
  },
  {
    icon: Store,
    title: "Ekonomi dan Produksi",
    description: "Jamur tiram, UMKM, dan Koperasi Unit Desa (KUD) sebagai penggerak kemandirian usaha desa.",
    image: "/images/profil/potensi_ekonomi.webp",
    alt: "Ekonomi dan Produksi Desa Air Putih - Koperasi Unit Desa"
  },
  {
    icon: Landmark,
    title: "Pariwisata Alam",
    description: "Keasrian lanskap alam pedesaan dan suasana guyub yang menghadirkan ketenangan bagi pendatang.",
    image: "/images/profil/potensi_pariwisata.webp",
    alt: "Pariwisata Alam Desa Air Putih"
  },
  {
    icon: Users,
    title: "Gotong Royong",
    description: "Nilai luhur kebersamaan, toleransi, dan kerja bakti yang menjadi kekuatan penggerak pembangunan.",
    image: "/images/profil/potensi_gotong_royong.webp",
    alt: "Gotong Royong Warga Desa"
  }
];

export function ProfilePotensi() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-4 h-0.5 bg-[#234A31]"></span>
        <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
          Potensi & Keunggulan Desa
        </span>
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-8">
        Pilar Kemandirian & Kehidupan Desa
      </h2>

      {/* 5-Column Editorial Cards (Desktop: 5 Columns, Mobile: 2-Column / Scroll) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-10">
        {POTENSI_LIST.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div 
              key={idx}
              className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Image Container with Icon Badge */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-stone-200 relative mb-4">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="w-8 h-8 rounded-full bg-[#234A31] text-white flex items-center justify-center shadow-md absolute bottom-2 left-2 z-10">
                  <IconComp className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-base md:text-lg font-bold text-stone-900 mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed font-sans mt-auto">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Spotlight Showcase: Sentra Jamur Tiram & UMKM Desa */}
      <div className="w-full bg-[#FAF6F0] border border-[#E6DEC8] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#234A31]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Story & Highlights */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#234A31] text-white text-xs font-semibold rounded-full mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>PRODUK UNGGULAN DESA</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-stone-900 font-bold leading-tight mb-4">
              Sentra Budidaya Jamur Tiram & Penguatan UMKM Desa Air Putih
            </h3>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Budidaya jamur tiram segar menjadi salah satu sektor unggulan ekonomi produktif masyarakat Desa Air Putih. Dengan ekosistem yang terawat dan dukungan Koperasi Unit Desa (KUD), kelompok usaha warga menghasilkan jamur tiram berkualitas tinggi yang didistribusikan ke berbagai wilayah sekitar.
            </p>

            {/* 3 Key Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-2">
              <div className="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-xl p-3">
                <CheckCircle2 className="w-4 h-4 text-[#234A31] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-stone-900">Jamur Tiram</span>
                  <span className="text-[10px] text-stone-500 font-sans">Segar & Higienis</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-xl p-3">
                <CheckCircle2 className="w-4 h-4 text-[#234A31] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-stone-900">UMKM Mandiri</span>
                  <span className="text-[10px] text-stone-500 font-sans">Kreatif & Berdaya</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-xl p-3">
                <CheckCircle2 className="w-4 h-4 text-[#234A31] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-stone-900">Koperasi Unit Desa</span>
                  <span className="text-[10px] text-stone-500 font-sans">Jaringan Usaha Bersama</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dual Visual Showcase (Jamur & Stiker Produk) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 items-center">
            
            {/* Image 1: Fresh Oyster Mushroom */}
            <div className="flex flex-col gap-2">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-stone-200 border border-stone-200 relative group">
                <img 
                  src="/images/profil/jamur_tiram.webp" 
                  alt="Budidaya Jamur Tiram Segar Desa Air Putih" 
                  width={800}
                  height={1067}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] font-semibold text-white leading-tight drop-shadow-sm">
                  Hasil Panen Jamur Tiram
                </span>
              </div>
            </div>

            {/* Image 2: Official Product Label / Poster */}
            <div className="flex flex-col gap-2">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-md bg-white border border-stone-200 p-2 relative group">
                <img 
                  src="/images/profil/poster_jamur.webp" 
                  alt="Poster & Label Kemasan Resmi Jamur Tiram Desa Air Putih" 
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-2 bottom-2 bg-[#234A31]/90 backdrop-blur-sm rounded-lg py-1 px-2 text-center pointer-events-none">
                  <span className="text-[10px] font-semibold text-white tracking-wide">
                    Label Produk Resmi UMKM
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
