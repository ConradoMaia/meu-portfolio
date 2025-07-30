import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = ({ text, onExportPdf }) => {
  return (
    <motion.section
      id="about"
      className="section about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="section-title">{text.title}</h2>
      <p className="about-text">{text.paragraph}</p>
      
      <div className="contact-links">
        <a href="mailto:conrado.maiaheckler@gmail.com" target="_blank" rel="noopener noreferrer">conrado.maiaheckler@gmail.com</a>
        <span> | </span>
        <a href="tel:+51992614004">51 99261-4004</a>
        <span> | </span>
        <a href="https://linkedin.com/in/conradomaiaheckler" target="_blank" rel="noopener noreferrer">{text.linkedin}</a>
        <span> | </span>
        <a href="https://github.com/ConradoMaia" target="_blank" rel="noopener noreferrer">{text.github}</a>
      </div>

      <div className="about-buttons">
        <button onClick={onExportPdf} className="export-button">
          {text.title === "Sobre Mim" ? "Baixar Currículo (PDF)" : "Download Resume (PDF)"}
        </button>
      </div>
    </motion.section>
  );
};

export default About;
