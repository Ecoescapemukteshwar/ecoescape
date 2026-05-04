import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "Is Mukteshwar good for a pre-wedding photoshoot?", a: "Yes — broad Himalayan ridge backdrop, fruit orchards (in season), forest trails, the temple, Chauli Ki Jali cliff, and IVRI heritage architecture give 5+ distinct shoot looks within a 7 km radius." },
  { q: "What's the best time of day for a Mukteshwar pre-wedding shoot?", a: "Two windows: 5:30–7:30 AM (golden sunrise + Himalayan range visible) and 4:30–6:00 PM (warm late-afternoon light + softer shadows). Mid-day light at altitude is harsh and best avoided." },
  { q: "Best time of year for a Mukteshwar pre-wedding shoot?", a: "October–November for sharp Himalayan visibility, March–April for orchard blossoms, January for snow potential. Avoid heavy monsoon (July–August) — though monsoon does have its own moody aesthetic." },
];

export default function MukteshwarPreWeddingShoot() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar Pre-Wedding Photoshoot Guide: Locations, Timing, Planning (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar pre-wedding photoshoot guide — best locations (ridge sunrise, orchards, temple, Chauli Ki Jali), timing, and planning logistics for couples.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-pre-wedding-shoot-guide",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Pre-Wedding Shoot Guide" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar Pre-Wedding Photoshoot: Locations & Planning Guide (2026)", description: "Best Mukteshwar pre-wedding shoot locations — ridge sunrise, orchards, temple, Chauli Ki Jali. Timing, photographer recommendations, and planning logistics.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-pre-wedding-shoot-guide", keywords: "mukteshwar pre wedding shoot, mukteshwar pre wedding photography, mukteshwar wedding shoot location, mukteshwar engagement shoot, pre wedding mountains" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Couples / Wedding Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar Pre-Wedding Photoshoot: Locations, Timing, and Planning</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="A Mukteshwar pre-wedding photoshoot location with the Himalayan ridge backdrop at sunrise" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Mukteshwar offers 5+ distinct pre-wedding shoot looks within a 7 km radius — Himalayan ridge sunrise, fruit orchards, ancient temple, dramatic cliff edges, and heritage colonial architecture at IVRI.</strong> Most couples plan a 2–3 day stay to capture multiple looks at the right golden-hour windows. Below is the complete location guide.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Top 5 photoshoot locations</h2>
        <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
          <li><strong>Chauli Ki Jali ridge edge</strong> — dramatic cliff-side shots with the Himalayan range as backdrop. Best at sunrise (5:30–6:30 AM). Wind can be strong; secure dupattas and lehenga panels.</li>
          <li><strong>Mukteshwar Mahadev Temple courtyard + steps</strong> — heritage stone architecture, traditional setting. Best in soft afternoon light (4:30–5:30 PM). Respectful attire required.</li>
          <li><strong>Sitla / Ramgarh fruit orchards</strong> — March–April for peach/plum blossoms; July–August for fruit-laden trees. Pink-and-white blossom shots are exceptional.</li>
          <li><strong>IVRI campus colonial architecture</strong> — heritage 1893 buildings with red roofs, deodar trees. Photogenic in any light; coordinate with the campus for permission.</li>
          <li><strong>Property terrace with Himalayan view</strong> — convenient base for golden hour shots. Most boutique stays will let you set up at sunrise/sunset for a small location fee.</li>
        </ol>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Best time of year</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>October–November:</strong> sharpest Himalayan visibility, golden afternoon light, comfortable shoot weather. Most popular window.</li>
          <li><strong>March–April:</strong> orchard blossoms, fresh greenery, mild temperatures.</li>
          <li><strong>December–February:</strong> dramatic cold-weather looks; potential snowfall in January for snow shots. Cold can be harsh on lehengas without thermals underneath.</li>
          <li><strong>Avoid May–June peak season:</strong> haze obscures Himalayan views, crowds at Chauli Ki Jali, harsh light.</li>
          <li><strong>Avoid heavy monsoon (Jul–Aug):</strong> rain disrupts schedule though monsoon-mood shots are possible if you have a buffer day.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Logistics and planning</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Stay duration:</strong> 2–3 nights minimum. Day 1 travel + recce, Day 2 sunrise + sunset shoots, Day 3 buffer + travel back.</li>
          <li><strong>Photographer:</strong> bring your own from Delhi/Mumbai or hire a local Kumaon-based photographer (typically ₹40,000–₹80,000 per day for full-team coverage).</li>
          <li><strong>Costume changes:</strong> the property terrace can be used between shots. Allocate 20–30 minutes for each change at altitude.</li>
          <li><strong>Permissions:</strong> public locations (ridge, orchards) need no formal permission. Temple and IVRI may require courtesy notification. Pay any local levies cleanly.</li>
          <li><strong>Travel:</strong> SUV recommended for transporting equipment + outfits. Drone shots — check no-fly zones around IVRI.</li>
          <li><strong>Backup plan:</strong> have a property-terrace plan B for weather disruptions.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Planning a Mukteshwar pre-wedding shoot?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We've hosted several pre-wedding shoots — happy to coordinate timing, suggest local photographers, and arrange location access.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! We're planning a pre-wedding shoot in Mukteshwar — could you help with planning?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/best-photography-spots-in-mukteshwar" className="text-primary underline">Best photography spots in Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-honeymoon-guide" className="text-primary underline">Mukteshwar honeymoon guide</a></li>
            <li>→ <a href="/blog/mukteshwar-in-october" className="text-primary underline">Mukteshwar in October — clearest skies</a></li>
            <li>→ <a href="/blog/romantic-getaway-guide" className="text-primary underline">Romantic getaway guide</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
