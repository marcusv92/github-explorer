import React from 'react'; // Importa a biblioteca React
import { BrowserRouter } from 'react-router-dom'; // Importa o componente BrowserRouter da biblioteca react-router-dom
import GlobalStyle from './styles/global'; // Importa o componente de estilos globais
import Routes from './routes'; // Importa o componente de rotas da aplicação

// Define o componente principal da aplicação
const App: React.FC = () => (
  <>
    {/* Define o componente de roteamento da aplicação */}
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    {/* Define o componente de estilos globais */}
    <GlobalStyle />
  </>
);

// Exporta o componente principal da aplicação
export default App;
