import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, Wallet, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

export default function MukteshwarTripCost() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;

  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar Trip Cost (2026): Honest Budget Guide for 3 Days, 5 Days, 1 Week",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("April 25, 2026"),
    dateModified: formatDateForSchema("April 25, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Real Mukteshwar trip cost from a property owner. Per-person budget for 3 / 5 / 7-day trips: travel, accommodation, food, activities. 2026 numbers, no fluff.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-trip-cost-2026-budget-guide",
  }), [founderName]);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar Trip Cost" },
  ]), []);

  return (
    <BlogPostLayout
      meta={{
        title: "Mukteshwar Trip Cost (2026): Budget Guide for 3, 5 & 7 Days",
        description: "Honest 2026 Mukteshwar trip cost from a homestay owner. Per-person totals for 3-day, 5-day, and 1-week trips covering travel, stay, food, and activities.",
        canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-trip-cost-2026-budget-guide",
        keywords: "Mukteshwar trip cost, Mukteshwar budget, Mukteshwar trip price 2026, Mukteshwar tour package cost, Mukteshwar weekend cost, Delhi to Mukteshwar trip cost",
      }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Budget Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          Mukteshwar Trip Cost (2026): Honest Budget Guide for 3, 5, and 7 Days
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span>By {founderName}</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> April 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min read</span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border">
        <img src={featuredImg} alt="Sunrise over the Himalayan ridge from Mukteshwar — typical view from a budget-to-mid-range stay" className="w-full h-auto" loading="lazy" width="1200" height="675" />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I run a 4-unit boutique aparthotel in Mukteshwar. Guests routinely ask "what should we budget for a Mukteshwar trip?" — so here is the honest answer with 2026 numbers, broken down by trip length and travel style. Per-person costs assume two people sharing.
        </p>

        <div className="my-10 rounded-2xl border border-border bg-secondary/20 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Wallet className="h-5 w-5 text-primary" /> Quick answer (per person, two sharing)</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>3-day weekend trip from Delhi (mid-range):</strong> ₹12,000–₹16,000</li>
            <li><strong>5-day relaxed trip (mid-range):</strong> ₹20,000–₹28,000</li>
            <li><strong>7-day workcation (mid-range):</strong> ₹28,000–₹38,000</li>
            <li><strong>Backpacker / budget per day:</strong> ₹2,000–₹3,000</li>
            <li><strong>Boutique homestay per day:</strong> ₹4,500–₹7,500</li>
          </ul>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Travel cost: Delhi to Mukteshwar (round trip)</h2>
        <p className="text-muted-foreground leading-relaxed">
          By private car: ~₹6,500–₹9,000 fuel + tolls round trip (Innova / sedan, depending on AC use and driver charges). Self-drive saves on driver fees. By taxi service: ₹14,000–₹18,000 round trip including 2 days driver allowance. By train + cab from Kathgodam: ₹1,800 train (Sleeper / 3AC) + ₹2,500 taxi from Kathgodam = ~₹4,300 one way. By bus: ₹800–₹1,200 to Haldwani / Kathgodam, then ₹2,500 shared/private transfer to Mukteshwar.
        </p>
        <p className="text-sm text-muted-foreground mt-3">
          Detailed routes: <a href="/blog/how-to-reach-mukteshwar-guide" className="text-primary underline">How to reach Mukteshwar</a> · <a href="/blog/delhi-to-mukteshwar-road-trip" className="text-primary underline">Delhi to Mukteshwar road trip</a>
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Accommodation cost: budget vs boutique vs luxury</h2>
        <div className="my-6 rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/40">
                <tr>
                  <th className="text-left p-3 font-semibold">Type</th>
                  <th className="text-left p-3 font-semibold">Per night (couple)</th>
                  <th className="text-left p-3 font-semibold">What you get</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3">Backpacker hostel / budget guesthouse</td><td className="p-3">₹1,200–₹2,000</td><td className="p-3">Basic shared room, simple food, limited views</td></tr>
                <tr><td className="p-3">Mid-range homestay</td><td className="p-3">₹2,500–₹4,500</td><td className="p-3">Private room, breakfast, mountain views</td></tr>
                <tr><td className="p-3">Boutique homestay / aparthotel</td><td className="p-3">₹4,500–₹8,000</td><td className="p-3">Self-contained unit, in-house kitchen, private entrance</td></tr>
                <tr><td className="p-3">Luxury resort</td><td className="p-3">₹10,000–₹18,000</td><td className="p-3">Pool / spa, multi-cuisine restaurant, full service</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground italic px-4 py-2 bg-secondary/20 border-t border-border">
            OTA prices on Booking.com / MakeMyTrip can be 15-20% higher than direct-booking rates. Always check the property's website.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Compare unit specs: <a href="/blog/best-homestays-in-mukteshwar-with-himalayan-views" className="text-primary underline">Best homestays in Mukteshwar</a>
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Food cost in Mukteshwar</h2>
        <p className="text-muted-foreground leading-relaxed">
          Most Mukteshwar stays serve in-house meals (there are very few standalone restaurants in the village). Expect ₹400-₹600 per person per meal at a homestay for a Kumaoni thali; ₹600-₹900 at the few cafés on the ridge. Three full meals + tea per day usually budgets at ₹1,500-₹2,000 per person if you eat at your stay. Going out cuts this to ₹1,000-₹1,500 per day but options are limited.
        </p>
        <p className="text-sm text-muted-foreground mt-3">
          Where to eat: <a href="/blog/best-cafes-and-restaurants-in-mukteshwar" className="text-primary underline">Best cafes and restaurants</a> · <a href="/blog/kumaoni-food-guide" className="text-primary underline">Kumaoni food guide</a>
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Activities and entry fees</h2>
        <p className="text-muted-foreground leading-relaxed">
          Mukteshwar Mahadev Temple — free. Chauli Ki Jali — free entry, ₹500/person if you book the rappelling experience. Bhalu Gaad waterfall trek — free, ₹500-₹800 for a local guide. Sunrise viewpoint walks — free. Forest walks — free. Photography tour — ₹1,000/half-day with a local guide. Most activities in Mukteshwar cost nothing or very little; the real cost is travel and stay.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">3-day weekend trip — sample budget (per person, two sharing)</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Travel (round trip from Delhi by shared cab): ₹4,000</li>
          <li>2 nights mid-range homestay: ₹3,500–₹5,500</li>
          <li>Food (6 meals): ₹3,000–₹4,000</li>
          <li>Activities + small purchases: ₹1,500–₹2,500</li>
          <li className="font-semibold pt-2">Total: ₹12,000–₹16,000 per person</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">5-day relaxed trip — sample budget</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Travel: ₹5,500</li>
          <li>4 nights boutique homestay: ₹9,000–₹14,000</li>
          <li>Food: ₹5,000–₹6,500</li>
          <li>Activities + buffer: ₹2,500–₹3,500</li>
          <li className="font-semibold pt-2">Total: ₹22,000–₹29,500 per person</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">7-day workcation — sample budget</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>Travel: ₹6,500</li>
          <li>6 nights boutique homestay (with weekly discount): ₹13,500–₹19,500</li>
          <li>Food (most meals at stay): ₹6,500–₹8,500</li>
          <li>Coworking, activities, buffer: ₹2,500–₹4,500</li>
          <li className="font-semibold pt-2">Total: ₹29,000–₹39,000 per person</li>
        </ul>
        <p className="text-sm text-muted-foreground mt-3">
          Workcation specifics: <a href="/workcation-mukteshwar" className="text-primary underline">Workcation packages at Ecoescape</a> · <a href="/blog/workcation-guide" className="text-primary underline">Mukteshwar workcation guide</a>
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How to keep the cost down</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Book direct, not via OTAs — saves 15-20%</li>
          <li>Travel midweek: rates drop ~20% vs weekends in peak season</li>
          <li>Take the train to Kathgodam + a single-leg cab — cheaper than round-trip car</li>
          <li>Eat where you stay; restaurants are scarce and not cheaper</li>
          <li>Avoid May 1-15 and Diwali week — peak rates everywhere in Uttarakhand</li>
          <li>Pick a 1-week stay over two 3-day weekends; the weekly discount (typically 10-25%) pays for ~2 extra meals</li>
        </ul>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Want the boutique experience?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Ecoescape Mukteshwar is a 4-unit boutique aparthotel — direct bookings save the OTA fee. Each unit has a different layout: solo, couple, family, or workcation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button>
            <Button variant="whatsapp" size="lg" onClick={() => {
              const msg = encodeURIComponent("Hi! I'm planning a Mukteshwar trip and would like to know about availability and rates at Ecoescape.");
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
