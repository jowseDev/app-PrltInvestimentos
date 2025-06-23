import axios from 'axios';

const TOKEN = '9xfqW2GMuUye7uT5atR4Bo'; // Coloque seu token aqui

const API = axios.create({
  baseURL: 'https://brapi.dev/api',
  headers: {
    'Authorization': TOKEN
  }
});

export default API;
