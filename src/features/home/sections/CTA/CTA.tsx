import { EditorialImage } from '@/components/ui';
import { ctaContent } from '@/content/homepage/cta';

export function CTA() {
  return (
    <section className="relative w-full h-[80vh] flex flex-col justify-end overflow-hidden bg-[#F7F3EE]">
      
      {/* Scene 8: The Call (Closing Shot) */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={ctaContent.image} 
          preset="hero"
          overlay="none"
        />
        {/* Soft light gradient at bottom to ground the text and transition to footer */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EE] via-[#F7F3EE]/50 to-transparent pointer-events-none" />
      </div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-24 md:pb-32">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-stone-900 max-w-3xl leading-[1.15] mb-8">
          &ldquo;{ctaContent.statement}&rdquo;
        </h2>
        
        <p className="text-[11px] md:text-xs text-stone-700 max-w-md leading-relaxed mb-16 tracking-widest uppercase opacity-90">
          {ctaContent.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
          <a href={ctaContent.actions[0].href} className="group flex items-center gap-4 text-xs md:text-sm tracking-[0.2em] uppercase text-stone-900 font-semibold hover:opacity-80 transition-opacity">
            <span className="w-12 h-[1px] bg-stone-900 group-hover:w-20 transition-all duration-500 ease-out" />
            {ctaContent.actions[0].label}
          </a>
          <a href={ctaContent.actions[1].href} className="text-[10px] md:text-xs tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors duration-300 font-medium">
            {ctaContent.actions[1].label}
          </a>
        </div>
      </div>

    </section>
  );
}
