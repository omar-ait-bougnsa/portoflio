import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "C++ Modules 00-09",
        tech: ["C++98", "OOP", "Polymorphism", "Templates", "STL"],
        desc: "A comprehensive series of projects diving deep into Object-Oriented Programming with C++. Covered fundamentals from classes and inheritance to advanced topics like templates, abstract classes, algorithms, and STL containers.",
        github: "https://github.com/omar-ait-bougnsa"
    },
    {
        title: "ft_transcendence",
        tech: ["TypeScript", "React", "Node.js", "WebSockets", "OAuth2.0", "JWT"],
        desc: "A full-stack multiplayer gaming platform. Designed REST API endpoints for user management and friend requests. Handled real-time state using WebSockets for gameplay and live status.",
        github: "https://github.com/omar-ait-bougnsa"
    },
    {
        title: "Webserv",
        tech: ["C++", "HTTP/1.1", "epoll", "Non-blocking I/O"],
        desc: "Built a robust HTTP/1.1 server entirely from scratch in C++. Handled concurrent connections using epoll with non-blocking I/O. Parsed requests and supported GET/POST/DELETE methods with CGI integration.",
        github: "https://github.com/omar-ait-bougnsa"
    },
    {
        title: "Inception",
        tech: ["Docker", "Docker Compose", "NGINX", "MariaDB", "WordPress"],
        desc: "Designed a multi-container infrastructure setting up independent services in their own Docker containers. Managed isolated custom networks, persistent volumes, and secured access across the network.",
        github: "https://github.com/omar-ait-bougnsa"
    },
    {
        title: "Minishell",
        tech: ["C", "Unix", "Process Management", "AST"],
        desc: "Developed a Unix shell reproducing bash behavior. Supported complex command execution, pipes, redirections, environment variables, and comprehensive signal handling using fork(), execve(), and waitpid().",
        github: "https://github.com/omar-ait-bougnsa"
    },
    {
        title: "Cub3D",
        tech: ["C", "Ray-casting", "MiniLibX", "Maths"],
        desc: "A 3D game engine using ray-casting algorithms to render a pseudo-3D environment from a 2D map. Implemented texture mapping, sprite rendering, and fluid player movement physics.",
        github: "https://github.com/omar-ait-bougnsa"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h2 className="text-4xl font-bold font-outfit mb-4 text-white">Featured Projects</h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                    <p className="mt-6 text-slate-400 max-w-2xl text-center">
                        A selection of my most impactful projects from the rigorous 42 curriculum.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group glass rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-125 duration-500"></div>

                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white font-outfit">{project.title}</h3>
                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                        <Github size={24} />
                                    </a>
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-6 font-inter text-sm md:text-base">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
