import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const fullText = "Hi, I'm Hanif";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10 grid grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-foreground">
              {typedText.slice(0, 8)}
            </span>

            <span className="text-primary text-glow">
              {typedText.slice(8)}
            </span>

            <span className="inline-block w-[2px] h-[1em] ml-1 bg-primary animate-pulse align-middle" />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a high school student with an interest in technology and science. I have been using various technologies such as React, TailwindCSS, Next.js, etc.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button flex w-fit gap-2">
              View My Work
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in animation-delay-300">
          {/* Profile Image */}
          <div className="relative max-w-60 mx-auto">
            <div
              className="absolute inset-0
              rounded-3xl bg-linear-to-br
              from-primary/30 via-transparent
              to-primary/10 blur-2xl animate-pulse"
            />
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img
                src="/profile-photo.jpg"
                alt="Hanif"
                className="w-full aspect-4/5 object-cover rounded-2xl"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Do not disturb
                  </span>
                </div>
              </div>
              {/* Stats Badge */}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                <div className="text-xl flex font-bold text-primary">17</div>
                <div className="text-xs flex text-muted-foreground">
                  Years old.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
