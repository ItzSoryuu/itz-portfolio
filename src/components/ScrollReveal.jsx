import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ScrollReveal = ({
  children,
  variant = "slide-up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
  className = "",
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!once) {
            setIsIntersecting(false);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // triggers slightly before entering viewport fully
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && !once) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Base styles for hardware acceleration and transitions
  const baseStyle = {
    transitionProperty: "transform, opacity",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Premium, responsive easing
    willChange: "transform, opacity",
  };

  const getVariantStyles = () => {
    if (isIntersecting) {
      return {
        transform: "none",
        opacity: 1,
      };
    }

    switch (variant) {
      case "slide-up":
        return { transform: "translateY(40px)", opacity: 0 };
      case "slide-down":
        return { transform: "translateY(-40px)", opacity: 0 };
      case "slide-left":
        return { transform: "translateX(40px)", opacity: 0 };
      case "slide-right":
        return { transform: "translateX(-40px)", opacity: 0 };
      case "zoom-in":
        return { transform: "scale(0.92)", opacity: 0 };
      case "zoom-out":
        return { transform: "scale(1.08)", opacity: 0 };
      case "fade-in":
      default:
        return { transform: "none", opacity: 0 };
    }
  };

  return (
    <div
      ref={ref}
      style={{ ...baseStyle, ...getVariantStyles() }}
      className={cn("w-full", className)}
    >
      {children}
    </div>
  );
};
