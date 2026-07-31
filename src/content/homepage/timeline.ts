export const timelineContent = {
  sectionNumber: '04',
  kicker: 'PERJALANAN DESA',
  title: 'Jejak Langkah Air Putih',
  description: 'Sejarah bukan sekadar masa lalu, melainkan fondasi yang membentuk identitas kami hari ini.',
  quote: {
    text: 'Setiap jengkal tanah ini menyimpan cerita perjuangan dan doa para pendahulu.',
    author: 'Tetua Desa Air Putih'
  },
  chapters: [
    {
      id: 'tc-1',
      year: '1940',
      title: 'Awal Pemukiman',
      description: 'Jauh sebelum Indonesia merdeka, sekelompok perintis bahu-membahu membuka hutan. Mereka mendirikan pemukiman pertama di sekitar sumber mata air yang jernih, yang kelak menjadi cikal bakal dan nama desa ini.',
      image: { src: '/images/history/vintage_historical_documentary_photograph_of_the_original_settlement_of_desa.png', alt: 'Pemukiman awal Desa Air Putih' },
    },
    {
      id: 'tc-2',
      year: '1975',
      title: 'Mata Air Kehidupan',
      description: 'Pembangunan sumur desa utama dan sistem pengairan menjadi titik balik kehidupan warga. Infrastruktur ini menjamin ketersediaan air bersih di musim kemarau dan mempererat solidaritas antar keluarga dalam menjaga mata air.',
      image: { src: '/images/history/historical_documentary_photograph_of_the_old_village_well_and_spring_mata_air.png', alt: 'Mata air lama Desa Air Putih' },
    },
    {
      id: 'tc-3',
      year: '1998',
      title: 'Era Transisi & Musyawarah',
      description: 'Di tengah perubahan besar bangsa, para tetua dan warga desa berkumpul di balai desa. Mereka memperbarui komitmen bersama untuk menciptakan tata kelola desa yang lebih mandiri, demokratis, dan transparan.',
      image: { src: '/images/history/historical_documentary_photograph_of_a_traditional_community_meeting_musyawarah.png', alt: 'Musyawarah desa tradisional' },
    },
    {
      id: 'tc-4',
      year: '2026',
      title: 'Merajut Masa Depan',
      description: 'Mewarisi kearifan masa lalu, generasi muda Desa Air Putih kini siap menghadapi tantangan global. Pembauran antara kearifan lokal dengan inovasi modern menjadi kunci ketahanan desa di masa depan.',
      image: { src: '/images/history/historical_documentary_portrait_of_the_village_founders_perintis_desa_of_desa.png', alt: 'Potret generasi perintis dan penerus' },
    }
  ]
} as const;
