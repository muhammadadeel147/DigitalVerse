import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Glow Orbs */}
        <div className="glow-orb-primary w-[600px] h-[600px] -top-40 -left-40 animate-pulse-glow" />
        <div className="glow-orb-accent w-[500px] h-[500px] top-1/2 -right-40 animate-pulse-glow" style={{ animationDelay: "-2s" }} />
        <div className="glow-orb-primary w-[400px] h-[400px] bottom-0 left-1/3 animate-pulse-glow" style={{ animationDelay: "-4s" }} />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4" />
              Trusted by Fortune 500 Companies Worldwide
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            Enterprise Software Solutions{" "}
            <span className="gradient-text">Tailored For Your Industry</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.15 }}
  className="
    text-lg 
    md:text-xl 
    text-muted-foreground 
    max-w-4xl 
    mx-auto 
    mb-10 
    leading-relaxed
  "
>
  We help enterprises design, build, and scale high-performance web and mobile
  applications — from MVPs to AI-powered platforms.
</motion.p>

          {/* Industry Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            {["Healthcare", "FinTech", "E-Commerce", "Logistics", "Manufacturing"].map((industry, index) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              variant="hero" 
              size="xl"
              className="group"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              className="group"
              onClick={() => {
                const caseStudiesSection = document.getElementById('case-studies');
                caseStudiesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Success Stories
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center items-center text-sm text-muted-foreground mb-16"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>4-8 Week Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>24/7 Support Included</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20"
          >
            {[
              { value: "250+", label: "Projects Delivered", icon: CheckCircle2 },
              { value: "50+", label: "Enterprise Clients", icon: TrendingUp },
              { value: "15+", label: "Industries Served", icon: Zap },
              { value: "98%", label: "Client Satisfaction", icon: Shield },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Project Showcase */}
        <div className="relative mt-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="glass-card-glow p-4 md:p-6 rounded-3xl"
          >
            <div className="aspect-video bg-gradient-to-br from-secondary/50 via-background to-muted/50 rounded-2xl flex items-center justify-center relative overflow-hidden border border-border/50 group">
              {/* Dashboard Analytics Image */}
              <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000&auto=format&fit=crop&q=80" 
                  alt="Analytics Dashboard - Custom Enterprise Software"
                  className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
              </motion.div>
              
              {/* Overlay Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-xl"
              >
                <p className="text-sm font-medium text-foreground">
                  Real-time Analytics Platform
                </p>
                <p className="text-xs text-muted-foreground">Healthcare • 2M+ Users</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl hidden lg:block shadow-2xl border border-border/50"
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Healthcare Portal</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Live • 50K Active Sessions
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl hidden lg:block shadow-2xl border border-border/50"
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Finance Platform</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-blue-500" />
                  $2.5B+ Transactions Processed
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/2 -left-8 glass-card p-3 rounded-xl hidden xl:block shadow-2xl border border-border/50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">AI Integration</div>
                <div className="text-xs text-muted-foreground">40% Faster Processing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};