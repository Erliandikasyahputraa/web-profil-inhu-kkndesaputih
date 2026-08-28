export function HomeAbout() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-16 md:mb-24 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold mb-4">
          TENTANG DESA AIR PUTIH
        </span>

        <p className="font-serif text-lg sm:text-xl md:text-2xl text-stone-800 leading-relaxed font-medium mb-6">
          Desa Air Putih terletak di Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Provinsi Riau. Terbentuk dari semangat kebersamaan warga untuk membangun desa yang mandiri, sejahtera, dan berdaya saing.
        </p>

        {/* Subtle Botanical SVG Line Art Divider */}
        <div className="w-24 h-6 text-[#234A31] opacity-30 flex items-center justify-center">
          <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M10,10 Q30,5 50,10 T90,10" strokeLinecap="round" />
            <path d="M45,7 C50,2 55,2 60,7 C55,12 50,12 45,7 Z" fill="currentColor" fillOpacity="0.4" />
          </svg>
        </div>

      </div>
    </section>
  );
}
