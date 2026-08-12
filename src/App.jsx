import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] selection:bg-[#0F172A] selection:text-[#FAFAFA]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
