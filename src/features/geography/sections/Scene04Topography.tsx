import { Section, EditorialImage } from '@/components/ui';

export function Scene04Topography() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start md:items-center">
        
        {/* Left Column: Typography */}
        <div className="w-full md:w-5/12 flex flex-col">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            03 — TOPOGRAFI
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-12 mix-blend-multiply">
            Tanah datar yang subur dan rendah.
          </h2>
          <p className="text-stone-800 text-sm md:text-base leading-[1.8] max-w-sm">
            Sebagian besar wilayah berupa dataran rendah dengan kontur tanah yang landai, sangat mendukung aktivitas pertanian, perkebunan, dan pemukiman.
          </p>
        </div>

        {/* Right Column: Wide Photograph */}
        <div className="w-full md:w-7/12 relative z-10 mt-8 md:mt-0">
          <div className="w-full aspect-[4/3] md:aspect-[16/9] shadow-lg">
            <EditorialImage 
              image={{ src: '/images/potentials/editorial_documentary_landscape_photograph_of_a_traditional_rubber_plantation.png', alt: 'Dataran rendah desa' }}
              preset="landscape"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.2]"
            />
          </div>
        </div>

      </div>
    </Section>
  );
}
