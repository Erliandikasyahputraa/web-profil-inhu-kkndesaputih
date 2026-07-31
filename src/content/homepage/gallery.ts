export const galleryContent = {
  sectionNumber: '05',
  kicker: 'GALERI',
  title: 'Merekam Denyut Kehidupan',
  description: 'Setiap sudut desa adalah bingkai cerita yang merekam aktivitas warga, alam, dan tradisi yang terus hidup.',
  images: [
    {
      id: 'gal-1',
      src: '/images/gallery/editorial_documentary_landscape_photograph_of_expansive_rice_fields_at_the_edge.png',
      alt: 'Hamparan sawah di pinggir desa',
      span: 'full'
    },
    {
      id: 'gal-2',
      src: '/images/gallery/editorial_documentary_photograph_of_family_activities_in_desa_air_putih_riau.png',
      alt: 'Aktivitas keluarga di halaman rumah',
      span: 'portrait'
    },
    {
      id: 'gal-3',
      src: '/images/gallery/editorial_documentary_photograph_of_a_village_discussion_in_desa_air_putih_riau.png',
      alt: 'Diskusi warga desa',
      span: 'landscape'
    },
    {
      id: 'gal-4',
      src: '/images/gallery/editorial_documentary_photograph_of_the_village_mosque_in_desa_air_putih_riau.png',
      alt: 'Masjid desa Air Putih',
      span: 'small'
    }
  ],
  quote: {
    text: 'Dalam setiap jepretan, ada jiwa desa yang terus berdenyut.',
    author: 'Fotografer Desa'
  },
  cta: {
    label: 'Lihat Seluruh Galeri',
    href: '/galeri'
  }
} as const;
