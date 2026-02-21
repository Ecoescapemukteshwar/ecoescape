import { motion } from "framer-motion";
import {
  Bath,
  Home,
  Thermometer,
  Shield,
  Wifi,
  Sparkles,
  Mountain,
  Coffee,
  Car,
  Sun,
  ChevronRight,
} from "lucide-react";

const amenityCategories = [
  {
    id: "bathroom",
    title: "Bathroom Essentials",
    icon: Bath,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    items: [
      { text: "Premium shampoo and body wash provided", highlight: true },
      { text: "24x7 hot water for refreshing showers anytime" },
      { text: "Fresh, fluffy towels for every guest" },
    ],
  },
  {
    id: "bedroom",
    title: "Comfortable Bedroom",
    icon: Home,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    items: [
      { text: "Premium bed linens for a cozy sleep" },
      { text: "Extra pillows & blankets available on request" },
      { text: "Room-darkening blinds for undisturbed rest" },
      { text: "Wardrobe and storage for your belongings" },
    ],
  },
  {
    id: "climate",
    title: "Climate Control",
    icon: Thermometer,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    items: [
      { text: "Portable fans/pedestals for summer comfort" },
      { text: "Room heaters available in winter (nominal charge)" },
      { text: "Stay comfortable in any season" },
    ],
  },
  {
    id: "safety",
    title: "Your Safety First",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    items: [
      { text: "24/7 CCTV monitoring (Terrace & Common Areas)" },
      { text: "Fire extinguisher on property" },
      { text: "First aid kit available" },
      { text: "Gated property for enhanced security" },
    ],
  },
  {
    id: "connectivity",
    title: "Stay Connected",
    icon: Wifi,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    items: [
      { text: "High-speed 5G WiFi - perfect for:" },
      { text: "Office calls & video meetings", indent: true },
      { text: "Streaming entertainment", indent: true },
      { text: "Staying connected with family", indent: true },
    ],
  },
  {
    id: "property",
    title: "Exclusive Property Features",
    icon: Sparkles,
    color: "text-primary",
    bgColor: "bg-primary/10",
    items: [
      { text: "Private Entrance - Each unit has its own private entrance", highlight: true },
      { text: "Power Backup - Uninterrupted electricity supply", highlight: true },
      { text: "Easy Parking - Free parking on premises (gated)" },
      { text: "Large Vehicle Access - Force Travellers can reach", highlight: true },
      { text: "Car Right to Door - No hiking with luggage!", highlight: true },
    ],
  },
  {
    id: "views",
    title: "Breathtaking Views",
    icon: Mountain,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    items: [
      { text: "Sunrise Views - Watch the sun paint the Himalayan gold from your room", highlight: true, emoji: "🌅" },
      { text: "Himalayan Peaks - Major peaks visible directly from the property", highlight: true, emoji: "🏔️" },
      { text: "Full snow capped Himalayan range view point 50-60m walk", emoji: "🌄" },
      { text: "Sunset Point - Only 100m walk for stunning evening colors", emoji: "🌇" },
    ],
  },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">What This Place Offers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Everything You Need for a Perfect Stay
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughtful amenities designed for your comfort, convenience, and peace of mind.
            From private entrances to breathtaking Himalayan views, we've thought of everything.
          </p>
        </motion.div>

        {/* Amenity Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {amenityCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start gap-2 text-sm ${
                      item.highlight ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {item.indent ? (
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 ml-4" />
                    ) : item.emoji ? (
                      <span className="text-base flex-shrink-0">{item.emoji}</span>
                    ) : (
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                    )}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Force Traveller Access
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Sun className="h-6 w-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Sunrise Views
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Complimentary Tea/Coffee
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Gated Property
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
