import { ArrowRight, MapPin } from "lucide-react";
import { plans } from "../data/Plan";

export const PlanSection = () => {
  return (
    <section id="plan" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Plan</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My higher education plans and target universities after graduating
          from high school.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.id}
                className={`group glass rounded-2xl border-primary/30 hover:border-primary/50 p-6 card-hover relative overflow-hidden`}
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

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
