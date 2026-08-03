import { Section, EditorialImage } from '@/components/ui';

export function Scene05IdentityToday() {
  return (
    <>
      <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-32 md:py-48 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 items-start">

          {/* Text Container */}
          <div className="w-full md:w-5/12 flex flex-col relative z-20">
            <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
              05 — AIR PUTIH HARI INI
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-stone-900 leading-[1.1] mb-10 mix-blend-multiply pr-4">
              Terus bertumbuh, tanpa melupakan akar.
            </h2>
            <p className="text-stone-800 text-sm md:text-base leading-[1.8] max-w-sm">
              Kami terbuka pada perubahan, tetapi tidak pernah melepaskan nilai-nilai yang membuat kami menjadi kami.
            </p>
          </div>

          {/* Large Landscape Image */}
          <div className="w-full md:w-7/12 relative z-10 mt-16 md:mt-24 md:-ml-8 shadow-2xl">
            <div className="w-full aspect-video md:aspect-[21/9]">
              <EditorialImage
                image={{ src: '/images/potentials/editorial_documentary_landscape_photograph_of_a_traditional_rubber_plantation.png', alt: 'Masa depan Desa Air Putih' }}
                preset="landscape"
                overlay="none"
                className="w-full h-full object-cover sepia-[0.2] grayscale-[0.3]"
              />
            </div>
          </div>

        </div>
      </Section>
    </>
  );
}
