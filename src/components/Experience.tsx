
import React, { useState } from 'react';
import { Calendar, MapPin, Award, Code, Palette, Zap } from 'lucide-react';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      title: "McKinsey Forward Program (2025)",
      company: "McKinsey & Company",
      location: "Remote",
      period: "May 2023 - Present",
      description: "Completed a 10-week intensive online program by McKinsey, building key workplace skills like adaptability, communication, problem-solving, and digital proficiency, while earning a digital badge and joining a global network of lifelong learners.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipelines"
      ],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "UI/UX Domain Lead",
      company: "GDG On Campus,HITK",
      location: "Kolkata, India",
      period: "September 2024 - July 2024",
      description: "Designed the official club website, led visual design for promotional materials, and contributed to the club magazine as part of the editorial team.",
      achievements: [
        "Increased user engagement by 60%",
        "Redesigned 3 major products",
        "Won UX Design Award 2023"
      ],
      icon: Palette,
      color: "from-purple-500 to-pink-500"
    },
    // {
    //   title: "Frontend Developer",
    //   company: "StartupXYZ",
    //   location: "New York, NY",
    //   period: "2021 - 2022",
    //   description: "Built responsive web applications and collaborated with cross-functional teams to deliver high-quality products.",
    //   achievements: [
    //     "Delivered 15+ projects on time",
    //     "Reduced load times by 50%",
    //     "Implemented modern tech stack"
    //   ],
    //   icon: Zap,
    //   color: "from-green-500 to-emerald-500"
    // }
  ];

  const achievements = [
    { title: "Hult Prize (on campus)-2nd Runners Up", year: "2025", organization: "Hult Prize Organization" },
    { title: "Winner - Bulliverse AI Agent Track Prize", year: "2024", organization: "Unfold by CoinDCX" },
    { title: "Top 50 Finalists - SIF Space Hackathon", year: "2024", organization: "ISRO" }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-tech">
            <span className="gradient-text">Experience & Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the milestones that have shaped my career
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 font-tech">Professional Experience</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className={`relative flex items-start gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeIndex === index 
                        ? 'bg-card/50 border-primary/30 shadow-xl shadow-primary/10' 
                        : 'bg-card/20 border-primary/10 hover:border-accent/20'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-[-18px] w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}>
                      <exp.icon size={20} className="text-white" />
                    </div>
                    
                    <div className="ml-6 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                        <div className="flex items-center gap-1 text-sm text-primary">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      {activeIndex === index && (
                        <div className="space-y-2 animate-fade-in">
                          <h5 className="text-sm font-medium text-accent">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 font-tech">Recognition & Awards</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <Award size={24} className="text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1 group-hover:gradient-text transition-all duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">{achievement.organization}</p>
                      <div className="text-primary font-medium text-sm">{achievement.year}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 text-center">
                  <div className="text-2xl font-bold gradient-text font-tech">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border border-accent/20 text-center">
                  <div className="text-2xl font-bold gradient-text font-tech">1.5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
