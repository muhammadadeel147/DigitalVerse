import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Cloud, Cpu, Shield, Zap, Database, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Transform your business vision into reality with bespoke software solutions tailored to your unique requirements.",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Web Applications", "Mobile Apps", "Enterprise Systems"],
    stats: { value: "200+", label: "Projects Delivered" }
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & Migration",
    description: "Scale seamlessly with cloud-native architecture designed for performance, reliability, and cost-efficiency.",
    gradient: "from-purple-500 to-pink-500",
    features: ["AWS/Azure/GCP", "Microservices", "Auto-scaling"],
    stats: { value: "99.9%", label: "Uptime SLA" }
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes and unlock predictive insights from your data.",
    gradient: "from-orange-500 to-red-500",
    features: ["ML Models", "NLP Solutions", "Computer Vision"],
    stats: { value: "40%", label: "Efficiency Gain" }
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Protect your business with comprehensive security frameworks and ensure compliance with industry regulations.",
    gradient: "from-green-500 to-emerald-500",
    features: ["Penetration Testing", "SOC 2", "HIPAA/GDPR"],
    stats: { value: "100%", label: "Compliance Rate" }
  },
  {
    icon: Zap,
    title: "DevOps & CI/CD",
    description: "Accelerate development cycles with automated pipelines, continuous integration, and infrastructure as code.",
    gradient: "from-yellow-500 to-orange-500",
    features: ["Docker/K8s", "Jenkins/GitHub Actions", "Monitoring"],
    stats: { value: "10x", label: "Faster Deployments" }
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Build robust data pipelines and analytics platforms that transform raw data into strategic business insights.",
    gradient: "from-indigo-500 to-purple-500",
    features: ["ETL Pipelines", "Data Warehousing", "BI Dashboards"],
    stats: { value: "5PB+", label: "Data Processed" }
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="glow-orb-primary w-[500px] h-[500px] -top-40 right-0 opacity-10" />
        <div className="glow-orb-accent w-[400px] h-[400px] bottom-0 left-0 opacity-10" />
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Zap className="w-4 h-4" />
            Our Core Services
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 leading-tight">
            Enterprise Solutions That{" "}
            <span className="gradient-text">Drive Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive technology services 
            that empower businesses to thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass-card p-8 h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-3 relative overflow-hidden border-2 border-transparent hover:border-primary/20">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-2xl opacity-20`} />
                </div>

                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-xl relative z-10`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-6 border-t border-border/50 relative z-10">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{service.stats.value}</div>
                    <div className="text-xs text-muted-foreground">{service.stats.label}</div>
                  </div>
                  
                  {/* Learn More Link */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-primary font-semibold text-sm group/btn"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Hover indicator */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient}`}
                  initial={{ width: "0%" }}
                  animate={hoveredIndex === index ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-card-glow p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Don't See What You Need?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We specialize in custom solutions. Tell us your challenge and we'll craft the perfect technology solution for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:shadow-glow transition-all"
              onClick={() => {
                const contactSection = document.getElementById('about');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};