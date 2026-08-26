import { HeroSection } from './sections/Hero';
import { IdentitasDesa } from './sections/IdentitasDesa';
import { HistorySection } from './sections/History';
import { KehidupanDesaSection } from './sections/KehidupanDesa';
import { FadeIn } from '@/components/motion';
import { EditorialImage } from '@/components/ui';

export function HomeComposition() {
  return (
    <div className="w-full bg-[#F8F6F3] text-stone-900 overflow-hidden">
      
      {/* 01 — HERO */}
      <HeroSection />

      <main className="flex flex-col w-full pb-32">
        
        {/* 02 — IDENTITAS DESA */}
        <div className="pt-24 md:pt-32">
          <IdentitasDesa />
        </div>

        {/* CONNECTIVE SENTENCE 1 */}
        <div className="w-full max-w-3xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 text-center">
          <FadeIn>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-stone-600 leading-relaxed italic">
              "Namun, setiap tempat memiliki cerita tentang bagaimana ia menjadi seperti sekarang."
            </p>
          </FadeIn>
        </div>

        {/* 03 — PERJALANAN DESA */}
        <div>
          <HistorySection />
        </div>

        {/* CONNECTIVE SENTENCE 2 */}
        <div className="w-full max-w-3xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 text-center">
          <FadeIn delay={0.2}>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-stone-600 leading-relaxed italic">
              "Sejarah itu tidak berhenti pada tahun-tahun yang telah berlalu. Ia hidup dalam keseharian warga hingga hari ini."
            </p>
          </FadeIn>
        </div>

        {/* 04 — KEHIDUPAN DESA */}
        <div>
          <KehidupanDesaSection />
        </div>

        {/* CONNECTIVE SENTENCE 3 */}
        <div className="w-full max-w-3xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 text-center">
          <FadeIn delay={0.2}>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-stone-600 leading-relaxed italic">
              "Dan ketika kebersamaan menjadi bagian dari kehidupan, pengabdian menemukan tempatnya."
            </p>
          </FadeIn>
        </div>

        {/* JEJAK KKN TEASER */}
        <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
          <FadeIn>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-4">
                KERUKUNAN WARGA
              </h2>
              <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight mb-6">
                "Lewat tawa di lapangan, <br/>kita merawat kebersamaan."
              </h3>
              <p className="text-stone-700 leading-relaxed mb-8">
                Momen sederhana bermain voli di sore hari menjadi cara warga dan teman-teman mahasiswa membaur, merajut kerukunan tanpa sekat.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mb-10">
              <EditorialImage 
                image={{ src: '/images/home/bersamawarga10.webp', alt: 'Bermain voli bersama di Desa Air Putih' }}
                preset="landscape"
                overlay="none"
                className="w-full h-auto aspect-[16/9] object-cover"
              />
            </div>

            <div className="flex justify-center">
              <a href="/kkn" className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-stone-900 hover:text-stone-500 transition-colors border-b border-stone-900 hover:border-stone-500 pb-1">
                <span>Lihat Cerita KKN</span>
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          </FadeIn>
        </section>

        {/* CLOSING */}
        <div className="w-full max-w-2xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 md:py-32 text-center border-t border-stone-300">
          <FadeIn delay={0.2}>
            <p className="font-serif text-2xl md:text-3xl text-stone-900 leading-relaxed mb-16">
              "Di sini, cerita tidak pernah benar-benar selesai. Karena desa bukan hanya tempat untuk pulang, tetapi kehidupan yang terus tumbuh dari generasi ke generasi."
            </p>
            <div className="flex flex-col items-center">
              <span className="font-serif text-xl tracking-widest text-stone-900 mb-2">DESA AIR PUTIH</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Sebuah dokumenter interaktif<br/>di tepi Indragiri.</span>
            </div>
          </FadeIn>
        </div>

      </main>
    </div>
  );
}
