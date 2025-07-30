import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = ({ text }) => {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--white-color)' }}>
      <h2 className="section-title">{text.title}</h2>
      <div className="timeline">
        {text.jobs.map((job, index) => (
          <motion.div 
            className="timeline-item" 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <p className="timeline-date">{job.period}</p>
              <ul>
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;