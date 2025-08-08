import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiArrowRight, FiCode, FiStar } from 'react-icons/fi';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const projects = [
    {
      title: 'Care Compass HMS',
      subtitle: 'Hospital Management System',
      description: 'A modern hospital management system built with React and Node.js, featuring patient management, appointment scheduling, and medical records.',
      image: './public/care compass.jpg',
      link: 'https://github.com/jasonrj12/CareCompass-Hospital-website',
      tags: ['HTML', 'CSS', 'MYSQL', 'JavaScript', 'PHP'],
      status: 'completed'
    },
    {
      title: 'FitZone Fitness Center',
      subtitle: 'Fitness Management Platform',
      description: 'A full-stack fitness center application with membership management, workout tracking, and trainer scheduling.',
      image: './public/fitzone.jpg',
      link: '#',
      tags: ['HTML', 'Tailwind CSS', 'MYSQL', 'JavaScript', 'PHP'],
      status: 'completed'
    },
    {
      title: 'PillsStation',
      subtitle: 'Pharmacy Management',
      description: 'Comprehensive pharmacy management system with inventory tracking, prescription management, and automated alerts.',
      image: './public/pill station.jpg',
      link: 'https://github.com/jasonrj12/Pharmacy-website-devolopment',
      tags: ['HTML', 'Tailwind CSS', 'MYSQL', 'JavaScript', 'PHP'],
      status: 'completed'
    },
    {
      title: 'GreenLife Wellness Center',
      subtitle: 'Wellness & Appointment System',
      description: 'Wellness center website with appointment booking system, service management, and client portal.',
      image: './public/greenlife wellness.jpg',
      link: 'https://github.com/jasonrj12/Greenlife-Wellness-Center-Website',
      tags: ['HTML', 'CSS', 'MYSQL', 'JavaScript', 'PHP'],
      status: 'completed'
    },
  ];

  const getStatusColor = (status) => {
    return 'bg-gradient-to-r from-green-500 to-emerald-500';
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <FiCode className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that make a difference. Each project represents a unique challenge solved with modern technologies and innovative thinking.
          </p>
        </div>



        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`
                group relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-3xl overflow-hidden
                transition-all duration-500 ease-out cursor-pointer
                ${hoveredProject === index 
                  ? 'transform -translate-y-4 shadow-2xl shadow-blue-500/20 scale-[1.02]' 
                  : 'shadow-lg hover:shadow-xl'
                }
                border border-gray-200/50 dark:border-zinc-700/50
              `}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 flex items-center gap-1">
                  Completed
                </div>
              </div>

              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`
                    w-full h-full object-cover transition-all duration-700
                    ${hoveredProject === index ? 'scale-110' : 'scale-100'}
                  `}
                />
                
                {/* Hover Overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-blue-600/90 via-purple-600/50 to-transparent
                  flex items-end p-6 z-20
                  transition-all duration-500
                  ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}
                `}>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wide">
                    {project.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-all duration-200"
                  >
                    View Project 
                    <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/jasonrj12"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FiGithub className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Explore More Projects
              <FiArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-white dark:hover:bg-zinc-700 transition-all duration-300 border border-gray-200 dark:border-zinc-600 hover:border-blue-300 dark:hover:border-blue-500"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;