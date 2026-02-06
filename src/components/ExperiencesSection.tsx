import { motion } from "framer-motion";
import { Sunrise, Camera, Utensils, TreePine, Flame, Mountain } from "lucide-react";

const experiences = [
  {
    icon: Sunrise,
    title: "Sunrise Viewing",
    description: "Wake up early for magical sunrise over the Himalayas from our terrace",
  },
  {
    icon: Mountain,
    title: "Nature Walks",
    description: "Explore scenic trails through pine forests and apple orchards",
  },
  {
    icon: Camera,
    title: "Bird Watching",
    description: "Spot Himalayan birds including the colorful Monal pheasant",
  },
  {
    icon: Utensils,
    title: "Local Cuisine",
    description: "Taste authentic Kumaoni dishes prepared with local ingredients",
  },
  {
    icon: TreePine,
    title: "Mukteshwar Temple",
    description: "Visit the ancient Shiva temple with panoramic valley views",
  },
  {
    icon: Flame,
    title: "Bonfire Nights",
    description: "End your day with a cozy bonfire under the starlit sky",
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
            Experiences & Things to Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From peaceful mornings to adventurous days, discover the magic of Mukteshwar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-start gap-4 p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <exp.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
