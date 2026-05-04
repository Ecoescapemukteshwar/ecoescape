import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "How do I travel from Mumbai to Mukteshwar?", a: "Most efficient: fly Mumbai → Delhi (2 hr), then overnight train (Ranikhet Express) to Kathgodam, then 2-hour taxi to Mukteshwar. Total ~16 hours including airport buffers and sleep on the train. Alternative: fly Mumbai → Pantnagar (limited flights) + 2.5-hr taxi." },
  { q: "Is there a direct flight from Mumbai to Pantnagar?", a: "Limited — IndiGo and a few others operate seasonally. Most travelers route through Delhi, which has more flight choices and better fog reliability in winter." },
  { q: "How long does the Mumbai to Mukteshwar trip take?", a: "Door-to-door 14–18 hours depending on layover and connection. Direct Mumbai-Delhi flight (2 hr) + airport time + overnight train (12 hr) + Kathgodam taxi (2 hr) = ~18 hours total elapsed." },
];

export default function MumbaiToMukteshwar() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mumbai to Mukteshwar: Travel Guide, Routes, and Tips (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mumbai to Mukteshwar — fastest routes, flight + train combinations, costs, and a real travel-time breakdown from a Mukteshwar resident.",
    url: "https://ecoescapemukteshwar.com/blog/mumbai-to-mukteshwar-travel-guide",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mumbai to Mukteshwar" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mumbai to Mukteshwar: Travel Guide, Routes & Tips (2026)", description: "Mumbai to Mukteshwar — fastest route is fly to Delhi + overnight train to Kathgodam + taxi. Total 16–18 hrs, ₹15,000–₹25,000 return per person.", canonical: "https://ecoescapemukteshwar.com/blog/mumbai-to-mukteshwar-travel-guide", keywords: "mumbai to mukteshwar, mumbai mukteshwar travel, mumbai mukteshwar distance, mumbai pantnagar flight, mumbai delhi mukteshwar route" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Origin Market Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mumbai to Mukteshwar: Travel Guide, Routes, and Tips</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="Mumbai to Mukteshwar — fly via Delhi or Pantnagar, then drive into the Kumaon hills" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>From Mumbai, the most reliable way to reach Mukteshwar is fly to Delhi (2 hr), take the overnight Ranikhet Express to Kathgodam, then a 2-hour taxi.</strong> Total elapsed time: 16–18 hours including connections. The alternative — flying directly to Pantnagar — is faster on paper but has limited flight options and frequent winter fog cancellations.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Three options compared</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-secondary/40">
              <tr><th className="text-left p-3 font-semibold">Route</th><th className="text-left p-3 font-semibold">Total time</th><th className="text-left p-3 font-semibold">Cost (return, per person)</th><th className="text-left p-3 font-semibold">Reliability</th></tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-medium">Mumbai → Delhi (fly) → Kathgodam (train) → Mukteshwar (taxi)</td><td className="p-3">16–18 hr</td><td className="p-3">₹14,000–₹22,000</td><td className="p-3">High (most travelers)</td></tr>
              <tr><td className="p-3 font-medium">Mumbai → Pantnagar (fly) → Mukteshwar (taxi)</td><td className="p-3">5–7 hr</td><td className="p-3">₹18,000–₹28,000</td><td className="p-3">Medium (limited flights, fog risk)</td></tr>
              <tr><td className="p-3 font-medium">Mumbai → Delhi (fly) → Mukteshwar (taxi)</td><td className="p-3">11–13 hr</td><td className="p-3">₹16,000–₹26,000 (incl. taxi)</td><td className="p-3">High but tiring</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Recommended itinerary</h2>
        <p className="text-muted-foreground leading-relaxed"><strong>Most travel-comfortable option for Mumbai travelers:</strong></p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Day 0 morning:</strong> Mumbai → Delhi flight (2 hr).</li>
          <li><strong>Day 0 afternoon:</strong> Lunch + rest in Delhi.</li>
          <li><strong>Day 0 evening:</strong> Board Ranikhet Express (15013) at 10:40 PM from Delhi DLI.</li>
          <li><strong>Day 1 early morning:</strong> Arrive Kathgodam at 4:40 AM. Pre-booked taxi to Mukteshwar (2 hr). Reach by 7 AM in time for sunrise + breakfast.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-3">This avoids the overnight road journey, gets you to Mukteshwar fresh in the morning, and is consistently cheaper than the Pantnagar flight option.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Mumbai-specific tips</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Book Mumbai-Delhi flights early.</strong> Tuesday–Wednesday flights are typically cheapest. Avoid Friday departures if possible.</li>
          <li><strong>Use IndiGo or Vistara</strong> for the Mumbai-Delhi leg — most reliable on-time records.</li>
          <li><strong>Reach Delhi by 8 PM</strong> at the latest if catching the Ranikhet Express the same evening — DLI station is 1 hour from IGI airport in evening traffic.</li>
          <li><strong>Pack altitude-appropriate clothing</strong> in carry-on — Mumbai's coastal humidity won't prepare you for Mukteshwar's 5–10°C nights.</li>
          <li><strong>Confirm Kathgodam pickup</strong> 24–48 hours before arrival. We coordinate with your train PNR.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3 flex items-center justify-center gap-2"><Plane className="h-6 w-6 text-primary" /> Coming from Mumbai?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We coordinate Kathgodam pickups for Mumbai travelers via the Delhi-Kathgodam train route. WhatsApp us with your travel dates.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm coming from Mumbai — could you help with the route and Kathgodam pickup?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related route guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/kathgodam-to-mukteshwar-route-guide" className="text-primary underline">Kathgodam to Mukteshwar — train + taxi</a></li>
            <li>→ <a href="/blog/pantnagar-airport-to-mukteshwar" className="text-primary underline">Pantnagar Airport to Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from major cities</a></li>
            <li>→ <a href="/blog/bangalore-to-mukteshwar-travel-guide" className="text-primary underline">Bangalore to Mukteshwar</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
