// Default SEO metadata configuration
import { siteConfig } from "@/config/site";

export const defaultMeta = {
  title: "Ecoescape Mukteshwar | Best Boutique Homestay in Uttarakhand with Sunrise Views",
  description:
    "Experience Ecoescape Mukteshwar, the top-rated boutique homestay in Uttarakhand. Enjoy breathtaking Himalayan sunrise views, a lush 100+ plant garden, and authentic Kumaoni dining. Perfect for families, couples, and digital nomads seeking a serene mountain retreat.",
  keywords:
    "Ecoescape Mukteshwar, Mukteshwar homestay, Mukteshwar bed and breakfast, sunrise view property Mukteshwar, garden homestay Uttarakhand, safe homestay Mukteshwar, terrace dining Mukteshwar, best place to stay Mukteshwar",
  ogImage: "https://ecoescapemukteshwar.com/LOGO-opt.webp",
  ogImageWidth: "1200",
  ogImageHeight: "630",
  ogImageAlt: "Ecoescape Mukteshwar - A boutique homestay with sunrise views and lush gardens in Uttarakhand",
  twitterCard: "summary_large_image",
  canonical: "https://ecoescapemukteshwar.com",
};

export const siteUrl = "https://ecoescapemukteshwar.com";

export const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": siteConfig.name,
  "image": "https://ecoescapemukteshwar.com/LOGO-opt.webp",
  "description": defaultMeta.description,
  "url": siteUrl,
  "telephone": siteConfig.phone,
  "email": siteConfig.email.reservations,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.streetAddress,
    "addressLocality": siteConfig.address.addressLocalityFull,
    "addressRegion": siteConfig.address.addressRegion,
    "postalCode": siteConfig.address.postalCode,
    "addressCountry": siteConfig.address.addressCountry,
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": siteConfig.geo.latitude,
    "longitude": siteConfig.geo.longitude,
  },
  "priceRange": "₹₹",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": siteConfig.aggregateRating.ratingValue,
    "reviewCount": siteConfig.aggregateRating.reviewCount,
    "bestRating": siteConfig.aggregateRating.bestRating,
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "In-house Restaurant", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Sunrise Views", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Mountain Views", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "100+ Plant Garden", "value": true }
  ],
  "sameAs": [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.tripAdvisor,
  ]
};

// WebSite schema enables Google's site-name knowledge panel and the
// SearchAction sitelinks searchbox in some SERPs. Injected once on the
// homepage (PageMeta merges via includeDefaultSchema for now — single
// instance is fine).
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": siteUrl,
  "name": siteConfig.name,
  "alternateName": "Ecoescape",
  "publisher": {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    "name": siteConfig.name,
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// Organization schema with sameAs across social platforms — tells AI
// engines and search engines that these accounts belong to the same
// real-world entity. Links Ecoescape's brand identity across the web.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  "name": siteConfig.name,
  "url": siteUrl,
  "logo": "https://ecoescapemukteshwar.com/LOGO-opt.webp",
  "image": "https://ecoescapemukteshwar.com/LOGO-opt.webp",
  "telephone": siteConfig.phone,
  "email": siteConfig.email.reservations,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.streetAddress,
    "addressLocality": siteConfig.address.addressLocality,
    "addressRegion": siteConfig.address.addressRegion,
    "postalCode": siteConfig.address.postalCode,
    "addressCountry": siteConfig.address.addressCountry,
  },
  "founder": {
    "@type": "Person",
    "name": siteConfig.founderName,
  },
  "sameAs": [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.tripAdvisor,
  ],
};
