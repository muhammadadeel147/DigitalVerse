import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import gsap from "gsap";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Magnetic } from "./GsapAnimatedSection";
import { BookDemoModal } from "./BookDemoModal";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "About", href: "#about" },
];

export const Navigation = () => {
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
          ? "bg-background/70 backdrop-blur-2xl border-b border-border/40 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <Magnetic strength={0.15}>
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <img
                src="/DigitalVerse1.png"
                alt="DigitalVerse"
                className="w-10 h-10 md:w-11 md:h-11 rounded-xl object-contain bg-white p-1 ring-1 ring-border/50 shadow-sm group-hover:shadow-glow transition-all duration-300"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </div>
            <span className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
              DigitalVerse
            </span>
          </a>
        </Magnetic>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              style={{ opacity: 0 }}
            >
              {link.name}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="hero" size="sm" className="group text-sm" onClick={handleBookDemo}>
            Book a Demo
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
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
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border/50 overflow-hidden"
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
                    className="text-foreground hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-muted/50 text-base font-medium"
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