import axios from 'axios'; // Importa a biblioteca axios

// Cria uma instância da biblioteca axios com a baseURL da API do GitHub
const api = axios.create({
  baseURL: 'https://api.github.com',
});

// Exporta a instância da API criada
export default api;
