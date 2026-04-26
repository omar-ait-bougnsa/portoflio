import React from 'react';
import { Github, Mail, Linkedin, Phone } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-20 px-4">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
                <div className="order-2 md:order-1 flex flex-col space-y-6">
                    <div className="space-y-4">
                        <span className="text-emerald-500 font-outfit uppercase text-sm font-semibold tracking-wider">
                            Software Engineering Student
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold font-outfit text-white leading-tight">
                            Hi, I'm <br />
                            Omar Ait Bougnsa
                        </h1>
                        <p className="text-lg text-slate-300 font-inter max-w-xl leading-relaxed pt-2">
                            A computer science student trained through the 42 project-based curriculum at UM6P – 1337 Coding School in Morocco.
                            I build robust backends, networking systems, and real-time modern applications.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 pt-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:omar2bougnsa@gmail.com"
                                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 font-medium transition-colors border border-emerald-500 shadow-sm"
                            >
                                <Mail size={18} />
                                omar2bougnsa@gmail.com
                            </a>
                            <a
                                href="tel:+212708010325"
                                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 font-medium transition-colors border border-slate-700 shadow-sm"
                            >
                                <Phone size={18} />
                                +212 708 010 325
                            </a>
                        </div>
                        <div className="flex gap-6 mt-2">
                            <a
                                href="https://github.com/omar-ait-bougnsa"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                <Github size={20} />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ait-bougnsa-omar-255143269/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                <Linkedin size={20} />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-start md:justify-end py-10 md:py-0">
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden border-2 border-slate-800 shadow-xl bg-slate-900">
                        <img
                            src="/omar.jpg"
                            alt="Omar Ait Bougnsa"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

