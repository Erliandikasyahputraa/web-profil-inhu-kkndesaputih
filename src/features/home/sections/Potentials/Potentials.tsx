import { Section, EditorialImage } from '@/components/ui';
import { potentialsContent } from '@/content/homepage/potentials';

export function Potentials() {
  const [dominant, support1, support2] = potentialsContent.items;

  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-16 md:py-24 md:py-20 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-8">
        
        {/* Oversized Title - Left side, anchors the composition */}
        <div className="w-full md:w-1/3 z-20 relative pt-12 md:pt-24">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-[5.5rem] text-stone-900 leading-[1.1] md:leading-[0.9] tracking-tight mix-blend-multiply">
            Kekayaan<br/>Alam &<br/>Kearifan.
          </h2>
          <div className="mt-16 md:mt-32">
            <a href={potentialsContent.cta.href} className="text-[10px] uppercase tracking-[0.2em] text-stone-900 font-bold flex items-center gap-4 group hover:opacity-70 transition-opacity">
              <span className="w-8 h-[1px] bg-stone-900 group-hover:w-12 transition-all duration-300" />
              {potentialsContent.cta.label}
            </a>
          </div>
        </div>

        {/* Diagonal Interconnected Cluster - Right side */}
        <div className="w-full md:w-2/3 relative h-[70vh] md:h-[90vh]">
          
          {/* Support 1 (Top Left of cluster) */}
          <div className="absolute top-0 left-0 md:left-[10%] w-[45%] md:w-[35%] aspect-[3/4] shadow-xl z-20 hover:z-40 transition-all duration-500">
            <EditorialImage 
              image={support1.image}
              preset="portrait"
              overlay="none"
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>

          {/* Dominant Image (Center Right, Largest) */}
          <div className="absolute top-[15%] md:top-[20%] right-0 w-[75%] md:w-[65%] aspect-[4/3] shadow-2xl z-10">
            <EditorialImage 
              image={dominant.image}
              preset="landscape"
              overlay="none"
              className="w-full h-full object-cover"
            />
            {/* Tiny Caption */}
            <div className="absolute -bottom-6 right-0 text-right">
              <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold">
                {dominant.title}
              </span>
            </div>
          </div>
          
          {/* Support 2 (Bottom Left, overlapping dominant) */}
          <div className="absolute bottom-[10%] left-[10%] md:left-[20%] w-[40%] md:w-[30%] aspect-square shadow-xl z-30 border-4 border-[#F2EFE9] hover:z-40 transition-all duration-500">
            <EditorialImage 
              image={support2.image}
              preset="custom"
              overlay="none"
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>
          
        </div>

      </div>
    </Section>
  );
}
