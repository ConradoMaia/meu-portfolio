import React from 'react';
import '../styles/Skills.css';

const Skills = ({ text }) => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">{text.title}</h2>
      <div className="skills-container">
        {text.list.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;