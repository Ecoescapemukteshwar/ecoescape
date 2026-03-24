import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, Sun, CloudRain, Snowflake, ThermometerSun, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import bestTimeFeaturedImg from "@/assets/blog/best-time-to-visit/featured.webp";

export default function BestTimeToVisit() {
  const articleSchema = generateArticleSchema({
    headline: "Best Time to Visit Mukteshwar: A Month-by-Month Guide (2026)",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/best-time-to-visit/featured.webp",
    datePublished: formatDateForSchema("March 24, 2026"),
    author: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
    },
    publisher: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
      url: "https://ecoescapemukteshwar.com",
    },
    description: "When is the best time to visit Mukteshwar? Our seasonal breakdown covers spring orchards, monsoon waterfalls, autumn Himalayan views, and winter snow with honest pros and cons.",
    url: "https://ecoescapemukteshwar.com/blog/best-time-to-visit-mukteshwar-guide",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Best Time to Visit" },
  ]);

  return (
    <BlogPostLayout
      meta={{
        title: "Best Time to Visit Mukteshwar | 2026 Month-by-Month Travel Guide",
        description: "Plan your Mukteshwar trip with our seasonal guide. Explore best months for snowfall, fruit blossoms, and the clearest Himalayan views in Uttarakhand.",
        canonical: "https://ecoescapemukteshwar.com/blog/best-time-to-visit-mukteshwar-guide",
        keywords: "best time to visit Mukteshwar, Mukteshwar weather by month, Mukteshwar snowfall months, Mukteshwar seasons, Uttarakhand travel guide"
      }}
      schema={{
        article: articleSchema,
        breadcrumb: breadcrumbSchema
      }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Planning Guide
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          Best Time to Visit Mukteshwar — A Month-by-Month Guide
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" /> March 24, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> 10 min read
          </span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border">
        <img
          src={bestTimeFeaturedImg}
          alt="Seasonal montage of Mukteshwar from spring blossoms to winter snow"
          className="w-full h-auto"
          loading="eager"
          width="1200"
          height="675"
        />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Mukteshwar is a year-round destination, but the "best" time depends entirely on what you're looking for. Do you want to see the <strong>Himalayan blossoms</strong>, hike in the <strong>monsoon mist</strong>, or wake up to a <strong>blanket of snow</strong>?
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
          <Sun className="h-6 w-6 text-primary" />
          Spring (March to April): The Bloom
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          This is arguably the most beautiful time. The district's famous orchards (peach, plum, and apple) burst into bloom, turning the valley pink and white.
        </p>
        <ul className="list-disc pl-6 text-sm text-muted-foreground">
          <li><strong>Pros:</strong> Perfect weather (15-25°C), stunning flowers, great for photography.</li>
          <li><strong>Cons:</strong> Increasing tourist numbers towards April.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
          <ThermometerSun className="h-6 w-6 text-primary" />
          Summer (May to June): The Escape
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          As the plains heat up, Mukteshwar remains cool and pleasant. This is the peak season for families and outdoor adventures like rock climbing.
        </p>
        <ul className="list-disc pl-6 text-sm text-muted-foreground">
          <li><strong>Pros:</strong> Ideal for all activities, fruit picking begins.</li>
          <li><strong>Cons:</strong> Most expensive season, crowded weekend spots.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
          <CloudRain className="h-6 w-6 text-primary" />
          Monsoon (July to September): The Misty Retreat
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The Kumaon hills turn an impossible shade of green. If you love the smell of wet earth and dramatic cloud formations, this is for you.
        </p>
        <ul className="list-disc pl-6 text-sm text-muted-foreground">
          <li><strong>Pros:</strong> Deepest greenery, active waterfalls, lower hotel rates.</li>
          <li><strong>Cons:</strong> Potential road blocks, unpredictable rains.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
          <Snowflake className="h-6 w-6 text-primary" />
          Winter (October to February): The Clear Peaks
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          From October onwards, the atmosphere clears up, offering the <strong>most spectacular views of Nanda Devi</strong>. January brings the possibility of snow.
        </p>
        <ul className="list-disc pl-6 text-sm text-muted-foreground">
          <li><strong>Pros:</strong> Crystal clear mountain views, stargazing, snowfall potential.</li>
          <li><strong>Cons:</strong> Very cold nights (down to -2°C).</li>
        </ul>

        <div className="bg-secondary/50 rounded-xl p-8 my-10 border-l-4 border-primary">
          <h3 className="text-xl font-serif font-semibold mb-4">Honest Monthly Verdict</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <li><strong>Jan/Feb:</strong> For snow lovers and peace.</li>
            <li><strong>Mar/Apr:</strong> For nature and blossom lovers.</li>
            <li><strong>May/Jun:</strong> For families and adventure.</li>
            <li><strong>Jul/Aug:</strong> For monsoon souls (budget friendly).</li>
            <li><strong>Oct/Nov:</strong> For peak Himalayan visibility.</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
            Plan Your Seasonal Escape
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            No matter the season, Ecoescape Mukteshwar offers a front-row seat to the best of Mukteshwar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => {
                window.location.href = "/#booking";
              }}
            >
              Check Seasonal Availability
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => {
                const msg = encodeURIComponent("Hi! I'm planning a trip to Mukteshwar in [Month]. Could you tell me more about what to expect at Ecoescape during that time?");
                window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
              }}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </BlogPostLayout>
  );
}
