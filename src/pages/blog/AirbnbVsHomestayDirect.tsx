import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "Is direct booking with a Mukteshwar homestay cheaper than Airbnb or Booking.com?", a: "Typically 10–20% cheaper. OTAs charge the property a 15–22% commission, which gets passed on to you. Direct booking — usually via WhatsApp or the property's own site — skips that fee." },
  { q: "Are Mukteshwar boutique homestays on Airbnb?", a: "Many are, but the listings are often a small subset of available units. Airbnb also doesn't always show seasonal pricing accurately. Best practice: check Airbnb for discovery, then WhatsApp the property directly to confirm rates and availability." },
  { q: "What's the cancellation policy difference?", a: "OTA cancellation policies are platform-dictated and often strict. Direct-booked stays are usually more flexible — most boutique Mukteshwar properties allow free cancellation 5–7 days out." },
];

export default function AirbnbVsHomestayDirect() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar Airbnb vs Direct Homestay Booking: Which Is Cheaper? (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Mukteshwar Airbnb vs direct homestay booking — honest comparison of pricing, cancellation, communication, and verification, from a property owner.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-airbnb-vs-homestay-direct-booking",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Airbnb vs Direct Booking" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Mukteshwar Airbnb vs Direct Homestay Booking: Which Saves More? (2026)", description: "Mukteshwar Airbnb vs direct homestay booking — honest pricing comparison, cancellation policies, and which is better. From a property owner's perspective.", canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-airbnb-vs-homestay-direct-booking", keywords: "mukteshwar airbnb, mukteshwar homestay direct booking, mukteshwar booking.com vs direct, mukteshwar OTA savings, direct booking mukteshwar, mukteshwar makemytrip vs direct" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Booking Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Mukteshwar Airbnb vs Direct Homestay Booking: Which Saves More?</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="Boutique homestay in Mukteshwar — direct booking saves on OTA fees" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Direct booking with a Mukteshwar homestay is typically 10–20% cheaper than the same room on Airbnb, Booking.com, or MakeMyTrip.</strong> OTAs charge the property a 15–22% commission per booking, which gets baked into the room rate you see. Direct booking — usually via WhatsApp or the property's own website — skips that fee. Below is the honest comparison from someone who runs a property.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">The price math</h2>
        <p className="text-muted-foreground leading-relaxed">Take a Mukteshwar suite quoted at ₹3,500/night direct. The same unit on Booking.com or Airbnb will typically show ₹4,000–₹4,300 because the property has to recover the platform's 15–22% cut while staying competitive. On weekends and peak season, the gap widens — OTA dynamic pricing pushes rates up another 10–15%, while direct rates often stay closer to the listed seasonal markup.</p>

        <div className="my-10 rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/40"><tr><th className="text-left p-3 font-semibold">Factor</th><th className="text-left p-3 font-semibold text-primary">Direct booking</th><th className="text-left p-3 font-semibold">Airbnb / Booking.com</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-medium">Room rate</td><td className="p-3">Base rate, no commission</td><td className="p-3">+15–22% (OTA fee built in)</td></tr>
                <tr><td className="p-3 font-medium">Service fees</td><td className="p-3">None</td><td className="p-3">+8–14% (Airbnb guest fee)</td></tr>
                <tr><td className="p-3 font-medium">Cancellation</td><td className="p-3">Usually flexible (5–7 day window)</td><td className="p-3">Platform-dictated, often strict</td></tr>
                <tr><td className="p-3 font-medium">Communication</td><td className="p-3">Direct WhatsApp with host</td><td className="p-3">Through platform messaging</td></tr>
                <tr><td className="p-3 font-medium">Special requests</td><td className="p-3">Easy (custom meals, pickups)</td><td className="p-3">Limited via platform</td></tr>
                <tr><td className="p-3 font-medium">Verification</td><td className="p-3">Property reputation, reviews on Google/TripAdvisor</td><td className="p-3">Platform reviews + identity verification</td></tr>
                <tr><td className="p-3 font-medium">Payment protection</td><td className="p-3">Direct UPI / bank transfer (limited platform protection)</td><td className="p-3">Platform escrow, dispute resolution</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">When OTAs make sense</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Discovery:</strong> Airbnb and Booking.com are great for finding properties you didn't know existed. Use them as a search engine.</li>
          <li><strong>First-time bookings with unknown properties:</strong> platform escrow and dispute resolution give peace of mind.</li>
          <li><strong>International travelers</strong> who want platform-level support and currency conversion.</li>
          <li><strong>Last-minute bookings</strong> where OTA dynamic pricing occasionally undercuts list rates.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">When direct booking wins</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Repeat trips or longer stays</strong> (3+ nights) — where the percentage savings become meaningful (₹3,000–₹6,000 over a week).</li>
          <li><strong>Peak season bookings</strong> when OTA pricing surges hardest.</li>
          <li><strong>Custom needs</strong> — honeymoon setup, anniversary cake, dietary requirements, airport pickup. These coordinate poorly through platform messaging.</li>
          <li><strong>Properties with strong off-platform reputation</strong> — verified Google reviews, TripAdvisor presence, established social handles.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How to do direct booking safely</h2>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li><strong>Verify the property exists.</strong> Check Google Maps for a real Business Profile with photos and reviews. Confirm TripAdvisor or Booking.com listing.</li>
          <li><strong>Cross-check NAP details.</strong> Phone, address, PIN should match across the website, social handles, and any OTA listing.</li>
          <li><strong>Read recent reviews.</strong> 12-month review velocity is a strong signal — properties with consistent recent reviews are operating; ones that suddenly went quiet may not be.</li>
          <li><strong>Pay via UPI to a registered business account or use the property's payment-link page.</strong> Avoid wire transfers to personal accounts.</li>
          <li><strong>Get written confirmation.</strong> A WhatsApp message confirming dates, rate, and total is sufficient; print or screenshot for your records.</li>
        </ol>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">A direct-booking-friendly property</h2>
        <p className="text-muted-foreground leading-relaxed">Properties that publish their rates clearly, respond to WhatsApp quickly, and have visible reputation across Google + TripAdvisor + Booking.com are the safest direct-booking targets. Ecoescape Mukteshwar is one such property — direct rates start ₹2,500–₹3,500 per night for the suite, all-in. WhatsApp inquiries get a response within 2 business hours typically.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Skip the OTA fee — book direct</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">WhatsApp us with your dates and we'll send a quote in plain language. No hidden fees, no platform markup.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'd like a direct-booking quote for Ecoescape Mukteshwar — could you share rates for my dates?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/best-homestays-in-mukteshwar-with-himalayan-views" className="text-primary underline">Best homestays in Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-resort-vs-homestay-comparison" className="text-primary underline">Resort vs homestay in Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-trip-cost-2026-budget-guide" className="text-primary underline">Mukteshwar trip cost</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
