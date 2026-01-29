import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TechStackSection } from "@/components/TechStackSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { GsapAnimatedSection } from "@/components/GsapAnimatedSection";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Refresh ScrollTrigger after component mount
    ScrollTrigger.refresh();
    
    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <GsapAnimatedSection animation="fadeUp" duration={0.8}>
          <ServicesSection />
        </GsapAnimatedSection>
        <GsapAnimatedSection animation="fadeUp" duration={0.8} delay={0.1}>
          <HowItWorksSection />
        </GsapAnimatedSection>
        <GsapAnimatedSection animation="fadeUp" duration={0.8}>
          <FeaturesSection />
        </GsapAnimatedSection>
        <GsapAnimatedSection animation="scale" duration={0.8}>
          <TechStackSection />
        </GsapAnimatedSection>
        <GsapAnimatedSection animation="fadeUp" duration={0.8}>
          <CaseStudiesSection />
        </GsapAnimatedSection>
        <GsapAnimatedSection animation="fadeUp" duration={0.8}>
          <TestimonialsSection />
        </GsapAnimatedSection>
        <GsapAnimatedSection animation="fadeUp" duration={0.8}>
          <AboutSection />
        </GsapAnimatedSection>
        <GsapAnimatedSection animation="scale" duration={0.8}>
          <CTASection />
        </GsapAnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;