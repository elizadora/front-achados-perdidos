import api from "./axiosConfig"; // Certifique-se de ter a instância do axios configurada em api.js

const itemService = {
  // Método para criar um novo item
  async createItem(data) {
    try {
      const res = await api.post('/api/itens', data);
      return res.data;
    } catch (error) {
      console.log("Error creating item", error);
      throw error;
    }
  },

  // Método para listar os itens recentes
  async getRecentItems() {
    try {
      const res = await api.get('/api/itens/recentes');
      return res.data;
    } catch (error) {
      console.log("Error fetching recent items", error);
      throw error;
    }
  },

  // Método para buscar um item pelo ID
  async getItemById(id) {
    try {
      const res = await api.get(`/api/itens/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error fetching item by ID", error);
      throw error;
    }
  },

  // Método para editar um item
  async updateItem(id, data) {
    try {
      const res = await api.put(`/api/itens/${id}`, data);
      return res.data;
    } catch (error) {
      console.log("Error updating item", error);
      throw error;
    }
  },

  // Método para excluir um item
  async deleteItem(id) {
    try {
      const res = await api.delete(`/api/itens/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error deleting item", error);
      throw error;
    }
  },
};

export default itemService;
