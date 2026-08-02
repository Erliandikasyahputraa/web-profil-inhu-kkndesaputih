import { Section, EditorialImage } from '@/components/ui';
import { potentialsContent } from '@/content/homepage/potentials';

export function Potentials() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F7F3EE] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 md:mb-24 flex items-end justify-between border-b border-stone-300 pb-8">
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 tracking-tight max-w-xl">
            {potentialsContent.title}
          </h2>
          <span className="hidden md:block text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 max-w-xs text-right">
            {potentialsContent.description}
          </span>
        </div>

        {/* Scene 4: Discovery (The Collage) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Main Visual - Spans 7 columns */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <EditorialImage 
              image={potentialsContent.items[0].image}
              preset="custom"
              className="w-full aspect-[4/3] object-cover"
              overlay="none"
            />
            <div className="flex justify-between items-start mt-2">
              <h3 className="font-serif text-xl md:text-2xl text-stone-900">{potentialsContent.items[0].title}</h3>
              <p className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest text-right">
                {potentialsContent.items[0].stats[0].value} {potentialsContent.items[0].stats[0].label}
              </p>
            </div>
          </div>

          {/* Secondary Visuals - Spans 5 columns, staggered down */}
          <div className="md:col-span-5 flex flex-col gap-16 md:mt-32">
            
            <div className="flex flex-col gap-4">
              <EditorialImage 
                image={potentialsContent.items[1].image}
                preset="portrait"
                className="w-full aspect-[3/4] md:aspect-[4/5] object-cover"
                overlay="none"
              />
              <div className="flex justify-between items-start mt-2">
                <h3 className="font-serif text-lg md:text-xl text-stone-900">{potentialsContent.items[1].title}</h3>
                <p className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest text-right">
                  {potentialsContent.items[1].stats[0].value} {potentialsContent.items[1].stats[0].label}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <EditorialImage 
                image={potentialsContent.items[2].image}
                preset="landscape"
                className="w-full aspect-[16/9] object-cover"
                overlay="none"
              />
              <div className="flex justify-between items-start mt-2">
                <h3 className="font-serif text-lg md:text-xl text-stone-900">{potentialsContent.items[2].title}</h3>
                <p className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest text-right">
                  {potentialsContent.items[2].stats[0].value} {potentialsContent.items[2].stats[0].label}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </Section>
  );
}
