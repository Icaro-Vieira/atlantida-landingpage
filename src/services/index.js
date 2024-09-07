import axios from 'axios';

const token = localStorage.getItem("token");

export const atlantidaApi = axios.create({
  // baseURL: 'http://ec2-54-236-98-121.compute-1.amazonaws.com:3000/api',
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://atlantida-api-new.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  mode: "no-cors ",
});