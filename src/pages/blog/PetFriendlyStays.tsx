import { Link } from "react-router-dom";
import { useBookingNavigation } from "@/hooks/useBookingNavigation";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { Calendar, Clock, Dog, Trees, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/pet-friendly/featured.webp";

const PET_FRIENDLY_PICKS = [
  { name: "Ecoescape Mukteshwar", note: "Spacious lawns and pet-friendly rooms with sunrise views.", category: "Boutique" },
  { name: "The Colonel's Cottage", note: "Fenced gardens where dogs can play safely.", category: "Cottage" },
  { name: "The Birdcage", note: "Known for being extremely welcoming to pets of all sizes.", category: "Luxury" },
  { name: "Sitla Estate", note: "Perfect for long walks through the forest trails.", category: "Heritage" },
  { name: "GoStops Mukteshwar", note: "A budget-friendly choice that allows pets in private rooms.", category: "Budget" },
];

export default function PetFriendlyStays() {
  const { navigateToBooking } = useBookingNavigation();

  const articleSchema = generateArticleSchema({
    headline: "Pet-Friendly Stays in Mukteshwar: Top Hotels & Cottages for Your Furry Friends",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 23, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Planning a trip to Mukteshwar with your pet? Discover the best pet-friendly hotels, cottages, and homestays in Mukteshwar for a comfortable stay with your furry best friend.",
    url: "https://ecoescapemukteshwar.com/blog/pet-friendly-stays-in-mukteshwar",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Pet Friendly Stays in Mukteshwar" },
  ]);

  const petFriendlyPicks = PET_FRIENDLY_PICKS;

  return (
    <BlogPostLayout
      meta={{
        title: "Pet-Friendly Stays in Mukteshwar | Best Hotels & Cottages (2026)",
        description: "Traveling with pets? Read our guide to the top pet-friendly stays in Mukteshwar, from cozy cottages with gardens to luxury resorts that welcome furry friends.",
        canonical: "https://ecoescapemukteshwar.com/blog/pet-friendly-stays-in-mukteshwar",
        keywords: "pet friendly hotels mukteshwar, dog friendly stays mukteshwar, traveling with pets mukteshwar, pet friendly cottages uttarakhand"
      }}
      schema={{
        article: articleSchema,
        breadcrumb: breadcrumbSchema
      }}
    >
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pet Travel</span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Pet-Friendly Stays in Mukteshwar: Top Hotels & Cottages (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 23, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Happy dog playing in the mountains of Mukteshwar" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Leaving your furry friend behind is always the hardest part of planning a trip. Fortunately, **Mukteshwar** is one of the most pet-friendly destinations in Uttarakhand, offering a range of accommodations that welcome dogs and cats alike.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 font-primary">Why Mukteshwar is Great for Pets</h2>
            <p className="text-muted-foreground">
              The vast open spaces, pine forests, and cooler temperatures make it an ideal playground for your pets. It’s also much quieter than Nainital, meaning less stress for sensitive animals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                <Dog className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">Space to Run</h4>
                <p className="text-sm text-muted-foreground">Most pet-friendly stays here offer large fenced gardens and quick access to forest trails.</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                <Trees className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">Hiking Trails</h4>
                <p className="text-sm text-muted-foreground">Unlike urban parks, Mukteshwar’s trails are perfect for long walks together.</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">Our Top Pet-Friendly Recommendations</h2>
            <div className="space-y-6">
              {petFriendlyPicks.map((p, i) => (
                <div key={i} className="flex gap-4 p-4 border-b border-border last:border-0 items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{p.name}</h3>
                    <span className="text-xs text-primary px-2 py-0.5 rounded-full bg-primary/5 uppercase tracking-wide">{p.category}</span>
                    <p className="text-muted-foreground mt-2 text-sm">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Tips for Traveling with Pets to Mukteshwar</h2>
            <ol className="space-y-4 text-muted-foreground mt-4 list-decimal pl-5">
              <li><strong>Inform the Host:</strong> Always call ahead to confirm your pet's stay and check for any additional fees.</li>
              <li><strong>Pack Essentials:</strong> Carry your pet's favorite food, bowls, and a familiar bed to help them settle in.</li>
              <li><strong>Vet Check:</strong> Ensure vaccinations are up to date and carry a basic first-aid kit for pets.</li>
              <li><strong>Leash Policies:</strong> Respect local village areas and keep your pets leashed when walking through residential paths.</li>
            </ol>

            <div className="bg-primary/5 border-l-4 border-primary p-6 my-10 rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2">Pet-Friendly Highlight</h3>
              <p className="text-muted-foreground text-sm">
                At <strong>Ecoescape Mukteshwar</strong>, we understand that pets are part of the family. Our spacious rooms and dedicated outdoor areas make us a favorite choice for pet owners.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" onClick={navigateToBooking}>Check Availability</Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = "/blog/family-vacation-guide"}>Family Travel Guide</Button>
            </div>
          </div>
    </BlogPostLayout>
  );
}
