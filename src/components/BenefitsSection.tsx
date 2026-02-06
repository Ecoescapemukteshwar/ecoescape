import { motion } from "framer-motion";
import { 
  Mountain, 
  Wifi, 
  Car, 
  Shield, 
  Coffee, 
  Utensils, 
  Zap, 
  TreePine 
} from "lucide-react";

const benefits = [
  {
    icon: Mountain,
    title: "Sunrise Views",
    description: "Wake up to magical Himalayan sunrises from your room",
  },
  {
    icon: TreePine,
    title: "Peaceful Garden",
    description: "Private garden terrace with mountain panoramas",
  },
  {
    icon: Utensils,
    title: "Home-cooked Meals",
    description: "Authentic Kumaoni & North Indian cuisine",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Perfect for workations & remote work",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Secure parking space for your vehicle",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "24/7 electricity with inverter backup",
  },
  {
    icon: Shield,
    title: "CCTV Security",
    description: "Round-the-clock security for your peace of mind",
  },
  {
    icon: Coffee,
    title: "Complimentary Tea",
    description: "Unlimited chai & coffee throughout your stay",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Why Guests Love Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a perfect mountain getaway, 
            thoughtfully arranged for your comfort
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
