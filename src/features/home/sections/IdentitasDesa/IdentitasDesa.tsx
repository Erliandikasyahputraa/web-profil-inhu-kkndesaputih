import { FadeIn } from '@/components/motion';
import { EditorialImage } from '@/components/ui';

export function IdentitasDesa() {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-6">
              02 — IDENTITAS DESA
            </h2>
            <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl text-stone-900 leading-[1.4] md:leading-tight">
              Di bawah naungan pepohonan rindang dan aliran sungai yang tak pernah lelah, Desa Air Putih menyimpan cerita tentang kesederhanaan dan ketangguhan.
            </h3>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-5/12">
            <FadeIn delay={0.3}>
              <EditorialImage 
                image={{ src: '/images/home/beranda_01.webp', alt: 'Kehidupan Desa Air Putih' }}
                preset="landscape"
                overlay="none"
                className="w-full h-auto aspect-[4/3] md:aspect-auto md:h-[400px] object-cover"
              />
            </FadeIn>
          </div>
          
          <div className="w-full md:w-5/12 flex flex-col justify-center">
            <FadeIn delay={0.4}>
              <p className="text-stone-700 text-sm md:text-base lg:text-lg leading-[1.7]">
                Jauh dari hiruk-pikuk kota besar, desa kami bertumbuh bersama alam. Masyarakat yang ramah, udara yang sejuk, dan semangat gotong royong adalah identitas utama yang selalu kami rawat.
              </p>
              <div className="mt-8 border-t border-stone-300 pt-4 w-12"></div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 mt-4">
                URAT NADI KEHIDUPAN DESA
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
