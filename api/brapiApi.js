import axios from 'axios';

const TOKEN = '9xfqW2GMuUye7uT5atR4Bo';

const API = axios.create({
  baseURL: 'https://brapi.dev/api',
  headers: {
    'Authorization': TOKEN
  }
});

export default API;
