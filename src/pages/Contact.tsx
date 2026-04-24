import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

type ContactForm = {
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  fullName: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact NexMindSystems",
        url: "https://nexmindsystems.com/contact",
        description:
          "Get in touch with NexMindSystems for enterprise software delivery, cloud architecture, AI, security, and data engineering services.",
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "NexMindSystems",
        url: "https://nexmindsystems.com",
        logo: "https://nexmindsystems.com/nexmindsystems.png",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "hello@nexmindsystems.io",
            availableLanguage: ["en"],
          },
        ],
      },
    ],
    [],
  );

  const handleChange = (key: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const mailSubject = encodeURIComponent(`[Website Contact] ${form.subject.trim()}`);
    const mailBody = encodeURIComponent(
      [
        `Name: ${form.fullName.trim()}`,
        `Email: ${form.email.trim()}`,
        `Company: ${form.company.trim() || "Not provided"}`,
        "",
        "Message:",
        form.message.trim(),
      ].join("\n"),
    );

    window.location.href = `mailto:hello@nexmindsystems.io?subject=${mailSubject}&body=${mailBody}`;

    toast.success("Your email draft is ready. Please send it from your mail app.");
    setForm(initialForm);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Seo
        title="Contact NexMindSystems | Enterprise Engineering Team"
        description="Contact NexMindSystems to discuss cloud, AI, security, and product engineering initiatives. Share your goals and get a practical delivery plan."
        path="/contact"
        keywords="contact NexMindSystems, enterprise software consultation, cloud engineering contact, AI development services contact"
        schema={contactSchema}
      />
      <Navigation />

      <main>
        <section className="section-padding pt-36 md:pt-40 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="glow-orb-primary w-[460px] h-[460px] -top-24 -left-16 opacity-20" />
            <div className="glow-orb-accent w-[380px] h-[380px] top-1/3 -right-10 opacity-20" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-4xl"
            >
              <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Contact Us
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.04]">
                Talk to the Team Building
                <span className="gradient-text"> Enterprise Velocity</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                Share your goals, constraints, and timeline. We will map the right technical path for delivery,
                modernization, or scale.
              </p>
            </motion.div>

            <div className="mt-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-6 md:gap-8 items-stretch">
              <motion.form
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                onSubmit={handleSubmit}
                className="glass-card-glow rounded-3xl p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold">Send Us a Message</h2>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                  We typically respond within one business day.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
                      Full Name*
                    </label>
                    <Input
                      id="fullName"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={(event) => handleChange("fullName", event.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Work Email*
                    </label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="company" className="mb-2 block text-sm font-medium">
                    Company
                  </label>
                  <Input
                    id="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(event) => handleChange("company", event.target.value)}
                    placeholder="Your company"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject*
                  </label>
                  <Input
                    id="subject"
                    value={form.subject}
                    onChange={(event) => handleChange("subject", event.target.value)}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message*
                  </label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(event) => handleChange("message", event.target.value)}
                    placeholder="Briefly describe your project goals, timelines, and current blockers."
                    className="min-h-[140px]"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Opening Mail..." : "Send Message"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.form>

              <motion.aside
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.14 }}
                className="glass-card rounded-3xl p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold">Direct Channels</h2>
                <p className="mt-2 text-muted-foreground">
                  Pick the channel that fits your workflow.
                </p>

                <div className="mt-6 space-y-4">
                  <a href="mailto:hello@nexmindsystems.io" className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/35 p-4 hover:border-primary/40 transition-colors">
                    <Mail className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">hello@nexmindsystems.io</p>
                    </div>
                  </a>

                  <a href="tel:+923052515148" className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/35 p-4 hover:border-primary/40 transition-colors">
                    <Phone className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-muted-foreground">+92 305 2515148</p>
                    </div>
                  </a>

                  <a href="https://wa.me/923052515148" target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/35 p-4 hover:border-primary/40 transition-colors">
                    <MessageCircleMore className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+92 305 2515148</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Clock3 className="h-4 w-4 text-primary" />
                    Availability
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">Available 24/7. Call or WhatsApp: +92 305 2515148.</p>
                </div>

                <div className="mt-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    Global Delivery
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">Remote-first teams supporting clients across multiple time zones.</p>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
