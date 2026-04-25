import { Link } from "react-router-dom";
import { useMemo } from "react";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, Banknote, MapPin, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookingNavigation } from "@/hooks/useBookingNavigation";
import featuredImg from "@/assets/blog/budget-stays/featured.webp";
import { siteConfig } from "@/config/site";

const BUDGET_PICKS = [
  { name: "Himnadi Homestay", location: "Sargakhet", price: "Starting at ₹1,500/night", highlight: "Authentic local host and great views." },
  { name: "GoStops Mukteshwar", location: "Near Temple", price: "Starting at ₹800/night (Dorms)", highlight: "Perfect for budget solo travelers." },
  { name: "The Colonel's Cottage (Budget Rooms)", location: "Bhatelia", price: "Starting at ₹2,200/night", highlight: "Quiet location and great food." },
  { name: "Zostel Mukteshwar", location: "Sitla", price: "Starting at ₹900/night (Dorms)", highlight: "Legendary backpacker vibe." },
  { name: "Ecoescape Mukteshwar (Dormitory/Small Rooms)", location: "Mukteshwar Village", price: "Check for Seasonal Rates", highlight: "Sustainable living and sunrise views." },
];

export default function BudgetHomestaysGuide() {
  const { navigateToBooking } = useBookingNavigation();

  const articleSchema = useMemo(() => generateArticleSchema({
    headline: "Top 5 Budget-Friendly Homestays in Mukteshwar for Solo Travelers & Backpackers",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 23, 2026"),
    author: {
      "@type": "Person",
      name: siteConfig.founderName,
    },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Discover the best budget-friendly homestays and hostels in Mukteshwar. Perfect for solo travelers and backpackers looking for affordable stays with great views.",
    url: "https://ecoescapemukteshwar.com/blog/budget-friendly-homestays-mukteshwar-solo-travel",
  }), []);

  const breadcrumbSchema = useMemo(() => generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Budget Homestays in Mukteshwar" },
  ]), []);

  const budgetPicks = BUDGET_PICKS;

  return (
    <BlogPostLayout
      meta={{
        title: "Best Budget Homestays in Mukteshwar for Solo Travelers (2026)",
        description: "Looking for affordable stays in Mukteshwar? Read our 2026 guide to the top 5 budget-friendly homestays and hostels for solo travelers and backpackers.",
        canonical: "https://ecoescapemukteshwar.com/blog/budget-friendly-homestays-mukteshwar-solo-travel",
        keywords: "budget homestays mukteshwar, cheap stays mukteshwar, solo travel mukteshwar hostels, backpacker accommodation mukteshwar"
      }}
      schema={{
        article: articleSchema,
        breadcrumb: breadcrumbSchema
      }}
    >
      <header className="mb-10 lg:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Budget Travel</span>
        <h1 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
          Top 5 Budget-Friendly Homestays in Mukteshwar (2026)
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 23, 2026</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span>
        </div>
      </header>

      <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-elevated">
        <img
          src={featuredImg}
          alt="Cozy budget homestay in Mukteshwar with mountain view"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-lg leading-relaxed text-muted-foreground">
          You don't have to break the bank to enjoy the beauty of Mukteshwar. Whether you are a solo backpacker or a group of friends on a budget, there are several charming and **affordable stays** that offer comfort without compromising on the Himalayan experience.
        </p>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-8">Best Affordable Stays for 2026</h2>
        <div className="space-y-8 mb-12">
          {budgetPicks.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow bg-background">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{i + 1}. {p.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" /> {p.location}
                  </p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                  {p.price.split(' ')[0]}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{p.highlight}</p>
              <div className="flex gap-4">
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Banknote className="h-4 w-4" /> Value for Money</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Coffee className="h-4 w-4" /> Local Meals</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-6">Solo Traveler Tips for Mukteshwar</h2>
        <ul className="space-y-4 text-muted-foreground list-disc pl-5">
          <li><strong>Stay Centrally:</strong> Stays near the Mukteshwar Temple or Bhatelia market offer better connectivity for solo travelers without their own transport.</li>
          <li><strong>Share a Meal:</strong> Most budget homestays have common dining areas where you can meet other travelers.</li>
          <li><strong>Off-Season Discounts:</strong> Plan your trip during weekdays or the months of August and February to get the best deals on room rates.</li>
          <li><strong>Local Transport:</strong> Use shared taxis (jeeps) to travel between Bhatelia and Sitla to save on transport costs.</li>
        </ul>

        <div className="bg-primary/5 border-l-4 border-primary p-6 my-10 rounded-r-xl">
          <h3 className="font-semibold text-foreground mb-2">Sustainable & Affordable</h3>
          <p className="text-muted-foreground text-sm">
            At <strong>Ecoescape Mukteshwar</strong>, we offer special rates for long-term solo travelers and backpackers who value our commitment to the local environment.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" onClick={navigateToBooking}>Check Availability</Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/blog/mukteshwar-backpacker-guide">Read Backpacker Guide</Link>
          </Button>
        </div>
      </div>
    </BlogPostLayout>
  );
}
