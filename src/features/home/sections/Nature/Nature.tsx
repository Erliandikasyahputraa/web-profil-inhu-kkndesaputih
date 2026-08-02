import { Section, EditorialImage } from '@/components/ui';
import { natureContent } from '@/content/homepage/nature';

export function Nature() {
  return (
    <Section variant="default" spacing="none" background="primary" className="relative w-full h-[60vh] md:h-[80vh] flex flex-col justify-end bg-[#F7F3EE]">
      {/* 
        Scene 3: The Cinematic Pause (The Void)
        A wide landscape shot. Total immersion. Breathing room.
      */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={natureContent.image} 
          preset="landscape"
          overlay="none"
        />
      </div>

      {/* Unanchored Caption */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-8 md:pb-12 flex justify-end">
        <p className="text-[10px] md:text-xs text-stone-100 uppercase tracking-[0.2em] max-w-xs text-right font-medium drop-shadow-sm">
          {natureContent.callout.content}
        </p>
      </div>
    </Section>
  );
}
