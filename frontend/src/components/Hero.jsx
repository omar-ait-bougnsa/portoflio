import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Mail, ChevronDown, Linkedin, Phone } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center py-20 px-4 relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <img src="/office_bg.png" alt="Office Background" className="absolute w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
            </div>

            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 flex flex-col space-y-6"
                >
                    <div>
                        <span className="text-primary font-outfit font-medium tracking-wider uppercase text-sm mb-2 block">
                            Software Engineering Student
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-outfit text-white leading-tight mb-4">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">
                                Omar Ait Bougnsa
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 font-inter max-w-lg leading-relaxed">
                            A computer science student trained through the 42 project-based curriculum at UM6P – 1337 Coding School in Morocco.
                            I build robust backends, networking systems, and real-time modern applications.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="mailto:omar2bougnsa@gmail.com"
                            className="flex items-center gap-2 bg-primary hover:bg-emerald-500 text-slate-950 font-semibold px-6 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-1"
                        >
                            <Mail size={18} />
                            omar2bougnsa@gmail.com
                        </a>
                        <a
                            href="https://github.com/omar-ait-bougnsa"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-full border border-slate-700 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ait-bougnsa-omar-255143269/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-full border border-slate-700 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Linkedin size={18} />
                            LinkedIn
                        </a>
                        <a
                            href="tel:+212708010325"
                            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-full border border-slate-700 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Phone size={18} />
                            +212 708 010 325
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative group perspective">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-3xl transform rotate-3 scale-[1.03] opacity-50 group-hover:rotate-6 transition-all duration-500 blur-xl"></div>
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass p-2 border border-slate-700/50 shadow-2xl">
                            <img
                                src="/omar.jpg"
                                alt="Omar Ait Bougnsa"
                                className="w-full h-full object-cover rounded-2xl filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 text-slate-500 flex flex-col items-center gap-2"
            >
                <span className="text-sm tracking-widest uppercase font-semibold">Scroll</span>
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
