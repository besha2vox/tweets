import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64023309302b5d671c3586c1.mockapi.io/',
});

export default instance;
