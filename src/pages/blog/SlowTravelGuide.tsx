import { useMemo } from "react";
import { useBookingNavigation } from "@/hooks/useBookingNavigation";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, Heart, TreePine, Sunrise, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import slowTravelImg from "@/assets/blog/slow-travel/featured.webp";

export default function SlowTravelGuide() {
  const { navigateToBooking } = useBookingNavigation();
  
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Slow Travel in Mukteshwar: How to Reconnect with Nature at Ecoescape",
    image: slowTravelImg,
    datePublished: formatDateForSchema("April 2, 2026"),
    author: {
      "@type": "Person",
      name: siteConfig.founderName,
    },
    publisher: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
      url: "https://ecoescapemukteshwar.com",
    },
    description: "Discover slow travel in Mukteshwar, Uttarakhand. Unplug with forest bathing, birdwatching, and garden therapy at Ecoescape -- the best wellness retreat in the Kumaon hills. Book your digital detox stay.",
    url: "https://ecoescapemukteshwar.com/blog/slow-travel-mukteshwar",
  }), []);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Slow Travel Guide" },
  ]), []);

  return (
    <BlogPostLayout
      meta={{
        title: "Slow Travel in Mukteshwar | Wellness Retreat & Nature Therapy Guide",
        description: "Discover slow travel in Mukteshwar, Uttarakhand. Unplug with forest bathing, birdwatching, and garden therapy at Ecoescape -- the best wellness retreat in the Kumaon hills. Book your digital detox stay.",
        canonical: "https://ecoescapemukteshwar.com/blog/slow-travel-mukteshwar",
        keywords: "slow travel India guide, wellness retreat Uttarakhand hills, nature therapy retreat Mukteshwar, digital detox India, eco-friendly homestay Kumaon, best wellness retreat near Delhi, mindfulness retreat Himalayas, quiet places to stay in Uttarakhand, slow travel Mukteshwar guide, forest bathing India, nature wellness getaway Kumaon hills, best boutique homestay Mukteshwar, peaceful mountain retreat Uttarakhand, offbeat wellness stay near Nainital"
      }}
      schema={{
        article: articleSchema,
        breadcrumb: breadcrumbSchema
      }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Wellness</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          Slow Travel in Mukteshwar: Reconnecting with Nature at Ecoescape
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" /> April 2, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> 8 min read
          </span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
        <img src={slowTravelImg} alt="Slow travel wellness experience at Ecoescape Mukteshwar with panoramic Himalayan views at sunrise" className="w-full h-auto" />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground italic">
          "Slow travel is not just about the distance covered, but the depth of the experience."
        </p>

        <p>
          In a world that celebrates speed, Mukteshwar offers a different tempo. Here, the day doesn't start with an alarm, 
          but with the soft chirping of the Himalayan whistling thrush and the first golden light hitting the Nanda Devi peak. 
          At <strong>Ecoescape</strong>, we believe that travel should be a process of slowing down, not checking off lists.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
          <TreePine className="h-6 w-6 text-primary" /> What is Slow Travel?
        </h2>
        <p>
          Slow travel is an approach to travel that emphasizes connection: to local people, cultures, food, and music. 
          It relies on the idea that a trip should educate and have an emotional impact, in the present moment and for the future, 
          while remaining sustainable for local communities and the environment.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-10">
          <div className="bg-secondary p-6 rounded-xl border-l-4 border-primary">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-primary">
              <Sunrise className="h-5 w-5" /> Morning Mindfulness
            </h3>
            <p className="text-sm text-muted-foreground">
              Start your day on our terrace with a guided nature observation. No phones, just you and the range.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-xl border-l-4 border-primary">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-primary">
              <Heart className="h-5 w-5" /> Conscious Connection
            </h3>
            <p className="text-sm text-muted-foreground">
              Spend time in our 100+ plant garden, learning about local flora and sustainable cultivation.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Practical Tips for Your Slow Travel Escape to Mukteshwar</h2>
        <ul className="space-y-4">
          <li><strong>Stay Longer:</strong> Instead of 2 nights, try a 5-night stay to truly settle into the mountain rhythm.</li>
          <li><strong>Unplug:</strong> Set specific 'digital-free' hours to focus on the surrounding oak forests.</li>
          <li><strong>Walk Everywhere:</strong> Skip the car and explore the nearby village trails of Sunkiya and Sitla.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">Frequently Asked Questions About Slow Travel</h2>

        <div className="space-y-6 my-10">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">What is slow travel?</h3>
            <p className="text-muted-foreground">Slow travel is an approach that emphasizes deep connection to local people, cultures, food, and nature. Instead of rushing through tourist checklists, slow travelers stay longer in one place, engage with the community, and allow experiences to unfold naturally. It is sustainable, mindful, and far more rewarding.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">How to practice slow travel in India?</h3>
            <p className="text-muted-foreground">Choose a boutique homestay in a quieter destination like Mukteshwar. Stay 5+ nights instead of 2. Set digital-free hours each day. Walk village trails, visit local markets, cook with your hosts, and observe nature. The key is trading quantity of experiences for quality of connection.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Where can I do a digital detox in India?</h3>
            <p className="text-muted-foreground">The Kumaon hills of Uttarakhand are ideal for a digital detox. Mukteshwar, at 2286 meters, offers limited connectivity, pristine nature, and boutique homestays like Ecoescape that encourage unplugging. Forest bathing, birdwatching, and garden therapy replace screen time naturally.</p>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 my-10 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Ready for a Nature Retreat?</h2>
          <p className="text-muted-foreground mb-6">Come experience the serenity of the Kumaon hills. Our boutique rooms are optimized for rest and reconnection.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={navigateToBooking}>Book Your Stay</Button>
            <Button variant="whatsapp" size="lg" onClick={() => window.open(`${siteConfig.whatsappUrl}?text=I'm interested in a slow travel experience at Ecoescape.`, "_blank")}>
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </BlogPostLayout>
  );
}
