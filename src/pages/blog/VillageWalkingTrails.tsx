import { useMemo } from "react";
import { useBookingNavigation } from "@/hooks/useBookingNavigation";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, MapPin, Compass, Mountain, MessageCircle, Flower2, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import villageImg from "@/assets/blog/village-trails/featured.webp";

export default function VillageWalkingTrails() {
  const { navigateToBooking } = useBookingNavigation();
  
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Beyond the Viewpoints: 5 Enchanting Village Walks Around Mukteshwar",
    image: villageImg,
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
    description: "Explore 5 enchanting village walking trails near Mukteshwar including Sunkiya Forest Loop and Sitla Ridge. Discover offbeat Kumaon hiking for an authentic Uttarakhand experience. Plan your trek.",
    url: "https://ecoescapemukteshwar.com/blog/offbeat-village-walking-trails",
  }), []);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Village Walking Trails" },
  ]), []);

  return (
    <BlogPostLayout
      meta={{
        title: "5 Best Village Walking Trails in Mukteshwar | Offbeat Kumaon Hikes",
        description: "Explore 5 enchanting village walking trails near Mukteshwar including Sunkiya Forest Loop and Sitla Ridge. Discover offbeat Kumaon hiking for an authentic Uttarakhand experience. Plan your trek.",
        canonical: "https://ecoescapemukteshwar.com/blog/offbeat-village-walking-trails",
        keywords: "village walks near Mukteshwar, offbeat trails in Kumaon, hiking trails near Nainital Uttarakhand, Sunkiya village walk Mukteshwar, Sitla ridge trail, hidden gems of Kumaon hills, best walking trails in Mukteshwar, village tourism Uttarakhand, authentic mountain village experience India, trekking near Mukteshwar for beginners, offbeat places to visit in Kumaon, easy hikes near Nainital, Kumaoni village culture experience, nature walks in Uttarakhand hills, off the beaten path Mukteshwar"
      }}
      schema={{
        article: articleSchema,
        breadcrumb: breadcrumbSchema
      }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Hidden Gems</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          Beyond the Viewpoints: 5 Enchanting Village Walks Around Mukteshwar
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" /> April 2, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> 7 min read
          </span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
        <img src={villageImg} alt="Traditional Kumaoni village stone path walking trail near Mukteshwar in Sunkiya Kumaon hills" className="w-full h-auto" />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p>
          While the dramatic cliffs of <em>Chauli Ki Jali</em> and the ancient <em>Mukteshwar Dham</em> are must-visit attractions, the soul of the 
          Kumaon region resides in its quiet, centuries-old villages. Exploring these trails is the best way to witness the authentic rhythm 
          of mountain life.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" /> Top 5 Village Walking Trails
        </h2>

        <div className="space-y-6 my-10">
          <div className="bg-secondary p-8 rounded-2xl shadow-soft border border-border transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Compass className="h-5 w-5 text-primary" /> 1. The Sunkiya Forest Loop
            </h3>
            <p className="text-sm text-muted-foreground">
              A gentle 3km loop starting from our gate. It takes you through deep deodar forests and ancient stone step-farms.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-2xl shadow-soft border border-border transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Mountain className="h-5 w-5 text-primary" /> 2. The Sitla Ridge Walk
            </h3>
            <p className="text-sm text-muted-foreground">
              A high-altitude trail offering panoramic views of the Trishul and Nanda Devi peaks while walking through colonial-era orchards.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-2xl shadow-soft border border-border transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Flower2 className="h-5 w-5 text-primary" /> 3. The Peora Village Heritage Walk
            </h3>
            <p className="text-sm text-muted-foreground">
              A moderate 4km trail through one of Kumaon's oldest settlements. Discover colonial-era stone houses, terraced step farms, and traditional Kumaoni architecture unchanged for centuries. The walk ends at a scenic viewpoint overlooking the Kosi river valley.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-2xl shadow-soft border border-border transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <TreePine className="h-5 w-5 text-primary" /> 4. The Sargakhet Forest Trail
            </h3>
            <p className="text-sm text-muted-foreground">
              An easy 2.5km walk through towering deodar forests leading to a secluded mountain meadow. The trail is shaded and gentle, making it perfect for families. Wildflowers line the path in spring and summer, and you may spot Himalayan monal pheasants along the way.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-2xl shadow-soft border border-border transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Mountain className="h-5 w-5 text-primary" /> 5. The Nathuwakhan Valley Walk
            </h3>
            <p className="text-sm text-muted-foreground">
              A moderate 5km valley trail offering the most diverse landscape of all five walks. Pass through local artisan workshops where craftsmen create traditional Kumaoni tools and textiles, cross small streams, and enjoy panoramic views of the snow-capped peaks. Best done in the early morning.
            </p>
          </div>
        </div>

        <p className="mt-8">
          Walking these trails doesn't just offer great views, it supports the local economy and preserves the natural landscape. 
          Remember to always carry your reusable water bottle and respect the local architecture.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">Frequently Asked Questions About Village Walks in Mukteshwar</h2>

        <div className="space-y-6 my-10">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Which are the best village walks near Mukteshwar?</h3>
            <p className="text-muted-foreground">The top 5 village walks near Mukteshwar are the Sunkiya Forest Loop (easy 3km), the Sitla Ridge Walk (moderate with panoramic views), the Peora Village Heritage Walk (4km through colonial-era settlements), the Sargakhet Forest Trail (easy 2.5km through deodar forests), and the Nathuwakhan Valley Walk (5km with artisan workshops). All start within 30 minutes of Ecoescape.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Are there easy hiking trails in Kumaon?</h3>
            <p className="text-muted-foreground">Yes, several trails around Mukteshwar are easy and suitable for beginners and families. The Sunkiya Forest Loop (3km) and Sargakhet Forest Trail (2.5km) are gentle walks with minimal elevation gain. The paths are well-defined stone trails through forests and villages.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">How difficult are the village walking trails near Nainital?</h3>
            <p className="text-muted-foreground">The village trails near Mukteshwar (just 50 km from Nainital) range from easy to moderate. Most trails are 2-5 km long with gentle elevation changes. They are far less strenuous than typical Himalayan treks, making them accessible to anyone with basic fitness. Comfortable walking shoes are all you need.</p>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 my-10 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Plan Your Adventure</h2>
          <p className="text-muted-foreground mb-6">Stay with us and we'll provide you with detailed offline maps for these secret trails.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={navigateToBooking}>Explore Now</Button>
            <Button variant="whatsapp" size="lg" onClick={() => window.open(`${siteConfig.whatsappUrl}?text=I want to know more about the walking trails around Mukteshwar.`, "_blank")}>
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </BlogPostLayout>
  );
}
