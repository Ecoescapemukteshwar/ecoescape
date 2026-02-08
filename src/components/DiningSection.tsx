import { motion } from "framer-motion";
import { UtensilsCrossed, Sun, BedDouble, BookOpen, Leaf, ChefHat, Coffee, Salad } from "lucide-react";
import { Button } from "@/components/ui/button";

const diningOptions = [
  {
    icon: Sun,
    title: "Terrace Dining",
    description: "Dine under the open sky with panoramic mountain views",
    highlight: "Perfect for romantic dinners or sunrise breakfast",
  },
  {
    icon: BedDouble,
    title: "Room Service",
    description: "Delicious meals in the comfort of your room",
    highlight: "Order anytime during restaurant hours",
  },
  {
    icon: BookOpen,
    title: "A La Carte Menu",
    description: "Freshly prepared meals made to order",
    highlight: "Traditional Kumaoni, North Indian & Continental",
  },
];

const features = [
  { icon: Leaf, text: "Fresh, locally-sourced ingredients" },
  { icon: ChefHat, text: "Authentic home-style cooking" },
  { icon: Coffee, text: "All-day tea & coffee" },
  { icon: Salad, text: "Dietary preferences accommodated" },
];

export function DiningSection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to pre-order meals for my stay at Ecoescape Mukteshwar."
    );
    window.open(`https://wa.me/919667846787?text=${message}`, "_blank");
  };

  return (
    <section id="dining" className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <UtensilsCrossed className="h-4 w-4" />
            <span className="text-sm font-medium">In-house Restaurant</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Savor the Mountains
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Indulge in freshly prepared, home-cooked meals at our in-house A La Carte restaurant. 
            Choose to dine on our scenic terrace with breathtaking Himalayan views, or enjoy 
            the comfort of room service delivered right to your door.
          </p>
        </motion.div>

        {/* Dining Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {diningOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow group"
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
            </motion.div>
          ))}
        </div>

        {/* Restaurant Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-background rounded-2xl p-8 shadow-card"
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

          {/* Restaurant Timings */}
          <div className="border-t border-border pt-6">
            <h4 className="font-semibold text-foreground mb-4 text-center">Restaurant Timings</h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="font-medium text-foreground">Breakfast</div>
                <div>8:00 AM - 10:30 AM</div>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="text-center">
                <div className="font-medium text-foreground">Lunch</div>
                <div>12:30 PM - 3:00 PM</div>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="text-center">
                <div className="font-medium text-foreground">Dinner</div>
                <div>7:00 PM - 10:00 PM</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Button variant="hero" size="lg" onClick={handleWhatsApp}>
              Pre-order Your Meals
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
