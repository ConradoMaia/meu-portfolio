import React from 'react';
import '../styles/Header.css';

const Header = ({ text, onLanguageChange, currentLanguage }) => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="header-title">
          <h1>Conrado Maia Heckler</h1>
          <h2>Software Developer</h2>
        </div>
        <nav>
          <a href="#about">{text.nav.about}</a>
          <a href="#experience">{text.nav.experience}</a>
          <a href="#skills">{text.nav.skills}</a>
          <a href="#projects">{text.nav.projects}</a>
          <a href="#education">{text.nav.education}</a>
        </nav>
        <div className="language-switcher">
          <button
            onClick={() => onLanguageChange('pt')}
            className={currentLanguage === 'pt' ? 'active' : ''}
          >
            PT
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={currentLanguage === 'en' ? 'active' : ''}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
