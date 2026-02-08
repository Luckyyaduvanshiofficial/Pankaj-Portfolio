import { ArrowRight, Terminal, Server, Cloud, Cpu, Code2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/Main-Profile.webp";

const stats = [
  { value: "4+", label: "Projects Built" },
  { value: "BCA", label: "Computer Science" },
  { value: "MCA", label: "Pursuing" },
  { value: "Python", label: "Specialization" },
];

const floatingIcons = [
  { Icon: Terminal, position: "top-20 left-[10%]", delay: "0s" },
  { Icon: Server, position: "top-40 right-[15%]", delay: "1s" },
  { Icon: Cloud, position: "bottom-32 left-[20%]", delay: "2s" },
  { Icon: Code2, position: "bottom-40 right-[10%]", delay: "0.5s" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, position, delay }, index) => (
          <div
            key={index}
            className={`absolute ${position} opacity-20 animate-float text-primary`}
            style={{ animationDelay: delay }}
          >
            <Icon size={48} />
          </div>
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 border border-primary/30 bg-primary/10 animate-fade-up"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-foreground font-medium tracking-wide">Available for Software Engineer & Backend Developer Roles</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">Pankaj Kumawat</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Software Engineer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Backend Engineer | Django Developer | Python Developer
              Specializing in scalable backend systems, data analytics, and machine learning solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                <Link to="/projects" className="flex items-center gap-2">
                  View Architecture
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-accent"
                asChild
              >
                <a href="https://www.linkedin.com/in/pankajkumawat9950/" target="_blank" rel="noopener noreferrer">
                  Official LinkedIn
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-up border-t border-border pt-8" style={{ animationDelay: "0.4s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              <div className="relative bg-card p-2 rounded-2xl overflow-hidden ring-1 ring-border">
                <img
                  src={heroImage}
                  alt="Pankaj Kumawat - Software Engineer"
                  className="w-full max-w-md rounded-xl object-cover aspect-[4/3]"
                  loading="eager"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-md border border-border px-6 py-4 rounded-xl animate-float shadow-2xl" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <Cpu className="text-blue-500" size={24} />
                  <div>
                    <p className="text-xs text-muted-foreground">Specialty</p>
                    <p className="text-sm font-bold text-foreground">Python & Django</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-card/90 backdrop-blur-md border border-border px-6 py-4 rounded-xl animate-float shadow-2xl" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-green-500" size={24} />
                  <div>
                    <p className="text-xs text-muted-foreground">Focus</p>
                    <p className="text-sm font-bold text-foreground">Data Analytics & ML</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
