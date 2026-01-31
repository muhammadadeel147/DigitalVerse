import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  SiAmazonwebservices,
  SiDatadog,
  SiDocker,
  SiElasticsearch,
  SiExpress,
  SiFastapi,
  SiGithub,
  SiGithubactions,
  SiGo,
  SiGraphql,
  SiGrafana,
  SiHuggingface,
  SiJira,
  SiKubernetes,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPrometheus,
  SiPytorch,
  SiPython,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiRedis,
  SiSalesforce,
  SiSentry,
  SiShadcnui,
  SiSlack,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTensorflow,
  SiTypescript,
  SiVite,
  SiVitest,
} from "react-icons/si";

import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

type IconType = React.ComponentType<{ className?: string }>;

type TechItem = {
  name: string;
  Icon: IconType;
  iconClassName?: string;
};

const technologies: TechItem[] = [
  { name: "React", Icon: SiReact, iconClassName: "text-cyan-400" },
  { name: "TypeScript", Icon: SiTypescript, iconClassName: "text-blue-500" },
  { name: "Vite", Icon: SiVite, iconClassName: "text-yellow-400" },
  { name: "Vitest", Icon: SiVitest, iconClassName: "text-lime-400" },
  { name: "Tailwind", Icon: SiTailwindcss, iconClassName: "text-sky-400" },
  { name: "shadcn/ui", Icon: SiShadcnui, iconClassName: "text-foreground" },
  { name: "Radix UI", Icon: SiRadixui, iconClassName: "text-foreground" },
  { name: "React Query", Icon: SiReactquery, iconClassName: "text-rose-500" },
  { name: "Node.js", Icon: SiNodedotjs, iconClassName: "text-green-500" },
  { name: "Express", Icon: SiExpress, iconClassName: "text-foreground" },
  { name: "NestJS", Icon: SiNestjs, iconClassName: "text-red-500" },
  { name: "Python", Icon: SiPython, iconClassName: "text-amber-400" },
  { name: "FastAPI", Icon: SiFastapi, iconClassName: "text-emerald-400" },
  { name: "Go", Icon: SiGo, iconClassName: "text-cyan-300" },
  { name: "AWS", Icon: SiAmazonwebservices, iconClassName: "text-orange-400" },
  { name: "Kubernetes", Icon: SiKubernetes, iconClassName: "text-blue-500" },
  { name: "PostgreSQL", Icon: SiPostgresql, iconClassName: "text-sky-600" },
  { name: "Prisma", Icon: SiPrisma, iconClassName: "text-foreground" },
  { name: "Redis", Icon: SiRedis, iconClassName: "text-red-500" },
  { name: "GraphQL", Icon: SiGraphql, iconClassName: "text-pink-500" },
  { name: "MongoDB", Icon: SiMongodb, iconClassName: "text-green-500" },
  { name: "MySQL", Icon: SiMysql, iconClassName: "text-blue-400" },
  { name: "Elasticsearch", Icon: SiElasticsearch, iconClassName: "text-sky-300" },
  { name: "Docker", Icon: SiDocker, iconClassName: "text-sky-500" },
  { name: "Terraform", Icon: SiTerraform, iconClassName: "text-purple-500" },
  { name: "GitHub Actions", Icon: SiGithubactions, iconClassName: "text-blue-500" },
  { name: "Sentry", Icon: SiSentry, iconClassName: "text-purple-400" },
  { name: "Prometheus", Icon: SiPrometheus, iconClassName: "text-orange-500" },
  { name: "Grafana", Icon: SiGrafana, iconClassName: "text-orange-400" },
  { name: "TensorFlow", Icon: SiTensorflow, iconClassName: "text-orange-500" },
  { name: "PyTorch", Icon: SiPytorch, iconClassName: "text-orange-500" },
  { name: "Hugging Face", Icon: SiHuggingface, iconClassName: "text-yellow-400" },
  { name: "OpenAI", Icon: SiOpenai, iconClassName: "text-foreground" },
  { name: "LangChain", Icon: SiLangchain, iconClassName: "text-primary" },
  { name: "Supabase", Icon: SiSupabase, iconClassName: "text-emerald-500" },
];

const integrations: TechItem[] = [
  { name: "Stripe", Icon: SiStripe, iconClassName: "text-violet-500" },
  { name: "Slack", Icon: SiSlack, iconClassName: "text-fuchsia-500" },
  { name: "GitHub", Icon: SiGithub, iconClassName: "text-foreground" },
  { name: "Jira", Icon: SiJira, iconClassName: "text-blue-500" },
  { name: "Salesforce", Icon: SiSalesforce, iconClassName: "text-sky-500" },
  { name: "Datadog", Icon: SiDatadog, iconClassName: "text-purple-500" },
];

export const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapsedCount, setCollapsedCount] = useState(12);

  useEffect(() => {
    const computeCollapsedCount = () => {
      const width = window.innerWidth;
      // Roughly ~2 rows at common breakpoints.
      if (width >= 1024) return 12; // 6 cols * 2 rows
      if (width >= 768) return 8; // 4 cols * 2 rows
      if (width >= 640) return 6; // 3 cols * 2 rows
      return 4; // 2 cols * 2 rows
    };

    const onResize = () => setCollapsedCount(computeCollapsedCount());
    setCollapsedCount(computeCollapsedCount());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const visibleTechnologies = useMemo(() => {
    if (isExpanded) return technologies;
    return technologies.slice(0, collapsedCount);
  }, [isExpanded, collapsedCount]);

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
      <div className="absolute inset-0">
        <div className="glow-orb-primary w-[520px] h-[520px] -top-48 -left-48 opacity-10" />
        <div className="glow-orb-accent w-[480px] h-[480px] -bottom-48 -right-48 opacity-10" />
      </div>
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

        {/* Tech Grid (simple) */}
        <div ref={cardsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {visibleTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="tech-card glass-card p-6 text-center hover:shadow-glow transition-all duration-300 cursor-pointer group hover:scale-105 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-background/40 border border-border/60 flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors">
                <tech.Icon className={tech.iconClassName ? `w-8 h-8 ${tech.iconClassName}` : "w-8 h-8 text-primary"} />
              </div>
              <span className="text-sm font-semibold text-foreground">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Expand / Collapse */}
        {technologies.length > collapsedCount && (
          <div className="mt-8 flex justify-center">
            <Button
              variant="glass"
              size="lg"
              onClick={() => setIsExpanded((v) => !v)}
              className="min-w-56"
            >
              {isExpanded ? "Show less" : "Show all technologies"}
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        )}

        {/* Partners/Integrations */}
        <div className="partners-section mt-16">
          <p className="text-muted-foreground mb-8 text-center">Trusted integrations with industry leaders</p>

          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {integrations.map((partner) => (
              <span
                key={partner.name}
                className="partner-item inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card bg-card/40 border-border/60 text-foreground hover:shadow-glow transition-all"
              >
                <partner.Icon className={partner.iconClassName ? `w-4 h-4 ${partner.iconClassName}` : "w-4 h-4 text-primary"} />
                <span className="text-sm font-semibold">{partner.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};