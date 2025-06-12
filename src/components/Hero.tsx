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
            <div className="relative w-[400px] h-[600px] mx-auto overflow-hidden">
              {/* Protruding image */}
              <img
                src="oisibgless.png"
                alt="Aishi Mukhopadhyay"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px] w-auto object-cover object-top z-20"
                style={{
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))',
                }}
              />

              {/* White mask using box-shadow trick */}
              <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] z-30"
                style={{
                  background: 'transparent',
                  boxShadow: '0 100px 0 40px rgb(var(--background))',
                  borderRadius: '25% 75% 53% 47% / 53% 42% 58% 47%',
                }}
              ></div>
              
              {/* Circle container */}
              <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary to-accent overflow-hidden border-4 border-primary/50"
                style={{
                  borderRadius: '25% 75% 53% 30% / 53% 42% 58% 47%',
                }}
              >
                {/* This image is clipped by the container */}
                <img 
                  src="me2.png"
                  alt=""
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px] w-auto object-cover object-top"
                />
              </div>
              
              {/* Circle border overlay */}
              <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] border-4 border-primary/30 z-10"
                style={{
                  borderRadius: '25% 75% 53% 30% / 53% 42% 58% 47%',
                }}
              ></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm text-primary">
              <Sparkles size={16} className="text-accent animate-pulse" />
              Available for new opportunities
            </div> */}
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-tech">
              <span className="block text-foreground mb-2">Hi! I am </span>
              
              <span className="block gradient-text font-extrabold">
                Aishi.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              A self-driven coder blending AI and Web3, building the future with 
              <span className="text-primary font-medium"> conviction </span>
              and
              <span className="text-accent font-medium"> clean commits</span>. 
              With 1+years of experience in design and development.
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
