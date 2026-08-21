import { Section, EditorialImage } from '@/components/ui';
import { ctaContent } from '@/content/homepage/cta';

export function CTA() {
  return (
    <Section variant="default" spacing="none" className="bg-[#1A1A1A] py-16 md:py-24 md:py-32 px-5 md:px-6">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] md:text-xs text-white/50 font-bold tracking-[0.2em] uppercase mb-4">
            JEJAK KKN
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.2] mb-6">
            &ldquo;{ctaContent.statement}&rdquo;
          </h2>
          <p className="text-[11px] md:text-xs text-white/70 max-w-lg mx-auto leading-relaxed tracking-widest uppercase">
            {ctaContent.description}
          </p>
        </div>

        {/* Mobile: 1 Featured Landscape + 3 Thumbnails */}
        {/* Desktop: We can use the same structured grid layout */}
        <div className="w-full flex flex-col gap-3 md:gap-6">
          {/* Featured */}
          <div className="w-full aspect-video md:aspect-[21/9]">
            <EditorialImage 
              image={ctaContent.image} 
              preset="custom"
              className="w-full h-full object-cover"
              overlay="none"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="w-full grid grid-cols-3 gap-3 md:gap-6">
            <EditorialImage 
              image={{ src: '/images/profil/profil_content_08.jpg', alt: 'Aktivitas KKN 1' }}
              preset="thumbnail"
              className="w-full h-full object-cover"
              overlay="none"
            />
            <EditorialImage 
              image={{ src: '/images/profil/profil_content_09.jpg', alt: 'Aktivitas KKN 2' }}
              preset="thumbnail"
              className="w-full h-full object-cover"
              overlay="none"
            />
            <EditorialImage 
              image={{ src: '/images/kkn/kkn_activity_04.jpg', alt: 'Aktivitas KKN 3' }}
              preset="thumbnail"
              className="w-full h-full object-cover"
              overlay="none"
            />
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex gap-6">
          {ctaContent.actions.map(action => (
            <a key={action.href} href={action.href} className="inline-flex items-center gap-4 text-[11px] md:text-xs uppercase tracking-[0.2em] text-white font-bold hover:text-white/70 transition-colors">
              {action.label}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          ))}
        </div>

      </div>
    </Section>
  );
}
