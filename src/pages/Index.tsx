
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
