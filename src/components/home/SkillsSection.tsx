import {
  Server,
  Database,
  Cloud,
  Cpu,
  Terminal,
  Code2
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    Icon: Server,
    skills: [
      { name: "Python (Advanced)", level: 98 },
      { name: "Django & DRF", level: 95 },
      { name: "FastAPI", level: 92 },
      { name: "Go (Golang)", level: 75 },
    ],
  },
  {
    title: "Database & Storage",
    Icon: Database,
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis Caching", level: 88 },
      { name: "Elasticsearch", level: 75 },
    ],
  },
  {
    title: "Cloud & DevOps",
    Icon: Cloud,
    skills: [
      { name: "AWS Services", level: 85 },
      { name: "Docker & Compose", level: 90 },
      { name: "Kubernetes", level: 70 },
      { name: "CI/CD Pipelines", level: 85 },
    ],
  },
  {
    title: "System Design",
    Icon: Cpu,
    skills: [
      { name: "Microservices", level: 88 },
      { name: "High Scalability", level: 85 },
      { name: "Event-Driven Arch", level: 82 },
      { name: "REST & GraphQL", level: 92 },
    ],
  },
  {
    title: "Tools & Utilities",
    Icon: Terminal,
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Linux Administration", level: 80 },
      { name: "Nginx/Apache", level: 75 },
      { name: "RabbitMQ/Kafka", level: 78 },
    ],
  },
  {
    title: "Technical Leadership",
    Icon: Code2,
    skills: [
      { name: "Code Review", level: 92 },
      { name: "Tech Mentoring", level: 90 },
      { name: "Agile/Scrum", level: 88 },
      { name: "Architecture Design", level: 85 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4 text-foreground">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A robust engineering toolkit designed for building scalable, high-performance, and secure backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <category.Icon size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
