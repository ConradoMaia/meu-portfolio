import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Education.css';

const Education = ({ text }) => {
  return (
    <motion.section 
      id="education" 
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="section-title">{text.title}</h2>
      <div className="education-container">
        <div className="education-column">
          <h3>{text.academicTitle}</h3>
          {text.academic.map((item, index) => (
            <div className="education-item" key={index}>
              <h4>{item.degree}</h4>
              <p>{item.institution}</p>
            </div>
          ))}
        </div>
        <div className="education-column">
          <h3>{text.coursesTitle}</h3>
          <ul className="courses-list">
            {text.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
