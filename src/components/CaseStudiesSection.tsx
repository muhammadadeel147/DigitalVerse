import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const caseStudies = [
  {
    sector: "FinTech",
    company: "NexaPay",
    title: "Global Payment Platform",
    summary: "Scaled payment infrastructure with zero downtime migration.",
    kpiA: "500x capacity",
    kpiB: "99.99% uptime",
  },
  {
    sector: "Healthcare",
    company: "Clarity Health",
    title: "Clinical Operations Suite",
    summary: "Unified clinical workflows for faster care decisions.",
    kpiA: "40% faster decisions",
    kpiB: "220+ hospitals",
  },
  {
    sector: "E-Commerce",
    company: "Atlas Commerce",
    title: "Commerce Experience Platform",
    summary: "Rebuilt core storefront for stable high-traffic campaigns.",
    kpiA: "35% conversion lift",
    kpiB: "28% AOV growth",
  },
];

export const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="case-studies" className="py-16 md:py-20">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Case Studies
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Small Team. Big Outcomes.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Selected delivery snapshots from software house and product engineering engagements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 + index * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-border/60 bg-card/80 p-4 sm:p-5"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wide text-primary mb-2">
                {study.sector}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug mb-1.5">
                {study.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{study.company}</p>
              <p className="text-sm text-foreground/90 leading-relaxed mb-4">{study.summary}</p>

              <div className="space-y-2">
                <div className="rounded-lg border border-border/60 bg-background/70 px-3 py-2 text-xs sm:text-sm text-foreground">
                  {study.kpiA}
                </div>
                <div className="rounded-lg border border-border/60 bg-background/70 px-3 py-2 text-xs sm:text-sm text-foreground">
                  {study.kpiB}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};