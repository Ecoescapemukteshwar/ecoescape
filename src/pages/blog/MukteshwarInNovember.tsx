import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const FAQS = [
  { q: "How is the weather in Mukteshwar in November?", a: "Crisp, dry and clear. Days run about 12–18°C and nights drop to 4–10°C, getting properly cold by late month. November keeps the post-monsoon clarity going, so the full Himalayan range is visible on most mornings — excellent for photography." },
  { q: "Is November a good time to visit Mukteshwar?", a: "Very. It's one of the clearest, calmest months — crisp autumn days, sharp mountain views, golden light, and low crowds outside the Diwali week. Evenings turn cold enough for a bonfire, which makes for cosy hill nights." },
  { q: "Are there crowds in Mukteshwar in November?", a: "Generally low, with one exception: the Diwali week (Diwali usually falls in late October or early November) brings a short holiday spike. Book that week ahead. The rest of November is quiet and good value." },
];

export default function MukteshwarInNovember() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar in November: Crisp Clear Days, Autumn Light & Travel Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("June 4, 2026"),
    dateModified: formatDateForSchema("June 4, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar in November — crisp, dry autumn days (12–18°C), sharp Himalayan visibility, golden light, bonfire evenings and low crowds outside Diwali week. Travel guide from a resident.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-in-november",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar in November" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar in November: Crisp Clear Days & Travel Guide (2026)", description: "November in Mukteshwar — crisp, dry autumn days (12–18°C), sharp Himalayan views, golden light, bonfire evenings, and low crowds outside Diwali week. What to expect and pack.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-in-november", keywords: "mukteshwar in november, mukteshwar november weather, mukteshwar autumn, mukteshwar diwali, mukteshwar november temperature, clear views mukteshwar" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Seasonal Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar in November: Crisp Clear Days, Autumn Light & Pre-Winter Calm</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> June 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src="/images/blog/photography/featured.webp" alt="Crisp clear November morning in Mukteshwar with sharp views of the Himalayan range" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>November is the calm, crystal-clear close of Mukteshwar's autumn.</strong> The post-monsoon clarity carries on, the air turns crisp and dry, and the full Himalayan range stands sharp on most mornings. Days are comfortable, nights turn cold enough for a bonfire, and — outside the brief Diwali rush — the hills are quiet. It's a quietly perfect month for photographers, walkers, and anyone who likes their mountains clear and their evenings cosy.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">November weather and what to pack</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li><strong>Day high:</strong> 12–18°C (crisp, pleasant in sun)</li>
          <li><strong>Night low:</strong> 4–10°C, colder by late month</li>
          <li><strong>Rain:</strong> minimal — dry and clear</li>
          <li><strong>Visibility:</strong> excellent; the post-monsoon clarity continues</li>
          <li><strong>Pack:</strong> warm layers, a proper jacket for cold evenings, a woollen cap and gloves for late November, and a camera — the light is superb.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Why November is special</h2>
        <p className="text-muted-foreground leading-relaxed">It pairs October's clarity with the first proper chill of the approaching winter. Mornings deliver sharp, complete views of <strong>Nanda Devi, Trishul and the Panchachuli peaks</strong>; afternoons are bright and golden; and evenings invite a bonfire and hot Kumaoni food. The crowds of October's Diwali week fade, leaving a peaceful, photogenic hill in the run-up to winter.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Things to do in November</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Sunrise photography from Chauli Ki Jali</strong> — among the clearest mornings of the year.</li>
          <li><strong>Crisp forest walks</strong> in golden autumn light.</li>
          <li><strong>Bonfire evenings</strong> as the nights turn cold.</li>
          <li><strong>Stargazing</strong> — dry, clear skies and long nights.</li>
          <li><strong>Day trips to Almora and Kainchi Dham</strong> on dry, easy roads.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Crowds, pricing and booking</h2>
        <p className="text-muted-foreground leading-relaxed">November is quiet and good value, save for the Diwali week (which can fall late October or early November) — book that holiday window ahead. The rest of the month, especially mid-week, is peaceful and well-priced, with the bonus of the year's best clarity. It's a natural lead-in to the festive <a href="/blog/mukteshwar-in-december" className="text-primary hover:underline">December</a> season.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Visit in November?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Sharp mountain views, golden autumn light and cosy bonfire nights. Quiet and great value outside Diwali week — WhatsApp us to check availability.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning a November visit to Mukteshwar — could you share availability?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mukteshwar-in-october" className="text-primary underline">Mukteshwar in October — clearest skies</a></li>
            <li>→ <a href="/blog/mukteshwar-in-december" className="text-primary underline">Mukteshwar in December — year-end & snow</a></li>
            <li>→ <a href="/blog/best-photography-spots-in-mukteshwar" className="text-primary underline">Best photography spots in Mukteshwar</a></li>
            <li>→ <a href="/blog/best-time-to-visit-mukteshwar-guide" className="text-primary underline">Best time to visit Mukteshwar</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
