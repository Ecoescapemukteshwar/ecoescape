import { motion } from "framer-motion";
import { 
  Sunrise, 
  Flower2, 
  UtensilsCrossed, 
  Wifi, 
  Car, 
  Shield, 
  Coffee, 
  Droplets,
  Zap,
  Video,
  TreePine,
  Sparkles
} from "lucide-react";

const benefitGroups = [
  {
    title: "🌅 Natural Beauty & Location",
    items: [
      {
        icon: Sunrise,
        title: "East-Facing Sunrise Views",
        description: "Wake up to beautiful mornings and natural light streaming into your room",
      },
      {
        icon: Flower2,
        title: "Green Paradise Garden",
        description: "Over 100+ varieties of plants to refresh your senses (roses 🌹 currently in bloom!)",
      },
      {
        icon: TreePine,
        title: "Spacious Mountain-View Terrace",
        description: "Unwind with a cup of tea and enjoy breathtaking Himalayan vistas",
      },
      {
        icon: Car,
        title: "Good Road Connectivity",
        description: "Easily accessible with smooth roads for a hassle-free arrival",
      },
    ],
  },
  {
    title: "🍽️ Dining Experience",
    items: [
      {
        icon: UtensilsCrossed,
        title: "In-house A La Carte Restaurant",
        description: "Freshly prepared, home-cooked meals made to order",
      },
      {
        icon: Sparkles,
        title: "Terrace Dining",
        description: "Dine under the stars with panoramic mountain views",
      },
      {
        icon: Coffee,
        title: "Room Service Available",
        description: "Delicious meals delivered to your room, with on-call assistance",
      },
    ],
  },
  {
    title: "🏠 Comfort & Amenities",
    items: [
      {
        icon: Droplets,
        title: "Hot Water 24/7",
        description: "Available anytime for your comfort",
      },
      {
        icon: Coffee,
        title: "Electric Kettle in Every Room",
        description: "Complimentary tea bags & coffee sachets for your convenience",
      },
      {
        icon: Wifi,
        title: "High-Speed WiFi",
        description: "Stream, browse, or work seamlessly (perfect for short workcations)",
      },
      {
        icon: Zap,
        title: "Power Backup",
        description: "Stay powered up, even during outages",
      },
      {
        icon: Car,
        title: "Free Parking on Premises",
        description: "Park with ease and relax",
      },
    ],
  },
  {
    title: "🎥 Safety & Wellness",
    items: [
      {
        icon: Video,
        title: "24/7 CCTV + Fenced Property",
        description: "Your safety and privacy are our priority",
      },
      {
        icon: Shield,
        title: "Yoga-Friendly Terrace",
        description: "Complimentary yoga mats available on request from our caretaker",
      },
    ],
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            🌿 Why Guests Love Ecoescape Mukteshwar 🌿
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to relax, work remotely, or just reconnect with nature, 
            our home offers the perfect blend of comfort and calm.
          </p>
        </motion.div>

        <div className="space-y-12">
          {benefitGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                {group.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-background rounded-xl p-5 shadow-soft hover:shadow-card transition-shadow group"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
