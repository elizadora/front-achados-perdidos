import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const getAllItems = () => api.get('/itens');

export default {
  getAllItems,
};
