import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rocketnotes-api-lt42.onrender.com'
});
