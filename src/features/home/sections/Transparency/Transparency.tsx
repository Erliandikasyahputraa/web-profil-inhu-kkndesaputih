import { Section, EditorialImage } from '@/components/ui';
import { transparencyContent } from '@/content/homepage/transparency';

export function Transparency() {
  return (
    <Section variant="default" spacing="none" className="bg-[#EBE7E0] py-24 md:py-40 px-6 border-t border-stone-300/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Scene 7: The Data Climax */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-stone-500 mb-12 font-medium text-center">
          {transparencyContent.kicker}
        </p>
        
        <div className="text-center w-full max-w-4xl">
          <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] text-stone-900 tracking-tighter leading-[0.9] mb-6">
            {transparencyContent.mainMetric.value}
          </h2>
          <p className="text-xs md:text-sm text-stone-600 uppercase tracking-[0.2em] font-medium mb-24">
            {transparencyContent.mainMetric.label}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full max-w-4xl border-t border-stone-300/60 pt-16">
          {transparencyContent.metrics.map((metric) => (
            <div key={metric.id} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-stone-800 mb-3">{metric.value}</p>
              <p className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Small Anchor Image */}
        <div className="mt-24 md:mt-32 max-w-sm w-full mx-auto relative group">
          <EditorialImage 
            image={transparencyContent.image}
            preset="landscape"
            overlay="none"
            className="w-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <p className="mt-6 text-[10px] md:text-[11px] text-stone-500 uppercase tracking-[0.2em] text-center leading-relaxed">
            {transparencyContent.description}
          </p>
        </div>

      </div>
    </Section>
  );
}
