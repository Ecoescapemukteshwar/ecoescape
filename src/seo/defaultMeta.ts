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
    // addressLocality is the city/town only ("Mukteshwar"). Nainital
    // District is captured in the property description prose; mixing it
    // into the locality field made schema parsers see two different
    // addresses across pages (Org schema used "Mukteshwar", LodgingBusiness
    // used "Mukteshwar, Nainital District"). Standardized to plain locality.
    "addressLocality": siteConfig.address.addressLocality,
    "addressRegion": siteConfig.address.addressRegion,
    "postalCode": siteConfig.address.postalCode,
    "addressCountry": siteConfig.address.addressCountry,
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": siteConfig.geo.latitude,
    "longitude": siteConfig.geo.longitude,
  },
  "hasMap": `https://maps.google.com/?q=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`,
  "priceRange": "₹₹",
  // starRating is for official government/classification (e.g., "3-star
  // hotel"). The property is unclassified boutique — omit to avoid
  // conflicting with the guest-score aggregateRating.
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": siteConfig.aggregateRating.ratingValue,
    "reviewCount": siteConfig.aggregateRating.reviewCount,
    "bestRating": siteConfig.aggregateRating.bestRating,
  },
  "numberOfRooms": siteConfig.unitCount,
  "containsPlace": [
    { "@type": "Apartment", "name": "Suite with Mountain View", "url": `${siteUrl}/rooms/suite-with-mountain-view` },
    { "@type": "Apartment", "name": "Spacious Apartment", "url": `${siteUrl}/rooms/spacious-apartment` },
    { "@type": "Apartment", "name": "Family Room", "url": `${siteUrl}/rooms/family-room` },
    { "@type": "Apartment", "name": "Family Room 2", "url": `${siteUrl}/rooms/family-room-2` },
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "name": "Check-in",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "13:00",
      "closes": "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "name": "Check-out",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "11:00",
    },
  ],
  "checkinTime": "13:00",
  "checkoutTime": "11:00",
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
