export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image?: string;
  github?: string;
  demo?: string;
  live?: string;
  featured: boolean;
  date?: string;
}

export const projects: Project[] = [
  {
    id: "connectsphere",
    title: "ConnectSphere",
    description: "A dynamic social media application featuring secure user authentication, customizable profiles, and social interactions.",
    longDescription: "Developed a dynamic social media application featuring secure user authentication, customizable profiles, and social interactions. Users can create posts, follow other users, like and comment on content, and manage their personal profiles with a clean and intuitive interface.",
    techStack: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL"],
    featured: true,
    github: "https://github.com/pankajkumawat",
    date: "Nov 2024 – Dec 2024",
  },
  {
    id: "insighthub",
    title: "InsightHub Blog Website",
    description: "A dynamic and user-friendly blogging platform for creating, editing, and sharing blog posts with interactive commenting.",
    longDescription: "InsightHub is a dynamic and user-friendly blogging platform that allows users to create, edit, and share their thoughts through blog posts. It provides a seamless reading experience, engaging UI, and an interactive commenting system for user engagement.",
    techStack: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL"],
    featured: true,
    github: "https://github.com/pankajkumawat",
    date: "Dec 2024 – Jan 2025",
  },
  {
    id: "smarttask",
    title: "SmartTask Web Application",
    description: "A responsive task management app to create, update, delete, and mark tasks as completed with a smooth UX.",
    longDescription: "SmartTask is a responsive and user-friendly web application designed to help users organize their tasks efficiently. It allows users to create, update, delete, and mark tasks as completed while ensuring a smooth user experience.",
    techStack: ["Python", "Django", "HTML", "CSS", "Bootstrap", "JavaScript"],
    featured: true,
    github: "https://github.com/pankajkumawat",
    date: "Jan 2025 – Feb 2025",
  },
  {
    id: "weathervista",
    title: "WeatherVista Application",
    description: "A responsive weather app providing real-time weather updates with OpenWeatherMap API and dynamic city images.",
    longDescription: "WeatherVista is a responsive weather application that provides real-time weather updates for any city worldwide. The application integrates the OpenWeatherMap API for accurate weather data and the Google Search Engine API to dynamically display images of the searched city, enhancing user engagement and experience.",
    techStack: ["Python", "Django", "OpenWeatherMap API", "Google API", "HTML", "CSS", "JavaScript"],
    featured: true,
    github: "https://github.com/pankajkumawat",
    date: "Feb 2025 – Mar 2025",
  },
];
