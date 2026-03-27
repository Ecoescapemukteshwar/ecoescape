import { memo } from "react";
import { Star, MapPin, Calendar, ShieldCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/config/testimonials";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: "50px" });

  return (
    <section id="reviews" ref={ref} className="py-24 bg-secondary overflow-hidden">
      <div className="container">
        <div
          className={cn(
            "text-center mb-12 opacity-0",
            isInView && "animate-fade-in-up opacity-100"
          )}
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
            <span className="text-muted-foreground">from 100+ reviews</span>
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 basis-[85%]"
                >
                  <div
                    className={cn(
                      "bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow flex flex-col opacity-0",
                      isInView && "animate-fade-in-up opacity-100"
                    )}
                    style={isInView ? { animationDelay: `${index * 0.1}s` } : {}}
                  >
                    {/* Avatar & Quote Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {testimonial.initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          {testimonial.verified && (
                            <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                              <ShieldCheck className="h-3 w-3" />
                              <span>Verified stay</span>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-foreground mb-4 leading-relaxed text-sm flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Meta Info */}
                    <div className="pt-3 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {testimonial.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {testimonial.date}
                        </span>
                        <span>•</span>
                        <span>via {testimonial.source}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow flex flex-col opacity-0",
                isInView && "animate-fade-in-up opacity-100"
              )}
              style={isInView ? { animationDelay: `${index * 0.1}s` } : {}}
            >
              {/* Avatar & Quote Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    {testimonial.verified && (
                      <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        <ShieldCheck className="h-3 w-3" />
                        <span>Verified stay</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="text-foreground mb-4 leading-relaxed text-sm flex-grow">
                "{testimonial.text}"
              </p>

              {/* Meta Info */}
              <div className="pt-3 border-t border-border">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {testimonial.date}
                  </span>
                  <span>•</span>
                  <span>via {testimonial.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div
          className={cn(
            "mt-12 flex flex-wrap items-center justify-center gap-8 text-center opacity-0",
            isInView && "animate-fade-in-up opacity-100"
          )}
          style={isInView ? { animationDelay: "0.4s" } : {}}
        >
          <div className="flex flex-col items-center">
            <div className="text-2xl font-serif font-semibold text-primary">4.9★</div>
            <div className="text-sm text-muted-foreground">Google Reviews</div>
          </div>
          <div className="h-8 w-px bg-border hidden sm:block" />
          <div className="flex flex-col items-center">
            <div className="text-2xl font-serif font-semibold text-primary">100+</div>
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
        </div>
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);
