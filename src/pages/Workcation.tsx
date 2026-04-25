import { lazy, Suspense, useMemo } from "react";
import { Header } from "@/components/Header";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useBookingNavigation } from "@/hooks/useBookingNavigation";
import { generateApartmentSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { getRoomBySlug } from "@/config/rooms";
import { Wifi, Zap, ArmchairIcon, Utensils, MessageCircle, Sunrise, Coffee, Mountain, Briefcase, Sparkles } from "lucide-react";

// Photo placeholders — reuse existing webp until workcation-specific shots are taken.
// TODO: replace with dedicated photos:
//   - desk-setup-spacious-apartment.webp (laptop on baywindow sill)
//   - speedtest-ecoescape-mukteshwar-2026.webp (real speedtest screenshot)
//   - power-backup-inverter-ecoescape.webp
//   - terrace-morning-work-view.webp
import heroPlaceholder from "@/assets/two_bed_room_apartment/IMG_1597.webp";
import sunriseImg from "@/assets/hero-sunrise.webp";
import workspaceImg from "@/assets/two_bed_room_apartment/IMG_1603.webp";

const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

// TODO: replace with actual founder display name
const FOUNDER_NAME = "Shaurya";

// TODO: confirm/update prices with current pricing service before launch.
// Placeholder rates derived from siteConfig.roomPrices.* × 7 with a mild
// loyalty discount (5%) — owner should overwrite with real workcation rates.
const WORKCATION_PACKAGES = [
  {
    duration: "1 week",
    unit: "Suite (solo)",
    unitSlug: "suite-with-mountain-view",
    weeklyPrice: "₹23,000",
    includes: "WiFi · desk · all meals · daily housekeeping",
  },
  {
    duration: "1 week",
    unit: "Spacious Apartment (pair)",
    unitSlug: "spacious-apartment",
    weeklyPrice: "₹36,500",
    includes: "WiFi · 2 desks · all meals · daily housekeeping",
  },
  {
    duration: "2 weeks",
    unit: "Spacious Apartment",
    unitSlug: "spacious-apartment",
    weeklyPrice: "₹68,000",
    includes: "Above + Kathgodam airport pickup",
  },
  {
    duration: "1 month",
    unit: "Spacious Apartment",
    unitSlug: "spacious-apartment",
    weeklyPrice: "₹1,30,000",
    includes: "Above + weekly grocery run · 10% off the weekly rate",
  },
];

const TRUST_SIGNALS = [
  { icon: Wifi, label: "80 Mbps fibre", sub: "Speedtest verified" },
  { icon: Zap, label: "Power backup", sub: "Under 3-second failover" },
  { icon: ArmchairIcon, label: "Ergonomic desk + chair", sub: "Every unit" },
  { icon: Utensils, label: "Kumaoni meals", sub: "Pre-order with 2 hr notice" },
];

const TIMELINE = [
  { time: "06:30", icon: Sunrise, text: "Sunrise from the terrace. Optional 7-min walk to the ridge viewpoint." },
  { time: "08:00", icon: Coffee, text: "Breakfast on the terrace — paratha + chai. Pre-order the night before." },
  { time: "09:00", icon: Briefcase, text: "Desk. The baywindow faces northeast; morning glare is not an issue." },
  { time: "13:00", icon: Utensils, text: "Kumaoni lunch — bhat ki churkani + rice + kafuli. Order by 11 AM." },
  { time: "17:00", icon: Mountain, text: "Golden-hour walk toward Sitla orchard (4 km loop) or sit on the terrace." },
  { time: "20:00", icon: Sparkles, text: "Dinner by the garden. Bonfire on request in winter and shoulder season." },
];

const FAQS = [
  {
    q: "Does Mukteshwar have reliable internet for remote work?",
    a: "Yes. Ecoescape runs Airtel fibre at 80 Mbps down / 42 Mbps up, verified by speedtest.net. The connection is stable for 4K video calls and large file uploads. Power backup with under-3-second failover means your VPN connection survives short power cuts.",
  },
  {
    q: "Is there a proper desk and chair, not just a dining table?",
    a: "The Spacious Apartment has a baywindow sill wide enough for a full setup (laptop + external monitor if you bring one). Ergonomic chair provided. The Suite has a smaller desk — better for solo writers or a minimalist setup.",
  },
  {
    q: "Can I get a monthly rate?",
    a: "Yes — WhatsApp us directly. Monthly rates are not listed publicly to allow flexibility on dates and unit. Roughly 20–25% discount versus the weekly rate for a 4-week stay.",
  },
  {
    q: "What is the mobile network situation in Mukteshwar?",
    a: "Airtel 4G works reliably. Jio has signal but is patchier at the property's altitude. Vi/BSNL are not reliable. If your SIM is Airtel, you will not have connectivity gaps. For conference calls, use the property WiFi, not mobile data.",
  },
  {
    q: "What happens in a power cut during a video call?",
    a: "The inverter switches within 3 seconds — most video call apps tolerate this without dropping. Guests have run all-day Zoom sessions without incident. Extended grid failures (rare, usually storm-related in monsoon) last 1–3 hours; we communicate proactively if one is forecast.",
  },
];

export default function Workcation() {
  const { navigateToBooking } = useBookingNavigation();
  const suite = getRoomBySlug("suite-with-mountain-view");
  const apartment = getRoomBySlug("spacious-apartment");

  const apartmentSchema = useMemo(() => {
    if (!apartment) return null;
    return generateApartmentSchema({
      name: `${apartment.name} (Workcation Configuration)`,
      description: "Self-contained 2-bedroom apartment configured for remote work — fibre WiFi, ergonomic desks, in-room dining area, power backup. Best fit for solo workers who want extra space or workcation pairs.",
      url: "https://ecoescapemukteshwar.com/workcation-mukteshwar",
      images: apartment.images,
      floorSizeSqFt: apartment.sizeSqFt,
      numberOfBedrooms: apartment.numberOfBedrooms,
      numberOfRooms: apartment.numberOfRooms,
      occupancy: apartment.maxOccupancy,
      amenities: [...apartment.amenities, "80 Mbps fibre WiFi", "Power backup with sub-3s failover", "Ergonomic desk and chair"],
      bedConfig: apartment.bedConfig,
      view: apartment.view,
    });
  }, [apartment]);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Workcation", item: "https://ecoescapemukteshwar.com/workcation-mukteshwar" },
  ]), []);

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Work From Mukteshwar | Workcation Packages at Ecoescape (80 Mbps WiFi)"
        description="Verified 80 Mbps fibre, power backup, desk + chair, in-house Kumaoni meals. Weekly and monthly workcation packages at a boutique aparthotel in Mukteshwar. Book direct — no OTA fees."
        canonical="/workcation-mukteshwar"
        keywords="workcation Mukteshwar, workation Mukteshwar, remote work Mukteshwar, workcation packages Mukteshwar, workcation homestay Mukteshwar, Himalayan workcation"
        jsonLd={[apartmentSchema, breadcrumbSchema].filter(Boolean) as Record<string, unknown>[]}
      />
      <Header />

      <main>
        {/* Hero — above-fold CTA, no scroll required to book */}
        <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden pt-32">
          <div className="absolute inset-0">
            <img
              src={heroPlaceholder}
              alt="Workspace at Ecoescape Mukteshwar — desk facing the Himalayan ridge"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
          <div className="relative z-10 container max-w-4xl text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4 leading-tight">
              Work From the Himalayas. Actually Work.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              80 Mbps fibre. Power backup. Private desk. A boutique aparthotel in Mukteshwar at 2,286 m.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="xl" onClick={() => navigateToBooking()}>
                Reserve a workcation week
              </Button>
              <Button variant="outline" size="xl" onClick={scrollToPackages} className="bg-white/10 backdrop-blur border-white/40 text-white hover:bg-white/20">
                See weekly packages
              </Button>
            </div>
          </div>
        </section>

        {/* Trust bar — 4 proof chips */}
        <section className="py-12 bg-secondary/30 border-b border-border">
          <div className="container max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {TRUST_SIGNALS.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-semibold text-foreground">{label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-20 bg-background">
          <div className="container max-w-5xl">
            <header className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Workcation Packages — Direct Booking Rates
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Book direct and pay nothing now. Custom 3-week packages on WhatsApp.
              </p>
            </header>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/40">
                    <tr>
                      <th className="text-left p-4 font-semibold">Duration</th>
                      <th className="text-left p-4 font-semibold">Unit</th>
                      <th className="text-left p-4 font-semibold text-primary">Price</th>
                      <th className="text-left p-4 font-semibold">Includes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {WORKCATION_PACKAGES.map((pkg, i) => (
                      <tr key={i}>
                        <td className="p-4 font-medium">{pkg.duration}</td>
                        <td className="p-4">
                          <a href={`/rooms/${pkg.unitSlug}`} className="text-primary underline-offset-2 hover:underline">
                            {pkg.unit}
                          </a>
                        </td>
                        <td className="p-4 font-semibold">{pkg.weeklyPrice}</td>
                        <td className="p-4 text-muted-foreground">{pkg.includes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground italic px-4 py-2 bg-secondary/20 border-t border-border">
                Suite — 280 sq ft, 1 king bed, solo ideal. Spacious Apartment — 550 sq ft, 2 bedrooms, baywindow desk, best for remote pairs or solo needing spread.
              </p>
            </div>

            <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" onClick={() => navigateToBooking()}>
                Book — pay nothing now
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={() => {
                  const msg = encodeURIComponent("Hi! I'd like to book a workcation week at Ecoescape Mukteshwar. Could you share availability and confirm rates?");
                  window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
                }}
              >
                <MessageCircle className="h-5 w-5" />
                Build a custom package on WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Workspace proof — gallery + founder voice */}
        <section className="py-20 bg-secondary/20">
          <div className="container max-w-5xl">
            <header className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                The Workspace, Honestly Documented
              </h2>
            </header>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <figure>
                <img src={workspaceImg} alt="Baywindow desk in the Spacious Apartment, Himalayan ridge visible through the window" className="rounded-xl w-full h-auto" loading="lazy" />
                <figcaption className="text-xs text-muted-foreground italic mt-2">Baywindow desk in the Spacious Apartment. Natural light, ridge view.</figcaption>
              </figure>
              <figure>
                {/* TODO: replace with real speedtest screenshot at /assets/workcation/speedtest-ecoescape-2026.webp */}
                <img src={heroPlaceholder} alt="Speedtest screenshot showing 80 Mbps download / 42 Mbps upload on Airtel fibre" className="rounded-xl w-full h-auto" loading="lazy" />
                <figcaption className="text-xs text-muted-foreground italic mt-2">Real Airtel speedtest from the property. 80 Mbps down / 42 Mbps up.</figcaption>
              </figure>
              <figure>
                <img src={sunriseImg} alt="Sunrise over the Himalayan ridge from the property terrace" className="rounded-xl w-full h-auto" loading="lazy" />
                <figcaption className="text-xs text-muted-foreground italic mt-2">Morning view from the terrace — sunrise hits the ridge first.</figcaption>
              </figure>
            </div>

            <div className="max-w-3xl mx-auto p-6 rounded-xl bg-background border border-border">
              <p className="text-muted-foreground leading-relaxed italic">
                The baywindow in the Spacious Apartment faces the ridge — morning light is good without glare. The Airtel fibre handles 4K video calls without throttling; I've tested it with guests doing live demos and recorded sessions. Power backup kicks in within three seconds of a cut. Mukteshwar does get afternoon rain in monsoon and the occasional winter cut, which is exactly why we installed the inverter.
              </p>
              <p className="text-sm font-medium mt-3">— {FOUNDER_NAME}, founder, Ecoescape Mukteshwar</p>
            </div>
          </div>
        </section>

        {/* Day-in-a-week timeline */}
        <section className="py-20 bg-background">
          <div className="container max-w-3xl">
            <header className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                A Day in Your Himalayan Work Week
              </h2>
            </header>

            <ol className="border-l-2 border-primary/30 pl-6 space-y-6">
              {TIMELINE.map(({ time, icon: Icon, text }) => (
                <li key={time} className="relative">
                  <div className="absolute -left-[34px] top-1 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    <span className="text-sm font-mono font-semibold text-primary tabular-nums">{time}</span>
                    <p className="text-muted-foreground leading-relaxed flex-1">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-secondary/20">
          <div className="container max-w-3xl">
            <header className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Common Questions from Remote Workers
              </h2>
            </header>

            <div className="space-y-3">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group bg-background border border-border rounded-xl overflow-hidden">
                  <summary className="cursor-pointer list-none p-5 font-semibold text-foreground flex items-center justify-between hover:bg-secondary/30 transition-colors">
                    <span>{q}</span>
                    <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-muted-foreground leading-relaxed border-t border-border">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Ready to work from the mountains?
            </h2>
            <p className="text-primary-foreground/85 mb-8 text-lg">
              Direct booking. No OTA commission. WhatsApp us if you want to build a custom package.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="xl" variant="hero" onClick={() => navigateToBooking()} className="bg-white text-primary hover:bg-white/90">
                Reserve a workcation week
              </Button>
              <Button
                size="xl"
                variant="whatsapp"
                onClick={() => {
                  const msg = encodeURIComponent(`Hi ${FOUNDER_NAME}! I'd like to do a workcation at Ecoescape — could you tell me about availability and the WiFi setup?`);
                  window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
                }}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>
      <FloatingCTA />
    </div>
  );
}
