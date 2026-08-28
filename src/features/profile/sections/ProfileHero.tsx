import { Compass, Users, Home, Layers } from 'lucide-react';

export function ProfileHero() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 pt-4 md:pt-8 mb-16 md:mb-24">
      
      {/* Top Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative min-h-[480px] lg:min-h-[540px]">
        
        {/* Left Column: Heading & Subtitle */}
        <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start z-10 pr-0 md:pr-4">
          
          <div className="inline-flex items-center px-3 py-1 bg-[#234A31]/10 text-[#234A31] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            PROFIL DESA
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] text-stone-900 leading-[1.12] tracking-tight font-bold mb-6">
            Mengenal<br />
            <span className="text-[#234A31]">Desa Air Putih.</span>
          </h1>

          <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-lg mb-6 font-sans">
            Desa yang agamis, sejahtera melalui pengentasan kemiskinan, pemerataan pembangunan, dan memajukan pendidikan di Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Riau.
          </p>

        </div>

        {/* Right Column: Hero Visual with Organic Edge & Botanical Motif */}
        <div className="md:col-span-6 lg:col-span-6 relative h-[300px] sm:h-[380px] md:h-[460px] flex items-center justify-center">
          
          {/* Botanical SVG Line Art */}
          <div className="absolute -top-6 -left-8 w-32 h-32 pointer-events-none opacity-25 text-[#234A31] z-20">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M20,90 Q40,50 80,20 M40,65 Q60,60 70,45 M30,78 Q50,80 65,70 M60,35 Q75,30 85,15" strokeLinecap="round" />
              <path d="M45,60 C50,55 55,55 60,60 C55,65 50,65 45,60 Z" fill="currentColor" fillOpacity="0.3" />
              <path d="M65,40 C70,35 75,35 80,40 C75,45 70,45 65,40 Z" fill="currentColor" fillOpacity="0.3" />
            </svg>
          </div>

          {/* Hero Image Container */}
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-md relative bg-stone-200 border border-stone-200/90">
            <img 
              src="/images/home/home_hero_01.webp" 
              alt="Desa Air Putih" 
              className="w-full h-full object-cover object-center scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

      </div>

      {/* Floating 4-Statistic Strip */}
      <div className="w-full bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-sm mt-6 md:-mt-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          
          {/* Stat 1: Luas Wilayah */}
          <div className="flex items-center gap-3.5 px-2 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono font-medium">Luas Wilayah</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-xl sm:text-2xl font-bold text-stone-900">1.692</span>
                <span className="text-xs text-stone-500 font-sans">Hektar</span>
              </div>
            </div>
          </div>

          {/* Stat 2: Jumlah Penduduk */}
          <div className="flex items-center gap-3.5 px-2 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono font-medium">Jumlah Penduduk</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-xl sm:text-2xl font-bold text-stone-900">4.185</span>
                <span className="text-xs text-stone-500 font-sans">Jiwa (1.260 KK)</span>
              </div>
            </div>
          </div>

          {/* Stat 3: Jumlah Dusun */}
          <div className="flex items-center gap-3.5 px-2 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono font-medium">Jumlah Dusun</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-xl sm:text-2xl font-bold text-stone-900">5</span>
                <span className="text-xs text-stone-500 font-sans">Dusun</span>
              </div>
            </div>
          </div>

          {/* Stat 4: Jumlah RT / RW */}
          <div className="flex items-center gap-3.5 px-2 pt-2 sm:pt-0">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono font-medium">Pembagian Rukun</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-xl sm:text-2xl font-bold text-stone-900">28</span>
                <span className="text-xs text-stone-500 font-sans">RT / 5 RW</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
