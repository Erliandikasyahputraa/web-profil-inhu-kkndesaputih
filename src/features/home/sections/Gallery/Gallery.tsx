import { Section, EditorialImage } from '@/components/ui';
import { galleryContent } from '@/content/homepage/gallery';

export function Gallery() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F7F3EE] py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Scene 6: Visual Evidence (Photo Essay) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Main Full Width */}
          <div className="md:col-span-12">
            <EditorialImage 
              image={galleryContent.images[0].image}
              preset="landscape"
              className="w-full aspect-[16/9] md:aspect-[21/9] object-cover"
              overlay="none"
            />
          </div>

          {/* Staggered Row */}
          <div className="md:col-span-4 mt-8 md:mt-16">
            <EditorialImage 
              image={galleryContent.images[1].image}
              preset="portrait"
              className="w-full aspect-[3/4] object-cover"
              overlay="none"
            />
          </div>

          <div className="md:col-span-4 mt-8 md:mt-32">
            <EditorialImage 
              image={galleryContent.images[2].image}
              preset="custom"
              className="w-full aspect-square object-cover"
              overlay="none"
            />
          </div>

          <div className="md:col-span-4 mt-8 md:mt-12">
            <EditorialImage 
              image={galleryContent.images[3].image}
              preset="portrait"
              className="w-full aspect-[4/5] object-cover"
              overlay="none"
            />
            
            {/* Context Anchor */}
            <div className="mt-12 md:mt-24 border-t border-stone-300 pt-6">
              <p className="text-[10px] md:text-xs text-stone-500 uppercase tracking-[0.2em] leading-relaxed">
                {galleryContent.description}
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-stone-900 mt-6 leading-snug">
                &ldquo;{galleryContent.callout.content}&rdquo;
              </h3>
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
}
