import { useEffect, useState, useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const fullText = "Hi, I'm Hanif";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    let timeout;

    if (!isDeleting && typedText === fullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && typedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    } else {
      timeout = setTimeout(() => {
        setTypedText((prev) =>
          isDeleting
            ? fullText.slice(0, prev.length - 1)
            : fullText.slice(0, prev.length + 1)
        );
      }, isDeleting ? 45 : 80);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setCardTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 md:pt-0"
    >
      <div className="container max-w-4xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Profile Image - shows on top on mobile */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative animate-fade-in animation-delay-300 order-1 md:order-2 flex justify-center perspective-[1000px]"
        >
          {/* Profile Image */}
          <div
            className="relative max-w-64 w-full transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute -inset-1 rounded-3xl bg-linear-to-r from-primary/50 via-purple-500/30 to-primary/50 blur-xl opacity-75 animate-pulse"
            />
            <div className="relative glass rounded-3xl p-3 glow-border">
              <img
                src="/profile-photo.jpg"
                alt="Hanif"
                className="w-full aspect-4/5 object-cover rounded-2xl shadow-md"
              />

              {/* Floating Status Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2.5 animate-float shadow-lg backdrop-blur-md border-primary/40">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-medium text-foreground">
                    Open to collaborate
                  </span>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-2.5 animate-float animation-delay-500 shadow-lg backdrop-blur-md border-primary/40">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <div>
                    <div className="text-base font-bold text-primary leading-tight">High School</div>
                    <div className="text-[11px] text-muted-foreground leading-tight">
                      Student & Dev
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 order-2 md:order-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-xs text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span>Welcome to my universe</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-foreground">
              {typedText.slice(0, 8)}
            </span>

            <span className="text-primary text-glow">
              {typedText.slice(8)}
            </span>

            <span className="inline-block w-[2px] h-[1em] ml-1 bg-primary animate-pulse align-middle" />
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I am a high school student with a profound passion for technology, web development, and STEM sciences. Constantly exploring modern technologies like React, Next.js, and Tailwind CSS to craft creative digital experiences.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button flex items-center gap-2 shadow-lg shadow-primary/25">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full glass text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:scale-105 active:scale-95 text-sm flex items-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-1"> Scroll Down </span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  );
};
