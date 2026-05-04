import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "How far is Almora from Mukteshwar?", a: "Almora is approximately 50 km from Mukteshwar by road, taking 2 hours via Dhanachuli and Mehrora." },
  { q: "What's the best route from Mukteshwar to Almora?", a: "Mukteshwar → Sitla (4 km) → Dhanachuli junction → Mehrora → Almora. The route avoids Bhowali and is faster than going via Bhowali–Bhimtal." },
  { q: "Can I do an Almora day trip from Mukteshwar?", a: "Yes — leave Mukteshwar by 9 AM, reach Almora by 11 AM, see Lala Bazaar + Nanda Devi temple + lunch, drive back by 4 PM. Tight but workable." },
];

export default function MukteshwarToAlmoraRoute() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar to Almora: Distance, Route, and Day Trip Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar to Almora — 50 km / 2 hours via Dhanachuli. Route, day-trip plan, what to see in Almora, and Jageshwar Dham combination tips.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-to-almora-route-guide",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar to Almora" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar to Almora: Distance, Route & Day Trip Guide (2026)", description: "Mukteshwar to Almora is 50 km / 2 hours via Dhanachuli. Route, day-trip plan, Jageshwar Dham combination, taxi fares.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-to-almora-route-guide", keywords: "mukteshwar to almora, mukteshwar to almora distance, mukteshwar almora route, almora day trip mukteshwar, mukteshwar almora taxi" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Route Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar to Almora: 50 km, 2 Hours of Mountain Road</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="The 50 km road from Mukteshwar to Almora through Dhanachuli and Mehrora" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Mukteshwar to Almora is 50 km by road, taking 2 hours via Dhanachuli and Mehrora.</strong> The route avoids Bhowali and Bhimtal entirely — a more direct line through the Kumaon ridge. Almora is the cultural heart of Kumaon and worth a day trip from Mukteshwar, or a 2-night stop on a longer Kumaon circuit.</p>

        <div className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><Car className="h-5 w-5 text-primary" /> Quick reference</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><strong>Distance:</strong> ~50 km</li>
            <li><strong>Drive time:</strong> 2 hours</li>
            <li><strong>Route:</strong> Mukteshwar → Sitla → Dhanachuli → Mehrora → Almora</li>
            <li><strong>Altitude:</strong> Mukteshwar 2,286 m → Almora 1,638 m (descend 650 m)</li>
            <li><strong>Taxi fare (one-way):</strong> ₹2,000–₹2,800</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">What to see in Almora</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Lala Bazaar</strong> — 200-year-old commercial street with traditional Kumaoni architecture.</li>
          <li><strong>Nanda Devi Temple</strong> — major regional Shakti pith. Older than Mukteshwar Mahadev temple by ~400 years.</li>
          <li><strong>Bal Mithai</strong> — try the local chocolate-fudge confection. Khim Singh Mohan Singh shop is the institution.</li>
          <li><strong>Bright End Corner</strong> — sunset viewpoint west of the town.</li>
          <li><strong>Almora ridge walk</strong> — heritage walk through the old town.</li>
          <li><strong>Kasar Devi temple</strong> — 8 km from Almora, overlooks the Himalayan range, has a "magnetic anomaly" reputation.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Day trip plan: Mukteshwar to Almora</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>9 AM:</strong> Leave Mukteshwar.</li>
          <li><strong>11 AM:</strong> Arrive Almora. Park near Lala Bazaar.</li>
          <li><strong>11–1:</strong> Walk Lala Bazaar, visit Nanda Devi Temple, taste Bal Mithai.</li>
          <li><strong>1:30 PM:</strong> Lunch at a Kumaoni dhaba near the bazaar.</li>
          <li><strong>3 PM:</strong> Drive to Kasar Devi (15 min) for sunset views and meditation cave.</li>
          <li><strong>4:30 PM:</strong> Drive back to Mukteshwar.</li>
          <li><strong>6:30 PM:</strong> Reach Mukteshwar.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Combine with Jageshwar Dham</h2>
        <p className="text-muted-foreground leading-relaxed">Jageshwar Dham (35 km from Almora, 90 km from Mukteshwar) is a major Shiva pilgrimage with 124 ancient stone temples in a deodar forest setting. If you have a full day or an overnight, combine: Mukteshwar → Almora (2 hr) → Jageshwar (1 hr) → return. Total round-trip 8–10 hours. Better as an overnight trip if you want unhurried time at both.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Planning an Almora day trip?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">We can arrange a taxi for the round trip and recommend the best dhabas in Almora.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'd like to do an Almora day trip from Mukteshwar — could you arrange a taxi?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related route guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mukteshwar-vs-almora-vs-ranikhet" className="text-primary underline">Mukteshwar vs Almora vs Ranikhet</a></li>
            <li>→ <a href="/blog/mukteshwar-to-ranikhet-route-guide" className="text-primary underline">Mukteshwar to Ranikhet route</a></li>
            <li>→ <a href="/blog/spiritual-kumaon-guide" className="text-primary underline">Spiritual Kumaon — Jageshwar, Kainchi, Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from major cities</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
