import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

// Import representative images (8 total: 2 rooms, 2 activities, 2 food, 2 views)
import roomImg1 from "@/assets/suite/IMG_4065.webp";
import roomImg2 from "@/assets/two_bed_room_apartment/75ee0385-397b-46a6-99c4-ad1227814379.webp";
import activityImg1 from "@/assets/activites/img1.webp";
import activityImg2 from "@/assets/activites/IMG_3113_2.webp";
import foodImg1 from "@/assets/food/IMG_5696.webp";
import foodImg2 from "@/assets/food/IMG_5767.webp";
import viewImg1 from "@/assets/view/F4E15BBC-891E-40CB-84F4-77E47B25C194_1_105_c.webp";
import viewImg2 from "@/assets/view/IMG_0754.webp";

const previewImages = [
  { src: roomImg1, category: "Rooms", alt: "Suite with mountain view" },
  { src: activityImg1, category: "Activities", alt: "Garden walk" },
  { src: foodImg1, category: "Dining", alt: "Kumaoni cuisine" },
  { src: viewImg1, category: "Views", alt: "Himalayan sunrise" },
  { src: roomImg2, category: "Rooms", alt: "Apartment living area" },
  { src: activityImg2, category: "Activities", alt: "Nature trail" },
  { src: foodImg2, category: "Dining", alt: "Terrace dining" },
  { src: viewImg2, category: "Views", alt: "Mountain peaks" },
];

export function GalleryPreviewSection() {
  const navigate = useNavigate();

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
            Glimpse of Paradise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A sneak peek into the experiences that await you at Ecoescape Mukteshwar
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {previewImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => navigate("/gallery")}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-medium text-background bg-primary/80 px-2 py-1 rounded-full">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" onClick={() => navigate("/gallery")} className="group">
            <ImageIcon className="h-5 w-5 mr-2" />
            Explore Full Gallery
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
