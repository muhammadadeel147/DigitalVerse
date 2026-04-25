import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { BookDemoModal } from "./BookDemoModal";
import { ServiceCatalogCards } from "./ServiceCatalogCards";

type ServicesSectionProps = {
  showCta?: boolean;
};

export const ServicesSection = ({ showCta = true }: ServicesSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <section id="services" className="section-padding !pt-16 md:!pt-20 relative overflow-hidden bg-gradient-to-b from-background to-muted/20 scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="glow-orb-primary w-[500px] h-[500px] -top-40 right-0 opacity-10" />
        <div className="glow-orb-accent w-[400px] h-[400px] bottom-0 left-0 opacity-10" />
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Zap className="w-4 h-4" />
            What We Deliver
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-5 md:mb-6 leading-[1.06] tracking-tight text-balance">
            Services Designed for{" "}
            <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We build custom web apps, MVPs, AI automation, cloud platforms, and data foundations for companies that
            need to win clients and scale without adding noise.
          </p>
        </motion.div>

        <ServiceCatalogCards isInView={isInView} onExplore={() => setIsBookDemoOpen(true)} />

        {showCta ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="mx-auto max-w-3xl rounded-3xl border border-border/70 bg-card/90 p-8 md:p-12 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.35)]">
              <h3 className="mb-4 text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                Need Something More Specific?
              </h3>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                We handle custom work as well. Share the problem and we’ll shape the right technical approach instead of
                forcing a generic package.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-glow"
                onClick={() => setIsBookDemoOpen(true)}
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        ) : null}
        <BookDemoModal isOpen={isBookDemoOpen} onClose={() => setIsBookDemoOpen(false)} />
      </div>
    </section>
  );
};