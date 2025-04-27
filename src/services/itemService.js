import api from "./axiosConfig";
import { handleApiError } from "../utils/handleApiError";

// Criar item (requer auth)
export const createItem = async (data) => {
    try {
        const res = await api.post('/itens/criar/', data, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        handleApiError(error);
    }
  };

// Atualizar item (requer auth)
export const updateItem = async (id, data) => {
    try {
        const res = await api.put(`/itens/atualizar/${id}`, data, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Buscar todos os itens
export const getAllItems = async () => {
    try {
        const res = await api.get("/itens");
        return res.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Buscar item por ID
export const getItemById = async (id) => {
    try {
        const res = await api.get(`/itens/${id}`);

        return res.data;
        
    } catch (error) {
        handleApiError(error);
    }
};

// Excluir item (requer auth)
export const deleteItem = async (id) => {
    try {
        const res = await api.delete(`/itens/deletar/${id}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.status === 204;
    } catch (error) {
        handleApiError(error);
    }
};

// Buscar itens do usuário autenticado
export const getUserItems = async () => {
    try {
        const res = await api.get(`/itens/conta/meus-itens/`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res.data;
    } catch (error) {
        handleApiError(error);
    }
};
