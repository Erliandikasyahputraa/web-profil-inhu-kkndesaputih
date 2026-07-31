import { Helmet } from 'react-helmet-async';

interface PageMetadataProps {
  title: string;
  description: string;
  keywords?: string;
}

export function PageMetadata({ title, description, keywords }: PageMetadataProps) {
  const siteName = import.meta.env.VITE_SITE_NAME || 'Desa Air Putih';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
