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
import { ScrollReveal } from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <HowItWorksSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <FeaturesSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <TechStackSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <CaseStudiesSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <CTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;