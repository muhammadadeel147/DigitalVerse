import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "blur";
  delay?: number;
  duration?: number;
  stagger?: boolean;
  staggerSelector?: string;
  staggerAmount?: number;
}

export const GsapAnimatedSection = ({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 1,
  stagger = false,
  staggerSelector = ".gsap-item",
  staggerAmount = 0.1,
}: GsapAnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const getAnimationConfig = () => {
      switch (animation) {
        case "fadeUp":
          return { from: { opacity: 0, y: 80 }, to: { opacity: 1, y: 0 } };
        case "fadeIn":
          return { from: { opacity: 0 }, to: { opacity: 1 } };
        case "slideLeft":
          return { from: { opacity: 0, x: -100 }, to: { opacity: 1, x: 0 } };
        case "slideRight":
          return { from: { opacity: 0, x: 100 }, to: { opacity: 1, x: 0 } };
        case "scale":
          return { from: { opacity: 0, scale: 0.8 }, to: { opacity: 1, scale: 1 } };
        case "blur":
          return { 
            from: { opacity: 0, filter: "blur(10px)" }, 
            to: { opacity: 1, filter: "blur(0px)" } 
          };
        default:
          return { from: { opacity: 0, y: 80 }, to: { opacity: 1, y: 0 } };
      }
    };

    const config = getAnimationConfig();

    const ctx = gsap.context(() => {
      if (stagger) {
        const items = element.querySelectorAll(staggerSelector);
        if (items.length) {
          gsap.fromTo(
            items,
            { ...config.from },
            {
              ...config.to,
              duration,
              delay,
              ease: "power3.out",
              stagger: staggerAmount,
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      } else {
        gsap.fromTo(
          element,
          { ...config.from },
          {
            ...config.to,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, element);

    return () => ctx.revert();
  }, [animation, delay, duration, stagger, staggerSelector, staggerAmount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

// Horizontal scroll section
interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export const HorizontalScroll = ({ children, className = "" }: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    if (!container || !scrollElement) return;

    const ctx = gsap.context(() => {
      const scrollWidth = scrollElement.scrollWidth - container.offsetWidth;

      gsap.to(scrollElement, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={scrollRef} className="flex">
        {children}
      </div>
    </div>
  );
};

// Parallax wrapper
interface ParallaxWrapperProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxWrapper = ({ children, className = "", speed = 0.5 }: ParallaxWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        yPercent: -30 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

// Text reveal animation
interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export const TextReveal = ({ text, className = "", tag: Tag = "span" }: TextRevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const words = text.split(" ");
    element.innerHTML = words
      .map(
        (word) =>
          `<span class="gsap-word-wrapper" style="display: inline-block; overflow: hidden;"><span class="gsap-word-inner" style="display: inline-block;">${word}</span></span>`
      )
      .join(" ");

    const ctx = gsap.context(() => {
      const innerSpans = element.querySelectorAll(".gsap-word-inner");

      gsap.fromTo(
        innerSpans,
        {
          y: "110%",
          rotateX: -80,
        },
        {
          y: "0%",
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.04,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [text]);

  return <Tag ref={ref as any} className={className} />;
};

// Counter animation
interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export const Counter = ({ end, suffix = "", prefix = "", className = "", duration = 2 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const obj = { value: 0 };

      gsap.to(obj, {
        value: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          element.textContent = `${prefix}${Math.round(obj.value).toLocaleString()}${suffix}`;
        },
      });
    }, element);

    return () => ctx.revert();
  }, [end, suffix, prefix, duration]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
};

// Magnetic button effect
interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const Magnetic = ({ children, className = "", strength = 0.4 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
