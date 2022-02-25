import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: "http://10.0.0.102:3333", //process.env.REACT_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  credentials: '*',
});

// only if jwt is enabled
api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;