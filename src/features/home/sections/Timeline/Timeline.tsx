import { Section, EditorialImage } from '@/components/ui';
import { timelineContent } from '@/content/homepage/timeline';

export function Timeline() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-24 md:py-32 px-6 border-t border-stone-300/50">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* The Hook */}
        <div className="mb-16 md:mb-32 md:text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-900 font-bold mb-6">
            03 - {timelineContent.kicker}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 md:max-w-4xl md:mx-auto leading-[1.2] font-normal">
            &ldquo;{timelineContent.callout.content}&rdquo;
          </h2>
        </div>

        {/* Desktop: Horizontal Editorial Timeline (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-4 gap-6 lg:gap-10">
          {timelineContent.chapters.map((chapter, idx) => (
            <div key={chapter.id} className={`flex flex-col group ${idx % 2 !== 0 ? 'mt-16 lg:mt-24' : ''}`}>
              <div className="mb-6">
                <span className="font-serif text-3xl lg:text-4xl text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
                  {chapter.year}
                </span>
              </div>
              
              <div className="w-full aspect-[4/5] overflow-hidden">
                <EditorialImage 
                  image={chapter.image} 
                  preset="portrait"
                  overlay="none"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              
              <div className="mt-8 border-t border-stone-900/20 pt-6">
                <h3 className="font-serif text-xl text-stone-900 mb-3">{chapter.title}</h3>
                <p className="text-xs leading-relaxed text-stone-600">
                  {chapter.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Compact Editorial Timeline (hidden on desktop) */}
        <div className="md:hidden flex flex-col gap-6 relative before:absolute before:left-[35px] before:top-4 before:bottom-4 before:w-[1px] before:bg-stone-300/60">
          {timelineContent.chapters.map((chapter) => (
            <div key={chapter.id} className="flex gap-6 items-start relative bg-white/40 p-4 shadow-sm border border-stone-200/50">
              <div className="w-16 h-16 shrink-0 relative bg-stone-100 p-1 shadow-md border border-stone-200 rotate-[-2deg] mt-1 z-10">
                <EditorialImage 
                  image={chapter.image} 
                  preset="portrait"
                  overlay="none"
                  className="w-full h-full object-cover grayscale mix-blend-multiply"
                />
              </div>
              
              <div className="flex-1">
                <span className="font-serif text-2xl text-stone-900 block leading-none mb-1">
                  {chapter.year}
                </span>
                <p className="text-[10px] leading-relaxed text-stone-700 mt-2">
                  {chapter.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
