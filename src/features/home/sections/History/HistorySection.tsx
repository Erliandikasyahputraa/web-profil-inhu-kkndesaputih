import { FadeIn } from '@/components/motion';
import { EditorialImage } from '@/components/ui';

export function HistorySection() {
  return (
    <section className="w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-24 max-w-3xl">
          <FadeIn>
            <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-6">
              03 — PERJALANAN DESA
            </h2>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight">
              "Setiap jengkal tanah ini menyimpan cerita perjuangan dan doa para pendahulu."
            </h3>
          </FadeIn>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Era 1 */}
          <div className="flex flex-col group">
            <FadeIn delay={0.1}>
              <h4 className="font-serif text-3xl text-stone-400 mb-4 transition-colors group-hover:text-stone-900">
                1940
              </h4>
              <EditorialImage 
                image={{ src: '/images/background/background_01.jpg', alt: 'Pemukiman Awal' }}
                preset="landscape"
                overlay="none"
                className="w-full h-auto aspect-[4/3] object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <h5 className="font-bold text-sm uppercase tracking-widest text-stone-900 mb-3 border-t border-stone-300 pt-4">
                Pemukiman Awal
              </h5>
              <p className="text-stone-600 text-sm leading-relaxed">
                Jauh sebelum kemerdekaan, sekelompok perintis membuka lahan dan merintis kehidupan bersama di tepian sungai Indragiri, meletakkan pondasi bagi generasi mendatang.
              </p>
            </FadeIn>
          </div>

          {/* Era 2 */}
          <div className="flex flex-col group">
            <FadeIn delay={0.2}>
              <h4 className="font-serif text-3xl text-stone-400 mb-4 transition-colors group-hover:text-stone-900">
                1975
              </h4>
              <EditorialImage 
                image={{ src: '/images/gallery/landscape/gallery_landscape_09.jpg', alt: 'Perkembangan Infrastruktur' }}
                preset="landscape"
                overlay="none"
                className="w-full h-auto aspect-[4/3] object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <h5 className="font-bold text-sm uppercase tracking-widest text-stone-900 mb-3 border-t border-stone-300 pt-4">
                Perkembangan Infrastruktur
              </h5>
              <p className="text-stone-600 text-sm leading-relaxed">
                Era di mana gotong royong warga membuahkan hasil berupa fasilitas publik dasar yang memperbaiki kualitas hidup dan akses informasi seluruh penduduk desa.
              </p>
            </FadeIn>
          </div>

          {/* Era 3 */}
          <div className="flex flex-col group">
            <FadeIn delay={0.3}>
              <h4 className="font-serif text-3xl text-stone-400 mb-4 transition-colors group-hover:text-stone-900">
                1998
              </h4>
              <EditorialImage 
                image={{ src: '/images/kkn/kkn_activity_08.jpg', alt: 'Perkembangan Masyarakat' }}
                preset="landscape"
                overlay="none"
                className="w-full h-auto aspect-[4/3] object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <h5 className="font-bold text-sm uppercase tracking-widest text-stone-900 mb-3 border-t border-stone-300 pt-4">
                Perkembangan Masyarakat
              </h5>
              <p className="text-stone-600 text-sm leading-relaxed">
                Masa transisi yang mempererat solidaritas antar keluarga, memperkuat ikatan sosial, dan membawa pembaruan tata kelola kemasyarakatan.
              </p>
            </FadeIn>
          </div>

          {/* Era 4 */}
          <div className="flex flex-col group">
            <FadeIn delay={0.4}>
              <h4 className="font-serif text-3xl text-stone-400 mb-4 transition-colors group-hover:text-stone-900">
                2026
              </h4>
              <EditorialImage 
                image={{ src: '/images/kkn/kkn_activity_06.jpg', alt: 'Air Putih Hari Ini' }}
                preset="landscape"
                overlay="none"
                className="w-full h-auto aspect-[4/3] object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <h5 className="font-bold text-sm uppercase tracking-widest text-stone-900 mb-3 border-t border-stone-300 pt-4">
                Air Putih Hari Ini
              </h5>
              <p className="text-stone-600 text-sm leading-relaxed">
                Melangkah ke depan dengan mempertahankan nilai kearifan lokal. Bersama membangun ekosistem digital untuk menjangkau dunia tanpa melupakan akar budaya.
              </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
