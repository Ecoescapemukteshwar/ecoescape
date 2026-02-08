import { motion } from "framer-motion";
import { Star, Quote, MapPin, Calendar } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    location: "Delhi",
    rating: 5,
    text: "The sunrise views from our room were absolutely magical! The garden with blooming roses was a bonus. Food was home-cooked and delicious. Highly recommend!",
    date: "December 2024",
    source: "Google",
  },
  {
    id: 2,
    name: "Rajesh & Family",
    location: "Mumbai",
    rating: 5,
    text: "Felt completely safe with the fenced property and CCTV. The terrace dining experience was unforgettable. Kids loved the garden walks. Will definitely come back!",
    date: "January 2025",
    source: "Google",
  },
  {
    id: 3,
    name: "Ananya K.",
    location: "Bangalore",
    rating: 5,
    text: "Perfect for our workation! The WiFi was fast, the terrace was inspiring, and the authentic Kumaoni food was amazing. The hosts were so welcoming.",
    date: "November 2024",
    source: "TripAdvisor",
  },
  {
    id: 4,
    name: "Vikram & Meera",
    location: "Noida",
    rating: 5,
    text: "Such a peaceful retreat! Waking up to sunrise views over the Himalayas was surreal. The 100+ plant garden is a photographer's paradise. Highly recommended!",
    date: "October 2024",
    source: "Google",
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Stories from Our Guests
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground">from 200+ reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow flex flex-col"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Quote className="h-5 w-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed text-sm flex-grow">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {testimonial.date}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  via {testimonial.source}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="text-2xl font-serif font-semibold text-primary">4.9★</div>
            <div className="text-sm text-muted-foreground">Google Reviews</div>
          </div>
          <div className="h-8 w-px bg-border hidden sm:block" />
          <div className="flex flex-col items-center">
            <div className="text-2xl font-serif font-semibold text-primary">200+</div>
            <div className="text-sm text-muted-foreground">Happy Guests</div>
          </div>
          <div className="h-8 w-px bg-border hidden sm:block" />
          <div className="flex flex-col items-center">
            <div className="text-2xl font-serif font-semibold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Would Recommend</div>
          </div>
          <div className="h-8 w-px bg-border hidden sm:block" />
          <div className="flex flex-col items-center">
            <div className="text-2xl font-serif font-semibold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Verified Reviews</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
