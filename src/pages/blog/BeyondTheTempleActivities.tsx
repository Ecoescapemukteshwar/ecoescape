import { BlogPostLayout } from "@/components/BlogPostLayout";
import { useMemo } from "react";
import { useBookingNavigation } from "@/hooks/useBookingNavigation";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, Mountain, Sparkles, Map, Trees, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import beyondTempleFeaturedImg from "@/assets/blog/beyond-temple/featured.webp";

export default function BeyondTheTempleActivities() {
  const { navigateToBooking } = useBookingNavigation();
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "10 Things to Do in Mukteshwar Beyond the Temple (2026 Guide)",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/beyond-temple/featured.webp",
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
    description: "Looking for more than the standard tourist checklist? Discover 10 practical things to do in Mukteshwar beyond the temple, from trekking trails to stargazing and fruit picking.",
    url: "https://ecoescapemukteshwar.com/blog/things-to-do-in-mukteshwar-beyond-temple",
  }), []);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Beyond the Temple" },
  ]), []);

  return (
    <BlogPostLayout
      meta={{
        title: "10 Things to Do in Mukteshwar Beyond the Temple | 2026 Guide",
        description: "Explore the best activities in Mukteshwar - trekking, rock climbing, stargazing, and more. A practical activity guide for curious travelers wanting an authentic Himalayan experience.",
        canonical: "https://ecoescapemukteshwar.com/blog/things-to-do-in-mukteshwar-beyond-temple",
        keywords: "things to do in Mukteshwar, Mukteshwar activities, trekking in Mukteshwar, rock climbing Mukteshwar, stargazing Uttarakhand, village walks Kumaon"
      }}
      schema={{
        article: articleSchema,
        breadcrumb: breadcrumbSchema
      }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Activity Guide
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          10 Things to Do in Mukteshwar Beyond the Temple
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" /> March 24, 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> 11 min read
          </span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border">
        <img
          src={beyondTempleFeaturedImg}
          alt="Group of trekkers walking through a pine forest with Himalayan views"
          className="w-full h-auto"
          loading="lazy"
          width="1200"
          height="675"
        />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Most tourists visit Mukteshwar for the 350-year-old Shiva temple and the cliffs of Chauli Ki Jali. While those are iconic, the <em>true soul</em> of Mukteshwar lies in its quiet orchards, hidden trails, and crystal-clear night skies. Here are 10 things you should do to experience the authentic Mukteshwar.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          1. Trek the Pine Trails
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Ditch the main road and find the local forest trails. The walk from <strong>Mukteshwar to Sitla</strong> takes you through dense oak and pine forests where the only sound is the rustle of leaves and birdcalls.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          2. Stargazing session
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Mukteshwar is a designated dark-sky area. On a clear night at Ecoescape, you can see the <strong>Milky Way with the naked eye</strong>. Join us for a guided session where we identify Himalayan constellations.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">3. Seasonal Fruit Picking</h2>
        <p className="text-muted-foreground leading-relaxed">
          Visit local orchards during <strong>May–July</strong>. You can help harvest peaches, plums, and apricots. It's a great way to support the local economy and taste fruit as it was meant to be.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">4. Rock Climbing & Rappelling</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you seek an adrenaline rush, the cliffs near Chauli Ki Jali offer world-class rock climbing and rappelling opportunities for beginners and experts alike.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
          <Map className="h-6 w-6 text-primary" />
          5. Local Village Walk
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Visit the nearby village of <strong>Dhanachuli</strong>. Experience the traditional Kumaon architecture, meet the friendly locals over a cup of tea, and see how mountain life thrives.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 text-primary font-bold">6. Stroll through our Botanical Garden</h2>
        <p className="text-muted-foreground leading-relaxed text-primary font-bold">
          Ecoescape is home to over 100 plant varieties. Take a slow morning walk to discover indigenous Himalayan flora and seasonal flowers.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">7. Picnic at Bhalu Gaad</h2>
        <p className="text-muted-foreground leading-relaxed">
          A moderate trek leads to the Bhalu Gaad waterfall. Pack a lunch (we can help!) and spend the afternoon by the natural pool.
        </p>

        <h2 className="text-xl font-serif font-semibold text-foreground mt-6 mb-4">8. Birdwatching in the Morning</h2>
        <p className="text-muted-foreground leading-relaxed">
          With over 200 species in the region, keep your binoculars ready. The Himalayan Monal and various flycatchers are common sightings.
        </p>

        <h2 className="text-xl font-serif font-semibold text-foreground mt-6 mb-4">9. Sampling Kumaoni Staples</h2>
        <p className="text-muted-foreground leading-relaxed">
          Try the local <em>Bhat ki Churkani</em> or <em>Kafuli</em>. These aren't just meals; they are recipes passed down for generations.
        </p>

        <h2 className="text-xl font-serif font-semibold text-foreground mt-6 mb-4">10. Sunset Meditation</h2>
        <p className="text-muted-foreground leading-relaxed">
          Find a quiet spot on the ridge (or the Ecoescape terrace) and watch the sun dip behind the peaks in silence.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-10">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Trees className="h-5 w-5 text-primary" />
            Planning Your Activities
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our team at Ecoescape can arrange certified guides for treks, climbing instructors, and orchard tours. Just ask us a day in advance!
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
            Ready for More Than a Tourist Trip?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Stay at Ecoescape and experience the authentic, offbeat side of Mukteshwar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={navigateToBooking}
            >
              Book Your Experience
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => {
                const msg = encodeURIComponent("Hi! I'm interested in the activities you mentioned beyond the temple. Could you help me plan my stay at Ecoescape?");
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
