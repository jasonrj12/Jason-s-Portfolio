import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';

const roles = [
  'Graphic Designer',
  'Frontend Developer',
  'UI/UX Enthusiast',
  'Web Developer',
  'Web Designer',
  'Software Engineer',
];

const typingSpeed = 70;
const deletingSpeed = 40;
const pauseTime = 1200;

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If no target element, scroll to next section
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIdx];

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), pauseTime);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length - 1));
        }, deletingSpeed);
      } else {
        setTyping(true);
        setRoleIdx((roleIdx + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section className="relative min-h-screen w-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800">
      {/* Simplified animated background for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-indigo-100/30 dark:from-blue-900/10 dark:to-indigo-900/10"></div>
        
        {/* Reduced floating circles for mobile performance */}
        <div className="absolute top-1/4 -left-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 rounded-full bg-blue-300/20 dark:bg-blue-800/10 blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-indigo-300/20 dark:bg-indigo-800/10 blur-2xl sm:blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Grid pattern overlay - lighter on mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] sm:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:24px_24px] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col items-center justify-center text-center">
        {/* Profile image with animation - mobile optimized */}
        <div className="relative mb-6 sm:mb-8 group">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white dark:border-zinc-700 shadow-xl overflow-hidden relative">
            <img 
              src="/jasonrj.jpg" 
              alt="Renish Jason" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Show fallback when image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback gradient background */}
            <div className="w-full h-full bg-gradient-to-br from-blue-300 to-indigo-300 dark:from-blue-700 dark:to-indigo-700 flex items-center justify-center absolute inset-0" style={{ display: 'none' }}>
              <span className="text-white text-2xl sm:text-3xl font-bold">RJ</span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-blue-600 dark:bg-blue-500 p-2 sm:p-3 rounded-full shadow-lg">
            <FaReact className="text-white text-base sm:text-xl animate-spin" style={{ animationDuration: '10s' }} />
          </div>
        </div>

        {/* Title - responsive text sizing */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 leading-tight">
          Hi, I'm <span className="block sm:inline">Renish Jason</span>
        </h1>

        {/* Animated subtitle - mobile optimized */}
        <div className="min-h-[2rem] sm:min-h-[2.5rem] mb-6 sm:mb-8 w-full max-w-sm sm:max-w-none">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
            {displayed}
            <span className="ml-1 text-blue-600 dark:text-blue-400 animate-pulse">|</span>
          </p>
        </div>

        {/* Download CV button - mobile friendly */}
        <a
          href="/CV of E.R. Jason.pdf"
          download
          className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-6 sm:mb-8 group touch-manipulation"
        >
          <FiDownload className="text-base sm:text-lg group-hover:translate-y-[-2px] transition-transform" />
          Download CV
        </a>

        {/* Social links - mobile optimized */}
        <div className="flex gap-8 sm:gap-6">
          <a 
            href="https://github.com/jasonrj12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-3xl sm:text-2xl hover:scale-110 p-2 touch-manipulation"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/renish-jason" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-3xl sm:text-2xl hover:scale-110 p-2 touch-manipulation"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>

        {/* Scroll indicator - hidden on very small screens */}
        <div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block cursor-pointer group"
          onClick={() => smoothScrollTo('about')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              smoothScrollTo('about');
            }
          }}
          aria-label="Scroll to next section"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300">
            <div className="w-1 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Simplified animations for mobile */}
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .touch-manipulation {
          touch-action: manipulation;
        }
        
        @media (max-width: 640px) {
          .animate-spin {
            animation-duration: 15s !important;
          }
          
          html, body {
            overflow-x: hidden;
            width: 100%;
          }
        }
        
        /* Smooth scrolling for older browsers */
        @media (prefers-reduced-motion: no-preference) {
          :root {
            scroll-behavior: smooth;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;