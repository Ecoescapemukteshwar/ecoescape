import { Link } from "react-router-dom"
import { useMemo } from "react";
import { useBookingNavigation } from "@/hooks/useBookingNavigation";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, Leaf, Sun, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/sustainable-stays/featured.webp";
import { siteConfig } from "@/config/site";

const SUSTAINABLE_FEATURES = [
  { icon: <Sun className="h-6 w-6 text-primary" />, title: "Solar Powered", desc: "Ecoescape Mukteshwar utilizes solar energy for lighting and water heating." },
  { icon: <Leaf className="h-6 w-6 text-primary" />, title: "Organic Farming", desc: "Enjoy fresh farm-to-table meals grown in our own kitchen garden." },
  { icon: <Recycle className="h-6 w-6 text-primary" />, title: "Zero Plastic", desc: "Commitment to minimizing plastic waste through reusable options and local sourcing." },
];

export default function SustainableStaysGuide() {
  const { navigateToBooking } = useBookingNavigation();

  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Eco-Friendly & Sustainable Stays in Mukteshwar: A Conscious Traveler’s Guide",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 23, 2026"),
    author: {
      "@type": "Person",
      name: siteConfig.founderName,
    },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Looking for eco-friendly stays in Mukteshwar? Discover how sustainable tourism is shaping the Kumaon hills and explore the best green resorts and boutique stays for a conscious escape.",
    url: "https://ecoescapemukteshwar.com/blog/sustainable-stays-in-mukteshwar-guide",
  }), []);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Sustainable Stays in Mukteshwar" },
  ]), []);

  const sustainableFeatures = SUSTAINABLE_FEATURES;

  return (
    <BlogPostLayout
      meta={{
        title: "Sustainable & Eco-Friendly Stays in Mukteshwar | 2026 Guide",
        description: "Choose a greener way to travel! Our guide to sustainable stays in Mukteshwar highlights eco-friendly resorts, boutique homestays, and zero-waste travel tips.",
        canonical: "https://ecoescapemukteshwar.com/blog/sustainable-stays-in-mukteshwar-guide",
        keywords: "eco friendly stays mukteshwar, sustainable tourism uttarakhand, green resorts mukteshwar, ecoescape mukteshwar, organic stays india"
      }}
      schema={{
        article: articleSchema,
        breadcrumb: breadcrumbSchema
      }}
    >
          <header className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Conscious Travel</span>
            <h1 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Eco-Friendly & Sustainable Stays in Mukteshwar: A 2026 Guide
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 23, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Sustainable boutique stay in Mukteshwar using natural materials" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground dark:prose-invert">
            <p className="text-xl leading-relaxed text-muted-foreground italic border-l-4 border-primary pl-6 mb-10">
              "Travel is not just about seeing new places, but also about protecting them for the future."
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              As travel becomes more popular, its impact on fragile ecosystems like the Himalayas increases. In Mukteshwar, a new wave of **conscious tourism** is emerging, where stays are designed to complement nature rather than replace it.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-8">What Makes a Stay Sustainable?</h2>
            <div className="grid grid-cols-1 gap-6 mb-12">
              {sustainableFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                    <p className="text-muted-foreground text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-6">Leading the Way: Ecoescape Mukteshwar</h2>
            <p className="text-muted-foreground">
              **Ecoescape Mukteshwar** was founded on the principle of minimal intervention. Our rooms use local stone and mud plastering techniques that maintain natural temperature control, reducing the need for artificial heating and cooling.
            </p>
            <p className="text-muted-foreground mt-4">
              We also pride ourselves on our **water conservation systems** and a zero-waste policy that prioritizes composting and local sourcing over imported goods.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-6">How You Can Be a Greener Traveler</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>💧 <strong>Carry a Reusable Bottle:</strong> Avoid single-use plastic water bottles. Most homestays provide filtered mountain water.</li>
              <li>🚶 <strong>Walk More:</strong> Mukteshwar is best explored on foot. Use existing trails to avoid disturbing local wildlife.</li>
              <li>🛍️ <strong>Buy Local:</strong> Support the village economy by purchasing handicrafts and locally grown fruits (Kafals, Pulms, Apricots).</li>
              <li>🔌 <strong>Save Energy:</strong> Be mindful of electricity usage, especially during peak tourist seasons.</li>
            </ul>

            <div className="bg-secondary/30 p-8 my-10 rounded-2xl text-center">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Book a Conscious Stay</h3>
              <p className="text-muted-foreground mb-6">
                Ready to experience luxury that doesn't cost the earth? Reserve your room at Ecoescape Mukteshwar today.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" onClick={navigateToBooking}>Reserve Now</Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/blog/fruit-orchards-of-mukteshwar-guide">Read Fruit Orchard Guide</Link>
                </Button>
              </div>
            </div>
          </div>
    </BlogPostLayout>
  );
}
