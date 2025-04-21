import api from './axiosConfig';

export const login = async(data) =>{
    try{
        const res = await api.post('/api/login/', data);
        return res.data;
    
    }catch(error){
        return {
            success: false,
            message: error.response?.data?.message || "Erro ao fazer login",
            details: error.response?.data?.message || error.message
        };
    }
}