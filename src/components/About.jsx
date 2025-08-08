import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
  return (
    <section
      id="about"
      className="w-full py-24 bg-white dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center" data-aos="fade-up">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-800 dark:text-white mb-6">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl mx-auto">
          Get to know who I am, what I do, and what I love.
        </p>

        {/* Content Box */}
        <div className="bg-gray-50 dark:bg-zinc-800 rounded-2xl shadow-xl p-6 sm:p-10 md:p-12 max-w-4xl mx-auto text-left space-y-6">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed" data-aos="fade-right">
            Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Renish Jason</span>, a passionate Web Developer with a knack for creating innovative solutions and amazing user experiences. I specialize in designing user-friendly and responsive websites, focusing on aesthetics, usability, and modern design trends.
          </p>
          
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed" data-aos="fade-left">
            I'm a dedicated web developer focused on building clean, modern, and responsive web experiences using <strong className="text-blue-600 dark:text-blue-400">React</strong>, <strong className="text-blue-600 dark:text-blue-400">JavaScript</strong>, and other frontend tools. With skills in <strong className="text-blue-600 dark:text-blue-400">Graphic Design</strong>, <strong className="text-blue-600 dark:text-blue-400">Web Design</strong>, and <strong className="text-blue-600 dark:text-blue-400">HTML</strong>, I bring creativity and technical expertise to every project I undertake.
          </p>
          
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed" data-aos="fade-right">
            I love creating user interfaces that are both functional and visually pleasing. My interests lie in <strong className="text-blue-600 dark:text-blue-400">UI/UX design</strong>, performance optimization, and building seamless user experiences.
          </p>
          
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed" data-aos="fade-left">
            When I'm not coding, I enjoy exploring design trends, reading tech blogs, and having a good cup of coffee. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;