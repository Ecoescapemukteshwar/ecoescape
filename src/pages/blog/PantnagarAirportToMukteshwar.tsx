import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Plane, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "What's the distance from Pantnagar Airport to Mukteshwar?", a: "Pantnagar (PGH) to Mukteshwar is approximately 100 km by road, taking ~2.5 hours by taxi via Rudrapur, Haldwani, Bhowali, and Bhimtal." },
  { q: "Are there direct flights to Pantnagar from Delhi?", a: "Yes — limited daily flights primarily by IndiGo and Alliance Air. Schedules vary seasonally; verify before booking. Fog cancellations are common between November and February." },
  { q: "Should I fly to Pantnagar or take an overnight train to Kathgodam?", a: "Train to Kathgodam (70 km from Mukteshwar, 2-hour drive) is more reliable for Delhi-origin travelers — fewer cancellations and similar total time when factoring in airport buffers. Pantnagar makes sense for travelers from cities outside the Delhi train belt." },
  { q: "Can I get a taxi from Pantnagar Airport?", a: "Yes — prepaid airport taxis are available; private cabs can be pre-booked through your stay (typically ₹3,000–₹4,000 one-way to Mukteshwar). Most boutique homestays arrange airport pickup." },
];

export default function PantnagarAirportToMukteshwar() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Pantnagar Airport to Mukteshwar: Distance, Taxi, and Flight Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Pantnagar Airport to Mukteshwar — distance (~100 km), drive time, taxi fares, flights from Delhi, and pickup options from a Mukteshwar resident.",
    url: "https://ecoescapemukteshwar.com/blog/pantnagar-airport-to-mukteshwar",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Pantnagar Airport to Mukteshwar" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Pantnagar Airport to Mukteshwar: Taxi, Distance, Flight Guide (2026)", description: "Pantnagar Airport to Mukteshwar is 100 km / 2.5 hours by taxi. Flight options, fares, fog risk, and airport pickup from a resident host.", canonical: "https://ecoescapemukteshwar.com/blog/pantnagar-airport-to-mukteshwar", keywords: "pantnagar airport to mukteshwar, pantnagar mukteshwar distance, pantnagar to mukteshwar taxi, mukteshwar nearest airport, flight to mukteshwar, pantnagar PGH airport mukteshwar" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Transit Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Pantnagar Airport to Mukteshwar: 100 km, 2.5 Hours by Taxi</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="Pantnagar Airport is the nearest airport to Mukteshwar at 100 km / 2.5 hours by road" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Pantnagar (PGH) is the nearest airport to Mukteshwar at 100 km, around 2.5 hours by taxi.</strong> The airport has limited daily flights from Delhi (IndiGo, Alliance Air) and operates as a small regional terminal. Fog cancellations between November and February are common — most regular travelers prefer the overnight train to Kathgodam (70 km from Mukteshwar) for reliability.</p>

        <div className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><Plane className="h-5 w-5 text-primary" /> Quick reference</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><strong>Airport code:</strong> PGH (Pantnagar)</li>
            <li><strong>Distance to Mukteshwar:</strong> ~100 km</li>
            <li><strong>Taxi time:</strong> 2.5 hours (3 hours in monsoon)</li>
            <li><strong>Route:</strong> Pantnagar → Rudrapur → Haldwani → Bhowali → Bhimtal → Sitla → Mukteshwar</li>
            <li><strong>Taxi fare (one-way):</strong> ₹3,000–₹4,000 (sedan), ₹4,000–₹5,000 (SUV)</li>
            <li><strong>Major airlines:</strong> IndiGo, Alliance Air (verify schedules — frequent changes)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">When does the flight option make sense?</h2>
        <p className="text-muted-foreground leading-relaxed">For travelers from cities outside the Delhi train belt — Bengaluru, Mumbai, Hyderabad, Pune — flying to Pantnagar can save 4–6 hours over the alternative (fly to Delhi then drive 8 hours, or fly to Delhi then overnight train to Kathgodam). For Delhi-origin travelers, the math usually favors the overnight Ranikhet Express to Kathgodam.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">The fog risk (Nov–Feb)</h2>
        <p className="text-muted-foreground leading-relaxed">Pantnagar has limited instrument landing capability, so dense fog between November and February frequently causes cancellations or diversions to Lucknow. If your travel falls in this window, build a Plan B: typically diversion to Lucknow + 8-hour road journey, or rebooking to Delhi + train/road. Travel insurance and flexible airline tickets are worth the small premium.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">The drive from Pantnagar to Mukteshwar</h2>
        <p className="text-muted-foreground leading-relaxed">From the airport, exit toward Rudrapur (~10 km of plains highway), then take the road to Haldwani (~25 km, where the foothills begin). From Haldwani, climb to Bhowali via the standard hill road (~30 km, 1 hour), then continue through Bhimtal and Sitla to Mukteshwar (~35 km, 1 hour). The first 35 km is fast plains driving; the last 65 km is hill road and slows things down considerably.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Pickup from the airport</h2>
        <p className="text-muted-foreground leading-relaxed">Most boutique homestays arrange airport pickup if you confirm your flight 24 hours in advance. The driver waits with a name placard at the small Pantnagar arrivals area. Cost ₹3,000–₹4,000 for sedan; ₹4,000–₹5,000 for an Innova/Ertiga suitable for 4+ passengers with luggage. Prepaid taxi from the airport counter is also available but typically costs slightly more than pre-booked private cabs.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Flying into Pantnagar?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We arrange Pantnagar pickups — pre-confirmed driver, fixed fare, no surprises. Send your flight number and we'll handle the timing.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm flying into Pantnagar — could you arrange a pickup to Mukteshwar?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2"><Car className="h-4 w-4 text-primary" /> Related transit guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/kathgodam-to-mukteshwar-route-guide" className="text-primary underline">Kathgodam to Mukteshwar — train alternative</a></li>
            <li>→ <a href="/blog/how-to-reach-mukteshwar-guide" className="text-primary underline">How to reach Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from major cities</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
