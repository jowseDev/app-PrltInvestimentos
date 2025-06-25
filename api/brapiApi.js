import axios from 'axios';
import { API_TOKEN } from '@env';

const API = axios.create({
  baseURL: 'https://brapi.dev/api',
  headers: {
    'Authorization': API_TOKEN,
  },
});

export default API;