import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, CloudCog, DatabaseZap, ShieldCheck, Workflow } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServicesSection } from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const deliveryModels = [
  {
    icon: CloudCog,
    title: "Build & Launch",
    description:
      "From zero to production with product strategy, design, implementation, and scalable launch architecture.",
  },
  {
    icon: BrainCircuit,
    title: "Scale & Optimize",
    description:
      "Improve performance, reliability, and delivery velocity in systems that are already live and growing.",
  },
  {
    icon: Workflow,
    title: "Transform & Modernize",
    description:
      "Re-architect legacy systems into modern cloud-native platforms with minimal disruption and clear ROI.",
  },
];

const outcomes = [
  { icon: ShieldCheck, label: "Security-First Delivery" },
  { icon: DatabaseZap, label: "Reliable Data Pipelines" },
  { icon: Workflow, label: "Faster Release Cycles" },
];

const engagementJourney = [
  {
    step: "01",
    title: "Discovery Sprint",
    detail: "Align goals, constraints, and architecture direction with a clear execution map.",
  },
  {
    step: "02",
    title: "Rapid Delivery",
    detail: "Ship production-ready capabilities in focused increments with transparent milestones.",
  },
  {
    step: "03",
    title: "Scale Operations",
    detail: "Optimize performance, quality, and team workflows for long-term growth.",
  },
];

const serviceStats = [
  { label: "Enterprise Projects", value: "120+" },
  { label: "Avg. Delivery Acceleration", value: "2.6x" },
  { label: "Platform Uptime", value: "99.9%" },
  { label: "Client Retention", value: "97%" },
];

const Services = () => {
  const servicesSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://nexmindsystems.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://nexmindsystems.com/services",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Software Development Services",
      provider: {
        "@type": "Organization",
        name: "NexMindSystems",
        url: "https://nexmindsystems.com",
      },
      areaServed: "Global",
      description:
        "NexMindSystems provides software development services including cloud engineering, AI enablement, workflow automation, security, and data platform delivery.",
    },
  ];

  const openBookDemoPopup = () => {
    window.dispatchEvent(new Event("open-book-demo"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Seo
        title="Software Development Services | NexMindSystems"
        description="Explore NexMindSystems software development services: custom web apps, MVPs, cloud engineering, AI automation, product design, and data platforms."
        path="/services"
        keywords="software development services, custom web app development, AI automation services, cloud engineering, MVP development, software modernization, product engineering"
        schema={servicesSchema}
      />
      <Navigation />

      <main>
        <section className="section-padding pt-36 md:pt-40 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="glow-orb-primary w-[420px] h-[420px] -top-20 -left-24 opacity-20" />
            <div className="glow-orb-accent w-[340px] h-[340px] top-1/3 -right-10 opacity-20" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 xl:gap-12 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card-glow rounded-3xl p-7 md:p-10 lg:p-12"
              >
                <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-[0.18em]">Services</span>
                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.03] text-balance">
                  Software Development Services Built for
                  <span className="gradient-text"> Client Growth</span>
                </h1>
                <p className="mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  We partner with startups, founders, and growing businesses that need modern software systems to
                  launch faster, win more leads, and scale without bottlenecks.
                </p>

                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  <Button className="group w-full sm:w-auto" size="lg" variant="hero" onClick={openBookDemoPopup}>
                    Book a Discovery Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <a
                    href="#service-catalog"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    Explore Service Catalog
                  </a>
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="glass-card rounded-3xl p-6 md:p-7"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Delivery Highlights</div>
                <div className="mt-5 space-y-3">
                  {serviceStats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border/60 bg-muted/35 p-4">
                      <div className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{item.value}</div>
                      <div className="mt-1 text-xs md:text-sm text-muted-foreground">{item.label}</div>
                    </div>
                  ))}
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6">
              {deliveryModels.map((pillar, index) => (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="glass-card p-7 rounded-3xl h-full"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/90 to-accent/90 text-white flex items-center justify-center">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold">{pillar.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-8 glass-card p-5 md:p-6 rounded-3xl"
            >
              <div className="grid sm:grid-cols-3 gap-4">
                {outcomes.map((outcome) => (
                  <div key={outcome.label} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/90 to-accent/90 text-white flex items-center justify-center">
                      <outcome.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{outcome.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding pt-6">
          <div className="container-custom">
            <div className="glass-card-glow rounded-3xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">Engagement Journey</span>
                  <h2 className="mt-3 text-2xl md:text-4xl font-bold">How We Turn Business Goals Into Software</h2>
                </div>
                <p className="text-muted-foreground md:max-w-md">
                  A practical collaboration model built for clarity, speed, and measurable outcomes that matter to your
                  pipeline and your customers.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {engagementJourney.map((item, index) => (
                  <motion.article
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-2xl border border-border/70 bg-background/80 p-5"
                  >
                    <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-primary">
                      {item.step}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div id="service-catalog">
          <ServicesSection showCta={false} />
        </div>

        <section className="section-padding pt-8">
          <div className="container-custom max-w-4xl">
            <div className="glass-card-glow p-8 md:p-10 rounded-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Need a tailored software roadmap?</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Get a practical delivery plan aligned to your business goals, budget, and launch timeline.
              </p>
              <Button className="mt-8 group" size="lg" variant="hero" onClick={openBookDemoPopup}>
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
