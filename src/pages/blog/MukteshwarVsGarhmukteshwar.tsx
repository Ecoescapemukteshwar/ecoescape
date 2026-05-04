import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

export default function MukteshwarVsGarhmukteshwar() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;

  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar vs Garhmukteshwar: Two Different Places (Disambiguation Guide)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar and Garhmukteshwar are two completely different places — one a Himalayan hill station in Uttarakhand, the other a Ganges-side pilgrimage town in UP. This guide tells you which one you actually want.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-vs-garhmukteshwar",
  }), [founderName]);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar vs Garhmukteshwar" },
  ]), []);

  return (
    <BlogPostLayout
      meta={{
        title: "Mukteshwar vs Garhmukteshwar: Two Different Places (2026 Guide)",
        description: "Searched 'Garhmukteshwar' but meant the Himalayan hill station? Mukteshwar (Uttarakhand) and Garhmukteshwar (UP) are 500 km apart — completely different destinations. Quick guide to which one you want.",
        canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-vs-garhmukteshwar",
        keywords: "mukteshwar vs garhmukteshwar, garh mukteshwar, garhmukteshwar uttar pradesh, mukteshwar uttarakhand, garhmukteshwar distance, mukteshwar disambiguation",
      }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Disambiguation Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          Mukteshwar vs Garhmukteshwar: Two Different Places, 500 km Apart
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span>By {founderName}</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 4 min read</span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border">
        <img src={featuredImg} alt="Sunrise over the Himalayan range from Mukteshwar village in Uttarakhand" className="w-full h-auto" loading="lazy" width="1200" height="675" />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground">
          <strong>If you searched "Garh Mukteshwar" or "Garhmukteshwar" and ended up here — you may want a different place.</strong> The two share a similar name but are completely separate destinations:
        </p>

        <div className="my-10 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><AlertTriangle className="h-5 w-5 text-amber-600" /> Quick disambiguation</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-background/60 rounded-xl p-4 border border-primary/30">
              <p className="font-semibold text-primary mb-1">Mukteshwar (Uttarakhand)</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>📍 Hill station in Nainital district</li>
                <li>🏔 Altitude: 2,286 m</li>
                <li>📏 320 km from Delhi (~7–8 hr)</li>
                <li>🛕 Mukteshwar Mahadev Temple (~350 yr old)</li>
                <li>👀 Himalayan range views, snow in winter</li>
              </ul>
            </div>
            <div className="bg-background/60 rounded-xl p-4 border border-border">
              <p className="font-semibold mb-1">Garhmukteshwar (Uttar Pradesh)</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>📍 Town in Hapur district, UP</li>
                <li>🌊 On the banks of the Ganges</li>
                <li>📏 ~85 km from Delhi (~2 hr)</li>
                <li>🛕 Brij Ghat — Ganges pilgrimage site</li>
                <li>🌾 Plains, no mountains</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-muted-foreground italic mt-4">The two places are roughly 500 km apart by road and have nothing in common except a similar-sounding name.</p>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Which one are you trying to reach?</h2>
        <p className="text-muted-foreground leading-relaxed">
          The clearest tell is what you're searching alongside the name. If your query mentions <em>Himalayan views, snowfall, sunrise, hill station, weather, or Nainital</em> — you mean Mukteshwar in Uttarakhand. If your query mentions <em>Ganges, Brij Ghat, Kartik Purnima mela, ghat, snan, or NH9 to Hapur</em> — you mean Garhmukteshwar in UP.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Mukteshwar (Uttarakhand) — what is it?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Mukteshwar is a small village and hill station in the Nainital district of Uttarakhand, sitting on a ridge at 2,286 metres in the Kumaon Himalayan foothills. It's known for the 350-year-old Mukteshwar Mahadev Temple, the dramatic Chauli Ki Jali cliffs, fruit orchards, and unobstructed views of the Himalayan range — Nanda Devi, Trishul, and the Panchachuli peaks are all visible on clear days.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          From Delhi, it's a 320 km drive that takes 7–8 hours via NH9 (Moradabad → Haldwani → Bhowali → Bhimtal → Sitla → Mukteshwar). The nearest railway station is Kathgodam (70 km away) and the nearest airport is Pantnagar (100 km).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          More on the destination:{" "}
          <a href="/blog/things-to-do-in-mukteshwar" className="text-primary underline">things to do in Mukteshwar</a>,{" "}
          <a href="/blog/mukteshwar-mahadev-temple-guide" className="text-primary underline">Mukteshwar Mahadev Temple guide</a>, and{" "}
          <a href="/blog/best-time-to-visit-mukteshwar-guide" className="text-primary underline">best time to visit</a>.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Garhmukteshwar (Uttar Pradesh) — what is it?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Garhmukteshwar is a town in Hapur district of Uttar Pradesh, located on the banks of the Ganges. Its claim to fame is Brij Ghat — a major Ganga ghat where Hindu pilgrims gather for ritual baths, especially during Kartik Purnima when one of north India's largest cattle fairs (and the associated mela) is held. The town is on NH9, about 85 km east of Delhi via Hapur, taking around 2 hours by road. It has no connection to mountains, snowfall, or the Himalayas.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If Garhmukteshwar in UP is what you actually want — this is not the right site. Try the official Hapur district tourism page or look for travel guides specifically about Brij Ghat / NH9.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Why are the names so similar?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Both names contain the Sanskrit word <em>Mukteshwar</em>, meaning "lord of liberation" — a common epithet for Shiva. Both towns have temples dedicated to Shiva. The "Garh" prefix in Garhmukteshwar likely refers to a historical fort (garh = fort) that once stood there. Beyond the shared theological reference and an ancient Shiva temple, the two places have no overlap.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Common confusion points</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>"Mukteshwar distance from Delhi"</strong> — for the hill station: 320 km. For Garhmukteshwar: 85 km. The 4× difference is your tell.</li>
          <li><strong>"Mukteshwar weather"</strong> — the hill station is 15–25°C in summer, sub-zero in winter. Garhmukteshwar in UP is plains weather: 35–42°C summer, 5–15°C winter. Wildly different.</li>
          <li><strong>"Mukteshwar temple"</strong> — both have Shiva temples, but if your image search shows a stone temple at altitude with mountain backdrop, it's the Uttarakhand one. If the temple is on a riverbank with ghats, that's Garhmukteshwar.</li>
          <li><strong>Map confusion:</strong> typing "Mukteshwar" into Google Maps from a Delhi NCR location will sometimes auto-suggest Garhmukteshwar first because it's nearer. Verify by zooming out to confirm whether the pin is in Uttarakhand or UP.</li>
        </ul>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Heading to Mukteshwar (the hill station)?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Ecoescape is a 4-unit boutique aparthotel right in Mukteshwar village — sunrise views, Kumaoni kitchen, fibre WiFi. Direct booking saves the OTA cut.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => {
                const msg = encodeURIComponent("Hi! I'm planning a trip to Mukteshwar (Uttarakhand) — could you share availability for my dates?");
                window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
              }}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related — for the Uttarakhand Mukteshwar</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from major cities</a></li>
            <li>→ <a href="/blog/things-to-do-in-mukteshwar" className="text-primary underline">15 things to do in Mukteshwar</a></li>
            <li>→ <a href="/blog/best-time-to-visit-mukteshwar-guide" className="text-primary underline">Best time to visit Mukteshwar</a></li>
            <li>→ <a href="/blog/delhi-to-mukteshwar-road-trip" className="text-primary underline">Delhi to Mukteshwar road trip</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
