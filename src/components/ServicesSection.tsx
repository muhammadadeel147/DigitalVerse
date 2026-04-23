import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Cloud, Cpu, Shield, Zap, Database, ArrowRight } from "lucide-react";
import { BookDemoModal } from "./BookDemoModal";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Product-grade web and mobile systems built around your workflows, integrations, and delivery goals.",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Web Applications", "Mobile Apps", "Enterprise Systems"],
    stats: { value: "200+", label: "Projects Delivered" }
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & Migration",
    description: "Cloud platforms engineered for performance, predictable cost, and cleaner operations at scale.",
    gradient: "from-sky-500 to-teal-500",
    features: ["AWS/Azure/GCP", "Microservices", "Auto-scaling"],
    stats: { value: "99.9%", label: "Uptime SLA" }
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Applied AI systems that automate repeat work and turn data into decisions your team can trust.",
    gradient: "from-orange-500 to-red-500",
    features: ["ML Models", "NLP Solutions", "Computer Vision"],
    stats: { value: "40%", label: "Efficiency Gain" }
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Security and compliance programs that reduce risk without slowing product delivery.",
    gradient: "from-green-500 to-emerald-500",
    features: ["Penetration Testing", "SOC 2", "HIPAA/GDPR"],
    stats: { value: "100%", label: "Compliance Rate" }
  },
  {
    icon: Zap,
    title: "DevOps & CI/CD",
    description: "Delivery pipelines and infrastructure automation that shorten release cycles and improve reliability.",
    gradient: "from-yellow-500 to-orange-500",
    features: ["Docker/K8s", "Jenkins/GitHub Actions", "Monitoring"],
    stats: { value: "10x", label: "Faster Deployments" }
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Data foundations and analytics layers that make reporting, forecasting, and experimentation usable.",
    gradient: "from-teal-500 to-cyan-500",
    features: ["ETL Pipelines", "Data Warehousing", "BI Dashboards"],
    stats: { value: "5PB+", label: "Data Processed" }
  },
];

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
            <span className="gradient-text">Real Scale</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We build the technical systems, delivery pipelines, and data foundations that serious teams need to move faster without adding noise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 44, scale: 0.96, rotateX: 8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="group"
              style={{ transformPerspective: 1200 }}
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card/90 p-6 md:p-7 lg:p-8 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_34px_80px_-36px_rgba(15,23,42,0.45)]">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient} opacity-80`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.05),transparent_32%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-2xl border border-border/60 bg-muted/50 text-primary shadow-sm">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative z-10 mt-5 md:mt-6 text-lg md:text-xl font-semibold text-foreground tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm md:text-[15px] leading-6 md:leading-7 text-muted-foreground">
                  {service.description}
                </p>

                <div className="relative z-10 mt-5 md:mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>

                <div className="relative z-10 mt-7 md:mt-8 flex items-end justify-between border-t border-border/60 pt-5">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{service.stats.value}</div>
                    <div className="text-xs text-muted-foreground">{service.stats.label}</div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-semibold text-primary group/btn"
                    onClick={() => setIsBookDemoOpen(true)}
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
                We handle custom work as well. Share the problem and we’ll shape the right technical approach instead of forcing a generic package.
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