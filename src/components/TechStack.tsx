const techs = [
    { name: "Python", color: "#3776AB" },
    { name: "Django", color: "#092E20" },
    { name: "Machine Learning", color: "#FF6F00" },
    { name: "Data Analytics", color: "#00897B" },
    { name: "MySQL", color: "#4479A1" },
    { name: "Scikit-learn", color: "#F7931E" },
    { name: "Pandas", color: "#150458" },
    { name: "NumPy", color: "#013243" },
    { name: "Git", color: "#F05032" },
    { name: "GitHub", color: "#181717" },
    { name: "REST API", color: "#009688" },
    { name: "Backend Systems", color: "#DC382D" },
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
