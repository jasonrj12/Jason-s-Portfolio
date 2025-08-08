import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const footer = document.querySelector('.modern-footer');
    if (footer) observer.observe(footer);
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/jasonrj12',
      icon: FiGithub,
      color: 'hover:bg-gray-800 hover:text-white',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/renish-jason-b96b8023b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: FiLinkedin,
      color: 'hover:bg-blue-600 hover:text-white',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/jason__rj/?igsh=MW16b3hpb3VycmF5eg%3D%3D#',
      icon: FiInstagram,
      color: 'hover:bg-pink-600 hover:text-white',
      gradient: 'from-pink-500 via-purple-500 to-orange-500'
    },
    {
      name: 'Facebook',
      href: 'https://web.facebook.com/jasonrj.jasonrj?mibextid=ZbWKwL&_rdc=1&_rdr#',
      icon: FaFacebookF,
      color: 'hover:bg-blue-700 hover:text-white',
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  const currentYear = new Date().getFullYear();

  // SVG pattern as a separate variable to avoid JSX conflicts
  const gridPattern = `data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white
          shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>

      <footer className="modern-footer relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: `url("${gridPattern}")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>



        <div className={`
          relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16
          transition-all duration-1000 transform
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          
          {/* Main Content */}
          <div className="text-center">
            {/* Brand/Logo */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Renish Jason
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Crafting digital experiences with passion and precision. Let's build something amazing together.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-12">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20
                      hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2
                      hover:shadow-2xl hover:shadow-blue-500/25
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    `}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      animationDelay: `${index * 100}ms`
                    }}
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    
                    {/* Hover Effect */}
                    <div className={`
                      absolute inset-0 rounded-2xl bg-gradient-to-r ${social.gradient}
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10
                    `}></div>
                  </a>
                );
              })}
            </div>



            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="px-4 bg-gradient-to-r from-gray-900 to-gray-800">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <FiHeart className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="text-white font-medium">Jason RJ</span>. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Made with <FiHeart className="inline w-3 h-3 text-red-400" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </footer>
    </>
  );
};

export default Footer;