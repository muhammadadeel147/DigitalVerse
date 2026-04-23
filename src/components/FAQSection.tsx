import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  items: FAQItem[];
  badge?: string;
  title?: string;
  description?: string;
  className?: string;
};

export const FAQSection = ({
  items,
  badge = "FAQ",
  title = "Frequently Asked Questions",
  description = "Quick answers about how we work, what we build, and what to expect when partnering with us.",
  className = "",
}: FAQSectionProps) => {
  return (
    <section className={`section-padding pt-8 ${className}`.trim()}>
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">{badge}</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">{title}</h2>
          <p className="mt-4 text-muted-foreground text-lg">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="glass-card mt-10 rounded-3xl p-3 md:p-5"
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border/70 px-3 md:px-4">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
