import api from './axiosConfig';

export const login = async(data) =>{
    try{
        // send a POST request to the API to login
        const res = await api.post('/login/', data);
        return res.data;
    
    }catch(error){
        console.error("Error during login:", error);
        throw error;
    }
}