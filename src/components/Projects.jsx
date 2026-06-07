function Projects() {
    const projects = [
        {
            title: "Recipe Book",
            description: "A full-stack recipe app with ingredient-based search, a grocery list builder, and a meal planner.",
            tech: ["JavaScript", "Flask", "Python", "HTML", "CSS"],
            link: "https://github.com/bjp12/recipe-book"
        }, 
        {
            title: "Personal Website",
            description: "A personal portfolio website built with React to showcase my projects and experience.",
            tech: ["JavaScript", "React", "HTML", "CSS"],
            link: "https://github.com/bjp12/bjp12.github.io"
        },
        {
            title: "Set Card Game",
            description: "An implementation of the Set card game built in Java using OOP design patterns.",
            tech: ["Java", "OOP", "Algorithms"],
            link: "https://github.com/bjp12/setGame"
        }
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-tags">
                            {project.tech.map((t) => (
                                <span key={t}>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View on Github
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects
