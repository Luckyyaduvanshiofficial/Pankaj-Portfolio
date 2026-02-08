import { ArrowRight, Terminal, Server, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import workspaceImage from "@/assets/Workspace.webp";

const highlights = [
  {
    Icon: Terminal,
    title: "Python & Django Development",
    description: "Building responsive web applications with Python and Django",
  },
  {
    Icon: Server,
    title: "Backend Systems",
    description: "Designing scalable backend systems with optimized performance",
  },
  {
    Icon: Code2,
    title: "Responsive Design",
    description: "Creating user-centric, responsive web interfaces",
  },
];

export const AboutPreview = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
            <div className="relative p-2 rounded-3xl border border-border bg-card">
              <img
                src={workspaceImage}
                alt="Pankaj Kumawat coding environment"
                className="w-full rounded-2xl object-cover aspect-square"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6 text-foreground">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Web Solutions</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm Pankaj Kumawat, a Python Developer with a BCA degree and proficiency in Django, Python, and JavaScript.
              Experienced in building responsive web applications, optimizing performance, and designing scalable backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From creating dynamic social media platforms to building weather applications with real-time data,
              I focus on delivering user-centric solutions with clean, efficient code.
            </p>

            {/* Highlights */}
            <div className="grid gap-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <item.Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group">
              <Link to="/about" className="flex items-center gap-2">
                Read Full Story
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};