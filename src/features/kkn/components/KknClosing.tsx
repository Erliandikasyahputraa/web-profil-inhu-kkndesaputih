export function KknClosing() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="w-full bg-[#1E3A2B] rounded-3xl overflow-hidden shadow-lg relative border border-[#2B4E3A]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[360px] md:min-h-[400px]">
          
          {/* Left / Center: Quote & Botanical Accent */}
          <div className="lg:col-span-6 p-8 sm:p-10 md:p-14 flex flex-col items-start justify-center relative z-10">
            
            {/* Botanical Line Art SVG */}
            <div className="absolute top-6 left-6 w-28 h-28 pointer-events-none opacity-20 text-white">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                <path d="M15,85 Q35,45 75,15 M35,60 Q55,55 65,40 M25,73 Q45,75 60,65 M55,30 Q70,25 80,10" strokeLinecap="round" />
                <path d="M40,55 C45,50 50,50 55,55 C50,60 45,60 40,55 Z" fill="currentColor" fillOpacity="0.4" />
                <path d="M60,35 C65,30 70,30 75,35 C70,40 65,40 60,35 Z" fill="currentColor" fillOpacity="0.4" />
              </svg>
            </div>

            {/* Giant Quotation Mark */}
            <span className="font-serif text-5xl md:text-6xl text-emerald-300/80 leading-none mb-2 select-none">
              “
            </span>

            {/* Quote Headline */}
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-[1.25] tracking-tight mb-6">
              “Mengabdi Dengan Hati,<br />
              Menginspirasi Dengan Aksi.”
            </blockquote>

            {/* Signature / Subtitle */}
            <p className="text-emerald-200/80 text-xs sm:text-sm uppercase tracking-[0.2em] font-mono font-medium">
              Desa Air Putih 2026
            </p>

            {/* Social Link Badges */}
            <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-white/10 text-[11px] font-mono text-emerald-100/70">
              <a 
                href="https://instagram.com/kkn.airputih.26" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors"
              >
                IG: @kkn.airputih.26
              </a>
              <span>·</span>
              <a 
                href="https://tiktok.com/@kkn_desa.air.putih" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors"
              >
                TikTok: @kkn_desa.air.putih
              </a>
            </div>

          </div>

          {/* Right: Group Photo with Organic Integration */}
          <div className="lg:col-span-6 h-[260px] sm:h-[320px] lg:h-full relative overflow-hidden bg-stone-900">
            <img 
              src="/images/kkn/kkn_activity_05.webp" 
              alt="Dokumentasi KKN bersama Masyarakat Desa Air Putih" 
              className="w-full h-full object-cover object-center"
            />
            {/* Desktop Left Fade Mask */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1E3A2B] to-transparent pointer-events-none" />
            {/* Mobile Top Fade Mask */}
            <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1E3A2B] to-transparent pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
