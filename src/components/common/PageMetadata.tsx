import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://desaairputih.my.id';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface PageMetadataProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function PageMetadata({
  title,
  description,
  canonicalPath = '/',
  keywords,
  image = '/images/home/home_hero_01.webp',
  type = 'website',
  breadcrumbs,
  jsonLd,
}: PageMetadataProps) {
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = cleanPath === '/' ? `${DOMAIN}/` : `${DOMAIN}${cleanPath}`;
  const imageUrl = image.startsWith('http') ? image : `${DOMAIN}${image.startsWith('/') ? image : `/${image}`}`;
  const siteName = 'Desa Air Putih';

  // Generate BreadcrumbList JSON-LD if breadcrumbs provided
  const breadcrumbJsonLd = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: `${DOMAIN}/`,
      },
      ...breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: b.name,
        item: b.path.startsWith('http') ? b.path : `${DOMAIN}${b.path.startsWith('/') ? b.path : `/${b.path}`}`,
      })),
    ],
  } : null;

  // WebPage Schema
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: canonicalUrl,
    inLanguage: 'id-ID',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Desa Air Putih',
      url: `${DOMAIN}/`,
    },
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(webPageJsonLd)}
      </script>

      {breadcrumbJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      )}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
