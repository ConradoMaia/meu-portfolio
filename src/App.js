import React, { useState } from 'react';

import jsPDF from 'jspdf';

import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

import './styles/App.css';
import { textContent } from './text';

function App() {
  const [language, setLanguage] = useState('pt');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const currentText = textContent[language] || textContent.pt;

  const exportToPdf = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const margin = 15;
    let y = 20;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const usableWidth = pageWidth - margin * 2;
    
    // --- CABEÇALHO ---
    pdf.setFontSize(22);
    pdf.setFont('helvetica', 'bold');
    pdf.text(currentText.about.name, margin, y);
    y += 8;

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(currentText.about.jobTitle, margin, y);
    y += 5;

    pdf.setFontSize(10);
    pdf.setTextColor(100);
    pdf.text("conrado.maiaheckler@gmail.com | 51 99261-4004", margin, y);
    y += 4;
    pdf.text("linkedin.com/in/conradomaiaheckler | github.com/ConradoMaia", margin, y);
    y += 10;

    // --- LINHA DIVISÓRIA ---
    pdf.setDrawColor(200);
    pdf.line(margin, y, pageWidth - margin, y);
    y += 10;

    // --- RESUMO ---
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(currentText.about.title, margin, y);
    y += 7;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const summaryLines = pdf.splitTextToSize(currentText.about.paragraph, usableWidth);
    pdf.text(summaryLines, margin, y);
    y += summaryLines.length * 4 + 5;

    // --- EXPERIÊNCIA ---
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(currentText.experience.title, margin, y);
    y += 7;

    pdf.setFontSize(10);
    currentText.experience.jobs.forEach(job => {
      pdf.setFont('helvetica', 'bold');
      pdf.text(job.role, margin, y);
      pdf.setFont('helvetica', 'normal');
      pdf.text(job.company, margin + 55, y);
      pdf.setFont('helvetica', 'italic');
      pdf.text(job.period, pageWidth - margin - 35, y);
      y += 5;

      pdf.setFont('helvetica', 'normal');
      job.tasks.forEach(task => {
        const taskLines = pdf.splitTextToSize(`• ${task}`, usableWidth - 2);
        pdf.text(taskLines, margin + 2, y);
        y += taskLines.length * 4;
      });
      y += 4;
    });

    // --- HABILIDADES ---
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(currentText.skills.pdfTitle, margin, y);
    y += 7;

    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    const skillsByCategory = {};
    currentText.skills.list.forEach(skill => {
        if (!skillsByCategory[skill.category]) {
            skillsByCategory[skill.category] = [];
        }
        skillsByCategory[skill.category].push(skill.name);
    });

    let skillText = '';
    for (const category in skillsByCategory) {
        skillText += `\n${category}: ${skillsByCategory[category].join(', ')}`;
    }
    const skillLines = pdf.splitTextToSize(skillText.trim(), usableWidth);
    pdf.text(skillLines, margin, y);
    y += skillLines.length * 3.5 + 5;


    // --- FORMAÇÃO ---
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(currentText.education.academicTitle, margin, y);
    y += 7;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    currentText.education.academic.forEach(edu => {
        pdf.setFont('helvetica', 'bold');
        pdf.text(edu.degree, margin, y);
        pdf.setFont('helvetica', 'normal');
        pdf.text(edu.institution, margin + 65, y);
        y += 5;
    });

    pdf.save("CV-Conrado-Heckler.pdf");
  };

  return (
    <div className="App">
      <Header
        text={currentText.header}
        onLanguageChange={handleLanguageChange}
        currentLanguage={language}
      />
      <main>
        <About 
          text={currentText.about} 
          onExportPdf={exportToPdf} 
        />
        <Experience text={currentText.experience} />
        <Skills text={currentText.skills} />
        <Projects text={currentText.projects} />
        <Education text={currentText.education} />
      </main>
      <Footer text={currentText.footer} />
    </div>
  );
}

export default App;