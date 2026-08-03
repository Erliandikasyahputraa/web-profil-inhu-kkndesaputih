import { Section, EditorialImage } from '@/components/ui';

export function Scene02Beginning() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Left Column: Typography */}
        <div className="w-full md:w-5/12 flex flex-col pt-0 md:pt-24">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            02 — ASAL USUL
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-12 mix-blend-multiply">
            Berawal dari aliran sungai dan kebersamaan.
          </h2>
          <p className="text-stone-800 text-sm md:text-base leading-[1.8] max-w-sm">
            Dahulu, perahu menjadi jalan, sungai menjadi nadi, dan gotong royong menjadi kekuatan utama. Dari situlah Desa Air Putih berdiri dan bertahan, hingga kini.
          </p>
        </div>

        {/* Right Column: Editorial Photo Collage */}
        <div className="w-full md:w-7/12 relative mt-16 md:mt-0">
          
          {/* Main Large Photo */}
          <div className="w-full aspect-[4/3] md:aspect-[16/10] shadow-xl relative z-10">
            <EditorialImage 
              image={{ src: '/images/history/vintage_historical_documentary_photograph_of_the_original_settlement_of_desa.png', alt: 'Pemukiman Awal Desa' }}
              preset="landscape"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.3] grayscale-[0.8]"
            />
          </div>

          {/* Overlapping Small Framed Photo */}
          <div className="absolute -bottom-12 md:-bottom-24 -left-4 md:-left-16 w-32 md:w-48 aspect-[4/3] bg-[#F9F8F6] p-2 pb-6 md:p-3 md:pb-10 shadow-2xl z-20 rotate-[-2deg]">
            <EditorialImage 
              image={{ src: '/images/history/historical_documentary_photograph_of_the_old_village_well_and_spring_mata_air.png', alt: 'Mata Air Lama' }}
              preset="landscape"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.5] grayscale-[0.9]"
            />
          </div>

          {/* Cursive Caption */}
          <div className="absolute -bottom-16 md:-bottom-20 left-32 md:left-40 z-30 transform rotate-[-4deg]">
            <span className="font-['Caveat',_cursive] italic text-xl md:text-2xl text-stone-600">
              Kisah lama yang<br/>masih diceritakan.
            </span>
          </div>

        </div>

      </div>
    </Section>
  );
}
