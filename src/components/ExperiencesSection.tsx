import { motion } from "framer-motion";
import { Sunrise, Camera, Utensils, TreePine, Sparkles, Map, LandPlot, Mountain, Building } from "lucide-react";

const onPropertyExperiences = [
  {
    icon: Sunrise,
    title: "Sunrise Viewing",
    description: "Wake early and witness nature's masterpiece from our east-facing rooms or terrace",
  },
  {
    icon: Sparkles,
    title: "Terrace Yoga",
    description: "Complimentary yoga mats available - practice with Himalayan backdrop",
  },
  {
    icon: TreePine,
    title: "Garden Walks",
    description: "Explore 100+ plant varieties, currently featuring blooming roses",
  },
  {
    icon: Utensils,
    title: "Culinary Experience",
    description: "Try authentic Kumaoni dishes at our restaurant",
  },
];

const nearbyAttractions = [
  {
    icon: Building,
    title: "Mukteshwar Dham Temple",
    distance: "~7 km",
    description: "Ancient Shiva temple with panoramic views",
  },
  {
    icon: Mountain,
    title: "Chauli Ki Jali",
    distance: "~2 km",
    description: "Rock climbing & stunning valley views",
  },
  {
    icon: LandPlot,
    title: "Fruit Orchards",
    distance: "~5 km",
    description: "Apple & peach orchards to explore",
  },
  {
    icon: Map,
    title: "Nainital",
    distance: "~50 km",
    description: "Famous hill station with Naini Lake",
  },
  {
    icon: Camera,
    title: "Bhimtal Lake",
    distance: "~30 km",
    description: "Scenic lake with island aquarium",
  },
];

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Make the Most of Your Stay
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From peaceful mornings to adventurous days, discover experiences at our property and beyond
          </p>
        </motion.div>

        {/* On-Property Experiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-serif font-semibold text-foreground mb-6 text-center">
            On-Property Experiences
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {onPropertyExperiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-secondary rounded-xl p-5 hover:bg-secondary/80 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <exp.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {exp.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workcation Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-12 text-center"
        >
          <p className="text-foreground">
            📶 <strong>Need to work remotely?</strong> Our high-speed WiFi and peaceful terrace 
            make for an inspiring workspace - perfect for short workcations!
          </p>
        </motion.div>

        {/* Nearby Attractions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-serif font-semibold text-foreground mb-6 text-center">
            Nearby Attractions
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-4 shadow-soft hover:shadow-card transition-shadow text-center"
              >
                <div className="w-10 h-10 bg-highlight/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <attraction.icon className="h-5 w-5 text-highlight" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {attraction.title}
                </h4>
                <div className="text-xs text-primary font-medium mb-1">
                  {attraction.distance}
                </div>
                <p className="text-xs text-muted-foreground">
                  {attraction.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
