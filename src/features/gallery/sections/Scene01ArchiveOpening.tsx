import { Section, EditorialImage } from '@/components/ui';

export function Scene01ArchiveOpening() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] relative min-h-[60vh] md:min-h-[70vh] flex flex-col items-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={{ src: '/images/hero/cinematic_drone_photography_of_desa_air_putih_riau_indonesia._a_peaceful_river.png', alt: 'Galeri Desa Air Putih' }}
          preset="hero"
          overlay="cinematic"
          className="w-full h-full object-cover scale-105"
        />
        {/* Additional gradient for text legibility at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 h-full flex flex-col justify-end pb-24 md:pb-32 flex-1 mt-32">
        <div className="flex flex-col items-center text-center">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-bold mb-6">
            PHOTO ARCHIVE
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[5rem] text-white leading-[1.1] mb-8">
            Galeri Desa Air Putih
          </h1>
          <div className="w-12 h-[1px] bg-white/20 mb-8" />
          <p className="text-white/70 text-sm md:text-base tracking-wide max-w-md leading-relaxed font-light">
            "Setiap foto adalah potongan kecil dari kehidupan yang terus berjalan."
          </p>
        </div>
      </div>

    </Section>
  );
}
