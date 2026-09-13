import { useEffect, useState } from "react";

export const GlowBlobs = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) {
        // Slow down movement for organic feeling
        setMousePos({
          x: (e.clientX - window.innerWidth / 2) * 0.04,
          y: (e.clientY - window.innerHeight / 2) * 0.04,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-30 dark:opacity-20">
      {/* Glow Blob 1 */}
      <div
        className="absolute rounded-full bg-primary/20 blur-[120px] transition-transform duration-1000 ease-out animate-drift"
        style={{
          width: "40vw",
          height: "40vw",
          minWidth: "300px",
          minHeight: "300px",
          top: "15%",
          left: "5%",
          transform: isMobile 
            ? "translate(0px, 0px)" 
            : `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
        }}
      />
      {/* Glow Blob 2 */}
      <div
        className="absolute rounded-full bg-indigo-500/10 blur-[130px] transition-transform duration-1000 ease-out animate-drift-reverse"
        style={{
          width: "45vw",
          height: "45vw",
          minWidth: "350px",
          minHeight: "350px",
          bottom: "15%",
          right: "5%",
          transform: isMobile 
            ? "translate(0px, 0px)" 
            : `translate(${-mousePos.x * 1.2}px, ${-mousePos.y * 1.2}px)`,
        }}
      />
    </div>
  );
};
