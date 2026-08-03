import { Section, EditorialImage } from '@/components/ui';

const officials = [
  {
    name: 'M. Syahrul Hidayat',
    role: 'Kepala Desa',
    image: '/images/people/editorial_documentary_portrait_of_the_village_head_kepala_desa_of_desa_air.png'
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Sekretaris Desa',
    image: '/images/people/editorial_documentary_portrait_of_a_village_teacher_in_desa_air_putih_riau.png'
  },
  {
    name: 'Rizki Wahyudi',
    role: 'Kaur Keuangan',
    image: '/images/people/editorial_documentary_portrait_of_a_village_elder_in_desa_air_putih_indragiri.png'
  },
  {
    name: 'Siti Aisyah',
    role: 'Kaur Umum',
    image: '/images/people/editorial_documentary_portrait_of_an_indonesian_mother_in_desa_air_putih.png'
  },
  {
    name: 'Jumadi',
    role: 'Kasi Pemerintahan',
    image: '/images/people/editorial_documentary_portrait_of_a_veteran_farmer_in_desa_air_putih_riau.png'
  }
];

export function Scene03People() {
  return (
    <Section variant="default" spacing="none" className="bg-[#F2EFE9] py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col">
        
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <p className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-bold mb-10">
            02 — PERANGKAT DESA
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-stone-900 leading-[1.2] max-w-lg mix-blend-multiply">
            Bersama melayani, bersama membangun.
          </h2>
        </div>

        {/* Editorial Portraits Slider / Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 md:gap-12 pb-12">
          {officials.map((official, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 md:w-72 snap-start group">
              <div className="w-full aspect-[4/5] bg-stone-200 mb-6 overflow-hidden">
                <EditorialImage 
                  image={{ src: official.image, alt: official.name }}
                  preset="portrait"
                  overlay="none"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 sepia-[0.1]"
                />
              </div>
              <div className="flex flex-col border-t border-stone-300 pt-4">
                <h3 className="font-serif text-xl md:text-2xl text-stone-900 mb-1">{official.name}</h3>
                <p className="text-xs md:text-sm text-stone-500">{official.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
