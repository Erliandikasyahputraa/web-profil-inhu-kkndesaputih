import { Section, EditorialImage } from '@/components/ui';
import { ctaContent } from '@/content/homepage/cta';

export function CTA() {
  return (
    <Section variant="default" spacing="none" className="relative w-full h-[60vh] md:h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[#1A1A1A]">
      
      {/* Scene 4: New Transition */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={ctaContent.image} 
          preset="hero"
          overlay="none"
          className="w-full h-full object-cover opacity-80 mix-blend-overlay"
        />
        {/* Deep, moody atmospheric gradient */}
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply pointer-events-none" />
      </div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2] mb-6 drop-shadow-lg">
          &ldquo;{ctaContent.statement}&rdquo;
        </h2>
        
        <div className="w-[1px] h-12 md:h-16 bg-white/30 my-4" />
        
        <p className="text-[9px] md:text-[10px] text-white/70 max-w-sm leading-relaxed tracking-[0.2em] uppercase mt-2">
          {ctaContent.description}
        </p>
      </div>

    </Section>
  );
}
