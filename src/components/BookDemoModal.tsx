import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/sonner";
import { submitLeadForm } from "@/lib/leadForms";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal = ({ isOpen, onClose }: BookDemoModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const todayLocal = (() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  })();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitLeadForm("book_demo", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        phone: formData.phone.trim(),
        preferredDate: [formData.preferredDate.trim(), formData.preferredTime.trim()].filter(Boolean).join(" "),
        message: formData.message.trim(),
        website: "",
      });

      setIsSuccess(true);

      // Reset after showing success message
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          preferredDate: "",
          preferredTime: "",
        });
        onClose();
      }, 2000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to submit your demo request right now.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

  // Prevent background scroll when modal is open and restore on close
  useEffect(() => {
    if (isOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return;
  }, [isOpen]);

  // Focus the modal when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => modalRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-xl z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[200] p-4 sm:p-6">
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label="Book a demo"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto outline-none"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-background/95 shadow-[0_40px_140px_-40px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 z-20 rounded-full border border-border/60 bg-background/90 p-2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Close booking modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="grid min-h-[480px] place-items-center px-6 py-14 sm:px-10"
                  >
                    <div className="mx-auto w-full max-w-xl rounded-[1.75rem] border border-border/70 bg-card/80 p-8 text-center shadow-xl">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/30"
                      >
                        <CheckCircle2 className="h-10 w-10" />
                      </motion.div>
                      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                        <Sparkles className="h-4 w-4" />
                        Request sent
                      </p>
                      <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                        Your demo request is in motion.
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        We&apos;ll follow up shortly to confirm the best time and tailor the session around your goals.
                      </p>
                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-border/60 bg-muted/40 p-4 text-left">
                          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                            <Clock3 className="h-4 w-4 text-primary" />
                            Typical response time
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">Within one business day.</p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-muted/40 p-4 text-left">
                          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            What happens next
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">We send a short agenda and calendar hold.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                    <aside className="relative hidden overflow-hidden bg-[linear-gradient(180deg,hsl(var(--primary))_0%,hsl(var(--accent))_100%)] px-6 py-10 text-primary-foreground sm:px-8 sm:py-12 lg:block">
                      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:auto,auto,28px_28px,28px_28px]" />
                      <div className="relative">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                          <Calendar className="h-4 w-4" />
                          Book a strategy call
                        </div>

                        <h2 className="mt-6 max-w-md text-3xl font-black tracking-tight sm:text-4xl">
                          Let&apos;s shape a demo that fits your product, not the other way around.
                        </h2>

                        <p className="mt-4 max-w-md text-sm leading-6 text-white/85 sm:text-base">
                          Share a few details and we&apos;ll prepare a focused session around your roadmap, technical constraints, and the outcomes you want to unlock.
                        </p>

                        <div className="mt-8 space-y-3">
                          {["30-minute discovery call with a senior product lead", "Tailored walkthrough based on your industry and scope", "Follow-up plan and next steps within one business day"].map((item) => (
                            <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                              <div className="mt-0.5 rounded-full bg-white/15 p-1.5">
                                <ArrowRight className="h-3.5 w-3.5" />
                              </div>
                              <p className="text-sm leading-6 text-white/90">{item}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                              <Clock3 className="h-4 w-4" />
                              Fast turnaround
                            </div>
                            <p className="mt-1 text-sm text-white/80">Most requests are answered within 24 hours.</p>
                          </div>
                          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                              <ShieldCheck className="h-4 w-4" />
                              Secure by default
                            </div>
                            <p className="mt-1 text-sm text-white/80">We keep your details private and only use them to prepare your call.</p>
                          </div>
                        </div>
                      </div>
                    </aside>

                    <div className="bg-card/90 px-4 py-7 sm:px-8 sm:py-12">
                      <div className="mb-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                          <Sparkles className="h-4 w-4" />
                          Tailored demo request
                        </div>
                        <h3 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">
                          Tell us what you&apos;re building.
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                          The more context you provide, the more useful the call will be. We&apos;ll use it to match you with the right team.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid gap-5 md:grid-cols-2">
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <Building2 className="h-4 w-4 text-primary" />
                              Full Name *
                            </label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                              className="h-12 rounded-xl"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <Mail className="h-4 w-4 text-primary" />
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@company.com"
                              required
                              className="h-12 rounded-xl"
                            />
                          </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <Building2 className="h-4 w-4 text-primary" />
                              Company Name
                            </label>
                            <Input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Acme Inc."
                              className="h-12 rounded-xl"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <Phone className="h-4 w-4 text-primary" />
                              Phone Number
                            </label>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 123-4567"
                              className="h-12 rounded-xl"
                            />
                          </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <Calendar className="h-4 w-4 text-primary" />
                              Preferred Date
                            </label>
                            <Input
                              type="date"
                              name="preferredDate"
                              value={formData.preferredDate}
                              onChange={handleChange}
                              min={todayLocal}
                              className="h-12 rounded-xl"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <Clock3 className="h-4 w-4 text-primary" />
                              Preferred Time
                            </label>
                            <Input
                              type="time"
                              name="preferredTime"
                              value={formData.preferredTime}
                              onChange={handleChange}
                              step={900}
                              className="h-12 rounded-xl"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                            <MessageSquare className="h-4 w-4 text-primary" />
                            Additional Information
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your goals, timeline, and any must-have integrations..."
                            rows={4}
                            className="resize-none rounded-xl"
                          />
                        </div>

                        <Button
                          type="submit"
                          variant="hero"
                          size="lg"
                          className="h-14 w-full text-base sm:text-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                              />
                              Processing...
                            </>
                          ) : (
                            <>
                              <Calendar className="h-5 w-5" />
                              Schedule My Demo
                            </>
                          )}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          By submitting this form, you agree to our Terms of Service and Privacy Policy.
                        </p>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modalContent, document.body);
};
