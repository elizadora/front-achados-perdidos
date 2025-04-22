import api from "./axiosConfig";

// Buscar todos os itens
export const getAllCategories = async () => {
    try {
        const response = await api.get(`/categorias`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        throw error;
    }
};