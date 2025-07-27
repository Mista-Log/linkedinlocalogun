import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, Code, ExternalLink, Github } from "lucide-react";
import { teams } from "@/data/teams";
import LazyImage from "@/components/LazyImage"; // Import our LazyImage component

const Team = () => {
  const [visibleTeams, setVisibleTeams] = useState(3);

  const showMoreTeams = () => {
    setVisibleTeams(teams.length);
  };

  const showLessTeams = () => {
    setVisibleTeams(3);
  };

  return (
    <section id="teams" className="pt-14 bg-background/50">
      <div className="section-container">
        <h2 className="section-heading">The Team</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Meet the talented individuals behind this event. Each member brings unique skills and passion to make this event a success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.slice(0, visibleTeams).map((team, index) => (
            <div
              key={team.id}
              className="bg-card rounded-lg overflow-hidden shadow-sm border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                {/* Replace img with LazyImage */}
                <LazyImage
                  src={team.image}
                  alt={team.title}
                  imgClassName="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    {team.links.live && (
                      <a
                        href={team.links.live}
                        className="bg-background text-foreground p-2 rounded-full hover:bg-card transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${team.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {team.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {team.description}
                </p>
                <div className="flex flex-wrap gap-2">
                </div>
                <div className="flex gap-3 pt-2">
                  {team.links.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex gap-2 items-center"
                      asChild
                    >
                      <a
                        href={team.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${team.title}`}
                      >
                        <ExternalLink size={16} />
                        <span>See Profile</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {visibleTeams < teams.length ? (
            <Button
              variant="outline"
              onClick={showMoreTeams}
              className="group"
            >
              <span>See all team members</span>
              <Code
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          ) : (
            visibleTeams > 3 && (
              <Button
                variant="outline"
                onClick={showLessTeams}
                className="group"
              >
                <span>Show Less</span>
                <ChevronUp
                  size={16}
                  className="ml-2 group-hover:-translate-y-1 transition-transform"
                />
              </Button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
