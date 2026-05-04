import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "How far is Mukteshwar from Nainital?", a: "Mukteshwar is 51 km from Nainital by road, taking 1.5 to 2 hours via Bhowali, Bhimtal, and Sitla." },
  { q: "Can I do a Nainital to Mukteshwar day trip?", a: "Yes, but tight. Leaving Nainital at 9 AM gets you to Mukteshwar by 11 AM, with time for the temple, Chauli Ki Jali, and lunch before driving back by 4 PM. An overnight stay is the better experience." },
  { q: "Is there a direct bus from Nainital to Mukteshwar?", a: "No direct bus. Take a shared jeep or local bus to Bhowali, then change for a Mukteshwar-bound vehicle. Most travelers prefer a private taxi (₹2,000–₹2,500 one-way)." },
  { q: "What's the route from Nainital to Mukteshwar?", a: "Nainital → Bhowali (10 km) → Bhimtal (22 km) → Sitla (14 km) → Mukteshwar (5 km). Total 51 km, mostly two-lane mountain road." },
];

export default function NainitalToMukteshwarDistance() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Nainital to Mukteshwar Distance, Route, and Day Trip Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Nainital to Mukteshwar is 51 km / 1.5–2 hours by road. Get the route, taxi fares, day-trip plan, and whether to combine the two on a longer trip.",
    url: "https://ecoescapemukteshwar.com/blog/nainital-to-mukteshwar-distance",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Nainital to Mukteshwar Distance" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Nainital to Mukteshwar Distance & Route Guide (2026)", description: "Nainital to Mukteshwar is 51 km / 1.5–2 hours via Bhowali. Route, taxi fares, day-trip plan, and tips from a Mukteshwar resident.", canonical: "https://ecoescapemukteshwar.com/blog/nainital-to-mukteshwar-distance", keywords: "nainital to mukteshwar distance, nainital to mukteshwar, nainital mukteshwar, nainital to mukteshwar by road, mukteshwar from nainital, nainital mukteshwar route" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Route Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Nainital to Mukteshwar: 51 km, 1.5 Hours of Mountain Road</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="The 51 km road from Nainital to Mukteshwar passes through Bhowali, Bhimtal, and orchard country" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Nainital to Mukteshwar is 51 km by road, taking 1.5 to 2 hours through Bhowali, Bhimtal, and Sitla.</strong> The route is scenic — leaving Nainital's lake, climbing to Bhowali ridge, dropping to Bhimtal lake, and then climbing again to Mukteshwar's higher ridge at 2,286 m.</p>

        <div className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><Car className="h-5 w-5 text-primary" /> Quick reference</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><strong>Distance:</strong> 51 km</li>
            <li><strong>Drive time:</strong> 1.5–2 hours</li>
            <li><strong>Route:</strong> Nainital → Bhowali → Bhimtal → Sitla → Mukteshwar</li>
            <li><strong>Altitude change:</strong> Nainital 2,084 m → Bhimtal 1,370 m → Mukteshwar 2,286 m</li>
            <li><strong>Taxi fare (one-way):</strong> ₹2,000–₹2,500 (sedan), ₹2,500–₹3,500 (SUV)</li>
            <li><strong>Shared cab via Bhowali:</strong> ~₹400/person (multi-leg)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">The route in detail</h2>
        <p className="text-muted-foreground leading-relaxed">From Nainital, exit via Tallital and climb to Bhowali (10 km, 30 minutes). Bhowali is a useful breakfast/fuel stop — single-most-important junction in the eastern Kumaon. Continue on the Bhowali–Mukteshwar road to Bhimtal (12 km, 25 minutes from Bhowali). Bhimtal lake is a worthwhile half-hour stop if your timing allows. From Bhimtal, the road climbs through Ramgarh and Sitla — fruit orchard country. The final 5 km from Sitla to Mukteshwar is a steep climb with sharp switchbacks; drive carefully.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Best time of day to drive</h2>
        <p className="text-muted-foreground leading-relaxed">Morning (9–11 AM) is best — you'll cross the busy Bhowali junction before the lunch-hour rush. Avoid late afternoon (4–6 PM) on weekends in peak season — Nainital tourists drive out via the same road and create slow-moving traffic between Bhowali and Bhimtal. Avoid driving after dark — no street lighting past Bhowali and the road is narrow.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Worth combining? Nainital + Mukteshwar in one trip</h2>
        <p className="text-muted-foreground leading-relaxed">Yes — the two complement each other genuinely. Nainital for the lake town energy, Mukteshwar for the quiet ridge views. A 5-night trip with 2 nights in Nainital and 3 in Mukteshwar works well. See:{" "}<a href="/blog/mukteshwar-vs-nainital" className="text-primary underline">Mukteshwar vs Nainital comparison</a>.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Driving up from Nainital?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We can hold a room from the moment you leave Nainital so the timing isn't a worry.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm driving up from Nainital — could you confirm availability?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related route guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mukteshwar-to-nainital-day-trip" className="text-primary underline">Reverse direction — Mukteshwar to Nainital day trip</a></li>
            <li>→ <a href="/blog/bhimtal-to-mukteshwar-route-guide" className="text-primary underline">Bhimtal to Mukteshwar route</a></li>
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from every major city</a></li>
            <li>→ <a href="/blog/mukteshwar-vs-nainital" className="text-primary underline">Mukteshwar vs Nainital comparison</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
