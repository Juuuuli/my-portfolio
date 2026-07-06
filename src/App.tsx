import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Activities from './components/Activities';
import StarCanvas from './components/StarCanvas';

function App() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-blue-500/30 relative">
      <StarCanvas />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Awards />
        <Activities />
      </main>
      <footer className="py-8 text-center text-sm text-foreground/50 bg-background border-t border-border mt-12">
        <p>© {new Date().getFullYear()} 蔣羽茿的個人網站. Built with Vite, React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
