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
import { Seo } from "@/components/Seo";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://nexmindsystems.com/#organization",
      name: "NexMindSystems",
      url: "https://nexmindsystems.com",
      logo: "https://nexmindsystems.com/nexmindsystems.png",
      description:
        "A software house and product engineering agency that builds custom web apps, AI automation, cloud platforms, and digital products.",
      areaServed: "Global",
      knowsAbout: [
        "custom software development",
        "web application development",
        "AI automation",
        "cloud migration",
        "MVP development",
        "product engineering",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "info@nexmindsystems.com",
          availableLanguage: ["en"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://nexmindsystems.com/#website",
      name: "NexMindSystems",
      alternateName: "NexMind Systems",
      url: "https://nexmindsystems.com",
      publisher: {
        "@id": "https://nexmindsystems.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://nexmindsystems.com/services?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ];

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
      <Seo
        title="NexMindSystems | Software Product Development Company"
        description="NexMindSystems is a software house for custom web apps, SaaS products, AI automation, cloud engineering, and product design that helps businesses win more clients."
        path="/"
        keywords="software house, software product development company, custom software development, web app development, AI automation, SaaS development, MVP development, cloud engineering, product engineering"
        schema={homeSchema}
      />
      <Navigation />
      <main>
        <HeroSection />
        <GsapAnimatedSection animation="fadeUp" duration={0.8}>
          <ServicesSection />
        </GsapAnimatedSection>
           <GsapAnimatedSection animation="fadeUp" duration={0.8}>
          <AboutSection />
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
        <CaseStudiesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;