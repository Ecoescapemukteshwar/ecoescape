import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, Home, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookingNavigation } from "@/hooks/useBookingNavigation";
import featuredImg from "@/assets/blog/best-homestays/featured.webp";
import { siteConfig } from "@/config/site";

const HOMESTAYS = [
  { name: "Ecoescape Mukteshwar", location: "Mukteshwar Village", highlight: "180-degree Himalayan views & Organic meals", price: "Premium" },
  { name: "The Birdcage", location: "Leti Bunga", highlight: "Boutique experience & Gourmet food", price: "High-end" },
  { name: "Himnadi Homestay", location: "Sargakhet", highlight: "Budget-friendly & Local host", price: "Budget" },
  { name: "Sitla Estate", location: "Sitla", highlight: "Heritage vibe & Fruit orchards", price: "Premium" },
  { name: "The Colonel's Cottage", location: "Bhatelia", highlight: "Quiet location & Garden", price: "Mid-range" },
];

export default function BestHomestaysGuide() {
  const { navigateToBooking } = useBookingNavigation();

  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "10 Best Homestays in Mukteshwar with Himalayan Views (2026 Guide)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 23, 2026"),
    author: {
      "@type": "Person",
      name: siteConfig.founderName,
    },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Looking for the best homestays in Mukteshwar? Discover 10 top-rated stays offering stunning Himalayan views, home-cooked Kumaoni food, and authentic mountain hospitality.",
    url: "https://ecoescapemukteshwar.com/blog/best-homestays-in-mukteshwar-with-himalayan-views",
  }), []);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Best Homestays in Mukteshwar" },
  ]), []);

  const homestays = HOMESTAYS;

  return (
    <BlogPostLayout
      meta={{
        title: "10 Best Homestays in Mukteshwar with Himalayan Views (2026)",
        description: "Escape to the hills! Our 2026 guide lists the top 10 homestays in Mukteshwar featuring panoramic mountain views, local Kumaoni cuisine, and peaceful retreats.",
        canonical: "https://ecoescapemukteshwar.com/blog/best-homestays-in-mukteshwar-with-himalayan-views",
        keywords: "best homestays in mukteshwar, homestays with mountain view mukteshwar, mukteshwar stay with himalayan view, authentic homestays kumaon"
      }}
      schema={{
        article: articleSchema,
        breadcrumb: breadcrumbSchema
      }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Stay Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          10 Best Homestays in Mukteshwar with Himalayan Views (2026 Guide)
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 23, 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min read</span>
        </div>
      </header>

      <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
        <img
          src={featuredImg}
          alt="Homestay in Mukteshwar with clear view of the Himalayas"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground">
          In the heart of the Kumaon hills, Mukteshwar offers a uniquely peaceful experience that large hotel chains often cannot replicate. For those seeking a deeper connection with the mountains, staying at a **local homestay** is the best choice.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">Why Stay in a Homestay?</h2>
        <p className="text-muted-foreground">
          Unlike hotels, homestays in Mukteshwar offer a personalized touch that makes your vacation feel like a home away from home. Here's what you can expect:
        </p>
        <ul className="space-y-4 text-muted-foreground mt-4">
          <li className="flex gap-3"><Home className="h-5 w-5 text-primary shrink-0" /> <strong>Authentic Hospitality:</strong> Experience the warmth of Pahadi service.</li>
          <li className="flex gap-3"><Star className="h-5 w-5 text-primary shrink-0" /> <strong>Local Cuisine:</strong> Enjoy fresh, home-cooked Kumaoni meals like Mandua ki Roti and Gahat ki Dal.</li>
          <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary shrink-0" /> <strong>Offbeat Locations:</strong> Most homestays are tucked away from the main tourist crowds.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">Top Picks for 2026</h2>
        <div className="space-y-6">
          {homestays.map((h, i) => (
            <div key={i} className="p-6 rounded-xl bg-secondary/30 border border-border">
              <h3 className="text-xl font-semibold mb-2">{i + 1}. {h.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {h.location} • <span className="text-primary font-medium">{h.price}</span>
              </p>
              <p className="text-foreground">{h.highlight}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Finding the 'Perfect' View</h2>
        <p className="text-muted-foreground">
          When booking your stay, always ask if the rooms are **East-facing**. Mukteshwar is famous for its sunrises over the Nanda Devi and Trishul peaks. Stays like **Ecoescape Mukteshwar** are specifically located on a ridge to ensure every guest gets a front-row seat to this Himalayan spectacle.
        </p>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-10 rounded-r-xl">
          <h3 className="font-semibold text-foreground mb-2">Sustainable Choice</h3>
          <p className="text-muted-foreground text-sm">
            If you value sustainability along with views, <strong>Ecoescape Mukteshwar</strong> is currently the top-rated boutique homestay for conscious travelers.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" onClick={navigateToBooking}>Book Your Stay</Button>
          <Button variant="outline" size="lg" onClick={() => window.location.href = "/blog"}>Explore More Guides</Button>
        </div>
      </div>
    </BlogPostLayout>
  );
}
