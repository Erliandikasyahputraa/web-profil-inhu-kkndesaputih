export interface AssetManifestItem {
  filename: string;
  path: string;
  type: 'photo' | 'raster' | 'svg' | 'other';
  orientation?: 'landscape' | 'portrait' | 'square';
  usages: {
    page: string;
    section: string;
    sourceFile: string;
  }[];
}

export const ASSET_MANIFEST: AssetManifestItem[] = [
  {
    filename: "background_01.webp",
    path: "/images/background/background_01.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/timeline.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene02Beginning.tsx" }
    ]
  },
  {
    filename: "background_02.webp",
    path: "/images/background/background_02.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/story.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/timeline.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene02Beginning.tsx" }
    ]
  },
  {
    filename: "gallery_landscape_01.webp",
    path: "/images/gallery/landscape/gallery_landscape_01.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_02.webp",
    path: "/images/gallery/landscape/gallery_landscape_02.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" }
    ]
  },
  {
    filename: "gallery_landscape_03.webp",
    path: "/images/gallery/landscape/gallery_landscape_03.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/homepage/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_04.webp",
    path: "/images/gallery/landscape/gallery_landscape_04.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/homepage/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "gallery_landscape_05.webp",
    path: "/images/gallery/landscape/gallery_landscape_05.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_06.webp",
    path: "/images/gallery/landscape/gallery_landscape_06.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_07.webp",
    path: "/images/gallery/landscape/gallery_landscape_07.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_08.webp",
    path: "/images/gallery/landscape/gallery_landscape_08.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_09.webp",
    path: "/images/gallery/landscape/gallery_landscape_09.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/History/HistorySection.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "gallery_landscape_10.webp",
    path: "/images/gallery/landscape/gallery_landscape_10.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "gallery_landscape_11.webp",
    path: "/images/gallery/landscape/gallery_landscape_11.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_12.webp",
    path: "/images/gallery/landscape/gallery_landscape_12.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_13.webp",
    path: "/images/gallery/landscape/gallery_landscape_13.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/homepage/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" }
    ]
  },
  {
    filename: "gallery_landscape_14.webp",
    path: "/images/gallery/landscape/gallery_landscape_14.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_15.webp",
    path: "/images/gallery/landscape/gallery_landscape_15.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_16.webp",
    path: "/images/gallery/landscape/gallery_landscape_16.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "beranda_01.webp",
    path: "/images/home/beranda_01.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/IdentitasDesa/IdentitasDesa.tsx" }
    ]
  },
  {
    filename: "beranda_02.webp",
    path: "/images/home/beranda_02.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/History/HistorySection.tsx" }
    ]
  },
  {
    filename: "beranda_03.webp",
    path: "/images/home/beranda_03.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/KehidupanDesa/KehidupanDesaSection.tsx" }
    ]
  },
  {
    filename: "beranda_04.webp",
    path: "/images/home/beranda_04.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/potentials.ts" }
    ]
  },
  {
    filename: "home_hero_01.webp",
    path: "/images/home/home_hero_01.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/HomeComposition.tsx" }
    ]
  },
  {
    filename: "home_hero_02.webp",
    path: "/images/home/home_hero_02.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "home_hero_03.webp",
    path: "/images/home/home_hero_03.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/hero.ts" }
    ]
  },
  {
    filename: "kkn_activity_01.webp",
    path: "/images/kkn/kkn_activity_01.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/timeline.ts" }
    ]
  },
  {
    filename: "kkn_activity_02.webp",
    path: "/images/kkn/kkn_activity_02.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknJejakKegiatan.tsx" }
    ]
  },
  {
    filename: "kkn_activity_03.webp",
    path: "/images/kkn/kkn_activity_03.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknJejakKegiatan.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "kkn_activity_04.webp",
    path: "/images/kkn/kkn_activity_04.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/CTA/CTA.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknAbout.tsx" }
    ]
  },
  {
    filename: "kkn_activity_05.webp",
    path: "/images/kkn/kkn_activity_05.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknJejakKegiatan.tsx" }
    ]
  },
  {
    filename: "kkn_activity_06.webp",
    path: "/images/kkn/kkn_activity_06.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/History/HistorySection.tsx" }
    ]
  },
  {
    filename: "kkn_activity_07.webp",
    path: "/images/kkn/kkn_activity_07.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/cta.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/nature.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/KehidupanDesa/KehidupanDesaSection.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknHero.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "kkn_activity_08.webp",
    path: "/images/kkn/kkn_activity_08.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/potentials.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/History/HistorySection.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknJejakKegiatan.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "kkn_activity_09.webp",
    path: "/images/kkn/kkn_activity_09.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "kkn_activity_10.webp",
    path: "/images/kkn/kkn_activity_10.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknJejakKegiatan.tsx" }
    ]
  },
  {
    filename: "kkn_activity_11.webp",
    path: "/images/kkn/kkn_activity_11.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/homepage/gallery.ts" }
    ]
  },
  {
    filename: "pemerintahan_hero_01.webp",
    path: "/images/pemerintahan/pemerintahan_hero_01.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/pages/PemerintahanPage.tsx" }
    ]
  },
  {
    filename: "struktur-perangkat-desa.webp",
    path: "/images/pemerintahan/struktur-perangkat-desa.webp",
    type: "raster",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Global", section: "Global", sourceFile: "src/pages/PemerintahanPage.tsx" }
    ]
  },
  {
    filename: "struktur-perangkat-desa.svg",
    path: "/images/pemerintahan/struktur-perangkat-desa.svg",
    type: "svg",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Global", section: "Global", sourceFile: "src/pages/PemerintahanPage.tsx" }
    ]
  },
  {
    filename: "profil_content_01.webp",
    path: "/images/profil/profil_content_01.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/homepage/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_02.webp",
    path: "/images/profil/profil_content_02.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_03.webp",
    path: "/images/profil/profil_content_03.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_04.webp",
    path: "/images/profil/profil_content_04.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_05.webp",
    path: "/images/profil/profil_content_05.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_06.webp",
    path: "/images/profil/profil_content_06.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/homepage/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03People.tsx" }
    ]
  },
  {
    filename: "profil_content_07.webp",
    path: "/images/profil/profil_content_07.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "profil_content_08.webp",
    path: "/images/profil/profil_content_08.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/CTA/CTA.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "profil_content_09.webp",
    path: "/images/profil/profil_content_09.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/CTA/CTA.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "profil_content_10.webp",
    path: "/images/profil/profil_content_10.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_11.webp",
    path: "/images/profil/profil_content_11.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_12.webp",
    path: "/images/profil/profil_content_12.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/potentials.ts" }
    ]
  },
  {
    filename: "profil_content_13.webp",
    path: "/images/profil/profil_content_13.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_14.webp",
    path: "/images/profil/profil_content_14.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_story_01.webp",
    path: "/images/profil/profil_story_01.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_story_02.webp",
    path: "/images/profil/profil_story_02.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene01Identity.tsx" }
    ]
  },
  {
    filename: "profil_story_03.webp",
    path: "/images/profil/profil_story_03.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/timeline.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" }
    ]
  },
  {
    filename: "topografi.webp",
    path: "/images/profil/topografi.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03Geografi.tsx" }
    ]
  },
  {
    filename: "warga_profil_1.webp",
    path: "/images/profil/warga_profil_1.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03People.tsx" }
    ]
  },
  {
    filename: "warga_profil_2.webp",
    path: "/images/profil/warga_profil_2.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03People.tsx" }
    ]
  },
  {
    filename: "warga_profil_3.webp",
    path: "/images/profil/warga_profil_3.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03People.tsx" }
    ]
  },
  {
    filename: "warga_profil_4.webp",
    path: "/images/profil/warga_profil_4.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03People.tsx" }
    ]
  },
  {
    filename: "supporting_01.webp",
    path: "/images/supporting/supporting_01.webp",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  }
];
