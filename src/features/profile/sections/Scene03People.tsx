
import { Section } from '@/components/ui';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { villageSocialEconomy } from '@/content/village/socialEconomy';
import { villageVisionMission } from '@/content/village/visionMission';

export function Scene03People() {
  return (
    <Section variant="default" spacing="none" className="bg-[#EBE7E0] py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-xs font-bold text-stone-400">§ 04</span>
          <span className="w-6 h-px bg-stone-300"></span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold">
            SOSIAL, EKONOMI & MASYARAKAT
          </span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] mb-16 mix-blend-multiply">
          {villageSocialEconomy.mainHeading}
        </h2>
        
        {/* DATA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-32">
          
          {/* PENDIDIKAN */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl text-stone-900 mb-6 border-b border-stone-300 pb-2">{villageSocialEconomy.pendidikan.title}</h3>
            <ul className="flex flex-col gap-3 text-stone-800 text-sm md:text-base">
              <li className="flex justify-between pt-2 text-xs uppercase tracking-wider text-stone-500">Jumlah Siswa / Tingkat</li>
              {villageSocialEconomy.pendidikan.siswa.map((item, i) => (
                <li key={`siswa-${i}`} className="flex justify-between border-b border-stone-300/50 pb-2"><span>{item.label}</span> <span className="font-medium">{item.value}</span></li>
              ))}
              <li className="flex justify-between pt-4 text-xs uppercase tracking-wider text-stone-500">Lembaga Pendidikan</li>
              {villageSocialEconomy.pendidikan.lembaga.map((item, i) => (
                <li key={`lembaga-${i}`} className="flex justify-between border-b border-stone-300/50 pb-2"><span>{item.label}</span> <span className="font-medium">{item.value}</span></li>
              ))}
            </ul>
          </div>

          {/* KESEHATAN */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl text-stone-900 mb-6 border-b border-stone-300 pb-2">{villageSocialEconomy.kesehatan.title}</h3>
            <ul className="flex flex-col gap-3 text-stone-800 text-sm md:text-base">
              <li className="flex justify-between pt-2 text-xs uppercase tracking-wider text-stone-500">Maternal & Bayi</li>
              {villageSocialEconomy.kesehatan.maternalBayi.map((item, i) => (
                <li key={`maternal-${i}`} className="flex justify-between border-b border-stone-300/50 pb-2"><span>{item.label}</span> <span className="font-medium">{item.value}</span></li>
              ))}
              
              <li className="flex justify-between pt-4 text-xs uppercase tracking-wider text-stone-500">Imunisasi & Gizi</li>
              {villageSocialEconomy.kesehatan.imunisasiGizi.map((item, i) => (
                <li key={`imunisasi-${i}`} className={`flex justify-between border-b border-stone-300/50 pb-2 ${item.isMissing ? 'text-stone-500 italic' : ''}`}>
                  <span>{item.label}</span> <span className={item.isMissing ? '' : 'font-medium'}>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* KEAGAMAAN */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl text-stone-900 mb-6 border-b border-stone-300 pb-2">{villageSocialEconomy.keagamaan.title}</h3>
            <ul className="flex flex-col gap-3 text-stone-800 text-sm md:text-base">
              <li className="flex justify-between pt-2 text-xs uppercase tracking-wider text-stone-500">Tempat Ibadah</li>
              {villageSocialEconomy.keagamaan.tempatIbadah.map((item, i) => (
                <li key={`ibadah-${i}`} className="flex justify-between border-b border-stone-300/50 pb-2"><span>{item.label}</span> <span className="font-medium">{item.value}</span></li>
              ))}
              
              <li className="flex flex-col pt-4 pb-2 border-b border-stone-300/50">
                <span className="text-xs uppercase tracking-wider text-stone-500 mb-2">{villageSocialEconomy.keagamaan.pemelukTitle}</span>
                {villageSocialEconomy.keagamaan.pemeluk.map((item, i) => (
                  <div key={`pemeluk-${i}`} className={`flex justify-between ${i !== villageSocialEconomy.keagamaan.pemeluk.length - 1 ? 'mb-2' : ''}`}>
                    <span>{item.label}</span> <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </li>
            </ul>
          </div>

          {/* PERTANIAN & PERIKANAN */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl text-stone-900 mb-6 border-b border-stone-300 pb-2">{villageSocialEconomy.pertanianPerikanan.title}</h3>
            <ul className="flex flex-col gap-3 text-stone-800 text-sm md:text-base">
              <li className="flex justify-between pt-2 text-xs uppercase tracking-wider text-stone-500">Pertanian / Perkebunan</li>
              {villageSocialEconomy.pertanianPerikanan.pertanian.map((item, i) => (
                <li key={`tani-${i}`} className="flex justify-between border-b border-stone-300/50 pb-2"><span>{item.label}</span> <span className="font-medium">{item.value}</span></li>
              ))}
              
              <li className="flex justify-between pt-4 text-xs uppercase tracking-wider text-stone-500">Perikanan</li>
              {villageSocialEconomy.pertanianPerikanan.perikanan.map((item, i) => (
                <li key={`ikan-${i}`} className={`flex justify-between border-b border-stone-300/50 pb-2 ${item.isMissing ? 'text-stone-500 italic' : ''}`}>
                  <span>{item.label}</span> <span className={item.isMissing ? '' : 'font-medium'}>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PETERNAKAN & MATA PENCAHARIAN */}
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl text-stone-900 mb-6 border-b border-stone-300 pb-2">{villageSocialEconomy.pekerjaanTernak.title}</h3>
            <ul className="flex flex-col gap-3 text-stone-800 text-sm md:text-base">
              <li className="flex justify-between pt-2 text-xs uppercase tracking-wider text-stone-500">Peternakan</li>
              {villageSocialEconomy.pekerjaanTernak.peternakan.map((item, i) => (
                <li key={`ternak-${i}`} className={`flex justify-between border-b border-stone-300/50 pb-2 ${item.isMissing ? 'text-stone-500 italic' : ''}`}>
                  <span>{item.label}</span> <span className={item.isMissing ? '' : 'font-medium'}>{item.value}</span>
                </li>
              ))}

              <li className="flex justify-between pt-4 text-xs uppercase tracking-wider text-stone-500">Mata Pencaharian Utama</li>
              {villageSocialEconomy.pekerjaanTernak.mataPencaharian.map((item, i) => (
                <li key={`kerja-${i}`} className="flex justify-between border-b border-stone-300/50 pb-2"><span>{item.label}</span> <span className="font-medium">{item.value}</span></li>
              ))}
            </ul>
          </div>

          {/* AIR BERSIH & PEMBAGIAN WILAYAH DUSUN */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col mb-12">
              <h3 className="font-serif text-2xl text-stone-900 mb-6 border-b border-stone-300 pb-2">{villageSocialEconomy.airBersih.title}</h3>
              <ul className="flex flex-col gap-3 text-stone-800 text-sm md:text-base">
                {villageSocialEconomy.airBersih.items.map((item, i) => (
                  <li key={`air-${i}`} className="flex justify-between border-b border-stone-300/50 pb-2"><span>{item.label}</span> <span className="font-medium">{item.value}</span></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col bg-stone-100 p-6 md:p-8">
              <h3 className="font-serif text-2xl text-stone-900 mb-6 border-b border-stone-300 pb-2">{villageSocialEconomy.pembagianWilayah.title}</h3>
              <ul className="flex flex-col gap-3 text-stone-800 text-sm md:text-base mb-8">
                {villageSocialEconomy.pembagianWilayah.dusun.map((item, i) => (
                  <li key={`dusun-${i}`} className="flex justify-between border-b border-stone-300/50 pb-2"><span>{item.label}</span> <span className="font-medium text-stone-500">{item.value}</span></li>
                ))}
              </ul>
              <Link to={ROUTES.PEMERINTAHAN} className="inline-flex items-center text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors mt-auto">
                Melihat Pemerintahan Desa <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* VISI & MISI */}
        <div className="w-full mt-32 pt-24 md:pt-32 border-t border-stone-300 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs font-bold text-stone-400">§ 05</span>
            <span className="w-6 h-px bg-stone-300"></span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold">
              VISI & MISI DESA
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-[3rem] text-stone-900 leading-[1.3] max-w-4xl mx-auto mb-16 px-4">
            {villageVisionMission.visionStatement}
          </h2>
          
          <div className="text-left w-full max-w-4xl flex flex-col gap-6 px-4 md:px-0">
            <h3 className="font-serif text-xl md:text-2xl text-stone-800 mb-2">{villageVisionMission.missionTitle}</h3>
            <ol className="list-decimal pl-5 text-stone-700 text-sm md:text-base leading-[1.8] flex flex-col gap-4">
              {villageVisionMission.missions.map((misi, i) => (
                <li key={i}>{misi}</li>
              ))}
            </ol>
          </div>
        </div>

      </div>
    </Section>
  );
}
