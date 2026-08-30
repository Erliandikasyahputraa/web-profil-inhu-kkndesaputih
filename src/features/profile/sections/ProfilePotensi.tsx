import { Sprout, Trees, Store, Landmark, Users, Sparkles, CheckCircle2, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Column: Story, Value Badges & Trendy Contacts */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#234A31] text-white text-xs font-semibold rounded-full shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>PRODUK UNGGULAN DESA</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 border border-[#234A31]/20 text-[#234A31] text-xs font-semibold rounded-full">
                <span>BUMDes Tunas Mandiri</span>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-stone-900 font-bold leading-tight mb-4">
              Sentra Budidaya Jamur Tiram & Penguatan UMKM Desa Air Putih
            </h3>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Budidaya jamur tiram segar *"Andalan"* menjadi salah satu sektor unggulan ekonomi produktif masyarakat Desa Air Putih. Diproduksi oleh **Kelompok Tani Jamur Tiram "Andalan"** dan didukung oleh **BUMDes "Tunas Mandiri"**, kelompok usaha warga menghasilkan jamur tiram segar berkualitas tinggi yang siap dipesan untuk kebutuhan konsumsi rumah tangga maupun kemitraan usaha.
            </p>

            {/* 3 Key Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-6">
              <div className="flex items-center gap-2.5 bg-white/90 border border-stone-200/80 rounded-xl p-3 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#234A31] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-stone-900">Jamur Tiram</span>
                  <span className="text-[10px] text-stone-500 font-sans">Segar & Higienis</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/90 border border-stone-200/80 rounded-xl p-3 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#234A31] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-stone-900">Kelompok Tani</span>
                  <span className="text-[10px] text-stone-500 font-sans">Produksi Mandiri</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/90 border border-stone-200/80 rounded-xl p-3 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#234A31] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-stone-900">BUMDes</span>
                  <span className="text-[10px] text-stone-500 font-sans">Distribusi & Usaha</span>
                </div>
              </div>
            </div>

            {/* Modern Trendy Order & Contact Hub */}
            <div className="w-full bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono">
                    Kontak Pemesanan & Kemitraan
                  </span>
                </div>
                <span className="text-[10px] text-stone-500 font-mono">
                  BUMDes & Kelompok Tani
                </span>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                
                {/* WhatsApp Option 1 */}
                <a 
                  href="https://wa.me/6285272221898?text=Halo%20Admin%20BUMDes%20Air%20Putih,%20saya%20ingin%20memesan%20Jamur%20Tiram%20Andalan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 px-4 py-2.5 bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:from-[#20bd5a] hover:to-[#19a550] text-white text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] uppercase tracking-wider text-emerald-100 font-mono font-medium">WhatsApp 1</span>
                      <span className="font-semibold text-xs tracking-tight">0852-7222-1898</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* WhatsApp Option 2 */}
                <a 
                  href="https://wa.me/6285274348193?text=Halo%20Kelompok%20Tani%20Jamur%20Tiram%20Air%20Putih,%20saya%20ingin%20memesan%20Jamur%20Tiram%20Andalan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 px-4 py-2.5 bg-stone-900 hover:bg-[#234A31] text-white text-xs font-bold rounded-xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] uppercase tracking-wider text-stone-300 font-mono font-medium">WhatsApp 2</span>
                      <span className="font-semibold text-xs tracking-tight">0852-7434-8193</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

              </div>

              {/* Instagram Channel Badge */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <a 
                  href="https://instagram.com/jamurtiram.andalan.airputih" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-stone-600 hover:text-pink-600 text-xs font-medium transition-colors group"
                >
                  <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <span className="group-hover:underline">@jamurtiram.andalan.airputih</span>
                  <span className="text-stone-400 group-hover:text-pink-600 transition-colors">↗</span>
                </a>
                <span className="text-[10px] text-stone-400 font-mono">Official Instagram</span>
              </div>

            </div>

          </div>

          {/* Right Column: Dual Visual Showcase (Jamur & Stiker Produk Utuh) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
            
            {/* Image 1: Fresh Oyster Mushroom */}
            <div className="flex flex-col gap-2">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-stone-200 border border-stone-200/90 relative group">
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

            {/* Image 2: Official Product Label / Poster (100% Uncropped with Clean Frame) */}
            <div className="flex flex-col gap-2">
              <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-md bg-white border border-stone-300/80 p-2.5 relative group flex items-center justify-center">
                <img 
                  src="/images/profil/poster_jamur.webp" 
                  alt="Poster & Label Kemasan Resmi Jamur Tiram Desa Air Putih" 
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <span className="text-[10px] font-mono font-medium text-stone-500 uppercase tracking-wide">
                  Label Resmi BUMDes & Kelompok Tani
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
