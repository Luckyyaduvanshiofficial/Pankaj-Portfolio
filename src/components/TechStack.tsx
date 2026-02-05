const techs = [
    { name: "Python", color: "#3776AB" },
    { name: "Django", color: "#092E20" },
    { name: "FastAPI", color: "#009688" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "Docker", color: "#2496ED" },
    { name: "AWS", color: "#FF9900" },
    { name: "Kubernetes", color: "#326CE5" },
    { name: "Redis", color: "#DC382D" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Git", color: "#F05032" },
    { name: "Linux", color: "#FCC624" },
    { name: "React", color: "#61DAFB" },
];

export const TechStack = () => {
    return (
        <div className="w-full py-10 bg-muted/50 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-scroll whitespace-nowrap">
                {[...techs, ...techs, ...techs].map((tech, index) => (
                    <div
                        key={`${tech.name}-${index}`}
                        className="mx-8 flex items-center gap-2 group cursor-default"
                    >
                        <span
                            className="text-2xl font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                            style={{ textShadow: `0 0 10px ${tech.color}40` }}
                        >
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
