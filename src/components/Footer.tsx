import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@digitalverse.io", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-muted/30 border-t border-border/50">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img
              src="/DigitalVerse1.png"
              alt="DigitalVerse"
              className="w-10 h-10 rounded-xl object-contain bg-white p-1 ring-1 ring-border/40"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span className="font-bold text-lg text-foreground block">DigitalVerse</span>
              <p className="text-xs text-muted-foreground">© 2026 All rights reserved.</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};