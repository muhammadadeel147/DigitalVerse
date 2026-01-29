import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Magnetic, Counter } from "./GsapAnimatedSection";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate glow orbs continuously
      gsap.to(".glow-orb-primary, .glow-orb-accent", {
        scale: 1.1,
        opacity: 0.5,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 1,
      });

      // Parallax effect on scroll for orbs
      gsap.to(".glow-orb-primary", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".glow-orb-accent", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Grid parallax
      gsap.to(".hero-grid", {
        backgroundPosition: "0px 100px",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div ref={orbsRef} className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="hero-grid absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Glow Orbs */}
        <div className="glow-orb-primary w-[600px] h-[600px] -top-40 -left-40" />
        <div className="glow-orb-accent w-[500px] h-[500px] top-1/2 -right-40" />
        <div className="glow-orb-primary w-[400px] h-[400px] bottom-0 left-1/3" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now in Public Beta — Join 10,000+ Teams
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            ref={headlineRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            Build Software That{" "}
            <span className="gradient-text">Scales Beyond</span>{" "}
            Tomorrow
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
          >
            NexusFlow empowers enterprises to design, deploy, and scale intelligent 
            software solutions with unprecedented speed. From AI-powered automation 
            to cloud-native architecture—we transform visions into reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Magnetic strength={0.2}>
              <Button variant="hero" size="xl">
                Start Building Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </Magnetic>
          </motion.div>

          {/* Stats with Counter Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: 10000, suffix: "+", label: "Active Users" },
              { value: 99.99, suffix: "%", label: "Uptime SLA", isDecimal: true },
              { value: 500, suffix: "M+", label: "API Calls/Day" },
              { value: 4.9, suffix: "/5", label: "Customer Rating", isDecimal: true },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.isDecimal ? (
                    <span>{stat.value}{stat.suffix}</span>
                  ) : (
                    <Counter end={stat.value} suffix={stat.suffix} duration={2.5} />
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D Floating Cards */}
        <div className="relative mt-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass-card-glow p-8 rounded-3xl"
          >
            <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Dashboard Preview Placeholder */}
              <div className="absolute inset-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 p-6">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="grid grid-cols-4 gap-4 h-[calc(100%-2rem)]">
                  <div className="col-span-1 space-y-3">
                    <div className="h-8 bg-muted rounded-lg" />
                    <div className="h-6 bg-muted/60 rounded-lg w-3/4" />
                    <div className="h-6 bg-muted/60 rounded-lg w-1/2" />
                    <div className="h-6 bg-primary/20 rounded-lg" />
                    <div className="h-6 bg-muted/60 rounded-lg w-2/3" />
                  </div>
                  <div className="col-span-3 bg-muted/30 rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-20 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl" />
                      ))}
                    </div>
                    <div className="h-32 bg-muted/50 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-8 -left-8 glass-card p-4 rounded-2xl floating-element hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">Deploy Success</div>
                <div className="text-xs text-muted-foreground">v2.4.1 • 3s ago</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl floating-element-delayed hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">AI</span>
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">AI Analysis Complete</div>
                <div className="text-xs text-muted-foreground">98.7% accuracy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};