import { Section, EditorialImage } from '@/components/ui';

export function Scene05Climate() {
  return (
    <Section variant="default" spacing="none" className="bg-[#EBE7E0] relative overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-screen md:min-h-[90vh]">
        
        {/* Left Column: Typography & Infographic */}
        <div className="w-full md:w-5/12 flex flex-col justify-center px-6 md:px-16 lg:pl-32 py-24 md:py-32 relative z-20">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            04 — IKLIM
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-12 mix-blend-multiply">
            Hangat, lembap, dan bersahabat.
          </h2>
          <p className="text-stone-800 text-sm md:text-base leading-[1.8] max-w-sm mb-16">
            Desa Air Putih beriklim tropis dengan curah hujan yang cukup sepanjang tahun, menciptakan tanah subur dan alam yang selalu hijau.
          </p>
          
          {/* Editorial Infographic */}
          <div className="flex flex-col gap-8 md:gap-12 max-w-sm">
            {/* Curah Hujan */}
            <div className="flex items-center gap-6">
              <div className="w-10 md:w-12 opacity-60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-auto">
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.1em] text-stone-500 font-bold mb-1">Curah Hujan</span>
                <span className="font-serif text-lg md:text-xl text-stone-900">2.000 - 2.500 mm/tahun</span>
              </div>
            </div>
            
            {/* Suhu Rata-rata */}
            <div className="flex items-center gap-6">
              <div className="w-10 md:w-12 opacity-60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-auto">
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.1em] text-stone-500 font-bold mb-1">Suhu Rata-rata</span>
                <span className="font-serif text-lg md:text-xl text-stone-900">25°C - 32°C</span>
              </div>
            </div>
            
            {/* Kelembapan */}
            <div className="flex items-center gap-6">
              <div className="w-10 md:w-12 opacity-60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-auto">
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                  <path d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.1em] text-stone-500 font-bold mb-1">Kelembapan</span>
                <span className="font-serif text-lg md:text-xl text-stone-900">78% - 88%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Fading Photograph */}
        <div className="w-full md:w-7/12 relative z-10 h-[50vh] md:h-auto">
          {/* Gradient to blend image into the background color on the left */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#EBE7E0] via-[#EBE7E0]/60 to-transparent z-20 pointer-events-none" />
          
          <EditorialImage 
            image={{ src: '/images/hero/cinematic_wide_shot_of_a_peaceful_river_in_rural_riau_indonesia_surrounded_by.png', alt: 'Sungai di sore hari' }}
            preset="custom"
            overlay="none"
            className="w-full h-full object-cover sepia-[0.3] grayscale-[0.2]"
          />
        </div>

      </div>
    </Section>
  );
}
