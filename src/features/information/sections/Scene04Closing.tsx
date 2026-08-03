import { Section, EditorialImage } from '@/components/ui';

export function Scene04Closing() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] relative min-h-[40vh] flex items-center overflow-hidden border-t border-white/5">
      
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={{ src: '/images/gallery/editorial_documentary_photograph_of_a_quiet_unpaved_village_road_in_desa_air.png', alt: 'Suasana desa yang tenang' }}
          preset="custom"
          overlay="none"
          className="w-full h-full object-cover opacity-30 grayscale sepia-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 px-6 py-16 md:py-24 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex gap-4">
          <span className="font-serif text-3xl md:text-5xl text-white/40 leading-none">&ldquo;</span>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white/90 leading-[1.3] tracking-tight">
            Informasi yang jelas adalah langkah awal menuju desa yang transparan dan maju.
          </p>
        </div>
      </div>

    </Section>
  );
}
