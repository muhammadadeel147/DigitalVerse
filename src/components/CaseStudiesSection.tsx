import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    category: "FinTech",
    title: "Global Payment Platform",
    description: "Scaled from 100K to 50M daily transactions with 99.99% uptime and sub-100ms latency.",
    metrics: [
      { value: "500x", label: "Scale Increase" },
      { value: "99.99%", label: "Uptime" },
    ],
    gradient: "from-blue-600 to-cyan-500",
    image: "📊",
  },
  {
    category: "Healthcare",
    title: "AI Diagnostic System",
    description: "Machine learning platform that improved diagnostic accuracy by 40% across 200+ hospitals.",
    metrics: [
      { value: "40%", label: "Accuracy Boost" },
      { value: "200+", label: "Hospitals" },
    ],
    gradient: "from-green-500 to-emerald-500",
    image: "🏥",
  },
  {
    category: "E-Commerce",
    title: "Recommendation Engine",
    description: "Personalization AI that increased conversion rates by 35% and average order value by 28%.",
    metrics: [
      { value: "35%", label: "Conversion Rate" },
      { value: "28%", label: "AOV Increase" },
    ],
    gradient: "from-purple-500 to-pink-500",
    image: "🛒",
  },
];

export const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="glow-orb-primary w-[400px] h-[400px] -bottom-40 -left-40 opacity-20" />
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
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Real Results,{" "}
            <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how we've helped industry leaders transform their 
            businesses with innovative technology solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="glass-card overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                {/* Image Area */}
                <div className={`h-48 bg-gradient-to-br ${study.gradient} relative flex items-center justify-center`}>
                  <span className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                    {study.image}
                  </span>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    {study.category}
                  </span>
                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-foreground">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};