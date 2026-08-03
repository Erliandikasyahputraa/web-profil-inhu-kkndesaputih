import { Section, EditorialImage } from '@/components/ui';
import { galleryContent } from '@/content/homepage/gallery';

export function Gallery() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative">
        
        {/* Title / Context */}
        <div className="mb-16 md:mb-32 md:text-center relative z-20">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-900 font-bold mb-6">
            06 - {galleryContent.kicker}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 md:max-w-4xl md:mx-auto leading-[1.2] font-normal">
            &ldquo;{galleryContent.callout.content}&rdquo;
          </h2>
        </div>

        {/* The Collage */}
        <div className="relative w-full h-[60vh] md:h-[90vh] flex justify-center items-center mt-8">
          
          {/* Base Image (Large, Center-ish) */}
          <div className="absolute top-[10%] left-[5%] md:left-[10%] w-[70%] md:w-[60%] aspect-[4/3] shadow-2xl z-10">
            <EditorialImage 
              image={galleryContent.images[0].image}
              preset="landscape"
              className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
              overlay="none"
            />
          </div>

          {/* Overlapping Image 1 (Small, Top Right, Rotated) */}
          <div className="absolute top-0 right-[5%] md:right-[15%] w-[35%] md:w-[25%] aspect-[3/4] shadow-xl z-20 rotate-[3deg] p-2 bg-[#F8F6F3]">
            <EditorialImage 
              image={galleryContent.images[1].image}
              preset="portrait"
              className="w-full h-full object-cover grayscale mix-blend-multiply"
              overlay="none"
            />
          </div>

          {/* Overlapping Image 2 (Wide, Bottom Left) */}
          <div className="absolute bottom-[5%] left-0 md:left-[5%] w-[60%] md:w-[45%] aspect-[16/9] shadow-2xl z-30 -rotate-[1deg]">
            <EditorialImage 
              image={galleryContent.images[2].image}
              preset="landscape"
              className="w-full h-full object-cover"
              overlay="none"
            />
          </div>

          {/* Overlapping Image 3 (Portrait, Bottom Right, Very Front) */}
          <div className="absolute bottom-[10%] md:bottom-[15%] right-0 md:right-[10%] w-[40%] md:w-[30%] aspect-[4/5] shadow-2xl z-40 p-3 bg-white rotate-[-2deg]">
            <EditorialImage 
              image={galleryContent.images[3].image}
              preset="portrait"
              className="w-full h-full object-cover"
              overlay="none"
            />
          </div>

        </div>

        {/* Explore CTA */}
        <div className="mt-24 md:mt-40 text-center relative z-20">
          <a href={galleryContent.cta.href} className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-stone-900 font-bold hover:opacity-70 transition-opacity">
            {galleryContent.cta.label}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>

      </div>
    </Section>
  );
}
