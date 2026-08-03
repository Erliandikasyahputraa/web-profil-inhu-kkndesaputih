import { Section, EditorialImage } from '@/components/ui';

export function Scene06Reflection() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] relative min-h-[70vh] md:min-h-screen flex items-center overflow-hidden border-t border-white/5">
      
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={{ src: '/images/hero/cinematic_drone_photography_of_desa_air_putih_riau_indonesia._the_transition.png', alt: 'Desa saat matahari terbenam' }}
          preset="custom"
          overlay="none"
          className="w-full h-full object-cover opacity-30 grayscale sepia-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 px-6 py-32 flex flex-col items-center md:items-start text-center md:text-left">
        
        <p className="font-serif text-3xl md:text-5xl lg:text-[4rem] text-white/90 leading-[1.2] italic tracking-tight mb-8">
          &ldquo;Pemerintahan yang baik bukan hanya tentang aturan. Ia tumbuh dari kepercayaan dan kebersamaan.&rdquo;
        </p>
        
        <div className="w-12 md:w-16 h-[1px] bg-white/20 mt-4" />
      </div>

    </Section>
  );
}
