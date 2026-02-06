import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "The sunrise views are absolutely breathtaking! We came for a weekend and ended up extending our stay. The hosts treat you like family. Will definitely come back!",
    date: "December 2024",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai",
    rating: 5,
    text: "Perfect for a workation. Great WiFi, peaceful environment, and the home-cooked food is amazing. My kids loved the garden area. Highly recommended!",
    date: "November 2024",
  },
  {
    id: 3,
    name: "Anita Krishnan",
    location: "Bangalore",
    rating: 5,
    text: "This place exceeded all expectations. Spotlessly clean, warm hospitality, and the location is just magical. Waking up to snow-capped peaks was surreal!",
    date: "October 2024",
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
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground">from 150+ reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow"
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
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.date}
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
            <div className="text-2xl font-serif font-semibold text-primary">150+</div>
            <div className="text-sm text-muted-foreground">Happy Guests</div>
          </div>
          <div className="h-8 w-px bg-border hidden sm:block" />
          <div className="flex flex-col items-center">
            <div className="text-2xl font-serif font-semibold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Would Recommend</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
