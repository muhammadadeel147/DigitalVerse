import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { Gem, Globe2, HeartHandshake, Rocket, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { Seo } from "@/components/Seo";

const values = [
  {
    icon: Target,
    title: "Outcome-First Thinking",
    description:
      "Every decision starts with measurable business impact, then we engineer the cleanest path to get there.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability By Design",
    description:
      "Security, compliance, and uptime are built into architecture from day one, never added as an afterthought.",
  },
  {
    icon: Sparkles,
    title: "Craftsmanship",
    description:
      "We obsess over details in code, UX, and performance to make complex systems feel effortless for teams.",
  },
  {
    icon: HeartHandshake,
    title: "True Partnership",
    description:
      "We work like an extension of your team with transparent communication and shared accountability.",
  },
];

const stats = [
  { label: "Enterprise Projects", value: "120+" },
  { label: "Client Retention", value: "97%" },
  { label: "Average Delivery Speedup", value: "2.6x" },
  { label: "Countries Served", value: "14" },
];

const faqs = [
  {
    question: "What does NexMindSystems actually do?",
    answer:
      "We design, build, and scale enterprise-grade digital products, including modernization programs, cloud-native systems, and intelligent automation platforms.",
  },
  {
    question: "How do you work with internal teams?",
    answer:
      "We operate as a collaborative product partner. Our squads align with your engineering, product, and business stakeholders using transparent planning, delivery, and reporting.",
  },
  {
    question: "Can you support regulated industries?",
    answer:
      "Yes. We have experience delivering for teams with strict compliance and security needs, including auditability, governance controls, and resilient architecture patterns.",
  },
  {
    question: "What project size is a good fit?",
    answer:
      "We support both focused initiatives and multi-phase transformations. Typical engagements range from targeted product accelerators to full platform re-architecture.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Most partnerships start within 1-2 weeks after discovery, with clear milestones, scope options, and delivery timelines defined up front.",
  },
];

const About = () => {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-120px" });

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
    [],
  );

  const openBookDemoPopup = () => {
    window.dispatchEvent(new Event("open-book-demo"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Seo
        title="About NexMindSystems | Enterprise Product Engineering Partner"
        description="Learn about NexMindSystems: our mission, values, and team behind resilient enterprise software delivery and digital transformation."
        path="/about"
        keywords="NexMindSystems, about NexMindSystems, enterprise software company, product engineering partner, digital transformation"
        schema={faqSchema}
      />
      <Navigation />

      <main>
        <section className="section-padding pt-36 md:pt-40 relative overflow-hidden" ref={heroRef}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="glow-orb-primary w-[430px] h-[430px] -top-24 -left-24 opacity-20" />
            <div className="glow-orb-accent w-[360px] h-[360px] top-1/3 -right-12 opacity-20" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Gem className="h-4 w-4" />
                About Us
              </span>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
                We Build High-Trust Digital Products for
                <span className="gradient-text"> Ambitious Teams</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                NexMindSystems helps organizations move from legacy bottlenecks to resilient, intelligent platforms.
                We blend strategy, design, and engineering to deliver products that scale with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card-glow p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section-padding pt-8">
          <div className="container-custom grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="glass-card p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">About NexMindSystems</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Building the Infrastructure for{" "}
                <span className="gradient-text">Next-Gen Applications</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We empower developers and enterprises to build scalable, intelligent applications with our
                  cutting-edge platform. From AI-powered analytics to cloud-native architecture, we provide the tools
                  that modern teams need.
                </p>
                <p>
                  Our platform handles millions of requests daily, serving organizations that demand reliability,
                  performance, and innovation. We're not just building software, we're shaping how the world builds
                  software.
                </p>
                <p>
                  Every line of code, every API endpoint, and every feature is crafted with obsessive attention to
                  developer experience and enterprise-grade security. Join thousands of teams who trust NexMindSystems
                  to power their mission-critical applications.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-rows-3 gap-5 h-full">
              <div className="glass-card-glow p-7 rounded-3xl h-full flex flex-col justify-center">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl md:text-2xl font-bold">Our Mission</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Enable enterprises to launch and evolve digital products faster, without sacrificing quality,
                  governance, or customer trust.
                </p>
              </div>

              <div className="glass-card p-7 rounded-3xl h-full flex flex-col justify-center">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary text-white">
                  <Globe2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl md:text-2xl font-bold">Our Vision</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Become the most trusted product engineering partner for organizations building systems that improve
                  how people work, move, heal, and connect.
                </p>
              </div>

              <div className="glass-card p-7 rounded-3xl h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold">Ready to build with NexMindSystems?</h3>
                <p className="mt-3 text-muted-foreground">
                  We partner with ambitious teams to design, ship, and scale software that creates measurable value.
                </p>
                <Button className="mt-6 w-full sm:w-auto" variant="hero" onClick={openBookDemoPopup}>
                  Book a Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding pt-8" ref={valuesRef}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">What Drives Us</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Our Values In Action</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Principles that shape every engagement, from discovery to long-term scale.
              </p>
            </motion.div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {values.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  className="glass-card p-7 rounded-3xl"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/90 to-accent/90 text-white flex items-center justify-center">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <FAQSection items={faqs} />
      </main>

      <Footer />
    </div>
  );
};

export default About;
