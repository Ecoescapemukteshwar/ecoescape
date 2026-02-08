import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-sunrise.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
import gardenTerrace from "@/assets/garden-terrace.jpg";

const galleryImages = [
  { src: heroImage, alt: "Sunrise view from Ecoescape Mukteshwar terrace", category: "Views" },
  { src: roomDeluxe, alt: "Deluxe mountain view room", category: "Rooms" },
  { src: roomFamily, alt: "Family suite", category: "Rooms" },
  { src: gardenTerrace, alt: "Garden terrace with mountain views", category: "Garden" },
  { src: heroImage, alt: "Himalayan panorama at dawn", category: "Views" },
  { src: gardenTerrace, alt: "Blooming roses in the garden", category: "Garden" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Glimpse Into Your Ecoescape
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our property, rooms, garden, and the stunning views that await you
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  index === 0 ? "h-64 md:h-full" : "h-48 md:h-56"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-sm px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
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
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
