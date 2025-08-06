import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';
import profilePic from '../logo.svg'; // Placeholder, você pode trocar

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
      <div className="about-content">
        <motion.img 
          src={profilePic} 
          alt="Sua Foto" 
          className="about-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <div className="about-text-content">
          <p className="about-text">{text.paragraph}</p>
          <div className="contact-links">
            <a href="mailto:conrado.maiaheckler@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://linkedin.com/in/conradomaiaheckler" target="_blank" rel="noopener noreferrer">{text.linkedin}</a>
            <a href="https://github.com/ConradoMaia" target="_blank" rel="noopener noreferrer">{text.github}</a>
          </div>
          <div className="about-buttons">
            <button onClick={onExportPdf} className="export-button">
              {text.title === "Sobre Mim" ? "Baixar Currículo" : "Download Resume"}
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
