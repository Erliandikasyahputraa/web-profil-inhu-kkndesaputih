import { Users2, BookOpen, Sprout, ArrowRight } from 'lucide-react';

export function KknAbout() {
  
  return (
    <section id="tentang-kkn" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-6">
          <div className="inline-flex items-center px-3 py-1 bg-[#234A31]/10 text-[#234A31] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            TENTANG KKN
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-stone-900 leading-[1.18] font-bold mb-4">
            Hadir untuk<br className="hidden sm:inline" /> Memberi Manfaat<br className="hidden sm:inline" /> & Inspirasi
          </h2>
          
          <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 font-sans">
            KKN Tematik 2026 merupakan wujud pengabdian mahasiswa kepada masyarakat melalui kolaborasi, edukasi, pemberdayaan, dan aksi nyata yang berkelanjutan di Desa Air Putih.
          </p>

          <a 
            href="#program-kerja"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 hover:border-[#234A31] text-stone-800 hover:text-[#234A31] bg-white rounded-full text-xs font-semibold transition-all shadow-sm group"
          >
            <span>Selengkapnya Tentang KKN</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Column: 3 Pillar Feature Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          
          {/* Pillar 1: Kolaborasi */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold text-stone-900 mt-1">
              Kolaborasi
            </h3>
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
              Bersinergi bersama perangkat desa, pemuda, dan masyarakat dalam setiap kegiatan.
            </p>
          </div>

          {/* Pillar 2: Edukasi */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold text-stone-900 mt-1">
              Edukasi
            </h3>
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
              Memberikan edukasi dan pelatihan untuk meningkatkan pengetahuan dan keterampilan.
            </p>
          </div>

          {/* Pillar 3: Aksi Nyata */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <Sprout className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold text-stone-900 mt-1">
              Aksi Nyata
            </h3>
            <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
              Melakukan aksi langsung yang berdampak dan bermanfaat bagi pembangunan desa.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
