import React, { useEffect, useState, useRef } from 'react';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import gsap from 'gsap';

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
  const floatingShapesRef = useRef([]);
  const gradientRef = useRef(null);
  const particlesRef = useRef([]);

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

  // GSAP Animations
  useEffect(() => {
    // Animate gradient background
    if (gradientRef.current) {
      gsap.to(gradientRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }

    // Animate floating shapes
    floatingShapesRef.current.forEach((shape, index) => {
      if (shape) {
        gsap.to(shape, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          rotation: "random(-15, 15)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      }
    });

    // Animate particles
    particlesRef.current.forEach((particle, index) => {
      if (particle) {
        gsap.to(particle, {
          y: -100,
          opacity: 0,
          duration: "random(2, 4)",
          repeat: -1,
          ease: "none",
          delay: index * 0.3
        });
      }
    });

    // Entrance animations
    gsap.from(".hero-content", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out"
    });

  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      {/* Tech-Themed Animated Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Rotating gradient orb */}
        <div 
          ref={gradientRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-15 dark:opacity-8 z-0"
        >
          <div className="absolute inset-0 bg-gradient-conic from-blue-400 via-indigo-400 to-cyan-400 dark:from-blue-600 dark:via-indigo-600 dark:to-cyan-600 blur-3xl"></div>
        </div>

        {/* Floating Code Snippets */}
        <div 
          ref={el => floatingShapesRef.current[0] = el}
          className="absolute top-20 left-[8%] bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200/50 dark:border-zinc-700/50 z-0 text-xs font-mono"
        >
          <div className="text-indigo-600 dark:text-indigo-400">const <span className="text-blue-600 dark:text-blue-400">dev</span> = () =&gt; &#123;</div>
          <div className="text-gray-600 dark:text-gray-400 ml-2">return <span className="text-green-600 dark:text-green-400">"awesome"</span>;</div>
          <div className="text-indigo-600 dark:text-indigo-400">&#125;;</div>
        </div>

        {/* Terminal Window */}
        <div 
          ref={el => floatingShapesRef.current[1] = el}
          className="absolute top-40 right-[12%] bg-gray-900/90 dark:bg-black/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-gray-700/50 z-0"
        >
          <div className="bg-gray-800/90 px-3 py-1 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="p-3 text-xs font-mono">
            <div className="text-green-400">$ npm run dev</div>
            <div className="text-gray-400">Server running...</div>
          </div>
        </div>

        {/* HTML Tag */}
        <div 
          ref={el => floatingShapesRef.current[2] = el}
          className="absolute bottom-32 left-[15%] bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-200/50 dark:border-zinc-700/50 z-0 text-sm font-mono"
        >
          <span className="text-gray-500 dark:text-gray-400">&lt;</span>
          <span className="text-blue-600 dark:text-blue-400">div</span>
          <span className="text-gray-500 dark:text-gray-400">&gt;</span>
          <span className="text-indigo-600 dark:text-indigo-400">Hello World</span>
          <span className="text-gray-500 dark:text-gray-400">&lt;/</span>
          <span className="text-blue-600 dark:text-blue-400">div</span>
          <span className="text-gray-500 dark:text-gray-400">&gt;</span>
        </div>

        {/* CSS Snippet */}
        <div 
          ref={el => floatingShapesRef.current[3] = el}
          className="absolute bottom-24 right-[18%] bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200/50 dark:border-zinc-700/50 z-0 text-xs font-mono"
        >
          <div className="text-yellow-600 dark:text-yellow-400">.design &#123;</div>
          <div className="text-gray-600 dark:text-gray-400 ml-2">
            <span className="text-blue-600 dark:text-blue-400">color</span>: 
            <span className="text-green-600 dark:text-green-400"> #creative</span>;
          </div>
          <div className="text-yellow-600 dark:text-yellow-400">&#125;</div>
        </div>

        {/* Floating Tech Symbols */}
        {[
          { symbol: '{ }', top: '15%', left: '25%' },
          { symbol: '</>', top: '25%', left: '75%' },
          { symbol: '< >', top: '70%', left: '10%' },
          { symbol: '[ ]', top: '60%', left: '85%' },
          { symbol: '( )', top: '35%', left: '5%' },
          { symbol: '=>', top: '80%', left: '70%' },
          { symbol: '{ }', top: '50%', left: '90%' },
          { symbol: '#', top: '45%', left: '8%' },
        ].map((item, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute text-2xl font-mono text-blue-400/20 dark:text-blue-300/10 z-0 select-none"
            style={{
              top: item.top,
              left: item.left,
            }}
          >
            {item.symbol}
          </div>
        ))}

        {/* Binary Rain Effect */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`binary-${i}`}
            ref={el => particlesRef.current[i + 8] = el}
            className="absolute text-xs font-mono text-green-400/15 dark:text-green-300/8 z-0 select-none"
            style={{
              left: `${5 + i * 8}%`,
              top: `${50 + Math.random() * 50}%`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px] opacity-10 dark:opacity-5 z-0"></div>
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-800/5 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-100/20 via-transparent to-transparent dark:from-indigo-800/5 z-0"></div>
      </div>

      {/* Content backdrop for better visibility */}
      <div className="absolute inset-0 z-20 bg-white/10 dark:bg-black/20 backdrop-blur-[3px]"></div>

      <div className="hero-content relative z-[999] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col items-center justify-center text-center">
        {/* Profile image with animation - mobile optimized */}
        <div className="relative mb-6 sm:mb-8 group z-[1000]">
          {/* White backdrop circle for visibility */}
          <div className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-full blur-2xl opacity-60 scale-110"></div>
          
          {/* Animated ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse z-[999]"></div>
          
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white dark:border-zinc-700 shadow-2xl shadow-blue-500/40 overflow-hidden bg-white dark:bg-zinc-800 z-[1000]">
            <img 
              src="/Google DP.jpg" 
              alt="Renish Jason" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-[1000]"
              onError={(e) => {
                // Show fallback when image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback gradient background */}
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-600 dark:to-indigo-800 flex items-center justify-center absolute inset-0" style={{ display: 'none' }}>
              <span className="text-white text-2xl sm:text-3xl font-bold">RJ</span>
            </div>
          </div>
          
          {/* React icon badge */}
          <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-gradient-to-br from-blue-600 to-indigo-600 p-2 sm:p-3 rounded-full shadow-xl z-[1001]">
            <FaReact className="text-white text-base sm:text-xl animate-spin" style={{ animationDuration: '10s' }} />
          </div>
        </div>

        {/* Title - responsive text sizing */}
        <h1 className="relative z-[1000] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400 leading-tight px-4 py-2 rounded-2xl" style={{ 
          filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }}>
          Hi, I'm <span className="block sm:inline">Renish Jason</span>
        </h1>

        {/* Animated subtitle - mobile optimized */}
        <div className="relative z-[1000] min-h-[2rem] sm:min-h-[2.5rem] mb-6 sm:mb-8 w-full max-w-sm sm:max-w-none px-4 py-2 rounded-xl bg-white/10 dark:bg-black/20">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-white font-medium" style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))' }}>
            {displayed}
            <span className="ml-1 text-blue-600 dark:text-blue-400 animate-pulse">|</span>
          </p>
        </div>

        {/* Download CV button - mobile friendly */}
        <a
          href="/CV of E.R. Jason.pdf"
          download
          className="relative z-[1000] flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-500 dark:via-indigo-500 dark:to-cyan-500 text-white font-medium rounded-full shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/70 transition-all duration-300 hover:-translate-y-1 mb-6 sm:mb-8 group touch-manipulation overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <FiDownload className="relative z-10 text-base sm:text-lg group-hover:translate-y-[-2px] transition-transform" />
          <span className="relative z-10">Download CV</span>
        </a>

        {/* Social links - mobile optimized */}
        <div className="relative z-[1000] flex gap-4">
          <a 
            href="https://github.com/jasonrj12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-full shadow-2xl shadow-gray-400/50 dark:shadow-black/50 hover:shadow-2xl transition-all duration-300 hover:scale-110 touch-manipulation border-2 border-gray-300 dark:border-zinc-600"
            aria-label="GitHub"
          >
            <FiGithub className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/renish-jason" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-full shadow-2xl shadow-gray-400/50 dark:shadow-black/50 hover:shadow-2xl transition-all duration-300 hover:scale-110 touch-manipulation border-2 border-gray-300 dark:border-zinc-600"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </a>
        </div>

        {/* Scroll indicator - hidden on very small screens */}
        <div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block cursor-pointer group z-[1000]"
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
          <div className="w-6 h-10 border-2 border-indigo-400 dark:border-indigo-500 rounded-full flex justify-center group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors duration-300 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm shadow-xl">
            <div className="w-1 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mt-2 animate-bounce group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Modern Styles */}
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

        /* Conic gradient */
        .bg-gradient-conic {
          background: conic-gradient(
            from 0deg,
            #3b82f6,
            #8b5cf6,
            #ec4899,
            #f59e0b,
            #3b82f6
          );
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
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

        /* Glass morphism effect */
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Hero;