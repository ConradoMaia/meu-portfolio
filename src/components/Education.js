import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Education.css';

const Education = ({ text }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        ease: 'easeOut'
      }
    })
  };

  return (
    <motion.section 
      id="education" 
      className="section"
    >
      <h2 className="section-title">{text.title}</h2>
      <div className="education-container">
        <motion.div 
          className="education-card"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h3>{text.academicTitle}</h3>
          {text.academic.map((item, index) => (
            <div className="education-item" key={index}>
              <h4>{item.degree}</h4>
              <p>{item.institution}</p>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="education-card"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h3>{text.coursesTitle}</h3>
          <ul className="courses-list">
            {text.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
