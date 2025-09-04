import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: "Full Stack Development Using MERN Stack",
      issuer: "CipherSchools",
      date: "2022",
      link: "https://www.cipherschools.com/certificate/preview?id=66a76d5ed15c5abc1ea65eea",
      image: "/src/images/MERN.png"
    },
    {
      title: "Frontend",
      issuer: "Coursera",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/9V2QU8Z95P93",
      image: "/src/images/Frontend.png"
    },
    {
      title: "Server-side JavaScript with Node.js",
      issuer: "Coursera",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/8FKKPK2URD64",
      image: "/src/images/NodeJS.png"
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "2023",
      link: "https://www.hackerrank.com/certificates/7be683722e29",
      image: "/src/images/Python.png"
    },
    {
      title: "NPTEL Certification",
      issuer: "NPTEL",
      date: "2025",
      link: "https://drive.google.com/file/d/1HXeYy0ZzHKuFKXo55rU8D2GBk7E3Z72T/view",
      image: "/src/images/NPTEL.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-green-300' : 'text-green-700'
        }`}>
          Certifications
        </h2>
        
        <div className="relative">
          <div className={`rounded-xl overflow-hidden ${
            darkMode ? 'bg-green-900/30' : 'bg-green-50'
          } backdrop-blur-sm shadow-lg`}>
            <div className="grid md:grid-cols-2 min-h-[400px]">
              {/* Certificate Image */}
              <div className="h-64 md:h-full relative overflow-hidden">
                <img 
                  src={certifications[currentIndex].image} 
                  alt={certifications[currentIndex].title} 
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                />
                <div className={`absolute inset-0 ${
                  darkMode ? 'bg-gradient-to-t from-green-950/80 to-transparent' : 'bg-gradient-to-t from-green-900/40 to-transparent'
                }`}></div>
              </div>
              
              {/* Certificate Info */}
              <div className="p-8 flex flex-col justify-between min-h-[400px]">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{certifications[currentIndex].title}</h3>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`${
                      darkMode ? 'text-green-300' : 'text-green-700'
                    }`}>{certifications[currentIndex].issuer}</span>
                    <span className="opacity-80">{certifications[currentIndex].date}</span>
                  </div>
                  
                  <a 
                    href={certifications[currentIndex].link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-green-700 text-white hover:bg-green-600' 
                        : 'bg-green-600 text-white hover:bg-green-700'
                    } transition-colors duration-200`}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
                
                {/* Certificate indicator dots */}
                <div className="flex gap-2 mt-8">
                  {certifications.map((_, index) => (
                    <button 
                      key={index} 
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentIndex 
                          ? darkMode ? 'bg-green-300' : 'bg-green-700' 
                          : darkMode ? 'bg-green-800' : 'bg-green-200'
                      }`}
                      aria-label={`Go to certificate ${index + 1}`}
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
            aria-label="Previous certificate"
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
            aria-label="Next certificate"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Profiles & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-green-900/20' : 'bg-green-50/80'
            } backdrop-blur-sm`}>
              <h4 className="text-lg font-semibold mb-3">HackerRank Profile</h4>
              <p className="mb-4">Achieved 5-star rating in JavaScript on HackerRank, demonstrating proficiency in JavaScript programming concepts and problem-solving skills.</p>
              <a 
                href="https://www.hackerrank.com/profile/muhammad_meraj71" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`inline-flex items-center gap-2 ${
                  darkMode ? 'text-green-300 hover:text-green-200' : 'text-green-700 hover:text-green-800'
                }`}
              >
                <span>View Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
            
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-green-900/20' : 'bg-green-50/80'
            } backdrop-blur-sm`}>
              <h4 className="text-lg font-semibold mb-3">Continuous Learning</h4>
              <p className="mb-4">Regularly participating in coding challenges and completing courses to enhance technical skills and stay updated with industry best practices.</p>
              <a 
                href="https://www.hackerrank.com/profile/muhammad_meraj71" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`inline-flex items-center gap-2 ${
                  darkMode ? 'text-green-300 hover:text-green-200' : 'text-green-700 hover:text-green-800'
                }`}
              >
                <span>View Achievements</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;