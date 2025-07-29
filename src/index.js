import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa a biblioteca para "desenhar" o React na tela
import './index.css';                   // Importa estilos globais
import App from './App';                   // Importa seu componente principal

// 1. Encontra o <div> com id="root" no seu HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. "Desenha" (renderiza) o seu componente <App> dentro daquele <div>
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);