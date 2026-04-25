

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDashed,
  Play,
  Rocket,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-14 md:pt-28 md:pb-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,hsl(var(--primary)/0.18)_0%,transparent_45%),radial-gradient(circle_at_84%_18%,hsl(var(--accent)/0.2)_0%,transparent_38%),linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--background))_65%,hsl(var(--muted)/0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.24)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.24)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_92%_72%_at_50%_40%,#000_62%,transparent_100%)]" />
        <div className="absolute -top-24 left-[-8%] w-[34rem] h-[34rem] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[18%] right-[-12%] w-[30rem] h-[30rem] rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "-2.4s" }} />
        <div className="absolute bottom-[-14rem] left-1/3 w-[26rem] h-[26rem] rounded-full bg-primary/16 blur-[120px] animate-pulse-glow" style={{ animationDelay: "-4.1s" }} />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-8 lg:gap-6 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs sm:text-sm font-semibold mb-6 sm:mb-7 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  Custom Software Development Agency
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.7rem] font-black tracking-[-0.02em] text-foreground mb-5 sm:mb-6 leading-[1.02] max-w-[16ch] mx-auto lg:mx-0"
              >
                We Design And Build <span className="gradient-text">Software That Wins More Clients</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="text-base sm:text-lg md:text-[1.1rem] text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-7 sm:mb-8 leading-relaxed"
              >
                NexMindSystems is a software house for custom web apps, SaaS products, AI automation, and cloud
                platforms. We combine strategy, UX, and engineering to help growth-focused teams launch faster and
                convert more leads.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center lg:items-start justify-center lg:justify-start mb-8 md:mb-9"
              >
                <Button
                  variant="hero"
                  size="xl"
                  className="group w-full sm:w-auto"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("open-book-demo"));
                  }}
                >
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="group w-full sm:w-auto"
                  onClick={() => {
                    const caseStudiesSection = document.getElementById("case-studies");
                    caseStudiesSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  See Real Work
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.32 }}
                className="grid sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto lg:mx-0"
              >
                {[
                  { label: "Projects", value: "250+" },
                  { label: "Client Satisfaction", value: "98%" },
                  { label: "Time-to-Value", value: "4-8 weeks" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-card px-4 py-3 rounded-xl border border-border/60"
                  >
                    <div className="text-xl font-bold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
              className="relative max-w-[39rem] mx-auto lg:ml-auto lg:mr-0 w-full"
            >
              <div className="glass-card-glow p-4 md:p-5 rounded-3xl border border-border/60">
                <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-secondary/50 via-background to-muted/60">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&auto=format&fit=crop&q=80"
                    alt="Enterprise software delivery team dashboard"
                    className="w-full h-[18rem] sm:h-[22rem] md:h-[24rem] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />

                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between sm:items-center">
                    <div className="glass-card px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold text-foreground">
                      Client Delivery Command Center
                    </div>
                    <div className="glass-card px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold text-black-500 flex items-center gap-1.5">
                      <CircleDashed className="w-3.5 h-3.5 animate-spin" />
                      Live Tracking
                    </div>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div className="glass-card px-3.5 py-3 rounded-xl border border-border/60">
                      <div className="flex items-center gap-2 mb-1.5 text-primary">
                        <BarChart3 className="w-4 h-4" />
                        <span className="text-xs font-semibold">Performance</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold">Faster release velocity</div>
                    </div>
                    <div className="glass-card px-3.5 py-3 rounded-xl border border-border/60">
                      <div className="flex items-center gap-2 mb-1.5 text-accent">
                        <Rocket className="w-4 h-4" />
                        <span className="text-xs font-semibold">Product Impact</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold">Shorter roadmap cycles</div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.55, delay: 0.8 }}
                className="absolute -left-8 xl:-left-10 top-[16%] hidden xl:block"
              >
                <div className="glass-card px-4 py-3 rounded-2xl border border-border/60 shadow-2xl">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    AI Workflow Boost
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Automation that saves time</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.88 }}
                className="mt-3 lg:mt-0 lg:absolute lg:-right-6 xl:-right-8 lg:top-[54%] lg:-translate-y-1/2 z-20"
              >
                <div className="glass-card px-4 py-3 rounded-2xl border border-border/60 shadow-xl max-w-sm ml-auto lg:ml-0">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Shield className="w-4 h-4 text-blue-500" />
                    Enterprise Security
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Security-first delivery</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start"
          >
            {["B2B SaaS", "Healthcare", "FinTech", "E-Commerce", "Logistics"].map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.46 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-card/75 backdrop-blur border border-border/60 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-5 sm:gap-6 items-center text-sm text-muted-foreground justify-center lg:justify-start"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Free discovery workshop</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Rapid onboarding in 7 days</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Security-first development lifecycle</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};