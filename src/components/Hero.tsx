import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: "url('https://miaoda-site-img.s3cdn.medo.dev/images/b99cb2a9-4588-494d-b562-5c0d47e02b6b.jpg')"
        }}
      />
      <div className="absolute inset-0 gradient-hero-bg opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Associate Software Engineer
            </span>
          </div>
          
          <h1 className="text-5xl xl:text-7xl font-bold mb-6 leading-tight">
            Building Modern
            <br />
            <span className="gradient-text">Web & Mobile</span>
            <br />
            Applications
          </h1>
          
          <p className="text-lg xl:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Associate Software Engineer with 1 year of experience in designing and developing 
            full-stack applications. Passionate about creating user-friendly interfaces and 
            scalable backend solutions with modern technologies.
          </p>
          
          <div className="flex flex-col xl:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="shadow-elegant hover:shadow-glow transition-smooth"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="transition-smooth"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-smooth animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
