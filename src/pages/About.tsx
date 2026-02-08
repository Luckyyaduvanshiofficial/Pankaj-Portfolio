import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Code2, Server, GraduationCap, Terminal, Cloud, Calendar } from "lucide-react";
import workspaceImage from "@/assets/Workspace.webp";

const timeline = [
  {
    year: "2025 – Present",
    title: "MCA: Computer Science",
    description: "Pursuing Master of Computer Applications at University of Rajasthan.",
    icon: GraduationCap,
    current: true,
  },
  {
    year: "2022 – 2025",
    title: "BCA: Computer Science",
    description: "Bachelor of Computer Applications from University Commerce College, Jaipur. GPA: 7.4 CGPA.",
    icon: GraduationCap,
  },
  {
    year: "2024 – 2025",
    title: "Python Developer Certificate",
    description: "Completed Python Developer certification at TechnoGlobe, Jaipur, India.",
    icon: Terminal,
  },
  {
    year: "2025",
    title: "WeatherVista Application",
    description: "Built a responsive weather app with OpenWeatherMap API and Google Search Engine API integration.",
    icon: Cloud,
  },
  {
    year: "2025",
    title: "SmartTask Web Application",
    description: "Developed a responsive task management app for creating, updating, and managing tasks.",
    icon: Server,
  },
  {
    year: "2024",
    title: "ConnectSphere & InsightHub",
    description: "Built a social media application and a dynamic blogging platform using Python and Django.",
    icon: Code2,
  },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About - Python Developer"
        description="Learn about Pankaj Kumawat's journey as a Python Developer specializing in Django, Web Development, and building responsive applications."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 text-sm text-primary">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              The Code Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Pankaj Kumawat</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A passionate Python Developer on a mission to build innovative web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
              <div className="relative p-2 rounded-3xl border border-border bg-card">
                <img
                  src={workspaceImage}
                  alt="Pankaj Kumawat at work"
                  className="w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">
                Hello, I'm <span className="text-primary">Pankaj</span>
              </h2>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  I'm a Python Developer based in Jaipur, Rajasthan, India. My passion lies in building responsive web applications, optimizing performance, and designing scalable backend systems using Django and Python.
                </p>
                <p>
                  With a BCA in Computer Science from University Commerce College, Jaipur (7.4 CGPA) and a Python Developer Certificate from TechnoGlobe, I am currently pursuing MCA at University of Rajasthan. I specialize in creating user-centric solutions with clean, efficient code.
                </p>
                <p>
                  I have hands-on experience building projects like ConnectSphere (social media app), InsightHub (blogging platform), SmartTask (task manager), and WeatherVista (real-time weather app) — all built with Django, Python, and modern web technologies.
                </p>
                <p>
                  When I'm not coding, you'll find me reading books on technology trends, exploring new tools and frameworks through internet surfing, or solving complex programming problems.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {[
                  "Python",
                  "Django",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Bootstrap",
                  "MySQL",
                  "Git/GitHub",
                  "REST API",
                  "Responsive Design",
                  "Unit Testing",
                  "MS Office"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                My Journey So Far
              </h2>
              <p className="text-lg text-muted-foreground">
                A timeline of my growth as a Python Developer
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        item.current 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                          : 'bg-card border-2 border-primary text-primary'
                      }`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-foreground">
                          {item.year}
                        </span>
                        {item.current && (
                          <span className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-500 border border-green-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Get In Touch
              <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;