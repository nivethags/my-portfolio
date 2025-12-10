import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
      color: "text-secondary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
      color: "text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always interested in hearing about new opportunities, collaborations, 
              or interesting projects. Feel free to reach out if you'd like to connect 
              or discuss how we can work together.
            </p>
          </div>

          <div className="grid xl:grid-cols-3 gap-6 mb-12 animate-slide-up">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.label !== "Email" ? "_blank" : undefined}
                rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="shadow-card hover:shadow-elegant transition-smooth border-border h-full group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                      <method.icon className={`h-8 w-8 ${method.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{method.label}</h3>
                    <p className="text-sm text-muted-foreground break-all">{method.value}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <Card className="shadow-elegant border-border animate-slide-up">
            <CardContent className="p-8 xl:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Let's Start a Conversation</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project in mind, want to discuss opportunities, 
                  or just want to say hello, I'd love to hear from you. Click below 
                  to send me an email and I'll get back to you as soon as possible.
                </p>
                <Button
                  size="lg"
                  onClick={() => window.location.href = "mailto:your.email@example.com"}
                  className="shadow-elegant hover:shadow-glow transition-smooth"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Me an Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
