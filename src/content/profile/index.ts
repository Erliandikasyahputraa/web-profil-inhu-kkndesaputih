import type { TimelineItem } from '@/components/editorial';

export const profileContent = {
  seo: {
    title: "Profil Desa - Desa Air Putih Digital Experience",
    description: "Profil, Sejarah, Visi, Misi, dan Filosofi Desa Air Putih."
  },
  hero: {
    overline: "Profil Desa",
    heading: "Desa Air Putih",
    lead: "Sebuah desa yang menjunjung tinggi kebersamaan, menjaga warisan tradisi, dan terus berinovasi untuk masa depan yang lebih baik.",
    image: {
      src: "/images/placeholders/profil-hero.jpg",
      alt: "Pemandangan indah Desa Air Putih",
    }
  },
  welcome: {
    heading: "Sambutan Kepala Desa",
    body: [
      "Konten sementara. Sambutan resmi dari Kepala Desa Air Putih akan ditempatkan di bagian ini setelah proses penyusunan dan verifikasi selesai dilakukan bersama dengan perangkat desa terkait.",
      "Visi kepemimpinan dan harapan terhadap partisipasi warga akan disampaikan di sini untuk memberikan gambaran arah pembangunan desa ke depan."
    ],
    callout: {
      content: "Membangun desa bukan sekadar membangun infrastruktur, melainkan membangun kebersamaan dan kesejahteraan seluruh warganya.",
      title: "Kepala Desa Air Putih",
      variant: "default" as const
    },
    image: {
      src: "/images/placeholders/kepala-desa.jpg",
      alt: "Foto Kepala Desa Air Putih"
    }
  },
  history: {
    heading: "Sejarah Desa",
    body: [
      "Konten sementara. Naskah resmi mengenai sejarah awal berdirinya Desa Air Putih, asal usul nama desa, serta tokoh-tokoh awal yang merintis permukiman ini akan ditempatkan pada bagian ini.",
      "Sejarah desa merupakan warisan yang sangat penting untuk dilestarikan agar generasi muda memahami asal-usul dan nilai luhur yang telah ditanamkan oleh para leluhur."
    ],
    callout: {
      content: "Air Putih bukan sekadar nama, melainkan cerminan hati warganya yang jernih dan tulus dalam bergotong royong.",
      variant: "default" as const
    },
    timeline: [
      {
        year: "Tahun Awal",
        title: "Pembentukan Pemukiman",
        description: "Konten sementara fase awal pembentukan desa."
      },
      {
        year: "Tahun Pertengahan",
        title: "Perkembangan Desa",
        description: "Konten sementara fase perkembangan desa dan pertumbuhan penduduk."
      },
      {
        year: "Tahun Modern",
        title: "Desa Air Putih Saat Ini",
        description: "Konten sementara mengenai status dan capaian desa di masa modern."
      }
    ] as TimelineItem[]
  },
  vision: {
    heading: "Visi & Misi",
    body: [
      "Konten sementara. Visi utama Desa Air Putih adalah membangun masyarakat yang religius, sejahtera, dan mandiri dengan tetap melestarikan kearifan lokal.",
      "Untuk mewujudkan visi tersebut, kami mengemban misi: (1) Meningkatkan tata kelola pemerintahan desa yang bersih dan melayani. (2) Mendorong pertumbuhan ekonomi kerakyatan melalui BUMDes dan UMKM. (3) Membangun infrastruktur desa yang merata dan berkelanjutan."
    ],
    callout: {
      content: "Masa depan desa ini ada di tangan kita semua; mari melangkah bersama membangun kemandirian.",
      variant: "default" as const
    },
    missions: [
      "Meningkatkan tata kelola pemerintahan desa yang bersih dan melayani.",
      "Mendorong pertumbuhan ekonomi kerakyatan melalui BUMDes dan UMKM.",
      "Membangun infrastruktur desa yang merata dan berkelanjutan."
    ]
  },
  philosophy: {
    heading: "Motto & Nilai Desa",
    body: [
      "Konten sementara. Desa Air Putih berdiri di atas fondasi nilai-nilai leluhur yang tak lekang oleh waktu. Setiap langkah dan kebijakan desa selalu dijiwai oleh filosofi kearifan lokal.",
      "Kami percaya bahwa kemajuan tidak boleh menanggalkan akar tradisi, melainkan tradisi itulah yang menjadi penopang kemajuan."
    ],
    callout: {
      content: "Air yang putih akan selalu menjernihkan sekelilingnya.",
      variant: "highlight" as const
    },
    values: [
      {
        label: "Gotong Royong",
        description: "Semangat bahu-membahu dalam memecahkan masalah dan membangun fasilitas umum secara swadaya."
      },
      {
        label: "Religius",
        description: "Menjunjung tinggi nilai-nilai spiritual dalam setiap aspek kehidupan bermasyarakat."
      },
      {
        label: "Inovatif",
        description: "Terbuka terhadap perkembangan zaman dan teknologi untuk meningkatkan kualitas hidup."
      },
      {
        label: "Transparan",
        description: "Mengedepankan keterbukaan dalam tata kelola pemerintahan dan keuangan desa."
      }
    ]
  }
};
