import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Mail, Building2, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
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
      });
      onClose();
    }, 2000);
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[200] p-4">
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
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto outline-none"
            >
              <div className="glass-card-glow p-8 md:p-10">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>

                {isSuccess ? (
                  // Success State
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-white" />
                      </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Demo Booked Successfully!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll contact you shortly to confirm your demo session.
                    </p>
                  </motion.div>
                ) : (
                  // Form State
                  <>
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                        <Calendar className="w-4 h-4" />
                        Book Your Demo
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Let's Get Started
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and our team will reach out to schedule your personalized demo.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name & Email */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-primary" />
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      {/* Company & Phone */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-primary" />
                            Company Name *
                          </label>
                          <Input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" />
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            className="h-12"
                          />
                        </div>
                      </div>

                      {/* Preferred Date */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          Preferred Date & Time
                        </label>
                        <Input
                          type="datetime-local"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-primary" />
                          Additional Information
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your needs and what you'd like to see in the demo..."
                          rows={4}
                          className="resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full h-14 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Calendar className="w-5 h-5" />
                            Schedule My Demo
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        By submitting this form, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
                  </>
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
