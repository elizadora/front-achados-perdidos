import api from './axiosConfig';

// Function to create a new user
export const createUser = async (data) => {
    try{
        // Send a POST request to the API to create a new user
        const res = await api.post('/api/usuarios/criar/', data);
        return res.data;
    
    }catch(error){
        console.log("Erro ao criar usuário", error);
        throw error;
    }
};

// Function to get user details by ID
export const getUserById = async (id) => {
    try{
        // Send a GET request to the API to get user details by ID
        const res = await api.get(`/api/usuarios/${id}`);
        return res.data;
    
    }catch(error){
        console.log("Erro ao buscar usuário", error);
        throw error;
    }
}

// Function to update user data
export const updateUser = async (data) => {
    try{
        // Send a PUT request to the API to update user data
        const res = await api.put('/api/usuarios/atualizar/', data, {
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




