import React from 'react';
import { GraduationCap, MapPin, Languages, Code2, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold font-outfit mb-4 text-white">About Me</h2>
                    <div className="w-16 h-1 bg-emerald-500"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-6 text-slate-300 font-inter leading-relaxed">
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
                            Currently, I am expanding my professional experience through an ongoing 4-month internship at <strong className="text-emerald-400 font-bold">OCP Group</strong>, working on an EVSE HMI and a backend connected via the OCPP protocol, applying my engineering skills in a real-world enterprise environment.
                        </p>
                        <p>
                            My primary intersections of interest lie in <strong className="text-emerald-400">Backend Development, Full-Stack Architecture, and Cybersecurity.</strong> I thrive when building complex systems from the ground up and optimizing low-level performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-900 border border-slate-800 p-6 shadow-sm flex flex-col gap-4">
                            <div className="text-emerald-500">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="text-slate-100 font-semibold font-outfit text-base">Education</h3>
                                <p className="text-sm text-slate-400 mt-1">1337 Coding School (42 Network)</p>
                                <p className="text-xs text-emerald-400 mt-2 font-medium">Level 11.46</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-6 shadow-sm flex flex-col gap-4">
                            <div className="text-emerald-500">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-slate-100 font-semibold font-outfit text-base">Certifications</h3>
                                <p className="text-sm text-slate-400 mt-1">42 Common Core (1337)</p>
                                <p className="text-xs text-emerald-400 mt-2 font-medium">100% Completed</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-6 shadow-sm flex flex-col gap-4">
                            <div className="text-emerald-500">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-slate-100 font-semibold font-outfit text-base">Location</h3>
                                <p className="text-sm text-slate-400 mt-1">Ben Guerir, Morocco</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-6 shadow-sm flex flex-col gap-4">
                            <div className="text-emerald-500">
                                <Code2 size={24} />
                            </div>
                            <div>
                                <h3 className="text-slate-100 font-semibold font-outfit text-base">Interests</h3>
                                <p className="text-sm text-slate-400 mt-1">Backend Dev, System Arch, Cybersecurity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
