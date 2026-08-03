import { Section, EditorialImage } from '@/components/ui';

export function Scene04to06Grid() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F9F8F6] py-32 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        
        {/* 03 - PERIKANAN */}
        <div className="flex flex-col group">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">
            03 — PERIKANAN
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-stone-900 leading-[1.3] mb-4 mix-blend-multiply pr-4">
            Sungai yang memberi kehidupan.
          </h3>
          <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-8">
            Perikanan air tawar menjadi potensi besar yang terus dijaga dan dikembangkan.
          </p>
          <div className="w-full aspect-[4/3] overflow-hidden mt-auto">
            <EditorialImage 
              image={{ src: '/images/hero/cinematic_drone_photography_of_desa_air_putih_riau_indonesia._an_expansive.png', alt: 'Perikanan sungai' }}
              preset="custom"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.3] group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* 04 - UMKM & KERAJINAN */}
        <div className="flex flex-col group">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">
            04 — UMKM & KERAJINAN
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-stone-900 leading-[1.3] mb-4 mix-blend-multiply pr-4">
            Kreativitas warga, nilai yang berharga.
          </h3>
          <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-8">
            Kerajinan tangan, makanan olahan, dan produk lokal menjadi potensi unggulan yang terus tumbuh bersama kreativitas warga.
          </p>
          <div className="w-full aspect-[4/3] overflow-hidden mt-auto">
            <EditorialImage 
              image={{ src: '/images/potentials/editorial_documentary_photograph_of_a_local_village_umkm_workshop_small_medium.png', alt: 'Kerajinan UMKM' }}
              preset="custom"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.3] group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* 05 - PARIWISATA ALAM */}
        <div className="flex flex-col group">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-6">
            05 — PARIWISATA ALAM
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-stone-900 leading-[1.3] mb-4 mix-blend-multiply pr-4">
            Alam yang indah, pengalaman yang berkesan.
          </h3>
          <p className="text-stone-600 text-xs md:text-sm leading-relaxed mb-8">
            Keindahan alam, budaya, dan keramahan warga menjadi potensi wisata yang menjanjikan.
          </p>
          <div className="w-full aspect-[4/3] overflow-hidden mt-auto">
            <EditorialImage 
              image={{ src: '/images/gallery/editorial_documentary_photograph_of_a_lush_tropical_forest_on_the_outskirts_of.png', alt: 'Pariwisata Alam' }}
              preset="custom"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.3] group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>

      </div>
    </Section>
  );
}
