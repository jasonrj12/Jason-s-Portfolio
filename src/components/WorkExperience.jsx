import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const workExperience = [
    {
      company: "Delivergate Pvt Ltd",
      position: "Product Support Officer",
      period: "April 2025 - Present",
      description: "Providing comprehensive product support and customer service while utilizing web technologies. Managing customer inquiries and delivering technical solutions with a focus on user satisfaction.",
      technologies: ["Customer Support", "HTML", "CSS", "JavaScript", "Web Design", "Graphics Design", "Product Support", "Customer Service"]
    },
    {
      company: "Innoroot Accounting and Technologies",
      position: "Graphics Designer",
      period: "August 2022 - May 2024",
      description: "Created engaging visual designs and graphics for various digital platforms. Designed user interfaces and marketing materials while maintaining brand consistency across all projects.",
      technologies: ["Graphics Design", "Figma", "Photoshop", "Web Design"]
    }
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-20 bg-white dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white mb-4">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            My professional journey and the roles I've taken on
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-zinc-800 rounded-2xl shadow-lg p-6 md:p-8 text-left hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-zinc-800 dark:text-white">
                      {job.position}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 mt-2 md:mt-0">
                    {job.period}
                  </p>
                </div>
                {job.description && (
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                    {job.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;

