import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Skills.css';

const Skills = ({ text }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('levelDesc'); // Padrão: Nível (maior-menor)

  const processedSkills = useMemo(() => {
    let filtered = text.list
      // 1. Filtro por Categoria
      .filter(skill => activeFilter === 'Todos' || skill.category === activeFilter)
      // 2. Filtro por Barra de Pesquisa
      .filter(skill => skill.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // 3. Ordenação
    const sortable = [...filtered];
    switch (sortType) {
      case 'levelDesc':
        sortable.sort((a, b) => b.level - a.level);
        break;
      case 'levelAsc':
        sortable.sort((a, b) => a.level - b.level);
        break;
      case 'nameAsc':
        sortable.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        sortable.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    return sortable;
  }, [text.list, activeFilter, searchTerm, sortType]);

  return (
    <section id="skills" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {text.title}
      </motion.h2>

      <div className="skills-controls">
        <input
          type="text"
          placeholder={text.searchPlaceholder}
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="sort-container">
          <label htmlFor="sort-select">{text.sortLabel}</label>
          <select 
            id="sort-select"
            className="sort-select" 
            value={sortType} 
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="levelDesc">{text.sortOptions.levelDesc}</option>
            <option value="levelAsc">{text.sortOptions.levelAsc}</option>
            <option value="nameAsc">{text.sortOptions.nameAsc}</option>
            <option value="nameDesc">{text.sortOptions.nameDesc}</option>
          </select>
        </div>
      </div>

      <div className="filter-buttons">
        {text.filters.map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div className="skills-container" layout>
        <AnimatePresence>
          {processedSkills.map((skill) => (
            <motion.div
              className="skill-item"
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
