import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "How do I travel from Bangalore to Mukteshwar?", a: "Best route: fly Bangalore → Delhi (~3 hr), then either overnight train to Kathgodam (12 hr) + 2-hr taxi, or fly Delhi → Pantnagar (~1 hr) + 2.5-hr taxi. Total elapsed time 16–20 hours." },
  { q: "Is there a direct flight from Bangalore to Pantnagar?", a: "No direct flight. All Bangalore travelers route through Delhi. Bangalore → Delhi → Pantnagar (or train) → Mukteshwar." },
  { q: "Cost from Bangalore to Mukteshwar return per person?", a: "Approximately ₹18,000–₹30,000 return depending on flight pricing and taxi share. Direct booking with the property typically saves 10–20% on stay costs." },
];

export default function BangaloreToMukteshwar() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Bangalore to Mukteshwar: Travel Guide, Routes, and Tips (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Bangalore to Mukteshwar — fastest routes via Delhi, total travel time, costs, and a Bengaluru-specific itinerary. From a Mukteshwar resident.",
    url: "https://ecoescapemukteshwar.com/blog/bangalore-to-mukteshwar-travel-guide",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Bangalore to Mukteshwar" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Bangalore to Mukteshwar: Travel Guide, Routes & Tips (2026)", description: "Bangalore to Mukteshwar — route via Delhi (~16–20 hours total), flight + train + taxi options, costs, packing tips for South Indian travelers.", canonical: "https://ecoescapemukteshwar.com/blog/bangalore-to-mukteshwar-travel-guide", keywords: "bangalore to mukteshwar, bengaluru mukteshwar travel, bangalore mukteshwar distance, bangalore mukteshwar flight, south india to mukteshwar" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Origin Market Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Bangalore to Mukteshwar: Travel Guide, Routes, and Tips</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="Bangalore to Mukteshwar travel route — fly via Delhi to reach the Kumaon hills" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>From Bangalore, the fastest way to reach Mukteshwar is fly to Delhi (3 hr) then connect onward — either by overnight train to Kathgodam (12 hr + 2-hr taxi) or domestic flight to Pantnagar (1 hr + 2.5-hr taxi).</strong> No direct flights exist to Pantnagar from Bangalore. Total elapsed door-to-door: 16–20 hours.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Route options compared</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-secondary/40">
              <tr><th className="text-left p-3 font-semibold">Route</th><th className="text-left p-3 font-semibold">Total time</th><th className="text-left p-3 font-semibold">Cost (return, per person)</th></tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-medium">Bangalore → Delhi (fly) → Kathgodam (train) → Mukteshwar (taxi)</td><td className="p-3">18–20 hr</td><td className="p-3">₹16,000–₹24,000</td></tr>
              <tr><td className="p-3 font-medium">Bangalore → Delhi (fly) → Pantnagar (fly) → Mukteshwar (taxi)</td><td className="p-3">7–9 hr</td><td className="p-3">₹22,000–₹32,000</td></tr>
              <tr><td className="p-3 font-medium">Bangalore → Delhi (fly) → Mukteshwar (taxi)</td><td className="p-3">13–15 hr</td><td className="p-3">₹18,000–₹28,000</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Recommended itinerary</h2>
        <p className="text-muted-foreground leading-relaxed"><strong>The cleanest 4-night Mukteshwar trip from Bangalore:</strong></p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Day 0 morning:</strong> Bangalore → Delhi (3 hr flight)</li>
          <li><strong>Day 0 evening:</strong> Ranikhet Express (15013) Delhi → Kathgodam (overnight)</li>
          <li><strong>Day 1 morning:</strong> Reach Kathgodam 4:40 AM → 2-hr taxi → Mukteshwar by 7 AM</li>
          <li><strong>Day 1–4:</strong> Mukteshwar stay (3 nights)</li>
          <li><strong>Day 4 afternoon:</strong> Drive back to Kathgodam, evening train to Delhi</li>
          <li><strong>Day 5 morning:</strong> Delhi → Bangalore flight</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-3">Total: 4 nights at the destination, 5 nights including travel. Better than trying to compress to 2 nights at the destination — the journey is too long for that to feel worthwhile.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Bangalore-specific tips</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Book the Bangalore-Delhi leg early.</strong> 6–8 weeks ahead is sweet spot for sub-₹6,000 one-way.</li>
          <li><strong>Pack winter clothes regardless of season.</strong> Bangalore's mild climate and occasional 30°C summers don't prepare you for Mukteshwar's 5–10°C nights.</li>
          <li><strong>Don't try Bangalore → Mukteshwar in 24 hours.</strong> Some travelers compress to a 24-hour turnaround — exhausting and the destination ends up under-experienced.</li>
          <li><strong>Combine with Delhi sightseeing.</strong> If your dates allow, a Delhi day on the way back is value-add since you've already paid the flight.</li>
          <li><strong>Confirm Kathgodam pickup</strong> with the Mukteshwar property 24–48 hours before — saves the early-morning chaos at Kathgodam station.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Why Mukteshwar makes sense for Bangalore travelers</h2>
        <p className="text-muted-foreground leading-relaxed">For a Bangalore-based traveler, Mukteshwar is a meaningful change — alpine climate, broad Himalayan views, and a quiet pace that's genuinely different from anything within South India's hill stations. Coorg, Ooty, and Munnar are closer but lack the high-altitude Himalayan dimension. If you're flying that distance anyway, choose a destination that maximally differs from home.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3 flex items-center justify-center gap-2"><Plane className="h-6 w-6 text-primary" /> Coming from Bangalore?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We coordinate Kathgodam pickups and can suggest the best train timing aligned with your Bangalore-Delhi flight. WhatsApp us with your dates.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm coming from Bangalore — could you help with the route and pickup?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mumbai-to-mukteshwar-travel-guide" className="text-primary underline">Mumbai to Mukteshwar</a></li>
            <li>→ <a href="/blog/kathgodam-to-mukteshwar-route-guide" className="text-primary underline">Kathgodam to Mukteshwar — train + taxi</a></li>
            <li>→ <a href="/blog/pantnagar-airport-to-mukteshwar" className="text-primary underline">Pantnagar Airport to Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from major cities</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
