import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('all'); // all, education, work, certifications

  const timelineData = [
    {
      id: 1,
      type: 'work',
      title: 'Product Support Officer',
      organization: 'Delivergate Pvt Ltd',
      location: 'Sri Lanka',
      period: 'April 2025 - Present',
      date: '2025',
      description: 'Providing comprehensive product support and customer service while utilizing web technologies. Managing customer inquiries and delivering technical solutions with a focus on user satisfaction.',
      tags: ['Customer Support', 'Web Technologies', 'Product Support'],
      icon: FiBriefcase,
      color: 'blue'
    },
    {
      id: 2,
      type: 'work',
      title: 'Graphics Designer',
      organization: 'Innoroot Accounting and Technologies',
      location: 'Sri Lanka',
      period: 'August 2022 - May 2024',
      date: '2022-2024',
      description: 'Created engaging visual designs and graphics for various digital platforms. Designed user interfaces and marketing materials while maintaining brand consistency across all projects.',
      tags: ['Graphics Design', 'Figma', 'UI Design'],
      icon: FiBriefcase,
      color: 'indigo'
    },
   
    {
      id: 4,
      type: 'education',
      title: 'BSc (Hons) in Software Engineering',
      organization: 'Cardiff Metropolitan University',
      location: 'United Kingdom',
      period: '2025 – Present',
      date: '2025',
      description: 'Specialized in web development, software engineering, and information systems. Completed projects in full-stack development and UI/UX design.',
      tags: ['Web Development', 'Software Engineering', 'UI/UX'],
      icon: FiBook,
      color: 'purple'
    },
  {
    id: 3,
    type: 'education',
    title: 'HD in Computing and Software Engineering',
    organization: 'ICBT Campus',
    location: 'Colombo, Sri Lanka',
    period: 'September 2023 - February 2025',
    date: '2023-2025',
    description: 'Higher Diploma in Computing and Software Engineering, focusing on modern software development practices, programming fundamentals, and software engineering principles.',
    tags: ['Computing', 'Software Engineering', 'Programming'],
    icon: FiBook,
    color: 'green'
  }
];
  const filteredData = activeTab === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.type === activeTab);

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        border: 'border-blue-500',
        text: 'text-blue-600 dark:text-blue-400',
        icon: 'bg-blue-500',
        tagBg: 'bg-blue-100 dark:bg-blue-900/30',
        tagText: 'text-blue-700 dark:text-blue-300'
      },
      indigo: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        border: 'border-indigo-500',
        text: 'text-indigo-600 dark:text-indigo-400',
        icon: 'bg-indigo-500',
        tagBg: 'bg-indigo-100 dark:bg-indigo-900/30',
        tagText: 'text-indigo-700 dark:text-indigo-300'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        border: 'border-green-500',
        text: 'text-green-600 dark:text-green-400',
        icon: 'bg-green-500',
        tagBg: 'bg-green-100 dark:bg-green-900/30',
        tagText: 'text-green-700 dark:text-green-300'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        border: 'border-purple-500',
        text: 'text-purple-600 dark:text-purple-400',
        icon: 'bg-purple-500',
        tagBg: 'bg-purple-100 dark:bg-purple-900/30',
        tagText: 'text-purple-700 dark:text-purple-300'
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        border: 'border-orange-500',
        text: 'text-orange-600 dark:text-orange-400',
        icon: 'bg-orange-500',
        tagBg: 'bg-orange-100 dark:bg-orange-900/30',
        tagText: 'text-orange-700 dark:text-orange-300'
      }
    };
    return colors[color] || colors.blue;
  };

  const tabs = [
    { id: 'all', label: 'All', icon: FiCalendar },
    { id: 'work', label: 'Work', icon: FiBriefcase },
    { id: 'education', label: 'Education', icon: FiBook }
  ];

  return (
    <motion.section
      id="timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-20 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A timeline of my professional experience, education, and achievements
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-zinc-700 border border-gray-200 dark:border-zinc-700'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {filteredData.map((item, index) => {
              const colors = getColorClasses(item.color);
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full ${colors.icon} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`
                        bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-xl border-l-4 ${colors.border}
                        hover:shadow-2xl transition-all duration-300
                      `}
                    >
                      {/* Date Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-medium mb-3`}>
                        <FiCalendar className="w-3 h-3" />
                        {item.period}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-2">
                        {item.title}
                      </h3>

                      {/* Organization */}
                      <p className={`text-lg font-semibold ${colors.text} mb-2`}>
                        {item.organization}
                      </p>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-4">
                        <FiMapPin className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${colors.tagBg} ${colors.tagText}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-[calc(50%-4rem)]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-lg">
            HD in Computing and Software Engineering | Web Developer
          </p>
          <a
            href="/CV of E.R. Jason.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FiAward className="w-5 h-5" />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Timeline;

