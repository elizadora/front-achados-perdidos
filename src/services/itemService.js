import axios from 'axios';

// Cria uma instância do axios com a URL base da API
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // A URL base da API (que vem do arquivo .env)
});

// Função para pegar os itens
export const getItens = async () => {
  try {
    const response = await api.get('/api/itens'); // Endpoint para pegar os itens
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error("Erro ao buscar itens", error); // Log do erro
    throw error; // Repassa o erro para quem chamou a função
  }
};

// Função para criar um item
export const createItem = async (data) => {
  try {
    const response = await api.post('/api/itens/criar', data); // Endpoint para criar item
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error("Erro ao criar item", error); // Log do erro
    throw error; // Repassa o erro para quem chamou a função
  }
};

// Função para editar um item
export const updateItem = async (id, data) => {
  try {
    const response = await api.put(`/api/itens/editar/${id}`, data); // Endpoint para editar item
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error(`Erro ao editar item com ID ${id}`, error); // Log do erro
    throw error; // Repassa o erro para quem chamou a função
  }
};

// Função para excluir um item
export const deleteItem = async (id) => {
  try {
    const response = await api.delete(`/api/itens/deletar/${id}`); // Endpoint para excluir item
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error(`Erro ao excluir item com ID ${id}`, error); // Log do erro
    throw error; // Repassa o erro para quem chamou a função
  }
};
