import { Medal, Award, User, Trophy } from "lucide-react";
import { achievement } from "@/data/Achievement";

const categoryIcons = {
  medalist: Medal,
  award: Award,
  participant: User,
  champion: Trophy,
};

export const AchievementSection = () => {
  return (
    <section id="achievement" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Achievements</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Several achievements attained during high school.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievement.map((item, index) => {
            const Icon = categoryIcons[item.category];

            return (
              <div
                key={index}
                className="glass rounded-2xl border-primary/30 hover:border-primary/50 p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-muted-foreground text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
