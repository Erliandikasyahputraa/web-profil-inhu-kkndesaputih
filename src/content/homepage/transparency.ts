export const transparencyContent = {
  sectionNumber: '06',
  kicker: 'TRANSPARANSI',
  title: 'Membangun dengan Keterbukaan',
  description: 'Setiap sen dana desa adalah amanah. Kami percaya bahwa pembangunan yang berkelanjutan berawal dari kepercayaan dan transparansi publik.',
  image: '/images/gallery/editorial_documentary_photograph_of_a_village_discussion_in_desa_air_putih_riau.png',
  imageAlt: 'Musyawarah desa mengenai pembangunan',
  mainMetric: {
    value: 'Rp 1.2M',
    label: 'Total APBDes 2026',
    description: 'Dialokasikan secara proporsional untuk pemberdayaan, infrastruktur, dan kesejahteraan masyarakat.'
  },
  metrics: [
    {
      id: 'tm-1',
      value: '45%',
      label: 'Pemberdayaan'
    },
    {
      id: 'tm-2',
      value: '30%',
      label: 'Infrastruktur'
    },
    {
      id: 'tm-3',
      value: '25%',
      label: 'Operasional'
    }
  ],
  cta: {
    label: 'Laporan Lengkap',
    href: '/transparansi'
  }
} as const;
