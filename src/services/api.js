import axios from 'axios';

export const api = axios.create({
  baseURL: "https://notes-api-02np.onrender.com"
});