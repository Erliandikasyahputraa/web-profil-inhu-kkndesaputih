export const galleryContent = {
  sectionNumber: '05',
  kicker: 'GALERI',
  title: 'Merekam Denyut Kehidupan',
  description: 'Setiap sudut desa adalah bingkai cerita yang merekam aktivitas warga, alam, dan tradisi yang terus hidup.',
  images: [
    {
      id: 'gal-1',
      image: { src: '/images/profil/profil_content_06.webp', alt: 'Aktivitas Anak-anak Desa' },
      span: 'landscape'
    },
    {
      id: 'gal-2',
      image: { src: '/images/gallery/landscape/gallery_landscape_03.webp', alt: 'Keseharian Warga' },
      span: 'landscape'
    },
    {
      id: 'gal-3',
      image: { src: '/images/gallery/landscape/gallery_landscape_13.webp', alt: 'Belajar Bersama' },
      span: 'portrait'
    },
    {
      id: 'gal-4',
      image: { src: '/images/profil/profil_content_01.webp', alt: 'Interaksi Siswa' },
      span: 'portrait'
    },
    {
      id: 'gal-5',
      image: { src: '/images/gallery/landscape/gallery_landscape_04.webp', alt: 'Aktivitas Belajar' },
      span: 'landscape'
    },
    {
      id: 'gal-6',
      image: { src: '/images/kkn/kkn_activity_11.webp', alt: 'Keceriaan Belajar' },
      span: 'portrait'
    }
  ],
  callout: {
    content: 'Dalam setiap jepretan, ada jiwa desa yang terus berdenyut.',
    title: 'Fotografer Desa'
  },
  cta: {
    label: 'Lihat Seluruh Galeri',
    href: '/galeri'
  }
} as const;
