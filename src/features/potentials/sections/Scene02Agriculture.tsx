import { Section, EditorialImage } from '@/components/ui';

export function Scene02Agriculture() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F9F8F6] py-32 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Left Column: Typography */}
        <div className="w-full md:w-5/12 flex flex-col relative z-20">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            01 — PERTANIAN
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-12 mix-blend-multiply">
            Tanah subur, hasil melimpah.
          </h2>
          <p className="text-stone-800 text-sm md:text-base leading-[1.8] max-w-sm mb-16 relative">
            Pertanian menjadi tulang punggung kehidupan warga. Padi, cabai, kelapa, dan berbagai komoditas tumbuh subur di tanah yang terjaga.
            {/* Decorative Rice Vector */}
            <div className="absolute -bottom-24 -right-12 w-48 opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-stone-900">
                <path d="M100 200 C80 150 90 80 150 20 C120 40 110 90 100 150" />
                <path d="M120 70 C140 60 160 50 170 30" />
                <path d="M105 100 C130 90 150 80 160 60" />
                <path d="M95 130 C120 120 140 110 150 90" />
              </svg>
            </div>
          </p>
        </div>

        {/* Right Column: Editorial Collage */}
        <div className="w-full md:w-7/12 flex flex-col md:flex-row gap-4 relative z-10">
          {/* Main Large Photo */}
          <div className="w-full md:w-2/3 aspect-[4/3] md:aspect-auto md:h-[500px]">
            <EditorialImage 
              image={{ src: '/images/people/editorial_documentary_photograph_of_a_farmer_in_desa_air_putih_riau_indonesia..png', alt: 'Petani di ladang' }}
              preset="custom"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.2]"
            />
          </div>
          {/* Secondary Stack */}
          <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4 h-full">
            <div className="w-1/2 md:w-full aspect-[4/3] md:h-[242px]">
              <EditorialImage 
                image={{ src: '/images/potentials/editorial_documentary_photograph_of_the_harvest_season_in_desa_air_putih_riau.png', alt: 'Panen' }}
                preset="custom"
                overlay="none"
                className="w-full h-full object-cover sepia-[0.2]"
              />
            </div>
            <div className="w-1/2 md:w-full aspect-[4/3] md:h-[242px]">
              <EditorialImage 
                image={{ src: '/images/gallery/editorial_documentary_landscape_photograph_of_expansive_rice_fields_at_the_edge.png', alt: 'Hamparan sawah' }}
                preset="custom"
                overlay="none"
                className="w-full h-full object-cover sepia-[0.2]"
              />
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
