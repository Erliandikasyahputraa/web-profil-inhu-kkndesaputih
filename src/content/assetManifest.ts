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
    filename: "background_01.jpg",
    path: "/images/background/background_01.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/timeline.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/History/HistorySection.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene02Beginning.tsx" }
    ]
  },
  {
    filename: "background_02.jpg",
    path: "/images/background/background_02.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/story.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/timeline.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene02Beginning.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03Geografi.tsx" }
    ]
  },
  {
    filename: "gallery_landscape_01.jpg",
    path: "/images/gallery/landscape/gallery_landscape_01.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_02.jpg",
    path: "/images/gallery/landscape/gallery_landscape_02.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/KehidupanDesa/KehidupanDesaSection.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03People.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/pages/PemerintahanPage.tsx" }
    ]
  },
  {
    filename: "gallery_landscape_03.jpg",
    path: "/images/gallery/landscape/gallery_landscape_03.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/homepage/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_04.jpg",
    path: "/images/gallery/landscape/gallery_landscape_04.jpg",
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
    filename: "gallery_landscape_05.jpg",
    path: "/images/gallery/landscape/gallery_landscape_05.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_06.jpg",
    path: "/images/gallery/landscape/gallery_landscape_06.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_07.jpg",
    path: "/images/gallery/landscape/gallery_landscape_07.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_08.jpg",
    path: "/images/gallery/landscape/gallery_landscape_08.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_09.jpg",
    path: "/images/gallery/landscape/gallery_landscape_09.jpg",
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
    filename: "gallery_landscape_10.jpg",
    path: "/images/gallery/landscape/gallery_landscape_10.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "gallery_landscape_11.jpg",
    path: "/images/gallery/landscape/gallery_landscape_11.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_12.jpg",
    path: "/images/gallery/landscape/gallery_landscape_12.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_13.jpg",
    path: "/images/gallery/landscape/gallery_landscape_13.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/homepage/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03People.tsx" }
    ]
  },
  {
    filename: "gallery_landscape_14.jpg",
    path: "/images/gallery/landscape/gallery_landscape_14.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03People.tsx" }
    ]
  },
  {
    filename: "gallery_landscape_15.jpg",
    path: "/images/gallery/landscape/gallery_landscape_15.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "gallery_landscape_16.jpg",
    path: "/images/gallery/landscape/gallery_landscape_16.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "home_hero_01.jpg",
    path: "/images/home/home_hero_01.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/HomeComposition.tsx" }
    ]
  },
  {
    filename: "home_hero_02.jpg",
    path: "/images/home/home_hero_02.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "home_hero_03.jpg",
    path: "/images/home/home_hero_03.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/hero.ts" }
    ]
  },
  {
    filename: "kkn_activity_01.jpg",
    path: "/images/kkn/kkn_activity_01.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/timeline.ts" }
    ]
  },
  {
    filename: "kkn_activity_02.jpg",
    path: "/images/kkn/kkn_activity_02.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknJejakKegiatan.tsx" }
    ]
  },
  {
    filename: "kkn_activity_03.jpg",
    path: "/images/kkn/kkn_activity_03.jpg",
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
    filename: "kkn_activity_04.jpg",
    path: "/images/kkn/kkn_activity_04.jpg",
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
    filename: "kkn_activity_05.jpg",
    path: "/images/kkn/kkn_activity_05.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknJejakKegiatan.tsx" }
    ]
  },
  {
    filename: "kkn_activity_06.jpg",
    path: "/images/kkn/kkn_activity_06.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/History/HistorySection.tsx" }
    ]
  },
  {
    filename: "kkn_activity_07.jpg",
    path: "/images/kkn/kkn_activity_07.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/cta.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/nature.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/potentials.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/KehidupanDesa/KehidupanDesaSection.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknHero.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "kkn_activity_08.jpg",
    path: "/images/kkn/kkn_activity_08.jpg",
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
    filename: "kkn_activity_09.jpg",
    path: "/images/kkn/kkn_activity_09.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "kkn_activity_10.jpg",
    path: "/images/kkn/kkn_activity_10.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknJejakKegiatan.tsx" }
    ]
  },
  {
    filename: "kkn_activity_11.jpg",
    path: "/images/kkn/kkn_activity_11.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/homepage/gallery.ts" }
    ]
  },
  {
    filename: "struktur-perangkat-desa.png",
    path: "/images/pemerintahan/struktur-perangkat-desa.png",
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
    filename: "profil_content_01.jpg",
    path: "/images/profil/profil_content_01.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/homepage/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_02.jpg",
    path: "/images/profil/profil_content_02.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_03.jpg",
    path: "/images/profil/profil_content_03.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_04.jpg",
    path: "/images/profil/profil_content_04.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_05.jpg",
    path: "/images/profil/profil_content_05.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_06.jpg",
    path: "/images/profil/profil_content_06.jpg",
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
    filename: "profil_content_07.jpg",
    path: "/images/profil/profil_content_07.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  },
  {
    filename: "profil_content_08.jpg",
    path: "/images/profil/profil_content_08.jpg",
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
    filename: "profil_content_09.jpg",
    path: "/images/profil/profil_content_09.jpg",
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
    filename: "profil_content_10.jpg",
    path: "/images/profil/profil_content_10.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_11.jpg",
    path: "/images/profil/profil_content_11.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_12.jpg",
    path: "/images/profil/profil_content_12.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/potentials.ts" }
    ]
  },
  {
    filename: "profil_content_13.jpg",
    path: "/images/profil/profil_content_13.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_content_14.jpg",
    path: "/images/profil/profil_content_14.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_story_01.jpg",
    path: "/images/profil/profil_story_01.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" }
    ]
  },
  {
    filename: "profil_story_02.jpg",
    path: "/images/profil/profil_story_02.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/home/sections/IdentitasDesa/IdentitasDesa.tsx" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene01Identity.tsx" }
    ]
  },
  {
    filename: "profil_story_03.jpg",
    path: "/images/profil/profil_story_03.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/homepage/timeline.ts" },
    { page: "Global", section: "Global", sourceFile: "src/content/profile/index.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/profile/sections/Scene03People.tsx" }
    ]
  },
  {
    filename: "supporting_01.jpg",
    path: "/images/supporting/supporting_01.jpg",
    type: "photo",
    orientation: "landscape",
    usages: [
    { page: "Global", section: "Global", sourceFile: "src/content/assetManifest.ts" },
    { page: "Galeri", section: "All Gallery", sourceFile: "src/content/gallery.ts" },
    { page: "Global", section: "Global", sourceFile: "src/features/kkn/components/KknTeam.tsx" }
    ]
  }
];
