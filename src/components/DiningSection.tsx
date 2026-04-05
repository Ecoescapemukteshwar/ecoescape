import { UtensilsCrossed, Sun, BedDouble, BookOpen, Leaf, ChefHat, Clock, Coffee, Salad } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const diningOptions = [
  {
    icon: Sun,
    title: "Terrace Dining",
    description: "Dine under the open sky with panoramic mountain views",
    highlight: "Perfect for romantic dinners or special meals",
  },
  {
    icon: BedDouble,
    title: "Room Service",
    description: "Delicious meals in the comfort of your room",
    highlight: "Meals delivered to your door",
  },
  {
    icon: BookOpen,
    title: "A La Carte Menu",
    description: "Traditional Kumaoni, North Indian & Continental",
    highlight: "Authentic flavors of the Kumaon region",
  },
];

const features = [
  { icon: Leaf, text: "Fresh, locally-sourced ingredients" },
  { icon: ChefHat, text: "Authentic home-style cooking" },
  { icon: Coffee, text: "All-day tea & coffee" },
  { icon: Salad, text: "Dietary preferences accommodated" },
];

export function DiningSection() {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: "50px" });

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to pre-order meals for my stay at Ecoescape Mukteshwar."
    );
    window.open(`https://wa.me/919667846787?text=${message}`, "_blank");
  };

  return (
    <section id="dining" ref={ref} className="py-24 bg-secondary overflow-hidden">
      <div className="container">
        <div
          className={cn(
            "text-center mb-12 opacity-0",
            isInView && "animate-fade-in-up opacity-100"
          )}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <UtensilsCrossed className="h-4 w-4" />
            <span className="text-sm font-medium">Inhouse Kitchen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Freshly Prepared, Just for You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our in-house kitchen prepares fresh meals on order. We take 2 hours prior order
            to ensure everything is prepared with care using the finest ingredients.
            Choose to dine on our scenic terrace with breathtaking Himalayan views, or enjoy
            room service delivered right to your door.
          </p>
        </div>

        {/* Dining Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {diningOptions.map((option, index) => (
            <div
              key={option.title}
              className={cn(
                "bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow group opacity-0",
                isInView && "animate-fade-in-up opacity-100"
              )}
              style={isInView ? { animationDelay: `${index * 0.1}s` } : {}}
            >
              <div className="w-14 h-14 bg-gradient-sunrise rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <option.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                {option.title}
              </h3>
              <p className="text-muted-foreground mb-3">
                {option.description}
              </p>
              <p className="text-sm text-primary font-medium">
                {option.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Restaurant Features */}
        <div
          className={cn(
            "bg-background rounded-2xl p-8 shadow-card opacity-0",
            isInView && "animate-fade-in-up opacity-100"
          )}
          style={isInView ? { animationDelay: "0.3s" } : {}}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Prior Order Notice */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Pre-Order Required</h4>
                <p className="text-sm text-muted-foreground">
                  We take <strong>2 hours prior order</strong> as we prepare fresh meals on order.
                  Please WhatsApp us in advance to place your order.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" onClick={handleWhatsApp}>
              Pre-order Your Meals
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Use our WhatsApp to pre-order meals at least 2 hours before
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
