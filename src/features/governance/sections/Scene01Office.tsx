import { Section, EditorialImage } from '@/components/ui';

export function Scene01Office() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={{ src: '/images/hero/top_down_orthographic_drone_photograph_of_the_village_office_kantor_desa_in.png', alt: 'Kantor Desa Air Putih' }}
          preset="custom"
          overlay="none"
          className="w-full h-full object-cover opacity-60 sepia-[0.2]"
        />
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 md:via-[#1A1A1A]/60 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 px-6 pt-32 pb-24 md:py-32 flex flex-col justify-end md:justify-center h-full">
        
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 mt-auto md:mt-0">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight text-white">
            Pemerintahan<br />yang Melayani
          </h1>
          <div className="w-16 md:w-24 h-[1px] bg-white/30 my-2" />
          <p className="text-white/80 text-sm md:text-base leading-[1.8] max-w-md">
            Pemerintahan Desa Air Putih bekerja bersama warga, mengelola amanah, dan membangun masa depan desa dengan cara yang terbuka dan bertanggung jawab.
          </p>
          
          <div className="mt-12 md:mt-24 flex items-center gap-4 opacity-60">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white font-bold">01 — KOMITMEN KAMI</span>
            <svg width="12" height="24" viewBox="0 0 12 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white animate-bounce mt-1">
              <path d="M6 0v22M1 17l5 5 5-5"/>
            </svg>
          </div>
        </div>

      </div>
    </Section>
  );
}
