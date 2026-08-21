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
              <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight mb-8">
                Alam, pekerjaan, dan kebersamaan menjadi bagian dari kehidupan sehari-hari.
              </h3>
              <p className="text-stone-700 leading-relaxed mb-6">
                Mayoritas masyarakat kami hidup dari harmoni dengan alam. Dari perkebunan karet hingga aktivitas di sungai, setiap keseharian adalah sebuah upaya untuk menjaga keseimbangan.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Gotong royong bukanlah sekadar slogan, melainkan detak jantung yang menyatukan setiap keluarga di Desa Air Putih.
              </p>
            </FadeIn>
          </div>

          {/* Photography */}
          <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col md:flex-row gap-6 lg:gap-8">
            <div className="w-full md:w-1/2 pt-0 md:pt-24">
              <FadeIn delay={0.2}>
                <EditorialImage 
                  image={{ src: '/images/kkn/kkn_activity_07.jpg', alt: 'Aktivitas warga desa' }}
                  preset="landscape"
                  overlay="none"
                  className="w-full max-h-[300px] md:max-h-[400px] object-cover"
                />
                <p className="text-[10px] uppercase tracking-wider text-stone-400 mt-4 font-mono">
                  Kegiatan gotong royong warga
                </p>
              </FadeIn>
            </div>
            
            <div className="w-full md:w-1/2">
              <FadeIn delay={0.4}>
                <EditorialImage 
                  image={{ src: '/images/gallery/landscape/gallery_landscape_02.jpg', alt: 'Potret warga desa' }}
                  preset="portrait"
                  overlay="none"
                  className="w-full max-h-[300px] md:max-h-[500px] object-cover"
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
