import { EditorialImage } from '@/components/ui';

const TEAM_MEMBERS = [
  {
    role: "DOSEN PEMBIMBING LAPANGAN",
    members: [
      { name: "Dr. Muslim, S.Ag., S.H., M.Hum", image: "/images/gallery/landscape/gallery_landscape_10.webp" }
    ]
  },
  {
    role: "KOORDINATOR DESA",
    members: [
      { name: "Rufai Asyafi’i", image: "/images/gallery/landscape/gallery_landscape_09.webp" }
    ]
  },
  {
    role: "SEKRETARIS",
    members: [
      { name: "Putri Halimah Tusyadiah", image: "/images/gallery/landscape/gallery_landscape_04.webp" },
      { name: "Toni Syariffudin", image: "/images/supporting/supporting_01.webp" }
    ]
  },
  {
    role: "BENDAHARA",
    members: [
      { name: "Inaayah Nazhifah", image: "/images/kkn/kkn_activity_03.webp" }
    ]
  },
  {
    role: "HUBUNGAN MASYARAKAT",
    members: [
      { name: "Deffarul Syahroyza", image: "/images/kkn/kkn_activity_07.webp" },
      { name: "Alya Fitri Herianti", image: "/images/profil/profil_content_07.webp" }
    ]
  },
  {
    role: "PERLENGKAPAN",
    members: [
      { name: "Aisyah Ahmad", image: "/images/kkn/kkn_activity_08.webp" }
    ]
  },
  {
    role: "MEDIA KOMUNIKASI",
    members: [
      { name: "Marsya Sofianti", image: "/images/profil/profil_content_08.webp" },
      { name: "Silvia", image: "/images/profil/profil_content_09.webp" },
      { name: "Elsa Yuni Rahmawati", image: "/images/profil/profil_content_06.webp" }
    ]
  }
];

export function KknTeam() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-20 md:mb-32">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div className="w-full md:w-3/12 md:sticky md:top-32">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-500 font-bold mb-1">
            03
          </p>
          <p className="font-serif text-2xl text-stone-900">
            TIM KKN
          </p>
        </div>
        
        <div className="w-full md:w-9/12 lg:w-9/12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {TEAM_MEMBERS.map((group, index) => (
              <div key={index} className="flex flex-col">
                <h4 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-400 font-bold mb-4 border-b border-stone-200 pb-2">
                  {group.role}
                </h4>
                <div className="flex flex-col gap-6">
                  {group.members.map((member, mIndex) => (
                    <div key={mIndex} className="flex items-center gap-4">
                      {/* Temporary Image Placeholder */}
                      <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-[#E8E1D7] flex items-center justify-center border border-stone-300 overflow-hidden relative">
                        <EditorialImage 
                          image={{ src: member.image, alt: member.name }} 
                          preset="portrait"
                          overlay="none"
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-serif text-lg md:text-xl text-stone-900 leading-snug">
                          {member.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
