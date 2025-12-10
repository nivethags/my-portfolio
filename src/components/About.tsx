import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, well-structured code following best practices",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and solve complex problems",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analytical approach to debugging and finding efficient solutions",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Effective communication and collaboration with cross-functional teams",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid xl:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl xl:text-3xl font-bold mb-6">
                Passionate Full-Stack Developer
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm passionate about building user-friendly applications that solve real-world 
                  problems. With a strong foundation in both frontend and backend development, 
                  I enjoy creating seamless experiences from the user interface to the database.
                </p>
                <p>
                  My enthusiasm for learning new technologies drives me to stay current with 
                  industry trends and continuously improve my skills. I believe in writing clean, 
                  maintainable code and building scalable solutions that stand the test of time.
                </p>
                <p>
                  Whether it's crafting responsive UIs with React, building robust APIs with 
                  Node.js, or implementing real-time features with modern databases, I'm 
                  dedicated to delivering high-quality work and collaborating effectively 
                  with teams to achieve project goals.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 animate-slide-up">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-elegant transition-smooth border-border"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
