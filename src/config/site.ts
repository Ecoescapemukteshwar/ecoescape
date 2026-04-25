// Canonical NAP (Name / Address / Phone) for the property.
// Every schema generator and SEO meta block imports from here.
// PIN 263138 confirmed correct via India Post: Mukteshwar (Kumaon) is a
// Sub Post Office under PIN 263138 in Nainital District. PIN 263132
// covers Bhowali / Kainchi / surrounding blocks — not Mukteshwar.
// TripAdvisor's listing of 263132 is therefore wrong; their profile
// should be corrected on the operational side. Audit finding C5 resolved.
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
  // Display name for blog/landing-page bylines and Person-typed JSON-LD
  // author. Kept as a single source so future content pages stay in sync.
  founderName: "Shaurya Uppal",
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
