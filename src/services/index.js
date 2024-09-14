import axios from 'axios';

const token = localStorage.getItem("token");

export const atlantidaApi = axios.create({
  baseURL: 'http://201.23.16.247:3000/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  mode: "no-cors ",
});