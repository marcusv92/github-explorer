import React from 'react'; // Importa a biblioteca React
import ReactDOM from 'react-dom'; // Importa o componente ReactDOM do React
import App from './App'; // Importa o componente principal da aplicação

// Renderiza o componente principal da aplicação na página HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
