import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(150);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        
        if (typedText.length === currentRole.length) {
          setIsDeleting(true);
          setDelay(1000); // Wait before deleting
        }
      } else {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        
        if (typedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
          setDelay(150);
        }
      }
    }, isDeleting ? 75 : delay);
    
    return () => clearTimeout(timeout);
  }, [typedText, roleIndex, isDeleting, delay, roles]);

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center pt-24 relative ${
        darkMode 
          ? 'bg-gradient-to-b from-green-950/40 to-transparent' 
          : 'bg-gradient-to-b from-green-50/40 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <p className={`text-lg mb-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Mohamad Mortuz
            </h1>
            <div className="h-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                <span className={darkMode ? 'text-green-300' : 'text-green-700'}>
                  {typedText}
                </span>
                <span className="animate-blink">|</span>
              </h2>
            </div>
            
            <p className="text-lg max-w-xl mb-8 opacity-90">
              A dedicated developer passionate about creating efficient and scalable applications, with expertise in Java, JavaScript, and web technologies.
            </p>
            
            <div className="flex gap-4 mb-8">
              <a 
                href="https://www.linkedin.com/in/mohamad-mortuz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3 rounded-full ${
                  darkMode 
                    ? 'bg-green-900/30 text-green-300 hover:bg-green-900/50' 
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                } transition-all duration-300 hover:scale-110`}
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/MohamadxMortuz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-3 rounded-full ${
                  darkMode 
                    ? 'bg-green-900/30 text-green-300 hover:bg-green-900/50' 
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                } transition-all duration-300 hover:scale-110`}
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:md.mortuz001@gmail.com" 
                className={`p-3 rounded-full ${
                  darkMode 
                    ? 'bg-green-900/30 text-green-300 hover:bg-green-900/50' 
                    : 'bg-green-100 text-green-800 hover:bg-green-200'
                } transition-all duration-300 hover:scale-110`}
              >
                <Mail size={24} />
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className={`px-6 py-3 rounded-full ${
                  darkMode 
                    ? 'bg-green-700 text-white hover:bg-green-600' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                } transition-colors duration-300 font-medium`}
              >
                Contact Me
              </a>
              <a 
                // href="/resume.pdf" 
                // download
                href="https://drive.google.com/file/d/18ibBGiHCpwtVTwc3Kca7wNygZVG-d4Vr/view?usp=sharing" 
                download
                target="_blank"
                rel="noopener noreferrer"

                className={`px-6 py-3 rounded-full ${
                  darkMode 
                    ? 'bg-transparent border border-green-700 text-green-300 hover:bg-green-900/30' 
                    : 'bg-transparent border border-green-600 text-green-700 hover:bg-green-50'
                } transition-colors duration-300 font-medium`}
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
            <div className={`relative w-72 h-72 rounded-full overflow-hidden border-4 ${
              darkMode ? 'border-green-700/50' : 'border-green-600/30'
            } shadow-xl`}>
              <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                <img 
                src="/public/images/IMG_0045.JPG" 
                alt="Mohamad Mortuz Profile" 
                className="w-full h-full object-cover"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;