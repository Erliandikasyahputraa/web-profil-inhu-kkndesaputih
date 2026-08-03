export type Photo = {
  src: string;
  alt: string;
  caption: string;
  date?: string;
  category: 'Alam' | 'Masyarakat' | 'Budaya' | 'Pertanian' | 'Sejarah' | 'Arsip';
  aspect: string; // e.g., '16/9', '3/4', '1/1', '21/9'
};

export const GALLERY_PHOTOS: Photo[] = [
  // ALAM & SUNGAI
  {
    src: '/images/hero/cinematic_drone_photography_of_desa_air_putih_riau_indonesia._an_expansive.png',
    alt: 'Pemandangan udara Desa Air Putih',
    caption: 'Aliran sungai yang membelah desa',
    category: 'Alam',
    aspect: '21/9'
  },
  {
    src: '/images/hero/cinematic_full_width_photograph_of_a_sunset_over_desa_air_putih._warm_golden.png',
    alt: 'Matahari terbenam',
    caption: 'Senja di tepi Indragiri',
    category: 'Alam',
    aspect: '16/9'
  },
  {
    src: '/images/hero/cinematic_drone_photography_of_desa_air_putih_riau_indonesia._a_peaceful_river.png',
    alt: 'Sungai yang tenang',
    caption: 'Kehidupan bermula dari air',
    category: 'Alam',
    aspect: '16/9'
  },
  {
    src: '/images/hero/cinematic_wide_shot_of_a_peaceful_river_in_rural_riau_indonesia_surrounded_by.png',
    alt: 'Tepian sungai lebar',
    caption: 'Menjaga harmoni alam',
    category: 'Alam',
    aspect: '21/9'
  },
  {
    src: '/images/hero/editorial_documentary_landscape_photograph_of_a_peaceful_river_in_desa_air.png',
    alt: 'Landscape sungai',
    caption: 'Air yang terus mengalir',
    category: 'Alam',
    aspect: '3/2'
  },
  {
    src: '/images/gallery/editorial_documentary_landscape_photograph_of_expansive_rice_fields_at_the_edge.png',
    alt: 'Sawah luas',
    caption: 'Hamparan hijau penghidupan',
    category: 'Alam',
    aspect: '16/9'
  },
  {
    src: '/images/gallery/editorial_documentary_photograph_of_a_lush_tropical_forest_on_the_outskirts_of.png',
    alt: 'Hutan tropis',
    caption: 'Rimba yang masih terjaga',
    category: 'Alam',
    aspect: '3/4'
  },

  // PERTANIAN
  {
    src: '/images/potentials/editorial_documentary_landscape_photograph_of_a_vast_palm_oil_plantation_in.png',
    alt: 'Kebun kelapa sawit',
    caption: 'Potensi ekonomi hijau',
    category: 'Pertanian',
    aspect: '16/9'
  },
  {
    src: '/images/potentials/editorial_documentary_landscape_photograph_of_a_traditional_rubber_plantation.png',
    alt: 'Kebun karet',
    caption: 'Jejak penyadap karet',
    category: 'Pertanian',
    aspect: '3/4'
  },
  {
    src: '/images/potentials/editorial_documentary_photograph_of_the_harvest_season_in_desa_air_putih_riau.png',
    alt: 'Musim panen',
    caption: 'Gotong royong di musim panen',
    category: 'Pertanian',
    aspect: '3/2'
  },
  {
    src: '/images/potentials/editorial_documentary_photograph_of_a_village_market_pasar_desa_in_desa_air.png',
    alt: 'Pasar desa',
    caption: 'Denyut ekonomi warga',
    category: 'Pertanian',
    aspect: '1/1'
  },
  {
    src: '/images/potentials/editorial_documentary_photograph_of_a_local_village_umkm_workshop_small_medium.png',
    alt: 'UMKM',
    caption: 'Kreativitas usaha kecil',
    category: 'Pertanian',
    aspect: '4/3'
  },
  {
    src: '/images/hero/top_down_orthographic_drone_photograph_of_a_palm_oil_plantation_at_the_edge_of.png',
    alt: 'Pola kebun',
    caption: 'Tata letak dari udara',
    category: 'Pertanian',
    aspect: '1/1'
  },

  // MASYARAKAT
  {
    src: '/images/people/editorial_documentary_portrait_of_the_village_head_kepala_desa_of_desa_air.png',
    alt: 'Kepala Desa',
    caption: 'Pemimpin yang melayani',
    category: 'Masyarakat',
    aspect: '3/4'
  },
  {
    src: '/images/people/editorial_documentary_portrait_of_a_village_elder_in_desa_air_putih_indragiri.png',
    alt: 'Tetua desa',
    caption: 'Penjaga kearifan',
    category: 'Masyarakat',
    aspect: '3/4'
  },
  {
    src: '/images/people/editorial_documentary_portrait_of_a_veteran_farmer_in_desa_air_putih_riau.png',
    alt: 'Petani tua',
    caption: 'Pengalaman bertani',
    category: 'Masyarakat',
    aspect: '4/5'
  },
  {
    src: '/images/people/editorial_documentary_portrait_of_a_local_umkm_small_business_owner_in_desa_air.png',
    alt: 'Pemilik UMKM',
    caption: 'Semangat berwirausaha',
    category: 'Masyarakat',
    aspect: '4/5'
  },
  {
    src: '/images/people/editorial_documentary_photograph_of_an_indonesian_mother_in_desa_air_putih.png',
    alt: 'Ibu',
    caption: 'Pilar keluarga',
    category: 'Masyarakat',
    aspect: '3/4'
  },
  {
    src: '/images/people/editorial_documentary_portrait_of_a_village_teacher_in_desa_air_putih_riau.png',
    alt: 'Guru desa',
    caption: 'Mendidik generasi bangsa',
    category: 'Masyarakat',
    aspect: '3/4'
  },
  {
    src: '/images/people/editorial_documentary_photograph_of_a_farmer_in_desa_air_putih_riau_indonesia..png',
    alt: 'Petani',
    caption: 'Bersiap turun ke sawah',
    category: 'Masyarakat',
    aspect: '4/3'
  },
  {
    src: '/images/gallery/editorial_documentary_photograph_of_a_quiet_unpaved_village_road_in_desa_air.png',
    alt: 'Jalan tanah',
    caption: 'Langkah warga di pagi hari',
    category: 'Masyarakat',
    aspect: '16/9'
  },
  {
    src: '/images/hero/cinematic_drone_photography_of_desa_air_putih_riau_indonesia._a_quiet_village.png',
    alt: 'Desa dari jauh',
    caption: 'Rumah bagi ratusan jiwa',
    category: 'Masyarakat',
    aspect: '16/9'
  },
  {
    src: '/images/hero/cinematic_drone_photography_of_desa_air_putih_riau_indonesia._the_transition.png',
    alt: 'Transisi desa',
    caption: 'Infrastruktur dan alam',
    category: 'Masyarakat',
    aspect: '3/2'
  },

  // BUDAYA (Anak-anak, Tradisi, Agama)
  {
    src: '/images/gallery/editorial_documentary_photograph_of_a_community_gathering_in_desa_air_putih.png',
    alt: 'Kumpul warga',
    caption: 'Tradisi gotong royong',
    category: 'Budaya',
    aspect: '3/2'
  },
  {
    src: '/images/gallery/editorial_documentary_photograph_of_a_village_discussion_in_desa_air_putih_riau.png',
    alt: 'Musyawarah',
    caption: 'Mufakat dalam balai',
    category: 'Budaya',
    aspect: '16/9'
  },
  {
    src: '/images/gallery/editorial_documentary_photograph_of_family_activities_in_desa_air_putih_riau.png',
    alt: 'Keluarga',
    caption: 'Kehangatan rumah tangga',
    category: 'Budaya',
    aspect: '4/3'
  },
  {
    src: '/images/gallery/editorial_documentary_photograph_of_traditional_cooking_in_desa_air_putih_riau.png',
    alt: 'Memasak tradisional',
    caption: 'Resep warisan leluhur',
    category: 'Budaya',
    aspect: '1/1'
  },
  {
    src: '/images/people/editorial_documentary_photograph_of_children_playing_in_desa_air_putih_riau.png',
    alt: 'Anak bermain',
    caption: 'Tawa di halaman',
    category: 'Budaya',
    aspect: '4/3'
  },
  {
    src: '/images/people/editorial_documentary_photograph_of_children_walking_to_school_along_a_quiet.png',
    alt: 'Berangkat sekolah',
    caption: 'Generasi penerus desa',
    category: 'Budaya',
    aspect: '3/4'
  },
  {
    src: '/images/gallery/editorial_documentary_photograph_of_the_village_mosque_in_desa_air_putih_riau.png',
    alt: 'Masjid desa',
    caption: 'Pusat spiritual warga',
    category: 'Budaya',
    aspect: '3/2'
  },
  {
    src: '/images/hero/top_down_orthographic_drone_photograph_of_the_village_mosque_in_desa_air_putih.png',
    alt: 'Masjid dari udara',
    caption: 'Kubah di antara hijau',
    category: 'Budaya',
    aspect: '1/1'
  },
  {
    src: '/images/gallery/editorial_documentary_photograph_of_a_traditional_wooden_house_rumah_panggung.png',
    alt: 'Rumah panggung',
    caption: 'Arsitektur vernakular Melayu',
    category: 'Budaya',
    aspect: '4/3'
  },
  {
    src: '/images/hero/top_down_orthographic_drone_photograph_of_the_village_school_in_desa_air_putih (1).png',
    alt: 'Sekolah desa',
    caption: 'Bangunan pendidikan',
    category: 'Budaya',
    aspect: '4/3'
  },
  {
    src: '/images/hero/top_down_orthographic_drone_photograph_of_the_village_school_in_desa_air_putih.png',
    alt: 'Halaman sekolah',
    caption: 'Tempat belajar bersama',
    category: 'Budaya',
    aspect: '1/1'
  },
  {
    src: '/images/hero/top_down_orthographic_drone_photograph_of_the_village_office_kantor_desa_in.png',
    alt: 'Kantor desa',
    caption: 'Pusat administrasi',
    category: 'Budaya',
    aspect: '16/9'
  },

  // SEJARAH & ARSIP (Black and white / historical)
  {
    src: '/images/history/historical_documentary_photograph_of_a_traditional_community_meeting_musyawarah.png',
    alt: 'Musyawarah lama',
    caption: 'Dokumen musyawarah perdana',
    date: 'Arsip 1970',
    category: 'Sejarah',
    aspect: '4/3'
  },
  {
    src: '/images/history/historical_documentary_photograph_of_the_old_village_well_and_spring_mata_air.png',
    alt: 'Mata air tua',
    caption: 'Sumber air pertama',
    date: 'Arsip 1968',
    category: 'Sejarah',
    aspect: '3/4'
  },
  {
    src: '/images/history/historical_documentary_portrait_of_the_village_founders_perintis_desa_of_desa.png',
    alt: 'Perintis desa',
    caption: 'Potret perintis Air Putih',
    date: 'Arsip 1965',
    category: 'Sejarah',
    aspect: '4/5'
  },
  {
    src: '/images/history/vintage_historical_documentary_photograph_of_the_original_settlement_of_desa.png',
    alt: 'Pemukiman asli',
    caption: 'Bentuk awal permukiman',
    date: 'Arsip 1962',
    category: 'Sejarah',
    aspect: '16/9'
  },
  
  // ARSIP (Ilustrasi dan Tekstur)
  {
    src: '/images/gallery/hand_drawn_charcoal_illustration_of_a_circle_of_people_holding_hands.png',
    alt: 'Ilustrasi gotong royong',
    caption: 'Simbol persatuan',
    category: 'Arsip',
    aspect: '1/1'
  },
  {
    src: '/images/gallery/hand_drawn_charcoal_illustration_of_a_deep_rooted_banyan_tree_representing_akar.png',
    alt: 'Pohon beringin',
    caption: 'Akar budaya yang kuat',
    category: 'Arsip',
    aspect: '3/4'
  },
  {
    src: '/images/gallery/hand_drawn_charcoal_illustration_of_a_lightbulb_integrated_with_a_sprout.png',
    alt: 'Inovasi alam',
    caption: 'Tumbuh dengan gagasan baru',
    category: 'Arsip',
    aspect: '1/1'
  },
  {
    src: '/images/textures/seamless_high_resolution_editorial_background_texture_of_natural_unbleached.png',
    alt: 'Tekstur kertas',
    caption: 'Bahan cetak arsip',
    category: 'Arsip',
    aspect: '16/9'
  },
  {
    src: '/images/textures/seamless_high_resolution_editorial_background_texture_of_old_weathered_book.png',
    alt: 'Buku usang',
    caption: 'Sampul buku sejarah desa',
    category: 'Arsip',
    aspect: '4/3'
  },
  {
    src: '/images/textures/seamless_high_resolution_editorial_background_texture_of_soft_palm_leaf_shadows.png',
    alt: 'Bayangan daun',
    caption: 'Jejak cahaya sore',
    category: 'Arsip',
    aspect: '3/2'
  },
  {
    src: '/images/textures/seamless_high_resolution_editorial_background_texture_of_warm_off_white.png',
    alt: 'Kanvas',
    caption: 'Medium cerita',
    category: 'Arsip',
    aspect: '21/9'
  }
];
