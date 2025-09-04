import { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-green-950/70 backdrop-blur-md shadow-md shadow-green-900/20' 
          : 'bg-green-50/70 backdrop-blur-md shadow-md shadow-green-900/10'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="hidden md:flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            <span className={darkMode ? 'text-green-300' : 'text-green-700'}>Mohamad</span> Mortuz
          </a>
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={`hover:${darkMode ? 'text-green-300' : 'text-green-700'} transition-colors duration-300`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Space for theme button on desktop */}
            <div className="w-16"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} fixed inset-0 ${
          darkMode ? 'bg-gray-900/90' : 'bg-white/90'
        } backdrop-blur-md z-50`}>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col space-y-6 text-2xl text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={`hover:${darkMode ? 'text-green-300' : 'text-green-700'} transition-colors duration-300`}
                    onClick={handleNavLinkClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;