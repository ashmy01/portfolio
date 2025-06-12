
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "VeilX - AI based Redaction Website",
      description: "Contributed to the UI/UX design, ideation, and documentation of an AI-powered decentralized redaction and locker tool leveraging LLMs, computer vision, and IPFS for secure data handling and monetization.",
      tags: ["IPFS", "solidity", "Next.js", "Tailwind CSS","Gemini Pro","YOLOv5u"],
      image: "https://cdn.discordapp.com/attachments/1149352972644532365/1382328346326732821/image.png?ex=684ac118&is=68496f98&hm=c5ebd1716882ad7687c82098711bc71f9da1d7fe51191da2230d497906062ee4&",
      featured: true
    },
    {
      title: "BhuvanRKSHA",
      description: "Conducted data analysis, feature engineering, and Power BI dashboard creation to enhance threat detection through data-driven insights and collaboration with the development team.",
      tags: ["React Native", "Firebase", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      featured: false
    },
    // {
    //   title: "E-commerce Redesign",
    //   description: "Complete redesign and development of an e-commerce platform with focus on accessibility and performance.",
    //   tags: ["Next.js", "Tailwind", "Shopify", "Analytics"],
    //   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    //   featured: false
    // },
    // {
    //   title: "Data Visualization Dashboard",
    //   description: "Interactive dashboard for complex data analysis with real-time updates and custom visualizations.",
    //   tags: ["D3.js", "Python", "FastAPI", "WebSocket"],
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    //   featured: false
    // }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-tech">
            <span className="gradient-text">Selected Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my recent work, showcasing diverse challenges 
            and creative solutions across different domains.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ${
                project.featured ? 'lg:grid lg:grid-cols-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${project.featured ? 'lg:order-2' : 'h-64'}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-primary/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-3 bg-card/90 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/10 hover:border-primary/40 transition-all duration-200">
                    <ExternalLink size={16} className="text-primary" />
                  </button>
                  <button className="p-3 bg-card/90 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary/10 hover:border-primary/40 transition-all duration-200">
                    <Github size={16} className="text-primary" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {project.featured && (
                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                    Featured Project
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300 font-tech">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary rounded-full text-sm font-medium hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 font-medium group/btn">
                  View Project
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
