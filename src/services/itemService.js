import api from "./axiosConfig";

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
        console.error("Erro ao criar item:", error);
        throw error;
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
        console.error("Erro ao atualizar item:", error);
        throw error;
    }
};

// Buscar todos os itens
export const getAllItems = async () => {
    try {
        const res = await api.get("/itens");
        return res.data;
    } catch (error) {
        console.error("Erro ao buscar itens:", error);
        throw error;
    }
};

// Buscar item por ID
export const getItemById = async (id) => {
    try {
        const res = await api.get(`/itens/${id}`);

        return res.data;
        
    } catch (error) {
        console.error("Erro ao buscar item:", error);
        throw error;
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
        console.error("Erro ao deletar item:", error);
        throw error;
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
        console.error("Erro ao buscar itens do usuário:", error);
        throw error;
    }
};
