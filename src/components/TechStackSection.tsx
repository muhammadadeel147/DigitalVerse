import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
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
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Partners/Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-8">
            Trusted integrations with industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Stripe", "Slack", "GitHub", "Jira", "Salesforce", "Datadog"].map((partner) => (
              <span
                key={partner}
                className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};