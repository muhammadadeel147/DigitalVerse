import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@nexmindsystems.io", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-muted/30 border-t border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          <div className="flex items-center">
            <img
              src="/nexmindsystems.png"
              alt="NexMindSystems logo"
              className="h-20 md:h-26 w-auto max-w-[340px] object-contain"
              loading="lazy"
            />
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