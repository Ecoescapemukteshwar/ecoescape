import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "Is Mukteshwar good for a honeymoon?", a: "Yes — the village is quiet, boutique stays have private entrances, and the broad Himalayan views set a romantic tone without the crowds of Nainital or Mussoorie. Best for couples who value privacy over hill-station entertainment." },
  { q: "Best time for a Mukteshwar honeymoon?", a: "April–June for clear weather and orchard blooms; October–November for sharp Himalayan visibility and crisp evenings; December–February for snowfall potential and cozy fires." },
  { q: "What honeymoon-special arrangements can be made?", a: "Most boutique stays (including Ecoescape) offer in-room candle dinners, terrace bonfire setups, flower decoration, and special occasion cake on request — typically with 24-hour advance notice via WhatsApp." },
  { q: "How long should a Mukteshwar honeymoon be?", a: "4 nights minimum to feel unhurried. Couples often combine 4 nights Mukteshwar with 2 nights Bhimtal or Nainital, or extend with Almora and Jageshwar for a 7-night Kumaon honeymoon." },
];

export default function HoneymoonGuide() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar Honeymoon Guide: Quiet Hill Station Romance (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar honeymoon guide: quiet boutique stays, romantic dinners, bonfire evenings, sunrise viewpoints, and a 5-night itinerary for couples seeking privacy.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-honeymoon-guide",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar Honeymoon Guide" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar Honeymoon Guide: Quiet Hill Station Romance (2026)", description: "Mukteshwar honeymoon: quiet boutique stays, candle dinners, bonfire evenings, sunrise points, and a 5-night itinerary for couples wanting privacy over crowds.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-honeymoon-guide", keywords: "mukteshwar honeymoon, mukteshwar honeymoon package, honeymoon mukteshwar, romantic mukteshwar, couples mukteshwar, mukteshwar suite couple" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Couples Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar Honeymoon Guide: Quiet Hill Station Romance</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="Sunrise over the Himalayan range — a quiet Mukteshwar morning is one of the most romantic settings in Uttarakhand" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Mukteshwar suits couples who want a quiet, view-rich honeymoon over a busy hill-station experience.</strong> The village is small (capping crowds), boutique stays have private entrances and in-room dining, and the Himalayan views from Chauli Ki Jali at sunrise are genuinely cinematic. If your image of a honeymoon involves slow mornings, terrace dinners, and forest walks rather than mall road and cable cars, this is the right place.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Why couples choose Mukteshwar</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Privacy-first stays.</strong> Boutique aparthotels here have 4–8 units with separate entrances. No crowded hotel lobby, no shared corridors.</li>
          <li><strong>Sunrise that earns photos.</strong> East-facing ridge with Nanda Devi, Trishul, and Panchachuli visible on clear mornings. Most properties have a terrace pointing the right way.</li>
          <li><strong>Genuine quiet.</strong> No mall road, no nightlife, no group tour buses. The "did anything just move?" kind of quiet.</li>
          <li><strong>Evening rituals worth doing.</strong> Bonfire setups in winter, terrace candle dinners year-round, stargazing on clear nights.</li>
          <li><strong>Romantic temple pilgrimage.</strong> Mukteshwar Mahadev Mandir is a 350-year-old Shiva temple — a quiet visit at dawn or dusk is meaningful even for non-religious couples.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Best time for a Mukteshwar honeymoon</h2>
        <p className="text-muted-foreground leading-relaxed"><strong>April–June:</strong> the most reliable choice. Pleasant 18–25°C days, orchards in bloom, long evenings.<br /><strong>October–November:</strong> the most photogenic — sharp post-monsoon Himalayan views, crisp 8–18°C, fewer travelers.<br /><strong>December–February:</strong> for snow-loving couples. Cold (sub-zero nights) but the cozy fires + snowfall combination is hard to beat for atmosphere.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Honeymoon arrangements you can request</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>In-room candle dinner</strong> on the terrace — Kumaoni thali or fusion menu by request.</li>
          <li><strong>Bonfire setup</strong> in the garden (winter and shoulder seasons).</li>
          <li><strong>Flower decoration</strong> for arrival (typically with 24-hour notice).</li>
          <li><strong>Cake</strong> for an anniversary/birthday — sourced from Sitla bakeries.</li>
          <li><strong>Private breakfast on the terrace</strong> at sunrise — request the night before.</li>
          <li><strong>Couple massage / spa</strong> — limited; we can connect you to a local therapist who travels to the property.</li>
          <li><strong>Photographer</strong> — for an "elopement-style" shoot at Chauli Ki Jali at sunrise. Local photographers from Sitla / Bhimtal cluster.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Where to stay</h2>
        <p className="text-muted-foreground leading-relaxed">Pick a unit that's east-facing for sunrise. The <a href="/rooms/suite-with-mountain-view" className="text-primary underline">Suite with Mountain View</a> at Ecoescape is purpose-built for couples — king bed, private outside sitting area, sunrise visible from the bed. The <a href="/rooms/family-room-2" className="text-primary underline">Family Room 2</a> works for slightly larger groups (e.g., honeymoon trip with friends or family in adjacent units).</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">A 5-night Mukteshwar honeymoon plan</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Day 1:</strong> Arrive afternoon. Welcome chai. Sunset from the property terrace. In-room dinner.</li>
          <li><strong>Day 2:</strong> Sunrise from Chauli Ki Jali. Mukteshwar Mahadev Temple. Slow lunch. Sitla orchard walk. Bonfire dinner.</li>
          <li><strong>Day 3:</strong> Bhalu Gaad waterfall trek (~3 hr round-trip). Late lunch. Spa or massage. Stargazing.</li>
          <li><strong>Day 4:</strong> Day trip to Bhimtal lake (40 km). Boat ride. Lakeside lunch. Drive back via the orchard route.</li>
          <li><strong>Day 5:</strong> Slow morning. Photo session at sunrise. Pack and depart by midday.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Budget</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Stay (5 nights, premium suite): ₹20,000–₹35,000 (direct booking)</li>
          <li>Travel (taxi from Delhi, return): ₹14,000–₹18,000 (or ₹8,000 train + Kathgodam taxi)</li>
          <li>Food (5 days): ₹4,000–₹6,000</li>
          <li>Activities, photography, extras: ₹4,000–₹8,000</li>
          <li><strong>Total per couple, all-in:</strong> ₹42,000–₹65,000 mid-range</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3 flex items-center justify-center gap-2"><Heart className="h-6 w-6 text-rose-500" /> Planning your Mukteshwar honeymoon?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">WhatsApp us with your dates and any special requests — bonfire, candle dinner, anniversary cake. We handle everything quietly so you don't have to coordinate on the day.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! We're planning a Mukteshwar honeymoon — could you share availability and special arrangements?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides for couples</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/romantic-getaway-guide" className="text-primary underline">Mukteshwar romantic getaway guide</a></li>
            <li>→ <a href="/rooms/suite-with-mountain-view" className="text-primary underline">Suite with Mountain View</a></li>
            <li>→ <a href="/blog/best-time-to-visit-mukteshwar-guide" className="text-primary underline">Best time to visit Mukteshwar</a></li>
            <li>→ <a href="/blog/stargazing-in-mukteshwar" className="text-primary underline">Stargazing in Mukteshwar</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
