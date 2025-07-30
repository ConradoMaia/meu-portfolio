import React, { useState } from 'react';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
    const input = document.getElementById('portfolio-content');
    html2canvas(input, { 
        scale: 2,
        useCORS: true
    }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("Curriculo-Conrado-Heckler.pdf");
      });
  };

  return (
    <div id="portfolio-content">
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
    </div>
  );
}

export default App;