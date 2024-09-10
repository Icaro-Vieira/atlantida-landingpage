import axios from 'axios';

const token = localStorage.getItem("token");

export const atlantidaApi = axios.create({
  baseURL: 'https://atlanticamergulhos-aqgvcwhwg5bjdpff.brazilsouth-01.azurewebsites.net/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  mode: "no-cors ",
});