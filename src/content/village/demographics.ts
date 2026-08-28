export const villageDemographics = {
  sectionTitle: "03 — GEOGRAFI & DEMOGRAFI",
  mainHeading: "Sebuah ruang seluas 1.692 Hektar.",
  descriptions: [
    "Desa Air Putih berada di Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Provinsi Riau. Luas wilayah daratan mencapai 1.692 Ha yang terbagi menjadi pemukiman seluas 400 Ha dan pertanian/perkebunan kelapa sawit seluas 1.292 Ha.",
    "Desa ini dihuni oleh total **4.185 jiwa** (2.073 laki-laki dan 2.112 perempuan), yang terbagi dalam **1.260 Kepala Keluarga**."
  ],
  mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127633.24355523455!2d103.04400760431327!3d-0.49079234850787134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e283b9c48858e3f!2sKecamatan%20Lubuk%20Batu%20Jaya%2C%20Kabupaten%20Indragiri%20Hulu%2C%20Riau!5e1!3m2!1sen!2sid!4v1716182103405!5m2!1sen!2sid",
  mapCaption: "Lokasi Desa Air Putih, Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Riau.",
  
  borders: {
    sectionTitle: "03 — BATAS WILAYAH",
    items: [
      { direction: "Utara", detail: "Desa Silikuan Hulu, Kecamatan Ukui" },
      { direction: "Selatan", detail: "Desa Kulim Jaya" },
      { direction: "Barat", detail: "Kebun Masyarakat Lubuk Batu Tinggal" },
      { direction: "Timur", detail: "Desa Lubuk Batu Tinggal / PTP Nusantara V" },
    ]
  },
  
  topography: {
    sectionTitle: "TOPOGRAFI & IKLIM",
    items: [
      { label: "Suhu Udara", value: "25-33 Derajat Celcius" },
      { label: "Curah Hujan", value: "1875 ml/th" },
      { label: "Ketinggian", value: "25 dpl" },
      { label: "Kontur Wilayah", value: "DATA TIDAK TERSEDIA", isMissing: true },
    ]
  },

  orbitation: {
    sectionTitle: "04 — JARAK ORBITASI",
    kecamatan: {
      label: "Jarak ke Ibu Kota Kecamatan",
      distance: "10 Km",
      time: "45 Menit",
      note: "*Berdasarkan data topografi jarak tercatat -/+ 14,5 KM."
    },
    kabupaten: {
      label: "Jarak ke Ibu Kota Kabupaten",
      distance: "70 Km",
      time: "120 Menit",
      note: "*Berdasarkan data topografi jarak tercatat -/+ 74,3 KM."
    }
  }
};
