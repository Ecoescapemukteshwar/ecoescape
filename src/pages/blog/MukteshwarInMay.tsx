import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "How is Mukteshwar weather in May?", a: "Pleasant — daytime 18–25°C, nights 10–15°C. Late May can hit 26°C briefly but humidity stays low. The escape from 42°C+ Delhi heat is the entire point." },
  { q: "Is May peak season in Mukteshwar?", a: "Yes — May (especially the second half, May 15–31) is peak demand. Direct-booking rates run 20–25% above off-season. Reserve 4–6 weeks in advance for weekends." },
  { q: "What to do in Mukteshwar in May?", a: "Sunrise viewing, Bhalu Gaad waterfall trek, orchard walks (early-summer fruits), evening bonfires, Mukteshwar Mahadev Temple visits, and Bhimtal lake day trips." },
];

export default function MukteshwarInMay() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar in May: Summer Escape Weather, Activities, and Travel Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar in May — escape Delhi's 42°C+ heat. 18–25°C weather, peak season tips, things to do, what to pack. From a resident host.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-in-may",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar in May" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar in May: Summer Escape Weather & Travel Guide (2026)", description: "Mukteshwar in May — escape Delhi's 42°C heat with 18–25°C days. Peak season planning tips, activities, and what to pack.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-in-may", keywords: "mukteshwar in may, mukteshwar may weather, mukteshwar may temperature, mukteshwar summer escape, may travel mukteshwar" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Seasonal Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar in May: The Delhi Summer Escape</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="Mukteshwar in May — pleasant 18–25°C escape from Delhi NCR's heat with clear Himalayan views" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>May in Mukteshwar means 18–25°C, low humidity, long evenings, and freedom from Delhi NCR's 42°C+ summer.</strong> It's the start of peak season — the second half (May 15–31) sees the highest demand. Book early and you get one of the best months of the year here: bright days, sharp visibility, and pleasant nights.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">May weather and what to pack</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li><strong>Day high:</strong> 18–25°C (rare 26°C in late May)</li>
          <li><strong>Night low:</strong> 10–15°C</li>
          <li><strong>Rainfall:</strong> ~50 mm (occasional pre-monsoon thunder showers, especially late month)</li>
          <li><strong>Pack:</strong> Light cottons for day, light jacket for evenings, walking shoes, sunscreen (UV at altitude is strong), small umbrella for late-May showers.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Why May is the most popular month</h2>
        <p className="text-muted-foreground leading-relaxed">Three reasons compound: school vacations begin, Delhi's heat becomes unlivable, and Mukteshwar's weather is at its most reliably pleasant. The combination drives demand. Expect direct-booking rates 20–25% above winter; OTAs run higher with surge pricing on weekends.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Things to do in May</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Sunrise from the ridge</strong> — golden hour around 5:30 AM; Nanda Devi visible most clear days.</li>
          <li><strong>Bhalu Gaad waterfall trek</strong> — strong flow from snowmelt + early monsoon prep.</li>
          <li><strong>Orchard walks in Sitla and Ramgarh</strong> — early-fruit season; peaches and apricots starting.</li>
          <li><strong>Bhimtal day trip</strong> — 40 km, lake activities. Better in May than peak monsoon.</li>
          <li><strong>Evening bonfires</strong> — the night air is cool enough that fires still feel warm.</li>
          <li><strong>Stargazing</strong> — clear May nights are exceptional before pre-monsoon haze sets in.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Tips for booking May</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Book 4–6 weeks ahead</strong> for May 15–31 weekends. Last-minute availability is rare.</li>
          <li><strong>Direct booking saves 10–20%</strong> vs OTAs which surge hardest in peak.</li>
          <li><strong>Weekday stays</strong> are 15–20% cheaper than weekend stays in May.</li>
          <li><strong>Drive in the early morning</strong> — leaving Delhi by 5 AM avoids worst-of-day heat for the highway portion and arrival traffic at Bhowali.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Planning a May escape?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">May fills up fast — WhatsApp us early to lock in dates and direct-booking rates.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning a May visit to Mukteshwar — could you share availability?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/summer-escape-guide-2026" className="text-primary underline">Summer escape to Mukteshwar — full guide</a></li>
            <li>→ <a href="/blog/best-time-to-visit-mukteshwar-guide" className="text-primary underline">Best time to visit Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-in-june" className="text-primary underline">Mukteshwar in June</a></li>
            <li>→ <a href="/blog/delhi-to-mukteshwar-road-trip" className="text-primary underline">Delhi to Mukteshwar road trip</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
