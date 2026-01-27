import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, Globe, Lock, Gauge, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Intelligence",
    description: "Leverage cutting-edge machine learning models for predictive analytics and intelligent automation.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy across 50+ regions worldwide with automatic load balancing and edge optimization.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption and comprehensive compliance frameworks.",
  },
  {
    icon: Gauge,
    title: "Lightning Performance",
    description: "Sub-millisecond response times with intelligent caching and optimized data pipelines.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in workflows for seamless collaboration with role-based access and audit trails.",
  },
  {
    icon: Clock,
    title: "24/7 Reliability",
    description: "99.99% uptime SLA with proactive monitoring, automated failover, and instant recovery.",
  },
];

const benefits = [
  "Reduce development time by 60%",
  "Scale to millions of users effortlessly",
  "Enterprise-grade security out of the box",
  "Dedicated customer success team",
  "Comprehensive API documentation",
  "White-glove onboarding experience",
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="glow-orb-accent w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Features & Benefits
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete platform designed for teams who demand excellence, 
            with features that empower innovation at scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card-glow p-8 md:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Teams Choose NexusFlow
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};