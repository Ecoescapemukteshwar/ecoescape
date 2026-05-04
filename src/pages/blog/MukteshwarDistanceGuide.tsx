import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, MapPin, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

export default function MukteshwarDistanceGuide() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;

  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar Distance from Major Cities: Delhi, Nainital, Kathgodam & More (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar distance from Delhi, Nainital, Kathgodam, Pantnagar, Bhimtal, Kainchi Dham, Almora, Jim Corbett, and more — verified driving distances and times from a Mukteshwar resident.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-distance-from-major-cities",
  }), [founderName]);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar Distance Guide" },
  ]), []);

  return (
    <BlogPostLayout
      meta={{
        title: "Mukteshwar Distance from Delhi, Nainital, Kathgodam (2026 Guide)",
        description: "Mukteshwar distance from Delhi (320 km), Nainital (51 km), Kathgodam (70 km), Bhimtal (40 km), Kainchi Dham (42 km), and more — with drive times and route notes from a Mukteshwar resident.",
        canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-distance-from-major-cities",
        keywords: "mukteshwar distance, mukteshwar distance from delhi, nainital to mukteshwar distance, kathgodam to mukteshwar, bhimtal to mukteshwar, kainchi dham to mukteshwar, mukteshwar distance guide",
      }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Travel Reference</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          Mukteshwar Distance: From Delhi, Nainital, Kathgodam & Every Other City You Care About
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span>By {founderName}</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min read</span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border">
        <img src={featuredImg} alt="The Mukteshwar ridge in the Kumaon hills, Uttarakhand — a 7-hour drive from Delhi" className="w-full h-auto" loading="lazy" width="1200" height="675" />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        {/* Direct-answer lede — first 50 words */}
        <p className="text-lg leading-relaxed text-muted-foreground">
          <strong>Mukteshwar is 320 km from Delhi (7–8 hours by road), 51 km from Nainital (1.5–2 hours), 70 km from Kathgodam railway station (2 hours), and 100 km from Pantnagar Airport (~2.5 hours).</strong> Below is the full distance reference for every city travellers ask us about — verified by drives I've actually done as a resident.
        </p>

        <div className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><Car className="h-5 w-5 text-primary" /> Quick reference table</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/40">
                <tr>
                  <th className="text-left p-2 font-semibold">From</th>
                  <th className="text-left p-2 font-semibold">Distance</th>
                  <th className="text-left p-2 font-semibold">Drive time</th>
                  <th className="text-left p-2 font-semibold">Route via</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-2">Delhi</td><td className="p-2 font-medium">320 km</td><td className="p-2">7–8 hr</td><td className="p-2 text-muted-foreground">NH9 → Moradabad → Haldwani → Bhowali</td></tr>
                <tr><td className="p-2">Nainital</td><td className="p-2 font-medium">51 km</td><td className="p-2">1.5–2 hr</td><td className="p-2 text-muted-foreground">Bhowali → Bhimtal → Sitla</td></tr>
                <tr><td className="p-2">Kathgodam (rail)</td><td className="p-2 font-medium">70 km</td><td className="p-2">~2 hr</td><td className="p-2 text-muted-foreground">Haldwani → Bhowali → Bhimtal</td></tr>
                <tr><td className="p-2">Pantnagar (airport)</td><td className="p-2 font-medium">100 km</td><td className="p-2">~2.5 hr</td><td className="p-2 text-muted-foreground">Rudrapur → Haldwani → Bhowali</td></tr>
                <tr><td className="p-2">Bhimtal</td><td className="p-2 font-medium">40 km</td><td className="p-2">~1.5 hr</td><td className="p-2 text-muted-foreground">Bhowali → Sitla</td></tr>
                <tr><td className="p-2">Bhowali</td><td className="p-2 font-medium">35 km</td><td className="p-2">~1 hr</td><td className="p-2 text-muted-foreground">Direct</td></tr>
                <tr><td className="p-2">Kainchi Dham</td><td className="p-2 font-medium">42 km</td><td className="p-2">~1.5 hr</td><td className="p-2 text-muted-foreground">Bhowali → Kainchi</td></tr>
                <tr><td className="p-2">Almora</td><td className="p-2 font-medium">50 km</td><td className="p-2">~2 hr</td><td className="p-2 text-muted-foreground">Dhanachuli → Mehrora</td></tr>
                <tr><td className="p-2">Ranikhet</td><td className="p-2 font-medium">95 km</td><td className="p-2">~3 hr</td><td className="p-2 text-muted-foreground">Almora → Majkhali</td></tr>
                <tr><td className="p-2">Jageshwar Dham</td><td className="p-2 font-medium">90 km</td><td className="p-2">~3 hr</td><td className="p-2 text-muted-foreground">Almora → Artola</td></tr>
                <tr><td className="p-2">Jim Corbett (Ramnagar)</td><td className="p-2 font-medium">125 km</td><td className="p-2">~4 hr</td><td className="p-2 text-muted-foreground">Bhimtal → Kathgodam → Kaladhungi</td></tr>
                <tr><td className="p-2">Mussoorie</td><td className="p-2 font-medium">~380 km</td><td className="p-2">9–10 hr</td><td className="p-2 text-muted-foreground">Via Haridwar — usually a separate trip</td></tr>
                <tr><td className="p-2">Rishikesh</td><td className="p-2 font-medium">~300 km</td><td className="p-2">8 hr</td><td className="p-2 text-muted-foreground">Via Haridwar — long drive</td></tr>
                <tr><td className="p-2">Dehradun</td><td className="p-2 font-medium">~360 km</td><td className="p-2">9 hr</td><td className="p-2 text-muted-foreground">Plains route — long</td></tr>
                <tr><td className="p-2">Lucknow</td><td className="p-2 font-medium">~430 km</td><td className="p-2">9–10 hr</td><td className="p-2 text-muted-foreground">Via Bareilly → Rampur</td></tr>
                <tr><td className="p-2">Chandigarh</td><td className="p-2 font-medium">~450 km</td><td className="p-2">10 hr</td><td className="p-2 text-muted-foreground">Via Saharanpur → Rampur</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground italic mt-3">Drive times reflect real-world conditions including 2–3 short stops, not Google Maps' best-case ETAs. Add 30 minutes in monsoon (June–September) and on weekends near Bhowali.</p>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How far is Mukteshwar from Delhi?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Delhi to Mukteshwar is approximately <strong>320 km</strong> via the standard route: NH9 to Moradabad → Rampur → Haldwani → Bhowali → Bhimtal → Sitla → Mukteshwar. Depending on traffic on the Delhi NCR exit and the steepness of the last 70 km, expect <strong>7–8 hours</strong> of total drive time including a short food stop. Leaving Delhi by 6 AM puts you in Mukteshwar by mid-afternoon. The full guide:{" "}
          <a href="/blog/delhi-to-mukteshwar-road-trip" className="text-primary underline">Delhi to Mukteshwar road trip</a>.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How far is Mukteshwar from Nainital?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Mukteshwar is <strong>51 km from Nainital</strong>, taking <strong>1.5 to 2 hours</strong> via Bhowali, Bhimtal, and Sitla. The route is scenic and worth doing slowly — Bhimtal lake is a natural break point. If you're staying in Nainital and considering Mukteshwar as a day trip, it's doable but tight; staying overnight is the better experience. See the full comparison:{" "}
          <a href="/blog/mukteshwar-vs-nainital" className="text-primary underline">Mukteshwar vs Nainital</a>.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How far is Mukteshwar from Kathgodam railway station?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Kathgodam is the nearest railhead to Mukteshwar at <strong>70 km</strong>, about <strong>2 hours</strong> by taxi via Haldwani → Bhowali → Bhimtal → Sitla. Pre-booked taxis from Kathgodam to Mukteshwar typically cost ₹2,500–₹3,500 (one-way) depending on car size. Most boutique stays — including ours at Ecoescape — can arrange the pickup if booked in advance.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How far is Mukteshwar from Pantnagar Airport?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Pantnagar (PGH) is the nearest airport to Mukteshwar at <strong>100 km</strong>, roughly <strong>2.5 hours</strong> by road. There are limited daily flights from Delhi (IndiGo, Alliance Air). For most travellers from outside Delhi NCR, flying into Delhi (DEL) and driving the 320 km is more reliable than counting on Pantnagar's flight schedule.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How far is Mukteshwar from Bhimtal?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Bhimtal to Mukteshwar is <strong>40 km</strong>, around <strong>1.5 hours</strong> through Bhowali. If you're spending time at the Bhimtal lake and considering moving to a quieter location, Mukteshwar is the natural next stop — same hill range, fewer crowds, broader Himalayan views.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How far is Kainchi Dham from Mukteshwar?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Kainchi Dham (Neem Karoli Baba's ashram) is <strong>42 km from Mukteshwar</strong>, about <strong>1.5 hours</strong> by road via Bhowali. Many spiritual-circuit travellers combine Kainchi Dham with Mukteshwar Mahadev Temple in a single trip. See:{" "}
          <a href="/blog/kainchi-dham-to-mukteshwar-distance" className="text-primary underline">Kainchi Dham to Mukteshwar route guide</a>.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How far is Mukteshwar from Almora and Ranikhet?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Almora is <strong>50 km</strong> from Mukteshwar (~2 hours via Dhanachuli), and Ranikhet is <strong>95 km</strong> (~3 hours via Almora and Majkhali). All three sit in the same Kumaon belt and a 5-day trip can comfortably cover all of them, though most first-time travellers pick one as their base.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How far is Jim Corbett from Mukteshwar?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Jim Corbett (Ramnagar gateway) is <strong>125 km from Mukteshwar</strong>, around <strong>4 hours</strong> via Bhimtal → Kathgodam → Kaladhungi. It's technically a day trip but a tight one — see our honest take on whether it's worth it:{" "}
          <a href="/blog/mukteshwar-to-jim-corbett-day-trip" className="text-primary underline">Mukteshwar to Jim Corbett day trip</a>.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">A note on "Garhmukteshwar" — different place</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you searched for <strong>"Garhmukteshwar distance"</strong> you may have meant the town of Garhmukteshwar in Hapur district, Uttar Pradesh — that's a Ganges-side pilgrimage town near Delhi (~85 km from Delhi), <strong>not the same place</strong> as Mukteshwar in Uttarakhand's Kumaon hills (320 km from Delhi). They share a similar name but are 500+ km apart. Quick disambiguation:{" "}
          <a href="/blog/mukteshwar-vs-garhmukteshwar" className="text-primary underline">Mukteshwar (Uttarakhand) vs Garhmukteshwar (UP)</a>.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Practical drive tips from a resident</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Leave early.</strong> Delhi → Mukteshwar starting after 8 AM means peak hill traffic on the last 70 km. 6 AM is the right departure time.</li>
          <li><strong>Don't trust Maps' ETA on the last 35 km.</strong> Bhowali to Mukteshwar adds 30–45 minutes to most estimates because of single-lane mountain road and overtaking constraints.</li>
          <li><strong>Fuel up at Haldwani or Bhowali.</strong> Mukteshwar village does not have a 24-hour pump.</li>
          <li><strong>SUV vs sedan:</strong> a sedan reaches the property without issue. The road is paved and your car can park at our gate. Force Travellers also reach.</li>
          <li><strong>Monsoon (June–September):</strong> add 30 minutes; landslides occasionally close 1–2 km stretches between Bhowali and Bhimtal. Always check weather before driving.</li>
          <li><strong>Driving at night:</strong> not recommended past Bhowali. The road has no street lighting and fog can be heavy.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked distance questions</h2>
        <div className="space-y-5 mt-6">
          <div>
            <h3 className="font-semibold text-foreground mb-1">Is Mukteshwar farther than Nainital from Delhi?</h3>
            <p className="text-muted-foreground text-sm">Yes, by ~30 km / 30–45 minutes. Nainital is 290 km, Mukteshwar 320 km, both via the same Moradabad–Haldwani–Bhowali route.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Can I do Delhi to Mukteshwar in one day with a young child?</h3>
            <p className="text-muted-foreground text-sm">Yes, but break the drive at Haldwani for a meal. The 7–8 hour total is comfortable in two segments. The last 70 km is winding hill road which can cause motion sickness — keep medication handy.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">What's the closest hill station to Mukteshwar?</h3>
            <p className="text-muted-foreground text-sm">Bhimtal is the closest popular hill station at 40 km. Nainital is 51 km. Almora is 50 km via Dhanachuli.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Are there direct buses to Mukteshwar?</h3>
            <p className="text-muted-foreground text-sm">No direct buses from Delhi. Take a bus to Haldwani or Bhowali, then a shared jeep or local taxi the remaining distance. Most travellers prefer taxi or self-drive for the last leg.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Planning your drive to Mukteshwar?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're happy to share live road condition updates, recommend pickup options from Kathgodam or Pantnagar, and confirm parking availability. Drop us a WhatsApp with your dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => {
                const msg = encodeURIComponent("Hi! I'm planning a drive to Mukteshwar — could you share current road conditions and pickup options?");
                window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
              }}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Related route guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/delhi-to-mukteshwar-road-trip" className="text-primary underline">Delhi to Mukteshwar road trip (full guide)</a></li>
            <li>→ <a href="/blog/how-to-reach-mukteshwar-guide" className="text-primary underline">How to reach Mukteshwar — every transport mode</a></li>
            <li>→ <a href="/blog/kathgodam-to-mukteshwar-route-guide" className="text-primary underline">Kathgodam to Mukteshwar by train + taxi</a></li>
            <li>→ <a href="/blog/bhimtal-to-mukteshwar-route-guide" className="text-primary underline">Bhimtal to Mukteshwar route</a></li>
            <li>→ <a href="/blog/mukteshwar-vs-nainital" className="text-primary underline">Mukteshwar vs Nainital — which to pick</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
