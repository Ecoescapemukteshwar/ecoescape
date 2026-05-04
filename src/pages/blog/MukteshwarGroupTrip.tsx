import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "Can a group of 10–12 friends stay together at one Mukteshwar property?", a: "Yes — most boutique aparthotels in Mukteshwar have 4–6 units which combined can host 12–16 guests. Block-book all units 6+ weeks ahead for peak dates." },
  { q: "What activities work for a group trip in Mukteshwar?", a: "Group bonfire and dinner, rock climbing/rappelling at Chauli Ki Jali, group treks to Bhalu Gaad, Bhimtal lake day trips with picnic, photography sessions at sunrise, and games on the property terrace." },
  { q: "Is Mukteshwar good for a bachelor or bachelorette trip?", a: "Yes — quiet, photogenic, no nightlife but a private terrace can be set up for a long evening. Better fit for low-key gatherings; party-focused groups should pick a town with bars." },
];

export default function MukteshwarGroupTrip() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar Group Trip Guide: Friends, Bachelorette, Reunions (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar group trip guide — how to block-book 4–6 units for 12–16 friends, group activities, costs, and a 4-day plan from a property owner.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-group-trip-guide",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Mukteshwar Group Trip Guide" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar Group Trip Guide: Friends, Bachelorette, Reunions (2026)", description: "Plan a Mukteshwar group trip — block-book a boutique property for 10–16 friends, group activities, food, costs, and a 4-day itinerary.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-group-trip-guide", keywords: "mukteshwar group trip, mukteshwar friends trip, mukteshwar bachelorette, mukteshwar block booking, group of friends mukteshwar, mukteshwar reunion" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Group Travel</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar Group Trip Guide: 10–16 Friends, One Property</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="A group of friends gathered on a Mukteshwar terrace at sunset for a multi-night stay" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Mukteshwar is unusually well-suited for groups of 10–16 friends.</strong> Most boutique aparthotels here are 4–6 unit properties — block-booking all units gives a group exclusive use of the property, the terrace, the dining area, and the garden, without the awkwardness of sharing a hotel lobby. Direct booking with a single property is the easiest route; OTAs typically can't coordinate multi-unit blocks well.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Group sizes that fit Mukteshwar</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Small groups (4–6):</strong> 1–2 units of a boutique property. Plenty of choice.</li>
          <li><strong>Medium groups (8–12):</strong> 3–4 units. Most Mukteshwar properties can host this comfortably.</li>
          <li><strong>Large groups (12–16):</strong> Block-book all units of a 4–6 unit property. Some properties (including ours) cap at 16 max.</li>
          <li><strong>Larger than 16:</strong> Mukteshwar boutique stays typically can't host. Look at branded resorts or split across two adjacent properties.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Group activities that work in Mukteshwar</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Group bonfire dinner</strong> — Kumaoni thali for 12+, bonfire setup, music. The most popular group ritual.</li>
          <li><strong>Group trek to Bhalu Gaad waterfall</strong> — 3 hr round-trip; works for fitness-mixed groups with breaks.</li>
          <li><strong>Rock climbing/rappelling at Chauli Ki Jali</strong> — pre-arranged with local trainer; 2–3 hr session.</li>
          <li><strong>Sunrise photography session</strong> — coordinated 5:30 AM ridge walk.</li>
          <li><strong>Bhimtal lake day trip</strong> — boats, lakeside lunch, swimming for some properties.</li>
          <li><strong>Custom in-house experiences</strong> — yoga session, painting circle, cooking class with the property kitchen.</li>
          <li><strong>Bonfire + projector movie night</strong> — many properties can rig a screen on the lawn.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Booking strategy for groups</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Book 6–8 weeks ahead minimum</strong> for any group of 10+; longer for May–June.</li>
          <li><strong>WhatsApp the property directly</strong> — group rates are negotiable on direct booking but rarely on OTAs.</li>
          <li><strong>Confirm a single contact person</strong> for the group with the property — saves coordination chaos.</li>
          <li><strong>Pre-pay 50% to lock dates</strong> with balance on arrival; standard for group bookings.</li>
          <li><strong>Confirm food plan in advance</strong> — group Kumaoni thali requires kitchen-side prep coordination.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Costs (per person, 12-person group, mid-range)</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Stay (3 nights, full property block): ₹6,000–₹9,000 per person</li>
          <li>Travel (Delhi return, group taxi share): ₹3,000–₹4,500 per person</li>
          <li>Food (3 days, all meals): ₹2,000–₹3,000 per person</li>
          <li>Activities + bonfire setup + photographer: ₹1,500–₹2,500 per person</li>
          <li><strong>Total per person, all-in:</strong> ₹12,500–₹19,000 (3-night trip)</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">A 4-day group itinerary</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Day 1:</strong> Arrive afternoon. Welcome drinks. Group dinner on the terrace. Bonfire night.</li>
          <li><strong>Day 2:</strong> Sunrise photography (optional). Bhalu Gaad waterfall trek. Lunch. Free afternoon. Rock climbing session at Chauli Ki Jali. Group dinner.</li>
          <li><strong>Day 3:</strong> Bhimtal lake day trip — boats, lakeside lunch. Drive back via orchard route. Bonfire + movie night.</li>
          <li><strong>Day 4:</strong> Slow morning. Group photo at sunrise. Pack and depart by midday.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3 flex items-center justify-center gap-2"><Users className="h-6 w-6 text-primary" /> Planning a group trip?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">WhatsApp us with group size and dates — we'll quote a block rate, plan activities, and coordinate kitchen prep.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning a group trip to Mukteshwar — could you share block-booking rates?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/best-resorts-in-mukteshwar" className="text-primary underline">Best resorts in Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-resort-vs-homestay-comparison" className="text-primary underline">Resort vs homestay for groups</a></li>
            <li>→ <a href="/blog/mukteshwar-3-day-2-night-itinerary" className="text-primary underline">3-day Mukteshwar itinerary</a></li>
            <li>→ <a href="/blog/mukteshwar-trip-cost-2026-budget-guide" className="text-primary underline">Trip cost breakdown</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
