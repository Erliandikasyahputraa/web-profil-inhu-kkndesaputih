export const ctaContent = {
  statement: 'Setiap perjalanan selalu dimulai dengan sebuah langkah.',
  description: 'Kami mengundang Anda untuk mengenal Desa Air Putih lebih dekat. Temukan ketenangan, saksikan gotong royong, dan rasakan denyut kehidupan kami secara langsung.',
  image: { src: '/images/gallery/editorial_documentary_photograph_of_a_quiet_unpaved_village_road_in_desa_air.png', alt: 'Jalan desa yang tenang di Air Putih' },
  actions: [
    {
      label: 'Jelajahi Desa Air Putih',
      href: '/tentang',
      primary: true
    },
    {
      label: 'Hubungi Kami',
      href: '/informasi',
      primary: false
    }
  ]
} as const;
