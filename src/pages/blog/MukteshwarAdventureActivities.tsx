import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "What adventure activities are available in Mukteshwar?", a: "Rock climbing and rappelling at Chauli Ki Jali, trekking (Bhalu Gaad waterfall, IVRI ridge, Sitla forest), mountain biking, paragliding (limited operators), village walks, and birdwatching. ATV rides are not currently available." },
  { q: "How safe is rappelling at Chauli Ki Jali?", a: "Safe with certified local trainers. The cliff has well-established rappelling routes, fixed anchors, and equipment is checked routinely. Avoid going with informal operators; book through your stay or a reputable adventure outfit." },
  { q: "Do I need experience for adventure activities in Mukteshwar?", a: "Not for most — Bhalu Gaad trek, beginner rappelling, and village walks are open to first-timers. Rock climbing on the Chauli routes has graded options from beginner (4a) to intermediate (5c+)." },
];

export default function MukteshwarAdventureActivities() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar Adventure Activities: Rappelling, Climbing, Trekking Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar adventure activities — rappelling and rock climbing at Chauli Ki Jali, Bhalu Gaad trek, mountain biking, paragliding. Safety, costs, and how to book.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-adventure-activities-guide",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Adventure Activities" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar Adventure Activities: Rappelling, Climbing & Trekking (2026)", description: "Mukteshwar adventure — rappelling and rock climbing at Chauli Ki Jali, Bhalu Gaad waterfall trek, mountain biking, paragliding. Safety, costs, booking guide.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-adventure-activities-guide", keywords: "mukteshwar adventure activities, mukteshwar rappelling, mukteshwar rock climbing, chauli ki jali rappelling, mukteshwar trekking, mukteshwar paragliding" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Activity Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar Adventure Activities: Rappelling, Climbing, Trekking</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="Adventure activities at Chauli Ki Jali — rappelling and climbing on natural cliff routes" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Mukteshwar's adventure scene centers on Chauli Ki Jali — a natural cliff edge with established rappelling and rock climbing routes — and the trekking trails through pine and oak forest around the village.</strong> It's a low-key adventure destination compared to Rishikesh or Manali, but for short adventures combined with quiet stays, it works well.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Rappelling at Chauli Ki Jali</h2>
        <p className="text-muted-foreground leading-relaxed">The <strong>Chauli Ki Jali</strong> cliff drops about 60 metres from the temple ridge and has been an established rappelling site for over a decade. Local certified trainers run guided sessions for beginners through advanced. Sessions typically include safety briefing, helmet + harness fitting, demonstration, then 1–2 descents.</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li><strong>Cost:</strong> ₹500–₹1,200 per person depending on trainer and group size</li>
          <li><strong>Duration:</strong> 1.5–2 hours including briefing</li>
          <li><strong>Best time:</strong> morning (cooler) or late afternoon</li>
          <li><strong>Booking:</strong> through your stay or directly with a local outfit; avoid walk-in unverified operators</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Rock climbing</h2>
        <p className="text-muted-foreground leading-relaxed">Chauli Ki Jali also has graded climbing routes. The cliff face has natural holds and a few bolted routes ranging from beginner (around grade 4a) to intermediate (5c+). Trained guides provide all gear. This is a relatively quiet climbing site — you won't share routes with crowds.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Trekking</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Bhalu Gaad waterfall trek</strong> — 6 km round-trip, 3 hours, easy-moderate. Pine forest, stream crossings, hidden waterfall. Best in spring and post-monsoon.</li>
          <li><strong>IVRI ridge walk</strong> — 4 km loop, easy, heritage colonial buildings + ridge views. Good for first-timers.</li>
          <li><strong>Sitla forest walk</strong> — 5 km, easy, orchard country. Best in March–April for blossoms.</li>
          <li><strong>Mukteshwar to Dhanachuli ridge trek</strong> — 8 km one-way, moderate, broader Himalayan views. Half-day commitment.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Mountain biking</h2>
        <p className="text-muted-foreground leading-relaxed">Limited but growing. A few local outfits rent MTBs for ₹600–₹1,000 per day. Best routes: the Mukteshwar–Sitla orchard loop (10 km) and the temple ridge ride. Hill bike fitness is required — gradients are sustained and descents are technical.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Paragliding</h2>
        <p className="text-muted-foreground leading-relaxed">Limited operators run paragliding from a takeoff site about 8 km from the village. Tandem flights cost ₹2,500–₹4,000 for 15–25 minutes. Conditions are best in October–November and March–May. Confirm operator certifications (BHPA / DGCA equivalent) before booking.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Other activities</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Birdwatching</strong> — Himalayan Monal, Laughingthrush, several pheasant species. Best at dawn.</li>
          <li><strong>Stargazing</strong> — terrace setups + occasional telescope rentals.</li>
          <li><strong>Cycling</strong> — gentler than mountain biking; rental MTBs work for the village ridge road.</li>
          <li><strong>Yoga retreats</strong> — several boutique properties offer in-house yoga sessions; full retreats can be coordinated 30+ days ahead.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3 flex items-center justify-center gap-2"><Mountain className="h-6 w-6 text-primary" /> Want to book activities?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">WhatsApp us with your dates and we'll connect you with verified local trainers — rappelling, climbing, trekking guides.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'd like to book adventure activities in Mukteshwar — could you help?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mukteshwar-trekking-guide" className="text-primary underline">5 best trekking trails</a></li>
            <li>→ <a href="/blog/bhalu-gaad-waterfall-trek" className="text-primary underline">Bhalu Gaad waterfall trek</a></li>
            <li>→ <a href="/blog/things-to-do-in-mukteshwar-beyond-temple" className="text-primary underline">Things to do beyond the temple</a></li>
            <li>→ <a href="/blog/things-to-do-in-mukteshwar" className="text-primary underline">15 things to do in Mukteshwar</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
