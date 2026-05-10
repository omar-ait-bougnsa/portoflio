import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "get_next_line",
        tech: ["C", "File I/O", "Memory Management"],
        desc: "Whether it's a file, stdin, or even later a network connection, you'll always need a way to read content line by line. It's time to start working on this function, which will be essential for your future projects.",
        github: "https://github.com/omar-ait-bougnsa"
    },
    {
        title: "Libft",
        tech: ["C", "Data Structures", "Algorithms"],
        desc: "This project is your very first project as a learner at 42. You will need to recode a few functions from the C standard library, as well as some other utility functions that you will use throughout your whole curriculum.",
        github: "https://github.com/omar-ait-bougnsa"
    },
    {
        title: "Philosophers",
        tech: ["C", "Unix", "Concurrency", "Mutex", "Threads"],
        desc: "A concurrent programming project simulating the dining philosophers problem. Designed and implemented complex thread and process management, utilizing mutexes to prevent data races and deadlocks.",
        github: "https://github.com/omar-ait-bougnsa"
    },
    {
        title: "NetPractice",
        tech: ["Networking", "OSI Model", "TCP/IP"],
        desc: "Tackled various networking challenges focused on configuring small-scale networks. Gained deep understanding of IP addressing, subnetting, routing, and the TCP/IP stack.",
        github: "https://github.com/omar-ait-bougnsa"
    },
    {
        title: "Born2beroot",
        tech: ["Virtualization", "System Administration", "Linux"],
        desc: "An introduction to virtualization and system administration. Set up a secure Debian/CentOS virtual machine, configuring LVM, strict password policies, SSH, UFW, and customized sudo groups.",
        github: "https://github.com/omar-ait-bougnsa"
    },
    {
        title: "push_swap",
        tech: ["C", "Algorithms", "Optimization"],
        desc: "An algorithmic project focused on sorting data on a stack using a highly limited set of operations. Achieved maximum algorithmic efficiency with the lowest possible number of actions.",
        github: "https://github.com/omar-ait-bougnsa"
    },
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
        <section id="projects" className="py-24 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold font-outfit mb-4 text-white">Featured Projects</h2>
                    <div className="w-16 h-1 bg-emerald-500 mb-6"></div>
                    <p className="text-slate-300">
                        Here is my <a href="https://github.com/omar-ait-bougnsa" target="_blank" rel="noreferrer" className="text-emerald-400 font-semibold hover:underline">GitHub</a> if you want to see some projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-slate-900 border border-slate-800 p-6 flex flex-col h-full hover:border-emerald-500/50 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold text-emerald-300 font-outfit">{project.title}</h3>
                            </div>
                            
                            <p className="text-slate-300 mb-6 font-inter text-sm flex-grow">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] font-semibold text-emerald-100 bg-emerald-900/40 px-2 py-1 border border-emerald-800/50 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
