import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup, useScroll, useMotionValueEvent } from "framer-motion";
import gsap from "gsap";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { BookDemoModal } from "./BookDemoModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export const Navigation = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const handleBookDemo = () => {
    setIsBookDemoOpen(true);
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/" && activeSection === "home";
    }
    if (href === "/services") {
      return location.pathname === "/services";
    }
    if (href === "/about") {
      return location.pathname === "/about";
    }
    if (!href.startsWith("/#")) {
      return false;
    }
    const sectionId = href.replace("/#", "");
    return location.pathname === "/" && activeSection === sectionId;
  };

  // Hide/show navbar on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    // Stagger nav links on load
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-link",
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleOpenBookDemo = () => setIsBookDemoOpen(true);

    window.addEventListener("open-book-demo", handleOpenBookDemo as EventListener);

    return () => {
      window.removeEventListener("open-book-demo", handleOpenBookDemo as EventListener);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = navLinks
      .map((link) => (link.href.startsWith("/#") ? link.href.replace("/#", "") : null))
      .filter((value): value is string => Boolean(value));

    const updateActiveSection = () => {
      if (window.scrollY < 140) {
        setActiveSection("home");
        return;
      }

      let current = "home";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top;
        if (top <= 180) current = id;
      }

      if (current) setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [location.pathname]);

  return (
    <motion.header
      ref={navRef}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-2xl border-b border-border/60 shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <a href="/" className="group flex items-center">
          <img
            src="/nexmindsystems.png"
            alt="NexMindSystems logo"
            className="h-24 md:h-36 w-auto max-w-[240px] object-contain"
            loading="eager"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <LayoutGroup id="desktop-nav-tabs">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={isLinkActive(link.href) ? "page" : undefined}
                className={`nav-link relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group ${
                  isLinkActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/70"
                }`}
                style={{ opacity: 0 }}
              >
                {isLinkActive(link.href) ? (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-lg bg-secondary/70"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative z-10">{link.name}</span>
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary/80 transition-transform duration-300 origin-left rounded-full ${
                    isLinkActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            ))}
          </LayoutGroup>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="hero" size="sm" className="group text-sm" onClick={handleBookDemo}>
            Book a Demo
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl text-foreground hover:bg-muted/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border/60 overflow-hidden"
          >
            <div className="container-custom py-6 px-4">
              <nav className="flex flex-col gap-1 mb-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    aria-current={isLinkActive(link.href) ? "page" : undefined}
                    className={`transition-colors py-3 px-4 rounded-xl text-base font-medium ${
                      isLinkActive(link.href)
                        ? "text-primary bg-muted/60"
                        : "text-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-3 pt-4 border-t border-border/50"
              >
                <Button 
                  variant="hero" 
                  className="w-full justify-center group"
                  onClick={handleBookDemo}
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book Demo Modal */}
      <BookDemoModal isOpen={isBookDemoOpen} onClose={() => setIsBookDemoOpen(false)} />
    </motion.header>
  );
};