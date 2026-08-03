import { Section, EditorialImage } from '@/components/ui';

export function Scene01Abundance() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background Image with Golden Fade */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={{ src: '/images/hero/cinematic_full_width_photograph_of_a_sunset_over_desa_air_putih._warm_golden.png', alt: 'Pemandangan senja keemasan di sungai' }}
          preset="custom"
          overlay="none"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 px-6 pt-32 pb-24 flex flex-col justify-end h-full">
        
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
            POTENSI DESA AIR PUTIH
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] tracking-tight text-white mb-4">
            Kekayaan alam,<br />peluang untuk<br />masa depan.
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-[1.8] max-w-sm border-l border-white/20 pl-6">
            Desa Air Putih dianugerahi alam yang melimpah. Dari tanah yang subur, sungai yang memberi kehidupan, hingga sumber daya yang membuka banyak peluang.
          </p>
        </div>

      </div>
    </Section>
  );
}
