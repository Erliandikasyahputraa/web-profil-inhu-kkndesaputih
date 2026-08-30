export const potentialsContent = {
  sectionNumber: '03',
  kicker: 'POTENSI',
  title: 'Urat Nadi Perekonomian Desa',
  description: 'Tiga pilar utama yang menggerakkan kemandirian masyarakat Desa Air Putih.',
  items: [
    {
      id: 'pot-1',
      title: 'Perkebunan Kelapa Sawit',
      description: 'Menjadi penyangga utama ekonomi keluarga, perkebunan rakyat ini dikelola dengan memadukan kearifan lokal dan kebutuhan industri modern. Keberlanjutan alam dan produktivitas berjalan beriringan.',
      image: { src: '/images/home/beranda_04.webp', alt: 'Aktivitas perkebunan dan alam' },
      stats: [
        { id: 's1', value: '70%', label: 'Populasi Terlibat' },
        { id: 's2', value: '± 800', label: 'Hektar Lahan' }
      ]
    },
    {
      id: 'pot-2',
      title: 'Kemandirian UMKM Lokal',
      description: 'Dari anyaman hingga kuliner tradisional, tangan-tangan terampil warga mengubah bahan mentah menjadi karya bernilai tinggi yang menghidupkan pasar desa dan menyokong ekonomi perempuan.',
      image: { src: '/images/profil/profil_content_12.webp', alt: 'Kerajinan kreatif' },
      stats: [
        { id: 's3', value: '45+', label: 'Usaha Aktif' },
        { id: 's4', value: '3', label: 'Koperasi' }
      ]
    },
    {
      id: 'pot-3',
      title: 'Ketahanan Pangan & Pertanian',
      description: 'Hamparan ladang dan aktivitas panen mencerminkan komitmen desa dalam menjaga ketersediaan pangan yang mandiri, diwariskan dari para leluhur.',
      image: { src: '/images/kkn/kkn_activity_08.webp', alt: 'Kerjasama gotong royong' },
      stats: [
        { id: 's5', value: '3x', label: 'Panen Tahunan' },
        { id: 's6', value: '100%', label: 'Organik' }
      ]
    }
  ],
  cta: {
    label: 'Pelajari Profil Desa',
    href: '/profil'
  }
} as const;
