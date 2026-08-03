import { Section, EditorialImage } from '@/components/ui';

export function Scene03Boundaries() {
  return (
    <Section variant="default" spacing="none" className="bg-[#EBE7E0] py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Left Column: Landscape Photograph */}
        <div className="w-full md:w-1/2 relative z-10 order-2 md:order-1">
          <div className="w-full aspect-video md:aspect-[4/3] shadow-xl">
            <EditorialImage 
              image={{ src: '/images/gallery/editorial_documentary_photograph_of_a_traditional_wooden_house_rumah_panggung.png', alt: 'Perbatasan sungai desa' }}
              preset="landscape"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.3] grayscale-[0.6]"
            />
          </div>
        </div>

        {/* Right Column: Typography & Boundaries */}
        <div className="w-full md:w-1/2 flex flex-col pt-0 md:pt-12 order-1 md:order-2">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            02 — BATAS WILAYAH
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-16 mix-blend-multiply max-w-md">
            Berbatasan dengan desa dan alam sekitarnya.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { direction: 'Utara', location: 'Desa Sungai Bela' },
              { direction: 'Timur', location: 'Desa Kuala Selat' },
              { direction: 'Barat', location: 'Desa Tanjung Simpang' },
              { direction: 'Selatan', location: 'Desa Teluk Pinang' }
            ].map((boundary, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full border border-stone-400 flex items-center justify-center flex-shrink-0 text-stone-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">{boundary.direction}</span>
                  <span className="text-sm text-stone-900 font-serif">{boundary.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
