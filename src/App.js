import React, { useState } from 'react';

// Bibliotecas para exportar PDF
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Import dos componentes
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

// Import do CSS global e textos
import './styles/App.css';
import { textContent } from './text'; // Central de textos para os idiomas

function App() {
  // Estado para controlar o idioma atual (padrão: português)
  const [language, setLanguage] = useState('pt');

  // Função para trocar o idioma
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  // Seleciona o objeto de texto com base no idioma atual
  const currentText = textContent[language];

  // Função que será chamada para exportar o conteúdo para PDF
  const exportToPdf = () => {
    // Seleciona o elemento que envolve todo o conteúdo a ser exportado
    const input = document.getElementById('portfolio-content');

    // Usa html2canvas para "tirar uma foto" do elemento
    html2canvas(input, { 
        scale: 2, // Aumenta a escala para melhorar a resolução da imagem
        useCORS: true // Permite que imagens de outras origens sejam carregadas
    }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        // Cria um novo documento PDF no formato A4
        const pdf = new jsPDF('p', 'mm', 'a4'); 
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        // Adiciona a imagem capturada ao PDF
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("Curriculo-Conrado-Heckler.pdf"); // Salva o arquivo
      });
  };


  return (
    // Div principal que será usada pela função de exportar para PDF
    <div id="portfolio-content">
      <div className="App">
        <Header
          text={currentText.header}
          onLanguageChange={handleLanguageChange}
          currentLanguage={language}
        />
        <main>
          {/* Passa a função de exportar como prop para o About */}
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