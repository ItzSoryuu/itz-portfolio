import { useState } from "react";

import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { AchievementSection } from "../components/AchievementSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { GradeSection } from "../components/GradeSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Intro } from "../components/Intro";

export const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <div className="min-h-screen text-foreground overflow-x-hidden">
          <StarBackground />
          <Navbar />

          <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <AchievementSection />
            <GradeSection />
            <ContactSection />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};