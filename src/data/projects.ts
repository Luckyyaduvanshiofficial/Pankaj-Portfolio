export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI and secure payment integration.",
    longDescription: "Developed a comprehensive e-commerce platform featuring user authentication, product management, shopping cart, and secure payment processing. Implemented responsive design and optimized performance for seamless user experience.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
    featured: true,
    github: "https://github.com/pankajkumawat",
  },
  {
    id: "task-management-app",
    title: "Task Management System",
    description: "Collaborative task management application with real-time updates.",
    longDescription: "Built a real-time task management system allowing teams to collaborate efficiently. Features include task assignment, progress tracking, notifications, and team analytics dashboard.",
    techStack: ["React", "TypeScript", "Firebase", "Material-UI", "WebSockets"],
    featured: true,
    github: "https://github.com/pankajkumawat",
  },
  {
    id: "social-media-dashboard",
    title: "Social Media Analytics Dashboard",
    description: "Analytics dashboard for tracking social media metrics and engagement.",
    longDescription: "Created an analytics dashboard that aggregates data from multiple social media platforms. Provides insights through interactive charts, engagement metrics, and performance tracking.",
    techStack: ["React", "D3.js", "Node.js", "PostgreSQL", "REST API"],
    featured: true,
    github: "https://github.com/pankajkumawat",
  },
  {
    id: "blog-platform",
    title: "Modern Blogging Platform",
    description: "Feature-rich blogging platform with markdown support and SEO optimization.",
    longDescription: "Developed a modern blogging platform with markdown editor, syntax highlighting, SEO optimization, and social sharing features. Includes admin dashboard for content management.",
    techStack: ["Next.js", "React", "MongoDB", "Tailwind CSS", "MDX"],
    featured: true,
    github: "https://github.com/pankajkumawat",
  },
  {
    id: "weather-app",
    title: "Weather Forecast Application",
    description: "Real-time weather application with location-based forecasts.",
    longDescription: "Built a weather application that provides real-time weather data and forecasts based on user location. Features include hourly and weekly forecasts, weather alerts, and interactive maps.",
    techStack: ["React", "OpenWeather API", "Geolocation API", "Chart.js"],
    featured: false,
    github: "https://github.com/pankajkumawat",
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Website Generator",
    description: "Tool for creating customizable portfolio websites with templates.",
    longDescription: "Created a portfolio generator that allows users to create professional portfolio websites using pre-built templates. Features drag-and-drop customization and export functionality.",
    techStack: ["React", "TypeScript", "Styled Components", "Firebase"],
    featured: false,
    github: "https://github.com/pankajkumawat",
  },
];
