import { BookOpen, MapPin, Users, ArrowRight } from 'lucide-react';

export function ProfileAbout() {
  return (
    <section id="tentang-desa" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Heading, Paragraph & CTA Button */}
        <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-[#234A31]"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
              Tentang Desa Air Putih
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold leading-tight mb-4">
            Harmoni Alam & Kehidupan Warga
          </h2>

          <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 font-sans">
            Desa Air Putih terletak di Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Provinsi Riau. Desa ini memiliki potensi sumber daya alam yang melimpah serta masyarakat yang guyub, religius, dan menjunjung tinggi budaya luhur gotong royong.
          </p>

          <a 
            href="#sejarah-desa"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#234A31] hover:bg-[#1B3A27] text-white text-xs font-semibold rounded-full shadow-sm hover:shadow-md transition-all group"
          >
            <span>Sejarah Desa</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right Column: 3 Feature Blocks */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          
          {/* Feature 1: Sejarah */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mt-1">
              Sejarah
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              Perjalanan panjang Desa Air Putih sejak awal masa transmigrasi 1990 hingga definitif pada 21 April 1993.
            </p>
          </div>

          {/* Feature 2: Letak Geografis */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mt-1">
              Letak Geografis
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              Berada di wilayah strategis perkebunan kelapa sawit dengan luas 1.692 Ha dan akses yang terus berkembang.
            </p>
          </div>

          {/* Feature 3: Budaya & Tradisi */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mt-1">
              Budaya & Tradisi
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              Menjaga nilai-nilai keagamaan, toleransi, kekeluargaan, dan gotong royong sebagai identitas sejati desa.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
