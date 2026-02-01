import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";

const caseStudies = [
  {
    category: "FinTech",
    title: "Global Payment Platform",
    description: "Scaled from 100K to 50M daily transactions with 99.99% uptime and sub-100ms latency.",
    metrics: [
      { value: "500x", label: "Scale Increase" },
      { value: "99.99%", label: "Uptime" },
      { value: "<100ms", label: "Latency" },
    ],
    gradient: "from-blue-600 via-blue-500 to-cyan-500",
    bgPattern: "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
    image: "📊",
    color: "blue",
  },
  {
    category: "Healthcare",
    title: "AI Diagnostic System",
    description: "Machine learning platform that improved diagnostic accuracy by 40% across 200+ hospitals.",
    metrics: [
      { value: "40%", label: "Accuracy Boost" },
      { value: "200+", label: "Hospitals" },
      { value: "1M+", label: "Diagnostics" },
    ],
    gradient: "from-emerald-600 via-green-500 to-teal-500",
    bgPattern: "radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
    image: "🏥",
    color: "green",
  },
  {
    category: "E-Commerce",
    title: "Recommendation Engine",
    description: "Personalization AI that increased conversion rates by 35% and average order value by 28%.",
    metrics: [
      { value: "35%", label: "Conversion Rate" },
      { value: "28%", label: "AOV Increase" },
      { value: "10M+", label: "Products" },
    ],
    gradient: "from-purple-600 via-violet-500 to-pink-500",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
    image: "🛒",
    color: "purple",
  },
];

export const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="glow-orb-primary w-[500px] h-[500px] -top-40 right-1/4 opacity-20" />
        <div className="glow-orb-accent w-[600px] h-[600px] -bottom-40 -left-40 opacity-15" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Case Studies
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Real Results,{" "}
            <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped industry leaders transform their 
            businesses with innovative technology solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Card with Gradient Border Effect */}
              <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-border via-border/50 to-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${study.gradient} blur-xl`} />
                
                {/* Card Content */}
                <div className="relative h-full rounded-2xl bg-card/95 backdrop-blur-xl overflow-hidden">
                  {/* Decorative Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: study.bgPattern }}
                  />

                  {/* Header with Image and Category */}
                  <div className="relative p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      {/* Large Emoji Icon */}
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${study.gradient} p-[1px]`}>
                          <div className="w-full h-full rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-3xl">{study.image}</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Arrow Button */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${study.gradient} p-[1px] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer`}
                      >
                        <div className="w-full h-full rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center">
                          <ArrowUpRight className="w-5 h-5 text-foreground" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Category Badge */}
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-gradient-to-r ${study.gradient} text-white text-xs font-semibold uppercase tracking-wider shadow-lg`}>
                      {study.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative px-6 pb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {study.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {study.metrics.map((metric, idx) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                          className="relative"
                        >
                          <div className="rounded-xl bg-muted/50 p-3 border border-border/50 group-hover:border-primary/30 transition-colors">
                            <div className="flex items-center gap-1 mb-1">
                              <TrendingUp className="w-3 h-3 text-primary" />
                              <div className={`text-xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                                {metric.value}
                              </div>
                            </div>
                            <div className="text-[10px] text-muted-foreground font-medium leading-tight">
                              {metric.label}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Shine Effect */}
                  <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};