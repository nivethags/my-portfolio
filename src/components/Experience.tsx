import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { format, differenceInYears, differenceInMonths } from "date-fns";


const Experience = () => {

const joiningDate = new Date("2025-12-06");
const today = new Date();

// Format date responsively
const formattedDate = format(joiningDate, "dd MMM yyyy");

// Calculate experience
const years = differenceInYears(today, joiningDate);
const months = differenceInMonths(today, joiningDate) % 12;

let experience = "";
if (years > 0) {
  experience = `${years} Year${years > 1 ? "s" : ""}`;
  if (months > 0) {
    experience += ` ${months} Month${months > 1 ? "s" : ""}`;
  }
  experience += " Experience";
} else {
  experience = `${months} Month${months > 1 ? "s" : ""} Experience`;
}

  const responsibilities = [
    "Built full-stack features for web and mobile applications, focusing on authentication systems, real-time dashboards, and admin panels",
    "Developed backend APIs with optimized database queries and improved data structures for better performance",
    "Handled frontend UI development using React and React Native, creating responsive and intuitive user interfaces",
    "Worked extensively with MySQL, Firebase, and Supabase for data management and real-time features",
    "Collaborated with team members on feature development, conducted code reviews, and fixed bugs to improve application stability",
    "Followed clean coding practices, industry best practices, and maintained version control using Git",
    "Contributed to improving application performance through code optimization and efficient algorithm implementation",
  ];

  const achievements = [
    {
      title: "Real-Time Features",
      description: "Implemented live data synchronization improving user experience",
    },
    {
      title: "Security Enhancement",
      description: "Developed robust authentication and authorization systems",
    },
    {
      title: "Performance Optimization",
      description: "Optimized database queries and API responses",
    },
    {
      title: "Code Quality",
      description: "Maintained high code quality through reviews and best practices",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey as a full-stack developer, building impactful solutions 
              and growing technical expertise
            </p>
          </div>

          <div className="space-y-8">
            <Card className="shadow-elegant border-border animate-slide-up">

<CardHeader>
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
      <Briefcase className="h-6 w-6 text-primary" />
    </div>
    <div className="flex-1">
      <CardTitle className="text-2xl mb-2">Associate Software Engineer</CardTitle>
      <div className="flex flex-wrap gap-2 items-center text-muted-foreground">
       <Badge
  variant="outline"
  className="font-normal text-left flex flex-col sm:flex-row sm:items-center sm:gap-2"
>
  <span>{formattedDate} to Present</span>
  {/* Show dash only on desktop */}
  <span className="hidden sm:inline">-</span>
  <span>{experience}</span>
</Badge>
        <span className="text-sm">Full-Stack Development</span>
      </div>
    </div>
  </div>
</CardHeader>
              
              <CardContent className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-secondary rounded-full" />
                    Key Achievements
                  </h3>
                  <div className="grid xl:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="p-4 bg-muted/50 rounded-lg border border-border hover:border-primary transition-smooth"
                      >
                        <h4 className="font-semibold mb-2">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-accent rounded-full" />
                    Technical Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "React Native",
                      "Node.js",
                      "PHP",
                      "MySQL",
                      "Firebase",
                      "Supabase",
                      "Git",
                      "REST APIs",
                      "Authentication",
                      "Real-time Features",
                    ].map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
