import { ArrowRight, MapPin } from "lucide-react";
import { plans } from "@/data/Plan";
import { ScrollReveal } from "./ScrollReveal";

export const PlanSection = () => {
  return (
    <section id="plan" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal variant="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Academic <span className="text-primary">Plans</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My higher education plans and target universities after graduating
            from high school.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;

            return (
              <ScrollReveal
                key={plan.id}
                variant="slide-up"
                delay={idx * 150}
                className="h-full"
              >
                <div
                  className={`group glass rounded-2xl border-primary/30 hover:border-primary/50 p-6 card-hover relative overflow-hidden h-full flex flex-col justify-between`}
                >
                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`p-3 rounded-full bg-primary/10 w-fit mb-4`}
                    >
                      <Icon className={`h-7 w-7 text-primary`} />
                    </div>

                    <h3 className="text-lg font-semibold mb-1">
                      <span className="text-primary">{plan.university}</span>
                    </h3>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin size={14} />
                      <span>{plan.faculty}</span>
                    </div>

                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      {plan.major}
                    </h4>

                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {plan.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {plan.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-background/50 border border-border text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto pt-2">
                    <a
                      href={plan.more}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Learn More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
