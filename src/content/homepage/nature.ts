export const natureContent = {
  sectionNumber: '02',
  kicker: 'ALAM',
  title: 'Sumber Kehidupan yang Berkelanjutan',
  image: { src: '/images/kkn/kkn_activity_07.webp', alt: 'Aktivitas warga di alam' },
  callout: {
    content: 'Alam bukan sekadar pemandangan, tetapi nyawa yang menghidupi setiap napas masyarakat kami.',
    title: 'Warga Desa Air Putih'
  },
  paragraphs: [
    {
      id: 'n1',
      text: 'Tanah yang subur adalah anugerah terbesar bagi Desa Air Putih. Dari generasi ke generasi, masyarakat hidup berdampingan dengan alam, mengolah hasil bumi dengan penuh rasa hormat.'
    },
    {
      id: 'n2',
      text: 'Perkebunan kelapa sawit dan karet membentang sejauh mata memandang, menjadi tulang punggung perekonomian desa sekaligus pengingat bahwa merawat alam sama dengan merawat masa depan anak cucu.'
    }
  ],
  stats: [
    {
      id: 's1',
      value: '± 800',
      label: 'Hektar Perkebunan',
    },
    {
      id: 's2',
      value: '1.200+',
      label: 'Penduduk Bergantung Alam',
    },
    {
      id: 's3',
      value: '3',
      label: 'Sungai Mengalir',
    }
  ]
} as const;
