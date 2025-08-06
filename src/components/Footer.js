import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = ({ text }) => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-social-links">
          <a href="https://linkedin.com/in/conradomaiaheckler" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ConradoMaia" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:conrado.maiaheckler@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} - {text.text}</p>
      </div>
    </footer>
  );
};

export default Footer;