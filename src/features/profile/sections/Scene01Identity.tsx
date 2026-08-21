import { Section, EditorialImage } from '@/components/ui';

export function Scene01Identity() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] relative min-h-[70vh] md:min-h-screen md:min-h-[85vh] flex items-center overflow-hidden">
      
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <EditorialImage 
          image={{ src: '/images/profil/profil_story_02.jpg', alt: 'Warga Desa Air Putih' }}
          preset="custom"
          overlay="none"
          className="w-full h-full object-cover object-right md:object-center opacity-80 md:w-3/4 md:absolute md:right-0"
        />
        {/* Gradient to blend image into the dark background on the left and bottom */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent md:via-[#1A1A1A]/90 md:to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 px-6 pt-32 pb-24 md:py-32 flex flex-col justify-end md:justify-center h-full">
        
        <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col gap-6 md:gap-8 mt-auto md:mt-0">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-[4.5rem] leading-[1.1] tracking-tight text-white">
            Lebih dari<br />sekadar sebuah desa,<br />ini adalah rumah<br />sebuah kehidupan.
          </h1>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm md:max-w-md">
            Desa Air Putih adalah bagian dari Indragiri Hulu yang tumbuh dari alam, dijaga oleh tradisi, dan dihidupkan oleh warganya.
          </p>
        </div>

      </div>
    </Section>
  );
}
