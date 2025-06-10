
import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full text-sm text-muted-foreground">
          <Sparkles size={16} className="text-accent" />
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
          Hello, I'm
          <span className="block text-6xl md:text-8xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Aishi
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A creative professional crafting digital experiences that bridge 
          <span className="text-foreground font-medium"> functionality </span>
          and
          <span className="text-foreground font-medium"> artistry</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore My Work
          </button>
          <button className="px-8 py-3 border border-border rounded-full hover:bg-accent/5 transition-all duration-300 text-foreground">
            Download CV
          </button>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full hover:bg-accent/10 transition-colors duration-300"
        >
          <ArrowDown size={24} className="text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
