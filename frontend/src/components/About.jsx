import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Languages, Code2, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold font-outfit mb-4 text-white">About Me</h2>
                    <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-slate-300 font-inter leading-relaxed"
                    >
                        <p>
                            I am a passionate computer science student continuously pushing the boundaries of my technical knowledge.
                            Originating from Zagora, Morocco, my journey in tech led me to UM6P's highly selective 1337 Coding School in Ben Guerir.
                        </p>
                        <p>
                            Trained through the collaborative and intense 42 peer-to-peer curriculum, I've developed a deep resilience in problem-solving and an aptitude for rapid learning. I am currently in the 42 Advanced part of the curriculum, having mastered the common core entirely in C and C++.
                        </p>
                        <p>
                            Recently, I have also achieved certification for completing the 42 Common Core at 1337 Coding School, demonstrating my ongoing commitment to expanding my academic and professional qualifications. I am currently in the 42 advanced part, with a level of 11.46.
                        </p>
                        <p>
                            Currently, I am expanding my professional experience through an ongoing 4-month internship at <strong className="text-white">OCP Group</strong>, working on an EVSE HMI and a backend connected via the OCPP protocol, applying my engineering skills in a real-world enterprise environment.
                        </p>
                        <p>
                            My primary intersections of interest lie in <strong className="text-white">Backend Development, Full-Stack Architecture, and Cybersecurity.</strong> I thrive when building complex systems from the ground up and optimizing low-level performance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        <div className="glass p-6 rounded-2xl flex flex-col gap-3 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-primary/20 p-3 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Education</h3>
                                <p className="text-sm text-slate-400 mt-1">1337 Coding School (42 Network)</p>
                                <p className="text-xs text-primary mt-1 font-medium">Level 11.46</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl flex flex-col gap-3 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-amber-500/20 p-3 w-12 h-12 rounded-lg flex items-center justify-center text-amber-400">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Certifications</h3>
                                <p className="text-sm text-slate-400 mt-1">42 Common Core (1337)</p>
                                <p className="text-xs text-amber-400 mt-1 font-medium">100% Completed</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl flex flex-col gap-3 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-indigo-500/20 p-3 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Location</h3>
                                <p className="text-sm text-slate-400 mt-1">Ben Guerir, Morocco</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl flex flex-col gap-3 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-emerald-500/20 p-3 w-12 h-12 rounded-lg flex items-center justify-center text-emerald-400">
                                <Languages size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Languages</h3>
                                <p className="text-sm text-slate-400 mt-1">Arabic (Native)<br />English (Inter.)<br />French (Basic)</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl flex flex-col gap-3 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-rose-500/20 p-3 w-12 h-12 rounded-lg flex items-center justify-center text-rose-400">
                                <Code2 size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Interests</h3>
                                <p className="text-sm text-slate-400 mt-1">Backend Dev<br />System Arch.<br />Cybersecurity</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
