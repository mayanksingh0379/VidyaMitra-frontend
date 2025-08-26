import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, image, jsonLd }) {
  const siteName = 'VidyaMitra';
  const fullTitle = title ? `${title} — ${siteName}` : siteName;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      {title && <meta property="og:title" content={fullTitle} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      {title && <meta name="twitter:title" content={fullTitle} />}
      {description && <meta name="twitter:description" content={description} />}

      {/* JSON-LD structured data if provided */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
