import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Search } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";

const allTechStack = Array.from(new Set(projects.flatMap((p) => p.techStack))).sort();

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = !filter || project.techStack.includes(filter);
    const matchesSearch = !search || 
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Layout>
      <SEOHead
        title="Projects"
        description="Explore Pankaj Kumawat's portfolio of Full Stack, Web Development, and System Design projects showcasing practical skills in React, Node.js, Cloud, and more."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full glass mb-6 text-sm text-primary-foreground/80">
              Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-primary-foreground/70">
              A collection of my work in Full Stack Development, System Design, and Cloud Architecture
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={!filter ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(null)}
              >
                All
              </Button>
              {allTechStack.map((tech) => (
                <Button
                  key={tech}
                  variant={filter === tech ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(tech)}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;