import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lib-api-1.onrender.com'
});

export default api;