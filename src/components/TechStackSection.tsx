import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "💚" },
  { name: "Python", icon: "🐍" },
  { name: "AWS", icon: "☁️" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Redis", icon: "🔴" },
  { name: "GraphQL", icon: "◈" },
  { name: "Docker", icon: "🐳" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Go", icon: "🔵" },
];

export const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".tech-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Staggered tech cards with 3D rotation
      gsap.fromTo(
        ".tech-card",
        { 
          opacity: 0, 
          scale: 0.8, 
          rotationY: 45,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: {
            each: 0.05,
            from: "random",
          },
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Partners fade in
      gsap.fromTo(
        ".partner-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".partners-section",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="tech-header text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Technology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Built With{" "}
            <span className="gradient-text">Modern Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We leverage industry-leading technologies to deliver scalable, 
            maintainable, and future-proof solutions.
          </p>
        </div>

        {/* Tech Grid */}
        <div ref={cardsRef} className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="tech-card glass-card p-6 text-center hover:shadow-glow transition-all duration-300 cursor-pointer group hover:scale-105 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Partners/Integrations */}
        <div className="partners-section mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Trusted integrations with industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Stripe", "Slack", "GitHub", "Jira", "Salesforce", "Datadog"].map((partner) => (
              <span
                key={partner}
                className="partner-item text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};