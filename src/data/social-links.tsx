import { Github, Linkedin, Mail, Globe, Briefcase } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Portfolio",
    url: "https://pankajkumawat.in",
    icon: <Globe className="w-5 h-5" />,
    color: "hover:text-blue-500",
    description: "Professional portfolio and blog"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pankajkumawat",
    icon: <Linkedin className="w-5 h-5" />,
    color: "hover:text-blue-600",
    description: "Professional networking"
  },
  {
    name: "GitHub",
    url: "https://github.com/pankajkumawat",
    icon: <Github className="w-5 h-5" />,
    color: "hover:text-gray-800 dark:hover:text-gray-200",
    description: "Code repositories and projects"
  },
  {
    name: "Email",
    url: "mailto:pankajkumawat2023@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    color: "hover:text-green-600",
    description: "Get in touch via email"
  }
];

export const SocialLinksDisplay = ({ showLabels = false }: { showLabels?: boolean }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 transition-colors ${link.color}`}
          title={link.description}
          aria-label={`Visit ${link.name} - ${link.description}`}
        >
          {link.icon}
          {showLabels && <span className="text-sm font-medium">{link.name}</span>}
        </a>
      ))}
    </div>
  );
};
