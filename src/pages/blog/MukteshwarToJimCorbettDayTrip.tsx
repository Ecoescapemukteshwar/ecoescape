import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, MapPin, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

export default function MukteshwarToJimCorbettDayTrip() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;

  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar to Jim Corbett Day Trip: Distance, Route, and Honest Tips (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("April 25, 2026"),
    dateModified: formatDateForSchema("April 25, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Can you do Jim Corbett as a day trip from Mukteshwar? Honest answer with distance, drive time, route, safari logistics, and whether it's worth it.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-to-jim-corbett-day-trip",
  }), [founderName]);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar to Jim Corbett" },
  ]), []);

  return (
    <BlogPostLayout
      meta={{
        title: "Mukteshwar to Jim Corbett Day Trip (2026): Distance, Route, Tips",
        description: "Mukteshwar to Jim Corbett distance, drive time, safari booking, and an honest take on whether it's worth doing as a day trip — from a Mukteshwar property owner.",
        canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-to-jim-corbett-day-trip",
        keywords: "Mukteshwar to Jim Corbett, Mukteshwar Jim Corbett distance, Jim Corbett day trip from Mukteshwar, Mukteshwar to Corbett route, safari from Mukteshwar, Uttarakhand combination trip",
      }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Day Trip Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          Mukteshwar to Jim Corbett Day Trip (2026): Honest Distance, Route, and Tips
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span>By {founderName}</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> April 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border">
        <img src={featuredImg} alt="The Mukteshwar ridge looking south toward the plains and Corbett National Park region" className="w-full h-auto" loading="lazy" width="1200" height="675" />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Guests staying with us at Ecoescape often ask: "Can we do Jim Corbett as a day trip from Mukteshwar?" The short answer: technically yes, but the real answer is more nuanced. Here's everything you need to know before you decide.
        </p>

        <div className="my-10 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="h-5 w-5 text-amber-600" /> The honest verdict</h3>
          <p className="text-muted-foreground">
            <strong>Jim Corbett is technically a day trip from Mukteshwar (~4 hours each way), but a single-day visit means a rushed early-morning safari, a 2-hour gap, and a long evening drive back over hill roads.</strong> If you can spare even one night at Corbett, do that instead. If not, this guide tells you how to make a single day work.
          </p>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Distance and drive time</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li><strong>Mukteshwar → Ramnagar (Corbett gateway): ~125 km / 4 hours one way</strong></li>
          <li>Mukteshwar → Dhikuli (the resort cluster): ~135 km / 4.5 hours</li>
          <li>Mukteshwar → Dhikala zone (deep park entrance): ~150 km / 5+ hours</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          The first 70 km from Mukteshwar is winding hill road — slow but scenic, via Bhowali, Bhimtal, and Kathgodam. After Kathgodam, it's plain road to Ramnagar via Kaladhungi: faster but with truck traffic. Plan for a full 4 hours each way; Google Maps estimates that don't account for stops are usually too optimistic.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Best route</h2>
        <p className="text-muted-foreground leading-relaxed">
          Mukteshwar → Bhowali → Bhimtal → Kathgodam → Haldwani → Kaladhungi → Ramnagar. The Bhimtal stretch is scenic; Kaladhungi has the Jim Corbett heritage museum if you have time. Avoid the Nainital route — adds 30-40 minutes due to Nainital town traffic.
        </p>
        <p className="text-sm text-muted-foreground mt-3">
          Comparison: <a href="/blog/mukteshwar-vs-nainital" className="text-primary underline">Mukteshwar vs Nainital</a>
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Safari options for a single-day visit</h2>
        <p className="text-muted-foreground leading-relaxed">
          For a same-day round trip from Mukteshwar, you can realistically only do an <strong>afternoon safari (2:00 PM – 5:30 PM)</strong> at Bijrani, Jhirna, or Garjia zones. Morning safaris start at 6:00 AM, which means leaving Mukteshwar by 1:30 AM — not realistic.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li><strong>Bijrani zone</strong> — most popular, 3-hour jeep safari, ₹4,500-₹6,000 per jeep (up to 6 people)</li>
          <li><strong>Jhirna zone</strong> — open year-round (others close in monsoon), good for elephant sightings</li>
          <li><strong>Garjia zone</strong> — closer to Ramnagar, easier access</li>
          <li><strong>Dhikala zone</strong> — the famous deep zone, requires overnight at Dhikala FRH (not viable for day trip)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Book online at the official Uttarakhand Forest Department portal (corbettonline.uk.gov.in) <strong>at least 45 days in advance</strong> for safari permits. Walk-in slots exist but fill fast in season.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Sample day-trip schedule</h2>
        <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
          <li>06:30 — Early breakfast at Mukteshwar</li>
          <li>07:30 — Depart Mukteshwar</li>
          <li>11:30 — Arrive Ramnagar; lunch (try Hotel Pavillion or Corbett Mahal Jungle Lodge for lunch buffet)</li>
          <li>13:30 — Reach safari assembly point</li>
          <li>14:00–17:30 — Afternoon jeep safari</li>
          <li>17:45 — Tea at Ramnagar; depart by 18:30</li>
          <li>22:30 — Back at Mukteshwar (drive carefully on hill roads in the dark)</li>
        </ol>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Cost estimate (per person, 4 sharing)</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Cab Mukteshwar → Ramnagar → Mukteshwar: ₹5,500-₹7,000 total (split 4 ways = ₹1,400-₹1,750 each)</li>
          <li>Safari jeep (afternoon, shared): ₹1,000-₹1,500 per person</li>
          <li>Forest entry + permit fees: ₹600-₹800 per person</li>
          <li>Lunch + snacks: ₹500-₹800 per person</li>
          <li><strong>Total per person:</strong> ₹3,500-₹4,850 for the day trip</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-3">
          Trip-cost context: <a href="/blog/mukteshwar-trip-cost-2026-budget-guide" className="text-primary underline">Mukteshwar trip cost guide</a>
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Better alternative: split the trip</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you have 4-5 days total and really want to combine Mukteshwar's Himalayan-views experience with Corbett's wildlife, do this instead:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>3 nights Mukteshwar (sunrise, ridge walks, food)</li>
          <li>Drive down to Corbett (4 hours)</li>
          <li>1 night Corbett near Garjia or Bijrani</li>
          <li>Morning safari + afternoon drive back to Delhi (Corbett to Delhi is only 5 hours)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          This avoids a same-day 8-hour round trip and gives you a proper morning safari, which has better wildlife sightings than afternoon.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Practical tips</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Hire a driver who knows the hill section</strong> — Mukteshwar to Bhimtal is curvy. A nervous driver doubles the journey time.</li>
          <li><strong>Avoid monsoon (July-Aug) day trips</strong> — landslides on the hill section have shut the road for 2-6 hours at a time.</li>
          <li><strong>Carry binoculars + light layers</strong> — afternoon safari ends near sunset; cooler than expected.</li>
          <li><strong>Don't rely on phone navigation</strong> in the hills — Airtel works most of the way; offline maps are safer.</li>
          <li><strong>Pre-book the safari online</strong> — same-day walk-in slots are scarce in season.</li>
        </ul>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3 flex items-center justify-center gap-2">
            <MapPin className="h-6 w-6 text-primary" /> Planning a Mukteshwar + Corbett combo?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We can help arrange the cab to Ramnagar, recommend a safari operator, and pack you a packed lunch for the long drive. Drop a WhatsApp with your dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button>
            <Button variant="whatsapp" size="lg" onClick={() => {
              const msg = encodeURIComponent("Hi! I'd like to combine a Mukteshwar stay with a Jim Corbett visit — could you help with planning?");
              window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
            }}>
              <MessageCircle className="h-5 w-5" />WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </BlogPostLayout>
  );
}
