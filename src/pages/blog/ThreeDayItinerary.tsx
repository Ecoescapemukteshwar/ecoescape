import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "Is 3 days enough for Mukteshwar?", a: "Yes — 3 days / 2 nights is the sweet spot. You cover the temple, Chauli Ki Jali, an orchard walk, Bhalu Gaad waterfall, and have unhurried time for sunrise and Kumaoni meals without feeling rushed." },
  { q: "Should I add Bhimtal or Nainital to a 3-day Mukteshwar trip?", a: "Bhimtal yes (40 km, half-day side trip). Nainital can wait — the back-and-forth eats half a day each way. If Nainital is on your list, do 5 days total." },
  { q: "Is the 3-day itinerary doable from Delhi over a weekend?", a: "Tight. Delhi → Mukteshwar is 7–8 hours each way. A Friday evening departure + Sunday evening return gets you only ~2 nights at the destination. Better to take an overnight train (Ranikhet Express) to Kathgodam Friday night and start the itinerary Saturday morning." },
];

export default function ThreeDayItinerary() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar 3 Day 2 Night Itinerary: A Practical Plan from a Resident (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar 3-day 2-night itinerary covering the temple, Chauli Ki Jali, Bhalu Gaad waterfall, orchards, and Bhimtal day trip — from a resident host.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-3-day-2-night-itinerary",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar 3D2N Itinerary" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar 3 Day 2 Night Itinerary: Resident's Plan (2026)", description: "Mukteshwar 3-day 2-night itinerary — temple, Chauli Ki Jali, Bhalu Gaad waterfall, Bhimtal day trip, orchards. From a Mukteshwar property owner.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-3-day-2-night-itinerary", keywords: "mukteshwar 3 day itinerary, mukteshwar 3 days 2 nights, mukteshwar long weekend, mukteshwar 2 night plan, mukteshwar trip plan, mukteshwar travel itinerary" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Itinerary</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar 3 Day 2 Night Itinerary: A Practical Plan</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="A 3-day Mukteshwar trip plan covering temple, waterfall, orchards, and Himalayan ridge sunrise" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>The cleanest 3-day plan for Mukteshwar: temple + Chauli Ki Jali on Day 1 afternoon, Bhalu Gaad waterfall trek on Day 2 morning, Sitla orchards or Bhimtal half-day on Day 2 afternoon, sunrise + slow morning on Day 3 before driving back.</strong> Below is the day-by-day plan with timings tuned to actual conditions, not Google Maps optimism.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Day 1 — Arrival, temple, sunset</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>By 1 PM:</strong> Arrive at your stay in Mukteshwar village. Lunch on the terrace.</li>
          <li><strong>3 PM:</strong> Drive to Mukteshwar Mahadev Temple (10 min). Darshan + walk to Chauli Ki Jali behind the temple.</li>
          <li><strong>5 PM:</strong> Sunset from Chauli Ki Jali ridge or your stay's terrace.</li>
          <li><strong>7 PM:</strong> Evening aarti at the temple (optional) → return for Kumaoni dinner: bhat ki churkani + rice + kafuli.</li>
          <li><strong>9 PM:</strong> Stargazing if it's a clear night.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Day 2 — Trek + orchards (or Bhimtal)</h2>
        <p className="text-muted-foreground leading-relaxed"><strong>Option A — Outdoor lover's day:</strong></p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>5:30 AM:</strong> Sunrise from the property terrace.</li>
          <li><strong>7 AM:</strong> Breakfast.</li>
          <li><strong>8:30 AM:</strong> Drive to Bhalu Gaad trail head. Trek (6 km round-trip, ~3 hr) — pine forest, waterfall, stream crossings.</li>
          <li><strong>1 PM:</strong> Late lunch back at the property.</li>
          <li><strong>3 PM:</strong> Drive to Sitla (4 km) for orchard walks. Stop at one of the boutique cafés on the way.</li>
          <li><strong>6 PM:</strong> Bonfire on the terrace (winter / shoulder seasons).</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4"><strong>Option B — Lake day trip:</strong></p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>9 AM:</strong> Drive to Bhimtal (40 km, 1.5 hr).</li>
          <li><strong>11 AM – 4 PM:</strong> Bhimtal lake — boat ride, lakeside lunch, walk around the lake. Optional Bhimtal Aquarium (kids).</li>
          <li><strong>5:30 PM:</strong> Return to Mukteshwar — sunset light driving up.</li>
          <li><strong>8 PM:</strong> Dinner.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Day 3 — Slow morning, drive back</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>6 AM:</strong> Sunrise (best of the trip — most guests skip this on Day 1 due to fatigue).</li>
          <li><strong>7:30 AM:</strong> Garden walk or another temple visit.</li>
          <li><strong>9 AM:</strong> Breakfast.</li>
          <li><strong>11 AM:</strong> Pack and check out.</li>
          <li><strong>By 11:30 AM:</strong> Start drive back. Aim to be past Bhowali by 1 PM and Haldwani by 2 PM. Reach Delhi by 7–8 PM.</li>
        </ul>
        <p className="text-muted-foreground text-sm mt-3">If you have a flexible Day 3, add a Kainchi Dham detour on the way back (42 km from Mukteshwar). Adds 2 hours total to the drive.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Where to stay for a 3-day trip</h2>
        <p className="text-muted-foreground leading-relaxed">Pick one stay for both nights — moving accommodations on a 3-day trip wastes half a day. Boutique aparthotels in the village are well-suited because units are private and food is in-house. Direct booking is typically 10–20% cheaper than OTAs.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Costs (per person, mid-range)</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Travel (Delhi return): ₹3,000–₹5,000 (taxi share) or ₹2,000 (overnight train + Kathgodam taxi)</li>
          <li>Stay (2 nights, mid-range homestay): ₹4,000–₹6,000</li>
          <li>Food (3 days, Kumaoni meals included): ₹1,500–₹2,500</li>
          <li>Activities (entry fees, treks, etc.): ₹500–₹1,000</li>
          <li><strong>Total per person:</strong> ₹9,000–₹14,500</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Want help planning your 3 days?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">WhatsApp us with your dates and we'll suggest the right unit, share trail conditions, and arrange Kathgodam pickup if needed.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning a 3-day Mukteshwar trip — could you help with availability and a route suggestion?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related itineraries & guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mukteshwar-weekend-itinerary" className="text-primary underline">2-day weekend itinerary</a></li>
            <li>→ <a href="/blog/things-to-do-in-mukteshwar" className="text-primary underline">15 things to do in Mukteshwar</a></li>
            <li>→ <a href="/blog/bhalu-gaad-waterfall-trek" className="text-primary underline">Bhalu Gaad waterfall trek</a></li>
            <li>→ <a href="/blog/mukteshwar-trip-cost-2026-budget-guide" className="text-primary underline">Mukteshwar trip cost</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
