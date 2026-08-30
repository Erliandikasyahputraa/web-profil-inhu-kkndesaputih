import { Compass, Users, Home, Building2, Layers } from 'lucide-react';

const STATS = [
  {
    icon: Compass,
    value: "1.692 Ha",
    label: "Luas Wilayah"
  },
  {
    icon: Users,
    value: "4.185 Jiwa",
    label: "Jumlah Penduduk"
  },
  {
    icon: Home,
    value: "1.260 KK",
    label: "Jumlah Kepala Keluarga"
  },
  {
    icon: Building2,
    value: "4 Dusun",
    label: "Wilayah Desa"
  },
  {
    icon: Layers,
    value: "20 RT / 8 RW",
    label: "Pembagian Rukun"
  }
];

export function HomeStats() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-16 md:mb-24">
      <div className="w-full bg-white border border-stone-200/90 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          {STATS.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center px-2 ${idx === 4 ? 'col-span-2 md:col-span-1 pt-3 sm:pt-0' : 'pt-3 sm:pt-0'}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#234A31]/10 text-[#234A31] flex items-center justify-center mb-3 shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-mono">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
