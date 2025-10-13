import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFirebase, SiTailwindcss, SiMysql, SiCplusplus, SiDotnet, SiSharp } from 'react-icons/si';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="w-8 h-8" color="#e44d26" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" color="#264de4" /> },
    { name: 'JavaScript...', icon: <FaJs className="w-8 h-8" color="#f7df1e" /> },
    { name: 'PHP', icon: <FaPhp className="w-8 h-8" color="#777bb3" /> },     
    { name: 'React', icon: <FaReact className="w-8 h-8" color="#61dafb" /> },
    { name: 'MySQL', icon: <SiMysql className="w-8 h-8" color="#4db33d" /> },
    { name: 'Firebase', icon: <SiFirebase className="w-8 h-8" color="#f58220" /> },
    { name: 'Figma', icon: <FaFigma className="w-8 h-8" color="#a259ff" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" color="#38bdf8" /> },
    { name: 'C++', icon: <SiCplusplus className="w-8 h-8" color="#00599C" /> },
    { name: '.NET', icon: <SiDotnet className="w-8 h-8" color="#512BD4" /> },
    { name: 'C#', icon: <SiSharp className="w-8 h-8" color="#239120" /> },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I've mastered and love working with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                bg-white dark:bg-zinc-700/30 p-6 rounded-xl shadow-sm
                border border-gray-100 dark:border-zinc-700/50
                transition-all duration-300 ease-in-out
                flex flex-col items-center
                ${hoveredSkill === index ? 
                  'transform -translate-y-2 shadow-lg border-blue-200 dark:border-blue-500/30' : 
                  'hover:shadow-md'}
              `}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`
                p-4 rounded-full bg-white dark:bg-zinc-800
                shadow-inner border border-gray-100 dark:border-zinc-700
                transition-transform duration-300
                ${hoveredSkill === index ? 'scale-110' : ''}
              `}>
                {skill.icon}
              </div>
              <h3 className={`
                mt-4 font-semibold text-gray-800 dark:text-gray-200
                transition-colors duration-300
                ${hoveredSkill === index ? 'text-blue-600 dark:text-blue-400' : ''}
              `}>
                {skill.name}
              </h3>
              {hoveredSkill === index && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-blue-500 rounded-full opacity-70"></div>
              )}
            </div>
          ))}
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-20 mix-blend-multiply"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-20 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;