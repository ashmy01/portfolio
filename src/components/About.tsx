
import React from 'react';
import { Code, Palette, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Development', description: 'Full-stack web development with modern frameworks' },
    { icon: Palette, name: 'Design', description: 'UI/UX design with attention to detail and user experience' },
    { icon: Coffee, name: 'Strategy', description: 'Product strategy and digital transformation' },
    { icon: Heart, name: 'Passion', description: 'Bringing ideas to life with creativity and precision' }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate creative professional who believes in the power of 
                thoughtful design and clean code. My work sits at the intersection of 
                <span className="text-primary font-medium"> aesthetics and functionality</span>, 
                creating digital experiences that are both beautiful and purposeful.
              </p>
              <p>
                With a background in both design and development, I bring a unique 
                perspective to every project. I love solving complex problems with 
                <span className="text-accent font-medium"> elegant solutions</span> 
                and have a keen eye for the details that make the difference.
              </p>
              <p>
                When I'm not crafting digital experiences, you'll find me exploring 
                new creative techniques, reading about emerging technologies, or 
                enjoying a perfectly brewed cup of coffee.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group gradient-border"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg w-fit group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <skill.icon size={24} className="text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
