import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';

function App()
{
  return (
    <div className="min-h-screen text-slate-200 selection:bg-emerald-500/30 selection:text-white relative">
      
      {/* Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Render image with higher opacity so it's clearly visible */}
        <img 
          src="/ChatGPT%20Image%20Apr%2026,%202026,%2009_55_28%20PM.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Lighter overlay to just slightly darken the image for text readability */}
        <div className="absolute inset-0 bg-slate-950/60"></div>
      </div>

      <nav className="relative w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-bold font-outfit text-xl tracking-wide text-white">
            Omar Ait Bougnsa
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#events" className="hover:text-white transition-colors">Events</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-16">
        <Hero />
        <About />
        <Skills />
        <Hackathons />
        <Projects />
      </main>

      <footer className="relative z-10 border-t border-slate-800 py-8 mt-12 text-center text-slate-500 font-inter text-sm">
        <p>&copy; {new Date().getFullYear()} Omar Ait Bougnsa. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
