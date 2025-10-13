import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';  // ← Import Footer here
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  const [darkMode, setDarkMode] = useState(false);

  
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />  
    </div>
  );
}

export default App;
