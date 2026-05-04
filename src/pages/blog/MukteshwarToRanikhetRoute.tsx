import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "How far is Ranikhet from Mukteshwar?", a: "Ranikhet is approximately 95 km from Mukteshwar, taking 3 hours via Almora and Majkhali. There's no shorter route — both Almora and Majkhali are unavoidable waypoints." },
  { q: "Can I do a Ranikhet day trip from Mukteshwar?", a: "Tight but doable. Leaving Mukteshwar at 8 AM, you reach Ranikhet by 11, see Chaubatia gardens + Jhula Devi temple + lunch, drive back by 4 PM. Most travelers prefer to stay 1 night in Ranikhet." },
  { q: "Best route from Mukteshwar to Ranikhet?", a: "Mukteshwar → Dhanachuli → Mehrora → Almora (50 km, 2 hr) → Majkhali → Ranikhet (45 km, 1 hr). Almora is a useful break point." },
];

export default function MukteshwarToRanikhetRoute() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar to Ranikhet: Distance, Route, and Day Trip Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar to Ranikhet — 95 km / 3 hours via Almora and Majkhali. Route, day-trip plan, what to see in Ranikhet, and Chaubatia tips.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-to-ranikhet-route-guide",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar to Ranikhet" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar to Ranikhet: Distance, Route & Trip Guide (2026)", description: "Mukteshwar to Ranikhet is 95 km / 3 hours via Almora. Route, what to see in Ranikhet (Chaubatia gardens, Jhula Devi temple), Kumaon trip planning.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-to-ranikhet-route-guide", keywords: "mukteshwar to ranikhet, mukteshwar ranikhet distance, mukteshwar ranikhet route, ranikhet from mukteshwar, kumaon circuit ranikhet" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Route Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar to Ranikhet: 95 km Through Kumaon's Quiet Heart</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="The 95 km road from Mukteshwar to Ranikhet via Almora and Majkhali" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Mukteshwar to Ranikhet is 95 km / 3 hours via Almora and Majkhali.</strong> Ranikhet is a former cantonment town and one of Kumaon's quietest hill stations — leafy, orderly, and largely untouched by mass tourism. The drive itself is among the most scenic in Kumaon, passing Almora's old town and the cool deodar forests around Majkhali.</p>

        <div className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><Car className="h-5 w-5 text-primary" /> Quick reference</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><strong>Distance:</strong> ~95 km</li>
            <li><strong>Drive time:</strong> 3 hours</li>
            <li><strong>Route:</strong> Mukteshwar → Dhanachuli → Almora → Majkhali → Ranikhet</li>
            <li><strong>Altitude:</strong> Mukteshwar 2,286 m → Almora 1,638 m → Ranikhet 1,869 m</li>
            <li><strong>Taxi fare (one-way):</strong> ₹3,500–₹4,500</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">What to see in Ranikhet</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Chaubatia Gardens</strong> — apple, peach, plum orchards on a viewpoint with snow peaks visible. The signature Ranikhet experience.</li>
          <li><strong>Jhula Devi Temple</strong> — ancient temple with hundreds of bells offered by devotees over decades.</li>
          <li><strong>Bhalu Dam</strong> — small reservoir, peaceful walking path.</li>
          <li><strong>Kumaon Regiment Centre Museum</strong> — military history of the regiment.</li>
          <li><strong>Mall Road / Sadar Bazaar</strong> — restrained shopping district maintained by the cantonment.</li>
          <li><strong>Upat golf course</strong> — one of the highest 9-hole golf courses in India (~6 km from Ranikhet).</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Day trip plan: Mukteshwar to Ranikhet</h2>
        <p className="text-muted-foreground leading-relaxed">A day trip is tight but workable. Leave Mukteshwar at 8 AM, reach Ranikhet by 11. Spend the next 4 hours on Chaubatia + Jhula Devi temple + Mall Road. Lunch at a Kumaoni dhaba near the cantonment. Leave by 3:30 PM, reach Mukteshwar by 6:30 PM. <strong>Better option:</strong> spend a night in Ranikhet (cantonment guesthouses or boutique stays from ₹2,500), see Chaubatia at golden hour, return next day.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Kumaon circuit: Mukteshwar–Almora–Ranikhet</h2>
        <p className="text-muted-foreground leading-relaxed">A 5–6 night circuit covering all three works well. Day 1–2: Mukteshwar (sunrise + temple + waterfall). Day 3: drive to Almora (2 hr). Day 4: day trip to Jageshwar Dham. Day 5: drive to Ranikhet (1.5 hr). Day 6: Ranikhet + drive back to Kathgodam (3 hr). See:{" "}<a href="/blog/mukteshwar-vs-almora-vs-ranikhet" className="text-primary underline">Mukteshwar vs Almora vs Ranikhet comparison</a>.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Planning a Kumaon circuit?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">WhatsApp us for a multi-stop trip plan covering Mukteshwar, Almora, and Ranikhet.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning a Kumaon trip including Mukteshwar and Ranikhet — could you help?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related route guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mukteshwar-to-almora-route-guide" className="text-primary underline">Mukteshwar to Almora route</a></li>
            <li>→ <a href="/blog/mukteshwar-vs-almora-vs-ranikhet" className="text-primary underline">Mukteshwar vs Almora vs Ranikhet</a></li>
            <li>→ <a href="/blog/spiritual-kumaon-guide" className="text-primary underline">Spiritual Kumaon — Jageshwar, Kainchi, Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from major cities</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
