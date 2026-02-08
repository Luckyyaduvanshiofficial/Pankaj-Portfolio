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
    title: "Programming Languages",
    Icon: Code2,
    skills: [
      { name: "Python (Advanced)", level: 90 },
      { name: "JavaScript (Intermediate)", level: 70 },
      { name: "HTML & CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Web Development",
    Icon: Server,
    skills: [
      { name: "Django", level: 88 },
      { name: "Responsive Design", level: 85 },
      { name: "REST APIs", level: 80 },
      { name: "Bootstrap", level: 82 },
    ],
  },
  {
    title: "Database Management",
    Icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MS Access", level: 75 },
      { name: "SQLite", level: 78 },
      { name: "Database Design", level: 80 },
    ],
  },
  {
    title: "Tools & Technologies",
    Icon: Terminal,
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "MS Office", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Command Line", level: 75 },
    ],
  },
  {
    title: "Testing",
    Icon: Cpu,
    skills: [
      { name: "Unit Testing", level: 78 },
      { name: "Automation Testing", level: 72 },
      { name: "Debugging", level: 82 },
      { name: "Code Review", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    Icon: Cloud,
    skills: [
      { name: "Problem Solving", level: 88 },
      { name: "Team Collaboration", level: 85 },
      { name: "Communication", level: 82 },
      { name: "Quick Learning", level: 90 },
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
            Proficient in Python, Django, JavaScript, and modern web technologies for building responsive and scalable applications.
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
