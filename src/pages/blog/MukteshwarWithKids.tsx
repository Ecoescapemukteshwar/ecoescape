import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "Is Mukteshwar good for kids?", a: "Yes — best for kids 5+ who can handle gentle hill walks. Younger toddlers find the winding road stressful and the activities limited. The garden, orchard walks, and waterfall trek are highlights for primary-school-age kids." },
  { q: "What activities are available for kids in Mukteshwar?", a: "Garden walks, fruit-orchard visits (especially in May–August), Bhalu Gaad waterfall trek (~3 hr round-trip, doable for kids 6+), Mukteshwar Mahadev Temple visit, Chauli Ki Jali viewpoint (with caution near the edge), bonfire evenings, stargazing." },
  { q: "Is Mukteshwar safe for young children?", a: "Yes — village is small, traffic is low, and most boutique homestays are fenced. Chauli Ki Jali has a steep cliff edge — supervise children closely there. Otherwise, the village is much safer than busier hill towns." },
  { q: "Best time to visit Mukteshwar with kids?", a: "April–June for school summer holidays + best weather. October–November for cool dry days and lighter crowds. Avoid heavy monsoon (July–August) with young kids." },
];

export default function MukteshwarWithKids() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar with Kids: Family Activities, Safety & Travel Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar with kids — activities by age, safety considerations, and a family itinerary from a host who has welcomed many families.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-with-kids",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar with Kids" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar with Kids: Family Activities & Safety Guide (2026)", description: "Mukteshwar with kids — activities by age (3–5, 6–10, 11+), safety tips at Chauli Ki Jali, school-holiday booking advice, and a 4-day family itinerary.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-with-kids", keywords: "mukteshwar with kids, mukteshwar family with children, mukteshwar with toddlers, kid friendly mukteshwar, family vacation mukteshwar, mukteshwar children activities" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Family Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar with Kids: Activities by Age, Safety, and a 4-Day Plan</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="Family with kids enjoying the gardens and ridge views at a Mukteshwar boutique homestay" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Mukteshwar works best for families with kids aged 5 and older.</strong> The village's slow pace, walkable distances, and plenty of garden + orchard space make it ideal for kids who can manage 30-minute walks. Toddlers and very young children find the winding hill road stressful, and the lack of structured tourist attractions (no zoo, no cable car, no ropeway) means parents need to plan activities themselves.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Activities by age group</h2>
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Kids 3–5 (toddlers & pre-school)</h3>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Garden play at the property — open lawns, plants, butterflies</li>
          <li>Short Sitla orchard visits (15-min drive)</li>
          <li>Watching cows and village goats — safe interaction</li>
          <li>Avoid: Bhalu Gaad waterfall trek, Chauli Ki Jali cliff edge, long drives</li>
        </ul>
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Kids 6–10 (primary school)</h3>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Bhalu Gaad waterfall trek (3 hr round-trip with breaks)</li>
          <li>Orchard fruit-picking in season</li>
          <li>Mukteshwar Mahadev Temple visit + Chauli Ki Jali (with adult holding hand at the cliff)</li>
          <li>Bhimtal lake day trip — boat ride, lakeside snacks</li>
          <li>Bonfire evenings with marshmallows</li>
          <li>Stargazing — kids love seeing satellites and constellations</li>
        </ul>
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Kids 11+ and teens</h3>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Rock climbing / rappelling at Chauli Ki Jali (with local trainer)</li>
          <li>Longer treks — full Bhalu Gaad + IVRI campus walk</li>
          <li>Photography expeditions at sunrise</li>
          <li>Birdwatching and nature journaling</li>
          <li>Day trip to Almora — Lala Bazaar exploration</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Where to stay with kids</h2>
        <p className="text-muted-foreground leading-relaxed">A 2-bedroom apartment is the most family-friendly configuration — separate sleeping space for kids, dining area for in-room meals, private balcony. Boutique aparthotels typically allow children of all ages. Confirm with the property whether they have an extra-bed option for a third child (most do, with 24-hour notice).</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Safety considerations</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Chauli Ki Jali</strong> has an unfenced cliff edge with a steep drop — supervise children closely. Most accidents at the site are children running ahead.</li>
          <li><strong>The road from Bhowali</strong> has continuous switchbacks — pre-medicate motion-sickness-prone kids; carry vomit bags.</li>
          <li><strong>Altitude (2,286 m)</strong> rarely causes issues for kids but very young children may sleep more on the first day.</li>
          <li><strong>Cold mornings/nights</strong> — pack thermals even in shoulder seasons; kids feel the temperature drop more than adults.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">A 4-day family itinerary</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Day 1:</strong> Arrive afternoon. Garden play. Sunset from terrace. Early dinner.</li>
          <li><strong>Day 2:</strong> Sunrise (kids 6+). Mukteshwar Mahadev Temple + Chauli Ki Jali (supervised). Lunch. Afternoon orchard walk in Sitla.</li>
          <li><strong>Day 3:</strong> Bhalu Gaad waterfall trek (kids 6+) or Bhimtal lake day trip (all ages). Bonfire dinner.</li>
          <li><strong>Day 4:</strong> Slow morning. Pack and depart by midday.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Bringing kids to Mukteshwar?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">WhatsApp us with kid ages — we'll suggest the right unit and a tuned activity plan.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning a Mukteshwar trip with kids — could you share availability and tips?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/family-vacation-guide" className="text-primary underline">Mukteshwar family vacation guide</a></li>
            <li>→ <a href="/rooms/spacious-apartment" className="text-primary underline">Spacious 2-bedroom apartment</a></li>
            <li>→ <a href="/blog/bhalu-gaad-waterfall-trek" className="text-primary underline">Bhalu Gaad waterfall trek</a></li>
            <li>→ <a href="/blog/mukteshwar-with-elderly-parents" className="text-primary underline">Mukteshwar with elderly parents</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
