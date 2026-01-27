import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="glow-orb-primary w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card-glow p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              Ready to Transform?
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Join thousands of companies already using NexusFlow to power their 
            digital transformation. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <Calendar className="w-5 h-5" />
              Book a Demo
            </Button>
            <Button variant="heroOutline" size="xl">
              <MessageSquare className="w-5 h-5" />
              Contact Sales
            </Button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 pt-10 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {["Microsoft", "Google", "Amazon", "Meta", "Netflix"].map((company) => (
                <span
                  key={company}
                  className="text-xl font-bold text-muted-foreground/30"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};