export function HomeClosing() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="w-full bg-[#1E3A2B] border border-[#2A4E38] rounded-3xl overflow-hidden shadow-md relative min-h-[300px] flex flex-col md:flex-row items-center text-white">
        
        {/* Left Column: Typography & Botanical SVG Art */}
        <div className="w-full md:w-7/12 p-8 sm:p-12 md:p-14 flex flex-col items-start relative z-10">
          
          {/* Subtle Botanical SVG Line Art */}
          <div className="absolute -top-4 -left-4 w-32 h-32 pointer-events-none opacity-15 text-emerald-200">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M15,85 Q35,45 75,15 M35,60 Q55,55 65,40 M25,73 Q45,75 60,65 M55,30 Q70,25 80,10" strokeLinecap="round" />
              <path d="M40,55 C45,50 50,50 55,55 C50,60 45,60 40,55 Z" fill="currentColor" fillOpacity="0.4" />
              <path d="M60,35 C65,30 70,30 75,35 C70,40 65,40 60,35 Z" fill="currentColor" fillOpacity="0.4" />
            </svg>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
            MARI BERSAMA MEMBANGUN<br />
            <span className="text-emerald-300">DESA AIR PUTIH</span>
          </h2>

          <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed max-w-md font-sans">
            Bersama warga, untuk desa yang lebih maju, mandiri, dan sejahtera.
          </p>

        </div>

        {/* Right Column: Organic Group Photo with Soft Gradient Mask */}
        <div className="w-full md:w-5/12 h-[220px] md:h-full md:absolute md:right-0 md:top-0 md:bottom-0 overflow-hidden">
          <img 
            src="/images/kkn/kkn_activity_05.webp" 
            alt="Bersama Warga Desa Air Putih" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Masks */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1E3A2B] via-[#1E3A2B]/40 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
