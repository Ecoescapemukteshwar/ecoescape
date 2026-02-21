export const siteConfig = {
  name: "Ecoescape Mukteshwar",
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
} as const;

export type SiteConfig = typeof siteConfig;
