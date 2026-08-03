import { Section, EditorialImage } from '@/components/ui';

export function Scene04WorkingTogether() {
  return (
    <Section variant="default" spacing="none" className="bg-[#EBE7E0] py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        
        <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
          03 — PELAYANAN & GOTONG ROYONG
        </p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] text-stone-900 leading-[1.2] mb-16 mix-blend-multiply max-w-2xl">
          Tumbuh dari kebersamaan.
        </h2>
        
        <div className="w-full aspect-[4/3] md:aspect-[21/9] shadow-xl mt-8 relative">
          <EditorialImage 
            image={{ src: '/images/gallery/editorial_documentary_photograph_of_a_community_gathering_in_desa_air_putih.png', alt: 'Masyarakat bergotong royong' }}
            preset="landscape"
            overlay="none"
            className="w-full h-full object-cover sepia-[0.3] grayscale-[0.2]"
          />
        </div>
        
        <p className="mt-12 text-stone-600 text-sm md:text-base max-w-lg italic font-serif">
          Menyelesaikan masalah bukan dari meja kantor, tetapi dengan turun langsung dan mendengarkan keluh kesah warga.
        </p>

      </div>
    </Section>
  );
}
