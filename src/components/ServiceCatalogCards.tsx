import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, Code2, Cpu, Database, Shield, Zap } from "lucide-react";

type ServiceCatalogCardsProps = {
  isInView: boolean;
  onExplore: () => void;
};

const services = [
  {
    id: "01",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Product-grade web and mobile systems built around your workflows, integrations, and delivery goals.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Systems"],
    metric: "200+",
    metricLabel: "Projects Delivered",
    glow: "from-blue-500/30 via-cyan-400/20 to-transparent",
  },
  {
    id: "02",
    icon: Cloud,
    title: "Cloud Architecture & Migration",
    description:
      "Cloud platforms engineered for performance, predictable cost, and cleaner operations at scale.",
    features: ["AWS/Azure/GCP", "Microservices", "Auto-scaling"],
    metric: "99.9%",
    metricLabel: "Uptime SLA",
    glow: "from-sky-500/30 via-teal-400/20 to-transparent",
  },
  {
    id: "03",
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Applied AI systems that automate repeat work and turn data into decisions your team can trust.",
    features: ["ML Models", "NLP Solutions", "Computer Vision"],
    metric: "40%",
    metricLabel: "Efficiency Gain",
    glow: "from-amber-500/30 via-orange-400/20 to-transparent",
  },
  {
    id: "04",
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description:
      "Security and compliance programs that reduce risk without slowing product delivery.",
    features: ["Penetration Testing", "SOC 2", "HIPAA/GDPR"],
    metric: "100%",
    metricLabel: "Compliance Rate",
    glow: "from-emerald-500/30 via-green-400/20 to-transparent",
  },
  {
    id: "05",
    icon: Zap,
    title: "DevOps & CI/CD",
    description:
      "Delivery pipelines and infrastructure automation that shorten release cycles and improve reliability.",
    features: ["Docker/K8s", "Jenkins/GitHub Actions", "Monitoring"],
    metric: "10x",
    metricLabel: "Faster Deployments",
    glow: "from-yellow-500/30 via-orange-300/20 to-transparent",
  },
  {
    id: "06",
    icon: Database,
    title: "Data Engineering & Analytics",
    description:
      "Data foundations and analytics layers that make reporting, forecasting, and experimentation usable.",
    features: ["ETL Pipelines", "Data Warehousing", "BI Dashboards"],
    metric: "5PB+",
    metricLabel: "Data Processed",
    glow: "from-cyan-500/30 via-blue-400/20 to-transparent",
  },
];

export const ServiceCatalogCards = ({ isInView, onExplore }: ServiceCatalogCardsProps) => {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 md:gap-6 lg:gap-7">
      {services.map((service, index) => (
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
          className="group relative isolate overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/90 p-6 md:p-7"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-60 transition-opacity duration-300 group-hover:opacity-100`} />
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] border-b border-l border-border/60 bg-background/85 backdrop-blur" />

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-background/80 text-primary shadow-sm">
                <service.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">{service.id}</span>
            </div>

            <h3 className="mt-6 text-xl font-semibold leading-snug text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-end justify-between border-t border-border/60 pt-5">
              <div>
                <p className="text-2xl font-bold leading-none tracking-tight text-foreground">{service.metric}</p>
                <p className="mt-1 text-xs text-muted-foreground">{service.metricLabel}</p>
              </div>

              <button
                type="button"
                onClick={onExplore}
                className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/70 px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                Explore
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};
