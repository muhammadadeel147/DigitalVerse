import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Magnetic } from "./GsapAnimatedSection";

gsap.registerPlugin(ScrollTrigger);

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main card animation with 3D effect
      gsap.fromTo(
        ".cta-card",
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95,
          rotationX: 10,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Badge pop in
      gsap.fromTo(
        ".cta-badge",
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text slide up
      gsap.fromTo(
        ".cta-title, .cta-description",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Buttons animation
      gsap.fromTo(
        ".cta-buttons > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Trust indicators slide up
      gsap.fromTo(
        ".trust-section",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Company names stagger
      gsap.fromTo(
        ".company-name",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          delay: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="glow-orb-primary w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="cta-card glass-card-glow p-12 md:p-16 text-center max-w-4xl mx-auto">
          <span className="cta-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            Ready to Transform?
          </span>

          <h2 className="cta-title text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          
          <p className="cta-description text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Join thousands of companies already using NexusFlow to power their 
            digital transformation. Start your journey today.
          </p>

          <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Magnetic strength={0.2}>
              <Button variant="hero" size="xl">
                <Calendar className="w-5 h-5" />
                Book a Demo
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button variant="heroOutline" size="xl">
                <MessageSquare className="w-5 h-5" />
                Contact Sales
              </Button>
            </Magnetic>
          </div>

          {/* Trust Indicators */}
          <div className="trust-section mt-10 pt-10 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {["Microsoft", "Google", "Amazon", "Meta", "Netflix"].map((company) => (
                <span
                  key={company}
                  className="company-name text-xl font-bold text-muted-foreground/30"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};