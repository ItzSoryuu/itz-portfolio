import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
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
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/75 backdrop-blur-md border-b border-border/40 shadow-xs"
          : "py-5 bg-transparent"
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
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="ml-4 text-foreground z-50 cursor-pointer p-1"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile overlay menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col text-center space-y-8 text-xl">
            {navItems.map((item, key) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "text-lg transition-all duration-300 px-6 py-2 rounded-full",
                    isActive
                      ? "text-primary font-bold bg-primary/10"
                      : "text-foreground/80 hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reading / Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-border/20 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary/70 via-primary to-purple-400 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(139,92,246,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};
