import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid xl:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl gradient-text mb-4">Developer Portfolio</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Associate Software Engineer passionate about building modern web and 
                mobile applications with clean code and scalable architecture.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4 mb-4">
                <a
                  href="mailto:nivethagslakshmi@gmail.com"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/nivethags16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/nivethags"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
              <p className="text-muted-foreground text-sm">
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm text-center xl:text-left">
                {currentYear} Developer Portfolio
              </p>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
