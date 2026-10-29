import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6ae0c8cfbe3bc8fead97ea6e.mockapi.io/api/v1'
});

export default api;