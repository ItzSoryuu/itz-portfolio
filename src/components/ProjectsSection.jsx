import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/Projects";
import { ScrollReveal } from "./ScrollReveal";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal variant="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary"> Projects </span> — Unfinished
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              variant="zoom-in"
              delay={idx * 100}
              className="h-full"
            >
              <div
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col justify-between border border-border"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={`${project.id}-${tag}`} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                          {tag}
                        </span> 
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrlExist && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrlExist && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="slide-up" delay={200}>
          <div className="text-center mt-12">
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              href="https://github.com/ItzSoryuu"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
