import { motion } from "framer-motion";
import { Clock, Utensils, FileText, Shield, Sparkles } from "lucide-react";
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
          <span className="font-medium text-foreground">1:00 PM onwards</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Check-out</span>
          <span className="font-medium text-foreground">11:00 AM</span>
        </div>
        <p className="text-sm text-muted-foreground pt-2 border-t border-border">
          Early check-in/late check-out available on request, subject to availability.
        </p>
      </div>
    ),
  },
  {
    id: "restaurant",
    icon: Utensils,
    title: "Restaurant Timings",
    content: (
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Breakfast</span>
          <span className="font-medium text-foreground">8:00 AM - 10:30 AM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Lunch</span>
          <span className="font-medium text-foreground">12:30 PM - 3:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Dinner</span>
          <span className="font-medium text-foreground">7:00 PM - 10:00 PM</span>
        </div>
        <p className="text-sm text-muted-foreground pt-2 border-t border-border">
          Room service available during restaurant hours. Early breakfast can be arranged on request.
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
          Quiet hours: 10:00 PM - 7:00 AM
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
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Good to Know
          </h2>
          <p className="text-muted-foreground">
            Important information for a comfortable and enjoyable stay
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
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
        </motion.div>

        {/* Cancellation Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-accent/10 border border-accent/20 rounded-xl p-6 text-center"
        >
          <h4 className="font-semibold text-foreground mb-2">Cancellation Policy</h4>
          <p className="text-muted-foreground text-sm">
            Free cancellation up to 48 hours before check-in. Cancellations within 48 hours 
            may be charged the first night's tariff. Contact us for special circumstances.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
