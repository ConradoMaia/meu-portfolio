import React, { useState } from 'react';



import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

import './styles/App.css';
import { textContent } from './text';

import { motion } from 'framer-motion';

function App() {
  const [language, setLanguage] = useState('pt');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const currentText = textContent[language] || textContent.pt;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  

  return (
    <div className="App">
      <Header
        text={currentText.header}
        onLanguageChange={handleLanguageChange}
        currentLanguage={language}
      />
      <main className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <About 
            text={currentText.about} 
          />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Experience text={currentText.experience} />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Skills text={currentText.skills} />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Projects text={currentText.projects} />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Education text={currentText.education} />
        </motion.div>
      </main>
      <Footer text={currentText.footer} />
    </div>
  );
}

export default App;