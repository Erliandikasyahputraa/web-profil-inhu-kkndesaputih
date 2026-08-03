import { Section, EditorialImage } from '@/components/ui';

export function Scene01WelcomeDesk() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden">
      
      {/* Background Image with Cinematic Fade */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={{ src: '/images/hero/cinematic_drone_photography_of_desa_air_putih_riau_indonesia._a_peaceful_river.png', alt: 'Pemandangan sungai yang tenang di pagi hari' }}
          preset="custom"
          overlay="none"
          className="w-full h-full object-cover opacity-60 sepia-[0.3]"
        />
        {/* Gradients for text readability and layout structure */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 md:via-[#1A1A1A]/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-6 pt-32 pb-24 md:py-32 flex flex-col md:flex-row md:items-end justify-between h-full gap-12 mt-auto">
        
        {/* Left: Typography */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight text-white mb-2">
            Informasi<br />Desa Air Putih
          </h1>
          <div className="w-16 h-[1px] bg-white/20" />
          <p className="text-white/70 text-sm md:text-base leading-[1.8] max-w-sm">
            Informasi penting, pengumuman, dan layanan bagi masyarakat Desa Air Putih. Semua yang perlu Anda ketahui, dalam satu tempat.
          </p>
        </div>

        {/* Right: Floating Information Card (Jam Pelayanan) */}
        <div className="w-full md:w-[400px] bg-[#EBE7E0] p-8 shadow-2xl relative">
          {/* Subtle decoration */}
          <div className="absolute top-4 right-4 text-stone-400 opacity-50">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6 L12 12 L16 14" />
            </svg>
          </div>
          
          <h3 className="font-serif text-xl text-stone-900 mb-8 mix-blend-multiply">Jam Layanan</h3>
          
          <div className="flex flex-col gap-4 text-sm text-stone-700">
            <div className="flex justify-between border-b border-stone-300 pb-2">
              <span>Senin &ndash; Kamis</span>
              <span className="font-medium">08.00 &ndash; 16.00</span>
            </div>
            <div className="flex justify-between border-b border-stone-300 pb-2">
              <span>Jumat</span>
              <span className="font-medium">08.00 &ndash; 16.30</span>
            </div>
            <div className="flex justify-between border-b border-stone-300 pb-2">
              <span>Sabtu</span>
              <span className="font-medium">08.00 &ndash; 12.00</span>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-stone-300 text-xs text-stone-500 flex justify-between">
            <span>Istirahat</span>
            <span>12.00 &ndash; 13.00</span>
          </div>
        </div>

      </div>
    </Section>
  );
}
