import { useMemo } from "react";
import { useBookingNavigation } from "@/hooks/useBookingNavigation";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, Utensils, Flower2, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import farmImg from "@/assets/blog/farm-to-table/featured.webp";

export default function FarmToTableDining() {
  const { navigateToBooking } = useBookingNavigation();
  
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "From Garden to Plate: The Ultimate Farm-to-Table Experience in Mukteshwar",
    image: farmImg,
    datePublished: formatDateForSchema("April 2, 2026"),
    author: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
    },
    publisher: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
      url: "https://ecoescapemukteshwar.com",
    },
    description: "Experience authentic farm-to-table dining in Mukteshwar. Savor organic Kumaoni thali prepared with ingredients from our 100+ plant orchard. Book your Himalayan food journey at Ecoescape.",
    url: "https://ecoescapemukteshwar.com/blog/farm-to-table-mukteshwar-dining",
  }), []);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Farm-to-Table Dining" },
  ]), []);

  return (
    <BlogPostLayout
      meta={{
        title: "Farm-to-Table Dining in Mukteshwar | Organic Kumaoni Food | Ecoescape",
        description: "Experience authentic farm-to-table dining in Mukteshwar. Savor organic Kumaoni thali prepared with ingredients from our 100+ plant orchard. Book your Himalayan food journey at Ecoescape.",
        canonical: "https://ecoescapemukteshwar.com/blog/farm-to-table-mukteshwar-dining",
        keywords: "farm to table dining Mukteshwar, organic food homestay Uttarakhand, Kumaoni food Mukteshwar, where to eat in Mukteshwar, best restaurants in Mukteshwar for local food, traditional Kumaoni thali experience, organic farm stay Kumaon hills, farm fresh food Himalayas, sustainable dining Uttarakhand, best homestay food in Uttarakhand, farm to table restaurant near Nainital, organic orchard dining Kumaon"
      }}
      schema={{
        article: articleSchema,
        breadcrumb: breadcrumbSchema
      }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Food & Culture</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          From Garden to Plate: The Ultimate Farm-to-Table Experience in Mukteshwar
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" /> April 2, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> 9 min read
          </span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
        <img src={farmImg} alt="Traditional organic Kumaoni Thali with fresh mountain fruits at Ecoescape farm-to-table restaurant in Mukteshwar" className="w-full h-auto" />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p>
          There is something truly special about mountain food. The combination of high-altitude water, pure air, and traditional framing techniques 
          yields flavors that are impossible to replicate in the plains. At <strong>Ecoescape</strong>, we invite you to experience the authentic 
          taste of the Himalayan soul.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
          <Utensils className="h-6 w-6 text-primary" /> The Farm-to-Table Philosophy at Our Mukteshwar Homestay
        </h2>
        <p>
          Our dining experience is built on a foundation of sustainability and respect for the local land. We've eliminated unnecessary 
          logistics by sourcing directly from our surroundings.
        </p>

        <div className="bg-secondary p-8 rounded-2xl my-10 border-l-8 border-primary shadow-soft">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
             <Flower2 className="h-6 w-6 text-primary" /> Our 100+ Plant Garden
          </h3>
          <p className="text-muted-foreground leading-relaxed">
             Our orchard isn't just for decoration. It's the source of our fresh fruit juices, preserves, and seasonal vegetables. 
             From plums and peaches to seasonal herbs, your meals are often picked just hours before being served.
          </p>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" /> Supporting Local Kumaon Farmers
        </h2>
        <p>
          What we don't grow ourselves, we source from neighboring families in Mukteshwar. This ensures that the revenue stays within the 
          community and that we get the freshest milk, grains, and traditional Kumaoni pulses (like <em>Bhat</em> and <em>Gahat</em>).
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">Frequently Asked Questions About Farm-to-Table Dining in Mukteshwar</h2>

        <div className="space-y-6 my-10">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">What is farm-to-table dining?</h3>
            <p className="text-muted-foreground">Farm-to-table dining means your food is sourced directly from local farms and gardens, often harvested the same day. At Ecoescape, ingredients come from our 100+ plant orchard and neighboring Kumaoni farms, ensuring maximum freshness and minimal environmental impact.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">What Kumaoni dishes should I try in Mukteshwar?</h3>
            <p className="text-muted-foreground">Must-try Kumaoni dishes include <em>Bhat ki Churkani</em> (black bean curry), <em>Gahat ki Dal</em> (horse gram lentil), <em>Aloo ke Gutke</em> (spiced potatoes), and <em>Bal Mithai</em> (sweet dessert). Our traditional Kumaoni Thali includes all of these with fresh mountain fruits.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Is organic food available in Mukteshwar homestays?</h3>
            <p className="text-muted-foreground">Yes, Ecoescape grows over 100 varieties of fruits, vegetables, and herbs in our organic orchard. We also source milk, grains, and pulses from local Kumaoni farming families. All meals are prepared with fresh, chemical-free ingredients.</p>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 my-10 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Taste the Mountains</h2>
          <p className="text-muted-foreground mb-6">Book your stay and enjoy our signature Himalayan breakfast and Kumaoni Thali on the terrace.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={navigateToBooking}>Dine With Us</Button>
            <Button variant="whatsapp" size="lg" onClick={() => window.open(`${siteConfig.whatsappUrl}?text=I want to book a stay and experience the Kumaoni food at Ecoescape.`, "_blank")}>
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </BlogPostLayout>
  );
}
