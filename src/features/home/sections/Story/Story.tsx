import { Section, EditorialImage } from '@/components/ui';
import { storyContent } from '@/content/homepage/story';

export function Story() {
  return (
    <Section variant="default" background="primary" spacing="none" className="min-h-screen flex items-center relative overflow-hidden bg-[#F7F3EE]">
      {/* 
        Scene 2: Silence & Curiosity (The Hook)
        Extreme emptiness. A massive quote. A tiny portrait.
        Warm paper background.
      */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full relative z-10 py-32">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.3] text-center max-w-4xl mx-auto font-normal">
          &ldquo;{storyContent.lead}&rdquo;
        </h2>
      </div>

      {/* Extreme Close Up (Macro) Anchor - Bottom Right */}
      <div className="absolute bottom-12 right-12 w-32 md:w-48 lg:w-64 z-0 hidden sm:block opacity-90">
        <EditorialImage 
          image={storyContent.image} 
          preset="portrait"
          overlay="none"
          className="shadow-xl"
        />
        <p className="mt-3 text-[9px] md:text-[10px] text-stone-500 uppercase tracking-widest">
          {storyContent.imageCaption}
        </p>
      </div>
    </Section>
  );
}
