import { MapPin, Building2, Map, ShieldCheck } from 'lucide-react';
import { villageDemographics } from '@/content/village/demographics';

const DUSUN_DATA = [
  { name: "Dusun I Air Putih", population: "1.235" },
  { name: "Dusun II Mekar Jaya", population: "1.012" },
  { name: "Dusun III Suka Maju", population: "865" },
  { name: "Dusun IV Karya Bakti", population: "723" },
  { name: "Dusun V Harapan Baru", population: "350" },
];

export function ProfileData() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-4 h-0.5 bg-[#234A31]"></span>
        <span className="text-xs uppercase tracking-[0.2em] text-[#234A31] font-mono font-bold">
          Data Desa & Geografi
        </span>
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-10">
        Statistik Wilayah & Kependudukan
      </h2>

      {/* 3-Card Layout / Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12">
        
        {/* Card 1: Data Pokok Desa */}
        <div className="lg:col-span-4 bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
              <Building2 className="w-4 h-4 text-[#234A31]" />
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-stone-700">
                Data Pokok Wilayah
              </h3>
            </div>
            
            <dl className="flex flex-col divide-y divide-stone-100 text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between">
                <dt className="text-stone-500 font-sans">Luas Wilayah</dt>
                <dd className="font-semibold text-stone-900">1.692 Hektar</dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-stone-500 font-sans">Jumlah Penduduk</dt>
                <dd className="font-semibold text-stone-900">4.185 Jiwa</dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-stone-500 font-sans">Kepala Keluarga</dt>
                <dd className="font-semibold text-stone-900">1.260 KK</dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-stone-500 font-sans">Dusun / RT</dt>
                <dd className="font-semibold text-stone-900">5 Dusun / 28 RT</dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-stone-500 font-sans">Fasilitas Sekolah</dt>
                <dd className="font-semibold text-stone-900">2 TK, 3 SD, 1 SMP, 1 SMA</dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-stone-500 font-sans">Sektor Unggulan</dt>
                <dd className="font-semibold text-[#234A31]">Sawit, Karet & Perikanan</dd>
              </div>
            </dl>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
            Sumber Data: Arsip Administrasi Desa Air Putih
          </div>
        </div>

        {/* Card 2: Data Kewilayahan Per Dusun */}
        <div className="lg:col-span-4 bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
              <MapPin className="w-4 h-4 text-[#234A31]" />
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-stone-700">
                Data Kewilayahan (Dusun)
              </h3>
            </div>

            <div className="flex flex-col divide-y divide-stone-100 text-xs sm:text-sm">
              {DUSUN_DATA.map((dusun, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between">
                  <span className="text-stone-700 font-sans">{dusun.name}</span>
                  <span className="font-serif font-bold text-stone-900">{dusun.population} <span className="text-[11px] font-normal text-stone-500">Jiwa</span></span>
                </div>
              ))}
              
              <div className="py-3 flex items-center justify-between font-bold bg-stone-50/80 -mx-6 px-6 mt-2 border-t-2 border-stone-200">
                <span className="text-stone-900">Total Penduduk</span>
                <span className="font-serif text-base text-[#234A31]">4.185 Jiwa</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
            Rasio: 2.073 Laki-laki / 2.112 Perempuan
          </div>
        </div>

        {/* Card 3: Batas Wilayah */}
        <div className="lg:col-span-4 bg-white border border-stone-200/90 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
              <ShieldCheck className="w-4 h-4 text-[#234A31]" />
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-stone-700">
                Batas Wilayah Desa
              </h3>
            </div>

            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              {villageDemographics.borders.items.map((border, idx) => (
                <div key={idx} className="bg-stone-50/70 rounded-xl p-3 border border-stone-100">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#234A31] font-bold block mb-0.5">
                    Sebelah {border.direction}
                  </span>
                  <span className="text-stone-800 font-medium">{border.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
            Kecamatan Lubuk Batu Jaya, Kab. Indragiri Hulu
          </div>
        </div>

      </div>

      {/* Peta Administrasi Desa Full Frame */}
      <div className="w-full bg-white border border-stone-200/90 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-mono text-stone-400 font-bold block mb-1">
              DOKUMEN KARTOGRAFI RESMI
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Peta Administrasi Desa Air Putih
            </h3>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#234A31] bg-[#234A31]/10 px-3 py-1.5 rounded-full self-start sm:self-auto">
            <Map className="w-3.5 h-3.5" />
            <span>Skala Administrasi Kecamatan</span>
          </div>
        </div>

        <div className="w-full bg-[#EBE7E0] rounded-2xl overflow-hidden border border-stone-200 p-2 sm:p-4 flex items-center justify-center">
          <img 
            src="/images/profil/peta_administrasi.png" 
            alt="Peta Administrasi Desa Air Putih" 
            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-sm"
          />
        </div>
      </div>

    </section>
  );
}
