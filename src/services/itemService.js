import api from "./axiosConfig"; // Certifique-se de ter a instância do axios configurada em api.js
import api from "./axiosConfig"; // Certifique-se de ter a instância do axios configurada em api.js

const itemService = {
  // Método para criar um novo item
  async createItem(data) {
    try {
      const res = await api.post('itens/', data);
      return res.data;
    } catch (error) {
      console.log("Error creating item", error);
      throw error;
    }
  },

  // Método para listar os itens recentes
  async getAll() {
  async getAll() {
    try {
      const res = await api.get('itens/');
      return res.data;
    } catch (error) {
      console.log("Error fetching recent items", error);
      throw error;
    }
  },

  // Método para buscar um item pelo ID
  async getItemById(id) {
    try {
      const res = await api.get(`/itens/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error fetching item by ID", error);
      throw error;
    }
  },

  // Método para editar um item
  async updateItem(id, data) {
    try {
      const res = await api.put(`itens/${id}`, data);
      return res.data;
    } catch (error) {
      console.log("Error updating item", error);
      throw error;
    }
  },

  // Método para excluir um item
  async deleteItem(id) {
    try {
      const res = await api.delete(`itens/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error deleting item", error);
      throw error;
    }
  },
};

export default itemService;
