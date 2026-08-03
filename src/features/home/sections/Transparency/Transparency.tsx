import { Section } from '@/components/ui';
import { transparencyContent } from '@/content/homepage/transparency';

export function Transparency() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Scene 7: The Data Climax */}
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 mb-16 font-bold text-center">
          07 - {transparencyContent.kicker}
        </p>
        
        <div className="text-center w-full max-w-4xl mb-32">
          <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] text-stone-900 tracking-tighter leading-[0.9] mb-8 mix-blend-multiply">
            {transparencyContent.mainMetric.value}
          </h2>
          <p className="text-[10px] md:text-sm text-stone-600 uppercase tracking-[0.3em] font-medium">
            {transparencyContent.mainMetric.label}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full max-w-3xl">
          {transparencyContent.metrics.map((metric) => (
            <div key={metric.id} className="text-center flex flex-col gap-4">
              <p className="font-serif text-5xl md:text-6xl text-stone-900">{metric.value}</p>
              <div className="w-8 h-[1px] bg-stone-900/20 mx-auto" />
              <p className="text-[9px] md:text-[10px] text-stone-500 uppercase tracking-widest">{metric.label}</p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
