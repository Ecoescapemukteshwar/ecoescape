import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteUrl, defaultMeta, defaultSchema } from "./defaultMeta";

/**
 * PageMeta Component
 *
 * Reusable component for setting page-specific meta tags.
 * Wraps react-helmet-async for dynamic head tag management.
 *
 * @example
 * ```tsx
 * <PageMeta
 *   title="Mukteshwar Travel Blog | Guides & Tips"
 *   description="Discover Mukteshwar through local guides..."
 *   canonical="https://ecoescapemukteshwar.com/blog"
 * />
 * ```
 */
interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogImageAlt?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  /**
   * Whether to merge the global LodgingBusiness schema into this page's
   * JSON-LD. Defaults to true. Pages that already publish their own
   * comprehensive schema (Article + Breadcrumb on blog posts, Apartment
   * on room pages) can opt out to reduce noise.
   */
  includeDefaultSchema?: boolean;
}

export function PageMeta({
  title,
  description,
  canonical,
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogImageAlt,
  ogType = "website",
  keywords,
  noindex = false,
  ogTitle,
  ogDescription,
  jsonLd,
  includeDefaultSchema = true,
}: PageMetaProps) {
  const location = useLocation();

  // Use the canonical URL or fallback to site URL + current path
  const currentPath = location.pathname === "/" ? "" : location.pathname;
  const fullCanonical = canonical 
    ? (canonical.startsWith("http") ? canonical : `${siteUrl}${canonical}`) 
    : `${siteUrl}${currentPath}`;

  // Defaults from defaultMeta
  const finalOgImage = ogImage || defaultMeta.ogImage;
  const finalOgImageWidth = ogImageWidth || defaultMeta.ogImageWidth;
  const finalOgImageHeight = ogImageHeight || defaultMeta.ogImageHeight;
  const finalOgImageAlt = ogImageAlt || defaultMeta.ogImageAlt;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  // Merge defaultSchema with provided jsonLd (unless caller opts out)
  const userJsonLd = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const finalJsonLd = includeDefaultSchema
    ? [defaultSchema, ...userJsonLd]
    : userJsonLd;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow" />
      }

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:locale" content="en_IN" />
      {finalOgImage && <meta property="og:image" content={finalOgImage} />}
      {finalOgImageWidth && <meta property="og:image:width" content={finalOgImageWidth} />}
      {finalOgImageHeight && <meta property="og:image:height" content={finalOgImageHeight} />}
      {finalOgImageAlt && <meta property="og:image:alt" content={finalOgImageAlt} />}
      <meta property="og:site_name" content="Ecoescape Mukteshwar" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {finalOgImage && <meta name="twitter:image" content={finalOgImage} />}

      {/* Structured Data (JSON-LD) */}
      {finalJsonLd.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(finalJsonLd)}
        </script>
      )}
    </Helmet>
  );
}

export default PageMeta;
