import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "Is March a good time to visit Mukteshwar?", a: "Yes. March is one of the best months — spring blossoms in orchards, daytime temperatures of 14–20°C, sharp Himalayan visibility, and crowds well below peak May–June levels." },
  { q: "Will it snow in Mukteshwar in March?", a: "Rarely — late-season snow events occur once every 3–4 years, usually in the first week. Most of March is post-snow with cool dry days and crisp mornings." },
  { q: "What's the temperature in Mukteshwar in March?", a: "Daytime 14–20°C, nights 5–10°C. Morning and evening layers needed; afternoons are pleasant in light cottons." },
];

export default function MukteshwarInMarch() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar in March: Spring Blossoms, Weather, and Travel Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar in March — spring blossoms, 14–20°C weather, sharp Himalayan views, and lighter crowds. Complete travel guide from a resident.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-in-march",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar in March" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar in March: Spring Blossoms & Travel Guide (2026)", description: "Mukteshwar in March — fruit blossoms, 14–20°C, sharp Himalayan views, lighter crowds. What to expect, what to pack, and what to do.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-in-march", keywords: "mukteshwar in march, mukteshwar march weather, mukteshwar spring, mukteshwar march temperature, mukteshwar march travel" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Seasonal Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar in March: Spring Blossoms, Sharp Views, Lighter Crowds</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="Mukteshwar in March — peach and plum blossoms in orchards with Himalayan backdrop" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>March is one of the most underrated months to visit Mukteshwar.</strong> The orchards begin blooming, daytime temperatures sit at a comfortable 14–20°C, the post-winter air is sharp enough that Nanda Devi and Trishul are clearly visible most mornings, and the village is still well below the May–June tourist peak. If you can take a week off, March is when I'd send a first-time visitor.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Weather and what to pack</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li><strong>Day high:</strong> 14–20°C</li>
          <li><strong>Night low:</strong> 5–10°C</li>
          <li><strong>Rainfall:</strong> ~30 mm (occasional pre-monsoon showers)</li>
          <li><strong>Snow:</strong> rare; once every 3–4 years in the first week</li>
          <li><strong>Pack:</strong> Light cottons for daytime, fleece for evening, light jacket and woollen cap for early-morning sunrise viewing.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">What's special about March in Mukteshwar?</h2>
        <p className="text-muted-foreground leading-relaxed">Spring blossoms peak in the second half of March in Sitla and Ramgarh — peach, plum, and apricot trees turn the valley pink and white. The orchard walks at this time are extraordinary. The IVRI campus rhododendrons (locally "buransh") begin flowering, and Bhalu Gaad waterfall flows cleanly with snowmelt. The Himalayan visibility is also at its sharpest — winter haze has cleared, summer haze hasn't started yet.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Things to do in March</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Orchard blossom walks</strong> — Sitla, Ramgarh, Peora. Best in the second half of the month.</li>
          <li><strong>Bhalu Gaad waterfall trek</strong> — flowing water from snowmelt; the most scenic time.</li>
          <li><strong>Mukteshwar Mahadev Temple at sunrise</strong> — sharp visibility, fewer crowds.</li>
          <li><strong>Chauli Ki Jali</strong> — clear visibility for rock climbing or rappelling sessions.</li>
          <li><strong>Stargazing</strong> — March nights are still clear and cool; little to no haze.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Crowd levels and pricing</h2>
        <p className="text-muted-foreground leading-relaxed">First half of March is genuinely quiet — pre-Holi, pre-vacation. Boutique homestays often run 20–30% lower rates than May/June. Second half (after Holi) sees moderate weekend traffic from Delhi but still well below peak. Direct-booking discounts are easiest to negotiate now.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Planning a March trip?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">WhatsApp us with your dates — March direct rates are typically 20–30% below peak.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning a March visit to Mukteshwar — could you share availability?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/spring-in-mukteshwar-guide" className="text-primary underline">Full spring in Mukteshwar guide</a></li>
            <li>→ <a href="/blog/best-time-to-visit-mukteshwar-guide" className="text-primary underline">Best time to visit Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-temperature-today-and-monthly-guide" className="text-primary underline">Mukteshwar monthly temperature guide</a></li>
            <li>→ <a href="/blog/fruit-orchards-of-mukteshwar-guide" className="text-primary underline">Fruit orchards of Mukteshwar</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
