import { Calendar, MapPin, Users, GraduationCap, ArrowRight } from 'lucide-react';
import { kknDocumentation } from '@/content/kkn/documentation';

export function KknHero() {
  const { hero } = kknDocumentation;
  
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 pt-2 md:pt-4 mb-20 md:mb-32">
      
      {/* DESKTOP & TABLET COMPOSITION */}
      <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 items-center relative">
        
        {/* Left Column: Editorial Storytelling */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start z-10 pr-2 lg:pr-4">
          
          {/* Official KKN Logo & Green Badge */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#234A31] shadow-sm bg-white p-0.5 shrink-0">
              <img 
                src="/images/kkn/logo_kkn_airputih.webp" 
                alt="Logo Resmi KKN Tematik Desa Air Putih 2026" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#234A31] text-white text-xs font-semibold rounded-full tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>KKN TEMATIK 2026</span>
            </div>
          </div>

          {/* Editorial Display Heading */}
          <h1 className="font-serif text-3xl lg:text-[3.2rem] xl:text-[3.6rem] text-stone-900 leading-[1.12] tracking-tight font-bold mb-5">
            Mengabdi Dengan Hati,<br />
            <span className="text-[#234A31]">Menginspirasi Dengan Aksi.</span>
          </h1>
          
          {/* Subtitle / Description */}
          <p className="text-stone-600 text-sm lg:text-base leading-relaxed max-w-lg mb-6 font-sans">
            Kuliah Kerja Nyata (KKN) Mahasiswa UIN Sultan Syarif Kasim Riau di Desa Air Putih, Kec. Lubuk Batu Jaya, Kab. Indragiri Hulu.
          </p>

          {/* Primary CTA */}
          <a 
            href="#tentang-kkn"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#234A31] hover:bg-[#1B3A27] text-white text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all group"
          >
            <span>Tentang KKN</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

        </div>

        {/* Right Column: Hero Photography with Natural 16:9 Proportion */}
        <div className="md:col-span-6 lg:col-span-7 relative flex items-center justify-center">
          
          {/* Botanical Line Illustration (SVG) */}
          <div className="absolute -bottom-8 -left-12 w-36 h-36 pointer-events-none opacity-25 text-[#234A31] z-20">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M20,90 Q40,50 80,20 M40,65 Q60,60 70,45 M30,78 Q50,80 65,70 M60,35 Q75,30 85,15" strokeLinecap="round" />
              <path d="M45,60 C50,55 55,55 60,60 C55,65 50,65 45,60 Z" fill="currentColor" fillOpacity="0.3" />
              <path d="M65,40 C70,35 75,35 80,40 C75,45 70,45 65,40 Z" fill="currentColor" fillOpacity="0.3" />
            </svg>
          </div>

          {/* Image Container with Natural 16:9 Aspect Ratio */}
          <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-md relative bg-stone-200 border border-stone-200/80">
            <img 
              src={hero.image.src} 
              srcSet="/images/kkn/kkn_hero_sm.webp 768w, /images/kkn/kkn_hero.webp 1280w"
              sizes="(max-width: 768px) 100vw, 60vw"
              alt={hero.image.alt} 
              width={1280}
              height={720}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle Gradient vignette on bottom for smooth visual integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

      </div>

      {/* Floating 4-Statistic Strip (Full Width Desktop Strip with No Overlap) */}
      <div className="hidden md:block w-full bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-sm mt-6 md:mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          
          {/* Stat 1: Periode */}
          <div className="flex items-center gap-3.5 px-2 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono font-medium">Periode KKN</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-base lg:text-lg font-bold text-stone-900">Jul – Ags 2026</span>
              </div>
            </div>
          </div>

          {/* Stat 2: Lokasi */}
          <div className="flex items-center gap-3.5 px-2 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono font-medium">Lokasi Pengabdian</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-base lg:text-lg font-bold text-stone-900">Desa Air Putih</span>
              </div>
            </div>
          </div>

          {/* Stat 3: Mahasiswa */}
          <div className="flex items-center gap-3.5 px-2 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono font-medium">Jumlah Mahasiswa</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-base lg:text-lg font-bold text-stone-900">10</span>
                <span className="text-xs text-stone-500 font-sans">Orang</span>
              </div>
            </div>
          </div>

          {/* Stat 4: DPL */}
          <div className="flex items-center gap-3.5 px-2 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono font-medium">Dosen Pembimbing</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-base lg:text-lg font-bold text-stone-900">1</span>
                <span className="text-xs text-stone-500 font-sans">Orang DPL</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE COMPOSITION (Specifically designed for mobile screens 375px - 414px) */}
      <div className="flex flex-col md:hidden gap-6">
        
        {/* Top: Hero Image in Rounded Container with Natural 16:9 Aspect Ratio */}
        <div className="w-full rounded-2xl overflow-hidden aspect-[16/9] relative shadow-md bg-stone-200 border border-stone-200">
          <img 
            src="/images/kkn/kkn_hero_sm.webp" 
            srcSet="/images/kkn/kkn_hero_sm.webp 768w, /images/kkn/kkn_hero.webp 1280w"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={hero.image.alt} 
            width={768}
            height={432}
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-3 left-3">
            <div className="inline-flex items-center gap-2 pl-1 pr-3 py-1 bg-[#234A31]/95 backdrop-blur-md text-white text-[10px] font-semibold rounded-full border border-white/20 shadow-md">
              <div className="w-5 h-5 rounded-full overflow-hidden bg-white shrink-0">
                <img 
                  src="/images/kkn/logo_kkn_airputih.webp" 
                  alt="Logo KKN" 
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>KKN TEMATIK 2026</span>
            </div>
          </div>
        </div>

        {/* Middle: Title & Description */}
        <div className="flex flex-col items-start px-1">
          <h1 className="font-serif text-3xl text-stone-900 leading-tight font-bold mb-3">
            Mengabdi Dengan Hati,<br />
            <span className="text-[#234A31]">Menginspirasi Dengan Aksi.</span>
          </h1>
          <p className="text-stone-600 text-xs leading-relaxed font-sans mb-5">
            Kuliah Kerja Nyata (KKN) Mahasiswa UIN Sultan Syarif Kasim Riau di Desa Air Putih, Kec. Lubuk Batu Jaya, Kab. Indragiri Hulu.
          </p>

          {/* Mobile Metadata Card Grid */}
          <div className="w-full bg-white border border-stone-200 rounded-xl p-3.5 shadow-sm mb-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-wider text-stone-400 font-mono">Periode</span>
                  <span className="text-[11px] font-semibold text-stone-800">Jul – Ags 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-wider text-stone-400 font-mono">Lokasi</span>
                  <span className="text-[11px] font-semibold text-stone-800">Desa Air Putih</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-wider text-stone-400 font-mono">Mahasiswa</span>
                  <span className="text-[11px] font-semibold text-stone-800">10 Orang</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-wider text-stone-400 font-mono">DPL</span>
                  <span className="text-[11px] font-semibold text-stone-800">1 Orang</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Full-width CTA Button */}
          <a 
            href="#tentang-kkn"
            className="w-full text-center py-3 bg-[#234A31] text-white text-xs font-semibold rounded-full shadow-sm flex items-center justify-center gap-2"
          >
            <span>Tentang KKN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

        </div>

      </div>

    </section>
  );
}
