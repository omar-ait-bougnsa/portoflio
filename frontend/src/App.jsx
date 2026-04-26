import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App()
{
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-primary/30 selection:text-primary">
      <nav className="fixed w-full z-50 glass border-b border-slate-800/50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold font-outfit tracking-wider text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-teal-400 flex items-center justify-center text-slate-900">O</span>
            Ait Bougnsa
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="border-t border-slate-800/50 py-8 bg-slate-900/50 mt-12 text-center text-slate-500 font-inter text-sm">
        <p>&copy; {new Date().getFullYear()} Omar Ait Bougnsa. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
