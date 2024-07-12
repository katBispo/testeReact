// src/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const api = {
  post: (endpoint, data) => {
    return axios.post(`${BASE_URL}/${endpoint}`, data);
  },
  get: (endpoint) => {
    return axios.get(`${BASE_URL}/${endpoint}`);
  },
  put: (endpoint, data) => {
    return axios.put(`${BASE_URL}/${endpoint}`, data);
  },
  delete: (endpoint) => {
    return axios.delete(`${BASE_URL}/${endpoint}`);
  }
  // Outros métodos podem ser adicionados aqui
};

export default api;
