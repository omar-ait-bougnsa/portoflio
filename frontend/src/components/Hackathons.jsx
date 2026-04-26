import React from 'react';
import { ShieldAlert, HeartPulse } from 'lucide-react';

const events = [
    {
        title: "National Morocco Odyssey CTF",
        type: "Capture The Flag (CTF)",
        icon: <ShieldAlert size={20} />,
        desc: "Participated in the national Morocco Odyssey Capture The Flag event, solving complex security challenges in cryptography, reverse engineering, web exploitation, and forensics.",
        tags: ["Cybersecurity", "Web Exploitation", "Reverse Engineering"]
    },
    {
        title: "NULL HAT CTF",
        type: "Capture The Flag (CTF)",
        icon: <ShieldAlert size={20} />,
        desc: "Competed in the NULL HAT CTF, discovering vulnerabilities and analyzing system weaknesses in a timed, competitive environment.",
        tags: ["Penetration Testing", "Cryptography", "Network Security"]
    },
    {
        title: "Hack The Box CTF",
        type: "Capture The Flag (CTF)",
        icon: <ShieldAlert size={20} />,
        desc: "Regular participant in Hack The Box events and challenges, exploiting vulnerable machines and maintaining a continuous learning path in offensive security.",
        tags: ["HTB", "Privilege Escalation", "Offensive Security"]
    },
    {
        title: "AI Healthcare Hackathon",
        type: "Hackathon Project",
        icon: <HeartPulse size={20} />,
        desc: "Built a healthcare application addressing specific medical problems in Morocco. The app leverages the Minimax API for AI-driven text processing and integrates ElevenLabs for advanced audio and voice generation features.",
        tags: ["AI", "Minimax", "ElevenLabs", "Healthcare"]
    }
];

const Hackathons = () => {
    return (
        <section id="events" className="py-24 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold font-outfit mb-4 text-white">Events & Hackathons</h2>
                    <div className="w-16 h-1 bg-emerald-500"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {events.map((event, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-900 border border-slate-800 p-6 flex flex-col gap-4 hover:border-emerald-500/50 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="text-emerald-500">
                                    {event.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-100 font-outfit">{event.title}</h3>
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">{event.type}</p>
                                </div>
                            </div>
                            
                            <p className="text-slate-400 font-inter text-sm mb-4 flex-grow">
                                {event.desc}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mt-auto basis-full items-end">
                                {event.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-semibold text-slate-400 bg-slate-950 px-2 py-1 border border-slate-800">
                                        {tag}
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

export default Hackathons;