import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const FAQS = [
  { q: "Is August a good time to visit Mukteshwar?", a: "August is still monsoon, so expect rain, mist and lush green rather than guaranteed clear views. It works well for a monsoon-loving escape — and the Independence Day long weekend (around 15 August) is a popular short break from the plains. Travel with flexibility for the rain." },
  { q: "How is the weather in Mukteshwar in August?", a: "Similar to July: days around 18–24°C, nights 14–18°C, frequent rain and rolling mist with sunny intervals. Rainfall often eases slightly toward the end of the month as the monsoon begins to wind down." },
  { q: "Is the Independence Day weekend busy in Mukteshwar?", a: "Yes — the long weekend around 15 August is one of the few monsoon-season demand spikes, as it's a convenient short escape from the heat and rush of the plains. Book that weekend well in advance; the rest of August is quiet and good value." },
];

export default function MukteshwarInAugust() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar in August: Monsoon Greenery & Independence Day Travel Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("June 4, 2026"),
    dateModified: formatDateForSchema("June 4, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar in August — peak monsoon greenery, full waterfalls, quiet hills, and the popular Independence Day long-weekend getaway. Weather, what to pack, and booking tips.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-in-august",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar in August" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar in August: Monsoon & Independence Day Guide (2026)", description: "August in Mukteshwar — peak monsoon greenery, full waterfalls, low crowds, and the popular Independence Day long-weekend escape. Weather, packing and booking tips.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-in-august", keywords: "mukteshwar in august, mukteshwar august weather, mukteshwar independence day, mukteshwar monsoon august, mukteshwar long weekend, august getaway from delhi" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Seasonal Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar in August: Monsoon Greenery & the Independence Day Getaway</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> June 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src="/images/blog/monsoon/featured.webp" alt="Lush, mist-wrapped green hills of Mukteshwar during the August monsoon" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>August keeps the monsoon's magic going — with one busy weekend in the middle.</strong> The hills are at peak green, waterfalls are full, and mist drifts through the forest. For most of the month it's quiet and excellent value; around Independence Day, though, Mukteshwar becomes a favourite long-weekend escape from the heat and bustle of the plains.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">August weather and what to pack</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li><strong>Day high:</strong> 18–24°C (mild, humid)</li>
          <li><strong>Night low:</strong> 14–18°C</li>
          <li><strong>Rain:</strong> frequent, easing slightly late month as the monsoon winds down</li>
          <li><strong>Visibility:</strong> misty, with clearer windows after rain</li>
          <li><strong>Pack:</strong> a rain jacket, quick-dry clothes, waterproof grippy footwear, a light evening layer, and insect repellent.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Why August works</h2>
        <p className="text-muted-foreground leading-relaxed">It's the monsoon at its most lush, with the bonus of a ready-made long weekend. The Independence Day break is ideal for a short hill reset — two or three nights of cool air, green views, full waterfalls and unhurried meals while the plains swelter. Outside that weekend, August is one of the calmest and most affordable times to have the village largely to yourself.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Things to do in August</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Bhalu Gaad waterfall</strong> — full and dramatic in the monsoon.</li>
          <li><strong>Misty forest and garden walks</strong> between showers.</li>
          <li><strong>Slow, cosy stays</strong> — a covered terrace and hot Kumaoni food on a rainy afternoon.</li>
          <li><strong>Catch clear windows</strong> — when the rain pauses, the washed air can reveal a sharp ridge line.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Crowds, pricing and booking</h2>
        <p className="text-muted-foreground leading-relaxed">Two speeds again: the Independence Day long weekend is busy and should be booked weeks ahead, while the rest of August is quiet, monsoon-priced, and great value. The same monsoon travel caution applies — drive in daylight, keep dates flexible, and build in a buffer day for the roads. See our <a href="/blog/monsoon-in-mukteshwar-guide" className="text-primary hover:underline">monsoon guide</a> for details.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Planning an August break?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Green hills, full waterfalls and cool monsoon air. The Independence Day weekend books out early — WhatsApp us to lock in your dates.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning an August / Independence Day trip to Mukteshwar — could you share availability?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/monsoon-in-mukteshwar-guide" className="text-primary underline">Mukteshwar in monsoon — full guide</a></li>
            <li>→ <a href="/blog/mukteshwar-in-july" className="text-primary underline">Mukteshwar in July — peak monsoon</a></li>
            <li>→ <a href="/blog/mukteshwar-in-september" className="text-primary underline">Mukteshwar in September — monsoon's end</a></li>
            <li>→ <a href="/blog/mukteshwar-weekend-itinerary" className="text-primary underline">Mukteshwar weekend itinerary</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
