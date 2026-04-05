import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, Snowflake, Thermometer, Coffee, Home, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import winterFeaturedImg from "@/assets/blog/winter-experience/featured.webp";

export default function WinterExperienceGuide() {
  const navigate = useNavigate();

  // Article Schema
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar in Winter: Snowfall, Cozy Stays & What to Expect (2026)",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/winter-experience/featured.webp",
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
    description: "Planning a winter trip to Mukteshwar? Our guide covers when snowfall happens, what temperatures to expect, and why a cozy boutique homestay beats a large hotel in the cold season.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-in-winter",
  }), []);

  // Breadcrumb Schema
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar in Winter" },
  ]), []);

  return (
    <BlogPostLayout
      meta={{
        title: "Mukteshwar in Winter | Snowfall, Cozy Stays & 2026 Guide",
        description: "Experience the magic of winter in Mukteshwar. Guide to snowfall dates, winter temperatures, packing tips, and the best cozy homestays for a cold-season escape.",
        canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-in-winter",
        keywords: "Mukteshwar winter, snow in Mukteshwar, Mukteshwar snowfall, winter trip Uttarakhand, cozy stays Mukteshwar, winter temperature Mukteshwar"
      }}
      schema={{
        article: articleSchema,
        breadcrumb: breadcrumbSchema
      }}
    >

          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Seasonal Experience
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Mukteshwar in Winter — Snowfall, Cozy Stays & What to Expect
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 24, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 8 min read
              </span>
            </div>
          </header>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={winterFeaturedImg}
              alt="Cozy homestay in Mukteshwar covered in snow with Himalayan views"
              className="w-full h-auto"
              loading="lazy"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              There's a specific kind of silence that only comes with a mountain winter. In Mukteshwar, that silence is paired with <strong>stunning Himalayan clarity</strong> and the occasional magic of fresh snowfall. While the world heads to crowded slopes, Mukteshwar offers a more intimate, cozy winter experience.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Snowflake className="h-6 w-6 text-primary" />
              The Magic of Snowfall
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Snow in Mukteshwar typically arrives between <strong>late December and early February</strong>. Unlike the persistent snow of the higher reaches, Mukteshwar's snowfall often comes in 3-4 day "spells" that transform the oak and deodar forests into a white wonderland.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Thermometer className="h-6 w-6 text-primary" />
              What Temperatures to Expect?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Be prepared for crisp, cold air. Daytime temperatures range from <strong>8°C to 15°C</strong> if it's sunny, but once the sun sets, it can drop to <strong>-2°C or lower</strong>. The air is remarkably dry and clear, making for the best Himalayan views of the year.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Home className="h-6 w-6 text-primary" />
              Why Choose a Cozy Homestay?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In the cold season, the place you stay becomes the heart of your trip. Large hotels can often feel drafty and impersonal. A <strong>boutique homestay like Ecoescape</strong> offers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Personalized Heating:</strong> Electric blankets and localized heating that actually keep you warm.</li>
              <li><strong>Home-Cooked Warmth:</strong> Hot Kumaoni meals like <em>Gahat ki Dal</em> that are designed to warm you from the inside out.</li>
              <li><strong>The Vibe:</strong> Evening bonfires, quiet corners for reading, and the kind of attention to detail that makes sub-zero temperatures feel like a luxury.</li>
            </ul>

            <div className="bg-secondary/50 rounded-xl p-6 my-10 border-l-4 border-primary">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Coffee className="h-5 w-5 text-primary" />
                Winter Daily Routine at Ecoescape
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Start with a sunrise over the peaks (visible from your bed!), followed by a hot paratha breakfast on the sunny terrace. Spend the midday exploring sun-drenched forest trails, and return by 4 PM as the temperature starts to dip. Spend the evening by the bonfire or tucked into bed with a book.
              </p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">What to Pack?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Layering is key. Pack thermals, a heavy down jacket, woolen socks, and a good beanie. Evenings are cold, but the midday sun can be strong, so bring sunglasses and sunscreen too.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Experience a Himalayan Winter
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Book your winter escape at Ecoescape Mukteshwar. Our rooms are winter-ready with heating, and our kitchen is ready with hot Kumaoni comfort food.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    navigate('/#booking');
                  }}
                >
                  Book Your Winter Stay
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent("Hi! I'm planning a winter trip to Mukteshwar. Could you tell me about the heating arrangements and availability at Ecoescape?");
                    window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
                  }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.open(`tel:${siteConfig.phone}`, "_self");
                  }}
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
    </BlogPostLayout>
  );
}
