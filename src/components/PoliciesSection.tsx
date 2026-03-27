import { Clock, FileText, Shield, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const policies = [
  {
    id: "timing",
    icon: Clock,
    title: "Check-in & Check-out",
    content: (
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Check-in</span>
          <span className="font-medium text-foreground">12:00 PM to 10:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Check-out</span>
          <span className="font-medium text-foreground">10:00 AM</span>
        </div>
        <p className="text-sm text-muted-foreground pt-2 border-t border-border">
          Early check-in/late check-out available on request, subject to availability.
        </p>
      </div>
    ),
  },
  {
    id: "house-rules",
    icon: FileText,
    title: "House Rules",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          Valid government ID required at check-in
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          No smoking inside rooms (designated outdoor area available)
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          Children of all ages welcome
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          Pets not allowed
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          Quiet hours: 11:00 PM to 5:00 AM
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          Visitors not allowed without prior permission
        </li>
      </ul>
    ),
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety & Security",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary">✓</span>
          24/7 CCTV monitoring on premises
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">✓</span>
          Fully fenced property for privacy
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">✓</span>
          Fire safety equipment installed
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">✓</span>
          First aid kit available
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">✓</span>
          On-site caretaker for assistance
        </li>
      </ul>
    ),
  },
  {
    id: "special",
    icon: Sparkles,
    title: "Special Requests",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-accent">🧘</span>
          Yoga mats available on request from caretaker
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent">🌅</span>
          Early breakfast for sunrise viewing can be arranged
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent">🥗</span>
          Special dietary needs accommodated with advance notice
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent">🎂</span>
          Celebrating a special occasion? Let us know while booking!
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent">🚗</span>
          Airport/station pickup can be arranged (additional charges)
        </li>
      </ul>
    ),
  },
];

export function PoliciesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="container max-w-3xl">
        <div
          className={cn(
            "text-center mb-12 opacity-0",
            isVisible && "animate-fade-in-up opacity-100"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Good to Know
          </h2>
          <p className="text-muted-foreground">
            Important information for a comfortable and enjoyable stay
          </p>
        </div>

        <div
          className={cn(
            "opacity-0",
            isVisible && "animate-fade-in-up opacity-100"
          )}
          style={isVisible ? { animationDelay: "0.1s" } : {}}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {policies.map((policy) => (
              <AccordionItem
                key={policy.id}
                value={policy.id}
                className="bg-secondary rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <policy.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground text-left">
                      {policy.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 pl-14">
                  {policy.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Cancellation Note */}
        <div
          className={cn(
            "mt-8 bg-accent/10 border border-accent/20 rounded-xl p-6 text-center opacity-0",
            isVisible && "animate-fade-in-up opacity-100"
          )}
          style={isVisible ? { animationDelay: "0.3s" } : {}}
        >
          <h4 className="font-semibold text-foreground mb-2">Cancellation Policy</h4>
          <p className="text-muted-foreground text-sm">
            Free cancellation up to 5 days before check-in. Cancellations within 5 days are non-refundable. If we are able to rebook the dates, a full refund will be processed.
          </p>
        </div>
      </div>
    </section>
  );
}
