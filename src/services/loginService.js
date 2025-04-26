import api from './axiosConfig';

export const login = async(data) =>{
    try{
        const res = await api.post('login/', data);
        return res.data;
    
    }catch(error){
        console.error("Error during login:", error);
        throw error;
    }
}