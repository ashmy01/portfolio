
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm text-primary">
          <Sparkles size={16} className="text-accent animate-pulse" />
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block text-foreground mb-2">Hello, I'm</span>
          <span className="block text-6xl md:text-8xl gradient-text font-extrabold">
            Aishi
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          A creative professional crafting digital experiences that bridge 
          <span className="text-primary font-medium"> functionality </span>
          and
          <span className="text-accent font-medium"> artistry</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 font-medium backdrop-blur-sm"
          >
            Explore My Work
          </button>
          <button className="px-8 py-4 border border-primary/30 bg-card/50 backdrop-blur-sm rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-foreground font-medium">
            Download CV
          </button>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce p-3 rounded-full bg-card/30 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
        >
          <ArrowDown size={24} className="text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
