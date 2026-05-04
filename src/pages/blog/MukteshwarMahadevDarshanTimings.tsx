import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "What are Mukteshwar Mahadev Mandir darshan timings?", a: "The temple is open daily from approximately 5:00 AM to 8:00 PM. Morning aarti is around 6:00 AM and evening aarti around 7:00 PM. There is no entry fee and no formal darshan ticket system." },
  { q: "Is the Mukteshwar Mahadev Mandir open all year?", a: "Yes — the temple is open year-round including in winter. Heavy snowfall (1–3 events per January–February) may make the final 200 m approach slippery for a few hours, but the temple itself stays accessible." },
  { q: "Is there a dress code at Mukteshwar Mahadev Mandir?", a: "No formal dress code. Modest clothing (covered shoulders and knees) is appreciated as a courtesy. Footwear is removed at the entrance — wear easy-to-remove shoes." },
  { q: "How long does the darshan take?", a: "20–40 minutes is typical including the climb to the shrine, prayers, and a walk to Chauli Ki Jali (just behind the temple). Allow 60–90 minutes for unhurried first-time visits." },
  { q: "Can I do darshan early morning before sunrise?", a: "Yes — the temple opens around 5 AM and the sunrise viewpoint is a 5-minute walk away. Many travelers combine pre-dawn temple visits with sunrise from Chauli Ki Jali." },
];

export default function MukteshwarMahadevDarshanTimings() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar Mahadev Mandir Darshan Timings, Aarti & Visitor Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar Mahadev Mandir darshan timings (5 AM – 8 PM), aarti schedule, dress code, and visitor tips from a resident host near the temple.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-mahadev-mandir-darshan-timings",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar Mahadev Darshan Timings" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar Mahadev Mandir Darshan Timings & Visitor Guide (2026)", description: "Mukteshwar Mahadev Mandir darshan timings: 5 AM – 8 PM daily. Aarti times, dress code, how to reach, and what to expect — from a resident host.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-mahadev-mandir-darshan-timings", keywords: "mukteshwar mahadev mandir, mukteshwar mahadev temple timings, mukteshwar dham darshan, mukteshwar mandir aarti, mukteshwar temple visitor guide" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Visitor Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar Mahadev Mandir Darshan Timings & Visitor Guide (2026)</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="The 350-year-old Mukteshwar Mahadev Mandir at the highest point of Mukteshwar village in Uttarakhand" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Mukteshwar Mahadev Mandir is open daily from approximately 5:00 AM to 8:00 PM. Morning aarti is around 6:00 AM and evening aarti around 7:00 PM. There is no entry fee.</strong> The 350-year-old Shiva temple sits at the highest point of Mukteshwar village (2,315 m) and is one of the oldest in the Kumaon region.</p>

        <div className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold mb-3">Quick reference</h3>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><strong>Daily timings:</strong> 5:00 AM – 8:00 PM (year-round)</li>
            <li><strong>Morning aarti:</strong> ~6:00 AM</li>
            <li><strong>Evening aarti:</strong> ~7:00 PM</li>
            <li><strong>Entry fee:</strong> None</li>
            <li><strong>Dress code:</strong> Modest (covered shoulders and knees recommended)</li>
            <li><strong>Footwear:</strong> Removed at entrance</li>
            <li><strong>Photography:</strong> Permitted in courtyard; restraint inside the shrine</li>
            <li><strong>Walking distance from village:</strong> ~7 km from main Sitla junction; 200 m climb from temple parking</li>
          </ul>
          <p className="text-xs text-muted-foreground italic mt-3">Aarti times shift slightly with sunrise/sunset across seasons. The above are typical year-round windows.</p>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">When is the best time to visit the temple?</h2>
        <p className="text-muted-foreground leading-relaxed">Most travelers prefer morning aarti — the temple is quieter, the air is cleaner, and the Himalayan views from the adjacent ridge are at their sharpest before the haze sets in. Pre-dawn visits (4:30–5:30 AM) are popular among photographers; the sunrise viewpoint at Chauli Ki Jali is a 5-minute walk from the temple. Evening aarti is also worth attending — softer light, fewer pilgrims, and the option of a bonfire on the property terrace afterward.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Festival days — when timings shift</h2>
        <p className="text-muted-foreground leading-relaxed">On Mahashivratri (typically late February or March) the temple stays open through the night with continuous bhajan and special pujas. Sawan Mondays (Mondays during the Hindu month of Sawan, July–August) see longer queues and earlier opening times — go before 6 AM if possible. Kartik Purnima also draws regional pilgrims. Outside these days, the temple is uncrowded year-round.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How to reach Mukteshwar Mahadev Mandir</h2>
        <p className="text-muted-foreground leading-relaxed">The temple is at the highest point of Mukteshwar village. From most boutique stays in the village (including Ecoescape) it's a 5–10 minute drive, or a 30–40 minute walk along the ridge road. There's parking immediately below the temple steps. The final 200 m is a stone-step climb — moderate effort, mostly fine for elderly visitors with rest breaks. Walking sticks are useful in winter when snow makes the steps slippery.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">What to do near the temple</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Chauli Ki Jali</strong> (200 m walk behind the temple) — dramatic cliff edge with panoramic views, popular for rappelling.</li>
          <li><strong>Sunrise viewpoint</strong> — 5 minutes from the temple, best between 5:30 and 6:30 AM depending on season.</li>
          <li><strong>IVRI campus</strong> — 2 km away, heritage colonial buildings with a small museum.</li>
          <li><strong>Bhalu Gaad waterfall trek</strong> — 6 km, accessible from the temple road. → <a href="/blog/bhalu-gaad-waterfall-trek" className="text-primary underline">trek guide</a></li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Visiting Mukteshwar for the temple?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Ecoescape is 7 km from the temple — close enough for an easy morning visit and quiet enough for the evening to feel like retreat.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning a Mukteshwar Dham darshan visit — could you share availability?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related — for spiritual travelers</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mukteshwar-mahadev-temple-guide" className="text-primary underline">Full Mukteshwar Mahadev Temple guide</a></li>
            <li>→ <a href="/blog/mukteshwar-mahadev-temple-history" className="text-primary underline">350-year history of the temple</a></li>
            <li>→ <a href="/blog/spiritual-kumaon-guide" className="text-primary underline">Spiritual Kumaon — Jageshwar, Kainchi, Mukteshwar</a></li>
            <li>→ <a href="/blog/kainchi-dham-to-mukteshwar-distance" className="text-primary underline">Kainchi Dham to Mukteshwar</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
