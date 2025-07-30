import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const Projects = ({ text }) => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--white-color)' }}>
      <h2 className="section-title">{text.title}</h2>
      <div className="projects-container">
        {text.items.map((project, index) => (
          <motion.div
            className="project-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-year">{project.year}</span>
            </div>
            <p>{project.description}</p>
            {project.awards && project.awards.length > 0 && (
              <ul>
                {project.awards.map((award, i) => (
                  <li key={i}>🏅 {award}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
