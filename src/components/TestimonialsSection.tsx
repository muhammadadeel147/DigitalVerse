import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NexusFlow transformed our entire tech infrastructure. The team's expertise and dedication are unmatched. We've seen a 300% improvement in system performance.",
    author: "Sarah Chen",
    role: "CTO, TechCorp Global",
    avatar: "SC",
    rating: 5,
  },
  {
    quote: "Working with NexusFlow was a game-changer. They delivered a complex AI solution in half the expected time, with exceptional quality and documentation.",
    author: "Michael Rodriguez",
    role: "VP Engineering, FinanceAI",
    avatar: "MR",
    rating: 5,
  },
  {
    quote: "The scalability and reliability of the platform NexusFlow built for us is remarkable. We've scaled from 10K to 2M users without a single hiccup.",
    author: "Emma Thompson",
    role: "CEO, ScaleUp Inc",
    avatar: "ET",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Loved by{" "}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it—hear from the teams 
            who've transformed their businesses with NexusFlow.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="glass-card p-8 h-full relative">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};