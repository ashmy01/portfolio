
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
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-80 h-80 mx-auto">
              {/* Background blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute top-4 left-4 w-72 h-72 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full"></div>
              
              {/* Profile image placeholder */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-primary/20 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                  alt="Aishi Mukhopadhyay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm text-primary">
              <Sparkles size={16} className="text-accent animate-pulse" />
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-tech">
              <span className="block text-foreground mb-2">Hi!</span>
              <span className="block text-foreground mb-2">I am</span>
              <span className="block gradient-text font-extrabold">
                Aishi.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              A creative professional crafting digital experiences that bridge 
              <span className="text-primary font-medium"> functionality </span>
              and
              <span className="text-accent font-medium"> artistry</span>. 
              With 3+ years of experience in design and development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button 
                onClick={scrollToAbout}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 font-medium backdrop-blur-sm"
              >
                Hire Me
              </button>
              <button className="px-8 py-4 border border-primary/30 bg-card/50 backdrop-blur-sm rounded-full hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-foreground font-medium">
                Download CV
              </button>
            </div>

            {/* Bottom links */}
            <div className="flex gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors duration-300"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors duration-300"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors duration-300"
              >
                Projects
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="animate-bounce p-3 rounded-full bg-card/30 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
          >
            <ArrowDown size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
