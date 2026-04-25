import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "/about", label: "About NexMindSystems" },
  { icon: Github, href: "/services", label: "View Services" },
  { icon: Mail, href: "mailto:info@nexmindsystems.com", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/923052515148", label: "WhatsApp" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-custom px-4 py-4 md:px-8 md:py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:text-left md:gap-4">
            <img
              src="/nexmindsystems.png"
              alt="NexMindSystems logo"
              className="mx-auto md:mx-0 h-9 md:h-16 w-auto max-w-[170px] object-contain"
              loading="lazy"
            />
            <p className="mx-auto max-w-md text-xs leading-relaxed text-muted-foreground md:mx-0 md:text-sm">
              NexMindSystems is a software house for custom web apps, AI automation, cloud engineering, MVP development, and product design.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground md:justify-end">
              <a href="/services" className="rounded-full px-3 py-1.5 hover:bg-muted/70 hover:text-foreground transition-colors">
                Services
              </a>
              <a href="/about" className="rounded-full px-3 py-1.5 hover:bg-muted/70 hover:text-foreground transition-colors">
                About
              </a>
              <a href="/contact" className="rounded-full px-3 py-1.5 hover:bg-muted/70 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 md:justify-end">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-muted/40 text-muted-foreground transition-colors hover:border-border hover:bg-primary/10 hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-3.5 w-3.5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};