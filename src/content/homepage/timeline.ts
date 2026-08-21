export const timelineContent = {
  sectionNumber: '04',
  kicker: 'PERJALANAN DESA',
  title: 'Jejak Langkah Air Putih',
  description: 'Sejarah bukan sekadar masa lalu, melainkan fondasi yang membentuk identitas kami hari ini.',
  callout: {
    content: 'Setiap jengkal tanah ini menyimpan cerita perjuangan dan doa para pendahulu.',
    title: 'Tetua Desa Air Putih'
  },
  chapters: [
    {
      id: 'tc-1',
      year: '1940',
      title: 'Awal Pemukiman',
      description: 'Jauh sebelum Indonesia merdeka, sekelompok perintis bahu-membahu membuka hutan. Mereka mendirikan pemukiman pertama di sekitar sumber mata air yang jernih, yang kelak menjadi cikal bakal dan nama desa ini.',
      image: { src: '/images/background/background_02.jpg', alt: 'Pemukiman awal Desa Air Putih' },
    },
    {
      id: 'tc-2',
      year: '1975',
      title: 'Mata Air Kehidupan',
      description: 'Pembangunan sumur desa utama dan sistem pengairan menjadi titik balik kehidupan warga. Infrastruktur ini menjamin ketersediaan air bersih di musim kemarau dan mempererat solidaritas antar keluarga dalam menjaga mata air.',
      image: { src: '/images/background/background_01.jpg', alt: 'Mata air lama Desa Air Putih' },
    },
    {
      id: 'tc-3',
      year: '1998',
      title: 'Era Transisi & Musyawarah',
      description: 'Di tengah perubahan besar bangsa, para tetua dan warga desa berkumpul di balai desa. Mereka memperbarui komitmen bersama untuk menciptakan tata kelola desa yang lebih mandiri, demokratis, dan transparan.',
      image: { src: '/images/kkn/kkn_activity_01.jpg', alt: 'Musyawarah desa tradisional' },
    },
    {
      id: 'tc-4',
      year: '2026',
      title: 'Merajut Masa Depan',
      description: 'Mewarisi kearifan masa lalu, generasi muda Desa Air Putih kini siap menghadapi tantangan global. Pembauran antara kearifan lokal dengan inovasi modern menjadi kunci ketahanan desa di masa depan.',
      image: { src: '/images/profil/profil_story_03.jpg', alt: 'Potret generasi perintis dan penerus' },
    }
  ]
} as const;
