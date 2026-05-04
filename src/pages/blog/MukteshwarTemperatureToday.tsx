import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, ThermometerSun, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "What is the temperature in Mukteshwar today?", a: "Mukteshwar typically ranges from 18–25°C in summer days, 5–15°C in winter days, and drops to -2 to 5°C on winter nights. Live readings are best checked via the IMD or Weather.com Mukteshwar page; the seasonal averages below are reliable benchmarks." },
  { q: "Does it snow in Mukteshwar in summer?", a: "No. Snowfall in Mukteshwar is restricted to December–February, with the heaviest events typically in January. Summer (April–June) is consistently above freezing — daytime 18–28°C, nights 8–15°C." },
  { q: "What's the coldest month in Mukteshwar?", a: "January. Daytime highs around 8–12°C, nights between -2 and 5°C, with 1–3 snowfall events per year on average." },
  { q: "Is Mukteshwar weather pleasant in May?", a: "Yes — May is one of the most popular months. Days are 18–25°C with low humidity, perfect for outdoor walks and orchard visits. Evenings cool to 12–15°C." },
];

export default function MukteshwarTemperatureToday() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;

  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Mukteshwar Temperature Today & Month-by-Month Climate Guide (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "What is the temperature in Mukteshwar today? Live climate guide with month-by-month temperature ranges, snowfall windows, rainfall, and packing advice — from a Mukteshwar resident.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-temperature-today-and-monthly-guide",
  }), [founderName]);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar Temperature Today" },
  ]), []);

  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{
        title: "Mukteshwar Temperature Today & Month-by-Month Guide (2026)",
        description: "Mukteshwar temperature today: 5–25°C depending on season. Get the complete monthly climate guide with summer, monsoon, autumn, and winter ranges plus packing tips.",
        canonical: "https://ecoescapemukteshwar.com/blog/mukteshwar-temperature-today-and-monthly-guide",
        keywords: "mukteshwar temperature today, mukteshwar temperature, temperature in mukteshwar, mukteshwar temperature this week, mukteshwar climate, mukteshwar weather guide",
      }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Climate Reference</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          Mukteshwar Temperature Today & Month-by-Month Climate Guide (2026)
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span>By {founderName}</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min read</span>
        </div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border">
        <img src={featuredImg} alt="Mukteshwar weather across seasons — sunny ridge, monsoon mist, winter snow, autumn clarity" className="w-full h-auto" loading="lazy" width="1200" height="675" />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground">
          <strong>Mukteshwar today: typically 18–25°C in summer days, 5–15°C in winter days, and -2 to 5°C on winter nights.</strong> The village sits at 2,286 m on a Kumaon ridge, so the climate is alpine-temperate — much cooler than the plains in summer, genuinely cold in winter, and with a defined monsoon between mid-July and September. Below is the monthly breakdown.
        </p>

        <div className="my-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3"><ThermometerSun className="h-5 w-5 text-primary" /> Mukteshwar monthly temperature & rainfall</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/40">
                <tr>
                  <th className="text-left p-2 font-semibold">Month</th>
                  <th className="text-left p-2 font-semibold">Day high</th>
                  <th className="text-left p-2 font-semibold">Night low</th>
                  <th className="text-left p-2 font-semibold">Rainfall</th>
                  <th className="text-left p-2 font-semibold">Notable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-2">January</td><td className="p-2">8–12°C</td><td className="p-2">-2 to 5°C</td><td className="p-2">~30 mm</td><td className="p-2 text-muted-foreground">Snowfall likely (1–3 events)</td></tr>
                <tr><td className="p-2">February</td><td className="p-2">10–15°C</td><td className="p-2">0 to 7°C</td><td className="p-2">~40 mm</td><td className="p-2 text-muted-foreground">Cold, occasional snow</td></tr>
                <tr><td className="p-2">March</td><td className="p-2">14–20°C</td><td className="p-2">5–10°C</td><td className="p-2">~30 mm</td><td className="p-2 text-muted-foreground">Spring blossoms begin</td></tr>
                <tr><td className="p-2">April</td><td className="p-2">17–24°C</td><td className="p-2">8–13°C</td><td className="p-2">~25 mm</td><td className="p-2 text-muted-foreground">Pleasant; orchards in bloom</td></tr>
                <tr><td className="p-2">May</td><td className="p-2">18–25°C</td><td className="p-2">10–15°C</td><td className="p-2">~50 mm</td><td className="p-2 text-muted-foreground">Peak season; clear days</td></tr>
                <tr><td className="p-2">June</td><td className="p-2">19–26°C</td><td className="p-2">12–17°C</td><td className="p-2">~120 mm</td><td className="p-2 text-muted-foreground">Pre-monsoon; humid late month</td></tr>
                <tr><td className="p-2">July</td><td className="p-2">17–22°C</td><td className="p-2">14–18°C</td><td className="p-2">~280 mm</td><td className="p-2 text-muted-foreground">Monsoon — heavy rain</td></tr>
                <tr><td className="p-2">August</td><td className="p-2">17–22°C</td><td className="p-2">14–18°C</td><td className="p-2">~290 mm</td><td className="p-2 text-muted-foreground">Monsoon peak</td></tr>
                <tr><td className="p-2">September</td><td className="p-2">17–22°C</td><td className="p-2">12–16°C</td><td className="p-2">~160 mm</td><td className="p-2 text-muted-foreground">Late monsoon; greener</td></tr>
                <tr><td className="p-2">October</td><td className="p-2">15–22°C</td><td className="p-2">8–14°C</td><td className="p-2">~30 mm</td><td className="p-2 text-muted-foreground">Clearest skies — best for photography</td></tr>
                <tr><td className="p-2">November</td><td className="p-2">11–18°C</td><td className="p-2">5–10°C</td><td className="p-2">~10 mm</td><td className="p-2 text-muted-foreground">Cold, dry, sharp Himalayan views</td></tr>
                <tr><td className="p-2">December</td><td className="p-2">8–14°C</td><td className="p-2">0–6°C</td><td className="p-2">~20 mm</td><td className="p-2 text-muted-foreground">First snow possible end-month</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground italic mt-3">Ranges are 5-year on-property averages. Specific days can vary ±5°C from the monthly mean.</p>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Where to check live Mukteshwar weather</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>India Meteorological Department (IMD):</strong> Mukteshwar is one of IMD's regional weather observatories — the most authoritative live data source.</li>
          <li><strong>Weather.com / AccuWeather:</strong> 7-day forecasts for "Mukteshwar, IN" — accurate within ±2°C in our experience.</li>
          <li><strong>Windy.com:</strong> for monsoon planning — visualises rain bands across Kumaon.</li>
          <li><strong>WhatsApp us before driving up:</strong> if you're driving from Delhi we can confirm same-day road conditions and a rough temperature reading from the property terrace.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">When does Mukteshwar get snowfall?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Snowfall in Mukteshwar is concentrated in <strong>January and early February</strong>, with occasional events in late December and rare ones in March. On average we see 1–3 snowfall events per winter; depths range from a 2 cm dusting to 15–20 cm in heavier years. The snow typically melts within 24–72 hours on most south-facing slopes; north-facing patches can hold cover for a week. Full snow story:{" "}
          <a href="/blog/mukteshwar-snowfall-guide" className="text-primary underline">Mukteshwar snowfall guide</a>.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">How does Mukteshwar's temperature compare to Delhi?</h2>
        <p className="text-muted-foreground leading-relaxed">
          The simple rule: subtract about 15°C from Delhi's daytime high to estimate Mukteshwar's. When Delhi hits 42°C in May, Mukteshwar is around 25°C with breeze. When Delhi is at 8°C in January night, Mukteshwar is 0 to -2°C. The 900 m elevation gain accounts for most of this difference (standard lapse rate ~6.5°C per 1,000 m).
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">What to pack for Mukteshwar by season</h2>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="rounded-xl border border-border p-4 bg-secondary/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><ThermometerSun className="h-4 w-4 text-amber-500" /> Summer (Apr–Jun)</h3>
            <p className="text-sm text-muted-foreground">Light cottons, full sleeves for evenings, light jacket, walking shoes, sunscreen — the UV at altitude is stronger than the temperature suggests.</p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-secondary/20">
            <h3 className="font-semibold mb-2">Monsoon (Jul–Sep)</h3>
            <p className="text-sm text-muted-foreground">Waterproof shoes, foldable umbrella or light raincoat, quick-dry clothing, anti-fungal toiletries (humidity is high), one warm layer for evenings.</p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-secondary/20">
            <h3 className="font-semibold mb-2">Autumn (Oct–Nov)</h3>
            <p className="text-sm text-muted-foreground">Daytime light layers, evening fleece + thermal innerwear, woollen cap and gloves for early mornings.</p>
          </div>
          <div className="rounded-xl border border-border p-4 bg-secondary/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><Snowflake className="h-4 w-4 text-blue-500" /> Winter (Dec–Feb)</h3>
            <p className="text-sm text-muted-foreground">Heavy jacket, thermals, woollen socks, gloves, monkey cap, waterproof shoes if visiting around January (in case of snow), small power bank — cold drains batteries fast.</p>
          </div>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-foreground mb-1">{f.q}</h3>
              <p className="text-muted-foreground text-sm">{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Planning around Mukteshwar weather?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We watch the forecast daily. WhatsApp us with your dates and we'll share a real read on conditions, road status, and which unit suits the weather window.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => {
                const msg = encodeURIComponent("Hi! I'm checking Mukteshwar weather for my dates — could you share current conditions?");
                window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
              }}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2">Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/best-time-to-visit-mukteshwar-guide" className="text-primary underline">Best time to visit Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-snowfall-guide" className="text-primary underline">Mukteshwar snowfall guide</a></li>
            <li>→ <a href="/blog/monsoon-in-mukteshwar-guide" className="text-primary underline">Monsoon in Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-ultimate-packing-list" className="text-primary underline">Ultimate Mukteshwar packing list</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
