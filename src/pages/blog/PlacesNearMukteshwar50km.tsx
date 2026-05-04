import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema, generateFAQPageSchema } from "@/lib/schema";
import { Calendar, Clock, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import featuredImg from "@/assets/hero-sunrise.webp";

const FAQS = [
  { q: "What are the best places to visit near Mukteshwar within 50 km?", a: "Bhimtal (40 km, lake town), Sitla (4 km, orchards), Bhalu Gaad waterfall (~6 km), Kainchi Dham (42 km, Neem Karoli Baba ashram), Almora (50 km, cultural Kumaon hub), Nainital (51 km — at the edge of 50 km)." },
  { q: "How many places near Mukteshwar can I cover in one day?", a: "Two comfortably — e.g., morning Bhimtal + afternoon Sitla orchards, or Kainchi Dham + Bhowali fruit market. Three becomes rushed because of mountain roads." },
  { q: "Is Kainchi Dham within 50 km of Mukteshwar?", a: "Yes — Kainchi Dham is approximately 42 km from Mukteshwar via Bhowali, taking ~1.5 hours by road." },
];

export default function PlacesNearMukteshwar50km() {
  const navigate = useNavigate();
  const founderName = siteConfig.founderName;
  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Places to Visit Near Mukteshwar Within 50 km (2026)",
    image: "https://ecoescapemukteshwar.com/preview.webp",
    datePublished: formatDateForSchema("May 3, 2026"),
    dateModified: formatDateForSchema("May 3, 2026"),
    author: { "@type": "Person", name: founderName },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Best places to visit near Mukteshwar within 50 km — Bhimtal, Sitla, Kainchi Dham, Almora, Bhalu Gaad waterfall and more, with distances and timings.",
    url: "https://ecoescapemukteshwar.com/blog/places-to-visit-near-mukteshwar-within-50km",
  }), [founderName]);
  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([{ name: "Home", item: "https://ecoescapemukteshwar.com" }, { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" }, { name: "Places near Mukteshwar within 50 km" }]), []);
  const faqSchema = useMemo(() => generateFAQPageSchema(FAQS), []);

  return (
    <BlogPostLayout
      meta={{ title: "Places to Visit Near Mukteshwar Within 50 km (2026)", description: "Bhimtal (40 km), Kainchi Dham (42 km), Almora (50 km), Sitla orchards (4 km), Bhalu Gaad waterfall and more — best places near Mukteshwar with distances.", canonical: "https://ecoescapemukteshwar.com/blog/places-to-visit-near-mukteshwar-within-50km", keywords: "places to visit near mukteshwar, places near mukteshwar, mukteshwar nearby attractions, mukteshwar within 50 km, kumaon nearby places, day trips from mukteshwar" }}
      schema={{ article: articleSchema, breadcrumb: breadcrumbSchema, additional: [faqSchema] }}
    >
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Radius Guide</span>
        <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">Places to Visit Near Mukteshwar Within 50 km</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"><span>By {founderName}</span><span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> May 2026</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min read</span></div>
      </header>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"><img src={featuredImg} alt="The 50 km radius around Mukteshwar covers Bhimtal, Sitla, Kainchi Dham, and Almora" className="w-full h-auto" loading="lazy" width="1200" height="675" /></div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground"><strong>Within 50 km of Mukteshwar you can reach Bhimtal lake, Kainchi Dham, Almora, Sitla orchards, Bhowali fruit market, Bhalu Gaad waterfall, Mukteshwar Mahadev Temple, and Chauli Ki Jali.</strong> Most are 30 minutes to 2 hours by road. Below is the complete list with what each is good for.</p>

        <div className="my-10 rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary/40"><tr><th className="text-left p-3 font-semibold">Place</th><th className="text-left p-3 font-semibold">Distance</th><th className="text-left p-3 font-semibold">Best for</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-medium">Mukteshwar Mahadev Temple</td><td className="p-3">7 km</td><td className="p-3 text-muted-foreground">350-yr Shiva temple, sunrise viewpoint</td></tr>
                <tr><td className="p-3 font-medium">Chauli Ki Jali</td><td className="p-3">7 km</td><td className="p-3 text-muted-foreground">Cliff-edge views, rock climbing</td></tr>
                <tr><td className="p-3 font-medium">Sitla village + orchards</td><td className="p-3">4 km</td><td className="p-3 text-muted-foreground">Fruit orchards, boutique cafés, Tagore Top viewpoint</td></tr>
                <tr><td className="p-3 font-medium">Bhalu Gaad waterfall</td><td className="p-3">~6 km + 3 km trek</td><td className="p-3 text-muted-foreground">Forest trek, hidden waterfall</td></tr>
                <tr><td className="p-3 font-medium">Ramgarh (Tagore's retreat)</td><td className="p-3">25 km</td><td className="p-3 text-muted-foreground">Heritage, "fruit bowl of Kumaon"</td></tr>
                <tr><td className="p-3 font-medium">Bhowali</td><td className="p-3">35 km</td><td className="p-3 text-muted-foreground">Junction town, fruit market, cafés</td></tr>
                <tr><td className="p-3 font-medium">Bhimtal lake</td><td className="p-3">40 km</td><td className="p-3 text-muted-foreground">Lake town, boating, half-day trip</td></tr>
                <tr><td className="p-3 font-medium">Kainchi Dham</td><td className="p-3">42 km</td><td className="p-3 text-muted-foreground">Neem Karoli Baba ashram</td></tr>
                <tr><td className="p-3 font-medium">Naukuchiatal</td><td className="p-3">~45 km</td><td className="p-3 text-muted-foreground">Nine-cornered lake, quieter than Bhimtal</td></tr>
                <tr><td className="p-3 font-medium">Almora</td><td className="p-3">50 km</td><td className="p-3 text-muted-foreground">Cultural Kumaon hub, Lala Bazaar</td></tr>
                <tr><td className="p-3 font-medium">Nainital (just over 50 km)</td><td className="p-3">51 km</td><td className="p-3 text-muted-foreground">Naini Lake, mall road</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Closest first — within 10 km</h2>
        <p className="text-muted-foreground leading-relaxed"><strong>Sitla (4 km), Mukteshwar Mahadev Temple (7 km), Chauli Ki Jali (7 km), and Bhalu Gaad waterfall trail head (~6 km).</strong> All accessible by short drive. A first-day plan can comfortably cover the temple + Chauli Ki Jali + a Sitla café in one afternoon.</p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">10–40 km — half-day trips</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Bhimtal (40 km):</strong> half-day. Lake activities, lakeside lunch. → <a href="/blog/bhimtal-to-mukteshwar-route-guide" className="text-primary underline">route guide</a></li>
          <li><strong>Bhowali fruit market (35 km):</strong> 1-hour stop on the way to/from Bhimtal.</li>
          <li><strong>Ramgarh (25 km):</strong> Tagore-stayed estate, orchard country. Good morning detour.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">40–50 km — full-day trips</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Kainchi Dham (42 km):</strong> spiritual circuit with Mukteshwar. → <a href="/blog/kainchi-dham-to-mukteshwar-distance" className="text-primary underline">route guide</a></li>
          <li><strong>Almora (50 km):</strong> Lala Bazaar, Bal Mithai, Nanda Devi temple. Combine with Jageshwar Dham (75 km from Mukteshwar via Almora) for a longer day.</li>
          <li><strong>Nainital (51 km, just outside the radius):</strong> if you want to add a lake town — but expect heavy weekend traffic.</li>
        </ul>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-5 mt-6">{FAQS.map((f) => (<div key={f.q}><h3 className="font-semibold text-foreground mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>))}</div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-12 text-center">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Want help mapping your day trips?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">WhatsApp us with your dates and we'll suggest the best sequencing of nearby places based on weather and road conditions.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"><Button variant="hero" size="lg" onClick={() => navigate('/#booking')}>Check Availability</Button><Button variant="whatsapp" size="lg" onClick={() => { const msg = encodeURIComponent("Hi! I'm planning Mukteshwar with day trips to nearby places — could you share availability?"); window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank"); }}><MessageCircle className="h-5 w-5" />WhatsApp Us</Button></div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-5 my-8">
          <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Related guides</h3>
          <ul className="text-sm space-y-1.5 text-muted-foreground">
            <li>→ <a href="/blog/things-to-do-in-mukteshwar" className="text-primary underline">15 things to do in Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-vs-almora-vs-ranikhet" className="text-primary underline">Mukteshwar vs Almora vs Ranikhet</a></li>
            <li>→ <a href="/blog/spiritual-kumaon-guide" className="text-primary underline">Spiritual Kumaon — Jageshwar, Kainchi, Mukteshwar</a></li>
            <li>→ <a href="/blog/mukteshwar-distance-from-major-cities" className="text-primary underline">Mukteshwar distance from major cities</a></li>
          </ul>
        </div>
      </div>
    </BlogPostLayout>
  );
}
