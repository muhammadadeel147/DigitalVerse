import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Cpu, Shield, Zap, Database } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to solve your unique business challenges.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable, resilient cloud infrastructure designed for enterprise performance and security.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics that transform data into actionable insights.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security frameworks that protect your digital assets and ensure compliance.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    description: "Streamlined CI/CD pipelines and infrastructure automation for faster, reliable deployments.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "End-to-end data pipelines and analytics platforms that unlock the power of your data.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="glow-orb-primary w-[400px] h-[400px] -top-40 right-0 opacity-20" />
        <div className="glow-orb-accent w-[300px] h-[300px] bottom-0 left-0 opacity-20" />
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Enterprise Solutions That{" "}
            <span className="gradient-text">Deliver Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end technology services 
            that accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};