import { Section, EditorialImage } from '@/components/ui';
import { timelineContent } from '@/content/homepage/timeline';

export function Timeline() {
  return (
    <Section variant="default" spacing="none" className="bg-[#EBE7E0] py-24 md:py-40 px-6 border-t border-stone-300/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Scene 5: Memory (The Intimate Look Back) */}
        <div className="text-center mb-24 md:mb-32">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-stone-500 mb-6 font-medium">
            {timelineContent.kicker}
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-stone-900 max-w-3xl mx-auto leading-relaxed">
            &ldquo;{timelineContent.callout.content}&rdquo;
          </h2>
        </div>

        {/* Compressed Chronological Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-10">
          {timelineContent.chapters.map((chapter, idx) => (
            <div key={chapter.id} className={`flex flex-col group ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}>
              <div className="mb-4">
                <span className="font-serif text-3xl md:text-4xl text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
                  {chapter.year}
                </span>
              </div>
              
              <EditorialImage 
                image={chapter.image} 
                preset="portrait"
                overlay="none"
                className="w-full aspect-[4/5] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              
              <div className="mt-6 border-t border-stone-300/60 pt-4">
                <h3 className="font-serif text-lg text-stone-900 mb-2">{chapter.title}</h3>
                <p className="text-[11px] leading-relaxed text-stone-600 line-clamp-3 md:line-clamp-none">
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
