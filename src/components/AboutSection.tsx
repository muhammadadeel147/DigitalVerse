import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Award, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "Team Members" },
  { icon: Globe, value: "30+", label: "Countries Served" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: MapPin, value: "5", label: "Global Offices" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="glow-orb-accent w-[400px] h-[400px] top-1/4 right-0 opacity-15" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About NexusFlow
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Pioneering the Future of{" "}
              <span className="gradient-text">Enterprise Software</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2018, NexusFlow has grown from a small startup to a global 
                technology leader, serving Fortune 500 companies and ambitious startups alike.
              </p>
              <p>
                Our mission is simple: democratize enterprise-grade technology and empower 
                organizations to build software that scales. We believe in combining 
                cutting-edge innovation with rock-solid reliability.
              </p>
              <p>
                With offices spanning San Francisco, London, Singapore, and beyond, our 
                diverse team brings together the brightest minds in software engineering, 
                AI research, and cloud architecture.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card-glow p-8 rounded-3xl">
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Abstract Team Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-8 w-full h-full">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                        className={`rounded-2xl ${
                          i % 3 === 0 
                            ? "bg-gradient-to-br from-primary/40 to-primary/20" 
                            : i % 2 === 0 
                            ? "bg-gradient-to-br from-accent/40 to-accent/20"
                            : "bg-muted/50"
                        } flex items-center justify-center`}
                      >
                        <div className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass-card p-4 rounded-2xl floating-element"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Top Rated</div>
                  <div className="text-xs text-muted-foreground">G2 & Gartner</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};