import React from 'react';
import '../styles/Experience.css';

const Experience = ({ text }) => {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--white-color)' }}>
      <h2 className="section-title">{text.title}</h2>
      <div className="timeline">
        {text.jobs.map((job, index) => (
          <div className="timeline-item" key={index}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;