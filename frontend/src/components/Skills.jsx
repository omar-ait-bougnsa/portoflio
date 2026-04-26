import React from 'react';

const skillsData = [
    {
        category: "Languages",
        skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "HTML/CSS"]
    },
    {
        category: "Technologies & Tools",
        skills: ["Docker", "Docker Compose", "Git", "Linux/Unix", "NGINX", "React", "Node.js (Express, Fastify)", "Django", "MySQL", "SQLite", "Postman"]
    },
    {
        category: "Core Concepts",
        skills: ["Data Structures", "Algorithms", "OOP", "System Architecture", "Memory Management", "Processes & Threads", "REST APIs", "WebSockets"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold font-outfit mb-4 text-white">Technical Arsenal</h2>
                    <div className="w-16 h-1 bg-emerald-500"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                    {skillsData.map((group) => (
                        <div
                            key={group.category}
                            className="bg-slate-900 border border-slate-800 p-8 shadow-sm flex flex-col"
                        >
                            <h3 className="text-lg font-bold text-slate-100 mb-6 font-outfit tracking-wide">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 border border-slate-700"
                                    >
                                        {skill}
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

export default Skills;

