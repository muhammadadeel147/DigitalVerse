import { AnimatePresence, motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart,
  CheckCircle2,
  Clock,
  Lightbulb,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type ProcessStep = {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  weDo: string[];
  deliverables: string[];
};

const steps: ProcessStep[] = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery & Strategy",
    subtitle: "Align goals, risks, scope, and success metrics.",
    description:
      "We run a structured discovery to understand your users, constraints, and business goals. You’ll leave with a clear plan, realistic timeline, and a prioritized backlog—no guesswork.",
    duration: "3–7 days",
    weDo: [
      "Stakeholder interviews + quick competitive scan",
      "Requirements, constraints, and integration mapping",
      "Define KPIs, milestones, and delivery plan",
    ],
    deliverables: ["Product brief", "Roadmap + estimates", "Risk register", "Sprint backlog"],
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Design & Architecture",
    subtitle: "Make it usable, scalable, and easy to evolve.",
    description:
      "We turn strategy into an experience people actually enjoy using—then we back it with an architecture that supports performance, security, and future growth.",
    duration: "1–2 weeks",
    weDo: [
      "UX flows + wireframes (fast feedback loops)",
      "UI design system + key screens",
      "Architecture decisions + API/data modeling",
    ],
    deliverables: ["Figma prototype", "Design system", "Architecture diagram", "API contract"],
  },
  {
    icon: Rocket,
    step: "03",
    title: "Build & Launch",
    subtitle: "Ship in increments with weekly demos.",
    description:
      "Agile delivery with visible progress every week. We build, test, and deploy in small batches, so you can validate early and launch with confidence.",
    duration: "2–6 weeks",
    weDo: [
      "Iterative development in focused sprints",
      "Automated testing + performance checks",
      "Staging → production release plan",
    ],
    deliverables: ["Working product", "CI/CD pipeline", "QA report", "Launch checklist"],
  },
  {
    icon: BarChart,
    step: "04",
    title: "Optimize & Scale",
    subtitle: "Improve conversion, speed, and reliability.",
    description:
      "After launch, we monitor what matters and optimize continuously—performance, UX friction, and reliability—so your product stays fast and your roadmap stays on track.",
    duration: "Ongoing",
    weDo: [
      "Analytics + user feedback instrumentation",
      "Performance optimization + reliability hardening",
      "Roadmap iteration + new feature delivery",
    ],
    deliverables: ["Monitoring dashboards", "Optimization plan", "Monthly report", "Iteration releases"],
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = useMemo(() => steps[activeIndex] ?? steps[0], [activeIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="how-it-works"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="glow-orb-primary w-[520px] h-[520px] -top-48 -left-48 opacity-10" />
        <div
          className="glow-orb-accent w-[480px] h-[480px] top-1/2 -right-48 opacity-10"
          style={{ animationDelay: "-2s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.12)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.12)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_40%,#000_70%,transparent_115%)]" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            How We Work
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-5 leading-tight">
            A clear path from idea to{" "}
            <span className="gradient-text">launch</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-balance">
            A modern delivery process built for speed, visibility, and quality—so you always know what’s happening,
            what’s next, and what you’re getting.
          </p>
        </motion.div>

        {/* Process */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: step picker (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="hidden lg:block glass-card p-3 md:p-4">
              <div className="relative">
                <div className="absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
                <div className="space-y-2">
                  {steps.map((step, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <motion.button
                        key={step.step}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.99 }}
                        className={cn(
                          "w-full text-left rounded-2xl p-4 md:p-5 transition-all border group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
                          isActive
                            ? "bg-primary/10 border-primary/30 shadow-glow"
                            : "bg-background/40 border-border/60 hover:bg-accent/10 hover:border-border",
                        )}
                        aria-current={isActive ? "step" : undefined}
                      >
                        <div className="flex gap-4">
                          <div
                            className={cn(
                              "relative mt-0.5 w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors",
                              isActive
                                ? "bg-gradient-to-br from-primary to-accent text-white"
                                : "bg-primary/10 text-primary group-hover:bg-primary/15",
                            )}
                          >
                            <step.icon className="w-5 h-5" />
                            <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center text-[11px] font-bold text-foreground">
                              {step.step}
                            </span>
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Step {step.step}
                              </span>
                              <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {step.duration}
                              </span>
                            </div>
                            <div className="text-base md:text-lg font-semibold text-foreground mt-1">
                              {step.title}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {step.subtitle}
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Left: accordion (mobile) */}
            <div className="lg:hidden glass-card p-6 md:p-7">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <div className="text-sm font-semibold text-foreground">Our 4-step process</div>
                  <div className="text-sm text-muted-foreground">Tap a step to see what happens.</div>
                </div>
              </div>

              <Accordion type="single" collapsible defaultValue="step-0" className="w-full">
                {steps.map((step, index) => (
                  <AccordionItem key={step.step} value={`step-${index}`} className="border-border/60">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-foreground">{step.title}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                            <Clock className="w-3.5 h-3.5" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

                      <div className="grid sm:grid-cols-2 gap-5 mt-5">
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-2">What we do</div>
                          <ul className="space-y-2">
                            {step.weDo.map((item) => (
                              <li key={item} className="text-sm text-muted-foreground flex gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-2">Deliverables</div>
                          <ul className="space-y-2">
                            {step.deliverables.map((item) => (
                              <li key={item} className="text-sm text-muted-foreground flex gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button
                          variant="hero"
                          size="lg"
                          className="w-full"
                          onClick={() => {
                            setActiveIndex(index);
                            scrollTo("about");
                          }}
                        >
                          Start with discovery
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>

          {/* Right: sticky detail panel (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block lg:col-span-7 lg:sticky lg:top-28"
          >
            <div className="glass-card-glow p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60" />
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                          <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                            Step {activeStep.step}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
                          {activeStep.title}
                        </h3>
                        <p className="text-muted-foreground mt-3 leading-relaxed max-w-2xl">
                          {activeStep.description}
                        </p>
                      </div>

                      <div className="glass-card px-4 py-3 rounded-2xl shrink-0">
                        <div className="text-xs text-muted-foreground">Typical duration</div>
                        <div className="text-sm font-semibold text-foreground mt-1 inline-flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          {activeStep.duration}
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-7 mt-8">
                      <div>
                        <div className="text-sm font-semibold text-foreground mb-3">What we do</div>
                        <ul className="space-y-2">
                          {activeStep.weDo.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground flex gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-foreground mb-3">Deliverables</div>
                        <ul className="space-y-2">
                          {activeStep.deliverables.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground flex gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="hero"
                        size="lg"
                        onClick={() => scrollTo("about")}
                        className="sm:flex-1"
                      >
                        Start your roadmap
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="glass"
                        size="lg"
                        onClick={() => scrollTo("case-studies")}
                        className="sm:flex-1"
                      >
                        See case studies
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Users,
                  title: "Weekly demos",
                  desc: "See progress, give feedback early.",
                },
                {
                  icon: ShieldCheck,
                  title: "Quality gates",
                  desc: "Testing, reviews, and secure defaults.",
                },
                {
                  icon: Rocket,
                  title: "Launch-ready",
                  desc: "Smooth deploy with a clear checklist.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-semibold text-foreground mt-3">{item.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};