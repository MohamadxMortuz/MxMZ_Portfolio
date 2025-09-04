import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Particles from './components/Particles';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', String(!darkMode));
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    }
  }, []);

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <Particles darkMode={darkMode} />
      
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`p-2 rounded-full ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'} backdrop-blur-sm transition-all duration-300 hover:scale-110`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-16 z-50 md:right-4">
        <button 
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'} backdrop-blur-sm transition-all duration-300 hover:scale-110`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      <Navbar 
        darkMode={darkMode} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <main className="container mx-auto px-4 overflow-hidden">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      
      <footer className={`py-8 ${darkMode ? 'bg-green-950/30 text-green-200' : 'bg-green-100 text-green-800'} backdrop-blur-sm mt-20`}>
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Mohamad Mortuz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;