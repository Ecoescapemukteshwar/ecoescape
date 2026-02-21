import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Suite
import suite1 from "@/assets/suite/13072eba-63ad-4695-9f00-11993563b5b2.jpg";
import suite2 from "@/assets/suite/IMG_2630.jpg";
import suite3 from "@/assets/suite/IMG_2902.jpg";
import suite4 from "@/assets/suite/IMG_3599.jpg";

// Two Bed Room Apartment
import apt1 from "@/assets/two_bed_room_apartment/75ee0385-397b-46a6-99c4-ad1227814379.jpg";
import apt2 from "@/assets/two_bed_room_apartment/IMG_1597.jpg";
import apt3 from "@/assets/two_bed_room_apartment/IMG_1603.jpg";
import apt4 from "@/assets/two_bed_room_apartment/IMG_2901.jpg";

// Terrace
import terrace1 from "@/assets/terrace/6fc849e5-c31a-42b3-954c-0a943f6c9f21.jpg";
import terrace2 from "@/assets/terrace/IMG_1459.jpg";
import terrace3 from "@/assets/terrace/IMG_2495.jpg";
import terrace4 from "@/assets/terrace/IMG_2926.jpg";

// Views
import view1 from "@/assets/view/F4E15BBC-891E-40CB-84F4-77E47B25C194_1_105_c.jpg";
import view2 from "@/assets/view/IMG_0754.jpg";
import view3 from "@/assets/view/IMG_0774.jpg";
import view4 from "@/assets/view/image00004.jpg";

// Activities
import act1 from "@/assets/activites/img1.jpg";
import act2 from "@/assets/activites/img2.jpg";
import act3 from "@/assets/activites/IMG_3113_2.jpg";
import act4 from "@/assets/activites/IMG_3736.jpg";

// Food
import food1 from "@/assets/food/IMG_5696.jpg";
import food2 from "@/assets/food/IMG_5767.jpg";
import food3 from "@/assets/food/IMG_9928.jpg";
import food4 from "@/assets/food/IMG_9939.jpg";

const gallerySections = [
  {
    title: "Suite",
    description:
      "Our premium suite features panoramic Himalayan views, hand-crafted wooden interiors, and all modern comforts for an indulgent mountain retreat.",
    images: [suite1, suite2, suite3, suite4],
  },
  {
    title: "Two Bedroom Apartment",
    description:
      "Perfect for families or groups, our two-bedroom apartment offers generous living space, a fully equipped kitchen, and stunning mountain vistas from every room.",
    images: [apt1, apt2, apt3, apt4],
  },
  {
    title: "Terrace",
    description:
      "Step onto our sun-drenched terrace and lose yourself in an unbroken 180° panorama of the Himalayas — the perfect spot for morning chai or stargazing at night.",
    images: [terrace1, terrace2, terrace3, terrace4],
  },
  {
    title: "Views",
    description:
      "Waking up to the Himalayan skyline is an experience that never grows old. Every angle of Ecoescape frames a postcard-worthy scene of peaks, valleys and clouds.",
    images: [view1, view2, view3, view4],
  },
  {
    title: "Activities",
    description:
      "From guided nature walks and birdwatching to bonfire evenings and local village tours — there is always something to explore around Mukteshwar.",
    images: [act1, act2, act3, act4],
  },
  {
    title: "Food & Dining",
    description:
      "Savour freshly prepared Kumaoni dishes and continental favourites using locally sourced ingredients. Every meal is cooked with love and served with a view.",
    images: [food1, food2, food3, food4],
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Glimpse Into Your Ecoescape
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our spaces, surroundings, and the
            experiences that await you in Mukteshwar.
          </p>
        </motion.div>

        {/* Category rows */}
        <div className="flex flex-col gap-20">
          {gallerySections.map((section, sectionIndex) => {
            const isEven = sectionIndex % 2 === 0;

            const textBlock = (
              <motion.div
                key="text"
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <span className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
                  {String(sectionIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <div className="w-12 h-[2px] bg-accent mb-5" />
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            );

            const imageGrid = (
              <motion.div
                key="images"
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-3"
              >
                {section.images.map((src, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
                    onClick={() => setSelectedImage(src)}
                  >
                    <img
                      src={src}
                      alt={`${section.title} photo ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            );

            return (
              <div
                key={section.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                {/* Text is always first in DOM → mobile always shows text on top.
                    On desktop, odd rows swap order via md:order-* */}
                <div className={isEven ? "" : "md:order-2"}>
                  {textBlock}
                </div>
                <div className={isEven ? "" : "md:order-1"}>
                  {imageGrid}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image enlarged"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
