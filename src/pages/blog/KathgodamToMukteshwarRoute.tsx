import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, Train, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

export default function KathgodamToMukteshwarRoute() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;

  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Kathgodam to Mukteshwar: Train, Taxi, and Route Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Kathgodam to Mukteshwar — distance, taxi options, recommended trains from Delhi, route via Bhowali, and pickup options from a Mukteshwar property owner.",
    url: "https://ecoescapemukteshwar.com/blog/kathgodam-to-mukteshwar-route-guide",
  }), [founderName]);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Kathgodam to Mukteshwar" },
  ]), []);

  return (
    <BlogPostLayout
      meta={{
        title: "Kathgodam to Mukteshwar: Distance, Train, Taxi Guide (2026)",
        description: "Kathgodam to Mukteshwar is 70 km / 2 hours by taxi. Get the best Delhi–Kathgodam trains, taxi fares, route via Bhowali, and pickup options for boutique stays.",
        canonical: "https://ecoescapemukteshwar.com/blog/kathgodam-to-mukteshwar-route-guide",
        keywords: "kathgodam to mukteshwar, kathgodam to mukteshwar distance, kathgodam mukteshwar taxi, kathgodam to mukteshwar by train, delhi kathgodam mukteshwar route, mukteshwar nearest railway station",
      }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Transit Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          Kathgodam to Mukteshwar: 70 km of Hill Road, 2 Hours by Taxi
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span>By {founderName}</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min read</span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border">
        <img src={featuredImg} alt="The hill road from Kathgodam railhead climbs through Bhowali on the way to Mukteshwar" className="w-full h-auto" loading="lazy" width="1200" height="675" />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground">
          <strong>Kathgodam (KGM) is the nearest railway station to Mukteshwar at 70 km — about 2 hours by taxi via Bhowali, Bhimtal, and Sitla.</strong> If you're travelling from Delhi, this is usually the most relaxed way to reach the property: an overnight train followed by a 2-hour scenic drive, instead of an 8-hour highway-and-hills road trip.
        </p>

        <div className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><Car className="h-5 w-5 text-primary" /> Quick reference</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><strong>Distance:</strong> 70 km</li>
            <li><strong>Taxi time:</strong> ~2 hours (2.5 hours in monsoon or peak weekend traffic)</li>
            <li><strong>Route:</strong> Kathgodam → Haldwani bypass → Bhowali → Bhimtal → Sitla → Mukteshwar</li>
            <li><strong>Taxi fare (one-way):</strong> ₹2,500–₹3,500 depending on car size and season</li>
            <li><strong>Shared cab:</strong> ₹600–₹800 per seat (4–5 seater) — runs from Kathgodam stand</li>
            <li><strong>Local bus:</strong> Kathgodam → Bhowali (frequent), then Bhowali → Mukteshwar (less frequent, ~3 daily)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Best trains from Delhi to Kathgodam</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-secondary/40">
              <tr>
                <th className="text-left p-3 font-semibold">Train</th>
                <th className="text-left p-3 font-semibold">Number</th>
                <th className="text-left p-3 font-semibold">Departs Delhi</th>
                <th className="text-left p-3 font-semibold">Arrives Kathgodam</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3">Ranikhet Express</td><td className="p-3 font-medium">15013</td><td className="p-3">22:40 (DLI)</td><td className="p-3">04:40</td></tr>
              <tr><td className="p-3">Sampark Kranti</td><td className="p-3 font-medium">15035</td><td className="p-3">16:00 (ANVT)</td><td className="p-3">22:50</td></tr>
              <tr><td className="p-3">Shatabdi (chair-car)</td><td className="p-3 font-medium">12040</td><td className="p-3">06:20 (NDLS)</td><td className="p-3">11:40</td></tr>
              <tr><td className="p-3">Garib Rath (overnight AC)</td><td className="p-3 font-medium">12209</td><td className="p-3">23:50 (KOAA-line via DLI)</td><td className="p-3">07:30</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground italic">Confirm exact timings on IRCTC or RailYatri before booking — schedules change seasonally.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Recommended train + arrival pattern</h2>
        <p className="text-muted-foreground leading-relaxed">
          The <strong>Ranikhet Express (15013)</strong> remains the most popular option for Mukteshwar-bound travellers. It leaves Delhi around 10:40 PM and pulls into Kathgodam at 4:40 AM — a stiff arrival but it lets you complete the 2-hour taxi ride and reach Mukteshwar by 7 AM, in time for sunrise. If pre-dawn arrivals don't appeal, the <strong>Shatabdi (12040)</strong> is a reasonable alternative — leaves NDLS at 6:20 AM, arrives Kathgodam 11:40 AM, has you at Mukteshwar by mid-afternoon.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">The taxi ride from Kathgodam</h2>
        <p className="text-muted-foreground leading-relaxed">
          Pre-booked taxis are the cleanest option. Most boutique stays in Mukteshwar — including ours at Ecoescape — can arrange a Kathgodam pickup if you confirm your train and PNR a day in advance. Cost is ₹2,500–₹3,500 one-way for a sedan; ₹3,500–₹4,500 for an SUV or Innova suitable for 4–6 passengers with luggage. The driver will hold your name on a placard at the station exit.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If you didn't pre-book, the <strong>prepaid taxi counter</strong> at Kathgodam exit-A operates 24/7 with fixed rates — slightly higher than pre-booked private cabs but reliable. The <strong>shared cab stand</strong> (just outside the station) runs Tata Sumo / Bolero shared seats to Bhowali (₹150 each, 50 minutes), where you change for a Mukteshwar-bound vehicle. Total shared-cab cost ends up around ₹600–₹800 per person — cheap but slower (3–4 hours total vs 2 hours private).
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">The route in detail</h2>
        <p className="text-muted-foreground leading-relaxed">
          From Kathgodam railway station, the road climbs immediately. The first 12 km to Haldwani bypass is unremarkable plains transition; from there you start gaining altitude through pine forest. Bhowali (35 km from Kathgodam) is the regional junction town and a useful breakfast stop — try the breakfast parathas at any of the dhabas opposite the bus stand.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          From Bhowali, take the Mukteshwar Road past Ramgarh, Dhanachuli junction, and Sitla village. The last 10 km from Sitla to Mukteshwar climbs steeply through orchard country with dramatic ridge views once you crest. Total: ~70 km, 2 hours.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Practical tips for the train+taxi journey</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Arrive at Kathgodam, not Haldwani.</strong> Trains terminate at Kathgodam (KGM); some online platforms list Haldwani (HDH) as nearer. Kathgodam is correct — Haldwani is a smaller halt 5 km earlier and most long-distance trains pass through without stopping.</li>
          <li><strong>Confirm taxi 24 hours in advance.</strong> Last-minute pickups during peak season (May–June, Dec) can hit a ₹500–₹1,000 surge.</li>
          <li><strong>Book lower-berth or AC2 for sleep quality.</strong> The Ranikhet Express often runs full in summer; book 30–60 days ahead. Tatkal opens at 10 AM the day before.</li>
          <li><strong>Don't drive yourself unless you're rested.</strong> Self-drive after an overnight train is a mistake — the hill road needs full attention. Take the taxi.</li>
          <li><strong>Carry layered clothing in your hand luggage.</strong> Kathgodam at 4 AM is plains-cool (15°C even in summer); Mukteshwar at 7 AM after the climb is much colder (5–10°C). You'll feel the difference.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Pantnagar Airport vs Kathgodam Railway — which is better?</h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Kathgodam wins for reliability.</strong> Pantnagar (PGH) has limited daily flights (mostly IndiGo / Alliance Air to Delhi) and frequent fog cancellations between November and February. The drive from Pantnagar (100 km, 2.5 hours) is also longer than from Kathgodam (70 km, 2 hours). Most regular travellers from Delhi take the overnight train to Kathgodam; flying is only worth it for travellers from cities outside the NCR train belt (Bengaluru, Mumbai, Hyderabad).
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">
          <div>
            <h3 className="font-semibold text-foreground mb-1">How far is Kathgodam from Mukteshwar by road?</h3>
            <p className="text-muted-foreground text-sm">70 km. The road via Bhowali takes ~2 hours. There's no shortcut — the Bhowali ridge has to be crossed regardless.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Is there a railway station in Mukteshwar itself?</h3>
            <p className="text-muted-foreground text-sm">No. Mukteshwar is at 2,286 m on a hill ridge — no rail line reaches it. Kathgodam is the closest railhead.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Can I take a bus from Kathgodam to Mukteshwar?</h3>
            <p className="text-muted-foreground text-sm">Yes, with a change at Bhowali. Direct buses are rare. Most travellers take a taxi or shared cab — buses run infrequently and luggage is a problem.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">What's the taxi fare from Kathgodam to Mukteshwar?</h3>
            <p className="text-muted-foreground text-sm">₹2,500–₹3,500 for a sedan one-way; ₹3,500–₹4,500 for an Innova/Ertiga. Round-trip with a 2–3 hour wait at the destination usually quotes ₹4,500–₹6,000.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Is the road safe at night?</h3>
            <p className="text-muted-foreground text-sm">It's safe but not pleasant. The road has no street lighting past Bhowali and fog can be heavy in winter. Most experienced taxi drivers are fine with it. We recommend daytime travel where possible.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Need a Kathgodam pickup?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We arrange Kathgodam pickups for guests staying with us — pre-confirmed driver, fixed fare, no surprises. Drop us a WhatsApp with your train and PNR and we'll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => {
                const msg = encodeURIComponent("Hi! I'm taking a train to Kathgodam and need a pickup to Mukteshwar — could you help arrange?");
                window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
              }}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2"><Train className="h-4 w-4 text-primary" /> Related transit guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from every major city</a></li>
            <li>→ <a href="/blog/how-to-reach-mukteshwar-guide" className="text-primary underline">How to reach Mukteshwar — full transport guide</a></li>
            <li>→ <a href="/blog/delhi-to-mukteshwar-road-trip" className="text-primary underline">Delhi to Mukteshwar road trip</a></li>
            <li>→ <a href="/blog/bhimtal-to-mukteshwar-route-guide" className="text-primary underline">Bhimtal to Mukteshwar route</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
