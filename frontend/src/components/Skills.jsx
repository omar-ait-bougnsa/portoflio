import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "HTML/CSS"]
    },
    {
        category: "Technologies & Tools",
        skills: ["Docker", "Docker Compose", "Git", "Linux/Unix", "NGINX", "React", "Node.js (Express, Fastify)", "MySQL", "SQLite"]
    },
    {
        category: "Core Concepts",
        skills: ["Data Structures", "Algorithms", "OOP", "System Architecture", "Memory Management", "Processes & Threads", "REST APIs", "WebSockets"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h2 className="text-4xl font-bold font-outfit mb-4 text-white">Technical Arsenal</h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:grid md:grid-cols-3 gap-8 w-full">
                    {skillsData.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="glass p-8 rounded-2xl border-t-4 border-t-primary"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 font-outfit">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-slate-800/80 text-slate-300 text-sm font-medium px-4 py-2 rounded-lg border border-slate-700/50 shadow-sm"
                                    >
                                        {skill}
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

export default Skills;
