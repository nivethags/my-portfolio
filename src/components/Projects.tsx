import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Admin Dashboard",
      technologies: ["React.js", "Node.js", "Supabase"],
      description: "Developed a real-time admin dashboard enabling instant data updates and improved workflow efficiency. Built reusable UI components including filters, charts, and data tables. Integrated Supabase subscriptions for live data synchronization and implemented secure API connections.",
      impact: "Reduced manual refresh needs and improved admin productivity through instant visibility of system changes.",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/3b2fe1c2-e4a2-42f7-90ab-9856a758cf6f.jpg",
    },
    // {
    //   title: "Authentication & User Management System",
    //   technologies: ["React.js", "Node.js", "MySQL", "Firebase"],
    //   description: "Created a comprehensive authentication system featuring login, OTP verification, and password reset functionality. Designed and implemented role-based access control to manage user permissions across different system levels. Integrated backend APIs with enhanced security validations including input sanitization and token-based authentication.",
    //   impact: "Improved security posture while maintaining smooth user experience.",
    //   image: "https://miaoda-site-img.s3cdn.medo.dev/images/42e0b4b6-50c9-43bc-a7b9-3fd829580fc1.jpg",
    // },
  {
  title: "Mobile App for a Jewelry Shop",
  technologies: ["React Native", "Firebase"],
  description:
    "Developed a mobile application for a jewelry shop to manage products, handle customer enquiries, and streamline order tracking. Integrated Firebase Authentication for secure login, Firestore for real-time product updates, and Cloud Storage for managing jewelry images. Designed a clean and user-friendly interface with smooth navigation and fast loading performance.",
  impact:
    "Improved customer shopping experience and helped the shop manage daily operations more efficiently.",
  image:
    "https://miaoda-site-img.s3cdn.medo.dev/images/fde4965b-b37d-47f6-a786-69bd63c12ebe.jpg",
}
,
    {
      title: "Customized Corporate Gift Ordering System",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      description: "Developed a specialized ordering platform for corporate clients to customize and order branded gifts. Built product listing module with customization options, dynamic pricing logic based on selections, and admin approval workflow. Implemented automated invoice generation and order tracking.",
      impact: "Streamlined the corporate gifting process and reduced order processing time.",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/02ce3e4e-ff2d-429f-876e-e14f79ade2b5.jpg",
    },
    // {
    //   title: "Full-Stack CRUD Application",
    //   technologies: ["React.js", "PHP/Node.js", "MySQL"],
    //   description: "Created a complete CRUD application with add, edit, delete, search, and filter capabilities. Designed responsive UI with comprehensive validation logic for data integrity. Developed secure REST APIs with proper error handling and optimized database operations.",
    //   impact: "Provided efficient data management with clean architecture and maintainable codebase.",
    //   image: "https://miaoda-site-img.s3cdn.medo.dev/images/eef73188-2b18-496a-9018-d836047f7c38.jpg",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of real-world applications I've built, demonstrating my 
              full-stack development capabilities and problem-solving approach
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-smooth border-border animate-slide-up overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-2">
                    <span className="text-xl">{project.title}</span>
                    <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth flex-shrink-0" />
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-primary">Description</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-accent">Impact</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
