import { FadeIn } from '@/components/motion';
import { EditorialImage } from '@/components/ui';

export function KehidupanDesaSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Text Content */}
          <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col pt-4 md:pt-12">
            <FadeIn>
              <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-6">
                04 — KEHIDUPAN DESA
              </h2>
              <h3 className="font-serif text-2xl md:text-4xl text-stone-900 leading-[1.3] md:leading-tight mb-6 md:mb-8">
                Alam, pekerjaan, dan kebersamaan menjadi bagian dari kehidupan sehari-hari.
              </h3>
              <p className="text-sm md:text-base text-stone-700 leading-[1.7] mb-6">
                Mayoritas masyarakat kami hidup dari harmoni dengan alam. Dari hamparan perkebunan kelapa sawit hingga keramahan antarwarga, setiap keseharian adalah sebuah upaya untuk menjaga keseimbangan.
              </p>
              <p className="text-sm md:text-base text-stone-700 leading-[1.7]">
                Gotong royong bukanlah sekadar slogan, melainkan detak jantung yang menyatukan setiap keluarga di Desa Air Putih.
              </p>
            </FadeIn>
          </div>

          {/* Photography */}
          <div className="w-full md:w-7/12 lg:w-8/12 grid grid-cols-2 gap-4 md:flex md:flex-row md:gap-6 lg:gap-8">
            <div className="w-full">
              <FadeIn delay={0.2}>
                <EditorialImage 
                  image={{ src: '/images/home/img_7989.webp', alt: 'Aktivitas warga desa' }}
                  preset="portrait"
                  overlay="none"
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
                <p className="text-[10px] uppercase tracking-wider text-stone-400 mt-4 font-mono">
                  Kegiatan gotong royong warga
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full">
              <FadeIn delay={0.4}>
                <EditorialImage 
                  image={{ src: '/images/home/beranda_03.webp', alt: 'Potret warga desa' }}
                  preset="portrait"
                  overlay="none"
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
                <p className="text-[10px] uppercase tracking-wider text-stone-400 mt-4 font-mono">
                  Potret generasi muda Air Putih
                </p>
              </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
