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


