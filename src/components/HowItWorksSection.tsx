import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business needs, challenges, and goals to craft a tailored roadmap for success.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Design & Architecture",
    description: "Our team designs scalable solutions with user experience at the core, ensuring seamless integration.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Development & Launch",
    description: "Agile development sprints bring your vision to life, with rigorous testing and smooth deployment.",
  },
  {
    icon: BarChart,
    step: "04",
    title: "Growth & Optimization",
    description: "Continuous monitoring, optimization, and scaling ensure your solution grows with your business.",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            From Vision to{" "}
            <span className="gradient-text">Victory</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our proven four-phase methodology ensures predictable outcomes 
            and exceptional quality at every stage.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="text-center group">
                  {/* Icon Container */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-9 h-9 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (visible on large screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 transform translate-x-1/2">
                    <svg className="w-8 h-8 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};