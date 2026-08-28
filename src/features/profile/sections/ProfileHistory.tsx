import { Sparkles } from 'lucide-react';
import { villageHistory } from '@/content/village/history';

export function ProfileHistory() {
  return (
    <section id="sejarah-desa" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-4 h-0.5 bg-[#234A31]"></span>
        <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
          Sejarah & Pembentukan
        </span>
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-10">
        {villageHistory.mainHeading}
      </h2>

      {/* Grid: Timeline Story on Left, Photo & Key Milestones on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Vertical Timeline Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Milestone 1: 1990 */}
          <div className="flex gap-4 sm:gap-6 relative group">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#234A31] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-sm">
                1990
              </div>
              <div className="w-0.5 h-full bg-stone-200 mt-2"></div>
            </div>
            <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm flex-1 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#234A31] font-bold">Awal Pembentukan</span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mt-1 mb-2">Program Transmigrasi PIR Sawit</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Desa bermula dari program transmigrasi dengan pola PIR perkebunan kelapa sawit yang mulai terbentuk pada tahun 1990. Penduduk berasal dari Jawa Timur, Jawa Tengah, Jawa Barat, serta penduduk lokal dengan jumlah awal 640 Kepala Keluarga.
              </p>
            </div>
          </div>

          {/* Milestone 2: 1990 - 1993 */}
          <div className="flex gap-4 sm:gap-6 relative group">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-300 text-stone-700 flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-sm">
                SP-VI
              </div>
              <div className="w-0.5 h-full bg-stone-200 mt-2"></div>
            </div>
            <div className="bg-white border border-stone-200/90 rounded-2xl p-5 md:p-6 shadow-sm flex-1 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold">Asal Usul Nama</span>
              <h3 className="font-serif text-lg font-bold text-stone-900 mt-1 mb-2">Dari SP-VI B Menjadi Air Putih</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Sebelum bernama Desa Air Putih, desa ini dikenal sebagai Satuan Pemukiman SP-VI B Sungai Lal. Nama <strong>Air Putih</strong> kemudian disepakati oleh para tokoh masyarakat karena wilayah ini dialiri beberapa sungai kecil berair sangat jernih.
              </p>
            </div>
          </div>

          {/* Milestone 3: 21 April 1993 */}
          <div className="flex gap-4 sm:gap-6 relative group">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#234A31] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-sm">
                1993
              </div>
            </div>
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-5 md:p-6 shadow-sm flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#234A31] text-white text-[10px] font-semibold rounded-full mb-2">
                <Sparkles className="w-3 h-3 text-emerald-300" />
                <span>Desa Definitif</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">Penyerahan Resmi — 21 April 1993</h3>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                Pada tanggal <strong>21 April 1993</strong>, pembinaan dari Departemen Transmigrasi dan PT. Inti Indosawit Subur resmi diserahkan kepada Pemerintah Daerah, menandai lahirnya Desa Air Putih sebagai desa definitif yang mandiri.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Historical Landscape Photography & Highlights */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-stone-200 border border-stone-200/90 relative">
            <img 
              src="/images/background/background_02.webp" 
              alt="Lanskap Desa Air Putih" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">
              <p className="font-serif text-sm font-semibold">Desa Air Putih, Indragiri Hulu</p>
              <p className="text-[10px] text-white/80 font-mono">Dokumentasi Lanskap Alam & Menara Desa</p>
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-sm">
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-mono font-bold mb-3">
              Tonggak Sejarah Singkat
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-stone-600 font-sans">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#234A31] mt-1.5 shrink-0"></span>
                <span><strong>1990:</strong> Pembukaan pemukiman transmigrasi pola PIR sawit (640 KK).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#234A31] mt-1.5 shrink-0"></span>
                <span><strong>1990–1993:</strong> Masa pembinaan KUPT & pembagian 2 Ha kebun sawit + 0,5 Ha pekarangan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#234A31] mt-1.5 shrink-0"></span>
                <span><strong>21 April 1993:</strong> Pengesahan status desa definitif oleh Pemda.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  );
}
