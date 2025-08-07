import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/About.css';
import profilePic from '../profile.jpg';

const About = ({ text }) => {
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
          <div className="about-text-wrapper">
            <p className="about-text">{text.paragraph}</p>
          </div>
          <div className="about-contact-wrapper">
            <div className="contact-links">
              <a href="mailto:conrado.maiaheckler@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://linkedin.com/in/conradomaiaheckler" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ConradoMaia" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
