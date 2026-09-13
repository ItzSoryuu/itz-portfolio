import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievement", href: "#achievement" },
  { name: "Grade", href: "#grade" },
  { name: "Plan", href: "#plan" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // triggers when section is in active reading view
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    }, observerOptions);

    const sections = navItems.map((item) => {
      const el = document.querySelector(item.href);
      if (el) {
        observer.observe(el);
      }
      return el;
    });

    return () => {
      sections.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-transparent glass",
        isScrolled
          ? "py-3 backdrop-blur-md border-b border-border/40 shadow-xs"
          : "py-4"
      )}
    >
      <div className="container flex items-center justify-between md:grid md:grid-cols-3 md:px-24">
        {/* Logo - left */}
        <a
          className="text-2xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground hover:text-primary">itz</span>
            .
          </span>
        </a>

        {/* desktop nav - center */}
        <div className="hidden md:flex items-center justify-center">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
            {navItems.map((item, key) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "px-4 py-1.5 text-sm rounded-full transition-all duration-300",
                    isActive
                      ? "bg-primary text-primary-foreground font-medium shadow-md shadow-primary/20 scale-105"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Desktop ThemeToggle - right */}
        <div className="hidden md:flex items-center justify-end">
          <ThemeToggle />
        </div>

        {/* Mobile controls: ThemeToggle left, Hamburger right */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(true)}
            className="ml-3 text-foreground cursor-pointer p-1.5 rounded-lg hover:bg-foreground/5 transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Reading / Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-border/20 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary/70 via-primary to-purple-400 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(139,92,246,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu Portal (avoids parent backdrop-filter / containing block issues on scroll) */}
      {typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Mobile Dimmed Backdrop */}
            <div
              className={cn(
                "fixed inset-0 bg-black/60 backdrop-blur-[2px] z-50 transition-opacity duration-300 md:hidden",
                isMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              )}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Drawer */}
            <aside
              className={cn(
                "fixed top-0 right-0 bottom-0 h-screen h-dvh w-[75%] max-w-xs bg-background/95 backdrop-blur-xl border-l border-border/40 shadow-2xl z-50 flex flex-col p-6 transition-transform duration-300 ease-in-out md:hidden",
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              )}
              aria-label="Mobile Navigation"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border/40 mb-4">
                <span className="text-xl font-bold text-primary">
                  <span className="text-glow text-foreground">itz</span>.
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground p-1.5 rounded-lg hover:bg-foreground/5 transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col space-y-2 overflow-y-auto flex-1 py-2">
                {navItems.map((item, key) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={key}
                      href={item.href}
                      className={cn(
                        "text-base transition-all duration-200 px-4 py-2.5 rounded-xl font-medium",
                        isActive
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </aside>
          </>,
          document.body
        )}
    </nav>
  );
};
