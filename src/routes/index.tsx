import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard'; // Importa o componente Dashboard
import Repository from '../pages/Repository'; // Importa o componente Repository

// Define as rotas da aplicação
const Routes: React.FC = () => (
  <Switch>
    {/* Define a rota da página inicial da aplicação */}
    <Route path="/" exact component={Dashboard} />
    {/* Define a rota da página de um repositório específico */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

// Exporta o componente de rotas
export default Routes;
