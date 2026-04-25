// Canonical NAP (Name / Address / Phone) for the property.
// Every schema generator and SEO meta block imports from here.
// TODO: VERIFY postalCode with India Post — TripAdvisor lists 263132,
//       this codebase used 263138 in 4/5 places before centralization.
//       The audit (C5) flagged this conflict; resolve before next prod push.
export const siteAddress = {
  streetAddress: "Mukteshwar Village",
  addressLocality: "Mukteshwar",
  addressLocalityFull: "Mukteshwar, Nainital District",
  addressRegion: "Uttarakhand",
  postalCode: "263138",
  addressCountry: "IN",
} as const;

export const siteGeo = {
  latitude: 29.4722,
  longitude: 79.6472,
} as const;

export const siteAggregateRating = {
  ratingValue: "4.8",
  reviewCount: "125",
  bestRating: "5",
} as const;

export const siteConfig = {
  name: "Ecoescape Mukteshwar",
  // The property is technically a boutique aparthotel: 4 self-contained
  // apartment-style units, each with a different layout. Marketing copy
  // can use "boutique homestay" — schema and AI-facing surfaces use this.
  propertyType: "Aparthotel",
  unitCount: 4,
  phone: "+919667846787",
  phoneDisplay: "+91 96678 46787",
  whatsappUrl: "https://wa.me/919667846787",
  email: {
    reservations: "reservations@ecoescapemukteshwar.com",
    general: "ecoescape.mukteshwar@gmail.com",
  },
  formspreeEndpoint:
    import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mqknpjea",
  roomPrices: {
    suite: 3500,
    apartment: 5500,
    familyRoom: 4500,
    familyRoom2: 4000,
  },
  social: {
    instagram: "https://www.instagram.com/ecoescape.mukteshwar/",
    facebook:
      "https://www.facebook.com/people/Ecoescape-Mukteshwar/61554610562549/",
    tripAdvisor:
      "https://www.tripadvisor.in/Hotel_Review-g1162527-d26876576-Reviews-Ecoescape_Mukteshwar-Mukteshwar_Nainital_District_Uttarakhand.html",
  },
  location: {
    village: "Mukteshwar Village",
    district: "Nainital District",
    state: "Uttarakhand",
    country: "India",
  },
  address: siteAddress,
  geo: siteGeo,
  aggregateRating: siteAggregateRating,
} as const;

export type SiteConfig = typeof siteConfig;
