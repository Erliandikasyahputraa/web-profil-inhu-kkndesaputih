import { Section, EditorialImage } from '@/components/ui';
import { storyContent } from '@/content/homepage/story';

export function Story() {
  return (
    <Section variant="default" spacing="none" className="min-h-screen flex items-center relative overflow-hidden bg-[#F2EFE9] py-24 md:py-32">
      {/* 
        Scene 2: The Quote & The Archive
        A treasured family photograph hanging on an old wall. 
      */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: The Quote */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 relative">
            <span className="font-serif text-6xl md:text-8xl text-stone-900 leading-none absolute -top-8 md:-top-12 -left-4 md:-left-8 opacity-80">
              &ldquo;
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-stone-900 leading-[1.3] font-normal relative z-10 mb-8 md:mb-12">
              {storyContent.lead}
            </h2>
            
            <span className="font-serif text-6xl md:text-8xl text-stone-900 leading-none absolute -bottom-12 left-0 opacity-80">
              &rdquo;
            </span>

            <div className="mt-8 md:mt-16 pt-8 border-t border-stone-900/20 max-w-[200px]">
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-900">
                Urat Nadi Kehidupan Desa
              </p>
            </div>
          </div>

          {/* Right: The Archival Photograph */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative p-3 pb-8 md:p-4 md:pb-12 bg-[#F8F6F3] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-stone-200/60 rotate-[-1deg] md:rotate-[2deg] hover:rotate-0 transition-transform duration-700 ease-out max-w-[400px] w-full">
              <div className="relative aspect-[4/5] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 mix-blend-multiply">
                <EditorialImage 
                  image={storyContent.image} 
                  preset="portrait"
                  overlay="none"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
