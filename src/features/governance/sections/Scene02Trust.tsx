import { Section, EditorialImage } from '@/components/ui';

export function Scene02Trust() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start md:items-center">
        
        {/* Left Column: Typography */}
        <div className="w-full md:w-5/12 flex flex-col relative z-20">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            01 — KOMITMEN KAMI
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-12 mix-blend-multiply max-w-md">
            Amanah adalah dasar setiap langkah kami.
          </h2>
          <p className="text-stone-800 text-sm md:text-base leading-[1.8] max-w-sm">
            Kami berkomitmen untuk menjalankan pemerintahan desa dengan transparan, adil, dan selalu berpihak pada masyarakat. Setiap keputusan kami ambil bersama, untuk kebaikan bersama.
          </p>
          
          {/* Decorative Leaf Graphic */}
          <div className="absolute top-0 -left-12 md:-left-32 w-24 md:w-48 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-auto text-stone-900">
              <path d="M50 200 Q40 100 50 0 M50 150 Q20 120 10 80 Q40 100 50 120 M50 120 Q80 100 90 60 Q60 80 50 100" />
            </svg>
          </div>
        </div>

        {/* Right Column: Documentary Photography */}
        <div className="w-full md:w-7/12 relative z-10 mt-8 md:mt-0">
          <div className="w-full aspect-[4/3] md:aspect-[16/10] shadow-lg">
            <EditorialImage 
              image={{ src: '/images/gallery/editorial_documentary_photograph_of_a_village_discussion_in_desa_air_putih_riau.png', alt: 'Musyawarah Desa' }}
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
