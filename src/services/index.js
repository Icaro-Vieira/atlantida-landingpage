import axios from 'axios';

export const atlantidaApi = axios.create({
  baseURL: 'http://201.23.16.247:3000/api',
  headers: {
    'Content-Type': 'application/json',
  }
});
