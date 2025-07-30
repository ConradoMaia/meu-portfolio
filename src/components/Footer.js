import React from 'react';
import '../styles/Footer.css';

const Footer = ({ text }) => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} - {text.text}</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/conradomaiaheckler" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ConradoMaia" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;