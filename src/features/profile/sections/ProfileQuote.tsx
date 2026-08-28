export function ProfileQuote() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="w-full bg-[#F5F2EC] border border-stone-300/80 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-sm">
        
        {/* Subtle Botanical SVG Line Art */}
        <div className="absolute right-6 -bottom-6 w-36 h-36 pointer-events-none opacity-20 text-[#234A31]">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M15,85 Q35,45 75,15 M35,60 Q55,55 65,40 M25,73 Q45,75 60,65 M55,30 Q70,25 80,10" strokeLinecap="round" />
            <path d="M40,55 C45,50 50,50 55,55 C50,60 45,60 40,55 Z" fill="currentColor" fillOpacity="0.4" />
            <path d="M60,35 C65,30 70,30 75,35 C70,40 65,40 60,35 Z" fill="currentColor" fillOpacity="0.4" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
          
          <span className="font-serif text-5xl md:text-6xl text-[#234A31] leading-none mb-4 select-none">
            “
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-bold leading-snug tracking-tight mb-6">
            “Bersama membangun Desa Air Putih yang lebih baik, berlandaskan iman, ilmu, dan gotong royong.”
          </blockquote>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-stone-500 font-mono font-medium">
            <span>Desa Air Putih</span>
            <span>·</span>
            <span>Kecamatan Lubuk Batu Jaya</span>
          </div>

        </div>

      </div>
    </section>
  );
}
