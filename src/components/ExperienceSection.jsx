import { experiences } from "@/data/Experience";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto px-4 md:px-32 relative z-10">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The common thread running through the journey that accompanied me during high school.
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.ongoing && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:col-start-2 md:pl-16"
                    }`}
                >
                  <div
                    className="glass p-6 rounded-2xl border-primary/30 hover:border-primary/50"
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.subtitle}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      {exp.tags.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="glass px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
