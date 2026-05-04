import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "How far is Mukteshwar from Lucknow?", a: "Lucknow to Mukteshwar is approximately 430 km by road, taking 9–10 hours with normal traffic. Most travelers split the drive into two days or take an overnight train to Kathgodam." },
  { q: "What's the best route from Lucknow to Mukteshwar?", a: "Lucknow → Bareilly → Rampur → Haldwani → Bhowali → Bhimtal → Mukteshwar. The first 230 km to Bareilly is highway; the next 200 km includes the hill climb from Haldwani onwards." },
  { q: "Are there direct trains from Lucknow to Kathgodam?", a: "Yes — the Bagh Express (15035) and a few others run between Lucknow and Kathgodam. Travel time is around 12 hours overnight. Then take a 2-hour taxi from Kathgodam." },
  { q: "Can I drive Lucknow to Mukteshwar in one day?", a: "Yes but it's tiring — 10 hours of driving with the last 2 hours on hill road. Most travelers prefer to break the journey at Bareilly or Haldwani, or take the overnight train." },
];

export default function LucknowToMukteshwar() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Lucknow to Mukteshwar: Distance, Route, and Road Trip Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Lucknow to Mukteshwar — distance (~430 km), drive time, route via Bareilly, train options, and an honest comparison of road vs rail.",
    url: "https://ecoescapemukteshwar.com/blog/lucknow-to-mukteshwar-road-guide",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Lucknow to Mukteshwar" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Lucknow to Mukteshwar: Distance, Route, and Road Trip Guide (2026)", description: "Lucknow to Mukteshwar is 430 km / 9–10 hours by road via Bareilly. Train and road options, breaks, and arrival timing from a Mukteshwar resident.", canonical: "https://ecoescapemukteshwar.com/blog/lucknow-to-mukteshwar-road-guide", keywords: "lucknow to mukteshwar, lucknow to mukteshwar distance, lucknow mukteshwar route, mukteshwar from lucknow, lucknow to nainital mukteshwar road trip" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Route Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Lucknow to Mukteshwar: 430 km Across UP and Uttarakhand</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="The Lucknow to Mukteshwar drive crosses the Gangetic plains and climbs into the Kumaon hills" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Lucknow to Mukteshwar is approximately 430 km by road, taking 9–10 hours via Bareilly, Rampur, Haldwani, and Bhowali.</strong> The first 230 km to Bareilly is fast highway driving; the last 200 km includes the hill climb. Most travelers either break the drive into two days, or take the overnight train to Kathgodam.</p>

        <div className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><Car className="h-5 w-5 text-primary" /> Quick reference</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><strong>Distance:</strong> ~430 km</li>
            <li><strong>Drive time:</strong> 9–10 hours</li>
            <li><strong>Route:</strong> Lucknow → Bareilly → Rampur → Haldwani → Bhowali → Bhimtal → Mukteshwar</li>
            <li><strong>Best break point:</strong> Haldwani (300 km from Lucknow, before the hills) or Bareilly (230 km)</li>
            <li><strong>Train option:</strong> Bagh Express (15035) Lucknow → Kathgodam, ~12 hours overnight</li>
            <li><strong>Self-drive vs taxi:</strong> taxi cost ~₹14,000–₹18,000 one-way</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">The route in detail</h2>
        <p className="text-muted-foreground leading-relaxed">From Lucknow, exit on the highway toward Sitapur and Bareilly (~230 km, 4 hours). Bareilly is the natural midpoint — multiple dhabas and lunch stops. Continue to Rampur (60 km from Bareilly), then to Rudrapur and Haldwani (300 km cumulative). At Haldwani the plains end and the hills begin. From Haldwani take the Bhowali road (~30 km, 1 hour), then through Bhimtal and Sitla to Mukteshwar (~70 km, 2 hours). Total: ~430 km in 9–10 hours of total elapsed time.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Road vs rail — which is better from Lucknow?</h2>
        <p className="text-muted-foreground leading-relaxed">For most Lucknow travelers, the overnight train to Kathgodam is the more relaxed option. Bagh Express leaves Lucknow around 10 PM and reaches Kathgodam by 10 AM, after which a 2-hour taxi gets you to Mukteshwar by lunch. Total elapsed: 14 hours including sleep. Driving requires 10 hours of active driving plus rest stops — a full lost day.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Recommended itinerary for Lucknow travelers</h2>
        <p className="text-muted-foreground leading-relaxed"><strong>Option A — Train + taxi (recommended):</strong></p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Day 0 evening: Bagh Express from Lucknow to Kathgodam (overnight)</li>
          <li>Day 1 morning: arrive Kathgodam, taxi to Mukteshwar (2 hr), lunch at the property</li>
          <li>Day 4–5 return: reverse the same — depart Mukteshwar after breakfast, train back from Kathgodam evening</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4"><strong>Option B — Two-day drive:</strong></p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Day 1: Lucknow → Haldwani (300 km, 6 hr). Stay overnight in Haldwani or Bhimtal.</li>
          <li>Day 2: Haldwani → Mukteshwar (130 km, 3 hr). Reach by mid-morning.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Coming from Lucknow?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We can arrange a Kathgodam pickup if you're taking the Bagh Express. Drop us a WhatsApp with your travel details.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm coming from Lucknow — could you help with the route and availability?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related route guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/kathgodam-to-mukteshwar-route-guide" className="text-primary underline">Kathgodam to Mukteshwar by train + taxi</a></li>
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from every major city</a></li>
            <li>→ <a href="/blog/how-to-reach-mukteshwar-guide" className="text-primary underline">How to reach Mukteshwar</a></li>
            <li>→ <a href="/blog/delhi-to-mukteshwar-road-trip" className="text-primary underline">Delhi to Mukteshwar road trip</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
