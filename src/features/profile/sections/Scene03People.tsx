import { Section, EditorialImage } from '@/components/ui';

export function Scene03People() {
  return (
    <Section variant="default" spacing="none" className="bg-[#EBE7E0] py-16 md:py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Left Column: Typography & Illustration */}
        <div className="w-full md:w-5/12 flex flex-col pt-0 md:pt-16">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            04 — WARGA / KEHIDUPAN DESA
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-16 mix-blend-multiply">
            Warga yang sederhana, pekerja keras, dan penuh kehangatan.
          </h2>
          
          <div className="flex flex-row items-center gap-8 relative">
            {/* Simple leaf illustration placeholder (we can use an SVG or image) */}
            <div className="w-24 md:w-32 opacity-30 mix-blend-multiply pointer-events-none">
              <EditorialImage 
                image={{ src: '/images/gallery/hand_drawn_charcoal_illustration_of_a_deep_rooted_banyan_tree_representing_akar.png', alt: 'Ilustrasi daun' }}
                preset="custom"
                overlay="none"
                className="w-full h-auto grayscale"
              />
            </div>
            <p className="text-stone-800 text-xs md:text-sm leading-[1.8] max-w-[200px]">
              Di sini, tangan-tangan ini bekerja, hati-hati ini menjaga, dan senyum-senyum ini menyambut setiap datang dengan tulus.
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Photo Collage */}
        <div className="w-full md:w-7/12 flex flex-col gap-4">
          
          {/* Top Row */}
          <div className="flex flex-row gap-4">
            <div className="w-1/3 aspect-[3/4] shadow-md">
              <EditorialImage 
                image={{ src: '/images/profil/profil_story_03.jpg', alt: 'Warga tersenyum' }}
                preset="portrait"
                overlay="none"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
            <div className="w-2/3 aspect-[16/9] shadow-md">
              <EditorialImage 
                image={{ src: '/images/gallery/landscape/gallery_landscape_02.jpg', alt: 'Warga berkumpul' }}
                preset="landscape"
                overlay="none"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-row gap-4">
            <div className="w-2/3 aspect-[16/9] shadow-md">
              <EditorialImage 
                image={{ src: '/images/gallery/landscape/gallery_landscape_13.jpg', alt: 'Aktivitas di luar' }}
                preset="landscape"
                overlay="none"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
            <div className="w-1/3 aspect-[3/4] shadow-md">
              <EditorialImage 
                image={{ src: '/images/gallery/landscape/gallery_landscape_14.jpg', alt: 'Warga berpose' }}
                preset="portrait"
                overlay="none"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Merged Section 05: Terus bertumbuh */}
      <div className="max-w-7xl mx-auto w-full mt-32 md:mt-48 pt-16 md:pt-32 border-t border-stone-300 flex flex-col md:flex-row gap-16 items-start">
        {/* Text Container */}
        <div className="w-full md:w-5/12 flex flex-col relative z-20">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] text-stone-900 leading-[1.1] mb-10 mix-blend-multiply pr-4">
            Terus bertumbuh, tanpa melupakan akar.
          </h2>
          <p className="text-stone-800 text-sm md:text-base leading-[1.8] max-w-sm">
            Kami terbuka pada perubahan, tetapi tidak pernah melepaskan nilai-nilai yang membuat kami menjadi kami.
          </p>
        </div>

        {/* Large Landscape Image */}
        <div className="w-full md:w-7/12 relative z-10 md:mt-12 md:-ml-8 shadow-2xl">
          <div className="w-full aspect-video md:aspect-[21/9]">
            <EditorialImage
              image={{ src: '/images/profil/profil_content_06.jpg', alt: 'Masa depan Desa Air Putih' }}
              preset="landscape"
              overlay="none"
              className="w-full h-full object-cover sepia-[0.2] grayscale-[0.3]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
