import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A comprehensive  Printing Website with Customizable Items platform based on frameworks like PHP, HTML, CSS, JavaScript for front-end development.",
      technologies: ["PHP", "MySQL", "HTML","CSS", "JavaScript"],
      repoLink: "https://github.com/MohamadxMortuz/PHP_Project",
      liveLink: "",
      image: "/images/Picture1.png"
    },
    {
      title: "Notes App",
      description: "A feature-rich notes application that allows users to create, read, update, and delete notes with a clean and intuitive interface.",
      technologies: [ "MongoDB","Express", "React.js", "Node.js"],
      repoLink: "https://github.com/MohamadxMortuz/NotesAppMain",
      liveLink: "",
      image: "/images/NotesAppMZ.png"
    },
    {
      title: "Medicare-AI",
      description: "Developed an AI-based Health Diagnosis Website for users to assess health conditions and generate diagnosis reports using Gemini API.",
     technologies: ["Node.js","MongoDB", "JavaScript","ReactJs"],
      repoLink: "https://github.com/MohamadxMortuz/Project-CA3-INT-222",
      liveLink: "",
      image: "/images/MediCare.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-green-300' : 'text-green-700'
        }`}>
          Projects
        </h2>
        
        <div className="relative">
          <div className={`rounded-xl overflow-hidden ${
            darkMode ? 'bg-green-900/30' : 'bg-green-50'
          } backdrop-blur-sm shadow-lg`}>
            <div className="grid md:grid-cols-2">
              {/* Project Image */}
              <div className="h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className={`absolute inset-0 ${
                  darkMode ? 'bg-gradient-to-t from-green-950/80 to-transparent' : 'bg-gradient-to-t from-green-900/40 to-transparent'
                }`}></div>
              </div>
              
              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{projects[currentIndex].title}</h3>
                <p className="text-lg mb-6 opacity-90">{projects[currentIndex].description}</p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode 
                            ? 'bg-green-800/50 text-green-200' 
                            : 'bg-green-200 text-green-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {projects[currentIndex].repoLink && (
                    <a 
                      href={projects[currentIndex].repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        darkMode 
                          ? 'bg-green-800/50 text-green-200 hover:bg-green-800/70' 
                          : 'bg-green-200 text-green-800 hover:bg-green-300'
                      } transition-colors duration-200`}
                    >
                      <Github size={18} />
                      <span>Repository</span>
                    </a>
                  )}
                  
                  {projects[currentIndex].liveLink && (
                    <a 
                      href={projects[currentIndex].liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                        darkMode 
                          ? 'bg-green-700 text-white hover:bg-green-600' 
                          : 'bg-green-600 text-white hover:bg-green-700'
                      } transition-colors duration-200`}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
                
                {/* Project indicator dots */}
                <div className="flex gap-2 mt-8">
                  {projects.map((_, index) => (
                    <button 
                      key={index} 
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentIndex 
                          ? darkMode ? 'bg-green-300' : 'bg-green-700' 
                          : darkMode ? 'bg-green-800' : 'bg-green-200'
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className={`absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full ${
              darkMode 
                ? 'bg-green-900/50 text-green-300 hover:bg-green-900/70' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            } transition-colors duration-200`}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className={`absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full ${
              darkMode 
                ? 'bg-green-900/50 text-green-300 hover:bg-green-900/70' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            } transition-colors duration-200`}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;