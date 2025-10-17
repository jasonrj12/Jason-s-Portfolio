import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const links = [
    { href: '#hero', label: 'Home', id: 'hero' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#timeline', label: 'Timeline', id: 'timeline' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Active section detection - find the section that's most visible in viewport
      const sections = links.map(link => link.id);
      let currentSection = null;
      let maxVisibility = 0;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
          const visibilityRatio = visibleTop / viewportHeight;
          
          // Prioritize sections in the top third of the viewport
          if (rect.top <= viewportHeight / 3 && rect.bottom > 0 && visibilityRatio > maxVisibility) {
            maxVisibility = visibilityRatio;
            currentSection = section;
          }
        }
      });
      
      // Fallback to first section if at the very top
      if (window.scrollY < 100) {
        currentSection = 'hero';
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Custom Logo Component
  const Logo = ({ className = "" }) => (
    <svg
      className={`w-8 h-8 sm:w-10 sm:h-10 ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
      
      {/* R Letter */}
      <path
        d="M12 12h6c2.5 0 4.5 1.5 4.5 3.5s-1.5 3.5-3.5 3.5l4 8h-3l-3.5-7.5H15V28h-3V12zm3 2.5v5h3c1 0 1.5-.5 1.5-1.5v-2c0-1-.5-1.5-1.5-1.5h-3z"
        fill="white"
      />
      
      {/* J Letter */}
      <path
        d="M24 12h3v12c0 2.5-2 4-4.5 4s-4.5-1.5-4.5-4h3c0 .5.5 1 1 1s1-.5 1-1V12z"
        fill="white"
      />
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <>
      {/* Navbar */}
      <nav className={`
        fixed top-0 w-full z-[2000] transition-all duration-500 ease-out
        ${scrolled ? 
          'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-white/5' : 
          'bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md'
        }
        border-b border-gray-200/20 dark:border-zinc-700/20
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Brand */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {/* Logo */}
              <div className="relative">
                <div className="transition-all duration-300 group-hover:scale-110">
                  <Logo className="drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
              </div>
              
              {/* Name */}
              <div className="hidden sm:block">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  RENISH <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">JASON</span>
                </h2>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 bg-gray-100/70 dark:bg-zinc-800/70 rounded-full p-1 backdrop-blur-sm">
                {links.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(link.href)}
                    className={`
                      relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${activeSection === link.id
                        ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-zinc-700/50'
                      }
                    `}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                    
                    {/* Hover effect */}
                    {hoveredLink === index && activeSection !== link.id && (
                      <div className="absolute inset-0 bg-white/30 dark:bg-zinc-600/30 rounded-full transition-all duration-300" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative w-10 h-10 rounded-xl bg-gray-100/70 dark:bg-zinc-800/70 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-gray-200/70 dark:hover:bg-zinc-700/70"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col items-center justify-center">
                <span className={`
                  block h-0.5 w-5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300
                  ${menuOpen ? 'rotate-45 translate-y-0.5' : ''}
                `} />
                <span className={`
                  block h-0.5 w-5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 mt-1
                  ${menuOpen ? 'opacity-0' : ''}
                `} />
                <span className={`
                  block h-0.5 w-5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 mt-1
                  ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}
                `} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-out z-[2001]
          ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}>
          <div className="mx-4 mt-2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 dark:shadow-white/10 border border-gray-200/50 dark:border-zinc-700/50 overflow-hidden">
            <div className="p-4 space-y-1">
              {links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className={`
                    w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300
                    ${activeSection === link.id
                      ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/70 dark:hover:bg-zinc-800/70'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${activeSection === link.id 
                        ? 'bg-white shadow-lg' 
                        : 'bg-gray-300 dark:bg-gray-600'
                      }
                    `} />
                    {link.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[1990] md:hidden transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;