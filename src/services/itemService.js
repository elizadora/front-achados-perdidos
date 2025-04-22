import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const getAll = () => {
  return api.get('/items'); // ajuste conforme o endpoint real
};

const create = (data) => {
  return api.post('/items', data);
};

const update = (id, data) => {
  return api.put(`/items/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/items/${id}`);
};

export default {
  getAll,
  create,
  update,
  remove,
};
