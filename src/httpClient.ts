import axios from "axios";

const instance = axios.create({
    baseURL: 'https://random-words-api.vercel.app/word',
});

export default instance;