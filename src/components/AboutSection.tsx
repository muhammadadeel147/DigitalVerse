import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, TrendingUp, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "10K+", label: "Active Users" },
  { icon: TrendingUp, value: "99.9%", label: "Uptime" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Zap, value: "2M+", label: "API Calls Daily" },
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
              About DigitalVerse
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Building the Infrastructure for{" "}
              <span className="gradient-text">Next-Gen Applications</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We empower developers and enterprises to build scalable, intelligent 
                applications with our cutting-edge platform. From AI-powered analytics 
                to cloud-native architecture, we provide the tools that modern teams need.
              </p>
              <p>
                Our platform handles millions of requests daily, serving organizations 
                that demand reliability, performance, and innovation. We're not just 
                building software—we're shaping how the world builds software.
              </p>
              <p>
                Every line of code, every API endpoint, and every feature is crafted with 
                obsessive attention to developer experience and enterprise-grade security. 
                Join thousands of teams who trust DigitalVerse to power their mission-critical applications.
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

          {/* Tech Infrastructure Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card-glow p-8 rounded-3xl">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-primary/10"
                    />
                  </pattern>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" className="text-primary" stopColor="currentColor" stopOpacity="0.8" />
                    <stop offset="100%" className="text-accent" stopColor="currentColor" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" className="text-accent" stopColor="currentColor" stopOpacity="0.6" />
                    <stop offset="100%" className="text-primary" stopColor="currentColor" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                <rect width="400" height="400" fill="url(#grid)" />

                {/* Central Hub */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="40"
                  fill="url(#gradient1)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />

                {/* Orbiting Nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const x = 200 + Math.cos((angle * Math.PI) / 180) * 120;
                  const y = 200 + Math.sin((angle * Math.PI) / 180) * 120;
                  return (
                    <g key={angle}>
                      {/* Connection Lines */}
                      <motion.line
                        x1="200"
                        y1="200"
                        x2={x}
                        y2={y}
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary/30"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
                      />
                      {/* Nodes */}
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="20"
                        fill="url(#gradient2)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                      />
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-accent"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                      />
                    </g>
                  );
                })}

                {/* Outer Ring */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="160"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="text-primary/20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { 
                    scale: 1, 
                    opacity: 1,
                    rotate: 360 
                  } : {}}
                  transition={{ 
                    scale: { duration: 0.6, delay: 0.4 },
                    opacity: { duration: 0.6, delay: 0.4 },
                    rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ transformOrigin: "200px 200px" }}
                />

                {/* Data Packets - Animated dots */}
                {[45, 135, 225, 315].map((angle, i) => {
                  const x = 200 + Math.cos((angle * Math.PI) / 180) * 160;
                  const y = 200 + Math.sin((angle * Math.PI) / 180) * 160;
                  return (
                    <motion.circle
                      key={`packet-${angle}`}
                      r="4"
                      fill="currentColor"
                      className="text-accent"
                      initial={{ opacity: 0 }}
                      animate={isInView ? {
                        opacity: [0, 1, 1, 0],
                        cx: [200, x, 200],
                        cy: [200, y, 200],
                      } : {}}
                      transition={{
                        duration: 4,
                        delay: 1 + i * 0.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass-card p-4 rounded-2xl floating-element"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Enterprise Ready</div>
                  <div className="text-xs text-muted-foreground">SOC 2 Certified</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};