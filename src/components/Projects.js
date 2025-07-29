import React from 'react';
import '../styles/Projects.css';

const Projects = ({ text }) => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--white-color)' }}>
      <h2 className="section-title">{text.title}</h2>
      <div className="projects-container">
        {text.items.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.awards && (
              <ul>
                {project.awards.map((award, i) => (
                  <li key={i}>🏅 {award}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;