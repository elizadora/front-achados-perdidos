import api from './axiosConfig';

// function to create a new user
export const createUser = async (data) => {
    try{
        // send a POST request to the API to create a new user
        const res = await api.post('/usuarios/criar/', data);
        return res.data;
    
    }catch(error){
        console.log("Erro ao criar usuário", error);
        throw error;
    }
};

// function to get user details by ID
export const getUserById = async (id) => {
    try{
        // send a GET request to the API to get user details by ID
        const res = await api.get(`/usuarios/${id}`);
        return res.data;
    
    }catch(error){
        console.log("Erro ao buscar usuário", error);
        throw error;
    }
}

// function to update user data
export const updateUser = async (data) => {
    try{
        // send a PUT request to the API to update user data
        const res = await api.put('/usuarios/atualizar/', data, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            },

        });
        return res.data;
    
    }catch(error){
        console.log("Erro ao atualizar usuário", error);
        throw error;
    }
}


// function to delete a user
export const deleteUser = async () => {
    try{
        // send a DELETE request to the API to delete a user
        // first delete the items 
        const myItems = await api.get('/itens/conta/meus-itens/', {
            headers: { 
                'authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        });

        const items = myItems.data.data;
        console.log("Itens do usuário", items);

        // loop to delete all items by user 
        for (const item of items) {
            console.log("Deletando item", item);
            await api.delete(`/itens/deletar/${item.id}`, {
                headers: {
                    'authorization' : `Bearer ${localStorage.getItem("token")}`
                }
            });
        }

        // then delete the user
        const res = await api.delete('/usuarios/deletar/', {
            headers: {
                'authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        });

        return res.data;
    
    }catch(error){
        console.log("Erro ao deletar usuário", error);
        throw error;
    }
}

