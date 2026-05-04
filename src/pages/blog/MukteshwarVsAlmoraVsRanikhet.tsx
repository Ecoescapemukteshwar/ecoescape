import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "Which is the most peaceful — Mukteshwar, Almora, or Ranikhet?", a: "Ranikhet is the most peaceful (cantonment town with strict construction limits), Mukteshwar a close second (small village), Almora the busiest (regional commercial hub)." },
  { q: "Which has the best Himalayan views?", a: "Mukteshwar at 2,286 m has the broadest east-facing views (Nanda Devi, Trishul, Panchachuli). Ranikhet's Chaubatia viewpoint is also excellent. Almora views are partially obstructed by the surrounding ridges." },
  { q: "Can I cover all three in one trip?", a: "Yes — they form a natural Kumaon triangle. Mukteshwar to Almora is 50 km, Almora to Ranikhet is 50 km, Ranikhet back to Mukteshwar is 95 km. A 5–6 night trip can cover all three with 2 nights at each base." },
];

export default function MukteshwarVsAlmoraVsRanikhet() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar vs Almora vs Ranikhet: Which Kumaon Hill Station? (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar vs Almora vs Ranikhet — three Kumaon hill stations compared on views, vibe, prices, distance, and which suits which traveler.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-vs-almora-vs-ranikhet",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar vs Almora vs Ranikhet" },
  ]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar vs Almora vs Ranikhet: Which Kumaon Hill Station? (2026)", description: "Mukteshwar, Almora, or Ranikhet — comparison on views, crowds, prices, and which traveler picks which Kumaon hill station.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-vs-almora-vs-ranikhet", keywords: "mukteshwar vs almora, mukteshwar vs ranikhet, almora vs ranikhet, kumaon hill stations, kumaon comparison, almora ranikhet mukteshwar" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Comparison Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar vs Almora vs Ranikhet: Which Kumaon Hill Station Suits You?</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="The Kumaon hill stations of Mukteshwar, Almora, and Ranikhet form a natural triangle in Uttarakhand" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Mukteshwar (2,286 m), Almora (1,638 m), and Ranikhet (1,869 m) form Kumaon's three classic hill-station bases.</strong> Mukteshwar is the highest and quietest with the broadest Himalayan views; Almora is the regional cultural and commercial hub; Ranikhet is a former cantonment town — restrained, leafy, and orderly. They're 50–95 km apart and many travelers cover two or three on a single trip.</p>

        <div className="my-10 rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/40"><tr><th className="text-left p-3 font-semibold">Factor</th><th className="text-left p-3 font-semibold text-primary">Mukteshwar</th><th className="text-left p-3 font-semibold">Almora</th><th className="text-left p-3 font-semibold">Ranikhet</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-medium">Altitude</td><td className="p-3">2,286 m</td><td className="p-3">1,638 m</td><td className="p-3">1,869 m</td></tr>
                <tr><td className="p-3 font-medium">Distance from Delhi</td><td className="p-3">320 km</td><td className="p-3">370 km</td><td className="p-3">355 km</td></tr>
                <tr><td className="p-3 font-medium">Vibe</td><td className="p-3">Quiet village</td><td className="p-3">Cultural hub, busier</td><td className="p-3">Cantonment, orderly, leafy</td></tr>
                <tr><td className="p-3 font-medium">Best view</td><td className="p-3">Nanda Devi from ridge</td><td className="p-3">Bright Corner sunset</td><td className="p-3">Chaubatia gardens, snow peaks</td></tr>
                <tr><td className="p-3 font-medium">Famous for</td><td className="p-3">Sunrise + temple + orchards</td><td className="p-3">Bal Mithai, temples, Lala Bazaar</td><td className="p-3">Cantonment golf, apple orchards</td></tr>
                <tr><td className="p-3 font-medium">Crowd level</td><td className="p-3">Low</td><td className="p-3">Moderate–high</td><td className="p-3">Low</td></tr>
                <tr><td className="p-3 font-medium">Stay starting price</td><td className="p-3">₹2,500</td><td className="p-3">₹2,000</td><td className="p-3">₹2,500</td></tr>
                <tr><td className="p-3 font-medium">Best for</td><td className="p-3">Slow travel, families, workcation</td><td className="p-3">Cultural travel, budget</td><td className="p-3">Quiet retreat, walking holidays</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Mukteshwar — the highest of the three</h2>
        <p className="text-muted-foreground leading-relaxed">At 2,286 m, Mukteshwar offers the most direct Himalayan views and the deepest winter (snowfall most years in January). The village is small — fewer than 10 standalone restaurants — and the vibe is firmly residential rather than touristic. Best for travelers who want quiet, mountain views, and an escape from urban energy. See:{" "}<a href="/blog/things-to-do-in-mukteshwar" className="text-primary underline">things to do in Mukteshwar</a>.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Almora — the cultural hub</h2>
        <p className="text-muted-foreground leading-relaxed">Almora at 1,638 m is the older Kumaon town — its Lala Bazaar is a 200-year-old commercial street, the Nanda Devi temple is a major regional pilgrimage site, and Bal Mithai (a chocolate-fudge confection) is a local institution. Almora is the busiest of the three, with more restaurants, more shops, and more street life. It's also the natural base for Jageshwar Dham (~35 km from Almora).</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Ranikhet — the cantonment retreat</h2>
        <p className="text-muted-foreground leading-relaxed">Ranikhet at 1,869 m is a Kumaon Regimental Centre town. Strict army-managed urban planning has kept it leafy, unhurried, and almost suspiciously clean. The Chaubatia gardens and Jhula Devi temple are the main draws. Best for travelers who want extended walking holidays in a town that doesn't feel crowded.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Distance between the three</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Mukteshwar → Almora:</strong> 50 km, ~2 hr (via Dhanachuli)</li>
          <li><strong>Almora → Ranikhet:</strong> 50 km, ~2 hr (via Majkhali)</li>
          <li><strong>Ranikhet → Mukteshwar:</strong> 95 km, ~3 hr (via Almora)</li>
          <li><strong>Total triangle:</strong> ~195 km — comfortable for a 5–6 night trip</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Recommended itinerary covering all three</h2>
        <p className="text-muted-foreground leading-relaxed"><strong>Day 1–2:</strong> Mukteshwar — sunrise, temple, Chauli Ki Jali, fruit orchards. <strong>Day 3:</strong> Drive to Almora (2 hr). Lala Bazaar, Nanda Devi temple. <strong>Day 4:</strong> Day trip to Jageshwar Dham (~35 km). <strong>Day 5:</strong> Drive to Ranikhet (2 hr). Chaubatia gardens, Jhula Devi temple. <strong>Day 6:</strong> Drive back via Bhowali or directly to Kathgodam (3 hr). Total: 5 nights, ~280 km of driving.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Starting your Kumaon trip in Mukteshwar?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Ecoescape is the natural first stop — direct booking and we can suggest onward routes to Almora and Ranikhet.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning a Kumaon trip covering Mukteshwar, Almora, and Ranikhet — could you share availability and route advice?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mukteshwar-vs-nainital" className="text-primary underline">Mukteshwar vs Nainital</a></li>
            <li>→ <a href="/blog/spiritual-kumaon-guide" className="text-primary underline">Spiritual Kumaon — Jageshwar, Kainchi, Mukteshwar Dham</a></li>
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from major cities</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
