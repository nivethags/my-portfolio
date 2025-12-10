import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "💻",
      skills: [
        {
          name: "React.js",
          description: "Building responsive UIs with component-based architecture and optimized rendering",
        },
        {
          name: "HTML, CSS, JavaScript",
          description: "Creating semantic, accessible, and interactive web interfaces",
        },
      ],
    },
    {
      category: "Mobile Development",
      icon: "📱",
      skills: [
        {
          name: "React Native",
          description: "Developing cross-platform mobile apps with API integration, authentication screens, and smooth navigation",
        },
      ],
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          description: "Building server-side logic, REST APIs, and authentication systems",
        },
        {
          name: "PHP",
          description: "Core PHP development and API creation for CRUD operations",
        },
      ],
    },
    {
      category: "Database Management",
      icon: "🗄️",
      skills: [
        {
          name: "MySQL",
          description: "Relational database design, query optimization, and data modeling",
        },
        {
          name: "Firebase",
          description: "Authentication, Firestore real-time database, and cloud storage integration",
        },
        {
          name: "Supabase",
          description: "Real-time features, subscriptions, and modern database operations",
        },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        {
          name: "Git, GitHub",
          description: "Version control and collaborative development",
        },
        {
          name: "Postman",
          description: "API testing and documentation",
        },
        {
          name: "VS Code",
          description: "Primary development environment",
        },
        {
          name: "Firebase Console, Supabase Dashboard",
          description: "Cloud service management",
        },
      ],
    },
    {
      category: "Soft Skills",
      icon: "🌟",
      skills: [
        {
          name: "Fast Learner",
          description: "Strong debugging and problem-solving abilities",
        },
        {
          name: "Communication",
          description: "Good communication and teamwork",
        },
        {
          name: "Code Quality",
          description: "Writing clean, maintainable code with attention to best practices",
        },
        {
          name: "Ownership",
          description: "Taking ownership of features and delivering results",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and skills I've developed through 
              hands-on experience in full-stack development
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-smooth border-border animate-slide-up"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-3xl">{category.icon}</span>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <Badge variant="secondary" className="font-semibold">
                        {skill.name}
                      </Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
