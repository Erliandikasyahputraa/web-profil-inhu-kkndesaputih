import { Section, EditorialImage } from '@/components/ui';

export function Scene03Plantation() {
  return (
    <Section variant="default" spacing="none" className="bg-[#EBE7E0] py-32 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Left Column: Wide Image */}
        <div className="w-full md:w-7/12 relative z-10">
          <div className="w-full aspect-[16/9] md:aspect-[3/2] shadow-xl">
            <EditorialImage 
              image={{ src: '/images/potentials/editorial_documentary_landscape_photograph_of_a_vast_palm_oil_plantation_in.png', alt: 'Perkebunan Sawit' }}
              preset="custom"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.3]"
            />
          </div>
        </div>

        {/* Right Column: Typography & Small details */}
        <div className="w-full md:w-5/12 flex flex-col pt-4 md:pt-12">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            02 — PERKEBUNAN
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-12 mix-blend-multiply">
            Perkebunan yang menggerakkan ekonomi.
          </h2>
          <p className="text-stone-800 text-sm md:text-base leading-[1.8] max-w-sm mb-16">
            Kelapa sawit, karet, dan tanaman lainnya menjadi sumber penghidupan utama yang menggerakkan perekonomian desa dan menopang masa depan keluarga.
          </p>
          
          {/* Subtle Line Icons (Swiss Style) */}
          <div className="flex gap-8 border-t border-stone-300 pt-8 opacity-70 mix-blend-multiply">
            
            <div className="flex flex-col gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
                <path d="M12 22 V10" />
                <path d="M12 10 Q16 4 20 6 Q16 10 12 10" />
                <path d="M12 14 Q8 10 4 12 Q8 16 12 14" />
                <path d="M12 18 Q18 14 20 18 Q16 20 12 18" />
              </svg>
              <div>
                <p className="text-[10px] font-bold tracking-wider text-stone-900">Kelapa Sawit</p>
                <p className="text-[9px] text-stone-500">Komoditas utama</p>
              </div>
            </div>

            <div className="w-[1px] h-12 bg-stone-300" />
            
            <div className="flex flex-col gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
                <path d="M12 22 V6" />
                <circle cx="12" cy="6" r="3" />
                <path d="M12 12 Q16 10 18 6" />
                <path d="M12 16 Q8 14 6 10" />
              </svg>
              <div>
                <p className="text-[10px] font-bold tracking-wider text-stone-900">Karet</p>
                <p className="text-[9px] text-stone-500">Sumber pendapatan</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
}
