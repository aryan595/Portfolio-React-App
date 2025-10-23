import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Login Page',
        description: '  ',
        image: "/projects/project1.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://aryan595.github.io/Login-Page/",
        githubUrl: "https://github.com/aryan595/Login-Page",
    },
    {
        id: 2,
        title: 'NetFlix UI Clone ',
        description: 'Description for project two.',
        image: "/projects/project2.png",
        tags: ["HTML", "CSS"],
        demoUrl: "https://aryan595.github.io/Ntflix_ui/",
        githubUrl: "https://github.com/aryan595/Ntflix_ui",
    },
    {
        id: 3,
        title: 'Movie Recommendation System',
        description: 'Description for project three.',
        image: "/projects/project3.png",
        tags: ["Streamlit", "Python"],
        demoUrl: "https://movie-recommendation-system-mhpos5am7zv5wppdwsxmvp.streamlit.app/",
        githubUrl: "https://github.com/aryan595/Movie-Recommendation-System",
    },
    {
        id: 4,
        title: 'Sample Website UI',
        description: 'Description for project three.',
        image: "/projects/project4.png",
        tags: ["Streamlit", "Python"],
        demoUrl: "https://movie-recommendation-system-mhpos5am7zv5wppdwsxmvp.streamlit.app/",
        githubUrl: "https://github.com/aryan595/Movie-Recommendation-System",
    },
    {
        id: 5,
        title: "Banker's Algorithm Simulation",
        description: 'Description for project three.',
        image: "/projects/project5.png",
        tags: ["Streamlit", "Python"],
        demoUrl: "https://movie-recommendation-system-mhpos5am7zv5wppdwsxmvp.streamlit.app/",
        githubUrl: "https://github.com/aryan595/Movie-Recommendation-System",
    },
    {
        id: 6,
        title: 'Simple Weather Card',
        description: 'Description for project three.',
        image: "/projects/project6.png",
        tags: ["Streamlit", "Python"],
        demoUrl: "https://movie-recommendation-system-mhpos5am7zv5wppdwsxmvp.streamlit.app/",
        githubUrl: "https://github.com/aryan595/Movie-Recommendation-System",
    },
]

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on recently. Click on the project titles to view more details.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-semibold border rounded-full bg-primary/20 text-secondary-foreground ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/aryan595" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-1">
                        My GitHub Profile <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};