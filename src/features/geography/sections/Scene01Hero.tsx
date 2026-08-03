import { Section, EditorialImage } from '@/components/ui';

export function Scene01Hero() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={{ src: '/images/hero/cinematic_drone_photography_of_desa_air_putih_riau_indonesia._a_peaceful_river.png', alt: 'Sungai berkabut di pagi hari' }}
          preset="custom"
          overlay="none"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1A1A]/90 via-[#1A1A1A]/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 px-6 pt-32 pb-24 md:py-32 flex flex-col justify-end md:justify-center h-full">
        
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 mt-auto md:mt-0">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight text-white">
            Geografi<br />Desa Air Putih
          </h1>
          <div className="w-16 md:w-24 h-[1px] bg-white/30 my-2" />
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm">
            Bentang alam yang membentuk kehidupan, mengalirkan sumber daya, dan menjaga keseimbangan desa.
          </p>
          
          <div className="mt-12 md:mt-24 flex items-center gap-3 opacity-60">
            <svg width="12" height="24" viewBox="0 0 12 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white animate-bounce">
              <path d="M6 0v22M1 17l5 5 5-5"/>
            </svg>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white font-bold">GULIR</span>
          </div>
        </div>

      </div>
    </Section>
  );
}
